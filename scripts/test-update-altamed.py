"""Linux-only tests using synthetic archives and a temporary Git checkout."""
import importlib.util
import io
import json
import os
import subprocess
import tarfile
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('updater', Path(__file__).with_name('update-altamed.py'))
updater = importlib.util.module_from_spec(spec)
spec.loader.exec_module(updater)


class UpdaterTests(unittest.TestCase):
    def test_safe_archive_and_relative_dependency_link(self):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            archive = root / 'bundle.tar.gz'
            with tarfile.open(archive, 'w:gz') as tar:
                info = tarfile.TarInfo('node_modules/next/bin.js')
                info.size = 4
                tar.addfile(info, io.BytesIO(b'test'))
                link = tarfile.TarInfo('node_modules/.bin/next')
                link.type = tarfile.SYMTYPE
                link.linkname = '../next/bin.js'
                tar.addfile(link)
            destination = root / 'candidate'
            destination.mkdir()
            updater.extract_bundle(archive, destination)
            self.assertEqual((destination / 'node_modules/.bin/next').read_bytes(), b'test')

    def test_bad_archives_are_rejected_before_extraction(self):
        for name, link in [('../outside', None), ('/etc/file', None), ('.env.local', None), ('node_modules/link', '../../../outside')]:
            with self.subTest(name=name, link=link), tempfile.TemporaryDirectory() as d:
                root = Path(d)
                archive = root / 'bundle.tar.gz'
                with tarfile.open(archive, 'w:gz') as tar:
                    info = tarfile.TarInfo(name)
                    if link:
                        info.type = tarfile.SYMTYPE
                        info.linkname = link
                    tar.addfile(info)
                destination = root / 'candidate'
                destination.mkdir()
                with self.assertRaises(RuntimeError):
                    updater.extract_bundle(archive, destination)
                self.assertEqual(list(destination.iterdir()), [])

    def test_rollback_preserves_settings_and_new_patient_records(self):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            app, backup = root / 'app', root / 'backup'
            app.mkdir()
            backup.mkdir()
            def git(*args):
                return subprocess.check_output(['git', *args], cwd=app, text=True, stderr=subprocess.DEVNULL).strip()
            git('init', '-q')
            git('config', 'user.name', 'Synthetic test')
            git('config', 'user.email', 'test@example.invalid')
            (app / 'data').mkdir()
            patients = app / 'data/appointments.json'
            patients.write_text('[]')
            (app / 'page.txt').write_text('old contacts')
            git('add', '.')
            git('commit', '-qm', 'old')
            old = git('rev-parse', 'HEAD')
            (app / 'page.txt').write_text('new contacts')
            git('commit', '-qam', 'new')
            new = git('rev-parse', 'HEAD')
            patients.write_text('[{"synthetic":"new request after backup"}]')
            (app / '.env.local').write_text('SYNTHETIC_SETTING=unchanged\n')
            for directory in ['.next', 'node_modules']:
                (backup / directory).mkdir()
                (backup / directory / 'version').write_text('old')
                (app / directory).mkdir()
                (app / directory / 'version').write_text('new')
            (backup / 'state.json').write_text(json.dumps({'app': str(app), 'before': old, 'target': new}))
            before_data = patients.read_bytes()
            before_env = (app / '.env.local').read_bytes()
            original_run = updater.run
            def fake_run(args, cwd=None, **kwargs):
                if args[0] == 'pm2':
                    return subprocess.CompletedProcess(args, 0)
                return original_run(args, cwd=app if cwd is None else cwd, **kwargs)
            with patch.object(updater, 'APP', app), patch.object(updater, 'run', side_effect=fake_run), patch.object(updater, 'restart'), patch.object(updater, 'health'), patch.object(updater, 'https_health'):
                updater.rollback(backup)
            self.assertEqual(git('rev-parse', 'HEAD'), old)
            self.assertEqual((app / 'page.txt').read_text(), 'old contacts')
            self.assertEqual(patients.read_bytes(), before_data)
            self.assertEqual((app / '.env.local').read_bytes(), before_env)
            self.assertEqual((app / '.next/version').read_text(), 'old')
            self.assertEqual((app / 'node_modules/version').read_text(), 'old')
            self.assertTrue(json.loads((backup / 'state.json').read_text())['rolled_back'])

    def test_failed_health_check_is_reported(self):
        with patch.object(updater, 'http_status', return_value=503), patch.object(updater.time, 'sleep'):
            with self.assertRaisesRegex(RuntimeError, 'HTTP 503'):
                updater.health(3106, attempts=1)


if __name__ == '__main__':
    unittest.main(verbosity=2)
