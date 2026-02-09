<?php
// Incluimos las funciones de sesión unificadas para el equipo
require_once "../configuracion/sesiones.php";
comprobarAdmin(); // Seguridad: Solo el administrador accede al panel
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Administración | PlayGo</title>
    <link rel="stylesheet" href="../assets/css/estilos.css">
    <link rel="stylesheet" href="../assets/css/admin.css">
</head>

<body>
    <div class="caja-principal" style="max-width: 900px; margin-top: 40px;">
        <div class="admin-header" style="border-bottom: 2px solid #1a5276; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 class="titulo-hola" style="color: #1a5276;">🎮 Panel de Control PlayGo</h1>
            <p class="texto-rol">Bienvenido, Administrador:
                <strong><?php echo htmlspecialchars($_SESSION['nombre']); ?></strong>
            </p>
        </div>

        <div class="menu-grid"
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">

            <div class="seccion-admin"
                style="background: #fdfefe; border: 1px solid #d4e6f1; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <h2 style="color: #1a5276; margin-bottom: 15px;">👥 Usuarios y Jugadores</h2>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <a href="usuarios/listar.php" class="boton-principal">Listar y Gestionar Usuarios</a>
                    <a href="usuarios/alta.php" class="boton-principal">Registrar Nuevo Perfil</a>
                    <a href="usuarios/buscar.php" class="boton-principal">Buscador de Jugadores</a>
                </div>
            </div>

            <div class="seccion-admin"
                style="background: #fdfefe; border: 1px solid #d4e6f1; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <h2 style="color: #1a5276; margin-bottom: 15px;">🕹️ Catálogo de Juegos</h2>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <a href="juegos/listar.php" class="boton-principal">Gestionar Catálogo Completo</a>
                    <a href="juegos/alta.php" class="boton-principal" style="background: #27ae60;">Añadir Nuevo
                        Juego</a>
                    <p style="font-size: 0.8rem; color: #7f8c8d; margin-top: 10px;">* Registra las rutas de los archivos
                        .js</p>
                </div>
            </div>
        </div>

        <div style="margin-top: 20px; background: #ebf5fb; padding: 20px; border-radius: 12px;">
            <h3 style="color: #1a5276;">🤖 Inteligencia del Chatbot</h3>
            <p style="font-size: 0.9rem;">Gestiona las respuestas automáticas y la lógica del asistente.</p>
            <a href="../chatbot/chatbot.php" class="nav-link" style="font-weight: bold;">Configurar Respuestas ➡</a>
        </div>

        <div class="separador-footer" style="margin-top: 40px; text-align: center;">
            <a href="../autenticacion/logout.php" class="nav-link"
                style="color: #c0392b; font-weight: bold; font-size: 1.1rem;">
                🔴 Cerrar Sesión Segura
            </a>
        </div>
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