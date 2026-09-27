# LUX
あそこのスーパーの方が安かったよなあ・・・どうだっけ？を解決！

---

## NOTE CONTENT WORKFLOW

note（https://note.com/fumiya_mainac）の **月・水・金の週3記事** を企画・執筆・レビューするワークフロー。
Claude Code で `/note-weekly 2026-10-05` のように実行する（引数は対象週の月曜日）。

| 役割 | 定義 | 出力 |
|------|------|------|
| note-strategist | `.claude/agents/note-strategist.md` | `output/note/plans/YYYY-Www.md` |
| note-researcher | `.claude/agents/note-researcher.md` | `research.md`, `references.md` |
| note-writer | `.claude/agents/note-writer.md` | `article.md`, `title.txt`, `lead.txt`, `hashtags.txt`, `price.txt` |
| note-editor | `.claude/agents/note-editor.md` | `review.md`（500円レビュー：PASS / REVISE / HOLD） |
| thumbnail-designer | `.claude/agents/thumbnail-designer.md` | `thumbnail.png`（1280×670） |

### 最初にやること
1. `note/config/profile.md` の「本人の前提」を自分に合わせて直す
2. `note/data/experience_bank.md` に実体験・数値・失敗談を書く（記事の質はここで決まる）
3. 過去記事を同期: `python3 scripts/note/sync_past_articles.py`（note.com に繋がる環境で）
4. `pip install -r scripts/note/requirements.txt`

### スクリプト
- `scripts/note/check_duplicate.py` — 過去記事・企画済みテーマとの重複判定
- `scripts/note/make_thumbnail.py` — サムネイル生成
- `scripts/note/validate_output.py` — 成果物チェック（公開直前は `--strict` で【要記入】ゼロを確認）
