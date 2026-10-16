import glob,os
d=os.path.dirname(os.path.abspath(__file__))
core=open(os.path.join(d,'core.html')).read()
js='\n'.join(open(f).read() for f in sorted(glob.glob(os.path.join(d,'m*_*.js'))))
out=core.replace('/*MOTIONS*/',js)
open(os.path.join(d,'..','motion70.html'),'w').write(out)
print(len(out))
