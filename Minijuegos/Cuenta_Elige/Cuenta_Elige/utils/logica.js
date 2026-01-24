// ================================
// CONFIGURACIÓN GLOBAL
// ================================
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

let vistas, inputRespuesta, zonaJuego, txtJugadorActual, txtRonda, txtPuntos;

// ================================
// INICIALIZACIÓN
// ================================
document.addEventListener("DOMContentLoaded", () => {
  vistas = {
    setup: document.querySelector("#vista-setup"),
    menu: document.querySelector("#vista-menu"),
    juego: document.querySelector("#vista-juego"),
    ranking: document.querySelector("#vista-ranking"),
  };

  inputRespuesta = document.querySelector("#input-respuesta");
  zonaJuego = document.querySelector("#zona-interactiva");
  txtJugadorActual = document.querySelector("#nombre-jugador-actual");
  txtRonda = document.querySelector("#num-ronda");
  txtPuntos = document.querySelector("#puntos-actuales");

  generarInputsNombres();
  cambiarVista("setup");
});

// ================================
// FUNCIONES DE CONFIGURACIÓN DE JUGADORES
// ================================
function ajustarJugadores(delta) {
  const nombresTemp = [];
  for (let i = 0; i < config.numJugadores; i++) {
    const el = document.querySelector(`#nombre-${i}`);
    if (el) nombresTemp.push(el.value);
  }

  let nuevoVal = config.numJugadores + delta;
  if (nuevoVal >= 1 && nuevoVal <= 4) {
    config.numJugadores = nuevoVal;
    document.querySelector("#num-jugadores").textContent = config.numJugadores;
    generarInputsNombres();

    nombresTemp.forEach((valor, i) => {
      const el = document.querySelector(`#nombre-${i}`);
      if (el && i < config.numJugadores) el.value = valor;
    });
  }
}

function generarInputsNombres() {
  const contenedor = document.querySelector("#contenedor-nombres");
  if (!contenedor) return;

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
    const el = document.querySelector(`#nombre-${i}`);
    let nombre =
      el && el.value.trim() !== "" ? el.value.trim() : `Jugador ${i + 1}`;
    config.jugadores.push({ nombre, puntos: 0 });
  }
  cambiarVista("menu");
}

// ================================
// FUNCIONES DE VISTAS
// ================================
function cambiarVista(nombre) {
  Object.values(vistas).forEach((v) => {
    if (v) v.classList.add("oculto");
  });
  if (vistas[nombre]) vistas[nombre].classList.remove("oculto");
}

