document.addEventListener("DOMContentLoaded", () => {
  const history = JSON.parse(localStorage.getItem("matchHistory")) || [];
  const container = document.getElementById("summary-box");
  const btnHome = document.getElementById("btn-home");
  const btnClear = document.getElementById("btn-clear");

  renderHistory();

  // Botones
  btnHome.addEventListener("click", () => (window.location.href = "menu.html"));

  btnClear.addEventListener("click", () => {
    localStorage.removeItem("matchHistory");
    window.location.reload();
  });

  function renderHistory() {
    if (history.length === 0) {
      container.innerHTML =
        "<p class='text-muted'>¡Aún no hay partidas jugadas!</p>";
      return;
    }

    // 1. Mostrar última partida destacada
    const lastGame = history[history.length - 1];
    let htmlContent = `
            <div class="podio-box">
                <h3>Última Partida</h3>
                <div style="font-size: 4rem;">${lastGame.icon}</div>
                <p class="mb-0 fs-5">${lastGame.winner === "Empate" ? "¡Tablas!" : "¡Victoria!"}</p>
            </div>
            <h5 class="mt-4 text-start border-bottom pb-2">Historial Reciente:</h5>
        `;

    // 2. Lista de partidas anteriores (máximo 5)
    // Invertimos el array para ver lo más reciente primero
    const recentGames = history.slice().reverse();

    recentGames.forEach((game, index) => {
      if (index > 4) return; // Limite visual
      htmlContent += `
                <div class="history-item shadow-sm">
                    <span>Partida #${history.length - index}</span>
                    <span>${game.icon} ${game.winner}</span>
                </div>
            `;
    });

    container.innerHTML = htmlContent;

    // 3. Lanzar confeti si la última no fue empate
    if (lastGame.winner !== "Empate") {
      lanzarConfeti();
    }
  }

  function lanzarConfeti() {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
});
