(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const data = window.PRODUCTOS_EXERCISES;
  if (!data || !Array.isArray(data.exercises) || !data.days?.length) {
    $('exerciseList').textContent = 'No se pudo cargar el banco de ejercicios. Recarga la página para intentarlo de nuevo.';
    $('exerciseList').setAttribute('aria-busy', 'false');
    return;
  }
  const exercises = new Map(data.exercises.map(exercise => [exercise.id, exercise]));
  const labels = {factorizacion:'Factorización', raices:'Raíces de polinomios', complejos:'Complejos', basico:'Básico', intermedio:'Intermedio', avanzado:'Avanzado', integrador:'Integrador', geometria:'Geometría', economia:'Economía', ambiente:'Ambiente'};
  const key = 'calculo-productos-practica-v1';
  let state = {completed:[], day:0, mode:'days', topic:'factorizacion', level:'todos', page:0};
  let storageAvailable = true;
  function normalize(saved) {
    if (!saved || typeof saved !== 'object') return;
    state.completed = Array.isArray(saved.completed) ? [...new Set(saved.completed.filter(id => exercises.has(id)))] : [];
    state.day = Number.isInteger(saved.day) ? Math.max(0, Math.min(saved.day, data.days.length - 1)) : 0;
    state.mode = saved.mode === 'topics' ? 'topics' : 'days';
    state.topic = ['factorizacion','raices','complejos'].includes(saved.topic) ? saved.topic : 'factorizacion';
    state.level = ['todos','basico','intermedio','avanzado','integrador'].includes(saved.level) ? saved.level : 'todos';
    state.page = Number.isInteger(saved.page) ? Math.max(0, saved.page) : 0;
    state.day = Math.min(state.day, unlockedDay());
  }
  function storageFailure() {
    storageAvailable = false;
    $('storageNote').textContent = 'Este navegador no permite guardar el progreso. Tus marcas se conservarán solo mientras mantengas esta página abierta.';
  }
  try {
    const saved = localStorage.getItem(key);
    try { normalize(JSON.parse(saved)); } catch { /* A damaged save starts a fresh route. */ }
  } catch { storageFailure(); }
  function save() {
    if (!storageAvailable) return;
    try { localStorage.setItem(key, JSON.stringify(state)); } catch { storageFailure(); }
  }
  function count(ids) { return ids.filter(id => state.completed.includes(id)).length; }
  function unlockedDay() {
    const first = data.days.findIndex(ids => count(ids) < ids.length);
    return first === -1 ? data.days.length - 1 : first;
  }
  function syncHash() {
    if (location.hash === '#dias') state.mode = 'days';
    if (location.hash === '#temas') state.mode = 'topics';
    if (location.hash === '#complejos') { state.mode = 'topics'; state.topic = 'complejos'; state.page = 0; }
  }
  syncHash();
  function updateControls() {
    const isDays = state.mode === 'days';
    $('dayPanel').hidden = !isDays;
    $('topicPanel').hidden = isDays;
    $('modeDays').setAttribute('aria-pressed', String(isDays));
    $('modeTopics').setAttribute('aria-pressed', String(!isDays));
    $('dayTitle').textContent = `Día ${state.day + 1}`;
    const unlocked = unlockedDay();
    const current = data.days[state.day];
    const done = count(current);
    const allDone = data.days.every(ids => count(ids) === ids.length);
    $('totalProgress').textContent = `${count(data.days.flat())} de ${data.days.flat().length} ejercicios de la ruta`;
    $('dayNav').innerHTML = data.days.map((ids, index) => `<button type="button" class="day${count(ids) === ids.length ? ' done' : ''}" data-day="${index}"${index > unlocked ? ' disabled' : ''}${index === state.day ? ' aria-current="step"' : ''} aria-label="Día ${index + 1}, ${index > unlocked ? 'bloqueado' : `${count(ids)} de ${ids.length} resueltos`}">Día ${index + 1}<small>${index > unlocked ? 'Bloqueado' : `${count(ids)} / ${ids.length}${count(ids) === ids.length ? ' ✓' : ''}`}</small></button>`).join('');
    $('dayProgress').setAttribute('aria-valuenow', String(done));
    $('dayProgress').setAttribute('aria-valuemax', String(current.length));
    $('progressFill').style.width = `${100 * done / current.length}%`;
    $('dayStatus').textContent = done < current.length ? `${done} de ${current.length} resueltos. Faltan ${current.length - done} para completar el día.` : state.day < data.days.length - 1 ? 'Día completado. Ya puedes continuar con el siguiente.' : 'Día completado. Has llegado al final de los ejercicios programados.';
    $('previousDay').disabled = state.day === 0;
    $('nextDay').disabled = done !== current.length || state.day === data.days.length - 1;
    $('nextDay').textContent = state.day === data.days.length - 1 ? 'Último día de la ruta' : 'Día siguiente →';
    $('bottomDayControls').hidden = !isDays;
    $('bottomNextDay').disabled = $('nextDay').disabled;
    $('bottomNextDay').textContent = $('nextDay').textContent;
    $('bottomDayStatus').textContent = allDone ? 'Completaste los seis días. La ruta termina aquí; los demás ejercicios están disponibles por temas.' : $('dayStatus').textContent;
    $('routeFinished').hidden = !allDone;
    document.querySelectorAll('[data-topic]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.topic === state.topic)));
    $('levelFilter').hidden = state.topic !== 'factorizacion';
    $('levelSelect').value = state.level;
    $('bankDescription').textContent = {
      factorizacion:'Se conservan los 62 ejercicios del banco original y sus cuatro niveles. Incluyen factorización, simplificación y racionalización; las respuestas indican el dominio real original.',
      raices:'Los 16 problemas originales: primero geometría, después economía y ambiente. Conservan sus datos y preguntas; se despliega únicamente la respuesta final.',
      complejos:'Seis ejercicios de suma, resta, producto, cociente, potencias de i, conjugados y una ecuación. Son los mismos seis incluidos en la ruta por días.'
    }[state.topic];
  }
  function visibleExercises() {
    if (state.mode === 'days') return data.days[state.day].map(id => exercises.get(id));
    return data.exercises.filter(exercise => exercise.topic === state.topic && (state.topic !== 'factorizacion' || state.level === 'todos' || exercise.level === state.level));
  }
  function card(exercise) {
    const done = state.completed.includes(exercise.id);
    const category = exercise.category ? ` · ${labels[exercise.category]}` : '';
    return `<article class="exercise${exercise.topic === 'raices' ? ' wide' : ''}${done ? ' is-complete' : ''}" data-exercise-id="${exercise.id}">
      <div class="exercise-meta"><span class="tag">${labels[exercise.topic]} · ${labels[exercise.level]}${category}</span><span>N.º ${exercise.number}</span></div>
      <h3>${exercise.title}</h3><div class="statement">${exercise.promptHtml}</div>
      <details class="answer"><summary>Ver solución final</summary><div class="answer-body">${exercise.answerHtml}</div></details>
      <label class="check-row"><input type="checkbox" data-check-id="${exercise.id}"${done ? ' checked' : ''}><span>Ya lo resolví</span><span class="sr-only">: ${exercise.title}</span></label>
    </article>`;
  }
  let renderVersion = 0;
  let renderQueue = Promise.resolve();
  function fitMath() {
    document.querySelectorAll('#exerciseList mjx-container').forEach(node => {
      if (!node.getClientRects().length) return;
      node.style.fontSize = '';
      let parent = node.parentElement;
      if (parent?.classList.contains('inline')) parent = parent.parentElement;
      while (parent && !parent.clientWidth) parent = parent.parentElement;
      const available = parent?.clientWidth || 0;
      const width = Math.max(node.scrollWidth, node.firstElementChild?.getBoundingClientRect().width || 0);
      if (available > 0 && width > available) node.style.fontSize = `${Math.floor(95 * available / width)}%`;
    });
  }
  function render() {
    state.day = Math.min(state.day, unlockedDay());
    updateControls();
    const all = visibleExercises();
    const pageSize = state.mode === 'days' ? 6 : state.topic === 'factorizacion' ? 12 : state.topic === 'raices' ? 3 : 6;
    const pages = Math.max(1, Math.ceil(all.length / pageSize));
    state.page = Math.min(state.page, pages - 1);
    const pageIndex = state.mode === 'days' ? 0 : state.page;
    const start = pageIndex * pageSize;
    const selected = all.slice(start, start + pageSize);
    $('listTitle').textContent = state.mode === 'days' ? `Día ${state.day + 1} · Los seis ejercicios` : labels[state.topic];
    $('listCount').textContent = state.mode === 'days' ? 'Resuelve · compara · marca' : `${start + 1}–${start + selected.length} de ${all.length}`;
    $('pagination').hidden = state.mode === 'days' || pages === 1;
    $('pageCount').textContent = `Página ${pageIndex + 1} de ${pages}`;
    $('previousPage').disabled = pageIndex === 0;
    $('nextPage').disabled = pageIndex === pages - 1;
    save();
    const version = ++renderVersion;
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
      fitMath();
      $('exerciseList').setAttribute('aria-busy', 'false');
    });
  }
  function changeMode(mode) {
    state.mode = mode; state.page = 0;
    history.replaceState(null, '', mode === 'days' ? '#dias' : '#temas');
    render();
  }
  $('modeDays').addEventListener('click', () => changeMode('days'));
  $('modeTopics').addEventListener('click', () => changeMode('topics'));
  $('browseTopics').addEventListener('click', () => changeMode('topics'));
  $('dayNav').addEventListener('click', event => {
    const button = event.target.closest('[data-day]');
    if (!button || button.disabled) return;
    const next = Number(button.dataset.day);
    if (next <= unlockedDay()) { state.day = next; render(); }
  });
  $('previousDay').addEventListener('click', () => { if (state.day > 0) { state.day--; render(); } });
  $('nextDay').addEventListener('click', () => {
    if (state.day < data.days.length - 1 && state.day < unlockedDay()) { state.day++; render(); }
  });
  $('bottomNextDay').addEventListener('click', () => {
    if (state.day < data.days.length - 1 && state.day < unlockedDay()) {
      state.day++; render(); $('dayPanel').scrollIntoView({block:'start'});
    }
  });
  document.querySelectorAll('[data-topic]').forEach(button => button.addEventListener('click', () => { state.topic = button.dataset.topic; state.page = 0; render(); }));
  $('levelSelect').addEventListener('change', event => { state.level = event.target.value; state.page = 0; render(); });
  $('previousPage').addEventListener('click', () => { if (state.page > 0) { state.page--; render(); $('listTitle').scrollIntoView({block:'start'}); } });
  $('nextPage').addEventListener('click', () => { state.page++; render(); $('listTitle').scrollIntoView({block:'start'}); });
  $('exerciseList').addEventListener('change', event => {
    const input = event.target.closest('[data-check-id]');
    if (!input || !exercises.has(input.dataset.checkId)) return;
    const id = input.dataset.checkId;
    const previousUnlocked = unlockedDay();
    state.completed = input.checked ? [...new Set([...state.completed, id])] : state.completed.filter(value => value !== id);
    input.closest('.exercise').classList.toggle('is-complete', input.checked);
    state.day = Math.min(state.day, unlockedDay());
    save(); updateControls();
    $('announcement').textContent = unlockedDay() > previousUnlocked ? `Día ${unlockedDay() + 1} habilitado.` : input.checked ? 'Ejercicio marcado como resuelto.' : 'Marca retirada.';
  });
  $('exerciseList').addEventListener('toggle', event => { if (event.target.matches('details')) requestAnimationFrame(fitMath); }, true);
  let resizeFrame;
  window.addEventListener('resize', () => { cancelAnimationFrame(resizeFrame); resizeFrame = requestAnimationFrame(fitMath); });
  window.addEventListener('hashchange', () => { syncHash(); render(); });
  window.addEventListener('storage', event => {
    if (event.key !== key) return;
    try { normalize(JSON.parse(event.newValue)); render(); } catch { /* Ignore malformed state from another tab. */ }
  });
  render();
})();
