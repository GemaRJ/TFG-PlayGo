document.addEventListener("DOMContentLoaded", () => {
  // 1. Cargar datos del Ranking Histórico
  const datos = localStorage.getItem("ranking_tabu");
  
  if (!datos) {
    document.getElementById("contenedor-podio").innerHTML = "<p>Aún no hay récords.</p>";
    return;
  }
  
  const jugadores = JSON.parse(datos);

  // 2. Ordenar por puntos (Mayor a menor)
  jugadores.sort((a, b) => b.puntos - a.puntos);

  // 3. Renderizar podio y resto
  const podio = document.getElementById("contenedor-podio");
  const resto = document.getElementById("lista-resto");

  // Mostramos solo los 10 mejores para no llenar la pantalla
  const top10 = jugadores.slice(0, 10);

  top10.forEach((j, index) => {
    const div = document.createElement("div");
    
    // EL PRIMERO (GANADOR)
    if (index === 0) {
      div.className = "card-ganador";
      div.innerHTML = `
        <div class="corona">👑</div>
        <div class="nombre-ganador">${j.nombre}</div>
        <div class="puntos-ganador">${j.puntos} Pts</div>
        <div class="fecha-record">${j.fecha}</div>
      `;
      podio.appendChild(div);
      // Solo lanzamos confeti si hay un ganador cargado
      lanzarConfeti();
    } 
    // LOS DEMÁS
    else {
      let medalla = index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`;
      div.className = "fila-resultado";
      div.innerHTML = `
        <span class="medalla">${medalla}</span>
        <span class="nombre-lista">${j.nombre}</span>
        <span class="puntos-lista">${j.puntos} pts</span>
      `;
      resto.appendChild(div);
    }
  });
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
  // NO borramos el localStorage para mantener los récords
  window.location.href = "index.html";
}

function borrarRecords() {
    if(confirm("¿Seguro que quieres borrar todo el historial de récords?")) {
        localStorage.removeItem("ranking_tabu");
        location.reload();
    }
}