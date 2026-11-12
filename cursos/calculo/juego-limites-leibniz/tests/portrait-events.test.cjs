/* Regression checks for the per-level event portrait, with a controlled clock. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const game = path.resolve(__dirname, '..');
const checks = [];
const CORRECT_STILL_SRC = 'assets/animacion/leibniz-nivel-3-acierto.png';
const HIT_SOUND_SRC = 'assets/audio/golpe.mp3';

function createHarness(options = {}) {
  let now = 0;
  let nextId = 1;
  const frames = new Map();
  const timers = new Map();
  const visibilityListeners = [];
  const motionListeners = [];
  const draws = [];
  const composites = [];
  const audioEvents = [];
  const audios = [];
  const deferredImages = new Map();
  const deferredAudio = [];
  const motion = {matches:false, addEventListener:(event, listener)=>motionListeners.push(listener)};
  function canvas(main = false) {
    const context = {
      globalAlpha:1,
      save(){}, restore(){}, translate(){}, rotate(){}, scale(){}, clearRect(){}, fillRect(){},
      drawImage(image, ...args) {
        if (main) composites.push({at:now,src:image.src || 'canvas',alpha:this.globalAlpha});
        if (main && image.src) draws.push({at:now,src:image.src,alpha:this.globalAlpha,frame:args.length===8?args[0]/480+(args[1]/360)*13:0});
      }
    };
    return {width:480,height:360,getContext:()=>context};
  }
  const doc = {hidden:false, visibilityState:'visible', createElement:()=>canvas(),
    addEventListener:(event,listener)=>{if(event==='visibilitychange')visibilityListeners.push(listener)}};
  class Image {
    constructor(){this.width=6240;this.height=360;this.naturalWidth=6240;this.naturalHeight=360;}
    set src(value){
      this._src=value;
      if(value===CORRECT_STILL_SRC){this.width=this.naturalWidth=480;this.height=this.naturalHeight=360;}
      if(options.deferImage?.(value)){deferredImages.set(value,this);return;}
      queueMicrotask(()=>options.failImage?.(value)?this.onerror?.():this.onload?.());
    }
    get src(){return this._src;}
  }
  class Audio {
    constructor(src){this.src=src;this.currentTime=0;this.muted=false;this.paused=true;audios.push(this);}
    play(){
      this.paused=false;
      audioEvents.push({type:'play',src:this.src,at:now,muted:this.muted});
      if(options.deferAudio)return new Promise(resolve=>deferredAudio.push(resolve));
      return options.failAudio ? Promise.reject(new Error('Audio unavailable')) : Promise.resolve();
    }
    pause(){this.paused=true;audioEvents.push({type:'pause',src:this.src,at:now});}
  }
  const context = vm.createContext({
    window:{matchMedia:()=>motion},document:doc,Image,Audio,Promise,Math,console,
    performance:{now:()=>now},
    requestAnimationFrame:fn=>{const id=nextId++;frames.set(id,fn);return id},
    cancelAnimationFrame:id=>frames.delete(id),
    setTimeout:(fn,delay=0)=>{const id=nextId++;timers.set(id,{fn,at:now+delay});return id},
    clearTimeout:id=>timers.delete(id)
  });
  vm.runInContext(fs.readFileSync(path.join(game,'leibniz.js'),'utf8'),context);
  const portrait = new context.window.LeibnizPortrait(canvas(true));
  function step(delta) {
    now+=delta;
    for(const [id,t] of [...timers])if(t.at<=now){timers.delete(id);t.fn();}
    const pending=[...frames];frames.clear();for(const [,fn] of pending)fn(now);
  }
  function advance(ms) {for(let remaining=ms;remaining>0;remaining-=20)step(Math.min(20,remaining));}
  return {portrait,draws,composites,audioEvents,audios,frames,advance,
    resolveImage:(src,failed=false)=>{
      const image=deferredImages.get(src);assert.ok(image,`Deferred image exists: ${src}`);
      deferredImages.delete(src);if(failed)image.onerror?.();else image.onload?.();
    },
    resolveAudio:()=>{const resolve=deferredAudio.shift();assert.ok(resolve,'A deferred audio play exists');resolve();},
    plays:()=>audioEvents.filter(event=>event.type==='play'&&!event.muted),
    last:()=>draws.at(-1),
    setHidden:hidden=>{doc.hidden=hidden;doc.visibilityState=hidden?'hidden':'visible';visibilityListeners.forEach(fn=>fn());},
    setReduced:matches=>{motion.matches=matches;motionListeners.forEach(fn=>fn());}
  };
}

function frameRange(h,low,high,label) {
  const draw=h.last();assert.ok(draw,`${label}: frame was drawn`);
  assert.ok(draw.frame>=low&&draw.frame<=high,`${label}: expected ${low}..${high}, got ${draw.frame}`);
  return draw;
}

function correctFrame(h,level,label) {
  if(level===3){const draw=frameRange(h,0,0,label);assert.equal(draw.src,CORRECT_STILL_SRC);return draw;}
  const draw=frameRange(h,5,8,label);assert.match(draw.src,new RegExp(`leibniz-eventos-nivel-${level}\\.webp$`));return draw;
}

async function unitTests() {
  const h=createHarness();const p=h.portrait;await p.ready;
  assert.equal(p.images.size,3);
  for(let level=1;level<=3;level++) {
    p.reset(level);p.setActive(true);h.advance(500);
    const idle=frameRange(h,0,0,`level ${level} idle`);
    assert.match(idle.src,new RegExp(`leibniz-eventos-nivel-${level}\\.webp$`));
    p.speak();h.advance(200);frameRange(h,1,4,`level ${level} new limit`);
    h.advance(1000);frameRange(h,0,0,`level ${level} mouth returns to baseline`);
    p.react('correct');h.advance(200);correctFrame(h,level,`level ${level} correct response`);
    h.advance(1000);frameRange(h,0,0,`level ${level} correct response finishes`);
    p.react('incorrect');h.advance(200);frameRange(h,9,12,`level ${level} incorrect response`);
    h.advance(1000);frameRange(h,0,0,`level ${level} incorrect response finishes`);
    const count=h.draws.length;h.advance(6000);
    assert.equal(h.draws.length,count,'No unsolicited blink or continuous idle animation');
    assert.equal(h.frames.size,0,'Idle does not schedule animation frames');
  }
  checks.push('All 3 levels use their assigned reactions and return to their own baseline; the other 8 atlas gestures and idle behavior are unchanged');

  p.reset(1);p.setActive(true);p.speak();h.advance(20);p.react('correct');h.advance(180);
  frameRange(h,5,8,'Answer preempts the mouth animation');
  p.speak();h.advance(20);frameRange(h,5,8,'New limit cannot replace an answer reaction');
  h.advance(1800);frameRange(h,0,0,'Queued events finish');
  checks.push('Answer reaction has priority over a new limit and the queue drains');

  for(const [from,to] of [[1,2],[2,3],[3,2]]) {
    p.reset(from);p.setActive(true);p.react('correct',from);p.setLevel(to);h.advance(200);
    correctFrame(h,from,'Threshold response');
    h.advance(2000);
    assert.match(frameRange(h,0,0,'After threshold transition').src,new RegExp(`nivel-${to}\\.webp$`));
  }
  checks.push('Threshold crossings preserve the originating response, then change the baseline');

  p.reset(2);p.setActive(true);p.react('incorrect');p.speak();p.reset(1);h.advance(2500);
  assert.match(frameRange(h,0,0,'Reset clears events').src,/nivel-1\.webp$/);
  assert.equal(h.frames.size,0);
  p.setActive(true);p.react('incorrect');h.advance(100);h.setHidden(true);
  assert.equal(h.frames.size,0,'Hidden document stops animation');
  h.advance(3000);h.setHidden(false);h.advance(1000);frameRange(h,0,0,'Visibility restore has no stale gesture');
  p.reset(3);p.setActive(true);h.setReduced(true);p.speak();p.react('incorrect');p.react('correct');h.advance(2500);
  assert.match(frameRange(h,0,0,'Reduced motion baseline').src,/nivel-3\.webp$/);
  assert.equal(h.frames.size,0,'Reduced motion does not schedule a gesture');
  h.setReduced(false);p.react('incorrect');h.advance(120);const finishing=p.finish();h.advance(2000);await finishing;
  frameRange(h,0,0,'Finishing permits the last reaction, then returns to rest');
  assert.equal(h.frames.size,0);
  checks.push('Reset, visibility, reduced motion, and finish clean up pending animation');

  const fallback=createHarness({failImage:src=>/nivel-\d\.webp$/.test(src)});
  await fallback.portrait.ready;fallback.portrait.reset(2);
  assert.equal(fallback.portrait.images.size,0);
  assert.equal(fallback.portrait.fallbacks.size,3);
  assert.match(fallback.last().src,/nivel-2-reposo\.webp$/);
  const missing=createHarness({failImage:()=>true});
  await missing.portrait.ready;missing.portrait.reset(3);missing.portrait.setActive(true);
  missing.portrait.react('correct');missing.advance(1000);await missing.portrait.finish();
  assert.equal(missing.frames.size,0,'Missing images cannot hold the end-of-game promise forever');
  checks.push('Unavailable atlases fall back to static portraits; total image failure does not block game completion');

  const still=createHarness();const sp=still.portrait;await sp.ready;
  sp.reset(3);sp.setActive(true);
  const firstComposite=still.composites.length;
  sp.react('correct');
  assert.equal(still.last().src,CORRECT_STILL_SRC,'Correct answer shows the PNG immediately');
  assert.equal(still.plays().length,1,'Sound plays once when the action starts');
  assert.equal(still.plays()[0].src,HIT_SOUND_SRC);
  still.advance(999);
  assert.equal(still.last().src,CORRECT_STILL_SRC,'The PNG stays visible for the full 1000 ms');
  assert.equal(still.plays().length,1,'Repainting a still never restarts its sound');
  still.advance(1);
  assert.match(frameRange(still,0,0,'PNG returns directly to rest at 1000 ms').src,/leibniz-eventos-nivel-3\.webp$/);
  assert.ok(still.composites.slice(firstComposite).every(draw=>draw.src!=='canvas'&&draw.alpha===1),'The still and return have no crossfade or previous-canvas overlay');
  assert.equal(still.frames.size,0);
  assert.ok(still.audios.every(audio=>audio.paused&&audio.currentTime===0),'Expired action stops and rewinds the sound');

  sp.react('correct');still.advance(200);const stillFinished=sp.finish();still.advance(799);
  assert.equal(still.last().src,CORRECT_STILL_SRC,'finish preserves the full still hold');
  still.advance(1);await stillFinished;assert.equal(still.frames.size,0);
  checks.push('Level 3 correct immediately holds the PNG for exactly 1000 ms with one sound, then returns without blending; finish preserves the hold');

  sp.reset(3);sp.setActive(true);sp.react('incorrect');still.advance(100);
  const queuedPlays=still.plays().length;
  sp.react('correct');
  assert.equal(still.plays().length,queuedPlays,'Enqueuing a response does not play its sound early');
  still.advance(549);
  assert.equal(still.plays().length,queuedPlays,'Sound waits for the preceding 650 ms response');
  still.advance(1);
  assert.equal(still.last().src,CORRECT_STILL_SRC);
  assert.equal(still.plays().length,queuedPlays+1,'Queued sound starts once with the PNG');
  still.advance(1000);

  for(const trigger of ['interrupt-mouth','enter-level-3']) {
    sp.reset(trigger==='enter-level-3'?1:3);sp.setActive(true);
    if(trigger==='interrupt-mouth'){sp.speak();still.advance(100);}
    const start=still.composites.length;
    sp.react('correct',3);
    assert.equal(still.last().src,CORRECT_STILL_SRC,`${trigger}: PNG is immediate`);
    assert.ok(still.composites.slice(start).every(draw=>draw.src!=='canvas'&&draw.alpha===1),`${trigger}: no transition is mixed into the PNG`);
    still.advance(1000);
  }
  checks.push('Queued sound waits for its response; the still enters directly even when interrupting speech or entering from another level');

  for(const stop of ['reset','hidden','inactive','mute','reduced']) {
    const lifecycle=createHarness();const lp=lifecycle.portrait;await lp.ready;
    lp.reset(3);lp.setActive(true);lp.react('correct');lifecycle.advance(120);
    assert.equal(lifecycle.plays().length,1);
    lifecycle.audios.forEach(audio=>{audio.currentTime=.12;});
    const beforeStop=lifecycle.audioEvents.length;
    if(stop==='reset')lp.reset(3);
    if(stop==='hidden')lifecycle.setHidden(true);
    if(stop==='inactive')lp.setActive(false);
    if(stop==='mute')lp.setSoundEnabled(false);
    if(stop==='reduced')lifecycle.setReduced(true);
    assert.ok(lifecycle.audioEvents.slice(beforeStop).some(event=>event.type==='pause'),`${stop}: pauses the active sound`);
    assert.ok(lifecycle.audios.every(audio=>audio.paused&&audio.currentTime===0),`${stop}: rewinds paused audio`);
    lifecycle.advance(1500);
    assert.equal(lifecycle.plays().length,1,`${stop}: no delayed sound restarts`);
    if(stop!=='mute')assert.equal(lifecycle.frames.size,0,`${stop}: no pending animation`);
  }
  const reduced=createHarness();await reduced.portrait.ready;
  reduced.portrait.reset(3);reduced.portrait.setActive(true);reduced.setReduced(true);
  reduced.portrait.react('correct');reduced.advance(1500);
  assert.equal(reduced.plays().length,0,'Reduced motion suppresses sound as well as the reaction');
  assert.match(frameRange(reduced,0,0,'Reduced motion retains rest').src,/nivel-3\.webp$/);
  checks.push('Reset, hidden tab, inactive game, sound mute and reduced motion stop and rewind audio; reduced motion never starts it');

  const stillMissing=createHarness({failImage:src=>src===CORRECT_STILL_SRC});
  await stillMissing.portrait.ready;stillMissing.portrait.reset(3);stillMissing.portrait.setActive(true);
  const fallbackStart=stillMissing.draws.length;
  stillMissing.portrait.react('correct');stillMissing.advance(999);
  assert.ok(stillMissing.draws.slice(fallbackStart).every(draw=>/leibniz-eventos-nivel-3\.webp$/.test(draw.src)&&draw.frame===8&&draw.alpha===1),'Missing PNG uses frame 8 as a fixed still, never the old animated recoil');
  assert.equal(stillMissing.plays().length,1);
  stillMissing.advance(1);frameRange(stillMissing,0,0,'Missing PNG fallback also lasts exactly 1000 ms');
  const poster=createHarness({failImage:src=>src===CORRECT_STILL_SRC||/leibniz-eventos-nivel-3\.webp$/.test(src)});
  await poster.portrait.ready;poster.portrait.reset(3);poster.portrait.setActive(true);
  poster.portrait.react('correct');poster.advance(999);
  assert.match(poster.last().src,/nivel-3-reposo\.webp$/,'Missing PNG and atlas retain the rest poster');
  poster.advance(1);assert.equal(poster.frames.size,0);
  const silent=createHarness({failAudio:true});await silent.portrait.ready;
  silent.portrait.reset(3);silent.portrait.setActive(true);silent.portrait.react('correct');
  await Promise.resolve();silent.advance(1000);await silent.portrait.finish();
  assert.equal(silent.frames.size,0,'Rejected audio playback does not block reaction completion');
  checks.push('Missing PNG stays on static frame 8 or the rest poster for 1000 ms; rejected audio never blocks completion');

  for(const failed of [false,true]) {
    const delayed=createHarness({deferImage:src=>src===CORRECT_STILL_SRC});
    const dp=delayed.portrait;
    await Promise.resolve(); // The ordinary atlases load; only the PNG remains pending.
    dp.reset(3);dp.setActive(true);dp.react('correct');
    assert.equal(dp.action,null,'A pending PNG cannot start its response prematurely');
    assert.equal(delayed.plays().length,0,'A pending PNG cannot play the hit sound early');
    assert.equal(delayed.frames.size,0,'Waiting for the PNG does not spin requestAnimationFrame');
    delayed.advance(1500);
    assert.equal(dp.action,null);
    assert.equal(delayed.plays().length,0);
    assert.match(frameRange(delayed,0,0,'Pending PNG retains the baseline').src,/leibniz-eventos-nivel-3\.webp$/);
    const firstDraw=delayed.draws.length;
    delayed.resolveImage(CORRECT_STILL_SRC,failed);await dp.ready;
    const expectedSrc=failed?'assets/animacion/leibniz-eventos-nivel-3.webp':CORRECT_STILL_SRC;
    const expectedFrame=failed?8:0;
    assert.equal(delayed.last().src,expectedSrc,'Resolving the PNG starts the appropriate still immediately');
    assert.equal(delayed.last().frame,expectedFrame);
    assert.equal(delayed.plays().length,1,'The sound starts once when image loading resolves');
    assert.equal(delayed.plays()[0].at,1500);
    delayed.advance(999);
    assert.ok(delayed.draws.slice(firstDraw).every(draw=>draw.src===expectedSrc&&draw.frame===expectedFrame&&draw.alpha===1),'The resolved PNG or fallback remains fixed for the entire hold');
    assert.equal(delayed.plays().length,1);
    delayed.advance(1);
    assert.match(frameRange(delayed,0,0,'The hold lasts 1000 ms after image loading resolves').src,/leibniz-eventos-nivel-3\.webp$/);
    assert.equal(delayed.frames.size,0);
  }
  checks.push('Late PNG loading waits without sound or idle RAF; success and failure each start a full 1000 ms still and one sound after resolution');

  const pendingPlay=createHarness({deferAudio:true});const pp=pendingPlay.portrait;await pp.ready;
  pp.reset(3);pp.setActive(true);pp.react('correct');pendingPlay.advance(200);
  const pausesBeforeUnlock=pendingPlay.audioEvents.filter(event=>event.type==='pause').length;
  pp.unlockAudio();pp.speak();
  assert.ok(pendingPlay.audios.every(audio=>!audio.muted&&!audio.paused),'Another user gesture cannot mute or pause a hit whose play promise is pending');
  assert.equal(pendingPlay.audioEvents.filter(event=>event.type==='pause').length,pausesBeforeUnlock);
  assert.equal(pendingPlay.audioEvents.filter(event=>event.type==='play').length,1,'Unlocking during a hit does not start a second muted play');
  pendingPlay.resolveAudio();await Promise.resolve();
  assert.ok(pendingPlay.audios.every(audio=>!audio.muted&&!audio.paused),'Resolving play preserves the active audible hit');
  assert.equal(pendingPlay.audioEvents.filter(event=>event.type==='pause').length,pausesBeforeUnlock);
  pendingPlay.advance(799);assert.equal(pendingPlay.last().src,CORRECT_STILL_SRC);
  assert.equal(pendingPlay.plays().length,1);
  pendingPlay.advance(1000);
  assert.equal(pendingPlay.frames.size,0);
  checks.push('Audio unlocking during a pending hit playback cannot mute, pause or replay that hit; queued speech waits for the still');
}


unitTests().then(()=>console.log(JSON.stringify({status:'passed',checks},null,2))).catch(error=>{console.error(error);process.exitCode=1});
