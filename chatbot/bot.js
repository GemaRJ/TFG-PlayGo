(function() {
    // --- 0. CONFIGURACIÓN Y AUTO-INYECCIÓN ---
    const basePath = '/playgo/chatbot';

    // Inyectar el CSS automáticamente
    if (!document.querySelector(`link[href="${basePath}/bot.css"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = basePath + '/bot.css';
        document.head.appendChild(link);
    }

    // Inyectar el HTML del chat al final del body
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

    // --- TU LÓGICA ORIGINAL ADAPTADA ---
    const chatBtn = document.getElementById('chat-toggle-btn');
    const chatWindow = document.getElementById('chat-window');
    const closeChatBtn = document.getElementById('chat-close-btn');
    const chatBody = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send-btn');
    const notifDot = document.querySelector('.notification-dot');

    let estadoChat = 'inicio';

    // 1. ABRIR Y CERRAR
    chatBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (notifDot) notifDot.style.display = 'none';
        
        if (chatBody.children.length === 0) {
            botSaludar();
        }
    });

    closeChatBtn.addEventListener('click', () => chatWindow.classList.add('hidden'));

    // 2. FUNCIONES DE MENSAJERIA
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
            agregarMensaje(`¡Hola ${nombreUsuario}! Soy el asistente virtual de PlayGo. 🤖`, 'bot');
            
            setTimeout(() => {
                agregarMensaje("¿En qué puedo ayudarte hoy?", 'bot');
                mostrarOpciones();
            }, 600);
        }, 500);
    }

    function mostrarOpciones() {
        const div = document.createElement('div');
        div.classList.add('chat-options');
        div.appendChild(crearBoton("💡 Tengo una sugerencia", "sugerencia"));
        div.appendChild(crearBoton("🐞 He encontrado un fallo", "queja"));
        div.appendChild(crearBoton("👋 Solo saludar", "saludo"));
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function crearBoton(texto, accion) {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = texto;
        btn.onclick = () => procesarEleccion(accion);
        return btn;
    }

    async function procesarEleccion(accion) {
        const opcionesViejas = document.querySelector('.chat-options');
        if (opcionesViejas) opcionesViejas.remove();

        if (accion === 'sugerencia') {
            agregarMensaje("¡Genial! Nos encanta mejorar. Escribe tu idea abajo 👇", 'bot');
            estadoChat = 'esperando_sugerencia';
            activarInput();
        } else if (accion === 'queja') {
            agregarMensaje("Vaya... 😢 Cuéntame qué ha pasado para arreglarlo:", 'bot');
            estadoChat = 'esperando_queja';
            activarInput();
        } else {
            agregarMensaje("¡Hola! Espero que te diviertas mucho jugando. 🎮", 'bot');
            setTimeout(mostrarOpciones, 2000);
        }
    }

    function activarInput() {
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
            if (estadoChat === 'esperando_sugerencia' || estadoChat === 'esperando_queja') {
                const tipo = estadoChat === 'esperando_sugerencia' ? 'SUGERENCIA' : 'QUEJA';
                guardarEnLocalStorage(tipo, texto);
                agregarMensaje("¡Recibido! 📝 He guardado tu mensaje en el sistema.", 'bot');
                estadoChat = 'inicio';
                setTimeout(() => {
                    agregarMensaje("¿Necesitas algo más?", 'bot');
                    mostrarOpciones();
                }, 1500);
            }
        }, 1000);
    }

    function guardarEnLocalStorage(tipo, mensaje) {
        const feedback = JSON.parse(localStorage.getItem('playgo_feedback')) || [];
        feedback.push({
            usuario: localStorage.getItem('playgo_user') || 'Anónimo',
            tipo: tipo,
            mensaje: mensaje,
            fecha: new Date().toLocaleString()
        });
        localStorage.setItem('playgo_feedback', JSON.stringify(feedback));
    }

    chatSend.addEventListener('click', enviarMensajeUsuario);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') enviarMensajeUsuario();
    });

})();