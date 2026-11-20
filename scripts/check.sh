#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "==> Checking JavaScript syntax"
node --check invite.config.js
node --check app.js

if command -v xmllint >/dev/null 2>&1; then
  echo "==> Checking SVG files"
  shopt -s nullglob
  svgs=(assets/*.svg)
  if (( ${#svgs[@]} )); then
    xmllint --noout "${svgs[@]}"
  else
    echo "No SVG files found, skipping."
  fi
else
  echo "==> xmllint not found, skipping SVG check"
fi

echo "==> OK"
