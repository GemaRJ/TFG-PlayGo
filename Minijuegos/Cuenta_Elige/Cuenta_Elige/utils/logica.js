// --- VARIABLES GLOBALES ---
let config = {
  numJugadores: 1,
  jugadores: [],
  turnoActual: 0,
  juegoActual: null,
  respuestaCorrecta: 0,
  rondaGlobal: 1,
  maxRondas: 5,
  intentos: 0,
  maxIntentos: 3,
};

let vistas, inputRespuesta, zonaJuego;
let txtJugadorActual, txtRonda, txtPuntos;

document.addEventListener("DOMContentLoaded", () => {
  vistas = {
    setup: document.getElementById("vista-setup"),
    menu: document.getElementById("vista-menu"),
    juego: document.getElementById("vista-juego"),
  };
  inputRespuesta = document.getElementById("input-respuesta");
  zonaJuego = document.getElementById("zona-interactiva");

  generarInputsNombres();
  cambiarVista("setup");
});

// --- SETUP ---
function ajustarJugadores(delta) {
  const nombresTemp = [];
  for (let i = 0; i < config.numJugadores; i++) {
    const input = document.getElementById(`nombre-${i}`);
    if (input) nombresTemp.push(input.value);
  }

  let nuevoVal = config.numJugadores + delta;
  if (nuevoVal >= 1 && nuevoVal <= 4) {
    config.numJugadores = nuevoVal;
    document.getElementById("num-jugadores").innerText = config.numJugadores;
    generarInputsNombres();

    for (let i = 0; i < nombresTemp.length; i++) {
      const input = document.getElementById(`nombre-${i}`);
      if (input && i < config.numJugadores) input.value = nombresTemp[i];
    }
  }
}

function generarInputsNombres() {
  const contenedor = document.getElementById("contenedor-nombres");
  contenedor.innerHTML = "";
  for (let i = 0; i < config.numJugadores; i++) {
    const div = document.createElement("div");
    div.innerHTML = `<input type="text" class="input-nombre" id="nombre-${i}" placeholder="Jugador ${i + 1}" autocomplete="off">`;
    contenedor.appendChild(div);
  }
}

function irAlMenu() {
  config.jugadores = [];
  for (let i = 0; i < config.numJugadores; i++) {
    let elem = document.getElementById(`nombre-${i}`);
    let nombreFinal =
      elem && elem.value.trim() !== "" ? elem.value.trim() : `Jugador ${i + 1}`;
    config.jugadores.push({ nombre: nombreFinal, puntos: 0 });
  }
  cambiarVista("menu");
}

// --- VISTAS ---
function cambiarVista(nombreVista) {
  Object.values(vistas).forEach((v) => v.classList.add("oculto"));
  if (vistas[nombreVista]) vistas[nombreVista].classList.remove("oculto");
}

// --- INICIO DE JUEGO ---
function prepararJuego(tipo, descripcion) {
  Swal.fire({
    title: "¿Listos?",
    text: descripcion,
    icon: "info",
    confirmButtonText: "¡Empezar! 🚀",
    confirmButtonColor: "#48dbfb",
  }).then((result) => {
    if (result.isConfirmed) iniciarPartida(tipo);
  });
}

function iniciarPartida(tipo) {
  config.juegoActual = tipo;
  config.turnoActual = 0;
  config.rondaGlobal = 1;
  config.jugadores.forEach((j) => (j.puntos = 0));
  cargarTurno();
  cambiarVista("juego");
}

// --- TURNO ---
function cargarTurno() {
  config.intentos = 0;
  if (inputRespuesta) inputRespuesta.value = "";

  const jugador = config.jugadores[config.turnoActual];

  if (txtJugadorActual) txtJugadorActual.innerText = jugador.nombre;
  if (txtRonda) txtRonda.innerText = config.rondaGlobal;
  if (txtPuntos) txtPuntos.innerText = jugador.puntos;

  if (config.juegoActual === "contar") logicaContar();
  else if (config.juegoActual === "sumar") logicaOperacion("+");
  else if (config.juegoActual === "restar") logicaOperacion("-");
}

