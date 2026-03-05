// Identificación del juego al inicio
window.juegoId = 1;
window.puntosJugador = 0;

// Variables
let cartasBanca = [];
let cartasJugador = [];
let puntosBanca = 0;
let puntosJugador = 0;
let nombreJugador = "";
let turnoJugador = false;
let juegoTerminado = false;
let cartasUsadas = []; // Array para controlar las cartas que ya han salido

// Arrays para cartas aleatorias
const palosDisponibles = ["C", "D", "P", "T"]; // C=Corazones, D=Diamantes, P=Picas, T=Tréboles
const valoresDisponibles = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

// Función para generar una carta aleatoria sin repetirse
function generarCartaAleatoria() {
  let carta;
  let intentos = 0;
  let maxIntentos = 100;

  do {
    // Sacar un palo aleatorio
    let paloRandom =
      palosDisponibles[Math.floor(Math.random() * palosDisponibles.length)];

    // Sacar un valor aleatorio
    let valorRandom =
      valoresDisponibles[Math.floor(Math.random() * valoresDisponibles.length)];

    // Crear identificador único de la carta
    let idCarta = valorRandom + paloRandom;

    // Si esta carta no ha sido usada, se crea
    if (!cartasUsadas.includes(idCarta)) {
      carta = {
        valor: valorRandom,
        palo: paloRandom,
        id: idCarta,
        puntos: obtenerPuntosCarta(valorRandom),
      };

      // Marcar esta carta como usada
      cartasUsadas.push(idCarta);
      break;
    }

    intentos++;
  } while (intentos < maxIntentos);

  return carta;
}

// Función para obtener los puntos de una carta
function obtenerPuntosCarta(valor) {
  if (valor === "1") {
    return 1;
  } else if (valor === "J" || valor === "Q" || valor === "K") {
    return 10;
  } else {
    return parseInt(valor);
  }
}

// Función para obtener la ruta de la imagen de las cartas
function obtenerRutaImagen(carta) {
  // valor + palo + .png
  return `images/${carta.valor}${carta.palo}.png`;
}

// Función para mostrar una carta
function mostrarCarta(carta, tipo) {
  let contenedor =
    tipo === "banca"
      ? document.getElementById("cartasBanca")
      : document.getElementById("cartasJugador");

  // Crear elemento img
  let imgCarta = document.createElement("img");
  imgCarta.className = "carta";
  imgCarta.src = obtenerRutaImagen(carta);
  imgCarta.alt = carta.valor + carta.palo;

  contenedor.appendChild(imgCarta);
}

// Función para calcular puntos
function calcularPuntos(cartas) {
  let total = 0;
  for (let carta of cartas) {
    total += carta.puntos;
  }
  return total;
}

// Función para actualizar los puntos
function actualizarPuntos() {
  puntosBanca = calcularPuntos(cartasBanca);
  puntosJugador = calcularPuntos(cartasJugador);

  document.getElementById("puntosBanca").textContent = puntosBanca;
  document.getElementById("puntosJugador").textContent = puntosJugador;
}

// Función para que juegue la banca
function jugarBanca() {
  if (puntosBanca < 17 && !juegoTerminado) {
    let carta = generarCartaAleatoria();
    cartasBanca.push(carta);
    mostrarCarta(carta, "banca");
    actualizarPuntos();

    // Verificar si la banca se pasa de 21
    if (puntosBanca >= 22) {
      juegoTerminado = true;
      setTimeout(function () {
        mostrarResultado("ganaste", "¡GANASTE! La banca se pasó de 21");
      }, 1000);
      return;
    }

    // Continuar jugando después de 1 segundo
    setTimeout(jugarBanca, 1500);
  } else {
    // Turno del jugador
    turnoJugador = true;
    document.getElementById("btnPedirCarta").disabled = false;
    document.getElementById("btnPlantarse").disabled = false;
    document.getElementById("estadoJuego").textContent =
      "¡Tu turno! Pide carta o plántate";
  }
}

// Función para que el jugador pida carta
function pedirCartaJugador() {
  if (!turnoJugador || juegoTerminado) return;

  // Generar carta aleatoria y que no se repita
  let carta = generarCartaAleatoria();
  cartasJugador.push(carta);
  mostrarCarta(carta, "jugador");
  actualizarPuntos();

  // Verificar si el jugador se pasa de 21
  if (puntosJugador >= 22) {
    juegoTerminado = true;
    deshabilitarBotones();
    setTimeout(function () {
      mostrarResultado("perdiste", "PERDISTE! Te pasaste de 21");
    }, 500);
  }
}

// Función para plantarse
function plantarse() {
  if (!turnoJugador || juegoTerminado) return;

  juegoTerminado = true;
  deshabilitarBotones();
  determinarGanador();
}

