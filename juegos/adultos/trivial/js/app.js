// ==========================================
// 1. ESTRUCTURA DE DATOS 
// ==========================================

// Array de objetos con las preguntas, respuestas y la de la correcta
const preguntas = [
    {
        texto: "¿Qué significa 'HTML'?",
        respuestas: [
            { texto: "HyperText Markup Language", correct: true },
            { texto: "High Tech Modern Language", correct: false },
            { texto: "Hyperlink Text Mode List", correct: false },
            { texto: "Hard To Make Logic", correct: false }
        ]
    },
    {
        texto: "En CSS, ¿cómo centras un elemento flexiblemente?",
        respuestas: [
            { texto: "float: center;", correct: false },
            { texto: "display: flex; justify-content: center;", correct: true },
            { texto: "margin: middle;", correct: false },
            { texto: "text-align: middle;", correct: false }
        ]
    },
    {
        texto: "¿Resultado de: console.log('2' + 2)?",
        respuestas: [
            { texto: "4", correct: false },
            { texto: "22", correct: true }, 
            { texto: "NaN", correct: false },
            { texto: "Error", correct: false }
        ]
    },
    {
        texto: "¿Quién descifró el código Enigma?",
        respuestas: [
            { texto: "Steve Jobs", correct: false },
            { texto: "Bill Gates", correct: false },
            { texto: "Alan Turing", correct: true },
            { texto: "Ada Lovelace", correct: false }
        ]
    },
    {
        texto: "Código HTTP para 'No Encontrado'",
        respuestas: [
            { texto: "200", correct: false },
            { texto: "404", correct: true },
            { texto: "500", correct: false },
            { texto: "403", correct: false }
        ]
    },
    {
        texto: "¿Comando para subir cambios a Git?",
        respuestas: [
            { texto: "git upload", correct: false },
            { texto: "git push", correct: true },
            { texto: "git save", correct: false },
            { texto: "git commit", correct: false }
        ]
    },
    {
        texto: "¿Cuál NO es un lenguaje de backend?",
        respuestas: [
            { texto: "PHP", correct: false },
            { texto: "HTML", correct: true },
            { texto: "Python", correct: false },
            { texto: "Java", correct: false }
        ]
    },
    {
        texto: "¿Qué es un 'array'?",
        respuestas: [
            { texto: "Una lista de datos", correct: true },
            { texto: "Un tipo de error", correct: false },
            { texto: "Una base de datos", correct: false },
            { texto: "Un estilo CSS", correct: false }
        ]
    },
    {
        texto: "¿Puerto estándar para web (HTTP)?",
        respuestas: [
            { texto: "21", correct: false },
            { texto: "80", correct: true },
            { texto: "443", correct: false },
            { texto: "3306", correct: false }
        ]
    },
    {
        texto: "¿Qué es 'responsive design'?",
        respuestas: [
            { texto: "Diseño que responde rápido", correct: false },
            { texto: "Diseño adaptable a dispositivos", correct: true },
            { texto: "Diseño con muchos colores", correct: false },
            { texto: "Diseño exclusivo de Apple", correct: false }
        ]
    }
];

// ==========================================
// 2. VARIABLES DE ESTADO
// ==========================================
let indicePreguntaActual = 0;
let jugadores = []; // Aquí guardaré objetos {nombre: "X", puntos: 0}
let turnoActual = 0; // Índice del jugador en el array 
let tiempoRestante = 15;
let intervaloTiempo; // Variable para almacenar el ID

// ==========================================
// 3. REFERENCIAS 
// ==========================================
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaJuego = document.getElementById('pantalla-juego');
const contenedorNombres = document.getElementById('lista-nombres');
const selectJugadores = document.getElementById('num-jugadores');

const elementoPregunta = document.getElementById('texto-pregunta');
const gridRespuestas = document.getElementById('grid-respuestas');
const btnSiguiente = document.getElementById('btn-siguiente');
const contadorElemento = document.getElementById('contador-preguntas');
const puntuacionElemento = document.getElementById('puntuacion-actual');
const barraProgreso = document.getElementById('barra-progreso');
const nombreJugadorActivo = document.getElementById('nombre-jugador-activo');
const displayTiempo = document.getElementById('tiempo-restante');

// ==========================================
// 4. FUNCIONES DE CONFIGURACIÓN
// ==========================================

