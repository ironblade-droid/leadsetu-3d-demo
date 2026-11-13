#!/usr/bin/env bash
set -euo pipefail
exec python3 "$(dirname "$0")/finish-bake-assets.py" "$@"
