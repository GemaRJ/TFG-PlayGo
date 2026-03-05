(function () {
  window.addEventListener("resultadoJuego", function (e) {
    // 1. Recolección de datos desde el Panel (Parent) y el Juego (Global)
    const idUsuario = window.parent.usuarioId;
    const puntos = window.puntosJugador || 0;
    const idJuego = window.juegoId || 0;

    // Si no hay usuario (invitado), no enviamos nada
    if (!idUsuario) {
      console.warn("⚠️ Modo Invitado: Los datos no se guardarán.");
      return;
    }

    // 2. Preparación del paquete de datos
    const payload = {
      usuario_id: idUsuario,
      id_juego: idJuego,
      puntuacion: puntos,
    };

    // 3. Envío asíncrono (Fetch)
    // Ruta: Sube 3 niveles desde el index del juego para llegar a la raíz
    fetch("../../../autenticacion/guardar_ranking.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("✅ ¡Éxito! Puntos volcados en la tabla ranking.");
        } else {
          console.error("❌ Error en la base de datos:", data.error);
        }
      })
      .catch((err) => console.error("❌ Error de comunicación:", err));
  });
})();
