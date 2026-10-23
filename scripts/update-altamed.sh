#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
if [[ -f "$SCRIPT_DIR/update-altamed.py" ]]; then
  exec python3 "$SCRIPT_DIR/update-altamed.py" "$@"
fi
if [[ -f /var/www/altamed-sait/scripts/update-altamed.py ]]; then
  exec python3 /var/www/altamed-sait/scripts/update-altamed.py "$@"
fi
exec python3 /usr/local/lib/altamed/update-altamed.py "$@"
