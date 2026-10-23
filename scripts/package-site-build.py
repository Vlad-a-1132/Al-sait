"""Package only compiled code and Linux dependencies, never production data/env."""
import hashlib
import json
import platform
import subprocess
import sys
import tarfile
from pathlib import Path

commit = sys.argv[1]
assert len(commit) == 40 and all(c in '0123456789abcdef' for c in commit)
assert platform.system() == 'Linux', 'Deployment bundles must be built on Linux'
assert Path('.next/BUILD_ID').read_text().strip() == commit
manifest = {
    'schema': 1,
    'commit': commit,
    'build_id': commit,
    'platform': 'linux-x64',
    'package_lock_sha256': hashlib.sha256(Path('package-lock.json').read_bytes()).hexdigest(),
    'build_node': subprocess.check_output(['node', '--version'], text=True).strip(),
}
Path('deploy-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')

def include(info):
    parts = Path(info.name).parts
    if info.name == '.next/cache' or info.name.startswith('.next/cache/'):
        return None
    if any(p == '.env' or p.startswith('.env.') for p in parts):
        raise RuntimeError('Environment file must not be included: ' + info.name)
    return info

with tarfile.open('site-build.tar.gz', 'w:gz', compresslevel=6) as bundle:
    for name in ['.next', 'node_modules', 'package.json', 'package-lock.json', 'deploy-manifest.json']:
        bundle.add(name, filter=include)
digest = hashlib.sha256(Path('site-build.tar.gz').read_bytes()).hexdigest()
Path('site-build.tar.gz.sha256').write_text(digest + '  site-build.tar.gz\n')
print('Deployment bundle prepared for ' + commit)
