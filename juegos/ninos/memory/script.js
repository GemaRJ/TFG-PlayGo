// --- CONFIGURACIÓN ---
const iconosBase = ['🦁', '🐘', '🐶', '🐸', '🦄', '🐙'];
// Duplicamos los iconos para tener parejas
let iconos = [...iconosBase, ...iconosBase];

// --- ESTADO DEL JUEGO ---
let jugadores = []; // Aquí guardaremos: [{nombre: "Ana", puntos: 0}, ...]
let turnoActual = 0; // Índice del jugador que está jugando (0, 1, 2...)
let cartasLevantadas = [];
let bloqueoTablero = false;
let parejasTotales = 0;

// --- REFERENCIAS DOM ---
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaJuego = document.getElementById('pantalla-juego');
const divMarcador = document.getElementById('marcador');
const tablero = document.getElementById('tablero');
const contenedorNombres = document.getElementById('lista-nombres');
const selectJugadores = document.getElementById('num-jugadores');

// 1. GENERAR INPUTS PARA LOS NOMBRES
function generarInputsNombres() {
    const cantidad = selectJugadores.value;
    contenedorNombres.innerHTML = ''; // Limpiar anteriores

    for (let i = 1; i <= cantidad; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Nombre Jugador ${i}`;
        input.classList.add('input-nombre');
        input.id = `jugador-${i}`;
        // Ponemos nombres por defecto si quieren ir rápido
        input.value = `Jugador ${i}`;
        contenedorNombres.appendChild(input);
    }
}

// 2. EMPEZAR LA PARTIDA
function comenzarPartida() {
    // Recoger nombres
    const cantidad = selectJugadores.value;
    jugadores = [];
    
    for (let i = 1; i <= cantidad; i++) {
        const nombre = document.getElementById(`jugador-${i}`).value || `Jugador ${i}`;
        jugadores.push({ nombre: nombre, puntos: 0 });
    }

    // Configuración inicial
    turnoActual = 0;
    parejasTotales = 0;
    cartasLevantadas = [];
    bloqueoTablero = false;

    // Cambiar pantalla
    pantallaInicio.style.display = 'none';
    pantallaJuego.style.display = 'block';

    renderizarTablero();
    actualizarMarcador();
}

// 3. DIBUJAR EL TABLERO
function renderizarTablero() {
    tablero.innerHTML = '';
    iconos.sort(() => 0.5 - Math.random()); // Barajar

    iconos.forEach(icono => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.emoji = icono;
        carta.innerText = '❓';
        carta.addEventListener('click', voltearCarta);
        tablero.appendChild(carta);
    });
}

// 4. ACTUALIZAR MARCADOR (Muestra puntos y turno)
function actualizarMarcador() {
    divMarcador.innerHTML = '';

    jugadores.forEach((jugador, index) => {
        const div = document.createElement('div');
        div.classList.add('tarjeta-jugador');
        
        // Si es su turno, añadimos la clase 'activo'
        if (index === turnoActual) {
            div.classList.add('activo');
        }

        div.innerHTML = `
            <div>${jugador.nombre}</div>
            <div style="font-size: 1.5rem">${jugador.puntos} pts</div>
        `;
        divMarcador.appendChild(div);
    });
}

// 5. LÓGICA DE JUEGO
function voltearCarta() {
    if (bloqueoTablero || this === cartasLevantadas[0] || this.classList.contains('emparejada')) return;

    this.classList.add('girada');
    this.innerText = this.dataset.emoji;
    cartasLevantadas.push(this);

    if (cartasLevantadas.length === 2) {
        comprobarPareja();
    }
}

function comprobarPareja() {
    const carta1 = cartasLevantadas[0];
    const carta2 = cartasLevantadas[1];
    bloqueoTablero = true; // Bloqueamos para que no toquen más

    if (carta1.dataset.emoji === carta2.dataset.emoji) {
        // --- ACIERTO ---
        jugadores[turnoActual].puntos++; // Suma punto al jugador actual
        parejasTotales++;
        
        // Sonido o efecto visual breve
        carta1.classList.add('emparejada');
        carta2.classList.add('emparejada');
        
        cartasLevantadas = [];
        bloqueoTablero = false;
        actualizarMarcador(); // Actualiza los puntos
        
        // Si hay acierto, REPRODUCE TURNO (no cambiamos de jugador)
        // Comprobar si fin del juego
        if (parejasTotales === iconos.length / 2) {
            finDelJuego();
        }

    } else {
        // --- FALLO ---
        setTimeout(() => {
            carta1.classList.remove('girada');
            carta2.classList.remove('girada');
            carta1.innerText = '❓';
            carta2.innerText = '❓';
            
            cartasLevantadas = [];
            bloqueoTablero = false;
            
            // Pasa el turno al siguiente
            passarTurno();
        }, 1000);
    }
}

function passarTurno() {
    turnoActual++;
    // Si llegamos al último jugador, volvemos al primero (bucle)
    if (turnoActual >= jugadores.length) {
        turnoActual = 0;
    }
    actualizarMarcador();
}

// 6. FIN DEL JUEGO
function finDelJuego() {
    // Ordenamos jugadores por puntos de mayor a menor
    // [...jugadores] crea una copia para no romper el array original
    const ranking = [...jugadores].sort((a, b) => b.puntos - a.puntos);
    const ganador = ranking[0];
    const esEmpate = ranking.length > 1 && ranking[0].puntos === ranking[1].puntos;

    let mensaje = '';
    if (esEmpate) {
        mensaje = `¡Empate! Ambos sois unos cracks 🦄`;
    } else {
        mensaje = `¡Ha ganado <b>${ganador.nombre}</b> con ${ganador.puntos} puntos! 🏆`;
    }

    Swal.fire({
        title: '¡Juego Terminado!',
        html: mensaje,
        icon: 'success',
        confirmButtonText: 'Jugar otra vez',
        backdrop: `rgba(0,0,123,0.4) url("https://cdn.pixabay.com/animation/2022/10/16/12/37/12-37-37-299_512.gif") center top no-repeat`
    }).then(() => {
        volverAlInicio();
    });
}

function volverAlInicio() {
    pantallaJuego.style.display = 'none';
    pantallaInicio.style.display = 'block';
}

// Inicializar la primera vez
generarInputsNombres();