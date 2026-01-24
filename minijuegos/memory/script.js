// 1. DATOS INICIALES
// Array con los emojis duplicados (porque son parejas)
const iconos = ['🦁', '🦁', '🐘', '🐘', '🐶', '🐶', '🐸', '🐸', '🦄', '🦄', '🐙', '🐙'];

// Variables de estado (Memoria del juego)
let cartasLevantadas = [];  // Aquí guardaremos las 2 cartas que el usuario está mirando
let bloqueoTablero = false; // "Semáforo": Si es true, no dejamos hacer click
let movimientos = 0;
let parejasEncontradas = 0;

// Referencias al HTML (DOM)
const tablero = document.getElementById('tablero');
const textoMovimientos = document.getElementById('movimientos');

// --- FUNCIÓN PRINCIPAL: INICIAR EL JUEGO ---
function iniciarJuego() {
    // A. Reseteamos variables
    cartasLevantadas = [];
    bloqueoTablero = false;
    movimientos = 0;
    parejasEncontradas = 0;
    textoMovimientos.innerText = '0';
    tablero.innerHTML = ''; // Limpiamos el tablero anterior

    // B. Barajar las cartas (Algoritmo aleatorio)
    // sort() ordena, pero con Math.random lo hace al azar
    iconos.sort(() => 0.5 - Math.random());

    // C. Crear las cartas visualmente (Bucle)
    iconos.forEach(icono => {
        // Creamos el div de la carta
        const carta = document.createElement('div');
        carta.classList.add('carta'); // Le ponemos la clase CSS
        
        // Guardamos el emoji "en secreto" dentro del elemento HTML
        // dataset es una forma estándar de guardar datos en HTML
        carta.dataset.emoji = icono; 
        
        carta.innerText = '❓'; // Lo que se ve por detrás

        // Añadimos el "Oído" (Event Listener) para el click
        carta.addEventListener('click', voltearCarta);

        // Lo metemos en el tablero
        tablero.appendChild(carta);
    });
}

// --- FUNCIÓN: CUANDO HACES CLICK ---
function voltearCarta() {
    // VALIDACIONES DE SEGURIDAD:
    // 1. Si el tablero está bloqueado (estamos esperando que se giren 2), no hagas nada.
    // 2. Si clicas la misma carta que ya giraste (this === cartasLevantadas[0]), salte.
    if (bloqueoTablero || this === cartasLevantadas[0]) return;

    // ACCIÓN VISUAL:
    this.classList.add('girada'); // Añadimos clase para que cambie a blanco
    this.innerText = this.dataset.emoji; // Mostramos el emoji secreto

    // LÓGICA:
    cartasLevantadas.push(this); // La añadimos a la lista de "mirando"

    // Si ya hay 2 cartas levantadas... ¡Comprobamos!
    if (cartasLevantadas.length === 2) {
        movimientos++;
        textoMovimientos.innerText = movimientos;
        comprobarPareja();
    }
}

// --- FUNCIÓN: ¿SON IGUALES? ---
function comprobarPareja() {
    // Sacamos las dos cartas del array
    const carta1 = cartasLevantadas[0];
    const carta2 = cartasLevantadas[1];

    // Comparamos sus valores
    if (carta1.dataset.emoji === carta2.dataset.emoji) {
        // ¡ACIERTO!
        desactivarCartas(carta1, carta2);
    } else {
        // ¡FALLO!
        devolverCartas(carta1, carta2);
    }
}

// CASO ACIERTO: Las dejamos fijas
function desactivarCartas(c1, c2) {
    // Les ponemos clase 'emparejada' (se ponen verdes)
    c1.classList.add('emparejada');
    c2.classList.add('emparejada');

    // Quitamos el click para que no molesten más
    c1.removeEventListener('click', voltearCarta);
    c2.removeEventListener('click', voltearCarta);

    // Limpiamos el array para la siguiente jugada
    cartasLevantadas = [];
    parejasEncontradas++;

    // ¿Juego terminado?
    if (parejasEncontradas === iconos.length / 2) {
        setTimeout(() => alert(`¡Ganaste en ${movimientos} movimientos! 🎉`), 500);
    }
}

// CASO FALLO: Las giramos otra vez
function devolverCartas(c1, c2) {
    bloqueoTablero = true; // ⛔ STOP: Bloqueamos clicks mientras esperamos

    // setTimeout es un temporizador. Esperamos 1 segundo (1000ms)
    setTimeout(() => {
        c1.classList.remove('girada'); // Quitamos el blanco
        c2.classList.remove('girada');
        c1.innerText = '❓'; // Vuelve la interrogación
        c2.innerText = '❓';
        
        cartasLevantadas = []; // Limpiamos array
        bloqueoTablero = false; // ✅ GO: Desbloqueamos el tablero
    }, 1000);
}

function reiniciarJuego() {
    iniciarJuego();
}

// Arrancamos todo al cargar la página
iniciarJuego();