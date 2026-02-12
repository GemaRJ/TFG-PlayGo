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