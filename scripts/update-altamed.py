#!/usr/bin/env python3
"""Install a verified GitHub build with preview checks and rollback; no VPS build."""
import argparse
import fcntl
import hashlib
import json
import os
import re
import shutil
import signal
import subprocess
import sys
import tarfile
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path, PurePosixPath

APP = Path('/var/www/altamed-sait')
UPDATES = Path('/var/www/altamed-updates')
BACKUPS = Path('/root/altamed-deploy-backups')
PROCESS = 'altamed-sait'
REPOSITORY = 'Vlad-a-1132/Al-sait'
OPENER = urllib.request.build_opener(urllib.request.ProxyHandler({}))


def run(args, cwd=APP, **kwargs):
    return subprocess.run(args, cwd=cwd, check=True, **kwargs)


def git(*args):
    return subprocess.check_output(['git', *args], cwd=APP, text=True).strip()


def write_json(path, value):
    temporary = path.with_suffix('.tmp')
    temporary.write_text(json.dumps(value, indent=2) + '\n')
    os.replace(temporary, path)


def extract_bundle(archive, destination):
    """Reject paths/links that could escape the private staging directory."""
    with tarfile.open(archive, 'r:gz') as bundle:
        members = bundle.getmembers()
        for member in members:
            name = PurePosixPath(member.name)
            if name.is_absolute() or '..' in name.parts or not name.parts:
                raise RuntimeError('Unsafe archive path')
            if name.parts[0] not in {'.next', 'node_modules', 'package.json', 'package-lock.json', 'deploy-manifest.json'}:
                raise RuntimeError('Unexpected archive content: ' + member.name)
            if not (member.isfile() or member.isdir() or member.issym() or member.islnk()):
                raise RuntimeError('Unsupported archive entry')
            if member.issym() or member.islnk():
                target = (destination / member.name).parent / member.linkname if member.issym() else destination / member.linkname
                if not target.resolve().is_relative_to(destination.resolve()):
                    raise RuntimeError('Unsafe archive link')
        # The destination is new and empty; all links were checked before extraction.
        bundle.extractall(destination, members=members)


def http_status(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'AltamedDeployHealth/1.0'})
    try:
        with OPENER.open(request, timeout=8) as response:
            response.read(1024)
            return response.status
    except urllib.error.HTTPError as error:
        return error.code


def health(port, attempts=20):
    routes = [('/', 200), ('/about', 200), ('/contacts', 200), ('/admin/login', 200), ('/imaging', 200), ('/api/prices/categories', 200), ('/api/imaging/session', 401)]
    last = ''
    for _ in range(attempts):
        try:
            for route, expected in routes:
                actual = http_status('http://127.0.0.1:' + str(port) + route)
                if actual != expected:
                    raise RuntimeError(route + ': HTTP ' + str(actual) + ', expected ' + str(expected))
            return
        except (OSError, RuntimeError) as problem:
            last = str(problem)
            time.sleep(1)
    raise RuntimeError('Health check failed: ' + last)


def https_health():
    run(['curl', '--noproxy', '*', '--fail', '--silent', '--show-error', '--max-time', '20', '--resolve', 'altamed-c.ru:443:127.0.0.1', '-o', '/dev/null', 'https://altamed-c.ru/'])


def restart():
    # Next reads .env.local again; do not copy shell credentials into PM2's environment.
    run(['pm2', 'restart', PROCESS], stdout=subprocess.DEVNULL)


def rollback(backup):
    info = json.loads((backup / 'state.json').read_text())
    if info['app'] != str(APP) or git('rev-parse', 'HEAD') not in {info['before'], info['target']}:
        raise RuntimeError('Rollback refused: unexpected checkout')
    run(['git', 'reset', '--keep', info['before']], stdout=subprocess.DEVNULL)
    for name in ['.next', 'node_modules']:
        previous = backup / name
        if previous.exists():
            current = APP / name
            if current.exists():
                failed = backup / ('failed-' + name.replace('.', '') + '-' + str(time.time_ns()))
                os.replace(current, failed)
            os.replace(previous, current)
    restart()
    health(3000)
    https_health()
    run(['pm2', 'save'], stdout=subprocess.DEVNULL)
    info['rolled_back'] = True
    write_json(backup / 'state.json', info)
    print('Предыдущая версия восстановлена.', flush=True)


def download(url, destination):
    with OPENER.open(urllib.request.Request(url, headers={'User-Agent': 'AltamedUpdater/1.0'}), timeout=120) as response, destination.open('wb') as output:
        shutil.copyfileobj(response, output, 1024 * 1024)


