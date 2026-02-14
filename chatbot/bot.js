/**
 * UBICACIÓN: chatbot/bot.js
 * ASISTENTE INTERACTIVO PLAYGO - AUTO-INYECTABLE
 */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. INYECCIÓN DE ESTILOS (CSS) ---
  const botStyle = `
    <style>
        #chat-widget { position: fixed; bottom: 20px; right: 20px; z-index: 10000; font-family: 'Poppins', sans-serif; }
        #chat-toggle-btn { 
            width: 60px; height: 60px; border-radius: 50%; background: #00d2ff; border: none; 
            font-size: 24px; cursor: pointer; box-shadow: 0 4px 15px rgba(0, 210, 255, 0.4); 
            display: flex; align-items: center; justify-content: center; position: relative;
        }
        .notification-dot { 
            position: absolute; top: 0; right: 0; width: 20px; height: 20px; background: red; 
            color: white; font-size: 11px; border-radius: 50%; justify-content: center; align-items: center; 
        }
        #chat-window { 
            position: absolute; bottom: 80px; right: 0; width: 320px; height: 450px; 
            background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(10px); border: 1px solid #00d2ff; 
            border-radius: 20px; display: flex; flex-direction: column; overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: all 0.3s ease;
        }
        #chat-window.hidden { display: none; transform: translateY(20px); opacity: 0; }
        .chat-header { background: #00d2ff; color: #0f172a; padding: 15px; display: flex; justify-content: space-between; font-weight: 900; }
        .chat-header button { background: none; border: none; font-weight: bold; cursor: pointer; }
        .chat-body { flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
        .msg { padding: 10px 15px; border-radius: 15px; max-width: 80%; font-size: 0.9rem; line-height: 1.4; }
        .bot-msg { background: rgba(255, 255, 255, 0.1); color: white; align-self: flex-start; border-bottom-left-radius: 2px; }
        .user-msg { background: #00d2ff; color: #0f172a; align-self: flex-end; border-bottom-right-radius: 2px; font-weight: 600; }
        .chat-options { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; }
        .option-btn { 
            background: transparent; border: 1px solid #00d2ff; color: #00d2ff; padding: 8px; 
            border-radius: 10px; cursor: pointer; transition: 0.3s; font-size: 0.85rem; text-align: left;
        }
        .option-btn:hover { background: #00d2ff; color: #0f172a; }
    </style>`;
  document.head.insertAdjacentHTML("beforeend", botStyle);

  // --- 2. CONFIGURACIÓN DE RUTAS INTELIGENTES ---
  // Usamos rutas relativas a la raíz si es posible para que no fallen en subcarpetas
  const RUTAS = {
    soporte: "soporte.php",
    login: "autenticacion/login.php",
    registro: "autenticacion/registro.php",
  };

  // --- 3. INYECCIÓN DEL HTML ---
  const chatHTML = `
        <div id="chat-widget">
            <button id="chat-toggle-btn">
                🤖 
                <span class="notification-dot" style="display: flex;">1</span>
            </button>
            <div id="chat-window" class="hidden">
                <header class="chat-header">
                    <span>ASISTENTE <span style="color:white">IA</span></span>
                    <button id="chat-close-btn">✕</button>
                </header>
                <div id="chat-messages" class="chat-body"></div>
            </div>
        </div>`;
  document.body.insertAdjacentHTML("beforeend", chatHTML);

  // --- 4. SELECTORES Y EVENTOS ---
  const chatWindow = document.querySelector("#chat-window");
  const toggleBtn = document.querySelector("#chat-toggle-btn");
  const closeBtn = document.querySelector("#chat-close-btn");
  const chatBody = document.querySelector("#chat-messages");
  const notifDot = document.querySelector(".notification-dot");

  toggleBtn.addEventListener("click", () => {
    if (chatWindow.classList.contains("hidden")) {
      chatWindow.classList.remove("hidden");
      if (notifDot) notifDot.style.display = "none";
      if (chatBody.innerHTML.trim() === "") reiniciarYSaludar();
    } else {
      chatWindow.classList.add("hidden");
    }
  });

  closeBtn.addEventListener("click", () => chatWindow.classList.add("hidden"));

  // --- 5. LÓGICA DEL BOT ---
  function reiniciarYSaludar() {
    chatBody.innerHTML = "";
    escribirBurbuja("¡Hola! Soy la IA de PlayGo. 🚀", "bot");
    setTimeout(() => {
      escribirBurbuja("¿En qué misión puedo ayudarte hoy?", "bot");
      setTimeout(() => menuPrincipal(), 500);
    }, 600);
  }

  function menuPrincipal() {
    limpiarOpciones();
    const contenedor = crearContenedorOpciones();
    contenedor.appendChild(crearBoton("🕹️ Quiero Jugar", () => menuJuegos()));
    contenedor.appendChild(
      crearBoton("📝 Soporte / Ayuda", () => menuSoporte()),
    );
    contenedor.appendChild(crearBoton("👋 Cerrar", () => cerrarAsistente()));
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  function menuSoporte() {
    limpiarOpciones();
    escribirBurbuja("Entendido, ¿qué tipo de asistencia necesitas?", "bot");
    const contenedor = crearContenedorOpciones();

    // --- OPCIONES ABIERTAS (Sin Login) ---
    contenedor.appendChild(
      crearBoton("😡 Queja", () => {
        window.location.href = RUTAS.soporte + "?tipo=queja";
      }),
    );
    contenedor.appendChild(
      crearBoton("💡 Sugerencia", () => {
        window.location.href = RUTAS.soporte + "?tipo=sugerencia";
      }),
    );
    contenedor.appendChild(
      crearBoton("👤 Problema Registro", () => {
        window.location.href = RUTAS.soporte + "?tipo=problema_registro";
      }),
    );

    // --- OPCIONES PROTEGIDAS (Requieren Login) ---
    // Si el usuario elige estas, lo mandamos primero al login por seguridad
    const rutasProtegidas = [
      { txt: "🕹️ Error en Juego", slug: "incidencia_juego" },
      { txt: "🛡️ Fallo de Seguridad", slug: "fallo_seguridad" },
      { txt: "🏆 Problema Ranking", slug: "problema_ranking" },
      { txt: "📉 Solicitud de Baja", slug: "solicitud_baja" },
    ];

    rutasProtegidas.forEach((opcion) => {
      contenedor.appendChild(
        crearBoton(opcion.txt, () => {
          escribirBurbuja(
            "Esta gestión requiere validar tu identidad. Redirigiendo al login...",
            "bot",
          );
          setTimeout(() => {
            // Guardamos el destino para que tras el login vuelva a soporte con el tipo marcado
            window.location.href =
              RUTAS.login + "?redirect=soporte.php&tipo=" + opcion.slug;
          }, 1000);
        }),
      );
    });

    contenedor.appendChild(crearBoton("⬅️ Volver", () => menuPrincipal()));
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  function menuJuegos() {
    limpiarOpciones();
    escribirBurbuja("Excelente elección. ¿Tienes una cuenta?", "bot");
    const contenedor = crearContenedorOpciones();

    contenedor.appendChild(
      crearBoton("🔑 Ya tengo cuenta", () => {
        // Redirige al login para identificarse antes de jugar
        window.location.href = RUTAS.login;
      }),
    );

    contenedor.appendChild(
      crearBoton("🚀 Crear cuenta", () => {
        // Redirige al registro
        window.location.href = RUTAS.registro;
      }),
    );

    contenedor.appendChild(crearBoton("⬅️ Volver", () => menuPrincipal()));
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  // --- 6. UTILIDADES ---
  function escribirBurbuja(texto, tipo) {
    const div = document.createElement("div");
    div.className = `msg ${tipo === "bot" ? "bot-msg" : "user-msg"}`;
    div.innerText = texto;
    chatBody.appendChild(div);
    hacerScroll();
  }

  function crearBoton(texto, callback) {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = texto;
    btn.onclick = () => {
      escribirBurbuja(texto, "user");
      callback();
    };
    return btn;
  }

  function crearContenedorOpciones() {
    const div = document.createElement("div");
    div.className = "chat-options";
    return div;
  }

  function limpiarOpciones() {
    document.querySelectorAll(".chat-options").forEach((el) => el.remove());
  }

  function cerrarAsistente() {
    escribirBurbuja("¡Cambio y fuera! 🛸", "bot");
    setTimeout(() => chatWindow.classList.add("hidden"), 1000);
  }

  function hacerScroll() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});
