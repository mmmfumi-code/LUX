#!/usr/bin/env bash
# グラフィックの展開物（HTML）をまとめて PNG に書き出す
#   bash scripts/render-apps.sh graphic/v1/A
# フォルダ内にある kv / poster / sns-feed / sns-story / ec-banner / web-hero の .html を、決まったサイズで書き出す
set -euo pipefail
dir="${1:?usage: bash scripts/render-apps.sh <dir>}"
here="$(cd "$(dirname "$0")" && pwd)"
declare -A SIZE=(
  [kv]="1920 1080" [web-hero]="1920 1080" [poster]="1414 2000"
  [sns-feed]="1080 1350" [sns-story]="1080 1920" [ec-banner]="1200 628"
)
for name in kv poster sns-feed sns-story ec-banner web-hero; do
  f="$dir/$name.html"
  [[ -f "$f" ]] || { echo "skip: $f がありません"; continue; }
  read -r w h <<<"${SIZE[$name]}"
  node "$here/render.mjs" png "$f" "$dir/$name.png" --width "$w" --height "$h" --scale 1 >/dev/null
  echo "✓ $dir/$name.png (${w}x${h})"
done
