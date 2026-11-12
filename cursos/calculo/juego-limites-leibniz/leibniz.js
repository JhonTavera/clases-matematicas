/* Fotogramas generados con ImageGen; atlas de 480 × 360 px por celda. */
class LeibnizPortrait {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.level = 1;
    this.active = false;
    this.images = new Map();
    this.fallbacks = new Map();
    this.frameId = null;
    this.talkStart = null;
    this.blinkStart = null;
    this.transitionStart = null;
    this.reaction = null;
    this.previous = null;
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.tick = this.tick.bind(this);
    this.ready = Promise.all([1, 2, 3].map(level => this.loadLevel(level)));
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
        fallback.onload = () => {
          this.fallbacks.set(level, fallback);
          this.schedule();
          resolve(false);
        };
        fallback.onerror = () => resolve(false);
        fallback.src = `assets/${level}1.png`;
      };
      image.src = `assets/animacion/leibniz-nivel-${level}.webp`;
    });
  }

  clearGestures() {
    this.talkStart = null;
    this.blinkStart = null;
    this.transitionStart = null;
    this.previous = null;
    this.reaction = null;
    this.nextBlink = performance.now() + 2800 + Math.random() * 2200;
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
    if (level === this.level || ![1, 2, 3].includes(level)) return;
    this.previous = document.createElement('canvas');
    this.previous.width = this.canvas.width;
    this.previous.height = this.canvas.height;
    this.previous.getContext('2d').drawImage(this.canvas, 0, 0);
    this.level = level;
    this.transitionStart = performance.now();
    this.talkStart = null;
    this.blinkStart = null;
    this.schedule();
  }

  speak() {
    if (!this.active || this.reduced.matches || document.hidden) return;
    this.talkStart = performance.now();
    this.blinkStart = null;
    this.nextBlink = this.talkStart + 3000;
    this.schedule();
  }

  react(kind) {
    if (!this.active || this.reduced.matches || document.hidden) return;
    this.reaction = { kind, start: performance.now() };
    this.schedule();
  }

  schedule() {
    if (this.frameId !== null) cancelAnimationFrame(this.frameId);
    this.frameId = null;
    if (document.hidden) return;
    this.paint(performance.now());
    if (!this.reduced.matches && (this.active || this.transitionStart !== null)) {
      this.frameId = requestAnimationFrame(this.tick);
    }
  }

  tick(now) {
    this.frameId = null;
    if (document.hidden || this.reduced.matches) return;
    this.paint(now);
    if (this.active || this.transitionStart !== null) this.frameId = requestAnimationFrame(this.tick);
  }

  frameAt(now) {
    if (this.reduced.matches || !this.active) return 0;
    if (this.talkStart !== null) {
      const t = (now - this.talkStart) / 640;
      if (t < 1) {
        const phase = Math.sin(Math.PI * ((t * 2) % 1));
        const mouth = Math.round(4 * phase);
        return mouth === 0 ? 0 : 4 + mouth;
      }
      this.talkStart = null;
    }
    if (now >= this.nextBlink && this.blinkStart === null) this.blinkStart = now;
    if (this.blinkStart !== null) {
      const t = (now - this.blinkStart) / 280;
      if (t < 1) return Math.round(4 * Math.sin(Math.PI * t));
      this.blinkStart = null;
      this.nextBlink = now + 2800 + Math.random() * 2200;
    }
    return 0;
  }

  paint(now) {
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const image = this.images.get(this.level);
    const fallback = this.fallbacks.get(this.level);
    if (!image && !fallback) return;
    const frame = this.frameAt(now);
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);
    if (this.previous && this.transitionStart !== null && !this.reduced.matches) {
      const t = Math.min(1, (now - this.transitionStart) / 420);
      ctx.drawImage(this.previous, 0, 0);
      ctx.globalAlpha = t * t * (3 - 2 * t);
      if (t >= 1) { this.previous = null; this.transitionStart = null; }
    } else {
      this.previous = null;
      this.transitionStart = null;
    }
    ctx.save();
    if (this.reaction && !this.reduced.matches) {
      const t = (now - this.reaction.start) / 520;
      if (t >= 1) this.reaction = null;
      else if (this.reaction.kind === 'correct') ctx.translate(0, Math.sin(t * Math.PI) * 5);
      else ctx.translate(Math.sin(t * Math.PI * 4) * (1 - t) * 4, 0);
    }
    if (image) ctx.drawImage(image, frame * 480, 0, 480, 360, 0, 0, width, height);
    else ctx.drawImage(fallback, 0, 0, width, height);
    ctx.restore();
    ctx.globalAlpha = 1;
  }
}
window.LeibnizPortrait = LeibnizPortrait;