// ================================
// FUNCIONES DE JUEGO
// ================================
function prepararJuego(tipo, desc) {
  Swal.fire({
    title: "¿Listos?",
    text: desc,
    icon: "info",
    confirmButtonText: "¡Vamos!",
  }).then((r) => {
    if (r.isConfirmed) iniciarPartida(tipo);
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

function cargarTurno() {
  config.intentos = 0;
  if (inputRespuesta) inputRespuesta.value = "";

  const jug = config.jugadores[config.turnoActual];

  if (txtJugadorActual) txtJugadorActual.textContent = jug.nombre;
  if (txtRonda) txtRonda.textContent = config.rondaGlobal;
  if (txtPuntos) txtPuntos.textContent = jug.puntos;

  if (config.juegoActual === "contar") logicaContar();
  else if (config.juegoActual === "sumar") logicaOperacion("+");
  else if (config.juegoActual === "restar") logicaOperacion("-");
}

// ================================
// LÓGICA DE MINIJUEGOS
// ================================
function logicaContar() {
  if (!zonaJuego) return;
  zonaJuego.innerHTML = "";
  const frutas = ["🍎", "🍌", "🍓", "🍐", "🍊", "🍇"];
  const cant = Math.floor(Math.random() * 8) + 1;
  config.respuestaCorrecta = cant;
  const ancho = 90 / cant;

  for (let i = 0; i < cant; i++) {
    const f = document.createElement("div");
    f.className = "fruta";
    f.textContent = frutas[Math.floor(Math.random() * frutas.length)];
    f.style.left = i * ancho + 5 + "%";
    f.style.top = "-15%";
    f.style.opacity = "0";
    zonaJuego.appendChild(f);

    window.getComputedStyle(f).top;

    const posicionFinal = Math.floor(Math.random() * 25) + 50;

    setTimeout(
      () => {
        f.style.opacity = "1";
        f.style.top = posicionFinal + "%";
        f.style.transform = `rotate(${Math.floor(Math.random() * 40) - 20}deg)`;
      },
      50 + i * 300,
    );
  }
}

function logicaOperacion(op) {
  if (!zonaJuego) return;
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

// ================================
// TECLADO VIRTUAL
// ================================
function teclear(v) {
  if (!inputRespuesta) return;
  if (v === "C") inputRespuesta.value = "";
  else if (inputRespuesta.value.length < 2) inputRespuesta.value += v;
}

// ================================
// VERIFICAR RESPUESTA
// ================================
function verificar() {
  if (!inputRespuesta || inputRespuesta.value === "") return;
  const val = parseInt(inputRespuesta.value);
  const jug = config.jugadores[config.turnoActual];

  if (val === config.respuestaCorrecta) {
    jug.puntos += 10;
    if (txtPuntos) txtPuntos.textContent = jug.puntos;

    Swal.fire({
      title: `¡Bien ${jug.nombre}! 🎉`,
      text: "+10 Puntos",
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    }).then(pasarTurno);
  } else {
    config.intentos++;
    if (config.intentos >= config.maxIntentos) {
      Swal.fire({
        title: "¡Oh no! 😅",
        text: `Era ${config.respuestaCorrecta}`,
        icon: "warning",
      }).then(pasarTurno);
    } else {
      jug.puntos = Math.max(0, jug.puntos - 2);
      if (txtPuntos) txtPuntos.textContent = jug.puntos;
      Swal.fire({
        title: "¡Casi!",
        text: "(-2 pts)",
        icon: "error",
        timer: 1000,
        showConfirmButton: false,
      });
      inputRespuesta.value = "";
    }
  }
}

// ================================
// PASAR TURNO Y FIN DE JUEGO
// ================================
function pasarTurno() {
  const jugAnterior = config.jugadores[config.turnoActual].nombre;
  config.turnoActual++;

  if (config.turnoActual >= config.jugadores.length) {
    config.turnoActual = 0;
    config.rondaGlobal++;
  }

  if (config.rondaGlobal > config.maxRondas) mostrarRanking();
  else {
    if (config.jugadores.length > 1) {
      const sigJug = config.jugadores[config.turnoActual].nombre;
      Swal.fire({
        title: `Fin de turno: ${jugAnterior}`,
        html: `<h3>👉 ¡Le toca a ${sigJug}!</h3>`,
        icon: "info",
        confirmButtonText: "¡Estoy listo!",
        allowOutsideClick: false,
      }).then(cargarTurno);
    } else cargarTurno();
  }
}

// ================================
// RANKING Y CONFETI
// ================================
function mostrarRanking() {
  cambiarVista("ranking");
  const podio = document.querySelector("#contenedor-podio");
  const resto = document.querySelector("#lista-resto");
  if (podio) podio.innerHTML = "";
  if (resto) resto.innerHTML = "";

  const ranking = [...config.jugadores].sort((a, b) => b.puntos - a.puntos);

  ranking.forEach((j, index) => {
    const div = document.createElement("div");
    if (index === 0) {
      div.className = "card-ganador";
      div.innerHTML = `<div class="corona">👑</div><div class="nombre-ganador">${j.nombre}</div><div class="puntos-ganador">${j.puntos} Pts</div>`;
      podio.appendChild(div);
    } else {
      let medalla = index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`;
      div.className = "fila-resultado";
      div.innerHTML = `<span class="medalla">${medalla}</span><span>${j.nombre}</span><span>${j.puntos} pts</span>`;
      resto.appendChild(div);
    }
  });

  lanzarConfeti();
}

function lanzarConfeti() {
  if (typeof confetti === "undefined") return;
  const end = Date.now() + 3000;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// ================================
// FUNCIONES DE UTILIDAD
// ================================
function volverInicio() {
  config.jugadores = [];
  config.numJugadores = 1;
  document.querySelector("#num-jugadores").textContent = "1";
  generarInputsNombres();
  cambiarVista("setup");
}

function confirmarSalida() {
  Swal.fire({
    title: "¿Salir?",
    text: "Se perderá el progreso",
    icon: "warning",
    showCancelButton: true,
  }).then((r) => {
    if (r.isConfirmed) {
      if (zonaJuego) zonaJuego.innerHTML = "";
      cambiarVista("menu");
    }
  });
}
