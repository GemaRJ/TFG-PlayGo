document.addEventListener("DOMContentLoaded", () => {
  const btnComenzar = document.getElementById("btn-comenzar");

  btnComenzar.addEventListener("click", () => {
    // Obtenemos los valores
    const numJugadores = document.getElementById("num-jugadores").value;
    // Cortamos el string para quedarnos solo con el emoji (ej: "😺 Gato" -> "😺")
    const avatar1 = document.getElementById("avatar-j1").value.split(" ")[0];
    const avatar2 = document.getElementById("avatar-j2").value.split(" ")[0];

    // Guardamos configuración
    const config = {
      mod: numJugadores,
      p1: avatar1,
      p2: avatar2,
    };
    localStorage.setItem("gameConfig", JSON.stringify(config));

    // Redirigir
    window.location.href = "juego.html";
  });
});
