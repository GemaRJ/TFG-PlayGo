document.addEventListener("DOMContentLoaded", () => {
  // 1. ZONA DE SELECTORES (DOM)
  const celdas = document.querySelectorAll(".cell");
  const textoEstado = document.querySelector("#status-text");
  const btnReiniciar = document.querySelector("#btn-restart");
  const btnSalir = document.querySelector("#btn-exit");
  const tableroJuego = document.querySelector("#game-board");

  // 2. ZONA DE ESTADO (VARIABLES GLOBALES)
  const configuracion = JSON.parse(localStorage.getItem("gameConfig"));

  if (!configuracion) {
    window.location.href = "menu.html";
    return;
  }

  let tableroVirtual = Array(9).fill(null);
  let jugadorActual = 1;
  let juegoActivo = true;

  // 3. ZONA DE ESCUCHADORES (LISTENERS)
  celdas.forEach((celda) =>
    celda.addEventListener("click", alHacerClicEnCelda),
  );

  btnReiniciar.addEventListener("click", () => {
    window.location.reload();
  });

  btnSalir.addEventListener("click", () => {
    window.location.href = "resultado.html";
  });

  // Mostramos el turno inicial
  actualizarEstadoUI();

  // 4. ZONA DE FUNCIONES (LÓGICA)

  function actualizarEstadoUI() {
    if (!juegoActivo) return;
    const avatar = jugadorActual === 1 ? configuracion.p1 : configuracion.p2;
    textoEstado.innerText = `Turno de: ${avatar}`;
    textoEstado.style.color =
      jugadorActual === 1 ? "var(--primary)" : "var(--secondary)";
  }

  function alHacerClicEnCelda(e) {
    const indice = e.target.dataset.i;

    if (!juegoActivo || tableroVirtual[indice]) return;

    ejecutarMovimiento(indice, jugadorActual);

    // Lógica para modo VS Robot
    if (juegoActivo && configuracion.mod === "1" && jugadorActual === 2) {
      tableroJuego.style.pointerEvents = "none";
      textoEstado.innerText = "Pensando... 🤖";

      setTimeout(() => {
        movimientoRobot();
        tableroJuego.style.pointerEvents = "auto";
      }, 700);
    }
  }

  function ejecutarMovimiento(indice, jugador) {
    tableroVirtual[indice] = jugador;
    celdas[indice].innerText =
      jugador === 1 ? configuracion.p1 : configuracion.p2;
    celdas[indice].style.color =
      jugador === 1 ? "var(--primary)" : "var(--secondary)";

    if (verificarGanador(jugador)) {
      finalizarPartida(jugador);
    } else if (tableroVirtual.every((celda) => celda)) {
      finalizarPartida(0); // Caso: Empate
    } else {
      jugadorActual = jugadorActual === 1 ? 2 : 1;
      actualizarEstadoUI();
    }
  }

  function movimientoRobot() {
    const indicesVacios = tableroVirtual
      .map((valor, indice) => (valor === null ? indice : null))
      .filter((valor) => valor !== null);

    if (indicesVacios.length > 0) {
      const aleatorio =
        indicesVacios[Math.floor(Math.random() * indicesVacios.length)];
      ejecutarMovimiento(aleatorio, 2);
    }
  }

  function verificarGanador(jugador) {
    const combinacionesGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Horizontales
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Verticales
      [0, 4, 8],
      [2, 4, 6], // Diagonales
    ];
    return combinacionesGanadoras.find((combo) =>
      combo.every((indice) => tableroVirtual[indice] === jugador),
    );
  }

  function finalizarPartida(ganador) {
    juegoActivo = false;
    let historial = JSON.parse(localStorage.getItem("matchHistory")) || [];
    let datosResultado = {};

    if (ganador === 0) {
      textoEstado.innerText = "¡Es un Empate! 🤝";
      datosResultado = { winner: "Empate", icon: "🤝" };
    } else {
      const icono = ganador === 1 ? configuracion.p1 : configuracion.p2;
      const nombre =
        ganador === 1
          ? "Jugador 1"
          : configuracion.mod === "1"
            ? "Robot"
            : "Jugador 2";
      textoEstado.innerText = `¡Ganador: ${icono}!`;

      const comboGanador = verificarGanador(ganador);
      if (comboGanador)
        comboGanador.forEach((i) => celdas[i].classList.add("winner"));

      datosResultado = { winner: nombre, icon: icono };
    }

    historial.push(datosResultado);
    localStorage.setItem("matchHistory", JSON.stringify(historial));

    btnReiniciar.style.display = "inline-block";
    btnSalir.innerText = "🏆 Ver Resultados";
    btnSalir.classList.replace("btn-secondary", "btn-primary");
  }
});
