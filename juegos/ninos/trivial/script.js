// --- PREGUNTAS INFANTILES 🎈 ---
const preguntas = [
    {
        texto: "¿Cómo se llama la reina del hielo en Frozen? ❄️",
        respuestas: [
            { texto: "Anna", correct: false },
            { texto: "Elsa", correct: true },
            { texto: "Olaf", correct: false },
            { texto: "Moana", correct: false }
        ]
    },
    {
        texto: "¿Qué comen los pandas gigantes? 🐼",
        respuestas: [
            { texto: "Pizza", correct: false },
            { texto: "Bambú", correct: true },
            { texto: "Pescado", correct: false },
            { texto: "Helado", correct: false }
        ]
    },
    {
        texto: "¿Cuál es el color de Bob Esponja? 🧽",
        respuestas: [
            { texto: "Rosa", correct: false },
            { texto: "Verde", correct: false },
            { texto: "Amarillo", correct: true },
            { texto: "Azul", correct: false }
        ]
    },
    {
        texto: "¿Qué animal es el mejor amigo del hombre? 🐶",
        respuestas: [
            { texto: "El gato", correct: false },
            { texto: "El perro", correct: true },
            { texto: "El loro", correct: false },
            { texto: "El hámster", correct: false }
        ]
    },
    {
        texto: "¿Cuántas patas tiene una araña? 🕷️",
        respuestas: [
            { texto: "6", correct: false },
            { texto: "4", correct: false },
            { texto: "8", correct: true },
            { texto: "10", correct: false }
        ]
    },
    {
        texto: "¿Quién es el enemigo de Batman? 🦇",
        respuestas: [
            { texto: "El Joker", correct: true },
            { texto: "Thanos", correct: false },
            { texto: "Voldemort", correct: false },
            { texto: "Bob Esponja", correct: false }
        ]
    },
    {
        texto: "¿Qué fruta es amarilla y alargada? 🍌",
        respuestas: [
            { texto: "Manzana", correct: false },
            { texto: "Uva", correct: false },
            { texto: "Plátano", correct: true },
            { texto: "Naranja", correct: false }
        ]
    },
    {
        texto: "¿Dónde vive Nemo? 🐠",
        respuestas: [
            { texto: "En la selva", correct: false },
            { texto: "En el mar", correct: true },
            { texto: "En el espacio", correct: false },
            { texto: "En una cueva", correct: false }
        ]
    },
    {
        texto: "¿Qué sonido hace la vaca? 🐄",
        respuestas: [
            { texto: "Muuu", correct: true },
            { texto: "Guau", correct: false },
            { texto: "Miau", correct: false },
            { texto: "Beee", correct: false }
        ]
    },
    {
        texto: "¿Si mezclas rojo y amarillo, qué color sale? 🎨",
        respuestas: [
            { texto: "Verde", correct: false },
            { texto: "Morado", correct: false },
            { texto: "Naranja", correct: true },
            { texto: "Negro", correct: false }
        ]
    }
];

// --- VARIABLES ---
let indicePreguntaActual = 0;
let jugadores = [];
let turnoActual = 0;
let tiempoRestante = 20; // 20 Segundos para niños
let intervaloTiempo;

// --- DOM ---
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaJuego = document.getElementById('pantalla-juego');
const contenedorNombres = document.getElementById('lista-nombres');
const selectJugadores = document.getElementById('num-jugadores');
const elementoPregunta = document.getElementById('texto-pregunta');
const gridRespuestas = document.getElementById('grid-respuestas');
const btnSiguiente = document.getElementById('btn-siguiente');
const puntuacionElemento = document.getElementById('puntuacion-actual');
const barraProgreso = document.getElementById('barra-progreso');
const nombreJugadorActivo = document.getElementById('nombre-jugador-activo');
const displayTiempo = document.getElementById('tiempo-restante');

