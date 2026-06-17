const modules = [
  {
    id: "ai",
    icon: "🤖",
    title: "Inteligencia Artificial",
    accent: "#6c63ff",
    description: "Conceptos, algoritmos y futuro de la IA.",
    questions: [
      {
        type: "match",
        title: "Empareja cada concepto de IA con su definición.",
        instruction: "Haz clic en un término y luego en su definición correcta.",
        pairs: [
          ["IA estrecha", "IA diseñada para una sola tarea"],
          ["Red neuronal", "Modelo inspirado en conexiones del cerebro"],
          ["Machine learning", "Aprendizaje desde datos y ejemplos"],
        ],
      },
      {
        type: "multiple",
        title: "¿Qué diferencia mejor a la IA débil de la IA fuerte?",
        instruction: "Elige una opción.",
        options: [
          "La IA débil resuelve tareas específicas; la fuerte tendría razonamiento general.",
          "La IA fuerte solo funciona sin electricidad.",
          "La IA débil siempre usa robots físicos.",
          "No existe ninguna diferencia entre ambas.",
        ],
        answer: 0,
      },
      {
        type: "cloze",
        title: "Completa la idea sobre aprendizaje automático.",
        instruction: "Rellena los espacios en orden usando las palabras correctas.",
        sentence: "Un algoritmo de {0} aprende patrones a partir de {1} para hacer {2}.",
        blanks: ["machine learning", "datos", "predicciones"],
        words: ["datos", "predicciones", "cables", "machine learning", "horóscopos"],
      },
      {
        type: "multiple",
        title: "¿Qué necesita normalmente un modelo supervisado para entrenar?",
        instruction: "Busca la opción más precisa.",
        options: ["Datos etiquetados", "Solo música", "Planetas alineados", "Un horno caliente"],
        answer: 0,
      },
      {
        type: "match",
        title: "Relaciona herramientas de IA con su uso.",
        instruction: "Selecciona pares correctos para cerrar el reto.",
        pairs: [
          ["Clasificación", "Asignar una categoría"],
          ["Regresión", "Predecir un valor numérico"],
          ["Chatbot", "Conversar con usuarios"],
        ],
      },
    ],
  },
  {
    id: "cocina",
    icon: "🍳",
    title: "Cocina típica de Esmeraldas",
    accent: "#2ecc71",
    description: "Sabores con coco, verde, mar y tradición ecuatoriana.",
    questions: [
      {
        type: "multiple",
        title: "¿Qué ingrediente distingue a muchos encocados esmeraldeños?",
        instruction: "El zorro huele algo delicioso.",
        options: ["Leche de coco", "Chocolate blanco", "Harina de trigo", "Manzana verde"],
        answer: 0,
      },
      {
        type: "match",
        title: "Empareja platos e ingredientes de la cocina esmeraldeña.",
        instruction: "Une cada preparación con su pista.",
        pairs: [
          ["Encocado", "Salsa cremosa de coco"],
          ["Patacón", "Plátano verde frito y aplastado"],
          ["Chillangua", "Hierba aromática de sabor intenso"],
        ],
      },
      {
        type: "cloze",
        title: "Completa la frase del sabor costeño.",
        instruction: "Pon cada palabra en su lugar.",
        sentence: "En Esmeraldas, el {0} y el {1} suelen acompañar pescados, mariscos y {2}.",
        blanks: ["coco", "plátano verde", "chillangua"],
        words: ["plátano verde", "trigo", "coco", "canela", "chillangua"],
      },
      {
        type: "multiple",
        title: "¿Qué es la bala en la gastronomía costeña ecuatoriana?",
        instruction: "Elige la descripción correcta.",
        options: [
          "Una preparación de plátano verde majado.",
          "Una sopa de frutas frías.",
          "Un postre hecho solo con arroz.",
          "Un tipo de café tostado.",
        ],
        answer: 0,
      },
      {
        type: "match",
        title: "Relaciona sabores y preparaciones tradicionales.",
        instruction: "Elige con astucia.",
        pairs: [
          ["Tapao arrecho", "Preparación potente con pescado y verde"],
          ["Marimba de sabores", "Metáfora de fiesta culinaria afroesmeraldeña"],
          ["Pescado fresco", "Producto típico del litoral"],
        ],
      },
    ],
  },
  {
    id: "astro",
    icon: "🔭",
    title: "Astrología y Astronomía",
    accent: "#348aa7",
    description: "Planetas, constelaciones, signos y ciencia del cielo.",
    questions: [
      {
        type: "multiple",
        title: "¿Cuál es la diferencia principal entre astronomía y astrología?",
        instruction: "Separa ciencia y creencia popular.",
        options: [
          "La astronomía estudia científicamente los astros; la astrología interpreta horóscopos.",
          "La astronomía solo estudia signos zodiacales.",
          "La astrología mide distancias con telescopios.",
          "Ambas son exactamente la misma disciplina.",
        ],
        answer: 0,
      },
      {
        type: "match",
        title: "Empareja conceptos del cielo.",
        instruction: "Une cada término con su explicación.",
        pairs: [
          ["Planeta", "Cuerpo que orbita una estrella"],
          ["Constelación", "Patrón aparente de estrellas"],
          ["Zodiaco", "Franja asociada a signos astrológicos"],
        ],
      },
      {
        type: "cloze",
        title: "Completa la oración astronómica.",
        instruction: "Ordena las palabras correctas.",
        sentence: "La Tierra gira alrededor del {0}, mientras la {1} orbita nuestro {2}.",
        blanks: ["Sol", "Luna", "planeta"],
        words: ["Luna", "planeta", "Sol", "cometa", "zodiaco"],
      },
      {
        type: "multiple",
        title: "¿Qué planeta es conocido por sus anillos visibles?",
        instruction: "El telescopio apunta a un gigante gaseoso.",
        options: ["Saturno", "Mercurio", "Marte", "Venus"],
        answer: 0,
      },
      {
        type: "match",
        title: "Conecta signos, mitología y ciencia.",
        instruction: "Cada pareja correcta suma brillo al cielo.",
        pairs: [
          ["Leo", "Signo asociado al león"],
          ["Orión", "Constelación ligada a un cazador mítico"],
          ["Sistema solar", "Conjunto con el Sol, planetas y otros cuerpos"],
        ],
      },
    ],
  },
];