// Función que pinta los inputs de texto según el select
function generarInputsNombres() {
    const cantidad = selectJugadores.value;
    contenedorNombres.innerHTML = ''; // Limpio lo que hubiera antes

    for (let i = 1; i <= cantidad; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Nombre Jugador ${i}`;
        input.classList.add('input-nombre');
        input.id = `jugador-${i}`;
        input.value = `Jugador ${i}`; // Valor por defecto para no dejarlo vacío
        contenedorNombres.appendChild(input);
    }
}

// Función que inicializa el array de jugadores y cambia de pantalla
function comenzarPartida() {
    // 1. Recoger datos de los inputs
    const cantidad = selectJugadores.value;
    jugadores = [];
    
    for (let i = 1; i <= cantidad; i++) {
        const nombre = document.getElementById(`jugador-${i}`).value || `Jugador ${i}`;
        jugadores.push({ nombre: nombre, puntos: 0 });
    }

    // 2. Resetear contadores
    indicePreguntaActual = 0;
    turnoActual = 0;
    
    // 3. Transición de pantallas 
    pantallaInicio.classList.add('oculto');
    pantallaJuego.classList.remove('oculto');
    
    mostrarPregunta();
}

// ==========================================
// 5. LÓGICA DEL JUEGO 
// ==========================================

// Función para manejar la cuenta atrás
function iniciarTemporizador() {
    tiempoRestante = 15;
    displayTiempo.innerText = tiempoRestante;
    displayTiempo.classList.remove('timer-peligro');
    
    clearInterval(intervaloTiempo); // IMPORTANTE: Limpiar intervalo previo para no solapar
    
    intervaloTiempo = setInterval(() => {
        tiempoRestante--;
        displayTiempo.innerText = tiempoRestante;
        
        // Alerta visual cuando queda poco tiempo (clase CSS con animación)
        if (tiempoRestante <= 5) {
            displayTiempo.classList.add('timer-peligro');
        }

        // Si el tiempo se acaba
        if (tiempoRestante === 0) {
            clearInterval(intervaloTiempo);
            tiempoAgotado();
        }
    }, 1000); // Se ejecuta cada 1 segundo
}

// Se ejecuta si el cronómetro llega a 0
function tiempoAgotado() {
    Swal.fire({
        icon: 'warning',
        title: '¡Tiempo agotado!',
        text: 'Has perdido el turno.',
        timer: 1500,
        showConfirmButton: false
    });
    
    // Bloqueo botones y muestro la solución correcta
    Array.from(gridRespuestas.children).forEach(boton => {
        if (boton.dataset.correct === "true") {
            boton.classList.add('correcto');
        }
        boton.disabled = true;
    });
    
    btnSiguiente.classList.remove('oculto');
}

// Renderiza la pregunta actual y sus respuestas
function mostrarPregunta() {
    resetearEstado(); // Limpiar botones anteriores
    let preguntaActual = preguntas[indicePreguntaActual];
    let jugadorActual = jugadores[turnoActual];

    // Actualizar Textos 
    elementoPregunta.innerText = preguntaActual.texto;
    contadorElemento.innerText = `Pregunta ${indicePreguntaActual + 1}/${preguntas.length}`;
    nombreJugadorActivo.innerText = jugadorActual.nombre;
    puntuacionElemento.innerText = `Puntos: ${jugadorActual.puntos}`;
    
    // Actualizar Barra de Progreso
    const porcentaje = ((indicePreguntaActual) / preguntas.length) * 100;
    barraProgreso.style.width = `${porcentaje}%`;

    // Crear botones dinámicamente
    preguntaActual.respuestas.forEach(respuesta => {
        const boton = document.createElement('button');
        boton.innerText = respuesta.texto;
        boton.classList.add('btn-respuesta');
        
        // Guardo si es correcta en un atributo data
        if (respuesta.correct) {
            boton.dataset.correct = respuesta.correct;
        }
        boton.addEventListener('click', seleccionarRespuesta);
        gridRespuestas.appendChild(boton);
    });

    iniciarTemporizador();
}

function resetearEstado() {
    clearInterval(intervaloTiempo); // Paro el reloj de la pregunta anterior
    btnSiguiente.classList.add('oculto');
    // Elimino todos los (botones) del grid
    while (gridRespuestas.firstChild) {
        gridRespuestas.removeChild(gridRespuestas.firstChild);
    }
}

function seleccionarRespuesta(e) {
    clearInterval(intervaloTiempo); // PARAR RELOJ inmediatamente al contestar
    
    const botonSeleccionado = e.target;
    const esCorrecto = botonSeleccionado.dataset.correct === "true";

    if (esCorrecto) {
        botonSeleccionado.classList.add('correcto');
        // Sumar puntos al jugador que tiene el turno
        jugadores[turnoActual].puntos += 10;
        puntuacionElemento.innerText = `Puntos: ${jugadores[turnoActual].puntos}`;
        
        // Feedback visual 
        const Toast = Swal.mixin({
            toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, icon: 'success'
        });
        Toast.fire({ title: '+10 Puntos' });

    } else {
        botonSeleccionado.classList.add('incorrecto');
        const Toast = Swal.mixin({
            toast: true, position: 'top-end', showConfirmButton: false, timer: 1000, icon: 'error'
        });
        Toast.fire({ title: '¡Fallo!' });
    }

    // Mostrar siempre cuál era la correcta para aprender
    Array.from(gridRespuestas.children).forEach(boton => {
        if (boton.dataset.correct === "true") {
            boton.classList.add('correcto');
        }
        boton.disabled = true; // Deshabilitar todos los botones
    });

    btnSiguiente.classList.remove('oculto');
}

function siguientePregunta() {
    // Lógica para rotar turnos: (0 -> 1 -> 2 -> 0...)
    turnoActual++;
    if (turnoActual >= jugadores.length) {
        turnoActual = 0;
    }

    indicePreguntaActual++;
    
    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    barraProgreso.style.width = '100%';
    
    // Ordenar array de jugadores por puntuación (De mayor a menor)
    jugadores.sort((a, b) => b.puntos - a.puntos);
    
    // Generar HTML del ranking final
    let htmlRanking = '<div style="text-align: left; margin-top: 15px;">';
    jugadores.forEach((jug, index) => {
        // Asignar medallas a los 3 primeros
        let medalla = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '👾';
        htmlRanking += `<p style="font-size: 1.1rem; margin: 5px 0;">${medalla} <b>${jug.nombre}</b>: ${jug.puntos} pts</p>`;
    });
    htmlRanking += '</div>';

    Swal.fire({
        title: '¡Torneo Finalizado!',
        html: `El ganador es <b>${jugadores[0].nombre}</b> 🎉 <br> ${htmlRanking}`,
        icon: 'success',
        confirmButtonText: 'Jugar otra vez',
        background: '#1a1a2e',
        color: '#fff'
    }).then(() => {
        location.reload(); // Recarga la página completa para reiniciar todo limpio
    });
}

// Inicialización: Generar inputs para 1 jugador por defecto
generarInputsNombres();