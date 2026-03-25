let words = [];
let teams = []; // Aquí guardaremos los equipos { nombre: "A", puntos: 0 }
let currentTeamIndex = 0; // Turno de quién es (0, 1, 2...)
let roundScore = 0; // Puntos de la ronda actual
let timeLeft = 60;
let timerInterval;

// Cargar palabras
fetch('palabras.json')
    .then(response => response.json())
    .then(data => {
        words = data;
        shuffleArray(words); // Mezclar al inicio
    })
    .catch(error => console.error('Error cargando palabras:', error));

// --- GESTIÓN DE EQUIPOS ---

function agregarEquipo() {
    const input = document.getElementById('new-team-name');
    const nombre = input.value.trim();
    
    if (nombre && teams.length < 10) {
        // Añadir equipo al array
        teams.push({ name: nombre, score: 0 });
        input.value = ""; // Limpiar input
        input.focus();
        actualizarListaEquipos();
    }
}

function borrarEquipo(index) {
    teams.splice(index, 1);
    actualizarListaEquipos();
}

function actualizarListaEquipos() {
    const lista = document.getElementById('team-list');
    const btnJugar = document.getElementById('btn-start-game');
    
    lista.innerHTML = "";
    
    teams.forEach((team, index) => {
        const li = document.createElement('li');
        li.className = 'team-item';
        li.innerHTML = `
            <span>${index + 1}. ${team.name}</span>
            <button class="btn-delete" onclick="borrarEquipo(${index})">🗑️</button>
        `;
        lista.appendChild(li);
    });

    // Activar botón solo si hay 2 o más equipos
    if (teams.length >= 2) {
        btnJugar.classList.remove('disabled');
        btnJugar.innerText = window.getText ? window.getText('ta_play_btn') : "¡A JUGAR!";
        btnJugar.onclick = iniciarPartidaMultijugador;
    } else {
        btnJugar.classList.add('disabled');
        btnJugar.innerText = window.getText ? window.getText('ta_min_teams') : "👥 MÍNIMO 2 EQUIPOS";
        btnJugar.onclick = null;
    }
}

// --- LÓGICA DEL JUEGO ---

function iniciarPartidaMultijugador() {
    if (teams.length < 2) return;
    
    currentTeamIndex = 0; // Empieza el primer equipo
    mostrarPantallaTurno();
}

function mostrarPantallaTurno() {
    // Ocultar otras pantallas
    document.getElementById('pantalla-inicio').classList.add('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('turn-screen').classList.remove('hidden');

    const equipoActual = teams[currentTeamIndex];

    // Actualizar datos de la pantalla intermedia
    document.getElementById('next-team-name').innerText = equipoActual.name;
    document.getElementById('current-team-score').innerText = equipoActual.score + " pts";
}

function comenzarRonda() {
    document.getElementById('turn-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    roundScore = 0;
    timeLeft = 60;
    document.getElementById('round-score').innerText = roundScore;
    const playTxt = window.getText ? window.getText('ta_playing') : "Jugando: ";
    document.getElementById('playing-team').innerText = playTxt + teams[currentTeamIndex].name;
    
    // Reiniciar barra
    const timerBar = document.getElementById('timer-bar');
    timerBar.style.width = '100%';
    timerBar.style.background = 'linear-gradient(90deg, #00ff88, #00b8ff)';

    showNextCard();
    startTimer();
}

function showNextCard() {
    // Barajamos si se acaban las cartas
    if (words.length === 0) return;
    
    // Elegimos una palabra al azar (o secuencial)
    // Para simplificar, cogemos la primera y la mandamos al final
    const cardData = words.shift(); 
    words.push(cardData); // La ponemos al final de la cola

    document.getElementById('target-word').innerText = cardData.palabra;
    
    const listContainer = document.getElementById('forbidden-list');
    listContainer.innerHTML = '';
    
    cardData.prohibidas.forEach(prohibida => {
        const div = document.createElement('div');
        div.className = 'forbidden-item';
        div.innerText = prohibida;
        listContainer.appendChild(div);
    });
}

function nextCard(isCorrect) {
    if (timeLeft <= 0) return;

    if (isCorrect) {
        roundScore++;
        // Feedback visual verde
        document.getElementById('game-screen').style.border = '5px solid #2ecc71';
    } else {
        // Restar punto? (Opcional: roundScore--). Por defecto en Tabú solo se pasa.
        // Feedback visual rojo
        document.getElementById('game-screen').style.border = '5px solid #e74c3c';
    }
    
    document.getElementById('round-score').innerText = roundScore;
    setTimeout(() => document.getElementById('game-screen').style.border = 'none', 200);
    
    showNextCard();
}

function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    const timerText = document.getElementById('timer-text');
    
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.innerText = timeLeft + "s";
        timerBar.style.width = (timeLeft / 60 * 100) + '%';
        
        if(timeLeft < 10) timerBar.style.background = '#ff4757'; 

        if (timeLeft <= 0) {
            endTurn();
        }
    }, 1000);
}

function endTurn() {
    clearInterval(timerInterval);
    
    // Guardar puntos en el equipo actual
    teams[currentTeamIndex].score += roundScore;
    
    // Pasar al siguiente equipo
    currentTeamIndex++;
    
    // Si han jugado todos los equipos, volvemos al primero (Bucle infinito hasta que se cansen)
    if (currentTeamIndex >= teams.length) {
        currentTeamIndex = 0;
        // Opcional: Podrías mostrar el ranking aquí cada vuelta completa
    }

    // Volver a la pantalla de "Turno de..."
    mostrarPantallaTurno();
}

// Función auxiliar
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- LÓGICA TUTORIAL ---
function mostrarTutorialTabu() {
    document.getElementById('modalTutorialTabu').classList.remove('hidden');
}

function cerrarTutorialTabu() {
    document.getElementById('modalTutorialTabu').classList.add('hidden');
}

// --- PARTÍCULAS BACKGROUND ---
function createParticles() {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    particlesContainer.innerHTML = "";
    const particlesCount = 30; // CONFIG.PARTICLES_COUNT

    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = Math.random() * 10 + 5 + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";
        particlesContainer.appendChild(particle);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createParticles();
});
