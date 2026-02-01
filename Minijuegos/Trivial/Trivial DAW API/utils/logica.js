// EJECUTAR DOM

document.addEventListener("DOMContentLoaded", () => {
  generarInputsJugadores();
  selectorNumeroJugadores.addEventListener("change", generarInputsJugadores);
  botonComenzar.addEventListener("click", iniciarJuego);
});

// SELECTORES DOM

const selectorNumeroJugadores = document.querySelector("#numero-jugadores");
const contenedorNombresJugadores = document.querySelector("#nombres-jugadores");
const botonComenzar = document.querySelector("#boton-comenzar");

const selectorCategoria = document.querySelector("#categoria");
const selectorDificultad = document.querySelector("#dificultad");

const pantallaConfiguracion = document.querySelector("#pantalla-configuracion");
const pantallaJuego = document.querySelector("#pantalla-juego");

const nombreJugadorTurno = document.querySelector("#nombre-jugador-turno");
const areaPregunta = document.querySelector("#area-pregunta");

const marcadorPuntos = document.querySelector("#marcador-puntos");
const marcadorTiempo = document.querySelector("#marcador-tiempo");

// VARIABLES

let jugadores = [];
let turnoActual = 0;
let preguntas = [];
let indicePregunta = 0;
let puntos = 0;
let tiempo = 30;
let intervaloTiempo = null;

// FUNCIONES

// Decodificar HTML
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Generar inputs de nombres de jugadores según el número seleccionado
function generarInputsJugadores() {
  contenedorNombresJugadores.innerHTML = "";
  for (let i = 1; i <= selectorNumeroJugadores.value; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Nombre jugador ${i}`;
    input.className = "form-control mb-2 player-input";
    contenedorNombresJugadores.appendChild(input);
  }
}

// Iniciar juego
async function iniciarJuego() {
  const inputs = document.querySelectorAll(".player-input");
  jugadores = [];

  for (let input of inputs) {
    if (!input.value.trim()) {
      Swal.fire("Error", "Introduce todos los nombres", "warning");
      return;
    }
    jugadores.push({ nombre: input.value.trim(), puntos: 0 });
  }

  await cargarPreguntasAPI();
  if (preguntas.length === 0) return;

  turnoActual = 0;
  iniciarTurno();
}

// Obtener URL de preguntas según categoría y dificultad
function obtenerURLPreguntas() {
  const categoria = selectorCategoria.value;
  const dificultad = selectorDificultad.value;

  const urls = {
    Animales: {
      easy: "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple",
      medium:
        "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple",
      hard: "https://opentdb.com/api.php?amount=10&category=27&difficulty=hard&type=multiple",
    },
    Videojuegos: {
      easy: "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple",
      medium:
        "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple",
      hard: "https://opentdb.com/api.php?amount=10&category=15&difficulty=hard&type=multiple",
    },
  };

  return urls[categoria][dificultad];
}

// Cargar preguntas de API
async function cargarPreguntasAPI() {
  try {
    const response = await fetch(obtenerURLPreguntas());
    const data = await response.json();

    if (data.response_code !== 0) throw new Error();

    preguntas = data.results.map((p) => ({
      pregunta: decodeHTML(p.question),
      correcta: decodeHTML(p.correct_answer),
      incorrectas: p.incorrect_answers.map(decodeHTML),
    }));
  } catch {
    Swal.fire("Error", "No se pudieron cargar las preguntas", "error");
  }
}

// Iniciar turno de un jugador
function iniciarTurno() {
  puntos = 0;
  indicePregunta = 0;
  marcadorPuntos.textContent = 0;

  pantallaConfiguracion.classList.add("d-none");
  pantallaJuego.classList.remove("d-none");

  nombreJugadorTurno.textContent = jugadores[turnoActual].nombre;
  mostrarPregunta();
}

// Mostrar pregunta actual
function mostrarPregunta() {
  if (indicePregunta >= preguntas.length) {
    finalizarTurno();
    return;
  }

  const p = preguntas[indicePregunta];
  areaPregunta.innerHTML = `<p class="fw-bold">${p.pregunta}</p>`;

  const opciones = [...p.incorrectas, p.correcta].sort(
    () => Math.random() - 0.5,
  );

  opciones.forEach((op) => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.className = "btn btn-outline-light w-100 mb-2";
    btn.onclick = () => comprobarRespuesta(op, p.correcta, btn);
    areaPregunta.appendChild(btn);
  });

  iniciarTemporizador();
}

// Comprobar respuesta seleccionada
function comprobarRespuesta(seleccion, correcta, boton) {
  clearInterval(intervaloTiempo);

  const botones = document.querySelectorAll("#area-pregunta button");
  botones.forEach((b) => (b.disabled = true));

  if (seleccion === correcta) {
    boton.classList.replace("btn-outline-light", "btn-success");
    puntos += 10;
    marcadorPuntos.textContent = puntos;
  } else {
    boton.classList.replace("btn-outline-light", "btn-danger");
    botones.forEach((b) => {
      if (b.textContent === correcta) {
        b.classList.replace("btn-outline-light", "btn-success");
      }
    });
  }

  // Pasar a la siguiente pregunta tras 1.5s
  setTimeout(() => {
    indicePregunta++;
    mostrarPregunta();
  }, 1500);
}

// Temporizador de 30 segundos por pregunta
function iniciarTemporizador() {
  clearInterval(intervaloTiempo);
  tiempo = 30;
  marcadorTiempo.textContent = tiempo;

  intervaloTiempo = setInterval(() => {
    tiempo--;
    marcadorTiempo.textContent = tiempo;

    if (tiempo <= 0) {
      clearInterval(intervaloTiempo);

      // Última pregunta del último jugador
      if (
        indicePregunta >= preguntas.length - 1 &&
        turnoActual >= jugadores.length - 1
      ) {
        finalizarTurno();
      } else {
        indicePregunta++;
        mostrarPregunta();
      }
    }
  }, 1000);
}

// Finalizar turno o juego completo
function finalizarTurno() {
  jugadores[turnoActual].puntos = puntos;
  turnoActual++;

  if (turnoActual < jugadores.length) {
    Swal.fire(
      "Cambio de turno",
      `Ahora es el turno de ${jugadores[turnoActual].nombre}`,
      "info",
    ).then(() => iniciarTurno());
  } else {
    // Guardar historial completo
    const historial =
      JSON.parse(localStorage.getItem("historialTrivial")) || [];
    historial.push({
      fecha: new Date().toLocaleString(),
      categoria: selectorCategoria.value,
      dificultad: selectorDificultad.value,
      jugadores: jugadores,
    });
    localStorage.setItem("historialTrivial", JSON.stringify(historial));

    // Mostrar resultados
    Swal.fire("Fin del juego", "Mostrando resultados finales", "success").then(
      () => {
        window.location.href = "resultado.html";
      },
    );
  }
}
