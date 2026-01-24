document.addEventListener("DOMContentLoaded", () => {
  const zonaJuego = document.querySelector("#zona-juego");
  const overlay = document.querySelector("#overlay");
  const overlayContent = document.querySelector("#overlay-content");
  const opcionesContainer = document.querySelector("#opciones-container");
  const puntajeTxt = document.querySelector("#puntaje");
  const feedback = document.querySelector("#feedback");
  const btnEmpezar = document.querySelector("#btn-empezar");

  const frutas = ["🍎", "🍌", "🍓", "🍊", "🍇", "🥝", "🍍"];
  let totalFrutas = 0;
  let creadas = 0;
  let puntaje = 0;
  let intervalo = null;

  btnEmpezar.addEventListener("click", iniciarRonda);

  function iniciarRonda() {
    limpiarLienzo();
    overlay.classList.add("oculto");
    feedback.textContent = "";

    totalFrutas = Math.floor(Math.random() * 6) + 3; // Entre 3 y 8
    creadas = 0;

    intervalo = setInterval(() => {
      crearFruta();
      creadas++;

      if (creadas === totalFrutas) {
        clearInterval(intervalo);
        // Damos tiempo a que terminen de caer antes de mostrar opciones
        setTimeout(crearOpciones, 2500);
      }
    }, 700);
  }

  function crearFruta() {
    const fruta = document.createElement("div");
    fruta.classList.add("fruta");
    fruta.textContent = frutas[Math.floor(Math.random() * frutas.length)];
    fruta.style.left = Math.floor(Math.random() * 85) + 5 + "%";
    zonaJuego.appendChild(fruta);

    // Limpieza automática del DOM
    setTimeout(() => fruta.remove(), 4000);
  }

  function crearOpciones() {
    opcionesContainer.innerHTML = "";
    let opciones = new Set([totalFrutas]);

    while (opciones.size < 4) {
      opciones.add(Math.floor(Math.random() * 10) + 1);
    }

    [...opciones]
      .sort(() => Math.random() - 0.5)
      .forEach((num) => {
        const btn = document.createElement("button");
        btn.textContent = num;
        btn.onclick = () => comprobar(num);
        opcionesContainer.appendChild(btn);
      });
  }

  function comprobar(seleccion) {
    opcionesContainer.innerHTML = "";
    overlay.classList.remove("oculto");

    if (seleccion === totalFrutas) {
      puntaje += 10;
      puntajeTxt.textContent = puntaje;
      mostrarResultado("✅ ¡Excelente!", "#28a745");
    } else {
      mostrarResultado(`❌ Eran ${totalFrutas}`, "#dc3545");
    }
  }

  function mostrarResultado(mensaje, color) {
    overlayContent.innerHTML = `
            <h2 style="color:white; margin-bottom:20px;">${mensaje}</h2>
            <button class="btn-main" onclick="location.reload()">Reiniciar Todo</button>
            <button class="btn-main" id="btn-siguiente" style="background:#1976d2; margin-left:10px;">Siguiente Ronda</button>
        `;
    document.querySelector("#btn-siguiente").onclick = iniciarRonda;
  }

  function limpiarLienzo() {
    zonaJuego.innerHTML = "";
    opcionesContainer.innerHTML = "";
  }
});
