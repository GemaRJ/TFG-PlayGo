/* ASISTENTE INTERACTIVO PLAYGO - SOLO PARA TRIPULACIÓN ADULTA */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. INYECCIÓN DE ESTILOS ---
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
            color: white; font-size: 11px; border-radius: 50%; display: flex; justify-content: center; align-items: center; 
        }
        #chat-window { 
            position: absolute; bottom: 80px; right: 0; width: 320px; height: 450px; 
            background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(10px); border: 1px solid #00d2ff; 
            border-radius: 20px; display: flex; flex-direction: column; overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: all 0.3s ease;
        }
        #chat-window.hidden { display: none; }
        
        /* MEJORA DE CABECERA: Texto oscuro sobre fondo celeste para que se lea perfecto */
        .chat-header { 
            background: #00d2ff; 
            color: #0f172a; 
            padding: 15px; 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            font-weight: 900; 
        }
        .chat-header span { color: #0f172a; letter-spacing: 1px; }
        .chat-header button { background: none; border: none; font-weight: bold; cursor: pointer; color: #0f172a; font-size: 1.2rem; }

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
        .bot-warning { font-size: 0.75rem; color: #ffcc00; margin-top: 5px; font-style: italic; }
    </style>`;
  document.head.insertAdjacentHTML("beforeend", botStyle);

  // --- 2. CONFIGURACIÓN DE RUTAS ---
  const BASE_URL = window.location.hostname === "localhost" ? "/playgo" : "";

  const RUTAS = {
    soporte: BASE_URL + "/soporte.php",
    login: BASE_URL + "/autenticacion/login.php",
    registro: BASE_URL + "/autenticacion/registro.php",
  };

  // --- 3. INYECCIÓN DEL HTML (Cabecera arreglada) ---
  const chatHTML = `
        <div id="chat-widget">
            <button id="chat-toggle-btn">🤖 <span class="notification-dot">1</span></button>
            <div id="chat-window" class="hidden">
                <header class="chat-header">
                    <span>🤖 ASISTENTE IA</span>
                    <button id="chat-close-btn">✕</button>
                </header>
                <div id="chat-messages" class="chat-body"></div>
            </div>
        </div>`;
  document.body.insertAdjacentHTML("beforeend", chatHTML);

  const chatWindow = document.querySelector("#chat-window");
  const toggleBtn = document.querySelector("#chat-toggle-btn");
  const closeBtn = document.querySelector("#chat-close-btn");
  const chatBody = document.querySelector("#chat-messages");
  const notifDot = document.querySelector(".notification-dot");

  toggleBtn.addEventListener("click", () => {
    chatWindow.classList.toggle("hidden");
    if (notifDot) notifDot.style.display = "none";
    if (chatBody.innerHTML.trim() === "") reiniciarYSaludar();
  });

  closeBtn.addEventListener("click", () => chatWindow.classList.add("hidden"));

  // --- 5. LÓGICA DEL BOT ---
  function reiniciarYSaludar() {
    chatBody.innerHTML = "";
    escribirBurbuja("¡Hola! Soy la IA de PlayGo. 🚀", "bot");
    setTimeout(() => {
      escribirBurbuja(
        "Aviso: Este canal es para gestión de cuentas de adultos.",
        "bot",
      );
      setTimeout(() => menuPrincipal(), 500);
    }, 600);
  }

  function menuPrincipal() {
    limpiarOpciones();
    const contenedor = crearContenedorOpciones();
    contenedor.appendChild(
      crearBoton("🕹️ Gestión de Juegos", () => menuJuegos()),
    );
    contenedor.appendChild(
      crearBoton("📝 Soporte para Adultos", () => menuSoporte()),
    );
    contenedor.appendChild(crearBoton("👋 Cerrar", () => cerrarAsistente()));
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  function menuJuegos() {
    limpiarOpciones();
    escribirBurbuja("¿Eres mayor de edad y tienes cuenta?", "bot");
    const contenedor = crearContenedorOpciones();

    contenedor.appendChild(
      crearBoton("🔑 Sí, ir al Login", () => {
        window.location.href = RUTAS.login;
      }),
    );
    contenedor.appendChild(
      crearBoton("📝 No, crear cuenta Adulto", () => {
        window.location.href = RUTAS.registro;
      }),
    );

    escribirBurbuja(
      "Si eres menor, usa el botón 'MODO CADETE' de la página principal para jugar seguro.",
      "bot",
    );

    contenedor.appendChild(crearBoton("⬅️ Volver", () => menuPrincipal()));
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  function menuSoporte() {
    limpiarOpciones();
    escribirBurbuja("Entendido. Selecciona el tipo de reporte:", "bot");
    const contenedor = crearContenedorOpciones();

    contenedor.appendChild(
      crearBoton("😡 Queja / Sugerencia", () => {
        window.location.href = RUTAS.soporte + "?tipo=queja";
      }),
    );
    contenedor.appendChild(
      crearBoton("👤 Problema con mi Cuenta", () => {
        window.location.href = RUTAS.login;
      }),
    );
    contenedor.appendChild(crearBoton("⬅️ Volver", () => menuPrincipal()));

    chatBody.appendChild(contenedor);
    hacerScroll();
  }

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
