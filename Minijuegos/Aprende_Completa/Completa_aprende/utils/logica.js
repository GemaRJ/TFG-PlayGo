/**
 * ------------------------------------------------------------------
 * PROYECTO: APRENDE Y COMPLETA PRO
 * DESARROLLADO POR: GEMA
 * ASIGNATURA: Desarrollo Web
 * FECHA: Enero 2026
 * ------------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==============================================================
  // 1. ZONA DE SELECTORES (REFERENCIAS AL DOM)
  // Aquí capturo todos los elementos HTML que voy a usar al principio.
  // ==============================================================

  // --- Pantallas (Vistas) ---
  const views = {
    reg: document.querySelector("#view-registro"),
    game: document.querySelector("#view-juego"),
    rank: document.querySelector("#view-ranking"),
  };

  // --- Elementos Generales ---
  const body = document.body;
  const overlayMenu = document.querySelector("#overlay-menu");
  const logoCorner = document.querySelector(".logo-corner"); // Por si quisieras ocultarlo

  // --- Elementos del Registro ---
  const inputNumJugadores = document.querySelector("#num-jugadores");
  const contenedorNombres = document.querySelector("#contenedor-nombres");
  const configMulti = document.querySelector("#config-multi");

  // --- Botones del Registro ---
  const btnEntrar = document.querySelector("#btn-entrar");
  const btnSolo = document.querySelector("#btn-solo");
  const btnMulti = document.querySelector("#btn-multi");

  // --- Botones de Modo de Juego ---
  const btnModoImg = document.querySelector("#btn-modo-img");
  const btnModoSer = document.querySelector("#btn-modo-ser");
  const btnModoLet = document.querySelector("#btn-modo-let");
  const btnModoIng = document.querySelector("#btn-modo-ing");

  // --- Elementos de la Pantalla de Juego ---
  const txtNombre = document.querySelector("#txt-nombre-jugador");
  const txtPuntos = document.querySelector("#txt-puntos");
  const txtRonda = document.querySelector("#txt-ronda");
  const pistaVisual = document.querySelector("#pista-visual");
  const palabraDisplay = document.querySelector("#palabra-display");
  const opcionesContainer = document.querySelector("#opciones-container");
  const btnVolverMenu = document.querySelector("#btn-volver-menu");

  // --- Elementos del Ranking ---
  const listaRanking = document.querySelector("#lista-ranking");
  const btnResetTotal = document.querySelector("#btn-reset-total");

  // ==============================================================
  // 2. ZONA DE ESTADO (VARIABLES GLOBALES)
  // Aquí guardo la información viva del juego.
  // ==============================================================

  let jugadoresPartida = []; // Array de jugadores
  let historialGlobal = []; // Array para el ranking final

  let indiceTurno = 0; // A quién le toca
  let puntosTurno = 0; // Puntos actuales
  let preguntasRespondidas = 0;
  const MAX_RONDAS = 10;

  let modoActual = ""; // 'imagenes', 'series', etc.
  let valorPreguntaActual = 10;

  // ==============================================================
  // 3. ZONA DE INICIALIZACIÓN
  // Cosas que deben pasar nada más arrancar.
  // ==============================================================

  console.log("Sistema iniciado. Elementos cargados.");
  body.className = "fondo-menu"; // Asegurar fondo correcto

  // ==============================================================
  // 4. ZONA DE EVENTOS (LISTENERS)
  // Aquí "conecto los cables": Qué pasa al hacer click o escribir.
  // ==============================================================

  // --- Eventos de Registro ---
  btnEntrar.onclick = () => manejarEntradaJugadores();

  btnSolo.onclick = () => {
    toggleModoJuego(true);
    actualizarInputsNombres(1);
  };

  btnMulti.onclick = () => {
    toggleModoJuego(false);
    actualizarInputsNombres(inputNumJugadores.value);
  };

  inputNumJugadores.oninput = () => {
    actualizarInputsNombres(inputNumJugadores.value);
  };

  // --- Eventos de Selección de Categoría ---
  btnModoImg.onclick = () => setModo("imagenes");
  btnModoSer.onclick = () => setModo("series");
  btnModoLet.onclick = () => setModo("letras");
  btnModoIng.onclick = () => setModo("ingles");

  // --- Eventos de Navegación ---
  btnVolverMenu.onclick = () => confirmarSalida();
  btnResetTotal.onclick = () => reiniciarTodo();

  // ==============================================================
  // 5. ZONA DE FUNCIONES (LÓGICA)
  // Aquí está el "cerebro" que hace que todo funcione.
  // ==============================================================

  // --- Funciones de Registro ---

  function manejarEntradaJugadores() {
    jugadoresPartida = [];
    // Busco los inputs dentro del contenedor (generados dinámicamente)
    document.querySelectorAll(".input-nombre").forEach((input) => {
      if (input.value.trim()) {
        jugadoresPartida.push({ nombre: input.value.trim(), puntos: 0 });
      }
    });

    if (jugadoresPartida.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "¡Falta nombre!",
        text: "Por favor, escribe quién va a jugar.",
        confirmButtonColor: "#4A90E2",
      });
      return;
    }

    console.log("Jugadores listos:", jugadoresPartida);
    indiceTurno = 0;
    iniciarTurno();
  }

  function toggleModoJuego(esSolo) {
    btnSolo.classList.toggle("active", esSolo);
    btnMulti.classList.toggle("active", !esSolo);
    configMulti.classList.toggle("hidden", esSolo);
  }

  function actualizarInputsNombres(cantidad) {
    contenedorNombres.innerHTML = "";
    for (let i = 1; i <= cantidad; i++) {
      contenedorNombres.innerHTML += `
        <div class="stat-pill mx-auto mb-2" style="max-width:300px;">
            <input type="text" class="custom-input input-nombre" placeholder="Nombre Jugador ${i}">
        </div>`;
    }
  }

  // --- Funciones del Juego ---

  function iniciarTurno() {
    puntosTurno = 0;
    preguntasRespondidas = 0;

    // UI Update
    const jugador = jugadoresPartida[indiceTurno];
    txtNombre.textContent = jugador.nombre;
    txtPuntos.textContent = "0";
    txtRonda.textContent = "1";

    console.log(`Turno de: ${jugador.nombre}`);

    // Limpieza
    pistaVisual.textContent = "";
    palabraDisplay.innerHTML = "";
    opcionesContainer.innerHTML = "";

    switchView("game");
    overlayMenu.classList.remove("hidden");
  }

  function setModo(modo) {
    modoActual = modo;
    overlayMenu.classList.add("hidden");

    // Lógica de fondos
    body.className = "";
    if (modo === "imagenes") body.classList.add("fondo-nubes");
    else if (modo === "series") body.classList.add("fondo-espacio");
    else if (modo === "letras") body.classList.add("fondo-playa");
    else if (modo === "ingles") body.classList.add("fondo-ing");

    lanzarPregunta();
  }

  function lanzarPregunta() {
    if (preguntasRespondidas >= MAX_RONDAS) {
      finalizarTurno();
      return;
    }

    valorPreguntaActual = 10;
    txtRonda.textContent = preguntasRespondidas + 1;

    const pool = BANCO_DATOS[modoActual];
    const reto = pool[Math.floor(Math.random() * pool.length)];

    pistaVisual.textContent = reto.pista;

    const regex = modoActual === "series" ? /____/g : /_/g;
    const huecoClase = modoActual === "series" ? "hueco-largo" : "";

    palabraDisplay.innerHTML = reto.display.replace(
      regex,
      `<span class="hueco ${huecoClase}">&nbsp;</span>`,
    );

    generarOpciones(reto);
  }

  function generarOpciones(reto) {
    opcionesContainer.innerHTML = "";
    let opciones = new Set([reto.falta]);

    while (opciones.size < 4) {
      if (modoActual === "series") {
        opciones.add(
          BANCO_DATOS.series[
            Math.floor(Math.random() * BANCO_DATOS.series.length)
          ].falta,
        );
      } else {
        opciones.add(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)],
        );
      }
    }

    [...opciones]
      .sort(() => Math.random() - 0.5)
      .forEach((val) => {
        const btn = document.createElement("button");
        btn.className = "btn-opc";
        btn.textContent = val;

        btn.onclick = () => procesarRespuesta(val, reto, btn);
        opcionesContainer.appendChild(btn);
      });
  }

  function procesarRespuesta(val, reto, btn) {
    if (val === reto.falta) {
      // ACIERTO
      puntosTurno += valorPreguntaActual;
      preguntasRespondidas++;
      txtPuntos.textContent = puntosTurno;

      palabraDisplay.innerHTML = `<span style="color:var(--success); font-size: 1.2em; transition: all 0.5s ease;">${reto.palabra}</span>`;

      opcionesContainer.innerHTML = "";
      setTimeout(lanzarPregunta, 3000);
    } else {
      // ERROR
      valorPreguntaActual = Math.max(0, valorPreguntaActual - 2);

      palabraDisplay.classList.add("shake");
      setTimeout(() => palabraDisplay.classList.remove("shake"), 400);

      btn.style.opacity = "0.5";
      btn.onclick = null;
    }
  }

  function finalizarTurno() {
    // Guardar stats
    const jugador = jugadoresPartida[indiceTurno];
    jugador.puntos = puntosTurno;
    historialGlobal.push(jugador);

    indiceTurno++;

    if (indiceTurno < jugadoresPartida.length) {
      Swal.fire({
        title: "¡Siguiente turno!",
        text: `Le toca a: ${jugadoresPartida[indiceTurno].nombre}`,
        icon: "success",
        confirmButtonColor: "#43a047",
      }).then(() => iniciarTurno());
    } else {
      renderRanking();
      switchView("rank");
    }
  }

  function renderRanking() {
    historialGlobal.sort((a, b) => b.puntos - a.puntos);
    listaRanking.innerHTML = historialGlobal
      .map(
        (p, i) => `
      <div class="stat-pill justify-content-between mb-2" style="background:${i === 0 ? "#FFD700" : "white"}">
        <span>${i === 0 ? "🥇" : i + 1 + "."} ${p.nombre}</span>
        <span class="badge bg-primary" style="font-size:1rem;">${p.puntos} pts</span>
      </div>`,
      )
      .join("");
  }

  // --- Funciones Auxiliares y de Navegación ---

  function confirmarSalida() {
    Swal.fire({
      title: "¿Salir al menú?",
      text: "Se perderá el progreso actual.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF6B6B",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "SÍ, SALIR",
      cancelButtonText: "CANCELAR",
    }).then((result) => {
      if (result.isConfirmed) {
        reiniciarTodo();
      }
    });
  }

  function reiniciarTodo() {
    jugadoresPartida = [];
    indiceTurno = 0;
    switchView("reg");
    body.className = "fondo-menu";
  }

  function switchView(vista) {
    Object.values(views).forEach((v) => v.classList.add("hidden"));
    views[vista].classList.remove("hidden");
  }
});
