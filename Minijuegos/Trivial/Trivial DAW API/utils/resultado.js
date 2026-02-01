// EJECUTAR DOM

document.addEventListener("DOMContentLoaded", () => {
  mostrarResultados();
  lanzarConfeti();

  // Botón volver al menú
  const btnHome = document.querySelector("#btn-home");
  if (btnHome) {
    btnHome.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Botón borrar historial
  const btnClear = document.querySelector("#btn-clear");
  if (btnClear) {
    btnClear.addEventListener("click", () => {
      Swal.fire({
        title: "¿Borrar historial?",
        text: "Esta acción eliminará todas las partidas guardadas.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, borrar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("historialTrivial");
          mostrarResultados();
          Swal.fire("Historial borrado", "", "success");
        }
      });
    });
  }
});

// Mostrar resultados

function mostrarResultados() {
  const historial = JSON.parse(localStorage.getItem("historialTrivial")) || [];
  const contenedor = document.querySelector("#summary-box");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (historial.length === 0) {
    contenedor.innerHTML = "<p>No hay partidas jugadas.</p>";
    return;
  }

  historial.forEach((partida, partidaIdx) => {
    const divPartida = document.createElement("div");
    divPartida.classList.add("mb-4", "p-3", "border", "rounded");
    divPartida.style.background = "rgba(255,255,255,0.15)";

    const titulo = document.createElement("h5");
    titulo.textContent = `Partida ${partidaIdx + 1} - ${partida.fecha}`;
    divPartida.appendChild(titulo);

    // Categoria y dificultad
    const info = document.createElement("p");
    info.textContent = `Categoría: ${partida.categoria} | Dificultad: ${partida.dificultad}`;
    divPartida.appendChild(info);

    // Jugadores
    if (partida.jugadores && partida.jugadores.length > 0) {
      partida.jugadores.forEach((jugador, idx) => {
        const p = document.createElement("p");
        const nombre = jugador.nombre || "Jugador";
        const puntos = jugador.puntos != null ? jugador.puntos : 0;
        p.textContent = `${idx + 1}. ${nombre} - ${puntos} pts`;
        divPartida.appendChild(p);
      });
    }

    contenedor.appendChild(divPartida);
  });
}

// Lanzar confeti

function lanzarConfeti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  }
}