// --- CONFIGURACIÓN ---
function generarInputsNombres() {
    const cantidad = selectJugadores.value;
    contenedorNombres.innerHTML = '';
    for (let i = 1; i <= cantidad; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Nombre Jugador ${i}`;
        input.classList.add('input-nombre');
        input.id = `jugador-${i}`;
        input.value = `Jugador ${i}`;
        contenedorNombres.appendChild(input);
    }
}

function comenzarPartida() {
    const cantidad = selectJugadores.value;
    jugadores = [];
    for (let i = 1; i <= cantidad; i++) {
        const nombre = document.getElementById(`jugador-${i}`).value || `Jugador ${i}`;
        jugadores.push({ nombre: nombre, puntos: 0 });
    }
    indicePreguntaActual = 0;
    turnoActual = 0;
    pantallaInicio.style.display = 'none';
    pantallaJuego.style.display = 'block';
    mostrarPregunta();
}

// --- JUEGO ---
function iniciarTemporizador() {
    tiempoRestante = 20; // Reiniciar a 20s
    displayTiempo.innerText = tiempoRestante;
    displayTiempo.classList.remove('timer-peligro');
    clearInterval(intervaloTiempo);

    intervaloTiempo = setInterval(() => {
        tiempoRestante--;
        displayTiempo.innerText = tiempoRestante;
        if (tiempoRestante <= 5) displayTiempo.classList.add('timer-peligro');
        if (tiempoRestante === 0) {
            clearInterval(intervaloTiempo);
            tiempoAgotado();
        }
    }, 1000);
}

function tiempoAgotado() {
    Swal.fire({
        icon: 'warning',
        title: '¡Oh no! ⏰',
        text: 'Se acabó el tiempo.',
        confirmButtonColor: '#feca57'
    });
    bloquearRespuestas();
    btnSiguiente.style.display = 'block';
}

function mostrarPregunta() {
    resetearEstado();
    let pregunta = preguntas[indicePreguntaActual];
    let jugador = jugadores[turnoActual];

    elementoPregunta.innerText = pregunta.texto;
    nombreJugadorActivo.innerText = jugador.nombre;
    puntuacionElemento.innerText = `Estrellas: ${jugador.puntos} ⭐`;

    const porcentaje = ((indicePreguntaActual) / preguntas.length) * 100;
    barraProgreso.style.width = `${porcentaje}%`;

    pregunta.respuestas.forEach(res => {
        const btn = document.createElement('button');
        btn.innerText = res.texto;
        btn.classList.add('btn-respuesta');
        if (res.correct) btn.dataset.correct = res.correct;
        btn.addEventListener('click', seleccionarRespuesta);
        gridRespuestas.appendChild(btn);
    });
    iniciarTemporizador();
}

function resetearEstado() {
    clearInterval(intervaloTiempo);
    btnSiguiente.style.display = 'none';
    gridRespuestas.innerHTML = '';
}

function seleccionarRespuesta(e) {
    clearInterval(intervaloTiempo);
    const btn = e.target;
    const acierto = btn.dataset.correct === "true";

    if (acierto) {
        btn.classList.add('correcto');
        jugadores[turnoActual].puntos += 1; // 1 Estrella por acierto
        puntuacionElemento.innerText = `Estrellas: ${jugadores[turnoActual].puntos} ⭐`;

        Swal.fire({
            title: '¡GENIAL! 🌟',
            icon: 'success',
            timer: 1000,
            showConfirmButton: false,
            toast: true,
            position: 'top'
        });
    } else {
        btn.classList.add('incorrecto');
        Swal.fire({
            title: '¡Ups! 😅',
            icon: 'error',
            timer: 1000,
            showConfirmButton: false,
            toast: true,
            position: 'top'
        });
    }
    bloquearRespuestas();
    btnSiguiente.style.display = 'block';
}

function bloquearRespuestas() {
    Array.from(gridRespuestas.children).forEach(btn => {
        if (btn.dataset.correct === "true") btn.classList.add('correcto');
        btn.disabled = true;
    });
}

function siguientePregunta() {
    turnoActual++;
    if (turnoActual >= jugadores.length) turnoActual = 0;
    indicePreguntaActual++;
    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultadoFinal();
    }
}

// --- FUNCION CORREGIDA PARA DETECTAR EMPATES ---
function mostrarResultadoFinal() {
    barraProgreso.style.width = '100%';

    // 1. Ordenamos de mayor a menor puntuación
    jugadores.sort((a, b) => b.puntos - a.puntos);

    // 2. Buscamos cuál es la puntuación máxima
    const maxPuntos = jugadores[0].puntos;

    // 3. Filtramos para ver cuántos tienen esa puntuación máxima (los ganadores)
    const ganadores = jugadores.filter(j => j.puntos === maxPuntos);

    // 4. Preparamos el mensaje principal
    let titulo = '';
    let mensajeHtml = '';

    if (ganadores.length > 1) {
        // CASO EMPATE
        titulo = '¡Empate Mágico! 🤝✨';
        // Unimos los nombres con comas y "y" (ej: Pepe y Ana)
        const nombres = ganadores.map(g => g.nombre).join(' y ');
        mensajeHtml = `¡Ha habido un empate entre <b>${nombres}</b>!`;
    } else {
        // CASO UN SOLO GANADOR
        titulo = '¡Fin del juego! 🎉';
        mensajeHtml = `¡El ganador es <b>${jugadores[0].nombre}</b>!`;
    }

    // 5. Generamos la lista del ranking (con trofeos para todos los que tengan maxPuntos)
    let ranking = '<br><br>';
    jugadores.forEach((jug) => {
        // Si tiene los puntos máximos lleva trofeo, si no globo
        let icono = (jug.puntos === maxPuntos) ? '🏆' : '🎈';
        ranking += `<p>${icono} <b>${jug.nombre}</b>: ${jug.puntos} estrellas</p>`;
    });

    // Añadimos el ranking al mensaje
    mensajeHtml += ranking;

    // 6. Mostramos la alerta
    Swal.fire({
        title: titulo,
        html: mensajeHtml,
        icon: 'success',
        confirmButtonText: '¡Jugar otra vez!',
        confirmButtonColor: '#ff9ff3',
        background: '#fff'
    }).then(() => {
        location.reload();
    });
}

// FUNCIONES DEL TUTORIAL/INSTRUCCIONES
function mostrarTutorialTrivialKids() {
    const modal = document.getElementById('modalTutorialTrivialKids');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function cerrarTutorialTrivialKids() {
    const modal = document.getElementById('modalTutorialTrivialKids');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

generarInputsNombres();