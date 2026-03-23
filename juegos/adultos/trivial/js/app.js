// 0. CONFIGURACIÓN DE RANKING

window.juegoId = 4; // Trivial
window.puntosJugador = 0;

// 1. ESTRUCTURA DE PREGUNTAS

const preguntas = [
  {
    texto: "¿Qué significa 'HTML'?",
    respuestas: [
      { texto: "HyperText Markup Language", correct: true },
      { texto: "High Tech Modern Language", correct: false },
      { texto: "Hyperlink Text Mode List", correct: false },
      { texto: "Hard To Make Logic", correct: false },
    ],
  },
  {
    texto: "En CSS, ¿cómo centras un elemento flexiblemente?",
    respuestas: [
      { texto: "float: center;", correct: false },
      { texto: "display: flex; justify-content: center;", correct: true },
      { texto: "margin: middle;", correct: false },
      { texto: "text-align: middle;", correct: false },
    ],
  },
  {
    texto: "¿Resultado de: console.log('2' + 2)?",
    respuestas: [
      { texto: "4", correct: false },
      { texto: "22", correct: true },
      { texto: "NaN", correct: false },
      { texto: "Error", correct: false },
    ],
  },
  {
    texto: "¿Quién descifró el código Enigma?",
    respuestas: [
      { texto: "Steve Jobs", correct: false },
      { texto: "Bill Gates", correct: false },
      { texto: "Alan Turing", correct: true },
      { texto: "Ada Lovelace", correct: false },
    ],
  },
  {
    texto: "Código HTTP para 'No Encontrado'",
    respuestas: [
      { texto: "200", correct: false },
      { texto: "404", correct: true },
      { texto: "500", correct: false },
      { texto: "403", correct: false },
    ],
  },
];

// 2. VARIABLES DE ESTADO

let indicePreguntaActual = 0;
let jugadores = [];
let turnoActual = 0;
let tiempoRestante = 15;
let intervaloTiempo;

// 3. REFERENCIAS AL HTML

const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaJuego = document.getElementById("pantalla-juego");
const contenedorNombres = document.getElementById("lista-nombres");
const selectJugadores = document.getElementById("num-jugadores");
const elementoPregunta = document.getElementById("texto-pregunta");
const gridRespuestas = document.getElementById("grid-respuestas");
const btnSiguiente = document.getElementById("btn-siguiente");
const contadorElemento = document.getElementById("contador-preguntas");
const puntuacionElemento = document.getElementById("puntuacion-actual");
const barraProgreso = document.getElementById("barra-progreso");
const nombreJugadorActivo = document.getElementById("nombre-jugador-activo");
const displayTiempo = document.getElementById("tiempo-restante");

// 4. FUNCIONES DE CONFIGURACIÓN

function generarInputsNombres() {
  const cantidad = selectJugadores.value;
  contenedorNombres.innerHTML = "";
  for (let i = 1; i <= cantidad; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Nombre Jugador ${i}`;
    input.classList.add("input-nombre");
    input.id = `jugador-${i}`;
    input.value = `Jugador ${i}`;
    contenedorNombres.appendChild(input);
  }
}

function comenzarPartida() {
  console.log("🚀 Iniciando motor del Trivial...");
  const cantidad = selectJugadores.value;
  jugadores = [];

  for (let i = 1; i <= cantidad; i++) {
    const input = document.getElementById(`jugador-${i}`);
    const nombre = input ? input.value : `Jugador ${i}`;
    jugadores.push({ nombre: nombre, puntos: 0 });
  }

  indicePreguntaActual = 0;
  turnoActual = 0;
  pantallaInicio.classList.add("oculto");
  pantallaJuego.classList.remove("oculto");
  mostrarPregunta();
}

// 5. LÓGICA DEL JUEGO

function mostrarPregunta() {
  resetearEstado();
  let preguntaActual = preguntas[indicePreguntaActual];
  elementoPregunta.innerText = preguntaActual.texto;
  nombreJugadorActivo.innerText = jugadores[turnoActual].nombre;
  puntuacionElemento.innerText = `Puntos: ${jugadores[turnoActual].puntos}`;

  const porcentaje = (indicePreguntaActual / preguntas.length) * 100;
  barraProgreso.style.width = `${porcentaje}%`;

  preguntaActual.respuestas.forEach((respuesta) => {
    const boton = document.createElement("button");
    boton.innerText = respuesta.texto;
    boton.classList.add("btn-respuesta");
    if (respuesta.correct) boton.dataset.correct = respuesta.correct;
    boton.addEventListener("click", seleccionarRespuesta);
    gridRespuestas.appendChild(boton);
  });

  iniciarTemporizador();
}

function iniciarTemporizador() {
  tiempoRestante = 15;
  displayTiempo.innerText = tiempoRestante;
  clearInterval(intervaloTiempo);
  intervaloTiempo = setInterval(() => {
    tiempoRestante--;
    displayTiempo.innerText = tiempoRestante;
    if (tiempoRestante === 0) {
      clearInterval(intervaloTiempo);
      siguientePregunta();
    }
  }, 1000);
}

function seleccionarRespuesta(e) {
  clearInterval(intervaloTiempo);
  const botonSeleccionado = e.target;
  const esCorrecto = botonSeleccionado.dataset.correct === "true";

  if (esCorrecto) {
    botonSeleccionado.classList.add("correcto");
    jugadores[turnoActual].puntos += 10;
  } else {
    botonSeleccionado.classList.add("incorrecto");
  }

  Array.from(gridRespuestas.children).forEach((btn) => {
    if (btn.dataset.correct === "true") btn.classList.add("correcto");
    btn.disabled = true;
  });
  btnSiguiente.classList.remove("oculto");
}

function resetearEstado() {
  btnSiguiente.classList.add("oculto");
  while (gridRespuestas.firstChild)
    gridRespuestas.removeChild(gridRespuestas.firstChild);
}

function siguientePregunta() {
  turnoActual = (turnoActual + 1) % jugadores.length;
  indicePreguntaActual++;

  if (indicePreguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultadoFinal();
  }
}

// 6. VOLCADO DE DATOS

function mostrarResultadoFinal() {
  console.log("🏁 Fin de partida. Preparando volcado para Usuario ID: 3");

  // Guardamos los puntos del jugador principal
  window.puntosJugador = jugadores[0].puntos;

  if (window.parent && window.parent.usuarioId) {
    // Disparamos el evento para ranking.js
    window.dispatchEvent(new CustomEvent("resultadoJuego"));
    console.log("✅ Señal enviada al servidor.");
  }

  Swal.fire({
    title: "¡Torneo Finalizado!",
    text: `Ganador: ${jugadores[0].nombre} con ${jugadores[0].puntos} puntos.`,
    icon: "success",
    confirmButtonText: "Genial",
  }).then(() => location.reload());
}

// 7. INICIALIZACIÓN

// Esta línea hace que al cargar la página ya aparezca el input del Jugador 1
generarInputsNombres();

// --- LÓGICA TUTORIAL ---
function mostrarTutorial() {
  document.getElementById('modalTutorial').classList.remove('hidden');
}

function cerrarTutorial() {
  document.getElementById('modalTutorial').classList.add('hidden');
}

// --- PARTÍCULAS BACKGROUND ---
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  if (!particlesContainer) return;

  particlesContainer.innerHTML = "";
  const particlesCount = 30; // CONFIG.PARTICLES_COUNT

  for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDuration = Math.random() * 10 + 5 + "s";
      particle.style.animationDelay = Math.random() * 5 + "s";
      particlesContainer.appendChild(particle);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createParticles();
});
