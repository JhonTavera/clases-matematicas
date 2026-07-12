(() => {
  "use strict";

  const canvas = document.getElementById("introCanvas");
  const intro = document.getElementById("intro");
  const accessButton = document.getElementById("introAccessBtn");
  const darkButton = document.getElementById("themeDark");
  const lightButton = document.getElementById("themeLight");

  if (!canvas || !intro || !accessButton) return;

  const context = canvas.getContext("2d", { alpha: true });
  const TWO_PI = Math.PI * 2;
  const DESIGN = { width: 1920, height: 1080 };
  const REFERENCE = { x: 138.5, y: 143.5 };
  const MAIN_LOGO = { x: 960, y: 500, scale: 3.5 };
  const FINAL_LOGO = { x: 960, y: 485, scale: 3.1 };
  const MAX_FREQUENCY = 80;
  const SAMPLE_COUNT = 1536;
  const TRACE_STEPS = 1800;

  const TIMES = {
    tStart: 0.45,
    tEnd: 4.55,
    uStart: 4.15,
    uEnd: 8.65,
    fillStart: 8.72,
    settleStart: 9.35,
    settleEnd: 10.35,
    wordStart: 10.25,
    ready: 11.35,
    stop: 11.9
  };

  const T_RAW = [
    { x: 70, y: 48 },
    { x: 207, y: 48 },
    { x: 207, y: 89 },
    { x: 160, y: 89 },
    { x: 160, y: 186 },
    { x: 120, y: 186 },
    { x: 120, y: 89 },
    { x: 70, y: 89 }
  ];

  const clamp01 = value => Math.max(0, Math.min(1, value));
  const mix = (from, to, amount) => from + (to - from) * amount;
  const smooth = value => {
    const t = clamp01(value);
    return t * t * (3 - 2 * t);
  };

  function cubicPoint(start, controlA, controlB, end, amount) {
    const inverse = 1 - amount;
    return {
      x: inverse ** 3 * start.x
        + 3 * inverse ** 2 * amount * controlA.x
        + 3 * inverse * amount ** 2 * controlB.x
        + amount ** 3 * end.x,
      y: inverse ** 3 * start.y
        + 3 * inverse ** 2 * amount * controlA.y
        + 3 * inverse * amount ** 2 * controlB.y
        + amount ** 3 * end.y
    };
  }

  function makeURaw() {
    const points = [
      { x: 70, y: 98 },
      { x: 113, y: 98 },
      { x: 113, y: 196 },
      { x: 168, y: 196 },
      { x: 168, y: 98 },
      { x: 207, y: 98 },
      { x: 207, y: 184 }
    ];

    const firstStart = { x: 207, y: 184 };
    const firstEnd = { x: 138.5, y: 239 };
    for (let index = 1; index <= 72; index += 1) {
      points.push(cubicPoint(
        firstStart,
        { x: 207, y: 214.37 },
        { x: 176.33, y: 239 },
        firstEnd,
        index / 72
      ));
    }

    const secondStart = firstEnd;
    const secondEnd = { x: 70, y: 184 };
    for (let index = 1; index <= 72; index += 1) {
      points.push(cubicPoint(
        secondStart,
        { x: 100.67, y: 239 },
        { x: 70, y: 214.37 },
        secondEnd,
        index / 72
      ));
    }

    return points;
  }

  function resampleClosed(points, count) {
    const closed = [...points, points[0]];
    const lengths = [0];
    let totalLength = 0;

    for (let index = 1; index < closed.length; index += 1) {
      const dx = closed[index].x - closed[index - 1].x;
      const dy = closed[index].y - closed[index - 1].y;
      totalLength += Math.hypot(dx, dy);
      lengths.push(totalLength);
    }

    const samples = [];
    let segment = 1;
    for (let index = 0; index < count; index += 1) {
      const target = (index / count) * totalLength;
      while (segment < lengths.length - 1 && lengths[segment] < target) segment += 1;
      const before = lengths[segment - 1];
      const after = lengths[segment];
      const amount = after === before ? 0 : (target - before) / (after - before);
      samples.push({
        x: mix(closed[segment - 1].x, closed[segment].x, amount),
        y: mix(closed[segment - 1].y, closed[segment].y, amount)
      });
    }
    return samples;
  }

  function mapPoint(point, placement) {
    return {
      x: placement.x + (point.x - REFERENCE.x) * placement.scale,
      y: placement.y + (point.y - REFERENCE.y) * placement.scale
    };
  }

  function fourierCoefficients(rawPoints) {
    const samples = resampleClosed(rawPoints, SAMPLE_COUNT)
      .map(point => mapPoint(point, MAIN_LOGO));
    const frequencies = [0];
    for (let frequency = 1; frequency <= MAX_FREQUENCY; frequency += 1) {
      frequencies.push(frequency, -frequency);
    }

    return frequencies.map(frequency => {
      let real = 0;
      let imaginary = 0;
      for (let index = 0; index < samples.length; index += 1) {
        const angle = -TWO_PI * frequency * index / samples.length;
        const cosine = Math.cos(angle);
        const sine = Math.sin(angle);
        real += samples[index].x * cosine - samples[index].y * sine;
        imaginary += samples[index].x * sine + samples[index].y * cosine;
      }
      real /= samples.length;
      imaginary /= samples.length;
      return { frequency, real, imaginary, amplitude: Math.hypot(real, imaginary) };
    });
  }

  function reconstruct(coefficients, amount) {
    let x = 0;
    let y = 0;
    for (const coefficient of coefficients) {
      const angle = TWO_PI * coefficient.frequency * amount;
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      x += coefficient.real * cosine - coefficient.imaginary * sine;
      y += coefficient.real * sine + coefficient.imaginary * cosine;
    }
    return { x, y };
  }

  function makeTrace(coefficients) {
    const points = [];
    for (let index = 0; index <= TRACE_STEPS; index += 1) {
      points.push(reconstruct(coefficients, index / TRACE_STEPS));
    }
    return points;
  }

  const tCoefficients = fourierCoefficients(T_RAW);
  const uCoefficients = fourierCoefficients(makeURaw());
  const tTrace = makeTrace(tCoefficients);
  const uTrace = makeTrace(uCoefficients);

  let viewportWidth = 1;
  let viewportHeight = 1;
  let pixelRatio = 1;
  let stageScale = 1;
  let stageOffsetX = 0;
  let stageOffsetY = 0;
  let palette = readPalette();
  let startTimestamp = 0;
  let animationFrame = 0;
  let lastElapsed = 0;
  let animationDone = false;
  let introHidden = false;

  function readPalette() {
    const styles = getComputedStyle(document.documentElement);
    return {
      accent: styles.getPropertyValue("--accent").trim() || "#de0306",
      ink: styles.getPropertyValue("--ink").trim() || "#f7f8fb"
    };
  }

  function withAlpha(color, alpha) {
    const hex = color.replace("#", "").trim();
    if (/^[0-9a-f]{3}$/i.test(hex)) {
      const red = parseInt(hex[0] + hex[0], 16);
      const green = parseInt(hex[1] + hex[1], 16);
      const blue = parseInt(hex[2] + hex[2], 16);
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
    if (/^[0-9a-f]{6}$/i.test(hex)) {
      const red = parseInt(hex.slice(0, 2), 16);
      const green = parseInt(hex.slice(2, 4), 16);
      const blue = parseInt(hex.slice(4, 6), 16);
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
    return color;
  }

  function resizeCanvas() {
    viewportWidth = Math.max(1, window.innerWidth);
    viewportHeight = Math.max(1, window.innerHeight);
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(viewportWidth * pixelRatio);
    canvas.height = Math.round(viewportHeight * pixelRatio);

    stageScale = Math.min(viewportWidth / 720, viewportHeight / DESIGN.height);
    stageOffsetX = viewportWidth / 2 - (DESIGN.width / 2) * stageScale;
    stageOffsetY = viewportHeight / 2 - (DESIGN.height / 2) * stageScale;

    const logoTop = stageOffsetY
      + (FINAL_LOGO.y + (48 - REFERENCE.y) * FINAL_LOGO.scale) * stageScale;
    intro.style.setProperty("--intro-logo-top", `${logoTop}px`);

    if (animationDone) drawFinal();
    else drawFrame(lastElapsed);
  }

  function beginDrawing() {
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, viewportWidth, viewportHeight);
    context.save();
    context.translate(stageOffsetX, stageOffsetY);
    context.scale(stageScale, stageScale);
    context.lineCap = "round";
    context.lineJoin = "round";
  }

  function endDrawing() {
    context.restore();
  }

  function drawTrace(points, progress, alpha) {
    const lastIndex = Math.max(1, Math.floor(clamp01(progress) * (points.length - 1)));
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (let index = 1; index <= lastIndex; index += 1) {
      context.lineTo(points[index].x, points[index].y);
    }
    context.strokeStyle = withAlpha(palette.accent, alpha);
    context.lineWidth = 2.2;
    context.stroke();
  }

  function drawEpicycles(coefficients, progress, alpha) {
    let x = coefficients[0].real;
    let y = coefficients[0].imaginary;

    for (let index = 1; index < coefficients.length; index += 1) {
      const coefficient = coefficients[index];
      const previousX = x;
      const previousY = y;
      const angle = TWO_PI * coefficient.frequency * progress;
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      x += coefficient.real * cosine - coefficient.imaginary * sine;
      y += coefficient.real * sine + coefficient.imaginary * cosine;

      context.beginPath();
      context.arc(previousX, previousY, coefficient.amplitude, 0, TWO_PI);
      context.strokeStyle = withAlpha(palette.ink, alpha * 0.32);
      context.lineWidth = 1.05;
      context.stroke();

      context.beginPath();
      context.moveTo(previousX, previousY);
      context.lineTo(x, y);
      context.strokeStyle = withAlpha(palette.accent, alpha * 0.48);
      context.lineWidth = 1.05;
      context.stroke();
    }

    context.beginPath();
    context.arc(x, y, 3.7, 0, TWO_PI);
    context.fillStyle = palette.accent;
    context.fill();
  }

  function drawTPath(placement, alpha) {
    context.save();
    context.translate(placement.x, placement.y);
    context.scale(placement.scale, placement.scale);
    context.translate(-REFERENCE.x, -REFERENCE.y);
    context.beginPath();
    context.moveTo(70, 48);
    context.lineTo(207, 48);
    context.lineTo(207, 89);
    context.lineTo(160, 89);
    context.lineTo(160, 186);
    context.lineTo(120, 186);
    context.lineTo(120, 89);
    context.lineTo(70, 89);
    context.closePath();
    context.globalAlpha = alpha;
    context.fillStyle = palette.accent;
    context.fill();
    context.restore();
  }

  function drawUPath(placement, alpha) {
    context.save();
    context.translate(placement.x, placement.y);
    context.scale(placement.scale, placement.scale);
    context.translate(-REFERENCE.x, -REFERENCE.y);
    context.beginPath();
    context.moveTo(70, 98);
    context.lineTo(113, 98);
    context.lineTo(113, 196);
    context.lineTo(168, 196);
    context.lineTo(168, 98);
    context.lineTo(207, 98);
    context.lineTo(207, 184);
    context.bezierCurveTo(207, 214.37, 176.33, 239, 138.5, 239);
    context.bezierCurveTo(100.67, 239, 70, 214.37, 70, 184);
    context.closePath();
    context.globalAlpha = alpha;
    context.fillStyle = palette.accent;
    context.fill();
    context.restore();
  }

  function drawFilledLogo(placement, alpha) {
    drawTPath(placement, alpha);
    drawUPath(placement, alpha);
  }

  function drawWordmark(alpha) {
    context.save();
    context.globalAlpha = alpha;
    context.fillStyle = palette.ink;
    context.textAlign = "center";
    context.textBaseline = "alphabetic";
    context.font = '700 108px Arial, "Helvetica Neue", sans-serif';
    context.fillText("Universidad", 960, 892);
    context.fillText("del Tolima", 960, 997);
    context.restore();
  }

  function drawFrame(elapsed) {
    if (!context || introHidden) return;
    beginDrawing();

    const settle = smooth((elapsed - TIMES.settleStart) / (TIMES.settleEnd - TIMES.settleStart));
    const traceAlpha = 1 - settle;

    if (elapsed >= TIMES.tStart && traceAlpha > 0.001) {
      const progress = clamp01((elapsed - TIMES.tStart) / (TIMES.tEnd - TIMES.tStart));
      drawTrace(tTrace, progress, traceAlpha);
      if (progress < 1) {
        const circleFade = 1 - smooth((progress - 0.9) / 0.1);
        drawEpicycles(tCoefficients, progress, circleFade * traceAlpha);
      }
    }

    if (elapsed >= TIMES.uStart && traceAlpha > 0.001) {
      const progress = clamp01((elapsed - TIMES.uStart) / (TIMES.uEnd - TIMES.uStart));
      drawTrace(uTrace, progress, traceAlpha);
      if (progress < 1) {
        const circleFade = 1 - smooth((progress - 0.9) / 0.1);
        drawEpicycles(uCoefficients, progress, circleFade * traceAlpha);
      }
    }

    if (elapsed >= TIMES.fillStart) {
      const fillAlpha = smooth((elapsed - TIMES.fillStart) / 0.72);
      const placement = {
        x: mix(MAIN_LOGO.x, FINAL_LOGO.x, settle),
        y: mix(MAIN_LOGO.y, FINAL_LOGO.y, settle),
        scale: mix(MAIN_LOGO.scale, FINAL_LOGO.scale, settle)
      };
      drawFilledLogo(placement, fillAlpha);
    }

    if (elapsed >= TIMES.wordStart) {
      drawWordmark(smooth((elapsed - TIMES.wordStart) / 0.85));
    }

    endDrawing();
  }

  function drawFinal() {
    if (!context || introHidden) return;
    beginDrawing();
    drawFilledLogo(FINAL_LOGO, 1);
    drawWordmark(1);
    endDrawing();
  }

  function setTheme(theme) {
    const selected = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = selected;
    darkButton?.setAttribute("aria-pressed", String(selected === "dark"));
    lightButton?.setAttribute("aria-pressed", String(selected === "light"));
    palette = readPalette();
    if (animationDone) drawFinal();
    else drawFrame(lastElapsed);
  }

  function hideIntro() {
    if (introHidden) {
      document.body.classList.remove("intro-active", "content-locked");
      document.getElementById("root")?.focus({ preventScroll: true });
      return;
    }
    intro.classList.add("leaving");
    window.setTimeout(() => {
      introHidden = true;
      window.cancelAnimationFrame(animationFrame);
      intro.hidden = true;
      intro.style.display = "none";
      document.body.classList.remove("intro-active", "content-locked");
      document.getElementById("root")?.focus({ preventScroll: true });
    }, 650);
  }

  function setButtonLabel(label) {
    accessButton.textContent = label;
  }

  function revealAccess() {
    intro.classList.add("ready");
    accessButton.disabled = false;
  }

  function animate(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    lastElapsed = (timestamp - startTimestamp) / 1000;
    drawFrame(lastElapsed);

    if (lastElapsed >= TIMES.ready) revealAccess();

    if (lastElapsed < TIMES.stop) {
      animationFrame = window.requestAnimationFrame(animate);
    } else {
      animationDone = true;
      drawFinal();
    }
  }

  darkButton?.addEventListener("click", () => setTheme("dark"));
  lightButton?.addEventListener("click", () => setTheme("light"));
  window.addEventListener("resize", resizeCanvas, { passive: true });

  const initialTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
  setTheme(initialTheme);
  resizeCanvas();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    animationDone = true;
    revealAccess();
    drawFinal();
  } else {
    animationFrame = window.requestAnimationFrame(animate);
  }

  window.UTIntro = {
    hide: hideIntro,
    setButtonLabel
  };
})();
