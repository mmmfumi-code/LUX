import sys
p='/home/user/LUX/projects/gokumin-flagship-bed/product/03-design-v1-c2.md'
row=sys.argv[1]
s=open(p).read()
anchor='\n\n## 10案の差分表'
i=s.index(anchor)
s=s[:i]+'\n'+row+s[i:]
open(p,'w').write(s)
