(() => {
  "use strict";

  const canvas = document.getElementById("introCanvas");
  const intro = document.getElementById("intro");
  const accessButton = document.getElementById("introAccessBtn");
  const darkButton = document.getElementById("themeDark");
  const lightButton = document.getElementById("themeLight");

  if (!canvas || !intro || !accessButton) return;

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  const TWO_PI = Math.PI * 2;
  const DESIGN = { width: 1920, height: 1080 };
  const DESIGN_CENTER = { x: DESIGN.width / 2, y: DESIGN.height / 2 };
  const REFERENCE = { x: 138.5, y: 143.5 };
  const MAIN_LOGO = { x: 960, y: 500, scale: 3.5 };
  const FINAL_LOGO = { x: 960, y: 485, scale: 3.1 };
  const IDENTITY_CAMERA = { x: DESIGN_CENTER.x, y: DESIGN_CENTER.y, zoom: 1 };
  const MAX_FREQUENCY = 80;
  const SAMPLE_COUNT = 1536;
  const TRACE_STEPS = 1800;
  const PRELUDE_PHASE = 0.16;
  const TRACER_AMPLITUDE = 22;
  const MAX_CANVAS_PIXELS = 8_000_000;

  const TIMES = {
    tDrawStart: 0,
    tDrawEnd: 10,
    tFadeEnd: 10.8,
    cameraEnterStart: 10,
    uDrawStart: 12,
    cameraHoldEnd: 15,
    cameraTravelEnd: 26,
    cameraTraceEnd: 29,
    cameraPullEnd: 33,
    uDrawEnd: 36,
    uFadeEnd: 37,
    fillStart: 36.5,
    settleStart: 37,
    settleEnd: 38.4,
    wordStart: 38.2,
    ready: 39.5,
    stop: 40
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

  const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));
  const clamp01 = value => clamp(value, 0, 1);
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

    const coefficients = frequencies.map(frequency => {
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

    const rotatingTerms = coefficients.slice(1).sort((a, b) => b.amplitude - a.amplitude);
    let tracerIndex = 0;
    for (let index = 1; index < rotatingTerms.length; index += 1) {
      const currentDistance = Math.abs(rotatingTerms[index].amplitude - TRACER_AMPLITUDE);
      const bestDistance = Math.abs(rotatingTerms[tracerIndex].amplitude - TRACER_AMPLITUDE);
      if (currentDistance < bestDistance) tracerIndex = index;
    }
    const [tracer] = rotatingTerms.splice(tracerIndex, 1);
    return [coefficients[0], ...rotatingTerms, tracer];
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

  function makeTrace(coefficients, startPhase) {
    const points = [];
    for (let index = 0; index <= TRACE_STEPS; index += 1) {
      points.push(reconstruct(coefficients, startPhase + index / TRACE_STEPS));
    }
    return points;
  }

  const tCoefficients = fourierCoefficients(T_RAW);
  const uCoefficients = fourierCoefficients(makeURaw());
  const tTrace = makeTrace(tCoefficients, PRELUDE_PHASE);
  const uTrace = makeTrace(uCoefficients, PRELUDE_PHASE);

  let viewportWidth = 1;
  let viewportHeight = 1;
  let pixelRatio = 1;
  let stageScale = 1;
  let stageOffsetX = 0;
  let stageOffsetY = 0;
  let tStartZoom = 2;
  let palette = readPalette();
  let previousTimestamp = null;
  let animationFrame = 0;
  let lastElapsed = 0;
  let animationStarted = false;
  let animationDone = false;
  let userPaused = false;
  const playbackRate = TIMES.stop / 55;
  let manualCamera = null;
  let displayedCamera = { ...IDENTITY_CAMERA };
  const pointers = new Map();
  const pauseButton = document.getElementById("introPause");
  const autoButton = document.getElementById("introAuto");
  const audio = document.getElementById("introAudio");
  let resumeAudio = false;
  let lastTap = null;
  const tapStarts = new Map();
  let introHidden = false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    if (introHidden) return;
    viewportWidth = Math.max(1, window.innerWidth);
    viewportHeight = Math.max(1, window.innerHeight);
    const deviceRatio = window.devicePixelRatio || 1;
    const pixelBudgetRatio = Math.sqrt(MAX_CANVAS_PIXELS / (viewportWidth * viewportHeight));
    pixelRatio = Math.min(deviceRatio, 2, pixelBudgetRatio);
    canvas.width = Math.round(viewportWidth * pixelRatio);
    canvas.height = Math.round(viewportHeight * pixelRatio);

    stageScale = Math.min(viewportWidth / 720, viewportHeight / DESIGN.height);
    stageOffsetX = viewportWidth / 2 - DESIGN_CENTER.x * stageScale;
    stageOffsetY = viewportHeight / 2 - DESIGN_CENTER.y * stageScale;

    const targetDiameter = Math.min(viewportWidth, viewportHeight) * 0.76;
    const firstDiameter = 2 * uCoefficients[1].amplitude * stageScale;
    tStartZoom = clamp(targetDiameter / Math.max(firstDiameter, 1), 1.35, 3.1);

    const logoTop = stageOffsetY
      + (FINAL_LOGO.y + (48 - REFERENCE.y) * FINAL_LOGO.scale) * stageScale;
    intro.style.setProperty("--intro-logo-top", `${logoTop}px`);

    if (animationDone) drawFinal();
    else drawFrame(lastElapsed);
  }

  function pointOnSegment(segment, endBias) {
    return {
      x: mix(segment.centerX, segment.endX, endBias),
      y: mix(segment.centerY, segment.endY, endBias)
    };
  }

  function focusAlongChain(segments, progress, endBias) {
    // Spend time on the large early terms before visiting the fine corrections.
    const position = Math.expm1(clamp01(progress) * Math.log(segments.length));
    const index = Math.min(segments.length - 1, Math.floor(position));
    const nextIndex = Math.min(segments.length - 1, index + 1);
    const local = position - index;
    const from = pointOnSegment(segments[index], endBias);
    const to = pointOnSegment(segments[nextIndex], endBias);
    return {
      x: mix(from.x, to.x, local),
      y: mix(from.y, to.y, local),
      index: Math.min(segments.length - 1, Math.round(position))
    };
  }

  function cameraAt(elapsed, segments) {
    if (elapsed < TIMES.cameraEnterStart || elapsed >= TIMES.cameraPullEnd) return IDENTITY_CAMERA;
    const anchor = uCoefficients[0];
    if (elapsed < TIMES.uDrawStart) {
      const enter = smooth((elapsed - TIMES.cameraEnterStart)
        / (TIMES.uDrawStart - TIMES.cameraEnterStart));
      return {
        x: mix(DESIGN_CENTER.x, anchor.real, enter),
        y: mix(DESIGN_CENTER.y, anchor.imaginary, enter),
        zoom: Math.exp(mix(0, Math.log(tStartZoom), enter))
      };
    }
    if (!segments?.length) return IDENTITY_CAMERA;

    const first = segments[0];
    const last = segments[segments.length - 1];
    const closeZoom = clamp(tStartZoom * 2.15, 4.6, 6.6);

    if (elapsed <= TIMES.cameraHoldEnd) {
      return {
        x: first.centerX,
        y: first.centerY,
        zoom: tStartZoom,
        followIndex: 0
      };
    }

    if (elapsed <= TIMES.cameraTravelEnd) {
      const raw = (elapsed - TIMES.cameraHoldEnd)
        / (TIMES.cameraTravelEnd - TIMES.cameraHoldEnd);
      const progress = smooth(raw);
      const focus = focusAlongChain(segments, progress, mix(0, 0.58, progress));
      return {
        x: focus.x,
        y: focus.y,
        zoom: Math.exp(mix(Math.log(tStartZoom), Math.log(closeZoom), progress)),
        followIndex: focus.index
      };
    }

    const finalFocus = pointOnSegment(last, 0.58);
    if (elapsed <= TIMES.cameraTraceEnd) {
      return {
        x: finalFocus.x,
        y: finalFocus.y,
        zoom: closeZoom,
        followIndex: segments.length - 1
      };
    }

    const retreat = smooth((elapsed - TIMES.cameraTraceEnd)
      / (TIMES.cameraPullEnd - TIMES.cameraTraceEnd));
    return {
      x: mix(finalFocus.x, DESIGN_CENTER.x, retreat),
      y: mix(finalFocus.y, DESIGN_CENTER.y, retreat),
      zoom: Math.exp(mix(Math.log(closeZoom), 0, retreat)),
      followIndex: segments.length - 1
    };
  }

  function beginDrawing(camera = IDENTITY_CAMERA) {
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, viewportWidth, viewportHeight);
    context.save();
    context.translate(stageOffsetX, stageOffsetY);
    context.scale(stageScale, stageScale);
    context.translate(DESIGN_CENTER.x, DESIGN_CENTER.y);
    context.scale(camera.zoom, camera.zoom);
    context.translate(-camera.x, -camera.y);
    context.lineCap = "round";
    context.lineJoin = "round";
  }

  function endDrawing() {
    context.restore();
  }

  function tSeriesState(elapsed) {
    const draw = clamp01((elapsed - TIMES.tDrawStart) / (TIMES.tDrawEnd - TIMES.tDrawStart));
    const circleAlpha = elapsed <= TIMES.tDrawEnd
      ? 1
      : 1 - smooth((elapsed - TIMES.tDrawEnd) / (TIMES.tFadeEnd - TIMES.tDrawEnd));
    return {
      reveal: 1,
      draw,
      phase: PRELUDE_PHASE + draw,
      visibleCircles: tCoefficients.length - 1,
      circleAlpha
    };
  }

  function seriesState(elapsed, coefficients, drawStart, drawEnd, fadeEnd) {
    if (elapsed < drawStart) return null;
    const reveal = 1;
    const draw = clamp01((elapsed - drawStart) / (drawEnd - drawStart));
    const phase = PRELUDE_PHASE + draw;
    const totalCircles = coefficients.length - 1;
    const visibleCircles = mix(1, totalCircles, reveal);
    const circleAlpha = elapsed <= drawEnd
      ? 1
      : 1 - smooth((elapsed - drawEnd) / (fadeEnd - drawEnd));
    return { reveal, draw, phase, visibleCircles, circleAlpha };
  }

  function drawTrace(points, progress, alpha, screenScale, endpoint) {
    if (progress <= 0 || alpha <= 0) return;
    const lastIndex = Math.floor(clamp01(progress) * (points.length - 1));
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (let index = 1; index <= lastIndex; index += 1) {
      context.lineTo(points[index].x, points[index].y);
    }
    if (endpoint && lastIndex < points.length - 1) {
      context.lineTo(endpoint.x, endpoint.y);
    }
    context.strokeStyle = withAlpha(palette.accent, alpha);
    context.lineWidth = 2.8 / screenScale;
    context.stroke();
  }

  function buildSegments(coefficients, phase, visibleCircles) {
    const total = coefficients.length - 1;
    const cappedVisible = clamp(visibleCircles, 1, total);
    const fullCount = Math.floor(cappedVisible);
    const partial = cappedVisible - fullCount;
    const limit = Math.min(total, Math.ceil(cappedVisible));
    const segments = [];
    let x = coefficients[0].real;
    let y = coefficients[0].imaginary;

    for (let index = 1; index <= limit; index += 1) {
      const coefficient = coefficients[index];
      const localReveal = index <= fullCount ? 1 : partial;
      if (localReveal <= 0) continue;
      const angle = TWO_PI * coefficient.frequency * phase;
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      const vectorX = (coefficient.real * cosine - coefficient.imaginary * sine) * localReveal;
      const vectorY = (coefficient.real * sine + coefficient.imaginary * cosine) * localReveal;
      const endX = x + vectorX;
      const endY = y + vectorY;
      segments.push({
        centerX: x,
        centerY: y,
        endX,
        endY,
        radius: coefficient.amplitude * localReveal
      });
      x = endX;
      y = endY;
    }
    return segments;
  }

  function appendArrowHead(segment, cssSize, screenScale) {
    const dx = segment.endX - segment.centerX;
    const dy = segment.endY - segment.centerY;
    const length = Math.hypot(dx, dy);
    if (length <= 0.0001) return;
    const angle = Math.atan2(dy, dx);
    const headLength = Math.min(cssSize / screenScale, length * 0.42);
    const headWidth = headLength * 0.3;
    const baseX = segment.endX - Math.cos(angle) * headLength;
    const baseY = segment.endY - Math.sin(angle) * headLength;
    const normalX = -Math.sin(angle) * headWidth;
    const normalY = Math.cos(angle) * headWidth;
    context.moveTo(segment.endX, segment.endY);
    context.lineTo(baseX + normalX, baseY + normalY);
    context.lineTo(baseX - normalX, baseY - normalY);
    context.closePath();
  }

  function drawEpicycles(
    coefficients,
    state,
    alpha,
    screenScale,
    focusIndex = -1,
    preparedSegments = null
  ) {
    if (!state || alpha <= 0) return;
    const segments = preparedSegments
      || buildSegments(coefficients, state.phase, state.visibleCircles);
    if (!segments.length) return;
    const last = segments[segments.length - 1];
    const ordinary = segments.slice(0, -1);
    const focusSegment = Number.isInteger(focusIndex) && focusIndex >= 0
      ? segments[Math.min(focusIndex, segments.length - 1)]
      : null;

    context.save();

    context.beginPath();
    for (const segment of segments) {
      context.moveTo(segment.centerX + segment.radius, segment.centerY);
      context.arc(segment.centerX, segment.centerY, segment.radius, 0, TWO_PI);
    }
    context.strokeStyle = withAlpha(palette.ink, alpha * 0.48);
    context.lineWidth = 1.25 / screenScale;
    context.stroke();

    if (ordinary.length) {
      context.beginPath();
      for (const segment of ordinary) {
        context.moveTo(segment.centerX, segment.centerY);
        context.lineTo(segment.endX, segment.endY);
      }
      context.strokeStyle = withAlpha(palette.accent, alpha * 0.84);
      context.lineWidth = 1.25 / screenScale;
      context.stroke();

      context.beginPath();
      for (const segment of ordinary) appendArrowHead(segment, 5.2, screenScale);
      context.fillStyle = withAlpha(palette.accent, alpha * 0.92);
      context.fill();
    }

    if (focusSegment && focusSegment !== last) {
      context.beginPath();
      context.moveTo(focusSegment.centerX, focusSegment.centerY);
      context.lineTo(focusSegment.endX, focusSegment.endY);
      context.strokeStyle = withAlpha(palette.ink, alpha * 0.88);
      context.lineWidth = 2.8 / screenScale;
      context.stroke();

      context.beginPath();
      context.moveTo(focusSegment.centerX, focusSegment.centerY);
      context.lineTo(focusSegment.endX, focusSegment.endY);
      context.strokeStyle = withAlpha(palette.accent, alpha);
      context.lineWidth = 1.4 / screenScale;
      context.stroke();

      context.beginPath();
      appendArrowHead(focusSegment, 7, screenScale);
      context.fillStyle = withAlpha(palette.accent, alpha);
      context.fill();
    }

    context.beginPath();
    for (const segment of segments) {
      context.moveTo(segment.centerX + 1.25 / screenScale, segment.centerY);
      context.arc(segment.centerX, segment.centerY, 1.25 / screenScale, 0, TWO_PI);
    }
    context.fillStyle = withAlpha(palette.ink, alpha * 0.78);
    context.fill();

    context.beginPath();
    context.moveTo(last.centerX, last.centerY);
    context.lineTo(last.endX, last.endY);
    context.strokeStyle = withAlpha(palette.ink, alpha * 0.9);
    context.lineWidth = 3 / screenScale;
    context.stroke();

    context.beginPath();
    context.moveTo(last.centerX, last.centerY);
    context.lineTo(last.endX, last.endY);
    context.strokeStyle = withAlpha(palette.accent, alpha);
    context.lineWidth = 1.6 / screenScale;
    context.stroke();

    context.beginPath();
    appendArrowHead(last, 8, screenScale);
    context.fillStyle = withAlpha(palette.accent, alpha);
    context.fill();

    context.beginPath();
    context.arc(last.endX, last.endY, 4.5 / screenScale, 0, TWO_PI);
    context.fillStyle = withAlpha(palette.ink, alpha * 0.92);
    context.fill();
    context.beginPath();
    context.arc(last.endX, last.endY, 2.7 / screenScale, 0, TWO_PI);
    context.fillStyle = withAlpha(palette.accent, alpha);
    context.fill();

    context.restore();
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
    if (introHidden) return;
    const settle = smooth((elapsed - TIMES.settleStart) / (TIMES.settleEnd - TIMES.settleStart));
    const traceAlpha = 1 - settle;
    const tState = tSeriesState(elapsed);
    const uState = seriesState(
      elapsed,
      uCoefficients,
      TIMES.uDrawStart,
      TIMES.uDrawEnd,
      TIMES.uFadeEnd
    );
    const tCircleAlpha = tState.circleAlpha * traceAlpha;
    const uCircleAlpha = uState ? uState.circleAlpha * traceAlpha : 0;
    const tSegments = tCircleAlpha > 0
      ? buildSegments(tCoefficients, tState.phase, tState.visibleCircles)
      : [];
    const uSegments = uState && uCircleAlpha > 0
      ? buildSegments(uCoefficients, uState.phase, uState.visibleCircles)
      : [];
    const tEndpoint = tSegments[tSegments.length - 1];
    const uEndpoint = uSegments[uSegments.length - 1];
    const automatic = cameraAt(elapsed, uSegments);
    // Restore the institutional framing during the final fill, even after exploration.
    const returnAmount = smooth((elapsed - TIMES.fillStart)
      / (TIMES.settleEnd - TIMES.fillStart));
    const selected = manualCamera || automatic;
    const camera = {
      ...selected,
      x: mix(selected.x, DESIGN_CENTER.x, returnAmount),
      y: mix(selected.y, DESIGN_CENTER.y, returnAmount),
      zoom: Math.exp(mix(Math.log(selected.zoom), 0, returnAmount))
    };
    displayedCamera = camera;
    const screenScale = Math.max(0.05, stageScale * camera.zoom);
    beginDrawing(camera);

    if (tState && tEndpoint) {
      drawTrace(
        tTrace,
        tState.draw,
        traceAlpha,
        screenScale,
        { x: tEndpoint.endX, y: tEndpoint.endY }
      );
    } else if (tState) {
      drawTrace(tTrace, tState.draw, traceAlpha, screenScale);
    }
    if (uState) {
      drawTrace(
        uTrace,
        uState.draw,
        traceAlpha,
        screenScale,
        uEndpoint ? { x: uEndpoint.endX, y: uEndpoint.endY } : null
      );
    }
    if (tState) {
      drawEpicycles(
        tCoefficients,
        tState,
        tCircleAlpha,
        screenScale,
        -1,
        tSegments
      );
    }
    if (uState) drawEpicycles(uCoefficients, uState, uCircleAlpha, screenScale,
      manualCamera ? -1 : (automatic.followIndex ?? -1), uSegments);

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
    if (introHidden) return;
    beginDrawing(IDENTITY_CAMERA);
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
    stopAudio();
    if (introHidden) {
      document.body.classList.remove("intro-active", "content-locked");
      document.getElementById("root")?.focus({ preventScroll: true });
      return;
    }
    intro.classList.add("leaving");
    window.cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", resizeCanvas);
    window.setTimeout(() => {
      introHidden = true;
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
    animationFrame = 0;
    if (userPaused || document.hidden || introHidden) return;
    if (previousTimestamp !== null) {
      lastElapsed += Math.max(0, timestamp - previousTimestamp) / 1000 * playbackRate;
    }
    previousTimestamp = timestamp;
    drawFrame(lastElapsed);

    if (lastElapsed >= TIMES.ready) revealAccess();

    if (lastElapsed < TIMES.stop && !introHidden) {
      animationFrame = window.requestAnimationFrame(animate);
    } else {
      finishAnimation();
    }
  }

  function startAnimation() {
    if (animationStarted || animationDone) return;
    animationStarted = true;
    intro.classList.add("started");
    previousTimestamp = null;
    lastElapsed = 0;
    scheduleAnimation();
  }

  function scheduleAnimation() {
    if (!animationFrame && !userPaused && !animationDone && !introHidden && !document.hidden) {
      animationFrame = window.requestAnimationFrame(animate);
    }
  }

  function stopClock() {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    previousTimestamp = null;
  }

  function redraw() {
    if (animationDone) drawFinal();
    else drawFrame(lastElapsed);
  }

  function beginManual() {
    if (animationDone || introHidden || lastElapsed >= TIMES.fillStart) return false;
    if (!manualCamera) manualCamera = { ...displayedCamera };
    autoButton?.setAttribute("aria-pressed", "false");
    if (autoButton) autoButton.textContent = "Volver a auto";
    return true;
  }

  function zoomAt(factor, x = viewportWidth / 2, y = viewportHeight / 2) {
    if (!beginManual()) return;
    const oldZoom = manualCamera.zoom;
    const newZoom = clamp(oldZoom * factor, 0.5, 24);
    manualCamera.x += (x - viewportWidth / 2) / stageScale * (1 / oldZoom - 1 / newZoom);
    manualCamera.y += (y - viewportHeight / 2) / stageScale * (1 / oldZoom - 1 / newZoom);
    manualCamera.zoom = newZoom;
    redraw();
  }

  function automaticCamera() {
    manualCamera = null;
    pointers.clear();
    autoButton?.setAttribute("aria-pressed", "true");
    if (autoButton) autoButton.textContent = "Cámara auto";
    redraw();
  }

  function togglePause() {
    if (animationDone || introHidden) return;
    userPaused = !userPaused;
    stopClock();
    pauseButton?.setAttribute("aria-pressed", String(userPaused));
    if (pauseButton) pauseButton.textContent = userPaused ? "Continuar" : "Pausar";
    scheduleAnimation();
  }

  function replay() {
    if (introHidden) return;
    stopClock();
    animationStarted = false;
    animationDone = false;
    userPaused = false;
    lastElapsed = 0;
    intro.classList.remove("ready", "completed");
    accessButton.disabled = true;
    if (pauseButton) {
      pauseButton.textContent = "Pausar";
      pauseButton.setAttribute("aria-pressed", "false");
    }
    automaticCamera();
    startAnimation();
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.35;
      audio.play().catch(() => {
        const status = document.getElementById("introAudioStatus");
        if (status) status.textContent = "No se pudo reproducir la pista. La animación continúa sin sonido.";
      });
    }
  }

  function stopAudio() {
    resumeAudio = false;
    if (audio) { audio.pause(); audio.currentTime = 0; }
  }

  function finishAnimation() {
    if (introHidden) return;
    stopClock();
    stopAudio();
    animationDone = true;
    userPaused = false;
    lastElapsed = TIMES.stop;
    manualCamera = null;
    displayedCamera = { ...IDENTITY_CAMERA };
    pointers.clear();
    tapStarts.clear();
    lastTap = null;
    canvas.classList.remove("dragging");
    intro.classList.add("completed");
    revealAccess();
    drawFinal();
  }

  canvas.addEventListener("dblclick", event => {
    event.preventDefault();
    finishAnimation();
  });

  document.getElementById("introZoomIn")?.addEventListener("click", () => zoomAt(1.3));
  document.getElementById("introZoomOut")?.addEventListener("click", () => zoomAt(1 / 1.3));
  autoButton?.addEventListener("click", automaticCamera);
  pauseButton?.addEventListener("click", togglePause);
  document.getElementById("introReplay")?.addEventListener("click", replay);

  canvas.addEventListener("wheel", event => {
    if (animationDone || lastElapsed >= TIMES.fillStart) return;
    event.preventDefault();
    const units = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewportHeight : 1;
    zoomAt(Math.exp(-clamp(event.deltaY * units, -200, 200) * 0.003), event.clientX, event.clientY);
  }, { passive: false });
  canvas.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (!beginManual()) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (event.pointerType === "touch") {
      tapStarts.set(event.pointerId, { x: event.clientX, y: event.clientY, time: event.timeStamp, moved: false });
    }
    if (pointers.size > 1) {
      lastTap = null;
      for (const tap of tapStarts.values()) tap.moved = true;
    }
    canvas.setPointerCapture(event.pointerId);
    canvas.classList.add("dragging");
  });
  canvas.addEventListener("pointermove", event => {
    const tap = tapStarts.get(event.pointerId);
    if (tap && Math.hypot(event.clientX - tap.x, event.clientY - tap.y) > 12) tap.moved = true;
    if (!pointers.has(event.pointerId) || !manualCamera || lastElapsed >= TIMES.fillStart) return;
    const before = [...pointers.values()];
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const after = [...pointers.values()];
    const center = points => ({
      x: points.reduce((sum, p) => sum + p.x, 0) / points.length,
      y: points.reduce((sum, p) => sum + p.y, 0) / points.length
    });
    const from = center(before), to = center(after);
    if (before.length === 2) {
      const distance = points => Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      const oldDistance = distance(before);
      if (oldDistance > 2) zoomAt(distance(after) / oldDistance, from.x, from.y);
    }
    manualCamera.x -= (to.x - from.x) / (stageScale * manualCamera.zoom);
    manualCamera.y -= (to.y - from.y) / (stageScale * manualCamera.zoom);
    redraw();
  });
  const releasePointer = event => {
    const tap = tapStarts.get(event.pointerId);
    if (event.type === "pointerup" && tap && !tap.moved && event.timeStamp - tap.time < 300) {
      if (lastTap && event.timeStamp - lastTap.time < 350
        && Math.hypot(event.clientX - lastTap.x, event.clientY - lastTap.y) < 30) {
        finishAnimation();
      } else {
        lastTap = { x: event.clientX, y: event.clientY, time: event.timeStamp };
      }
    }
    tapStarts.delete(event.pointerId);
    pointers.delete(event.pointerId);
    if (!pointers.size) canvas.classList.remove("dragging");
  };
  for (const type of ["pointerup", "pointercancel", "lostpointercapture"]) {
    canvas.addEventListener(type, releasePointer);
  }
  canvas.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      finishAnimation();
      return;
    }
    if (["+", "=", "-", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "0", " "].includes(event.key)) {
      event.preventDefault();
      if (event.key === "+" || event.key === "=") zoomAt(1.3);
      else if (event.key === "-") zoomAt(1 / 1.3);
      else if (event.key === "0") automaticCamera();
      else if (event.key === " ") togglePause();
      else if (beginManual()) {
        const step = 50 / (stageScale * manualCamera.zoom);
        manualCamera.x += event.key === "ArrowRight" ? step : event.key === "ArrowLeft" ? -step : 0;
        manualCamera.y += event.key === "ArrowDown" ? step : event.key === "ArrowUp" ? -step : 0;
        redraw();
      }
    }
  });

  darkButton?.addEventListener("click", () => setTheme("dark"));
  lightButton?.addEventListener("click", () => setTheme("light"));
  window.addEventListener("resize", resizeCanvas, { passive: true });
  document.addEventListener("visibilitychange", () => {
    stopClock();
    if (document.hidden) {
      resumeAudio = Boolean(audio && !audio.paused);
      audio?.pause();
    } else if (resumeAudio && !animationDone && !introHidden) {
      resumeAudio = false;
      audio?.play().catch(() => {});
    }
    scheduleAnimation();
  });

  const initialTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
  setTheme(initialTheme);
  resizeCanvas();

  if (reducedMotion) {
    animationStarted = true;
    animationDone = true;
    intro.classList.add("started", "completed");
    revealAccess();
    drawFinal();
  } else {
    startAnimation();
  }

  window.UTIntro = {
    hide: hideIntro,
    setButtonLabel
  };
})();
