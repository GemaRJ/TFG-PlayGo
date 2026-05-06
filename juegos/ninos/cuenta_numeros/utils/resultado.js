document.addEventListener("DOMContentLoaded", () => {
  // 1. Cargar datos
  const datos = localStorage.getItem("datosPartida");
  if (!datos) {
    window.location.href = "index.html";
    return;
  }
  const jugadores = JSON.parse(datos);

  // 2. Ordenar por puntos
  jugadores.sort((a, b) => b.puntos - a.puntos);

  // 3. Renderizar podio y resto
  const podio = document.getElementById("contenedor-podio");
  const resto = document.getElementById("lista-resto");

  jugadores.forEach((j, index) => {
    const div = document.createElement("div");
    if (index === 0) {
      div.className = "card-ganador";
      div.innerHTML = `👑, ${j.nombre}: ${j.puntos} puntos.`;
      podio.appendChild(div);
    } else {
      let medalla = index === 1 ? "🥈" : index === 2 ? "🥉" : "🏅";
      div.className = "fila-resultado";
      div.innerHTML = `${medalla}, ${j.nombre}: ${j.puntos} puntos.`;
      resto.appendChild(div);
    }
  });

  // 4. Confeti
  lanzarConfeti();
});

function lanzarConfeti() {
  var end = Date.now() + 3000;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function volverInicio() {
  localStorage.removeItem("datosPartida");
  window.location.href = "index.html";
}

function revancha() {
  // Para revancha rápida, volvemos al menú inicial conservando nombres
  window.location.href = "index.html";
}
