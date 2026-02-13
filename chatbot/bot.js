/**
 * UBICACIÓN: chatbot/bot.js
 * ASISTENTE INTERACTIVO PLAYGO - ESTILO NEÓN/SPACE
 */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CONFIGURACIÓN DE RUTAS ---
  // Ajusta estas rutas si tu estructura de carpetas es diferente
  const RUTAS = {
    soporte: "soporte.php", // Si estás en index, esto funciona. Si no, usa ruta absoluta "/playgo/soporte.php"
    login: "autenticacion/login.php",
    juegos: "juegos/listar.php"
  };

  // --- 2. INYECCIÓN DEL HTML (Estructura limpia) ---
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

  // --- 3. SELECTORES ---
  const chatWindow = document.querySelector("#chat-window");
  const toggleBtn = document.querySelector("#chat-toggle-btn");
  const closeBtn = document.querySelector("#chat-close-btn");
  const chatBody = document.querySelector("#chat-messages");
  const notifDot = document.querySelector(".notification-dot");

  // --- 4. EVENTOS DE CONTROL ---
  toggleBtn.addEventListener("click", () => {
    const estaCerrado = chatWindow.classList.contains("hidden");
    
    // Toggle clase
    if (estaCerrado) {
        chatWindow.classList.remove("hidden");
        // Ocultar notificación al abrir
        if (notifDot) notifDot.style.display = "none";
        // Iniciar conversación si está vacío
        if (chatBody.innerHTML.trim() === "") {
            reiniciarYSaludar();
        }
    } else {
        chatWindow.classList.add("hidden");
    }
  });

  closeBtn.addEventListener("click", () => {
    chatWindow.classList.add("hidden");
  });

  // --- 5. LÓGICA DEL BOT ---
  
  // Simulación de check de sesión (puedes conectarlo con PHP vía AJAX si quieres)
  function verificarSesionActiva() {
    // Esto es un placeholder. Lo ideal es comprobar una cookie o variable JS inyectada por PHP
    return document.cookie.includes("PHPSESSID"); 
  }

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
    contenedor.appendChild(crearBoton("📝 Soporte / Ayuda", () => menuSoporte()));
    contenedor.appendChild(crearBoton("👋 Cerrar", () => cerrarAsistente()));
    
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  function menuSoporte() {
    limpiarOpciones();
    escribirBurbuja("Entendido, ¿qué tipo de asistencia necesitas?", "bot");

    const motivos = [
      { txt: "💡 Sugerencia", val: "sugerencia", privado: false },
      { txt: "🚫 Reportar Error", val: "error", privado: false },
      { txt: "🔓 Problemas Acceso", val: "acceso", privado: true },
    ];

    const contenedor = crearContenedorOpciones();
    motivos.forEach((m) => {
      contenedor.appendChild(
        crearBoton(m.txt, () => {
             // Redirigir a soporte
             window.location.href = `${RUTAS.soporte}?motivo=${m.val}`;
        }),
      );
    });
    contenedor.appendChild(crearBoton("⬅️ Volver", () => menuPrincipal()));
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  function menuJuegos() {
    limpiarOpciones();
    escribirBurbuja("Excelente elección. ¿Para quién buscamos juegos?", "bot");
    
    const contenedor = crearContenedorOpciones();
    contenedor.appendChild(crearBoton("🧠 Adultos (Estrategia)", () => window.location.href = "autenticacion/login.php"));
    contenedor.appendChild(crearBoton("🧸 Niños (Educativo)", () => window.location.href = "autenticacion/login.php"));
    contenedor.appendChild(crearBoton("⬅️ Volver", () => menuPrincipal()));
    
    chatBody.appendChild(contenedor);
    hacerScroll();
  }

  // --- 6. UTILIDADES ---
  function escribirBurbuja(texto, tipo) {
    const div = document.createElement("div");
    div.classList.add("msg", tipo === "bot" ? "bot-msg" : "user-msg");
    div.innerText = texto;
    chatBody.appendChild(div);
    hacerScroll();
  }

  function crearBoton(texto, callback) {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerText = texto;
    btn.onclick = () => {
        // Efecto visual al clickar: añadir mensaje de usuario
        escribirBurbuja(texto, "user");
        callback();
    };
    return btn;
  }

  function crearContenedorOpciones() {
    const div = document.createElement("div");
    div.classList.add("chat-options");
    return div;
  }

  function limpiarOpciones() {
    // Elimina botones anteriores para que no se puedan volver a pulsar
    document.querySelectorAll(".chat-options").forEach((el) => el.remove());
  }

  function cerrarAsistente() {
    escribirBurbuja("¡Cambio y fuera! 🛸", "bot");
    setTimeout(() => chatWindow.classList.add("hidden"), 1500);
  }

  function hacerScroll() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});