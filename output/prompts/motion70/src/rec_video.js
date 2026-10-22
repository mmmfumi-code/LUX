// usage: node rec.js <page.html> <outdir> <id,id,...> [fps]
const {chromium}=require('/opt/node22/lib/node_modules/playwright');
const {spawn}=require('child_process');const fs=require('fs');
(async()=>{
  const [,,src,out,idsS,fpsS]=process.argv;const fps=+(fpsS||30);fs.mkdirSync(out,{recursive:true});
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
  const p=await b.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.goto('file://'+src);await p.waitForTimeout(2500);
  await p.evaluate(()=>document.fonts.ready);
  for(const id of idsS.split(',')){
    await p.clock.install({time:new Date('2026-01-01T00:00:00')});await p.clock.pauseAt(new Date('2026-01-01T00:00:01'));
    const L=await p.evaluate(id=>{
      const anims=[];const orig=Element.prototype.animate;
      Element.prototype.animate=function(k,o){const a=orig.call(this,k,o);a.pause();a.__t0=performance.now();anims.push(a);return a};
      const oc=Animation.prototype.cancel;Animation.prototype.cancel=function(){this.__dead=1;return oc.call(this)};
      window.__step=()=>{const now=performance.now();for(const a of anims){if(a.__dead||!a.effect||!a.effect.target||!a.effect.target.isConnected)continue;a.currentTime=Math.max(0,now-a.__t0)}};
      if(window.mplayer)mplayer.stop();if(window.player)player.stop();
      document.querySelectorAll('#__rec').forEach(e=>e.remove());
      const scr=document.createElement('div');scr.id='__rec';Object.assign(scr.style,{position:'fixed',left:'0',top:'0',width:'1920px',height:'1080px',overflow:'hidden',zIndex:'2147483647',background:'#000'});
      const st=document.createElement('div');st.className='stage';scr.appendChild(st);document.body.appendChild(scr);
      const m=findItem(id);window.__pl=new Player(st,scr);st.style.transform='scale(1.2)';window.__pl.play(m,m.text,true);return m.loop;
    },id);
    await p.clock.runFor(50);await p.evaluate(()=>window.__step());
    const file=`${out}/${id}.mp4`;
    const ff=spawn('ffmpeg',['-y','-loglevel','error','-f','image2pipe','-framerate',String(fps),'-i','-','-c:v','libx264','-pix_fmt','yuv420p','-crf','18','-preset','medium','-r',String(fps),'-movflags','+faststart',file]);
    const N=Math.round(L/1000*fps);
    for(let i=0;i<N;i++){
      if(i)await p.clock.runFor(Math.round(i*1000/fps)-Math.round((i-1)*1000/fps));
      await p.evaluate(()=>window.__step());
      const buf=await p.screenshot({type:'jpeg',quality:95,clip:{x:0,y:0,width:1920,height:1080}});
      if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));
    }
    ff.stdin.end();await new Promise(r=>ff.on('close',r));
    console.log(id,N,'frames',(fs.statSync(file).size/1e6).toFixed(1)+'MB');
    await p.reload();await p.waitForTimeout(1500);await p.evaluate(()=>document.fonts.ready);
  }
  console.log('ERR',errs.slice(0,5));await b.close();
})();