// --- LOGICA FRUTAS ---
function logicaContar() {
  zonaJuego.innerHTML = "";
  const frutas = ["🍎", "🍌", "🍓", "🍐", "🍊", "🍇"];
  const cantidad = Math.floor(Math.random() * 8) + 1;
  config.respuestaCorrecta = cantidad;

  const ancho = 90 / cantidad;
  for (let i = 0; i < cantidad; i++) {
    const f = document.createElement("div");
    f.className = "fruta";
    f.textContent = frutas[Math.floor(Math.random() * frutas.length)];
    f.style.left = i * ancho + 5 + "%";
    f.style.top = "-15%";
    f.style.opacity = "0";
    zonaJuego.appendChild(f);
    window.getComputedStyle(f).top;
    setTimeout(
      () => {
        f.style.opacity = "1";
        f.style.top = Math.floor(Math.random() * 15) + 70 + "%";
        f.style.transform = `rotate(${Math.floor(Math.random() * 40) - 20}deg)`;
      },
      50 + i * 300,
    );
  }
}

// --- LOGICA OPERACIONES ---
function logicaOperacion(op) {
  zonaJuego.innerHTML = "";
  let a = Math.floor(Math.random() * 9) + 1;
  let b = Math.floor(Math.random() * 9) + 1;
  if (op === "-" && b > a) [a, b] = [b, a];
  config.respuestaCorrecta = op === "+" ? a + b : a - b;
  const div = document.createElement("div");
  div.className = "operacion-texto";
  div.textContent = `${a} ${op} ${b}`;
  zonaJuego.appendChild(div);
}

// --- TECLADO ---
function teclear(v) {
  if (!inputRespuesta) return;
  if (v === "C") inputRespuesta.value = "";
  else if (inputRespuesta.value.length < 2) inputRespuesta.value += v;
}

// --- VERIFICAR ---
function verificar() {
  if (!inputRespuesta || inputRespuesta.value === "") return;
  const valorUsuario = parseInt(inputRespuesta.value);
  const jugadorObj = config.jugadores[config.turnoActual];

  if (valorUsuario === config.respuestaCorrecta) {
    jugadorObj.puntos += 10;
    if (txtPuntos) txtPuntos.innerText = jugadorObj.puntos;
    Swal.fire({
      title: `¡Muy bien ${jugadorObj.nombre}! 🎉`,
      text: "+10 Puntos",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => pasarTurno());
  } else {
    config.intentos++;
    if (config.intentos >= config.maxIntentos) {
      Swal.fire({
        title: "Tiempo agotado 😅",
        text: `La respuesta era ${config.respuestaCorrecta}.`,
        icon: "warning",
        confirmButtonText: "Siguiente",
      }).then(() => pasarTurno());
    } else {
      jugadorObj.puntos = Math.max(0, jugadorObj.puntos - 2);
      if (txtPuntos) txtPuntos.innerText = jugadorObj.puntos;
      Swal.fire({
        title: "¡Casi!",
        text: "Inténtalo otra vez. (-2 ptos)",
        icon: "error",
        timer: 1000,
        showConfirmButton: false,
      });
      inputRespuesta.value = "";
    }
  }
}

// --- PASAR TURNO ---
function pasarTurno() {
  config.turnoActual++;
  if (config.turnoActual >= config.jugadores.length) {
    config.turnoActual = 0;
    config.rondaGlobal++;
  }
  if (config.rondaGlobal > config.maxRondas) mostrarRanking();
  else {
    const nombreSig = config.jugadores[config.turnoActual].nombre;
    Swal.fire({
      title: `Ronda ${config.rondaGlobal}`,
      html: `¡Le toca a <b>${nombreSig}</b>!`,
      icon: "info",
      confirmButtonText: "¡Vamos!",
      confirmButtonColor: "#48dbfb",
      allowOutsideClick: false,
    }).then(() => cargarTurno());
  }
}

function mostrarRanking() {
  // Guardar los datos de la partida en localStorage
  localStorage.setItem("datosPartida", JSON.stringify(config.jugadores));

  Swal.fire({
    title: "¡Juego Terminado!",
    text: "¡Mira el ranking final en la siguiente pantalla!",
    icon: "success",
    confirmButtonText: "Ver Resultados",
  }).then(() => {
    // Redirigir a la pantalla de resultados
    window.location.href = "resultado.html";
  });
}
