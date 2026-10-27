(() => {
  'use strict';
  const root = document.getElementById('practice');
  if (!root) return;
  const $ = id => root.querySelector('#' + id);
  const isDays = root.dataset.view === 'days';
  const bankDisclosure = root.closest('details');
  const data = window.PRODUCTOS_EXERCISES;
  if (!data?.exercises?.length || !data?.days?.length) {
    $('exerciseList').textContent = 'No se pudieron cargar los ejercicios. Recarga la página.';
    $('exerciseList').setAttribute('aria-busy', 'false');
    return;
  }
  const exercises = new Map(data.exercises.map(exercise => [exercise.id, exercise]));
  const labels = {factorizacion:'Factorización', raices:'Raíces de polinomios', complejos:'Complejos', basico:'Básico', intermedio:'Intermedio', avanzado:'Avanzado', integrador:'Integrador', geometria:'Geometría', economia:'Economía', ambiente:'Ambiente'};
  // Preserve the original key and IDs so existing checkmarks survive the update.
  const key = 'calculo-productos-practica-v1';
  let state = {completed:[], day:0, topic:'factorizacion', level:'todos', page:0};
  let storageAvailable = true;
  function count(ids) { return ids.filter(id => state.completed.includes(id)).length; }
  function unlockedDay() {
    const first = data.days.findIndex(ids => count(ids) < ids.length);
    return first === -1 ? data.days.length - 1 : first;
  }
  function normalize(saved) {
    if (!saved || typeof saved !== 'object') saved = {};
    state.completed = Array.isArray(saved.completed) ? [...new Set(saved.completed.filter(id => exercises.has(id)))] : [];
    state.day = Number.isInteger(saved.day) ? Math.max(0, Math.min(saved.day, data.days.length - 1)) : 0;
    state.topic = ['factorizacion','raices','complejos'].includes(saved.topic) ? saved.topic : 'factorizacion';
    state.level = ['todos','basico','intermedio','avanzado','integrador'].includes(saved.level) ? saved.level : 'todos';
    state.page = Number.isInteger(saved.page) ? Math.max(0, saved.page) : 0;
    state.day = Math.min(state.day, unlockedDay());
  }
  function storageFailure() {
    storageAvailable = false;
    $('storageNote').hidden = false;
    $('storageNote').textContent = 'Este navegador no permite guardar el progreso. Las marcas se conservarán mientras mantengas la página abierta.';
  }
  try {
    const saved = localStorage.getItem(key);
    try { normalize(JSON.parse(saved)); } catch { /* Recover from damaged saved JSON. */ }
  } catch { storageFailure(); }
  function save() {
    if (!storageAvailable) return;
    try { localStorage.setItem(key, JSON.stringify(state)); } catch { storageFailure(); }
  }
  function updateControls() {
    if (isDays) {
      const unlocked = unlockedDay(), current = data.days[state.day];
      $('dayTitle').textContent = `Día ${state.day + 1}`;
      $('dayNav').innerHTML = data.days.map((ids, index) => {
        const done = count(ids) === ids.length;
        const label = done ? 'Completado ✓' : index > unlocked ? 'Bloqueado' : index === state.day ? 'Actual' : 'Disponible';
        return `<button type="button" class="day${done ? ' done' : ''}" data-day="${index}"${index > unlocked ? ' disabled' : ''}${index === state.day ? ' aria-current="step"' : ''} aria-label="Día ${index + 1}, ${label}">Día ${index + 1}<small>${label}</small></button>`;
      }).join('');
      $('previousDay').disabled = state.day === 0;
      $('nextDay').disabled = count(current) !== current.length || state.day === data.days.length - 1;
      $('nextDay').textContent = state.day === data.days.length - 1 ? 'Último día' : 'Día siguiente →';
      $('routeFinished').hidden = !data.days.every(ids => count(ids) === ids.length);
    } else {
      root.querySelectorAll('[data-topic]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.topic === state.topic)));
      $('levelFilter').hidden = state.topic !== 'factorizacion';
      $('levelSelect').value = state.level;
    }
  }
  function visibleExercises() {
    if (isDays) return data.days[state.day].map(id => exercises.get(id));
    return data.exercises.filter(exercise => exercise.topic === state.topic && (state.topic !== 'factorizacion' || state.level === 'todos' || exercise.level === state.level));
  }
  function card(exercise) {
    const done = state.completed.includes(exercise.id);
    const category = exercise.category ? ` · ${labels[exercise.category]}` : '';
    const meta = isDays ? '' : `<div class="exercise-meta"><span class="tag">${labels[exercise.level]}${category}</span></div>`;
    // Keep the supplied constants unchanged, but stack their display on narrow cards.
    const prompt = exercise.id === 'raiz-carbonato' ? exercise.promptHtml.replace(
      /K_1=10\^\{-6\{,\}35\},\\qquad\s*K_2=10\^\{-10\{,\}33\},\\qquad\s*K_w=10\^\{-14\}\./,
      String.raw`\begin{aligned}K_1&=10^{-6{,}35},\\ K_2&=10^{-10{,}33},\\ K_w&=10^{-14}.\end{aligned}`
    ) : exercise.promptHtml;
    return `<article class="exercise${exercise.topic === 'raices' ? ' wide' : ''}${done ? ' is-complete' : ''}" data-exercise-id="${exercise.id}">
      ${meta}<h3>${exercise.title}</h3><div class="statement">${prompt}</div>
      <details class="answer"><summary>Ver solución final</summary><div class="answer-body">${exercise.answerHtml}</div></details>
      <label class="check-row"><input type="checkbox" data-check-id="${exercise.id}"${done ? ' checked' : ''}><span>Ya lo resolví</span><span class="sr-only">: ${exercise.title}</span></label>
    </article>`;
  }
  let renderVersion = 0, renderQueue = Promise.resolve();
  function fitMath() {
    root.querySelectorAll('#exerciseList mjx-container').forEach(node => {
      if (!node.getClientRects().length) return;
      node.style.fontSize = '';
      let parent = node.parentElement;
      if (parent?.classList.contains('inline')) parent = parent.parentElement;
      while (parent && !parent.clientWidth) parent = parent.parentElement;
      const style = parent ? getComputedStyle(parent) : null;
      const available = parent ? parent.clientWidth - parseFloat(style.paddingLeft || 0) - parseFloat(style.paddingRight || 0) : 0;
      const width = Math.max(node.scrollWidth, node.firstElementChild?.getBoundingClientRect().width || 0);
      if (available > 0 && width > available) node.style.fontSize = `${Math.floor(95 * available / width)}%`;
    });
  }
  function render(persist = true) {
    state.day = Math.min(state.day, unlockedDay());
    updateControls();
    const all = visibleExercises();
    const pageSize = isDays ? all.length : state.topic === 'factorizacion' ? 12 : state.topic === 'raices' ? 3 : 6;
    const pages = Math.max(1, Math.ceil(all.length / pageSize));
    if (!isDays) {
      state.page = Math.min(state.page, pages - 1);
      $('listTitle').textContent = labels[state.topic];
      $('pagination').hidden = pages === 1;
      $('pageCount').textContent = `Página ${state.page + 1} de ${pages}`;
      $('previousPage').disabled = state.page === 0;
      $('nextPage').disabled = state.page === pages - 1;
    }
    const start = isDays ? 0 : state.page * pageSize;
    const selected = all.slice(start, start + pageSize);
    if (!isDays) $('listCount').textContent = `${start + 1}–${start + selected.length} de ${all.length}`;
    if (persist) save();
    const version = ++renderVersion;
    // Defer the inline exercise bank until opened so the lesson stays lightweight.
    if (bankDisclosure && !bankDisclosure.open) return;
    $('exerciseList').setAttribute('aria-busy', 'true');
    renderQueue = renderQueue.catch(() => {}).then(async () => {
      if (version !== renderVersion) return;
      if (window.MathJax?.startup?.promise) await window.MathJax.startup.promise;
      if (version !== renderVersion) return;
      window.MathJax?.typesetClear?.([$('exerciseList')]);
      $('exerciseList').innerHTML = selected.map(card).join('');
      try { await window.MathJax?.typesetPromise?.([$('exerciseList')]); }
      catch (error) { console.warn('No se pudo preparar alguna fórmula.', error); }
      if (version !== renderVersion) return;
      fitMath(); $('exerciseList').setAttribute('aria-busy', 'false');
    });
  }
  let confettiTimer = 0, celebrationLayer = null;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  function stopCelebration() {
    clearTimeout(confettiTimer);
    if (celebrationLayer) {
      celebrationLayer.getAnimations({subtree:true}).forEach(animation => animation.cancel());
      celebrationLayer.remove(); celebrationLayer = null;
    }
  }
  function celebrateDay() {
    stopCelebration();
    if (document.hidden) return;
    const layer = document.createElement('div');
    layer.className = 'practice-confetti'; layer.setAttribute('aria-hidden', 'true'); layer.dataset.day = state.day + 1;
    document.body.append(layer); celebrationLayer = layer;
    const badge = document.createElement('span');
    badge.className = 'practice-celebration'; badge.textContent = '¡Día completado!'; layer.append(badge);
    if (!reduceMotion.matches) {
      const palette = ['#65e6b4','#8ebcf2','#f2c879','#edf7f1','#b9a0ef'];
      const width = innerWidth, height = innerHeight;
      const fragment = document.createDocumentFragment(), particles = [];
      for (let index = 0; index < 64; index++) {
        const piece = document.createElement('span'); piece.className = 'confetti-piece';
        piece.style.backgroundColor = palette[index % palette.length];
        if (index % 3 === 0) { piece.style.borderRadius = '50%'; piece.style.height = '7px'; }
        fragment.append(piece); particles.push(piece);
      }
      layer.append(fragment);
      particles.forEach(piece => {
        const x = (Math.random() - .5) * width * .95, up = 45 + Math.random() * Math.min(height * .35, 220), spin = (Math.random() - .5) * 900;
        piece.animate([
          {transform:'translate(0,0) rotate(0deg)',opacity:0,offset:0}, {opacity:1,offset:.08},
          {transform:`translate(${x * .65}px,${-up}px) rotate(${spin * .35}deg)`,opacity:1,offset:.32},
          {transform:`translate(${x}px,${height * .75}px) rotate(${spin}deg)`,opacity:0,offset:1}
        ],{duration:1600 + Math.random() * 500,delay:Math.random() * 100,easing:'linear',fill:'both'});
      });
    }
    confettiTimer = setTimeout(stopCelebration, 2400);
  }
  if (isDays) {
    $('dayNav').addEventListener('click', event => {
      const button = event.target.closest('[data-day]');
      if (!button || button.disabled) return;
      const next = Number(button.dataset.day);
      if (next <= unlockedDay()) { state.day = next; stopCelebration(); render(); }
    });
    $('previousDay').addEventListener('click', () => {
      if (state.day > 0) { state.day--; stopCelebration(); render(); $('dayPanel').scrollIntoView({block:'start'}); }
    });
    $('nextDay').addEventListener('click', () => {
      if (state.day < data.days.length - 1 && state.day < unlockedDay()) {
        state.day++; stopCelebration(); render(); $('dayPanel').scrollIntoView({block:'start'});
      }
    });
  } else {
    root.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => { state.topic = button.dataset.topic; state.page = 0; render(); }));
    $('levelSelect').addEventListener('change', event => { state.level = event.target.value; state.page = 0; render(); });
    $('previousPage').addEventListener('click', () => { if (state.page > 0) { state.page--; render(); $('listTitle').scrollIntoView({block:'start'}); } });
    $('nextPage').addEventListener('click', () => { state.page++; render(); $('listTitle').scrollIntoView({block:'start'}); });
    if (bankDisclosure) {
      bankDisclosure.addEventListener('toggle', () => { if (bankDisclosure.open) render(false); });
      const openFromHash = () => { if (location.hash === '#ejercicios') bankDisclosure.open = true; };
      window.addEventListener('hashchange', openFromHash);
      document.querySelectorAll('a[href="#ejercicios"]').forEach(link => link.addEventListener('click', () => { bankDisclosure.open = true; }));
      openFromHash();
    }
  }
  $('exerciseList').addEventListener('change', event => {
    const input = event.target.closest('[data-check-id]');
    if (!input || !exercises.has(input.dataset.checkId)) return;
    const id = input.dataset.checkId, current = data.days[state.day];
    const wasComplete = count(current) === current.length, previousUnlocked = unlockedDay();
    state.completed = input.checked ? [...new Set([...state.completed, id])] : state.completed.filter(value => value !== id);
    input.closest('.exercise').classList.toggle('is-complete', input.checked);
    const isComplete = count(current) === current.length;
    state.day = Math.min(state.day, unlockedDay());
    save(); updateControls();
    if (isDays && !wasComplete && isComplete) {
      celebrateDay();
      $('announcement').textContent = state.day < data.days.length - 1 ? '¡Día completado! Puedes continuar con el siguiente.' : '¡Preparación completada!';
    } else {
      if (isDays && !isComplete) stopCelebration();
      $('announcement').textContent = unlockedDay() > previousUnlocked ? `Día ${unlockedDay() + 1} habilitado.` : input.checked ? 'Ejercicio marcado como resuelto.' : 'Marca retirada.';
    }
  });
  $('exerciseList').addEventListener('toggle', event => { if (event.target.matches('details')) requestAnimationFrame(fitMath); }, true);
  let resizeFrame;
  window.addEventListener('resize', () => { cancelAnimationFrame(resizeFrame); resizeFrame = requestAnimationFrame(fitMath); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopCelebration(); });
  window.addEventListener('pagehide', stopCelebration);
  window.addEventListener('storage', event => {
    if (event.key !== key) return;
    try { normalize(JSON.parse(event.newValue)); render(false); } catch { /* Ignore malformed state from another tab. */ }
  });
  render(false);
})();
