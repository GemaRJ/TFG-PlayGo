document.addEventListener("DOMContentLoaded", () => {
  // 1. ZONA DE SELECTORES (DOM)
  // Utilizamos querySelector y querySelectorAll para una selección moderna
  const btnComenzar = document.querySelector("#btn-comenzar");
  const selectorModo = document.querySelector("#num-jugadores");

  // Capturamos todos los selectores de avatar de una sola vez
  const selectoresAvatares = document.querySelectorAll(
    "select.form-select[id^='avatar-j']",
  );

  // 2. ZONA DE ESTADO (VARIABLES GLOBALES)
  let configuracionPartida = {};

  // 3. ZONA DE ESCUCHADORES (LISTENERS)
  // Centralizamos la acción en el botón de inicio de partida
  btnComenzar.addEventListener("click", () => {
    procesarConfiguracion();
  });

  // 4. ZONA DE FUNCIONES (LÓGICA)

  /**
   * Captura los datos de los selectores, limpia los emojis y guarda en LocalStorage
   */
  function procesarConfiguracion() {
    // A. Obtener el modo (1 o 2 jugadores)
    const modoSeleccionado = selectorModo.value;

    // B. Extraer los emojis recorriendo la colección de selectores
    const emojisExtraidos = [];
    selectoresAvatares.forEach((selector) => {
      // Ejemplo: "😺 Gato" -> split(" ") -> ["😺", "Gato"] -> Índice [0]
      emojisExtraidos.push(selector.value.split(" ")[0]);
    });

    // C. Empaquetar la configuración en un objeto claro
    configuracionPartida = {
      mod: modoSeleccionado,
      p1: emojisExtraidos[0], // Avatar del Jugador 1
      p2: emojisExtraidos[1], // Avatar del Jugador 2 (o del Robot)
    };

    // D. Persistencia: Guardar el objeto convertido a texto (JSON) en LocalStorage
    localStorage.setItem("gameConfig", JSON.stringify(configuracionPartida));

    // E. Navegación hacia la pantalla de juego
    irAlTablero();
  }

  /**
   * Ejecuta la redirección a la página del juego
   */
  function irAlTablero() {
    window.location.href = "juego.html";
  }
});