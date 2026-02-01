import { preguntasTrivial } from "./preguntas.js";

/* VARIABLES DE ESTADO*/

let listaJugadores = [];
let turnoActual = 0;
let preguntasUsadasIds = [];
let preguntasPartida = [];
let indicePregunta = 0;
let puntuacion = 0;
let tiempoRestante = 30;
let intervaloTiempo;

/* SELECTORES DOM */

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

const selectCategoria = document.getElementById("select-category");
const selectDificultad = document.getElementById("select-difficulty");

const uiCategoria = document.getElementById("category-badge");
const uiTiempo = document.getElementById("timer");
const uiPuntuacion = document.getElementById("score");
const uiBarraProgreso = document.getElementById("progress-bar");

const uiPregunta = document.getElementById("question-text");
const uiRespuestas = document.getElementById("answers-container");

const uiNumActual = document.getElementById("current-question-num");
const uiNumTotal = document.getElementById("total-questions-num");

/* EVENTOS INICIALES */

document.addEventListener("DOMContentLoaded", () => {
  const btnComenzar = document.getElementById("btn-comenzar");
  if (btnComenzar) btnComenzar.addEventListener("click", prepararPartida);

  const selectNumPlayers = document.getElementById("num-players");
  if (selectNumPlayers) {
    selectNumPlayers.addEventListener("change", generarInputsNombres);
  }
});

/* CONFIGURACIÓN INICIAL */

function generarInputsNombres() {
  const num = document.getElementById("num-players").value;
  const container = document.getElementById("container-nombres");
  container.innerHTML = "";

  for (let i = 1; i <= num; i++) {
    container.innerHTML += `
      <input type="text"
             class="form-control mb-2 player-input"
             placeholder="Nombre Jugador ${i}"
             required>
    `;
  }
}

function prepararPartida() {
  if (!preguntasTrivial?.results) {
    console.error("No se han cargado las preguntas");
    return;
  }

  const inputs = document.querySelectorAll(".player-input");
  listaJugadores = [];

  for (let input of inputs) {
    if (!input.value.trim()) {
      Swal.fire(
        "Faltan datos",
        "Introduce el nombre de todos los jugadores",
        "warning",
      );
      return;
    }
    listaJugadores.push({ nombre: input.value.trim(), puntos: 0 });
  }

  turnoActual = 0;
  preguntasUsadasIds = [];

  startScreen.classList.add("d-none");
  gameScreen.classList.remove("d-none");

  iniciarTurnoJugador();
}

/* FLUJO DEL TORNEO */

function iniciarTurnoJugador() {
  const jugador = listaJugadores[turnoActual].nombre;

  mostrarAlerta(`Turno de ${jugador}`, "Responderás 5 preguntas", "info", () =>
    comenzarRonda(),
  );
}

function comenzarRonda() {
  puntuacion = 0;
  indicePregunta = 0;
  uiPuntuacion.innerText = "0";

  const categoria = selectCategoria.value;
  const dificultad = selectDificultad.value;

  const pool = preguntasTrivial.results.filter((p) => {
    const catOk = categoria === "all" || p.category === categoria;
    const difOk = dificultad === "all" || p.difficulty === dificultad;
    return catOk && difOk && !preguntasUsadasIds.includes(p.id);
  });

  pool.sort(() => Math.random() - 0.5);

  preguntasPartida = pool.slice(0, 5);
  preguntasPartida.forEach((p) => preguntasUsadasIds.push(p.id));

  uiNumTotal.innerText = preguntasPartida.length;
  cargarSiguientePregunta();
}

/*  MOTOR DEL JUEGO */

function cargarSiguientePregunta() {
  if (indicePregunta >= preguntasPartida.length) {
    finDeTurno();
    return;
  }

  const data = preguntasPartida[indicePregunta];
  uiPregunta.innerHTML = data.question;
  uiCategoria.innerText = data.category;
  uiNumActual.innerText = indicePregunta + 1;

  uiBarraProgreso.style.width =
    (indicePregunta / preguntasPartida.length) * 100 + "%";

  uiRespuestas.innerHTML = "";

  const opciones = [...data.incorrect_answers, data.correct_answer].sort(
    () => Math.random() - 0.5,
  );

  opciones.forEach((texto) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-answer w-100 mb-2";
    btn.innerText = texto;
    btn.onclick = () => verificarRespuesta(texto, data.correct_answer, btn);
    uiRespuestas.appendChild(btn);
  });

  iniciarCronometro();
}

function verificarRespuesta(seleccion, correcta, btn) {
  clearInterval(intervaloTiempo);

  const botones = uiRespuestas.querySelectorAll("button");
  botones.forEach((b) => (b.disabled = true));

  if (seleccion === correcta) {
    btn.classList.add("btn-correct");
    puntuacion += 10;
    uiPuntuacion.innerText = puntuacion;
  } else {
    btn.classList.add("btn-wrong");
    botones.forEach((b) => {
      if (b.innerText === correcta) b.classList.add("btn-correct");
    });
  }

  setTimeout(() => {
    indicePregunta++;
    cargarSiguientePregunta();
  }, 2000);
}

/*  TIEMPO*/

function iniciarCronometro() {
  clearInterval(intervaloTiempo);
  tiempoRestante = 30;
  uiTiempo.innerText = tiempoRestante;

  intervaloTiempo = setInterval(() => {
    tiempoRestante--;
    uiTiempo.innerText = tiempoRestante;

    if (tiempoRestante <= 0) {
      clearInterval(intervaloTiempo);
      indicePregunta++;
      cargarSiguientePregunta();
    }
  }, 1000);
}

/*   FINALIZACIÓN */

function finDeTurno() {
  listaJugadores[turnoActual].puntos = puntuacion;

  if (turnoActual < listaJugadores.length - 1) {
    turnoActual++;
    iniciarTurnoJugador();
  } else {
    // --- GUARDAR RESULTADOS ---
    localStorage.setItem("ultimosResultados", JSON.stringify(listaJugadores));

    // Obtener ranking histórico previo
    const rankingHist =
      JSON.parse(localStorage.getItem("rankingTrivialDAW")) || [];

    // Añadir resultados actuales
    listaJugadores.forEach((jugador) => rankingHist.push(jugador));

    // Guardar ranking actualizado
    localStorage.setItem("rankingTrivialDAW", JSON.stringify(rankingHist));

    // Redirigir a resultados
    window.location.href = "resultados.html";
  }
}

/* UTILIDADES */

function mostrarAlerta(titulo, texto, icono, callback) {
  Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
    confirmButtonText: "OK",
    allowOutsideClick: false,
  }).then(() => callback && callback());
}
