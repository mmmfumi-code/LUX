# output/

最終工程がユーザーに承認されたプロジェクトの納品物だけを置くフォルダ。
`python3 scripts/studio.py deliver <slug> <files...>` で `output/<slug>/` にコピーされる。
途中成果物はここに置かず、`projects/<slug>/` に保存する。