const state = {
  player: JSON.parse(localStorage.getItem("zorroPlayer") || "null"),
  activeModule: null,
  questionIndex: 0,
  score: 0,
  level: 1,
  lives: 3,
  jokerUsed: false,
  locked: false,
  selectedOption: null,
  selectedTerm: null,
  matched: [],
  clozeAnswers: [],
};

const $ = (selector) => document.querySelector(selector);
const panels = {
  login: $("#login-panel"),
  menu: $("#menu-panel"),
  game: $("#game-panel"),
  result: $("#result-panel"),
};

const audio = {
  context: null,
  play(frequency, duration = 0.12, type = "sine") {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.context ||= new AudioContext();
    const now = this.context.currentTime;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.14, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(gain);
    gain.connect(this.context.destination);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  },
  click() {
    this.play(360, 0.06, "triangle");
  },
  correct() {
    this.play(660, 0.11);
    setTimeout(() => this.play(880, 0.13), 95);
  },
  wrong() {
    this.play(180, 0.18, "sawtooth");
  },
  level() {
    [520, 690, 880].forEach((tone, index) => setTimeout(() => this.play(tone, 0.1), index * 85));
  },
};

function showPanel(name) {
  Object.values(panels).forEach((panel) => panel.classList.add("hidden"));
  panels[name].classList.remove("hidden");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function init() {
  renderModules();
  bindEvents();
  if (state.player) {
    updateWelcome();
    showPanel("menu");
  }
}

function bindEvents() {
  $("#login-form").addEventListener("submit", handleLogin);
  $("#reset-profile").addEventListener("click", resetProfile);
  $("#back-menu").addEventListener("click", () => {
    audio.click();
    showPanel("menu");
  });
  $("#check-button").addEventListener("click", checkAnswer);
  $("#next-button").addEventListener("click", nextQuestion);
  $("#joker-button").addEventListener("click", useJoker);
  $("#retry-module").addEventListener("click", () => startModule(state.activeModule.id));
  $("#choose-module").addEventListener("click", () => showPanel("menu"));
}

function handleLogin(event) {
  event.preventDefault();
  audio.click();
  const form = new FormData(event.currentTarget);
  state.player = {
    name: String(form.get("playerName")).trim(),
    age: Number(form.get("playerAge")),
  };
  localStorage.setItem("zorroPlayer", JSON.stringify(state.player));
  updateWelcome();
  showPanel("menu");
}

function resetProfile() {
  audio.click();
  localStorage.removeItem("zorroPlayer");
  state.player = null;
  $("#login-form").reset();
  showPanel("login");
}

function updateWelcome() {
  $("#welcome-title").textContent = `¡Hola, ${state.player.name}! Listo para aprender con 🦊`;
}

function renderModules() {
  $("#module-grid").innerHTML = modules
    .map(
      (module) => `
        <button class="module-card" type="button" data-module="${module.id}" style="--module-accent:${module.accent}">
          <span class="module-icon" aria-hidden="true">${module.icon}</span>
          <span>
            <h3>${module.title}</h3>
            <p>${module.description}</p>
          </span>
          <span class="module-meta">
            <span>5 retos</span>
            <span>🃏 1 comodín</span>
          </span>
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".module-card").forEach((card) => {
    card.addEventListener("click", () => startModule(card.dataset.module));
  });
}

function startModule(moduleId) {
  audio.level();
  state.activeModule = modules.find((module) => module.id === moduleId);
  state.questionIndex = 0;
  state.score = 0;
  state.level = 1;
  state.lives = 3;
  state.jokerUsed = false;
  showPanel("game");
  renderQuestion();
}

function resetQuestionState() {
  state.locked = false;
  state.selectedOption = null;
  state.selectedTerm = null;
  state.matched = [];
  state.clozeAnswers = [];
  $("#feedback-text").textContent = "";
  $("#feedback-text").className = "feedback-text";
  $("#check-button").classList.remove("hidden");
  $("#next-button").classList.add("hidden");
  $("#fox-guide").classList.remove("happy", "sad");
}

function renderQuestion() {
  resetQuestionState();
  const question = getQuestion();
  $("#module-name").textContent = state.activeModule.title;
  $("#question-counter").textContent = `${state.questionIndex + 1} / ${state.activeModule.questions.length}`;
  $("#question-title").textContent = question.title;
  $("#fox-message").textContent = question.instruction;
  $("#score-value").textContent = state.score;
  $("#level-value").textContent = state.level;
  $("#life-bar").textContent = `${"❤️".repeat(state.lives)}${"💔".repeat(3 - state.lives)}`;
  $("#progress-fill").style.width = `${(state.questionIndex / state.activeModule.questions.length) * 100}%`;
  $("#joker-button").disabled = state.jokerUsed;
  $("#joker-button").title = state.jokerUsed ? "Comodín usado" : "Usar comodín";

  if (question.type === "multiple") renderMultiple(question);
  if (question.type === "match") renderMatch(question);
  if (question.type === "cloze") renderCloze(question);
}

function getQuestion() {
  return state.activeModule.questions[state.questionIndex];
}

function renderMultiple(question) {
  $("#question-body").innerHTML = `
    <div class="options-grid">
      ${question.options
        .map((option, index) => `<button class="option-button" type="button" data-index="${index}">${option}</button>`)
        .join("")}
    </div>
  `;

  document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.locked) return;
      audio.click();
      document.querySelectorAll(".option-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      state.selectedOption = Number(button.dataset.index);
    });
  });
}

function renderMatch(question) {
  const terms = question.pairs.map(([term], index) => ({ label: term, pair: index }));
  const definitions = shuffle(question.pairs.map(([, definition], index) => ({ label: definition, pair: index })));
  $("#question-body").innerHTML = `
    <div class="match-grid">
      <div class="match-column">
        <p class="match-heading">Conceptos</p>
        ${terms.map((item) => `<button class="match-button" type="button" data-side="term" data-pair="${item.pair}">${item.label}</button>`).join("")}
      </div>
      <div class="match-column">
        <p class="match-heading">Definiciones</p>
        ${definitions.map((item) => `<button class="match-button" type="button" data-side="definition" data-pair="${item.pair}">${item.label}</button>`).join("")}
      </div>
    </div>
  `;

  document.querySelectorAll(".match-button").forEach((button) => {
    button.addEventListener("click", () => selectMatch(button));
  });
}

function selectMatch(button) {
  if (state.locked || button.classList.contains("correct")) return;
  audio.click();
  const side = button.dataset.side;
  const pair = Number(button.dataset.pair);

  if (side === "term") {
    document.querySelectorAll('[data-side="term"]').forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    state.selectedTerm = { pair, button };
    return;
  }

  if (!state.selectedTerm) {
    nudge("Primero selecciona un concepto de la izquierda.", false);
    return;
  }

  if (state.selectedTerm.pair === pair) {
    button.classList.add("correct");
    state.selectedTerm.button.classList.add("correct");
    state.selectedTerm.button.classList.remove("selected");
    state.matched.push(pair);
    state.selectedTerm = null;
    nudge("¡Pareja correcta!", true);
    return;
  }

  button.classList.add("wrong");
  state.selectedTerm.button.classList.add("wrong");
  audio.wrong();
  setTimeout(() => {
    button.classList.remove("wrong");
    if (state.selectedTerm) state.selectedTerm.button.classList.remove("wrong", "selected");
    state.selectedTerm = null;
  }, 420);
}

function renderCloze(question) {
  const sentence = question.sentence.replace(/\{(\d+)\}/g, (_, index) => `<span class="blank-slot" data-blank="${index}">____</span>`);
  $("#question-body").innerHTML = `
    <div class="cloze-sentence">${sentence}</div>
    <div class="word-bank">
      ${shuffle(question.words).map((word) => `<button class="word-chip" type="button" data-word="${word}">${word}</button>`).join("")}
    </div>
  `;

  document.querySelectorAll(".word-chip").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.locked || button.classList.contains("disabled")) return;
      audio.click();
      const nextBlank = state.clozeAnswers.length;
      const slot = document.querySelector(`[data-blank="${nextBlank}"]`);
      if (!slot) return;
      slot.textContent = button.dataset.word;
      slot.classList.add("filled");
      button.classList.add("disabled");
      state.clozeAnswers.push({ word: button.dataset.word, button });
    });
  });
}

function checkAnswer() {
  if (state.locked) return;
  const question = getQuestion();
  let correct = false;

  if (question.type === "multiple") {
    if (state.selectedOption === null) return nudge("Selecciona una opción para continuar.", false);
    correct = state.selectedOption === question.answer;
    markMultiple(question);
  }

  if (question.type === "match") {
    correct = state.matched.length === question.pairs.length;
    if (!correct && state.matched.length === 0) return nudge("Empareja al menos una respuesta.", false);
  }

  if (question.type === "cloze") {
    if (state.clozeAnswers.length < question.blanks.length) return nudge("Completa todos los espacios.", false);
    correct = question.blanks.every((word, index) => state.clozeAnswers[index].word === word);
    markCloze(question);
  }

  finishCheck(correct);
}

function markMultiple(question) {
  document.querySelectorAll(".option-button").forEach((button) => {
    const index = Number(button.dataset.index);
    if (index === question.answer) button.classList.add("correct");
    if (index === state.selectedOption && index !== question.answer) button.classList.add("wrong");
  });
}

function markCloze(question) {
  document.querySelectorAll(".blank-slot").forEach((slot, index) => {
    slot.classList.add(state.clozeAnswers[index].word === question.blanks[index] ? "correct" : "wrong");
  });
}

function finishCheck(correct) {
  state.locked = true;
  $("#check-button").classList.add("hidden");
  $("#next-button").classList.remove("hidden");

  if (correct) {
    state.score += 100 + state.level * 15;
    state.level += 1;
    $("#score-value").textContent = state.score;
    $("#level-value").textContent = state.level;
    $("#feedback-text").textContent = "¡Correcto! El zorro suma gemas para tu aventura.";
    $("#feedback-text").classList.add("good");
    $("#fox-guide").classList.add("happy");
    audio.correct();
    return;
  }

  state.lives -= 1;
  $("#life-bar").textContent = `${"❤️".repeat(Math.max(state.lives, 0))}${"💔".repeat(3 - Math.max(state.lives, 0))}`;
  $("#feedback-text").textContent = "Casi. Observa la pista y avanza con más astucia.";
  $("#feedback-text").classList.add("bad");
  $("#fox-guide").classList.add("sad");
  panels.game.classList.add("is-shaking");
  setTimeout(() => panels.game.classList.remove("is-shaking"), 420);
  audio.wrong();
}

function nextQuestion() {
  audio.click();
  if (state.lives <= 0) return showResult(false);
  state.questionIndex += 1;
  if (state.questionIndex >= state.activeModule.questions.length) return showResult(true);
  renderQuestion();
}

function showResult(won) {
  $("#progress-fill").style.width = "100%";
  $("#result-kicker").textContent = won ? "Aventura completada" : "Sin vidas";
  $("#result-title").textContent = won ? "¡Excelente trabajo!" : "Buen intento";
  $("#result-summary").textContent = won
    ? `${state.player.name}, terminaste ${state.activeModule.title} con ${state.score} gemas.`
    : `${state.player.name}, tu zorro necesita otra ronda en ${state.activeModule.title}.`;
  if (won) audio.level();
  showPanel("result");
}

function useJoker() {
  if (state.jokerUsed || state.locked) return;
  audio.level();
  state.jokerUsed = true;
  $("#joker-button").disabled = true;
  const question = getQuestion();

  if (question.type === "multiple") {
    const wrongButtons = [...document.querySelectorAll(".option-button")].filter((button) => Number(button.dataset.index) !== question.answer);
    shuffle(wrongButtons)
      .slice(0, 2)
      .forEach((button) => button.classList.add("disabled"));
    nudge("Comodín usado: dos opciones incorrectas quedaron fuera.", true);
  }

  if (question.type === "match") {
    const firstUnmatched = question.pairs.findIndex((_, index) => !state.matched.includes(index));
    const pairButtons = document.querySelectorAll(`[data-pair="${firstUnmatched}"]`);
    pairButtons.forEach((button) => button.classList.add("correct"));
    state.matched.push(firstUnmatched);
    nudge("Comodín usado: una pareja quedó resuelta.", true);
  }

  if (question.type === "cloze") {
    const nextIndex = state.clozeAnswers.length;
    const word = question.blanks[nextIndex];
    const button = [...document.querySelectorAll(".word-chip")].find((chip) => chip.dataset.word === word && !chip.classList.contains("disabled"));
    const slot = document.querySelector(`[data-blank="${nextIndex}"]`);
    if (button && slot) {
      button.classList.add("disabled");
      slot.textContent = word;
      slot.classList.add("filled", "correct");
      state.clozeAnswers.push({ word, button });
    }
    nudge("Comodín usado: el siguiente espacio se completó.", true);
  }
}

function nudge(message, happy) {
  $("#fox-message").textContent = message;
  $("#fox-guide").classList.toggle("happy", happy);
  $("#fox-guide").classList.toggle("sad", !happy);
}

init();
