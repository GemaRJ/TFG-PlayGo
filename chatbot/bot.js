<<<<<<< HEAD
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
=======
(function() {
    console.log("🤖 Bot PlayGo: Sistema de Soporte Activado");

    // 1. INYECTAR EL HTML AUTOMÁTICAMENTE
    const chatHTML = `
        <div id="chat-widget">
            <button id="chat-toggle-btn">
                💬 <span class="notification-dot">1</span>
            </button>
            <div id="chat-window" class="hidden">
                <header class="chat-header">
                    <span>🤖 Soporte PlayGo</span>
                    <button id="chat-close-btn">✖</button>
                </header>
                <div id="chat-messages" class="chat-body"></div>
                <footer class="chat-footer">
                    <input type="text" id="chat-input" placeholder="Escribe aquí..." disabled>
                    <button id="chat-send-btn">➤</button>
                </footer>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatHTML);

    const chatBtn = document.getElementById('chat-toggle-btn');
    const chatWindow = document.getElementById('chat-window');
    const closeChatBtn = document.getElementById('chat-close-btn');
    const chatBody = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send-btn');
    const notifDot = document.querySelector('.notification-dot');

    let estadoChat = 'inicio';

    // --- ABRIR Y CERRAR ---
    chatBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (notifDot) notifDot.style.display = 'none';
        if (chatBody.children.length === 0) botSaludar();
    });

    closeChatBtn.addEventListener('click', () => chatWindow.classList.add('hidden'));

    function agregarMensaje(texto, remitente) {
        const div = document.createElement('div');
        div.classList.add('msg', remitente === 'bot' ? 'bot-msg' : 'user-msg');
        div.innerText = texto;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function botSaludar() {
        setTimeout(() => {
            const nombreUsuario = localStorage.getItem('playgo_user') || "Jugador";
            agregarMensaje(`¡Hola ${nombreUsuario}! Soy el asistente de PlayGo. 🤖`, 'bot');
            setTimeout(() => {
                agregarMensaje("¿Cómo puedo ayudarte?", 'bot');
                mostrarOpciones();
            }, 600);
        }, 500);
    }

    // --- MENÚ DE OPCIONES ---
    function mostrarOpciones() {
        const div = document.createElement('div');
        div.classList.add('chat-options');
        
        // Botón que abre el PHP en pestaña nueva (La forma más fácil)
        div.appendChild(crearBoton("❓ AYUDA O SUGERENCIAS", "abrir_soporte"));
        
        div.appendChild(crearBoton("🐞 Error/Fallo", "queja"));
        div.appendChild(crearBoton("👋 Saludo", "saludo"));
        
        chatBody.appendChild(div);
    }

    function crearBoton(texto, accion) {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = texto;
        
        btn.onclick = () => {
            // Eliminar botones anteriores
            const opcionesViejas = document.querySelectorAll('.chat-options');
            opcionesViejas.forEach(d => d.remove());

            if (accion === 'abrir_soporte') {
                agregarMensaje(texto, 'user');
                agregarMensaje("Abriendo formulario de soporte en una pestaña nueva... ", 'bot');
                
                // --- RUTA AL PHP ---
                // Ajusta esta ruta según donde tengas tu archivo soporte.php
                setTimeout(() => {
                    window.open('/playgo/autenticacion/soporte.php', '_blank');
                    setTimeout(mostrarOpciones, 2000);
                }, 1000);
                
            } else if (accion === 'queja') {
                agregarMensaje(texto, 'user');
                agregarMsgBot(accion);
            } else {
                agregarMensaje("¡Hola! Espero que te estés divirtiendo. 🎮", 'bot');
                setTimeout(mostrarOpciones, 2000);
            }
        };
        return btn;
    }

    function agregarMsgBot(accion) {
        estadoChat = 'esperando_queja';
        agregarMensaje("Por favor, descríbenos el error para que podamos ayudarte:", 'bot');
        chatInput.disabled = false;
        chatInput.focus();
    }

    function enviarMensajeUsuario() {
        const texto = chatInput.value.trim();
        if (!texto) return;

        agregarMensaje(texto, 'user');
        chatInput.value = '';
        chatInput.disabled = true;

        setTimeout(() => {
            // Guardar en LocalStorage para que no se pierda la queja
            const feedback = JSON.parse(localStorage.getItem('playgo_feedback') || "[]");
            feedback.push({ tipo: 'QUEJA_BOT', mensaje: texto, fecha: new Date().toLocaleString() });
            localStorage.setItem('playgo_feedback', JSON.stringify(feedback));

            agregarMensaje("¡Entendido! He guardado tu reporte localmente. ✅", 'bot');
            estadoChat = 'inicio';
            setTimeout(mostrarOpciones, 1500);
        }, 1000);
    }

    chatSend.addEventListener('click', enviarMensajeUsuario);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') enviarMensajeUsuario(); });

})();
>>>>>>> 4d17a056d6355f5650586c20c3eaa1d6c160b858
