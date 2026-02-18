document.addEventListener("DOMContentLoaded", () => {
  // 1. ZONA DE SELECTORES (DOM)
  // Utilizamos querySelector para el contenedor y querySelectorAll para los botones
  const contenedorResumen = document.querySelector("#summary-box");
  const botonesAccion = document.querySelectorAll(".btn-custom");

  // 2. ZONA DE ESTADO (VARIABLES GLOBALES)
  // Obtenemos el historial de partidas guardado en el navegador
  const historialPartidas =
    JSON.parse(localStorage.getItem("matchHistory")) || [];

  // 3. ZONA DE ESCUCHADORES (LISTENERS)
  // Gestionamos los eventos de los botones mediante un bucle forEach
  botonesAccion.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      // Identificamos la acción según el ID del botón pulsado
      if (evento.target.id === "btn-home") window.location.href = "menu.html";
      if (evento.target.id === "btn-clear") borrarHistorial();
    });
  });

  // Ejecución inicial para dibujar los datos en pantalla
  dibujarHistorial();

  // 4. ZONA DE FUNCIONES (LÓGICA)

  /**
   * Genera el HTML para mostrar la última partida y los resultados recientes
   */
  function dibujarHistorial() {
    // Si no hay partidas registradas, mostramos un mensaje informativo
    if (historialPartidas.length === 0) {
      contenedorResumen.innerHTML =
        "<p class='text-muted'>¡Aún no hay partidas jugadas!</p>";
      return;
    }

    // A. Destacamos la última partida (la más reciente)
    const ultimaPartida = historialPartidas[historialPartidas.length - 1];
    let contenidoHTML = `
        <div class="podio-box">
            <h3>Última Partida</h3>
            <div style="font-size: 4rem;">${ultimaPartida.icon}</div>
            <p class="mb-0 fs-5">${ultimaPartida.winner === "Empate" ? "¡Tablas!" : "¡Victoria!"}</p>
        </div>
        <h5 class="mt-4 text-start border-bottom pb-2">Historial Reciente:</h5>
    `;

    // B. Listamos las partidas anteriores (limitado a las últimas 5)
    // Usamos slice().reverse() para no alterar el array original
    const partidasRecientes = historialPartidas.slice().reverse();

    partidasRecientes.forEach((partida, indice) => {
      if (indice > 4) return; // Límite visual del historial
      contenidoHTML += `
        <div class="history-item shadow-sm">
            <span>Partida #${historialPartidas.length - indice}</span>
            <span>${partida.icon} ${partida.winner}</span>
        </div>
      `;
    });

    contenedorResumen.innerHTML = contenidoHTML;

    // C. Si alguien ganó, lanzamos la celebración
    if (ultimaPartida.winner !== "Empate") {
      lanzarCelebracion();
    }
  }

  /**
   * Elimina los datos del LocalStorage y refresca la página
   */
  function borrarHistorial() {
    localStorage.removeItem("matchHistory");
    window.location.reload();
  }

  /**
   * Genera el efecto visual de confeti usando una librería externa
   */
  function lanzarCelebracion() {
    const duracion = 2000;
    const fin = Date.now() + duracion;

    (function animar() {
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

      if (Date.now() < fin) {
        requestAnimationFrame(animar);
      }
    })();
  }
});
