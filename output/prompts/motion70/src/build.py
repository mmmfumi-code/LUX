import glob,os
d=os.path.dirname(os.path.abspath(__file__))
shell=open(os.path.join(d,'shell.html')).read()
order=['s0_*.js','m*_*.js','t*_*.js','h*_*.js','i*_*.js']
files=[f for pat in order for f in sorted(glob.glob(os.path.join(d,pat)))]
js='\n'.join(open(f).read() for f in files)
out=shell.replace('/*ITEMS*/',js)
open(os.path.join(d,'..','motion70.html'),'w').write(out)
print(len(out),[os.path.basename(f) for f in files])
