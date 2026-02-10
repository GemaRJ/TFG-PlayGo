/* =========================================
   🤖 CHATBOT DE SOPORTE - LOGICA TFG
   ========================================= */

const chatBtn = document.getElementById('chat-toggle-btn');
const chatWindow = document.getElementById('chat-window');
const closeChatBtn = document.getElementById('chat-close-btn');
const chatBody = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send-btn');
const notifDot = document.querySelector('.notification-dot');

// Estado para saber qué está esperando el bot
let estadoChat = 'inicio'; // Puede ser: 'inicio', 'esperando_queja', 'esperando_sugerencia'

// 1. ABRIR Y CERRAR
chatBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
    notifDot.style.display = 'none'; // Quitar el puntito rojo al leer
    
    // Si el chat está vacío, el bot saluda automáticamente
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
    chatBody.scrollTop = chatBody.scrollHeight; // Bajar scroll automáticamente
}

function botSaludar() {
    setTimeout(() => {
        // Recuperamos el nombre del usuario si existe (del login)
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
    
    // Botones de opciones
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

// 3. CEREBRO DEL BOT (RESPUESTAS)
async function procesarEleccion(accion) {
    // Eliminamos los botones viejos para que quede limpio
    const opcionesViejas = document.querySelector('.chat-options');
    if (opcionesViejas) opcionesViejas.remove();

    if (accion === 'sugerencia') {
        agregarMensaje("¡Genial! Nos encanta mejorar. Escribe tu idea abajo 👇", 'bot');
        estadoChat = 'esperando_sugerencia';
        activarInput();
    } 
    else if (accion === 'queja') {
        agregarMensaje("Vaya... 😢 Cuéntame qué ha pasado para arreglarlo:", 'bot');
        estadoChat = 'esperando_queja';
        activarInput();
    } 
    else {
        agregarMensaje("¡Hola! Espero que te diviertas mucho jugando. 🎮", 'bot');
        setTimeout(mostrarOpciones, 2000);
    }
}

function activarInput() {
    chatInput.disabled = false;
    chatInput.focus();
}

// 4. PROCESAR LO QUE ESCRIBE EL USUARIO
function enviarMensajeUsuario() {
    const texto = chatInput.value.trim();
    if (!texto) return;

    agregarMensaje(texto, 'user');
    chatInput.value = '';
    chatInput.disabled = true;

    // Respuesta del bot según el estado
    setTimeout(() => {
        if (estadoChat === 'esperando_sugerencia' || estadoChat === 'esperando_queja') {
            
            // --- AQUÍ GUARDAMOS LOS DATOS (IMPORTANTE TFG) ---
            const tipo = estadoChat === 'esperando_sugerencia' ? 'SUGERENCIA' : 'QUEJA';
            guardarEnLocalStorage(tipo, texto);
            // ------------------------------------------------

            agregarMensaje("¡Recibido! 📝 He guardado tu mensaje en el sistema. ¡Gracias!", 'bot');
            estadoChat = 'inicio';
            setTimeout(() => {
                agregarMensaje("¿Necesitas algo más?", 'bot');
                mostrarOpciones();
            }, 1500);
        }
    }, 1000);
}

// Función auxiliar para guardar (Persistencia de datos)
function guardarEnLocalStorage(tipo, mensaje) {
    const feedback = JSON.parse(localStorage.getItem('playgo_feedback')) || [];
    feedback.push({
        usuario: localStorage.getItem('playgo_user') || 'Anónimo',
        tipo: tipo,
        mensaje: mensaje,
        fecha: new Date().toLocaleString()
    });
    localStorage.setItem('playgo_feedback', JSON.stringify(feedback));
    console.log("Feedback guardado:", feedback);
}

// Eventos de envío
chatSend.addEventListener('click', enviarMensajeUsuario);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enviarMensajeUsuario();
});