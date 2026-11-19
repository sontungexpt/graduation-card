#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

TMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/graduate-deploy.XXXXXX")"
cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

echo "==> Preparing clean deploy snapshot from HEAD"
git archive --format=tar HEAD | tar -xf - -C "$TMP_DIR"

if [ ! -d "node_modules/gh-pages" ]; then
  echo "Error: gh-pages is not installed. Run: npm install" >&2
  exit 1
fi

echo "==> Deploying to gh-pages"
npx --no-install gh-pages -d "$TMP_DIR" -t "$@"
