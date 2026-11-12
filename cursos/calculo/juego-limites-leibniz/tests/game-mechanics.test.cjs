/* Run with Node; no browser, network or third-party packages are required.
 * Optional: --ref=main runs the same rules against that Git revision. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {execFileSync} = require('node:child_process');

const game = path.resolve(__dirname, '..');
const reference = process.argv.find(arg => arg.startsWith('--ref='))?.slice(6);
const html = reference
  ? execFileSync('git', ['show', `${reference}:cursos/calculo/juego-limites-leibniz/index.html`], {cwd:game, encoding:'utf8'})
  : fs.readFileSync(path.join(game, 'index.html'), 'utf8');
const source = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).find(script => script.includes('const gameState ='));
assert.ok(source, 'The game script exists in index.html');

function createHarness({deferFinish = false} = {}) {
  let now = 0;
  let nextId = 1;
  const frames = new Map();
  const timers = new Map();
  const elements = new Map();
  const randomValues = [];
  const portraitCalls = [];
  const finishResolvers = [];

  class EventTarget {
    constructor() { this.listeners = new Map(); }
    addEventListener(type, listener) {
      if (!this.listeners.has(type)) this.listeners.set(type, []);
      this.listeners.get(type).push(listener);
    }
    emit(type, event = {}) {
      event.prevented = false;
      event.preventDefault ||= () => { event.prevented = true; };
      for (const listener of this.listeners.get(type) || []) listener(event);
      return event;
    }
  }
  class Element extends EventTarget {
    constructor(id = '') {
      super();
      this.id = id;
      this.dataset = {};
      this.children = [];
      this.isConnected = true;
      this.offsetWidth = 220;
      this.offsetHeight = 92;
      this.clientWidth = 900;
      this.clientHeight = 600;
      this.textContent = '';
      this.style = {setProperty(name,value){this[name]=value;},removeProperty(name){delete this[name];}};
      const classes = new Set();
      this.classList = {
        add:(...names)=>names.forEach(name=>classes.add(name)),
        remove:(...names)=>names.forEach(name=>classes.delete(name)),
        contains:name=>classes.has(name),
        toggle:(name,force)=>{const enabled=force ?? !classes.has(name);if(enabled)classes.add(name);else classes.delete(name);return enabled;}
      };
    }
    set innerHTML(value) {
      this._html = value;
      if (this.id === 'controls') {
        this.children = [...value.matchAll(/data-answer="([^"]+)"/g)].map(match => {
          const button = new Element();button.dataset.answer = match[1];return button;
        });
      }
    }
    get innerHTML() { return this._html || ''; }
    appendChild(child) { this.children.push(child);child.parent=this;child.isConnected=true;return child; }
    remove() { this.isConnected=false;if(this.parent)this.parent.children=this.parent.children.filter(child=>child!==this); }
    querySelector(selector) {
      const answer = selector.match(/^\[data-answer="(.*)"\]$/)?.[1];
      return answer === undefined ? null : this.children.find(child=>child.dataset.answer===answer) || null;
    }
    closest(selector) { return selector==='button[data-answer]' && this.dataset.answer ? this : null; }
    setAttribute(name,value) { this[name]=value; }
    getBoundingClientRect() {
      return this.id==='leibnizImage'
        ? {left:20,top:100,right:500,bottom:460,width:480,height:360}
        : {left:0,top:0,right:this.clientWidth,bottom:this.clientHeight,width:this.clientWidth,height:this.clientHeight};
    }
  }
  class Audio extends EventTarget {
    constructor(){super();this.paused=true;this.src='';}
    play(){this.paused=false;return Promise.resolve();}
    pause(){this.paused=true;}
  }
  class Portrait {
    constructor(){this.soundEnabled=true;this.ready=Promise.resolve();}
    reset(level){portraitCalls.push(['reset',level]);}
    setActive(active){portraitCalls.push(['active',active]);}
    setLevel(level){portraitCalls.push(['level',level]);}
    speak(level){portraitCalls.push(['spawn',level]);}
    react(kind,level){portraitCalls.push([kind,level]);}
    unlockAudio(){portraitCalls.push(['unlock']);}
    setSoundEnabled(enabled){this.soundEnabled=enabled;}
    finish(){portraitCalls.push(['finish']);return deferFinish?new Promise(resolve=>finishResolvers.push(resolve)):Promise.resolve();}
  }
  const document = new EventTarget();
  document.body = new Element('body');
  document.getElementById = id => {
    if (!elements.has(id)) elements.set(id, new Element(id));
    return elements.get(id);
  };
  document.createElement = () => new Element();
  const window = new EventTarget();
  const MathJax = {typesetPromise:()=>Promise.resolve(),startup:{promise:Promise.resolve()}};
  window.MathJax = MathJax;
  window.matchMedia = () => ({matches:false});
  const math = Object.create(Math);
  math.random = () => randomValues.length ? randomValues.shift() : .1;
  const context = vm.createContext({
    document,window,MathJax,Audio,LeibnizPortrait:Portrait,Math:math,Promise,console,
    CSS:{escape:value=>value},performance:{now:()=>now},
    getComputedStyle:()=>({paddingLeft:'0',paddingRight:'0',borderLeftWidth:'0',borderRightWidth:'0',fontSize:'24'}),
    setTimeout:(fn,delay=0)=>{const id=nextId++;timers.set(id,{fn,at:now+delay});return id;},
    clearTimeout:id=>timers.delete(id),
    requestAnimationFrame:fn=>{const id=nextId++;frames.set(id,fn);return id;},
    cancelAnimationFrame:id=>frames.delete(id)
  });
  vm.runInContext(source + '\n;globalThis.api = {gameState,ANSWERS,LEVELS,LIMITES,initGame,startGame,resetGame,spawnLimit,handleAnswer,updateLevel,updateGameLoop,pickLimitForCurrentLevel,registerMusicSecretClick,enableTimeFeature,startBoostHold,startStasisHold,stopTimeHolds,handleSecretPointerDown,endGame,portrait:typeof portrait!=="undefined"?portrait:null};', context);
  const api = context.api;
  window.emit('load');
  function step(ms) {
    now += ms;
    for (const [id,timer] of [...timers]) if (timer.at<=now) {timers.delete(id);timer.fn();}
    const pending = [...frames];frames.clear();
    for (const [,fn] of pending) fn(now);
  }
  function addLimit(answer, y=100, extra={}) {
    const element = new Element();element.classList.add('rendered');
    elements.get('fallZone').appendChild(element);
    const limit = {instanceId:`test-${nextId++}`,data:{respuesta:answer,dificultad:'bajo',latex:'x'},element,y,height:92,removed:false,entranceAnnounced:true,...extra};
    api.gameState.limitesActivos.push(limit);
    return limit;
  }
  function play() { api.resetGame();api.gameState.estado='jugando'; }
  return {api,state:api.gameState,document,window,elements,frames,timers,portraitCalls,addLimit,play,step,
    setNow:value=>{now=value;},setRandom:(...values)=>randomValues.push(...values),
    frame:ms=>{now+=ms;frames.clear();api.updateGameLoop(now);},
    finishPortrait:()=>finishResolvers.splice(0).forEach(resolve=>resolve())
  };
}

const checks = [];
const failures = [];
async function check(name, test) {
  try { await test();checks.push(name); }
  catch (error) { failures.push({name,error:error.stack}); }
}
const flush = async () => { for(let i=0;i<8;i++)await Promise.resolve(); };
const near = (actual,expected,label) => assert.ok(Math.abs(actual-expected)<1e-8,`${label}: ${actual} != ${expected}`);

(async()=>{
  await check('Starts with 5 lives and 0 points; first limit at 450 ms; maximum 4 active limits',async()=>{
    const h=createHarness();const s=h.state;
    assert.equal(s.vidas,5);assert.equal(s.puntos,0);assert.equal(s.nivel,1);assert.equal(s.racha,0);assert.equal(s.estado,'inicio');
    h.api.spawnLimit();assert.equal(s.limitesActivos.length,0);
    h.elements.get('startButton').emit('click');
    assert.equal(s.estado,'jugando');assert.equal(h.frames.size,1);
    h.step(449);assert.equal(s.limitesActivos.length,0);
    h.step(1);await flush();assert.equal(s.limitesActivos.length,1);
    assert.ok(s.limitesActivos[0].element.classList.contains('rendered'));
    for(let i=0;i<6;i++)h.api.spawnLimit();
    assert.equal(s.limitesActivos.length,4);
    assert.equal(new Set(s.limitesActivos.map(limit=>limit.instanceId)).size,4);
  });

  await check('Each answer clears only the lowest matching limit; five correct answers grant one life',()=>{
    const h=createHarness();h.play();
    const high=h.addLimit('L',10),low=h.addLimit('L',300),middle=h.addLimit('L',150),other=h.addLimit('0',400);
    h.api.handleAnswer('L');
    assert.equal(low.removed,true);assert.equal(high.removed,false);assert.equal(middle.removed,false);assert.equal(other.removed,false);
    assert.equal(h.state.puntos,1);assert.equal(h.state.racha,1);assert.equal(h.state.vidas,5);
    h.api.handleAnswer('L');assert.equal(middle.removed,true);
    h.api.handleAnswer('L');h.api.handleAnswer('0');
    h.addLimit('NE');h.api.handleAnswer('NE');
    assert.equal(h.state.puntos,5);assert.equal(h.state.racha,0);assert.equal(h.state.vidas,6);
    h.addLimit('-L');h.api.handleAnswer('-L');
    assert.equal(h.state.puntos,6);assert.equal(h.state.racha,1);assert.equal(h.state.vidas,6);
  });

  await check('Wrong answers cost 1 life and 3 points, reset the streak and preserve the high score',()=>{
    const h=createHarness();h.play();Object.assign(h.state,{puntos:12,maxScore:12,racha:4});h.api.updateLevel();
    const limit=h.addLimit('L');h.api.handleAnswer('NE');
    assert.equal(limit.removed,false);assert.equal(h.state.puntos,9);assert.equal(h.state.maxScore,12);
    assert.equal(h.state.vidas,4);assert.equal(h.state.racha,0);assert.equal(h.state.nivel,1);
    h.state.puntos=1;h.api.handleAnswer('NE');assert.equal(h.state.puntos,0);assert.equal(h.state.vidas,3);
  });

  await check('Expired limits cost 1 life and 2 points; empty screen waits 2 seconds before respawn',()=>{
    const h=createHarness();h.play();Object.assign(h.state,{puntos:8,maxScore:8,racha:4});
    const limit=h.addLimit('L',508);h.frame(50);
    assert.equal(limit.removed,true);assert.equal(h.state.puntos,6);assert.equal(h.state.vidas,4);assert.equal(h.state.racha,0);
    assert.equal(h.state.maxScore,8);assert.equal(h.state.limitesActivos.length,0);
    h.setNow(2049);h.frame(0);assert.equal(h.state.limitesActivos.length,0);
    h.frame(1);assert.equal(h.state.limitesActivos.length,1);
  });

  await check('Difficulty weights, fall speeds and spawn intervals are unchanged at all three levels',()=>{
    const h=createHarness();h.play();
    const rules=[{level:1,points:0,interval:24000,duration:100,difficulties:['bajo','bajo','bajo','medio']},{level:2,points:10,interval:12000,duration:50,difficulties:['medio','medio','medio','bajo']},{level:3,points:25,interval:6000,duration:25,difficulties:['alto','alto','alto','medio']}];
    for(const rule of rules){
      h.api.resetGame();h.state.estado='jugando';h.state.puntos=rule.points;h.api.updateLevel();
      for(let bucket=0;bucket<4;bucket++){
        h.setRandom((bucket+.1)/4,.25);
        assert.equal(h.api.pickLimitForCurrentLevel().dificultad,rule.difficulties[bucket]);
      }
      h.setNow(0);h.state.lastFrameTime=0;const limit=h.addLimit('L',0);
      h.frame(50);near(limit.y,600/rule.duration*.05,`Level ${rule.level} fall speed`);
      h.setNow(rule.interval-1);h.frame(0);assert.equal(h.state.limitesActivos.length,1);
      h.frame(1);assert.equal(h.state.limitesActivos.length,2,`Level ${rule.level} spawn interval`);
    }
  });

  await check('Levels change at 10 and 25 points and fall back after penalties; portrait uses the answering level',()=>{
    const h=createHarness();h.play();
    for(const [before,after,origin,result] of [[9,10,1,2],[24,25,2,3]]){
      h.state.puntos=before;h.api.updateLevel();h.addLimit('L');h.api.handleAnswer('L');
      assert.equal(h.state.puntos,after);assert.equal(h.state.nivel,result);
      if(h.api.portrait)assert.deepEqual(h.portraitCalls.filter(call=>call[0]==='correct').at(-1),['correct',origin]);
    }
    h.api.handleAnswer('NE');assert.equal(h.state.puntos,22);assert.equal(h.state.nivel,2);
    if(h.api.portrait)assert.deepEqual(h.portraitCalls.filter(call=>call[0]==='incorrect').at(-1),['incorrect',3]);
  });

  await check('Victory is exactly 35 points; final response completes before overlay and restarting cancels stale overlays',async()=>{
    const h=createHarness({deferFinish:true});h.play();Object.assign(h.state,{puntos:34,maxScore:34,nivel:3});
    h.addLimit('L');h.api.handleAnswer('L');
    assert.equal(h.state.puntos,35);assert.equal(h.state.maxScore,35);assert.equal(h.state.estado,'victoria');
    h.api.handleAnswer('NE');h.api.spawnLimit();assert.equal(h.state.puntos,35);assert.equal(h.state.vidas,5);assert.equal(h.state.limitesActivos.length,0);
    if(h.api.portrait){assert.equal(h.elements.get('endOverlay').classList.contains('show'),false);h.finishPortrait();await flush();}
    assert.equal(h.elements.get('endOverlay').classList.contains('show'),true);
    h.elements.get('restartButton').emit('click');
    assert.equal(h.state.estado,'jugando');assert.equal(h.state.puntos,0);assert.equal(h.state.vidas,5);assert.equal(h.state.nivel,1);
    if(h.api.portrait){
      h.api.endGame(false);h.api.startGame();h.finishPortrait();await flush();
      assert.equal(h.elements.get('endOverlay').classList.contains('show'),false,'Old finish callback cannot cover the restarted game');
    }
  });

  await check('Defeat at zero lives blocks further answers; reset removes limits, frames, time balance and streak',async()=>{
    const h=createHarness();h.play();Object.assign(h.state,{vidas:1,puntos:6,maxScore:9,racha:4,timeFeatureEnabled:true,storedLimitTime:1,boostHeld:true,holdPointerId:7});
    const limit=h.addLimit('L');h.frame(10);h.api.handleAnswer('NE');await flush();
    assert.equal(h.state.estado,'derrota');assert.equal(h.state.vidas,0);assert.equal(h.state.puntos,3);assert.equal(h.state.maxScore,9);assert.equal(h.frames.size,0);
    h.api.handleAnswer('L');assert.equal(h.state.puntos,3);assert.equal(limit.removed,false);
    h.api.resetGame();
    assert.equal(h.state.estado,'inicio');assert.equal(h.state.vidas,5);assert.equal(h.state.puntos,0);assert.equal(h.state.maxScore,0);assert.equal(h.state.racha,0);
    assert.equal(h.state.limitesActivos.length,0);assert.equal(limit.element.isConnected,false);assert.equal(h.frames.size,0);
    assert.equal(h.state.storedLimitTime,0);assert.equal(h.state.boostHeld,false);assert.equal(h.state.stasisHeld,false);assert.equal(h.state.holdPointerId,null);
    assert.equal(h.state.timeFeatureEnabled,true,'The unlocked secret remains available across resets, as in the original game');
  });

  await check('Keyboard and click controls map all eight answers; repeated and unrelated keys do nothing',()=>{
    const h=createHarness();
    const mappings=[['ArrowUp','+infinito'],['ArrowDown','-infinito'],['ArrowLeft','0-'],['ArrowRight','0+'],['KeyW','NE'],['KeyA','-L'],['KeyS','0'],['KeyD','L']];
    assert.equal(h.elements.get('controls').children.length,8);
    for(const [code,answer] of mappings){
      h.play();const limit=h.addLimit(answer);
      const event=h.document.emit('keydown',{code,repeat:false});
      assert.equal(event.prevented,true);assert.equal(limit.removed,true);assert.equal(h.state.puntos,1);
    }
    h.play();const limit=h.addLimit('L');
    h.document.emit('keydown',{code:'KeyD',repeat:true});h.document.emit('keydown',{code:'Escape',repeat:false});
    assert.equal(limit.removed,false);assert.equal(h.state.puntos,0);assert.equal(h.state.vidas,5);
    const button=h.elements.get('controls').children.find(item=>item.dataset.answer==='L');
    h.elements.get('controls').emit('click',{target:{closest:()=>button}});
    assert.equal(limit.removed,true);assert.equal(h.state.puntos,1);
  });

  await check('Four music clicks within 2 seconds unlock time mode; stale clicks do not count',()=>{
    const stale=createHarness();
    for(const at of [0,100,200,2201]){stale.setNow(at);stale.api.registerMusicSecretClick();}
    assert.equal(stale.state.timeFeatureEnabled,false);
    const h=createHarness();
    for(const at of [0,600,1200]){h.setNow(at);h.elements.get('musicToggle').emit('click');}
    assert.equal(h.state.timeFeatureEnabled,false);
    h.setNow(1800);h.elements.get('musicToggle').emit('click');
    assert.equal(h.state.timeFeatureEnabled,true);assert.equal(h.elements.get('timeBubble').classList.contains('show'),true);
  });

  await check('Time boost multiplies falling speed by 3; stasis consumes saved time, freezes play and stops on release/blur',()=>{
    const h=createHarness();h.play();const limit=h.addLimit('L',100);
    const pointer={pointerType:'mouse',button:0,pointerId:4,clientX:100,clientY:150,target:h.elements.get('leibnizImage')};
    h.document.emit('pointerdown',{...pointer});assert.equal(h.state.boostHeld,false);
    h.api.enableTimeFeature();h.document.emit('pointerdown',{...pointer});assert.equal(h.state.boostHeld,true);
    h.frame(50);near(limit.y,100.9,'Boost fall distance');near(h.state.storedLimitTime,.05,'Saved boost time');
    h.document.emit('pointerup',{pointerId:99});assert.equal(h.state.boostHeld,true);
    h.document.emit('pointerup',{pointerId:4});assert.equal(h.state.boostHeld,false);
    h.state.storedLimitTime=.08;
    h.document.emit('pointerdown',{...pointer,target:h.elements.get('timeBubble')});
    const frozenY=limit.y;h.frame(50);near(limit.y,frozenY,'Stasis freezes falling');near(h.state.storedLimitTime,.03,'Stasis consumes saved time');
    h.frame(50);near(limit.y,frozenY,'Last stasis frame stays frozen');assert.equal(h.state.storedLimitTime,0);assert.equal(h.state.stasisHeld,false);
    h.frame(50);near(limit.y,frozenY+.3,'Normal falling resumes');
    h.document.emit('pointerdown',{...pointer});h.window.emit('blur');assert.equal(h.state.boostHeld,false);assert.equal(h.state.holdPointerId,null);
    h.document.emit('pointerdown',{...pointer,target:h.elements.get('timeBubble')});assert.equal(h.state.stasisHeld,false,'An empty time bank cannot freeze the game');
  });

  await check('Music pause/resume leaves the game active and completed tracks advance the playlist',()=>{
    const h=createHarness();h.api.startGame();
    assert.equal(h.state.musicAudio.paused,false);
    h.elements.get('musicToggle').emit('click');assert.equal(h.state.musicAudio.paused,true);assert.equal(h.state.estado,'jugando');
    h.elements.get('musicToggle').emit('click');assert.equal(h.state.musicAudio.paused,false);
    h.state.musicAudio.emit('ended');assert.equal(h.state.musicIndex,1);
  });

  await check('Last-life expiry stops the frame immediately: no later score deductions or new animation frame',()=>{
    const h=createHarness();h.play();Object.assign(h.state,{vidas:1,puntos:10,maxScore:10,nivel:2});
    const first=h.addLimit('L',509),second=h.addLimit('NE',509);
    h.frame(50);
    assert.equal(h.state.estado,'derrota');assert.equal(h.state.vidas,0);assert.equal(first.removed,true);
    assert.deepEqual(
      {points:h.state.puntos,secondRemoved:second.removed,pendingFrames:h.frames.size},
      {points:8,secondRemoved:false,pendingFrames:0},
      'Defeat must stop score changes, processing further limits and scheduling frames'
    );
  });

  await check('Restarting ignores the previous game initial-spawn timeout and keeps the new 450 ms delay',()=>{
    const h=createHarness();h.api.startGame();h.step(400);h.api.startGame();
    h.step(50);assert.equal(h.state.limitesActivos.length,0,'The old start timeout cannot spawn into the restarted game');
    h.step(399);assert.equal(h.state.limitesActivos.length,0);
    h.step(1);assert.equal(h.state.limitesActivos.length,1);
  });

  console.log(JSON.stringify({status:failures.length?'failed':'passed',source:reference||'working tree',checks,failures},null,2));
  if(failures.length)process.exitCode=1;
})().catch(error=>{console.error(error);process.exitCode=1;});
