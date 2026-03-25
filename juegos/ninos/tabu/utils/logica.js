let words = [];
let teams = [];
let currentTeamIndex = 0;
let roundScore = 0;
let timeLeft = 20;
let timerInterval;

let rondaActual = 1;
const MAX_RONDAS = 1; // Cuando todos jueguen una vez, se acaba

fetch('imagenes.json')
    .then(response => response.json())
    .then(data => {
        words = data;
        shuffleArray(words);
        console.log("¡Palabras listas!");
    })
    .catch(error => console.error("Error cargando el JSON:", error));

function comenzarRonda() {
    document.getElementById('turn-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    roundScore = 0;
    timeLeft = 20;
    document.getElementById('round-score').innerText = roundScore;

    // Cambiamos el texto del badge
    document.getElementById('playing-team').innerText = teams[currentTeamIndex].name;

    showNextCard();
    startTimer();
}

function agregarEquipo() {
    const input = document.getElementById('new-team-name');
    const nombre = input.value.trim();
    if (nombre) {
        teams.push({ name: nombre, score: 0 });
        input.value = "";
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
    const msgMinimo = document.getElementById('msg-minimo');

    lista.innerHTML = "";
    teams.forEach((team, index) => {
        const li = document.createElement('li');
        li.className = "team-item";
        li.innerHTML = `<span>${team.name}</span> <button onclick="borrarEquipo(${index})" style="background: #ff7675; border: none; color: white; border-radius: 5px; padding: 2px 8px; cursor: pointer;">X</button>`;
        lista.appendChild(li);
    });

    // Ahora usamos 'hidden' como en clase
    if (teams.length >= 2) {
        btnJugar.style.display = 'block';
        msgMinimo.style.display = 'none';
    } else {
        btnJugar.style.display = 'none';
        msgMinimo.style.display = 'block';
    }
}

function iniciarPartidaMultijugador() {
    currentTeamIndex = 0;
    rondaActual = 1;
    mostrarPantallaTurno();
    // Aseguramos que el nombre aparezca antes de cambiar de pantalla
    document.getElementById('next-team-name').innerText = teams[currentTeamIndex].name;

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('turn-screen').style.display = 'block';
}

function mostrarPantallaTurno() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('turn-screen').style.display = 'block';

    // Actualizamos el nombre del equipo que va a jugar ahora
    document.getElementById('next-team-name').innerText = teams[currentTeamIndex].name;
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 20;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-text').innerText = timeLeft + "s";

        // Actualizamos la barra de tiempo
        const timerBar = document.getElementById('timer-bar');
        if (timerBar) timerBar.style.width = (timeLeft / 20 * 100) + '%';

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // IMPORTANTE: Aquí es donde forzamos el cambio de jugador
            endTurn();
        }
    }, 1000);
}

function endTurn() {
    // 1. Guardar puntos del jugador que acaba de terminar
    teams[currentTeamIndex].score += roundScore;

    // 2. Pasar al siguiente jugador
    currentTeamIndex++;

    // 3. COMPROBACIÓN CLAVE:
    // Si el índice es igual al número de equipos, significa que YA HAN JUGADO TODOS
    if (currentTeamIndex >= teams.length) {
        // En lugar de volver a empezar (currentTeamIndex = 0), terminamos
        finalizarMisionTotal();
    } else {
        // Si aún quedan jugadores por participar en esta ronda única
        mostrarPantallaTurno();
    }
}

function showNextCard() {
    if (words.length === 0) {
        console.error("No hay palabras cargadas en el array.");
        return;
    }

    const cardData = words.shift();
    words.push(cardData);

    // 1. Actualizar Texto
    const targetWordElem = document.getElementById('target-word');
    if (targetWordElem) targetWordElem.innerText = cardData.palabra;

    // 2. Actualizar Imagen (Asegúrate de que la ruta en el JSON sea correcta)
    const imgElement = document.getElementById('word-image');
    if (imgElement) {
        imgElement.src = cardData.imagen;
        imgElement.onerror = () => { imgElement.src = 'img/placeholder.jpg'; }; // Imagen por defecto si falla
    }

    // 3. Actualizar Prohibidas
    const listContainer = document.getElementById('forbidden-list');
    if (listContainer) {
        listContainer.innerHTML = '';
        cardData.prohibidas.forEach(prohibida => {
            const div = document.createElement('div');
            div.className = 'forbidden-item';
            div.innerText = prohibida;
            listContainer.appendChild(div);
        });
    }
}

function nextCard(isCorrect) {
    if (isCorrect) {
        roundScore++; // Sumamos punto si acertó
    }

    // Actualizamos el marcador de la ronda en pantalla
    document.getElementById('round-score').innerText = roundScore;

    // Mostramos la siguiente carta del JSON
    showNextCard();
}

function finalizarMisionTotal() {
    const rankingFinal = [...teams].sort((a, b) => b.score - a.score);

    let rankingHtml = '<div style="text-align:left; margin-top:20px;">';
    const ptsWord = window.getText ? window.getText('ta_k_pts') : 'puntos';
    rankingFinal.forEach((t, i) => {
        const icono = (i === 0) ? '🏆' : '⭐';
        rankingHtml += `<p>${icono} <b>${t.name}</b>: ${t.score} ${ptsWord}</p>`;
    });
    rankingHtml += '</div>';

    Swal.fire({
        title: window.getText ? window.getText('ta_k_mission_done') : '¡MISIÓN CUMPLIDA! 🚀',
        html: window.getText ? window.getText('ta_k_winner_is').replace('{name}', rankingFinal[0].name).replace('{ranking}', rankingHtml) : `¡El ganador es <b>${rankingFinal[0].name}</b>!<br>${rankingHtml}`,
        icon: 'success',
        confirmButtonText: window.getText ? window.getText('ta_k_new_game') : 'Nueva Partida',
        confirmButtonColor: 'var(--primary)'
    }).then(() => {
        location.reload();
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- FUNCIONES DEL TUTORIAL ---
// --- FUNCIONES DEL TUTORIAL (ESPECÍFICO KIDS) ---
function mostrarTutorialTabuKids() {
    const modal = document.getElementById('modalTutorialTabuKids');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function cerrarTutorialTabuKids() {
    const modal = document.getElementById('modalTutorialTabuKids');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

