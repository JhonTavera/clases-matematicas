/* Regression checks for the per-level event portrait, with a controlled clock. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const game = path.resolve(__dirname, '..');
const checks = [];

function createHarness(options = {}) {
  let now = 0;
  let nextId = 1;
  const frames = new Map();
  const timers = new Map();
  const visibilityListeners = [];
  const motionListeners = [];
  const draws = [];
  const motion = {matches:false, addEventListener:(event, listener)=>motionListeners.push(listener)};
  function canvas() {
    const context = {
      save(){}, restore(){}, translate(){}, rotate(){}, scale(){}, clearRect(){}, fillRect(){},
      drawImage(image, ...args) { if (image.src) draws.push({at:now,src:image.src,frame:args.length===8?args[0]/480:0}); }
    };
    return {width:480,height:360,getContext:()=>context};
  }
  const doc = {hidden:false, visibilityState:'visible', createElement:()=>canvas(),
    addEventListener:(event,listener)=>{if(event==='visibilitychange')visibilityListeners.push(listener)}};
  class Image {
    constructor(){this.width=6240;this.height=360;this.naturalWidth=6240;this.naturalHeight=360;}
    set src(value){this._src=value;queueMicrotask(()=>options.failImage?.(value)?this.onerror?.():this.onload?.());}
    get src(){return this._src;}
  }
  const context = vm.createContext({
    window:{matchMedia:()=>motion},document:doc,Image,Promise,Math,console,
    performance:{now:()=>now},
    requestAnimationFrame:fn=>{const id=nextId++;frames.set(id,fn);return id},
    cancelAnimationFrame:id=>frames.delete(id),
    setTimeout:(fn,delay=0)=>{const id=nextId++;timers.set(id,{fn,at:now+delay});return id},
    clearTimeout:id=>timers.delete(id)
  });
  vm.runInContext(fs.readFileSync(path.join(game,'leibniz.js'),'utf8'),context);
  const portrait = new context.window.LeibnizPortrait(canvas());
  function step(delta) {
    now+=delta;
    for(const [id,t] of [...timers])if(t.at<=now){timers.delete(id);t.fn();}
    const pending=[...frames];frames.clear();for(const [,fn] of pending)fn(now);
  }
  function advance(ms) {for(let remaining=ms;remaining>0;remaining-=20)step(Math.min(20,remaining));}
  return {portrait,draws,frames,advance,
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

async function unitTests() {
  const h=createHarness();const p=h.portrait;await p.ready;
  assert.equal(p.images.size,3);
  for(let level=1;level<=3;level++) {
    p.reset(level);p.setActive(true);h.advance(500);
    const idle=frameRange(h,0,0,`level ${level} idle`);
    assert.match(idle.src,new RegExp(`leibniz-eventos-nivel-${level}\\.webp$`));
    p.speak();h.advance(200);frameRange(h,1,4,`level ${level} new limit`);
    h.advance(1000);frameRange(h,0,0,`level ${level} mouth returns to baseline`);
    p.react('correct');h.advance(200);frameRange(h,5,8,`level ${level} correct response`);
    h.advance(1000);frameRange(h,0,0,`level ${level} correct response finishes`);
    p.react('incorrect');h.advance(200);frameRange(h,9,12,`level ${level} incorrect response`);
    h.advance(1000);frameRange(h,0,0,`level ${level} incorrect response finishes`);
    const count=h.draws.length;h.advance(6000);
    assert.equal(h.draws.length,count,'No unsolicited blink or continuous idle animation');
    assert.equal(h.frames.size,0,'Idle does not schedule animation frames');
  }
  checks.push('All 3 levels use the correct spawn/correct/incorrect atlas ranges and return to their own baseline; no idle blinking');

  p.reset(1);p.setActive(true);p.speak();h.advance(20);p.react('correct');h.advance(180);
  frameRange(h,5,8,'Answer preempts the mouth animation');
  p.speak();h.advance(20);frameRange(h,5,8,'New limit cannot replace an answer reaction');
  h.advance(1800);frameRange(h,0,0,'Queued events finish');
  checks.push('Answer reaction has priority over a new limit and the queue drains');

  for(const [from,to] of [[1,2],[2,3],[3,2]]) {
    p.reset(from);p.setActive(true);p.react('correct',from);p.setLevel(to);h.advance(200);
    assert.match(frameRange(h,5,8,'Threshold response').src,new RegExp(`nivel-${from}\\.webp$`));
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
}


unitTests().then(()=>console.log(JSON.stringify({status:'passed',checks},null,2))).catch(error=>{console.error(error);process.exitCode=1});
