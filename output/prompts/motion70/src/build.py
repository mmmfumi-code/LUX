import glob,os
d=os.path.dirname(os.path.abspath(__file__))
shell=open(os.path.join(d,'shell.html')).read()
order=['s0_*.js','m*_*.js','t*_*.js','h*_*.js','i*_*.js']
files=[f for pat in order for f in sorted(glob.glob(os.path.join(d,pat)))]
js='\n'.join(open(f).read() for f in files)
out=shell.replace('/*ITEMS*/',js).replace('/*APPLE*/',open(os.path.join(d,'apple.css')).read())
open(os.path.join(d,'..','motion70.html'),'w').write(out)
print(len(out),[os.path.basename(f) for f in files])

k=open(os.path.join(d,'kit_shell.html')).read().replace('/*DATA*/','\n'.join(open(os.path.join(d,f)).read() for f in ['s0_sections.js','i1_illust.js','i2_illust.js']))
open(os.path.join(d,'..','kit.html'),'w').write(k)
