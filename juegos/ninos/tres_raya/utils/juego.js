document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const statusText = document.getElementById("status-text");
  const btnRestart = document.getElementById("btn-restart");
  const btnExit = document.getElementById("btn-exit");

  // Cargar config
  const config = JSON.parse(localStorage.getItem("gameConfig"));
  if (!config) {
    window.location.href = "menu.html";
    return;
  }

  let board = Array(9).fill(null);
  let currentPlayer = 1;
  let gameActive = true;

  // Iniciar
  updateStatus();

  // Event Listeners
  cells.forEach((cell) => cell.addEventListener("click", onCellClick));
  btnRestart.addEventListener("click", () => window.location.reload());
  btnExit.addEventListener(
    "click",
    () => (window.location.href = "resultado.html"),
  );

  function updateStatus() {
    if (!gameActive) return;
    const avatar = currentPlayer === 1 ? config.p1 : config.p2;
    statusText.innerText = `Turno de: ${avatar}`;
    statusText.style.color =
      currentPlayer === 1 ? "var(--primary)" : "var(--secondary)";
  }

  function onCellClick(e) {
    const index = e.target.dataset.i;

    // Validaciones
    if (!gameActive || board[index]) return;

    // Movimiento Jugador
    makeMove(index, currentPlayer);

    // Si juega contra la máquina y el juego sigue activo...
    if (gameActive && config.mod === "1" && currentPlayer === 2) {
      // Bloquear tablero mientras piensa la IA
      document.getElementById("game-board").style.pointerEvents = "none";
      statusText.innerText = "Pensando... 🤖";

      setTimeout(() => {
        aiMove();
        document.getElementById("game-board").style.pointerEvents = "auto";
      }, 700);
    }
  }

  function makeMove(index, player) {
    board[index] = player;
    cells[index].innerText = player === 1 ? config.p1 : config.p2;
    cells[index].style.color =
      player === 1 ? "var(--primary)" : "var(--secondary)";

    if (checkWin(player)) {
      endGame(player);
    } else if (board.every((cell) => cell)) {
      endGame(0); // Empate
    } else {
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      updateStatus();
    }
  }

  function aiMove() {
    // IA muy básica: busca un hueco libre al azar
    const emptyIndices = board
      .map((v, i) => (v === null ? i : null))
      .filter((v) => v !== null);

    if (emptyIndices.length > 0) {
      const rand =
        emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      makeMove(rand, 2);
    }
  }

  function checkWin(player) {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Horizontales
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Verticales
      [0, 4, 8],
      [2, 4, 6], // Diagonales
    ];
    return wins.find((combo) => combo.every((i) => board[i] === player));
  }

  function endGame(winner) {
    gameActive = false;
    let history = JSON.parse(localStorage.getItem("matchHistory")) || [];

    let resultData = {};

    if (winner === 0) {
      statusText.innerText = "¡Es un Empate! 🤝";
      resultData = { winner: "Empate", icon: "🤝" };
    } else {
      const icon = winner === 1 ? config.p1 : config.p2;
      const name =
        winner === 1 ? "Jugador 1" : config.mod === "1" ? "Robot" : "Jugador 2";
      statusText.innerText = `¡Ganador: ${icon}!`;

      // Iluminar ganadores
      const winCombo = checkWin(winner);
      if (winCombo) winCombo.forEach((i) => cells[i].classList.add("winner"));

      resultData = { winner: name, icon: icon };
    }

    history.push(resultData);
    localStorage.setItem("matchHistory", JSON.stringify(history));

    btnRestart.style.display = "inline-block";
    btnExit.innerText = "🏆 Ver Resultados";
    btnExit.classList.remove("btn-secondary");
    btnExit.classList.add("btn-primary");
  }
});
