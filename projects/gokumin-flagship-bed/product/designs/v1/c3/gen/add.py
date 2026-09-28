# usage: python3 add.py <row-file> <section-file>
import sys
p = '/home/user/LUX/projects/gokumin-flagship-bed/product/03-design-v1-c3.md'
s = open(p).read()
row = open(sys.argv[1]).read().strip('\n')
sec = open(sys.argv[2]).read().strip('\n')
a = '\n\n## 10案の差分表'
i = s.index(a); s = s[:i] + '\n' + row + s[i:]
b = '<!-- DESIGNS -->'
i = s.index(b); s = s[:i] + sec + '\n\n' + s[i:]
open(p, 'w').write(s)
