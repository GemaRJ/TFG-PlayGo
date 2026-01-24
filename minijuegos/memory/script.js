// 1. DATOS INICIALES
const iconos = ['🦁', '🦁', '🐘', '🐘', '🐶', '🐶', '🐸', '🐸', '🦄', '🦄', '🐙', '🐙'];

// Variables de estado
let cartasLevantadas = [];  
let bloqueoTablero = false; 
let movimientos = 0;
let aciertos = 0; // <<< NUEVA VARIABLE
let errores = 0;  // <<< NUEVA VARIABLE
let parejasEncontradas = 0;

// Referencias al HTML
const tablero = document.getElementById('tablero');
const textoMovimientos = document.getElementById('movimientos');
const textoAciertos = document.getElementById('aciertos'); // <<< REF NUEVA
const textoErrores = document.getElementById('errores');   // <<< REF NUEVA

// --- FUNCIÓN PRINCIPAL ---
function iniciarJuego() {
    // A. Reseteamos variables a 0
    cartasLevantadas = [];
    bloqueoTablero = false;
    movimientos = 0;
    aciertos = 0; // <<< RESETEAMOS
    errores = 0;  // <<< RESETEAMOS
    parejasEncontradas = 0;

    // B. Actualizamos el HTML visualmente
    textoMovimientos.innerText = '0';
    textoAciertos.innerText = '0'; // <<< PONE A 0
    textoErrores.innerText = '0';  // <<< PONE A 0
    tablero.innerHTML = ''; 

    // C. Barajar y crear cartas
    iconos.sort(() => 0.5 - Math.random());

    iconos.forEach(icono => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.emoji = icono; 
        carta.innerText = '❓'; 
        carta.addEventListener('click', voltearCarta);
        tablero.appendChild(carta);
    });
}

// --- AL HACER CLICK ---
function voltearCarta() {
    if (bloqueoTablero || this === cartasLevantadas[0]) return;

    this.classList.add('girada'); 
    this.innerText = this.dataset.emoji; 

    cartasLevantadas.push(this); 

    if (cartasLevantadas.length === 2) {
        // Ya no sumamos movimientos aquí, lo hacemos al comprobar
        comprobarPareja();
    }
}

// --- ¿SON IGUALES? ---
function comprobarPareja() {
    movimientos++; // Contamos 1 movimiento (intento)
    textoMovimientos.innerText = movimientos;

    const carta1 = cartasLevantadas[0];
    const carta2 = cartasLevantadas[1];

    if (carta1.dataset.emoji === carta2.dataset.emoji) {
        desactivarCartas(carta1, carta2);
    } else {
        devolverCartas(carta1, carta2);
    }
}

// CASO ACIERTO ✅
function desactivarCartas(c1, c2) {
    aciertos++; // <<< SUMAMOS ACIERTO
    textoAciertos.innerText = aciertos; // <<< ACTUALIZAMOS PANTALLA

    // Añadimos la clase CSS nueva para que se pongan verdes
    c1.classList.add('emparejada'); 
    c2.classList.add('emparejada');

    c1.removeEventListener('click', voltearCarta);
    c2.removeEventListener('click', voltearCarta);

    cartasLevantadas = [];
    parejasEncontradas++;

    // ¿Juego terminado?
    if (parejasEncontradas === iconos.length / 2) {
        lanzarConfeti(); // <<< LLAMAMOS A LA FUNCIÓN FINAL
    }
}

// CASO FALLO ❌
function devolverCartas(c1, c2) {
    errores++; // <<< SUMAMOS ERROR
    textoErrores.innerText = errores; // <<< ACTUALIZAMOS PANTALLA

    bloqueoTablero = true; 

    setTimeout(() => {
        c1.classList.remove('girada');
        c2.classList.remove('girada');
        c1.innerText = '❓';
        c2.innerText = '❓';
        cartasLevantadas = [];
        bloqueoTablero = false;
    }, 1000);
}

// --- MENSAJE FINAL BONITO (SweetAlert) ---
function lanzarConfeti() {
    // Usamos la librería SweetAlert que pusimos en el HTML
    Swal.fire({
        title: '¡Ganaste! 🦄',
        html: `
            Has completado el juego en: <br>
            <b>${movimientos}</b> movimientos <br>
            ❌ Errores cometidos: <b>${errores}</b>
        `,
        icon: 'success',
        confirmButtonText: '¡Jugar otra vez!',
        background: '#fff',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://cdn.pixabay.com/animation/2022/10/16/12/37/12-37-37-299_512.gif")
            left top
            no-repeat
        `
    }).then(() => {
        reiniciarJuego();
    });
}

function reiniciarJuego() {
    iniciarJuego();
}

// Arrancamos
iniciarJuego();