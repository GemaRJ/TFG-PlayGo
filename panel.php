<?php
// Solo cargamos la seguridad de sesión.
// No cargamos conexion.php porque la lógica del chat la haréis aparte.
require_once "configuracion/sesiones.php";

// Verificamos que sea JUGADOR (Niño o Adulto)
comprobarJugador();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zona de Juegos | PlayGo</title>

    <link rel="stylesheet" href="assets/css/estilos.css">
    <link rel="stylesheet" href="assets/css/panel.css">
</head>

<body>

    <header class="panel-header">
        <div class="logo-container">
            <span style="font-size: 1.8rem;">🎮</span>
            <span class="titulo-logo">PLAYGO</span>
        </div>

        <div class="user-info">
            <span>Hola, <?php echo htmlspecialchars($_SESSION['nombre']); ?></span>
            <span class="etiqueta-rol">
                <?php echo strtoupper($_SESSION['tipo_usuario']); ?>
            </span>
        </div>

        <a href="autenticacion/logout.php" class="boton-principal"
            style="background-color: #c0392b; padding: 8px 20px; font-size: 0.9rem;">
            Salir
        </a>
    </header>

    <div class="main-container">

        <main class="game-area">
            <div class="mensaje-bienvenida" id="mensaje-bienvenida">
                <h2 style="font-size: 2rem; margin-bottom: 10px;">¡Bienvenido a PlayGo!</h2>
                <p style="font-size: 1.2rem; opacity: 0.8;">Interactúa con el asistente para empezar.</p>
                <div style="font-size: 4rem; margin-top: 20px; opacity: 0.5;">🕹️</div>
            </div>

            <iframe id="pantalla-juego" src="" name="juegoFrame"></iframe>
        </main>

        <aside class="chatbot-area">
            <div class="chat-header">
                🤖 Asistente Virtual
            </div>

            <div class="chat-history" id="chat-box">
                <div class="bot-msg">
                    Hola <strong><?php echo htmlspecialchars($_SESSION['nombre']); ?></strong>.
                    <br>El sistema de chat se conectará aquí próximamente.
                </div>
            </div>

            <div class="chat-input-area">
                <input type="text" id="user-input" class="input-control" placeholder="Esperando módulo de chat..."
                    autocomplete="off" style="flex: 1;" disabled>
                <button id="send-btn" class="boton-principal" style="width: auto; padding: 0 20px;"
                    disabled>Enviar</button>
            </div>
        </aside>

    </div>

    <footer class="footer-admin">
        <div class="footer-contenido">
            <p class="logo-proyecto">🎮 PLAYGO</p>
            <p class="subtexto">Plataforma de Minijuegos - Proyecto DAW</p>
            <hr style="width: 50%; margin: 10px auto; opacity: 0.2;">
            <div class="copyright">
                &copy; <?php echo date('Y'); ?> - Desarrollado por el Equipo de PlayGo
            </div>
        </div>
    </footer>

</body>

</html>