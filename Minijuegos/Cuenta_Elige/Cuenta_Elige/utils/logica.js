// --- VARIABLES GLOBALES ---
let config = {
  jugadores: 1,
  juegoActual: null,
  respuestaCorrecta: 0,
  // NUEVAS VARIABLES PARA LA LÓGICA DE JUEGO
  rondaActual: 1,
  maxRondas: 5,
  intentos: 0,
  maxIntentos: 3,
};

// --- DOM ELEMENTS ---
const vistas = {
  setup: document.getElementById("vista-setup"),
  menu: document.getElementById("vista-menu"),
  juego: document.getElementById("vista-juego"),
};
const inputRespuesta = document.getElementById("input-respuesta");
const zonaJuego = document.getElementById("zona-interactiva");
const badgeNivel = document.querySelector(".nivel-badge"); // Para mostrar "Ronda 1/5"

// --- 1. CONFIGURACIÓN ---

document.addEventListener("DOMContentLoaded", () => {
  // Aseguramos que la vista inicial sea setup
  cambiarVista("setup");
});

function ajustarJugadores(delta) {
  let nuevoVal = config.jugadores + delta;
  if (nuevoVal >= 1 && nuevoVal <= 4) {
    config.jugadores = nuevoVal;
    document.getElementById("num-jugadores").innerText = config.jugadores;
  }
}

function irAlMenu() {
  document.getElementById("info-jugadores").innerText = config.jugadores;
  cambiarVista("menu");
}

// --- 2. NAVEGACIÓN Y MENÚ ---

function cambiarVista(nombreVista) {
  Object.values(vistas).forEach((v) => v.classList.add("oculto"));
  vistas[nombreVista].classList.remove("oculto");
}

function prepararJuego(tipo, descripcion) {
  Swal.fire({
    title: "¿Listo?",
    text: descripcion,
    icon: "info",
    confirmButtonText: "¡Empezar Ronda! 🚀",
    confirmButtonColor: "#48dbfb",
    background: "#fff",
    backdrop: `rgba(0,0,123,0.4)`,
  }).then((result) => {
    if (result.isConfirmed) {
      // REINICIAMOS LA RONDA AL EMPEZAR DE CERO
      config.rondaActual = 1;
      iniciarJuegoReal(tipo);
    }
  });
}

function iniciarJuegoReal(tipo) {
  config.juegoActual = tipo;
  config.intentos = 0; // Reiniciamos intentos para esta pregunta
  inputRespuesta.value = "";

  // Actualizamos el texto de arriba a la derecha
  if (badgeNivel)
    badgeNivel.textContent = `Ronda ${config.rondaActual} / ${config.maxRondas}`;

  cambiarVista("juego");

  if (tipo === "contar") logicaContar();
  else if (tipo === "sumar") logicaOperacion("+");
  else if (tipo === "restar") logicaOperacion("-");
}

function confirmarSalida() {
  Swal.fire({
    title: "¿Salir?",
    text: "Perderás el progreso de la ronda actual",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#ff4757",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, salir",
    cancelButtonText: "Seguir",
  }).then((result) => {
    if (result.isConfirmed) {
      zonaJuego.innerHTML = "";
      cambiarVista("menu");
    }
  });
}

// --- 3. LÓGICA DE JUEGOS ---

function logicaContar() {
  zonaJuego.innerHTML = "";
  const frutas = ["🍎", "🍌", "🍓", "🍐", "🍊", "🍇"];

  // Generamos entre 1 y 8 frutas
  const cantidad = Math.floor(Math.random() * 8) + 1;
  config.respuestaCorrecta = cantidad;

  // Cálculo de columnas para que no se amontonen (Tu petición anterior)
  const anchoDisponible = 90;
  const anchoColumna = anchoDisponible / cantidad;

  for (let i = 0; i < cantidad; i++) {
    const f = document.createElement("div");
    f.className = "fruta";
    f.textContent = frutas[Math.floor(Math.random() * frutas.length)];

    // Posición horizontal calculada
    const posicionIzquierda = i * anchoColumna + 5;
    f.style.left = posicionIzquierda + "%";

    zonaJuego.appendChild(f);

    // Posición vertical (suelo)
    const posicionFinal = Math.floor(Math.random() * 15) + 70;
    const retrasoCaida = i * 200;

    setTimeout(() => {
      f.style.opacity = "1";
      f.style.top = posicionFinal + "%";
      f.style.transform = `rotate(${Math.floor(Math.random() * 30) - 15}deg)`;
    }, 100 + retrasoCaida);
  }
}

function logicaOperacion(operador) {
  zonaJuego.innerHTML = "";

  let a = Math.floor(Math.random() * 9) + 1;
  let b = Math.floor(Math.random() * 9) + 1;

  if (operador === "-" && b > a) [a, b] = [b, a];

  config.respuestaCorrecta = operador === "+" ? a + b : a - b;

  const div = document.createElement("div");
  div.className = "operacion-texto";
  div.textContent = `${a} ${operador} ${b}`;
  zonaJuego.appendChild(div);
}

// --- 4. INPUT, VERIFICACIÓN Y GESTIÓN DE RONDAS ---

function teclear(valor) {
  if (valor === "C") {
    inputRespuesta.value = "";
  } else {
    if (inputRespuesta.value.length < 2) {
      inputRespuesta.value += valor;
    }
  }
}

function verificar() {
  if (inputRespuesta.value === "") return;

  const valorUsuario = parseInt(inputRespuesta.value);

  if (valorUsuario === config.respuestaCorrecta) {
    // --- RESPUESTA CORRECTA ---
    Swal.fire({
      title: "¡Muy bien! 🎉",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    }).then(() => {
      siguienteRonda();
    });
  } else {
    // --- RESPUESTA INCORRECTA ---
    config.intentos++;

    if (config.intentos >= config.maxIntentos) {
      // Se acabaron los intentos
      Swal.fire({
        title: "¡Oh no! 😅",
        text: `La respuesta correcta era: ${config.respuestaCorrecta}`,
        icon: "info",
        confirmButtonText: "Continuar",
      }).then(() => {
        siguienteRonda();
      });
    } else {
      // Aún quedan intentos
      const intentosRestantes = config.maxIntentos - config.intentos;
      Swal.fire({
        title: "¡Casi!",
        text: `Inténtalo de nuevo. Te quedan ${intentosRestantes} oportunidades.`,
        icon: "error",
        confirmButtonColor: "#ff6b6b",
        timer: 1500,
      });
      inputRespuesta.value = ""; // Borramos para que escriba de nuevo
    }
  }
}

function siguienteRonda() {
  config.rondaActual++;

  if (config.rondaActual > config.maxRondas) {
    // FIN DEL JUEGO (Se completaron las 5 rondas)
    Swal.fire({
      title: "¡Ronda Completada! 🏆",
      text: "Has terminado los 5 ejercicios.",
      icon: "success",
      confirmButtonText: "Volver al Menú",
    }).then(() => {
      cambiarVista("menu");
      zonaJuego.innerHTML = "";
    });
  } else {
    // SIGUIENTE PREGUNTA
    iniciarJuegoReal(config.juegoActual);
  }
}
