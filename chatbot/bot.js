(function() {
    console.log("🤖 Bot PlayGo: Cargando...");

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

    // Insertamos el HTML al final del body
    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // 2. AHORA SÍ DEFINIMOS LAS CONSTANTES (porque los elementos ya existen)
    const chatBtn = document.getElementById('chat-toggle-btn');
    const chatWindow = document.getElementById('chat-window');
    const closeChatBtn = document.getElementById('chat-close-btn');
    const chatBody = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send-btn');
    const notifDot = document.querySelector('.notification-dot');

    let estadoChat = 'inicio';

    // --- LÓGICA DE FUNCIONAMIENTO ---

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
                agregarMensaje("¿En qué puedo ayudarte?", 'bot');
                mostrarOpciones();
            }, 600);
        }, 500);
    }

    function mostrarOpciones() {
        const div = document.createElement('div');
        div.classList.add('chat-options');
        div.appendChild(crearBoton("💡 Sugerencia", "sugerencia"));
        div.appendChild(crearBoton("🐞 Error/Fallo", "queja"));
        div.appendChild(crearBoton("👋 Saludo", "saludo"));
        chatBody.appendChild(div);
    }

    function crearBoton(texto, accion) {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = texto;
        btn.onclick = () => {
            divs = document.querySelectorAll('.chat-options');
            divs.forEach(d => d.remove());
            
            if (accion === 'sugerencia' || accion === 'queja') {
                agregarMensaje(texto, 'user');
                agregarMsgBot(accion);
            } else {
                agregarMensaje("¡Hola! Diviértete jugando. 🎮", 'bot');
                setTimeout(mostrarOpciones, 2000);
            }
        };
        return btn;
    }

    function agregarMsgBot(accion) {
        const msg = accion === 'sugerencia' ? "Escribe tu idea abajo 👇" : "Cuéntame el fallo:";
        estadoChat = 'esperando_' + accion;
        agregarMensaje(msg, 'bot');
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
            const tipo = estadoChat === 'esperando_sugerencia' ? 'SUGERENCIA' : 'QUEJA';
            
            // GUARDAR EN LOCALSTORAGE
            const feedback = JSON.parse(localStorage.getItem('playgo_feedback') || "[]");
            feedback.push({ tipo, mensaje: texto, fecha: new Date().toLocaleString() });
            localStorage.setItem('playgo_feedback', JSON.stringify(feedback));

            agregarMensaje("¡Recibido! Guardado en el sistema local. ✅", 'bot');
            estadoChat = 'inicio';
            setTimeout(mostrarOpciones, 1500);
        }, 1000);
    }

    chatSend.addEventListener('click', enviarMensajeUsuario);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') enviarMensajeUsuario(); });

})();