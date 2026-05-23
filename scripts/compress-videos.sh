#!/usr/bin/env bash
# Comprime os vídeos usados no site (sem áudio — autoplay muted).
# Requer: ffmpeg com libopenh264
set -euo pipefail
cd "$(dirname "$0")/.."

compress() {
  local in="$1" maxw="$2" bitrate="$3"
  local bak="${in%.mp4}.orig.mp4"
  local tmp="${in%.mp4}.tmp.mp4"

  if [[ ! -f "$in" ]]; then
    echo "Ignorado (não existe): $in"
    return
  fi

  [[ -f "$bak" ]] || cp "$in" "$bak"
  echo "Comprimindo: $in → max ${maxw}px @ ${bitrate}"

  ffmpeg -hide_banner -loglevel error -i "$in" -an \
    -vf "scale='min(${maxw},iw)':-2" \
    -c:v libopenh264 -b:v "$bitrate" -maxrate "$bitrate" -bufsize "$((${bitrate%k} * 2))k" \
    -movflags +faststart \
    -y "$tmp"

  mv "$tmp" "$in"
  ls -lh "$in"
}

compress "LelysMaison.mp4" 1280 1400k
compress "lysjardin.mp4" 848 700k
compress "lelysventura.mp4" 1280 900k

echo "Concluído. Backups: *.orig.mp4 (adicione ao .gitignore se não quiser versionar)."
