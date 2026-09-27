#!/usr/bin/env python3
"""UserPromptSubmit フック: ワークフローの起動フレーズを検知し、オーケストレーターに手順を指示する。

「〇〇のデザインを提案してください」→ PRODUCT DESIGN WORKFLOW（/product-design）
標準出力に書いた内容は、ユーザーの発言に追加のコンテキストとして渡される。
"""
import json
import re
import sys

try:
    prompt = json.load(sys.stdin).get("prompt", "")
except Exception:
    sys.exit(0)

text = prompt.strip()
if text.startswith("/"):
    sys.exit(0)  # スラッシュコマンドはコマンド側の手順に任せる

PRODUCT = re.compile(
    r"(?P<subject>.+?)\s*の\s*(?:プロダクト)?デザイン(?:案)?\s*(?:を|の)?\s*"
    r"(?:提案|考えて|出して|作って|お願い)"
)
m = PRODUCT.search(text)
if m:
    subject = m.group("subject").strip("「」『』\"' 　")
    print(
        "[studio] PRODUCT DESIGN WORKFLOW のトリガーを検知しました。\n"
        f"対象: 「{subject}」\n"
        "`.claude/commands/product-design.md` の手順どおりに実行してください"
        "（新規プロジェクトを作り、STEP 1〜4 を連続実行し、STEP 5 USER APPROVAL で必ず停止）。\n"
        "既存の product プロジェクトと同じ対象なら、新規作成せずに続きから再開してください。"
    )
sys.exit(0)
