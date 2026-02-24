document.addEventListener("DOMContentLoaded", () => {
    // 1. ZONA DE SELECTORES (DOM)
    const pantallaInicio = document.querySelector("#pantalla-inicio");
    const pantallaJuego = document.querySelector("#pantalla-juego");
    const celdas = document.querySelectorAll(".cell");
    const marcadorTurno = document.querySelector("#marcador-turno");
    const btnComenzar = document.querySelector("#btn-comenzar");
    const selectorModo = document.querySelector("#num-jugadores");
    const avatarJ1 = document.querySelector("#avatar-j1");
    const avatarJ2 = document.querySelector("#avatar-j2");

    // 2. ZONA DE ESTADO
    let configuracion = {
        modo: "1",
        p1: "😺",
        p2: "🤖"
    };

    let tableroVirtual = Array(9).fill(null);
    let jugadorActual = 1;
    let juegoActivo = false;

    // 3. LISTENERS
    btnComenzar.addEventListener("click", comenzarPartida);
    celdas.forEach(celda => celda.addEventListener("click", alHacerClicEnCelda));

    // 4. FUNCIONES DE FLUJO
    function comenzarPartida() {
        configuracion = {
            modo: selectorModo.value,
            p1: avatarJ1.value.split(" ")[0],
            p2: avatarJ2.value.split(" ")[0]
        };

        tableroVirtual = Array(9).fill(null);
        jugadorActual = 1;
        juegoActivo = true;

        celdas.forEach(c => {
            c.innerText = "";
            c.classList.remove("winner");
        });

        pantallaInicio.style.display = "none";
        pantallaJuego.style.display = "block";
        actualizarMarcador();
    }

    function alHacerClicEnCelda(e) {
        const index = e.target.dataset.index;
        if (!juegoActivo || tableroVirtual[index]) return;

        ejecutarMovimiento(index, jugadorActual);

        // Turno del Robot
        if (juegoActivo && configuracion.modo === "1" && jugadorActual === 2) {
            pantallaJuego.style.pointerEvents = "none";
            setTimeout(() => {
                movimientoRobot();
                pantallaJuego.style.pointerEvents = "auto";
            }, 600);
        }
    }

    function ejecutarMovimiento(index, jugador) {
        tableroVirtual[index] = jugador;
        const celda = celdas[index];
        celda.innerText = jugador === 1 ? configuracion.p1 : configuracion.p2;

        if (verificarGanador(jugador)) {
            finalizarPartida(jugador);
        } else if (tableroVirtual.every(c => c)) {
            finalizarPartida(0);
        } else {
            jugadorActual = jugadorActual === 1 ? 2 : 1;
            actualizarMarcador();
        }
    }

    function movimientoRobot() {
        const vacios = tableroVirtual.map((v, i) => v === null ? i : null).filter(v => v !== null);
        if (vacios.length > 0) {
            const random = vacios[Math.floor(Math.random() * vacios.length)];
            ejecutarMovimiento(random, 2);
        }
    }

    function verificarGanador(jugador) {
        const combos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        const ganador = combos.find(combo => combo.every(idx => tableroVirtual[idx] === jugador));
        if (ganador) {
            ganador.forEach(idx => celdas[idx].classList.add("winner"));
        }
        return ganador;
    }

    function finalizarPartida(ganador) {
        juegoActivo = false;
        let titulo = "";
        let icono = "success";

        if (ganador === 0) {
            titulo = "¡Empate! 🤝";
            icono = "info";
        } else {
            const avatar = ganador === 1 ? configuracion.p1 : configuracion.p2;
            const nombre = ganador === 1 ? "Jugador 1" : (configuracion.modo === "1" ? "Robot 🤖" : "Jugador 2");
            titulo = `¡Ganador: ${nombre} (${avatar})! 🏆`;
        }

        Swal.fire({
            title: titulo,
            icon: icono,
            confirmButtonText: "Jugar de nuevo",
            confirmButtonColor: "var(--primary)"
        }).then(() => {
            volverAlInicio();
        });
    }

    function actualizarMarcador() {
        const avatar = jugadorActual === 1 ? configuracion.p1 : configuracion.p2;
        const nombre = jugadorActual === 1 ? "Jugador 1" : (configuracion.modo === "1" ? "Robot 🤖" : "Jugador 2");
        marcadorTurno.innerHTML = `
            <div class="tarjeta-jugador activo">Turno de: ${nombre} ${avatar}</div>
        `;
    }

    window.confirmarSalida = function () {
        Swal.fire({
            title: "¿Salir al menú?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Sí, salir",
            cancelButtonText: "No, seguir"
        }).then(res => {
            if (res.isConfirmed) volverAlInicio();
        });
    };

    function volverAlInicio() {
        pantallaJuego.style.display = "none";
        pantallaInicio.style.display = "block";
    }

    // Tutorial
    window.mostrarTutorialTresEnRaya = function () {
        document.getElementById('modalTutorialTresEnRaya').style.display = 'flex';
    };
    window.cerrarTutorialTresEnRaya = function () {
        document.getElementById('modalTutorialTresEnRaya').style.display = 'none';
    };
});
