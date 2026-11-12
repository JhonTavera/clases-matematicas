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
        offset: 4, enter: 80, hold: 60, exit: 420, gesture: 'sacudida-cabeza',
        sequence: {
          src: 'assets/animacion/leibniz-nivel-3-acierto-secuencia.webp',
          columns: 8, rows: 3, width: 480, height: 360,
          durations: [40, 30, 30, 20, 20, 20, 30, 50, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 60]
        }
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
    this.sequences = new Map();
    this.fallbacks = new Map();
    this.failedLevels = new Set();
    this.frameId = null;
    this.action = null;
    this.queue = [];
    this.transition = null;
    this.finishResolvers = [];
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.tick = this.tick.bind(this);
    this.ready = Promise.all([
      ...[1, 2, 3].map(level => this.loadLevel(level)),
      this.loadSequence(LeibnizPortrait.EVENT_CONFIG[3].correct.sequence)
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

  loadSequence(sequence) {
    return new Promise(resolve => {
      const image = new Image();
      image.onload = () => {
        this.sequences.set(sequence.src, image);
        this.schedule();
        resolve(true);
      };
      // Si falla este recurso opcional, se mantiene el gesto del atlas del nivel.
      image.onerror = () => resolve(false);
      image.src = sequence.src;
    });
  }

  clearGestures() {
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
        this.startTransition(level, performance.now(), 100);
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
    if (this.action && now - this.action.start >= this.action.duration) this.action = null;
    if (!this.action && this.queue.length && this.hasImage(this.queue[0].level)) {
      const event = this.queue.shift();
      if (event.level !== this.displayLevel) this.startTransition(event.level, now, 180);
      const config = LeibnizPortrait.EVENT_CONFIG[event.level][event.kind];
      const sequence = config.sequence && this.sequences.has(config.sequence.src) ? config.sequence : null;
      const duration = sequence
        ? sequence.durations.reduce((total, milliseconds) => total + milliseconds, 0)
        : config.enter + config.hold + config.exit;
      this.action = { ...event, ...config, sequence, start: now, duration };
    }
    if (!this.action && !this.queue.length && this.displayLevel !== this.level && this.hasImage(this.level)) {
      this.startTransition(this.level, now);
    }
    if (this.transition && now - this.transition.start >= this.transition.duration) this.transition = null;
    this.resolveFinished();
  }

  needsFrame() {
    return Boolean(this.action || this.transition || (this.queue.length && this.hasImage(this.queue[0].level)));
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
    if (action.sequence) {
      let boundary = 0;
      for (let frame = 0; frame < action.sequence.durations.length; frame += 1) {
        boundary += action.sequence.durations[frame];
        if (elapsed < boundary) return frame;
      }
      return action.sequence.durations.length - 1;
    }
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
    const sequence = this.action && this.action.sequence;
    if (sequence) {
      const frame = this.frameAt(now);
      ctx.drawImage(this.sequences.get(sequence.src),
        (frame % sequence.columns) * sequence.width, Math.floor(frame / sequence.columns) * sequence.height,
        sequence.width, sequence.height, 0, 0, width, height);
    } else if (image) ctx.drawImage(image, this.frameAt(now) * 480, 0, 480, 360, 0, 0, width, height);
    else ctx.drawImage(fallback, 0, 0, width, height);
    ctx.globalAlpha = 1;
  }
}
window.LeibnizPortrait = LeibnizPortrait;