def update(args):
    before = git('rev-parse', 'HEAD')
    if git('diff', '--cached', '--name-only'):
        raise RuntimeError('В индексе Git есть несохранённые изменения. Обновление остановлено.')
    dirty = set(git('diff', '--name-only').splitlines())
    if dirty - {'data/appointments.json'}:
        raise RuntimeError('Есть изменения файлов сайта: ' + ', '.join(sorted(dirty - {'data/appointments.json'})))
    run(['git', 'fetch', '--no-tags', 'origin', 'master'])
    target = git('rev-parse', 'refs/remotes/origin/master')
    run(['git', 'merge-base', '--is-ancestor', before, target])
    changes = set(git('diff', '--name-only', before, target).splitlines())
    if 'data/appointments.json' in changes:
        raise RuntimeError('Коммит изменяет файл записей пациентов. Автоматическая замена запрещена.')
    pm2 = json.loads(subprocess.check_output(['pm2', 'jlist'], text=True))
    process = next((p for p in pm2 if p['name'] == PROCESS), None)
    if not process or process['pm2_env']['pm_cwd'] != str(APP) or process['pm2_env']['status'] != 'online':
        raise RuntimeError('Неожиданная конфигурация процесса сайта.')
    if args.check:
        print('Текущий коммит: ' + before + '\nПоследний в GitHub: ' + target)
        print('Готовая сборка: https://github.com/' + REPOSITORY + '/releases/tag/site-build-' + target)
        return
    if target == before and (APP / '.next/BUILD_ID').read_text().strip() == target:
        health(3000)
        print('Уже установлена последняя версия.', flush=True)
        return
    health(3000)
    https_health()
    if shutil.disk_usage(APP).free < 3 * 1024 ** 3:
        raise RuntimeError('Для обновления нужно минимум 3 ГБ свободного места.')
    stamp = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%SZ') + '-' + target[:7]
    job = UPDATES / stamp
    job.mkdir(parents=True)
    candidate = job / 'candidate'
    candidate.mkdir()
    base = 'https://github.com/' + REPOSITORY + '/releases/download/site-build-' + target + '/'
    deadline = time.monotonic() + args.wait
    while True:
        try:
            download(base + 'site-build.tar.gz.sha256', job / 'site-build.tar.gz.sha256')
            break
        except urllib.error.HTTPError as error:
            if error.code != 404 or time.monotonic() >= deadline:
                raise RuntimeError('Готовая сборка пока недоступна. Проверьте GitHub Actions и повторите команду.') from error
            print('GitHub готовит сборку; сайт продолжает работать. Ожидание 15 секунд…', flush=True)
            time.sleep(15)
    print('Скачиваю готовую сборку ' + target[:7] + '…', flush=True)
    download(base + 'site-build.tar.gz', job / 'site-build.tar.gz')
    expected = (job / 'site-build.tar.gz.sha256').read_text().split()[0]
    actual = sha256_file(job / 'site-build.tar.gz')
    if not re.fullmatch(r'[a-f0-9]{64}', expected) or actual != expected:
        raise RuntimeError('Контрольная сумма сборки не совпала.')
    extract_bundle(job / 'site-build.tar.gz', candidate)
    manifest = json.loads((candidate / 'deploy-manifest.json').read_text())
    lock = subprocess.check_output(['git', 'show', target + ':package-lock.json'], cwd=APP)
    if manifest.get('schema') != 1 or manifest.get('commit') != target or manifest.get('platform') != 'linux-x64' or manifest.get('package_lock_sha256') != hashlib.sha256(lock).hexdigest():
        raise RuntimeError('Сборка не соответствует выбранному коммиту.')
    if (candidate / '.next/BUILD_ID').read_text().strip() != target:
        raise RuntimeError('Неверный идентификатор сборки.')
    roots = [p for p in git('ls-tree', '--name-only', target).splitlines() if p not in {'public', 'data'}]
    with (job / 'source.tar').open('wb') as output:
        run(['git', 'archive', '--format=tar', target, '--', *roots], stdout=output)
    run(['tar', '-xf', str(job / 'source.tar'), '-C', str(candidate)])
    for name in ['public', 'data']:
        (candidate / name).symlink_to(APP / name, target_is_directory=True)
    for name in ['.env', '.env.local', '.env.production', '.env.production.local']:
        if (APP / name).is_file():
            shutil.copy2(APP / name, candidate / name)
    env = os.environ.copy()
    for key in list(env):
        if key.startswith(('SMTP_', 'IMAGING_', 'PRICES_', 'NEXT_PUBLIC_')) or key in {'EMAIL_TO', 'NEXT_DIST_DIR', 'NEXT_TSCONFIG_PATH', 'NODE_OPTIONS'}:
            env.pop(key)
    env.update({'NODE_ENV': 'production', 'NODE_OPTIONS': '--max-old-space-size=512', 'IMAGING_DATA_DIR': str(job / 'health-imaging')})
    import socket
    with socket.socket() as probe:
        probe.bind(('127.0.0.1', 3106))
    print('Проверяю сборку отдельно от работающего сайта…', flush=True)
    with (job / 'preview.log').open('wb') as log:
        preview = subprocess.Popen(['node', 'node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1', '-p', '3106'], cwd=candidate, env=env, stdout=log, stderr=subprocess.STDOUT)
        try:
            health(3106)
        finally:
            preview.terminate()
            try:
                preview.wait(timeout=10)
            except subprocess.TimeoutExpired:
                preview.kill()
                preview.wait()
    backup = BACKUPS / stamp
    backup.mkdir(parents=True)
    info = {'app': str(APP), 'before': before, 'target': target, 'backup': str(backup)}
    write_json(backup / 'state.json', info)
    (backup / 'pm2.before.json').write_text(json.dumps(pm2, indent=2))
    if Path('/root/.pm2/dump.pm2').is_file():
        shutil.copy2('/root/.pm2/dump.pm2', backup / 'dump.before.pm2')
    env_hashes = {}
    for name in ['.env', '.env.local', '.env.production', '.env.production.local']:
        if (APP / name).is_file():
            shutil.copy2(APP / name, backup / (name + '.before'))
            env_hashes[name] = sha256_file(APP / name)
    write_json(backup / 'env-hashes.json', env_hashes)
    # Keep old hashed assets available to browsers with already-open pages.
    if (APP / '.next/static').is_dir():
        run(['cp', '-an', str(APP / '.next/static') + '/.', str(candidate / '.next/static')])
    print('Устанавливаю обновление. Резервная копия: ' + str(backup), flush=True)
    try:
        if git('rev-parse', 'HEAD') != before:
            raise RuntimeError('Checkout changed during preparation')
        run(['git', 'merge', '--ff-only', target])
        for name in ['.next', 'node_modules']:
            os.replace(APP / name, backup / name)
            os.replace(candidate / name, APP / name)
        restart()
        health(3000)
        https_health()
        if any(sha256_file(APP / name) != value for name, value in env_hashes.items()):
            raise RuntimeError('Настройки окружения изменились во время обновления.')
        run(['pm2', 'save'], stdout=subprocess.DEVNULL)
    except BaseException:
        try:
            print('Ошибка переключения. Возвращаю предыдущую версию…', flush=True)
        except OSError:
            pass
        rollback(backup)
        raise
    info['success'] = True
    write_json(backup / 'state.json', info)
    write_json(BACKUPS / 'last-success.json', info)
    print('Готово: сайт обновлён до ' + target[:7] + '. Проверки HTTP/HTTPS пройдены.', flush=True)


