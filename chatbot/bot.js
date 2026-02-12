/**
 * ASISTENTE INTERACTIVO PLAYGO - CÓDIGO FINAL CORREGIDO
 * Funcionalidad: Redimensionable, Acceso Condicional y Retorno al Soporte.
 */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CONFIGURACIÓN DE RUTAS ---
  const RUTAS = {
    soporte: "/playgo/soporte.php",
    login: "/playgo/autenticacion/login.php",
  };

  // --- 2. INYECCIÓN DEL HTML ---
  const chatHTML = `
        <div id="chat-widget">
            <button id="chat-toggle-btn">💬 <span class="notification-dot">1</span></button>
            <div id="chat-window" class="hidden">
                <header class="chat-header">
                    <span>🤖 Asistente PlayGo</span>
                    <button id="chat-close-btn">✖</button>
                </header>
                <div id="chat-messages" class="chat-body"></div>
            </div>
        </div>`;
  document.body.insertAdjacentHTML("beforeend", chatHTML);

  // --- 3. SELECTORES MODERNOS ---
  const chatWindow = document.querySelector("#chat-window");
  const toggleBtn = document.querySelector("#chat-toggle-btn");
  const closeBtn = document.querySelector("#chat-close-btn");
  const chatBody = document.querySelector("#chat-messages");
  const notifDot = document.querySelector(".notification-dot");

  // --- 4. EVENTOS DE CONTROL ---

  toggleBtn.addEventListener("click", () => {
    const estaCerrado = chatWindow.classList.contains("hidden");
    chatWindow.classList.toggle("hidden");
    if (notifDot) notifDot.style.display = "none";

    // Resetea y saluda cada vez que se abre
    if (estaCerrado) {
      reiniciarYSaludar();
    }
  });

  closeBtn.addEventListener("click", () => {
    chatWindow.classList.add("hidden");
  });

  // --- 5. FUNCIONES DE FLUJO ---

  /**
   * Comprueba la sesión activa en el navegador
   */
  function verificarSesionActiva() {
    return localStorage.getItem("usuario_id") !== null;
  }

  function reiniciarYSaludar() {
    chatBody.innerHTML = "";
    escribirBurbuja(
      "¡Bienvenido de nuevo a PlayGo! 🎮 ¿En qué te puedo ayudar?",
      "bot",
    );
    setTimeout(() => menuPrincipal(), 500);
  }

  function menuPrincipal() {
    limpiarOpciones();
    const contenedor = crearContenedorOpciones();
    contenedor.appendChild(
      crearBoton("📝 Abrir Ticket Soporte", () => menuSoporte()),
    );
    contenedor.appendChild(crearBoton("🕹️ Quiero Jugar", () => menuJuegos()));
    contenedor.appendChild(
      crearBoton("❌ Salir Asistente", () => cerrarAsistente()),
    );
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  /**
   * Menú Soporte: Generación de botones con lógica de seguridad
   */
  function menuSoporte() {
    limpiarOpciones();
    escribirBurbuja("¿Sobre qué motivo es tu ticket?", "bot");

    const motivos = [
      { txt: "😡 Queja General", val: "queja", privado: false },
      { txt: "💡 Sugerencia", val: "sugerencia", privado: false },
      {
        txt: "👤 Error Alta Usuario",
        val: "error_alta_usuario",
        privado: true,
      },
      {
        txt: "📉 Solicitud de Baja",
        val: "solicitud_baja_usuario",
        privado: true,
      },
      { txt: "🕹️ Incidencia en Juego", val: "incidencia_juego", privado: true },
      { txt: "🛡️ Fallo de Seguridad", val: "fallo_seguridad", privado: true },
      { txt: "🏆 Error en Ranking", val: "error_ranking", privado: true },
    ];

    const contenedor = crearContenedorOpciones();
    motivos.forEach((m) => {
      contenedor.appendChild(
        crearBoton(m.txt, () => {
          if (m.privado && !verificarSesionActiva()) {
            escribirBurbuja(
              `⚠️ Por seguridad, para gestionar una ${m.txt} es necesario iniciar sesión.`,
              "bot",
            );
            setTimeout(
              () => irARuta(`${RUTAS.login}?destino=soporte&tipo=${m.val}`),
              3000,
            );
          } else {
            irARuta(`${RUTAS.soporte}?tipo=${m.val}`);
          }
        }),
      );
    });
    contenedor.appendChild(crearBoton("⬅️ Volver", () => menuPrincipal()));
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  function menuJuegos() {
    limpiarOpciones();
    escribirBurbuja(
      "¿A qué categoría pertenecen los juegos que buscas?",
      "bot",
    );

    const contenedor = crearContenedorOpciones();
    contenedor.appendChild(
      crearBoton("👨‍💻 Adultos", () => listaJuegos("adultos")),
    );
    contenedor.appendChild(crearBoton("🧸 Niños", () => listaJuegos("niños")));
    contenedor.appendChild(crearBoton("⬅️ Volver", () => menuPrincipal()));

    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  function listaJuegos(categoria) {
    limpiarOpciones();
    escribirBurbuja(`Listado de juegos para ${categoria}:`, "bot");

    const juegos =
      categoria === "adultos"
        ? ["🧠 Trivial", "♠️ Blackjack", "🕵️ Impostor", "🚫 Tabú"]
        : [
            "🔢 Cuenta Números",
            "🔤 Cuenta Letras",
            "🃏 Memory",
            "❌ Tres en Raya",
            "🎓 Trivial Kids",
            "🙊 Tabú Kids",
          ];

    const contenedor = crearContenedorOpciones();
    juegos.forEach((juego) => {
      contenedor.appendChild(
        crearBoton(juego, () => {
          escribirBurbuja(
            `¡Genial! Para jugar a ${juego} inicia sesión.`,
            "bot",
          );
          setTimeout(() => irARuta(RUTAS.login), 1200);
        }),
      );
    });
    contenedor.appendChild(crearBoton("⬅️ Volver", () => menuJuegos()));

    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  // --- 6. UTILIDADES ---

  function escribirBurbuja(texto, clase) {
    const div = document.createElement("div");
    div.classList.add("msg", clase === "bot" ? "bot-msg" : "user-msg");
    div.innerText = texto;
    chatBody.appendChild(div);
    hacerScroll();
  }

  function crearBoton(texto, callback) {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerText = texto;
    btn.onclick = callback;
    return btn;
  }

  function crearContenedorOpciones() {
    const div = document.createElement("div");
    div.classList.add("chat-options");
    return div;
  }

  function limpiarOpciones() {
    document.querySelectorAll(".chat-options").forEach((el) => el.remove());
  }

  function irARuta(url) {
    window.location.href = url;
  }

  function cerrarAsistente() {
    escribirBurbuja("¡Hasta pronto! Vuelve cuando quieras. 👋", "bot");
    setTimeout(() => {
      // Redirige a la página principal en lugar de solo ocultar el chat
      window.location.href = "/playgo/index.php";
    }, 1200);
  }

  function hacerScroll() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});
