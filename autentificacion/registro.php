<?php
// Actualizamos la ruta a la carpeta de configuracion del nuevo proyecto
require_once "../configuracion/conexion.php";

$mensaje = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitización de datos manteniendo los nombres de columna de tu DB
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);
    $tipo_usuario = $_POST['tipo_usuario']; // Recibirá 'nino' o 'adulto'

    // Verificamos si el correo ya existe en la tabla 'usuario'
    $check = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    if(mysqli_num_rows($check) > 0){
        $error = "Este correo ya está registrado en PlayGo.";
    } else {
        // Inserción en la base de datos 'playgo'
        $sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario) 
                VALUES ('$nombres', '$correo', '$clave', '$tipo_usuario')";
        
        if(mysqli_query($conn, $sql)){
            $mensaje = "¡Bienvenido a PlayGo! Tu cuenta ha sido creada. Ya puedes iniciar sesión.";
        } else {
            $error = "Error al crear el perfil de jugador. Inténtalo de nuevo.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Jugador | PlayGo</title>
    <link rel="stylesheet" href="../assets/css/estilos.css">
</head>

<body class="cuerpo-centrado" style="background-color: #f0f4f8;">

    <div class="caja-principal" style="max-width: 500px; border-top: 5px solid #1a5276;">

        <div class="registro-header">
            <h1 style="color: #1a5276;">Únete a PlayGo</h1>
            <p>Crea tu perfil para acceder a los mejores minijuegos.</p>
        </div>

        <?php if($mensaje): ?>
        <div class="alerta alerta-exito">
            ✅ <?php echo $mensaje; ?>
            <p><a href="login.php" style="color: #155724; font-weight: bold;">Ir al Login</a></p>
        </div>
        <?php endif; ?>

        <?php if($error): ?>
        <div class="alerta alerta-error">
            ⚠️ <?php echo $error; ?>
        </div>
        <?php endif; ?>

        <form method="POST">
            <div class="form-grupo">
                <label>Nombre de Jugador:</label>
                <input type="text" name="nombres" class="input-gema" placeholder="Ej: SuperPlayer2026" required>
            </div>

            <div class="form-grupo">
                <label>Correo Electrónico:</label>
                <input type="email" name="correo" class="input-gema" placeholder="jugador@correo.com" required>
            </div>

            <div class="form-grupo">
                <label>Contraseña:</label>
                <input type="password" name="clave" class="input-gema" placeholder="Crea una clave segura" required>
            </div>

            <div class="form-grupo">
                <label style="color: #1a5276; font-weight: bold;">¿Quién va a jugar?</label>
                <select name="tipo_usuario" class="select-gema"
                    style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc;" required>
                    <option value="" disabled selected>Selecciona tu perfil</option>
                    <option value="nino">Perfil Infantil (Juegos para Niños)</option>
                    <option value="adulto">Perfil Adulto (Juegos para Mayores)</option>
                </select>
            </div>

            <button type="submit" class="boton-gema" style="width: 100%; margin-top: 20px; background-color: #1a5276;">
                ¡Comenzar la Aventura!
            </button>
        </form>

        <div class="registro-footer" style="margin-top: 20px;">
            <p style="color: #666; font-size: 0.95rem;">
                ¿Ya eres parte de PlayGo? <a href="login.php" style="color: #1a5276; font-weight: bold;">Inicia
                    sesión</a>
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