#!/usr/bin/env python3
"""note 用サムネイル（1280x670）を生成する。

  python3 scripts/note/make_thumbnail.py --out output/note/2026-09-28/thumbnail.png \
      --pillar P9 --label "COCONALA × PRODUCT DESIGN" \
      --main "最初の3件" --sub "ココナラ出品ページ設計" --badge "保存版"

--main は "\\n" で明示改行できる（最大2行）。文字サイズは幅に合わせて自動調整。
フォントは NOTE_THUMB_FONT 環境変数 > 下記候補 の順で探す。
"""
import argparse
import os
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

W, H = 1280, 670
BG = (17, 20, 24)
GRID = (32, 37, 44)
FG = (245, 246, 248)
MUTED = (160, 168, 178)

# ピラーごとのアクセントカラー（シリーズ感を出すため固定）
PILLAR_COLORS = {
    "P1": (255, 138, 61),   # プロダクトデザイン: オレンジ
    "P2": (84, 160, 255),   # 企業デザイナー: ブルー
    "P3": (46, 204, 145),   # フリーランス: グリーン
    "P4": (178, 120, 255),  # 生成AI: パープル
    "P5": (0, 200, 220),    # 3DCG: シアン
    "P6": (255, 82, 82),    # Adobe: レッド
    "P7": (255, 196, 0),    # CAD: イエロー
    "P8": (120, 220, 90),   # 副業: ライム
    "P9": (255, 214, 64),   # ココナラ: ゴールド
    "P10": (255, 105, 180), # ガジェット: ピンク
}

FONT_CANDIDATES = [
    "/System/Library/Fonts/ヒラギノ角ゴシック W8.ttc",
    "/System/Library/Fonts/ヒラギノ角ゴシック W6.ttc",
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc",
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/truetype/noto/NotoSansJP-Bold.ttf",
    "C:/Windows/Fonts/YuGothB.ttc",
    "C:/Windows/Fonts/meiryob.ttc",
    "/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf",
    "/usr/share/fonts/truetype/fonts-japanese-gothic.ttf",
]


def find_font() -> str:
    env = os.environ.get("NOTE_THUMB_FONT")
    if env and Path(env).exists():
        return env
    for p in FONT_CANDIDATES:
        if Path(p).exists():
            return p
    sys.exit("日本語フォントが見つかりません。NOTE_THUMB_FONT にパスを指定してください。")


def is_light_weight(path: str) -> bool:
    # IPA ゴシック等 Regular しかない書体は stroke で太らせる
    return "ipag" in path.lower() or "japanese-gothic" in path.lower()


def text_w(draw, text, font, stroke):
    l, _, r, _ = draw.textbbox((0, 0), text, font=font, stroke_width=stroke)
    return r - l


def wrap(draw, text, font, stroke, max_w):
    """明示改行を優先、それ以外は幅で折り返す。"""
    lines = []
    for para in text.split("\\n"):
        cur = ""
        for ch in para:
            if text_w(draw, cur + ch, font, stroke) > max_w and cur:
                lines.append(cur)
                cur = ch
            else:
                cur += ch
        lines.append(cur)
    return lines


def fit(draw, text, path, max_w, max_lines, start, minimum, bold):
    size = start
    while size >= minimum:
        font = ImageFont.truetype(path, size)
        stroke = max(1, size // 45) if bold else 0
        lines = wrap(draw, text, font, stroke, max_w)
        if len(lines) <= max_lines:
            return font, stroke, lines
        size -= 4
    font = ImageFont.truetype(path, minimum)
    stroke = max(1, minimum // 45) if bold else 0
    return font, stroke, wrap(draw, text, font, stroke, max_w)[:max_lines]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True)
    ap.add_argument("--pillar", default="P1", choices=sorted(PILLAR_COLORS))
    ap.add_argument("--label", default="")
    ap.add_argument("--main", required=True)
    ap.add_argument("--sub", default="")
    ap.add_argument("--badge", default="")
    ap.add_argument("--author", default="FUMIYA")
    args = ap.parse_args()

    accent = PILLAR_COLORS[args.pillar]
    path = find_font()
    bold = is_light_weight(path)

    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    # 方眼（設計図/CAD のイメージ）
    for x in range(0, W, 40):
        d.line([(x, 0), (x, H)], fill=GRID, width=1)
    for y in range(0, H, 40):
        d.line([(0, y), (W, y)], fill=GRID, width=1)

    pad = 88
    d.rectangle([0, 0, 18, H], fill=accent)            # 左アクセントバー
    d.rectangle([pad, H - 64, W - pad, H - 60], fill=accent)  # 下ライン

    # ラベル
    if args.label:
        lf = ImageFont.truetype(path, 30)
        d.text((pad, 64), args.label, font=lf, fill=accent, stroke_width=1 if bold else 0, stroke_fill=accent)

    # バッジ（右上の円）
    if args.badge:
        r = 78
        cx, cy = W - pad - r + 20, 64 + r - 10
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=accent)
        bf, bs, bl = fit(d, args.badge, path, r * 2 - 30, 2, 40, 22, True)
        lh = bf.size + 6
        y0 = cy - lh * len(bl) / 2
        for i, line in enumerate(bl):
            tw = text_w(d, line, bf, bs)
            d.text((cx - tw / 2, y0 + i * lh), line, font=bf, fill=BG, stroke_width=bs, stroke_fill=BG)

    # メインコピー
    max_w = W - pad * 2 - (180 if args.badge else 0)
    mf, ms, ml = fit(d, args.main, path, max_w, 2, 150, 72, True)
    lh = int(mf.size * 1.18)
    sub_h = 0
    if args.sub:
        sf, ss, sl = fit(d, args.sub, path, W - pad * 2, 1, 52, 30, False)
        sub_h = int(sf.size * 1.6)
    block = lh * len(ml) + sub_h
    y = max(130, (H - block) // 2 + 10)
    for line in ml:
        d.text((pad, y), line, font=mf, fill=FG, stroke_width=ms, stroke_fill=FG)
        y += lh
    if args.sub:
        y += 8
        d.rectangle([pad, y + 6, pad + 10, y + sf.size + 6], fill=accent)
        d.text((pad + 28, y), sl[0], font=sf, fill=MUTED, stroke_width=ss, stroke_fill=MUTED)

    # 署名
    af = ImageFont.truetype(path, 30)
    aw = text_w(d, args.author, af, 1)
    d.text((W - pad - aw, H - 52), args.author, font=af, fill=FG, stroke_width=1 if bold else 0, stroke_fill=FG)

    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "PNG", optimize=True)
    print(f"saved {out} ({W}x{H}, font={Path(path).name})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
