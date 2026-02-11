let words = [];
let currentWordIndex = -1;
let score = 0;
let timeLeft = 60; // 60 segundos de juego
let timerInterval;

// Cargar las palabras del JSON al iniciar
fetch('palabras.json')
    .then(response => response.json())
    .then(data => {
        words = data;
        console.log("Palabras cargadas:", words.length);
    })
    .catch(error => console.error('Error cargando palabras:', error));

function startGame() {
    if (words.length === 0) {
        alert("Espera un segundo, las palabras se están cargando...");
        return;
    }
    
    // Cambiar pantallas
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    score = 0;
    timeLeft = 60;
    document.getElementById('score').innerText = score;
    
    // Iniciar bucles
    shuffleArray(words);
    showNextCard();
    startTimer();
}

function showNextCard() {
    currentWordIndex++;
    
    // Si se acaban las cartas, barajamos y empezamos de 0
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0;
        shuffleArray(words);
    }

    const cardData = words[currentWordIndex];
    
    // Pintar la palabra principal
    document.getElementById('target-word').innerText = cardData.palabra;
    
    // Pintar las prohibidas
    const listContainer = document.getElementById('forbidden-list');
    listContainer.innerHTML = ''; // Limpiar lista anterior
    
    cardData.prohibidas.forEach(prohibida => {
        const li = document.createElement('div');
        li.className = 'forbidden-item';
        li.innerText = prohibida;
        listContainer.appendChild(li);
    });
}

function nextCard(isCorrect) {
    if (isCorrect) {
        score++;
        document.getElementById('score').innerText = score;
        // Pequeña animación visual (opcional)
        document.getElementById('game-screen').style.borderColor = 'var(--success)';
        setTimeout(() => document.getElementById('game-screen').style.borderColor = 'var(--border)', 200);
    } else {
        // Si falla, parpadeo rojo
        document.getElementById('game-screen').style.borderColor = 'var(--error)';
        setTimeout(() => document.getElementById('game-screen').style.borderColor = 'var(--border)', 200);
    }
    
    showNextCard();
}

function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        
        // Calcular porcentaje de barra
        const percentage = (timeLeft / 60) * 100;
        timerBar.style.width = percentage + '%';
        
        // Cambiar color si queda poco tiempo
        if(timeLeft < 10) timerBar.style.background = 'var(--error)';

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
}

// Función auxiliar para mezclar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}