def sha256_file(path):
    result = hashlib.sha256()
    with path.open('rb') as source:
        for part in iter(lambda: source.read(1024 * 1024), b''):
            result.update(part)
    return result.hexdigest()


def main():
    parser = argparse.ArgumentParser(description='Обновить Альтамед-С готовой сборкой из GitHub.')
    parser.add_argument('--check', action='store_true', help='Только проверить коммиты, без установки.')
    parser.add_argument('--rollback', action='store_true', help='Вернуться к предыдущей установленной версии.')
    parser.add_argument('--wait', type=int, default=1200, help='Ожидать готовую сборку до N секунд.')
    args = parser.parse_args()
    if os.geteuid() != 0:
        parser.error('Запустите команду от root или через sudo.')
    # Finish an installation even if its SSH terminal disconnects.
    signal.signal(signal.SIGHUP, signal.SIG_IGN)
    def interrupted(signum, frame):
        raise RuntimeError('Обновление прервано сигналом ' + str(signum))
    signal.signal(signal.SIGTERM, interrupted)
    os.umask(0o077)
    with open('/var/lock/altamed-update.lock', 'a') as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            parser.error('Другое обновление уже выполняется.')
        if args.rollback:
            info = json.loads((BACKUPS / 'last-success.json').read_text())
            backup = Path(info['backup'])
            if not backup.resolve().is_relative_to(BACKUPS.resolve()):
                raise RuntimeError('Invalid backup path')
            rollback(backup)
        else:
            update(args)


if __name__ == '__main__':
    try:
        main()
    except (OSError, ValueError, RuntimeError, subprocess.SubprocessError) as error:
        print('Обновление остановлено: ' + str(error), file=sys.stderr)
        sys.exit(1)