// Función para determinar el ganador
function determinarGanador() {
  let mensaje = "";
  let tipo = "";

  // Verificar si ambos tienen 21
  if (puntosBanca === 21 && puntosJugador === 21) {
    mensaje = "EMPATE! Ambos tienen 21 puntos";
    tipo = "empate";
  }
  // Verificar si el jugador se pasa
  else if (puntosJugador >= 22) {
    mensaje = "PERDISTE! Te pasaste con " + puntosJugador + " puntos";
    tipo = "perdiste";
  }
  // Verificar si la banca se pasa
  else if (puntosBanca >= 22) {
    mensaje = "GANASTE! La banca se pasó con " + puntosBanca + " puntos";
    tipo = "ganaste";
  }
  // Comparar quién está más cerca de 21
  else {
    let diferenciaBanca = 21 - puntosBanca;
    let diferenciaJugador = 21 - puntosJugador;

    if (diferenciaJugador < diferenciaBanca) {
      mensaje = "GANASTE! " + puntosJugador + " vs " + puntosBanca;
      tipo = "ganaste";
    } else if (diferenciaJugador > diferenciaBanca) {
      mensaje = "PERDISTE! " + puntosJugador + " vs " + puntosBanca;
      tipo = "perdiste";
    } else {
      mensaje = "EMPATE! Ambos con " + puntosJugador + " puntos";
      tipo = "empate";
    }
  }

  mostrarResultado(tipo, mensaje);
}

// Función para mostrar el resultado
function mostrarResultado(tipo, texto) {
  let divMensaje = document.getElementById("mensaje");
  divMensaje.textContent = texto;
  divMensaje.className = "mensaje mostrar " + tipo;
  document.getElementById("btnReiniciar").style.display = "inline-block";

  // DISPARAR EL VOLCADO DE DATOS
  // Usamos window.parent para verificar si hay un usuario logueado en el panel
  if (window.parent.usuarioId) {
    // Actualizamos los puntos finales para que el ranking los lea
    window.puntosJugador = puntosJugador;

    // Lanzamos el aviso al archivo ranking.js
    const evento = new CustomEvent("resultadoJuego");
    window.dispatchEvent(evento);
    console.log("🚀 Iniciando transferencia de puntos al servidor...");
  }
}

// Función para deshabilitar botones
function deshabilitarBotones() {
  document.getElementById("btnPedirCarta").disabled = true;
  document.getElementById("btnPlantarse").disabled = true;
}

// Función para iniciar el juego
function iniciarJuego() {
  // Pedir nombre del jugador
  nombreJugador = prompt("Introduce tu nombre:");

  // Si no pone nombre o cancela
  if (!nombreJugador || nombreJugador.trim() === "") {
    nombreJugador = "Jugador";
  }

  // Mostrar nombre
  document.getElementById("nombreJugador").innerHTML =
    "<h2>Jugador: " + nombreJugador + "</h2>";
  document.getElementById("nombreJugadorHeader").textContent =
    nombreJugador.toUpperCase();

  // Reiniciar array de cartas usadas
  cartasUsadas = [];

  // Actualizar estado del juego
  document.getElementById("estadoJuego").textContent =
    "La banca está jugando...";

  // Empezar el juego de la banca
  setTimeout(jugarBanca, 1000);
}

// Función para reiniciar el juego
function reiniciarJuego() {
  // Limpiar cartas
  document.getElementById("cartasBanca").innerHTML = "";
  document.getElementById("cartasJugador").innerHTML = "";

  // Reiniciar variables
  cartasBanca = [];
  cartasJugador = [];
  puntosBanca = 0;
  puntosJugador = 0;
  turnoJugador = false;
  juegoTerminado = false;
  cartasUsadas = []; // Array para limpiar las cartas para una nueva partida

  // Actualizar puntos
  actualizarPuntos();

  // Ocultar mensaje y botón
  document.getElementById("mensaje").className = "mensaje";
  document.getElementById("btnReiniciar").style.display = "none";

  // Deshabilitar botones de juego
  deshabilitarBotones();

  // Actualizar estado del juego
  document.getElementById("estadoJuego").textContent =
    "La banca está jugando...";

  // Empezar de nuevo
  setTimeout(jugarBanca, 1000);
}

// Eventos de los juegos
document
  .getElementById("btnPedirCarta")
  .addEventListener("click", pedirCartaJugador);
document.getElementById("btnPlantarse").addEventListener("click", plantarse);
document
  .getElementById("btnReiniciar")
  .addEventListener("click", reiniciarJuego);

// Iniciar cuando carga la página
window.addEventListener("load", iniciarJuego);
