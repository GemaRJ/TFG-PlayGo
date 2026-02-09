<?php
// Actualizamos la ruta a la nueva carpeta de configuracion
require_once "../configuracion/conexion.php";
session_start();

$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = $_POST['clave'];

    // Consultamos la tabla 'usuario' de la base de datos 'playgo'
    $res = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    $usuario = mysqli_fetch_assoc($res);

    if ($usuario && password_verify($clave, $usuario['clave'])) {
        // Guardamos los datos en la sesión
        $_SESSION['id'] = $usuario['usuario_id']; 
        $_SESSION['nombre'] = $usuario['nombres']; 
        $_SESSION['tipo_usuario'] = $usuario['tipo_usuario'];

        // REDIRECCIÓN SEGÚN ROL PARA PLAYGO
        if ($usuario['tipo_usuario'] == 'administrador') {
            // El administrador va a su panel de gestión
            header("Location: ../administrador/menu.php");
        } else {
            // Niños y adultos van al panel principal de juegos
            header("Location: ../panel.php");
        }
        exit;
    } else {
        $error = "Correo o contraseña incorrectos en PlayGo";
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | PlayGo Minijuegos</title>
    <link rel="stylesheet" href="../assets/css/estilos.css">
</head>

<body class="cuerpo-centrado" style="background-color: #f0f4f8;">

    <div class="caja-principal" style="max-width: 450px; border-top: 5px solid #1a5276;">
        <div class="login-header">
            <h1 style="color: #1a5276;">🎮 PlayGo</h1>
            <p>¡Inicia sesión para empezar a jugar!</p>
        </div>

        <?php if($error): ?>
        <div class="alerta alerta-error">
            ⚠️ <?php echo $error; ?>
        </div>
        <?php endif; ?>

        <form method="POST">
            <div class="form-grupo">
                <label>Tu Correo:</label>
                <input type="email" name="correo" class="input-gema" placeholder="usuario@playgo.com" required>
            </div>

            <div class="form-grupo" style="margin-top: 15px;">
                <label>Tu Contraseña:</label>
                <input type="password" name="clave" class="input-gema" placeholder="••••••••" required>
            </div>

            <button type="submit" class="boton-gema" style="width: 100%; margin-top: 20px; background-color: #1a5276;">
                ¡Entrar a Jugar!
            </button>
        </form>

        <div class="login-footer" style="margin-top: 25px;">
            <p>¿Eres nuevo? <a href="registro.php" style="color: #1a5276; font-weight: bold;">Crea tu cuenta aquí</a>
            </p>
            <p style="margin-top: 15px;">
                <a href="../index.html" style="color: #7f8c8d; font-size: 0.85rem;">🏠 Volver a la presentación</a>
            </p>
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