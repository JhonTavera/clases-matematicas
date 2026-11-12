/* Cada nivel: reposo, cuatro pasos de habla, cuatro de acierto y cuatro de error. */
class LeibnizPortrait {
  static EVENT_CONFIG = {
    1: {
      spawn: { offset: 0, enter: 120, hold: 160, exit: 180, gesture: 'habla' },
      correct: { offset: 4, enter: 170, hold: 260, exit: 220, gesture: 'ceja-levantada' },
      incorrect: { offset: 8, enter: 140, hold: 230, exit: 220, gesture: 'ojos-cerrados' }
    },
    2: {
      spawn: { offset: 0, enter: 120, hold: 160, exit: 180, gesture: 'habla' },
      correct: { offset: 4, enter: 170, hold: 260, exit: 220, gesture: 'disgusto' },
      incorrect: { offset: 8, enter: 140, hold: 230, exit: 220, gesture: 'ojos-cerrados' }
    },
    3: {
      spawn: { offset: 0, enter: 140, hold: 220, exit: 220, gesture: 'boca-exagerada' },
      correct: {
        offset: 4, enter: 0, hold: 1000, exit: 0, gesture: 'golpe-fijo',
        still: { src: 'assets/animacion/leibniz-nivel-3-acierto.png' },
        sound: 'assets/audio/golpe.mp3'
      },
      incorrect: { offset: 8, enter: 170, hold: 260, exit: 220, gesture: 'sonrisa' }
    }
  };

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.level = 1;
    this.displayLevel = 1;
    this.active = false;
    this.images = new Map();
    this.stills = new Map();
    this.pendingStills = new Set();
    this.fallbacks = new Map();
    this.failedLevels = new Set();
    this.frameId = null;
    this.action = null;
    this.queue = [];
    this.transition = null;
    this.finishResolvers = [];
    this.soundEnabled = true;
    this.audioUnlocked = false;
    this.audioUnlockPending = false;
    this.audioToken = 0;
    this.slapAudio = new Audio(LeibnizPortrait.EVENT_CONFIG[3].correct.sound);
    this.slapAudio.preload = 'auto';
    this.slapAudio.volume = 0.8;
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.tick = this.tick.bind(this);
    this.ready = Promise.all([
      ...[1, 2, 3].map(level => this.loadLevel(level)),
      this.loadStill(LeibnizPortrait.EVENT_CONFIG[3].correct.still)
    ]);
    this.reduced.addEventListener('change', () => {
      this.clearGestures();
      this.schedule();
    });
    document.addEventListener('visibilitychange', () => {
      this.clearGestures();
      this.schedule();
    });
  }

  loadLevel(level) {
    return new Promise(resolve => {
      const image = new Image();
      image.onload = () => {
        this.images.set(level, image);
        this.schedule();
        resolve(true);
      };
      image.onerror = () => {
        const fallback = new Image();
        let triedOriginal = false;
        fallback.onload = () => {
          this.fallbacks.set(level, fallback);
          this.schedule();
          resolve(false);
        };
        fallback.onerror = () => {
          if (!triedOriginal) {
            triedOriginal = true;
            fallback.src = `assets/${level}1.png`;
            return;
          }
          this.failedLevels.add(level);
          this.queue = this.queue.filter(event => event.level !== level);
          this.schedule();
          resolve(false);
        };
        fallback.src = `assets/animacion/leibniz-eventos-nivel-${level}-reposo.webp`;
      };
      image.src = `assets/animacion/leibniz-eventos-nivel-${level}.webp`;
    });
  }

  hasImage(level) {
    return this.images.has(level) || this.fallbacks.has(level);
  }

  loadStill(still) {
    this.pendingStills.add(still.src);
    return new Promise(resolve => {
      const image = new Image();
      image.onload = () => {
        this.stills.set(still.src, image);
        this.pendingStills.delete(still.src);
        this.schedule();
        resolve(true);
      };
      // Si falta el PNG se sostiene una única celda; no se anima el atlas antiguo.
      image.onerror = () => {
        this.pendingStills.delete(still.src);
        this.schedule();
        resolve(false);
      };
      image.src = still.src;
    });
  }

  setSoundEnabled(enabled) {
    this.soundEnabled = Boolean(enabled);
    if (!this.soundEnabled) this.stopSound();
  }

  unlockAudio() {
    if (!this.soundEnabled || this.audioUnlocked || this.audioUnlockPending || this.action?.sound) return;
    const audio = this.slapAudio;
    const token = ++this.audioToken;
    this.audioUnlockPending = true;
    audio.muted = true;
    // Se prepara dentro del clic de inicio, también para reacciones encoladas.
    Promise.resolve(audio.play()).then(() => {
      if (token !== this.audioToken) return;
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
      this.audioUnlocked = true;
      this.audioUnlockPending = false;
    }).catch(() => {
      if (token !== this.audioToken) return;
      audio.muted = false;
      this.audioUnlockPending = false;
    });
  }

  playSound() {
    if (!this.soundEnabled) return;
    const audio = this.slapAudio;
    const token = ++this.audioToken;
    this.audioUnlockPending = false;
    audio.pause();
    audio.currentTime = 0;
    audio.muted = false;
    Promise.resolve(audio.play()).then(() => {
      if (token === this.audioToken) this.audioUnlocked = true;
    }).catch(() => {});
  }

  stopSound() {
    this.audioToken += 1;
    this.audioUnlockPending = false;
    this.slapAudio.pause();
    this.slapAudio.currentTime = 0;
    this.slapAudio.muted = false;
  }

  clearGestures() {
    this.stopSound();
    this.action = null;
    this.queue = [];
    this.transition = null;
    this.displayLevel = this.level;
    this.resolveFinished();
  }

  reset(level = 1) {
    this.active = false;
    this.level = level;
    this.clearGestures();
    this.schedule();
  }

  setActive(active) {
    this.active = active;
    if (!active) this.clearGestures();
    this.schedule();
  }

  setLevel(level) {
    if (![1, 2, 3].includes(level)) return;
    // El nivel deseado cambia ahora; una respuesta en curso conserva su expresión.
    this.level = level;
    if (this.reduced.matches || document.hidden) this.clearGestures();
    this.schedule();
  }

  speak(level = this.level) {
    this.enqueue('spawn', level);
  }

  react(kind, level = this.level) {
    if (kind === 'correct' || kind === 'incorrect') this.enqueue(kind, level);
  }

  enqueue(kind, level) {
    if (!this.active || this.reduced.matches || document.hidden || !LeibnizPortrait.EVENT_CONFIG[level] || this.failedLevels.has(level)) return;
    const event = { kind, level };
    if (kind === 'spawn') {
      // Un límite recién visible nunca interrumpe el gesto de una respuesta.
      this.queue = this.queue.filter(item => item.kind !== 'spawn');
      this.queue.push(event);
    } else {
      // Las respuestas van delante del habla pendiente y conservan su orden.
      const pendingSpawn = this.queue.find(item => item.kind === 'spawn');
      this.queue = this.queue.filter(item => item.kind !== 'spawn');
      this.queue.push(event);
      if (pendingSpawn) this.queue.push(pendingSpawn);
      if (this.action && this.action.kind === 'spawn') {
        this.action = null;
        if (LeibnizPortrait.EVENT_CONFIG[level][kind].still) {
          this.transition = null;
          this.displayLevel = level;
        } else this.startTransition(level, performance.now(), 100);
      }
    }
    this.schedule();
  }

  finish() {
    // Deja terminar la última respuesta antes de mostrar victoria o derrota.
    this.active = false;
    this.queue = this.queue.filter(event => event.kind !== 'spawn');
    if (this.action && this.action.kind === 'spawn') this.action = null;
    if (this.reduced.matches || document.hidden) this.clearGestures();
    const finished = new Promise(resolve => this.finishResolvers.push(resolve));
    this.schedule();
    return finished;
  }

  resolveFinished() {
    if (this.action || this.queue.length || this.transition) return;
    const resolvers = this.finishResolvers.splice(0);
    for (const resolve of resolvers) resolve();
  }

  startTransition(level, now, duration = 420) {
    const previous = document.createElement('canvas');
    previous.width = this.canvas.width;
    previous.height = this.canvas.height;
    previous.getContext('2d').drawImage(this.canvas, 0, 0);
    this.displayLevel = level;
    this.transition = { previous, start: now, duration };
  }

  advance(now) {
    if (this.reduced.matches) {
      this.clearGestures();
      return;
    }
    if (this.action && now - this.action.start >= this.action.duration) {
      const direct = Boolean(this.action.still);
      if (this.action.sound) this.stopSound();
      this.action = null;
      if (direct) {
        this.transition = null;
        if (!this.queue.length && this.hasImage(this.level)) this.displayLevel = this.level;
      }
    }
    if (!this.action && this.queue.length && this.canStartEvent(this.queue[0])) {
      const event = this.queue.shift();
      const config = LeibnizPortrait.EVENT_CONFIG[event.level][event.kind];
      if (config.still) {
        this.transition = null;
        this.displayLevel = event.level;
      } else if (event.level !== this.displayLevel) this.startTransition(event.level, now, 180);
      const duration = config.enter + config.hold + config.exit;
      this.action = { ...event, ...config, start: now, duration };
      if (config.sound) this.playSound();
    }
    if (!this.action && !this.queue.length && this.displayLevel !== this.level && this.hasImage(this.level)) {
      this.startTransition(this.level, now);
    }
    if (this.transition && now - this.transition.start >= this.transition.duration) this.transition = null;
    this.resolveFinished();
  }

  needsFrame() {
    return Boolean(this.action || this.transition || (this.queue.length && this.canStartEvent(this.queue[0])));
  }

  canStartEvent(event) {
    const still = LeibnizPortrait.EVENT_CONFIG[event.level][event.kind].still;
    return this.hasImage(event.level) && (!still || !this.pendingStills.has(still.src));
  }

  schedule() {
    if (this.frameId !== null) cancelAnimationFrame(this.frameId);
    this.frameId = null;
    if (document.hidden) {
      this.resolveFinished();
      return;
    }
    this.paint(performance.now());
    if (!this.reduced.matches && this.needsFrame()) this.frameId = requestAnimationFrame(this.tick);
  }

  tick(now) {
    this.frameId = null;
    if (document.hidden || this.reduced.matches) return;
    this.paint(now);
    if (this.needsFrame()) this.frameId = requestAnimationFrame(this.tick);
  }

  frameAt(now) {
    if (this.reduced.matches || !this.action) return 0;
    const action = this.action;
    const elapsed = Math.max(0, now - action.start);
    if (action.still) return action.offset + 4;
    let amount;
    if (elapsed < action.enter) amount = elapsed / action.enter;
    else if (elapsed < action.enter + action.hold) amount = 1;
    else amount = Math.max(0, 1 - (elapsed - action.enter - action.hold) / action.exit);
    const eased = amount * amount * (3 - 2 * amount);
    const step = Math.round(eased * 4);
    return step === 0 ? 0 : action.offset + step;
  }

  paint(now) {
    this.advance(now);
    const image = this.images.get(this.displayLevel);
    const fallback = this.fallbacks.get(this.displayLevel);
    if (!image && !fallback) return;
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);
    if (this.transition && !this.reduced.matches) {
      const t = Math.min(1, (now - this.transition.start) / this.transition.duration);
      ctx.drawImage(this.transition.previous, 0, 0);
      ctx.globalAlpha = t * t * (3 - 2 * t);
    }
    const still = this.action && this.action.still && this.stills.get(this.action.still.src);
    if (still) {
      const scale = Math.min(width / still.naturalWidth, height / still.naturalHeight);
      const drawnWidth = still.naturalWidth * scale;
      const drawnHeight = still.naturalHeight * scale;
      ctx.drawImage(still, (width - drawnWidth) / 2, (height - drawnHeight) / 2, drawnWidth, drawnHeight);
    } else if (image) ctx.drawImage(image, this.frameAt(now) * 480, 0, 480, 360, 0, 0, width, height);
    else ctx.drawImage(fallback, 0, 0, width, height);
    ctx.globalAlpha = 1;
  }
}
window.LeibnizPortrait = LeibnizPortrait;
