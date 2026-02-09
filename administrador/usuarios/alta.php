<?php
// Actualización de rutas para la nueva estructura de PlayGo
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin(); // Solo los administradores del equipo acceden aquí

$mensaje = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);
    $tipo_usuario = $_POST['tipo_usuario']; // nino, adulto o administrador

    // Verificación de correo duplicado en la base de datos playgo
    $check = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    if(mysqli_num_rows($check) > 0){
        $error = "Ese correo electrónico ya está registrado.";
    } else {
        // Registro en la tabla usuario
        $sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario) VALUES ('$nombres','$correo','$clave','$tipo_usuario')";
        if(mysqli_query($conn, $sql)){
            $mensaje = "Jugador registrado correctamente.";
        } else {
            $error = "Error técnico al registrar: " . mysqli_error($conn);
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alta de Usuario | PlayGo Admin</title>
    <link rel="stylesheet" href="../../assets/css/estilos.css">
    <link rel="stylesheet" href="../../assets/css/admin.css">
</head>

<body>
    <div class="caja-principal" style="max-width: 500px; margin-top: 50px;">
        <div class="admin-header">
            <h1 class="titulo-hola" style="color: #1a5276;">Nuevo Usuario</h1>
            <p class="texto-rol">REGISTRO INTERNO DE JUGADORES</p>
        </div>

        <?php if($mensaje): ?>
        <div class="alerta alerta-exito">✅ <?php echo $mensaje; ?></div>
        <?php endif; ?>

        <?php if($error): ?>
        <div class="alerta alerta-error">⚠️ <?php echo $error; ?></div>
        <?php endif; ?>

        <form method="POST">
            <div style="text-align: left; margin-bottom: 15px;">
                <label class="label-bold">Nombre Completo:</label>
                <input type="text" name="nombres" class="input-control" placeholder="Nombre del jugador" required>
            </div>

            <div style="text-align: left; margin-bottom: 15px;">
                <label class="label-bold">Correo Electrónico:</label>
                <input type="email" name="correo" class="input-control" placeholder="correo@playgo.com" required>
            </div>

            <div style="text-align: left; margin-bottom: 15px;">
                <label class="label-bold">Contraseña:</label>
                <input type="password" name="clave" class="input-control" placeholder="••••••••" required>
            </div>

            <div style="text-align: left; margin-bottom: 25px;">
                <label class="label-bold" style="color: #1a5276;">Asignar Perfil:</label>
                <select name="tipo_usuario" class="select-control" required>
                    <option value="nino">Niño (Acceso infantil)</option>
                    <option value="adulto">Adulto (Acceso general)</option>
                    <option value="administrador">Administrador (Gestión)</option>
                </select>
            </div>

            <button type="submit" class="boton-principal" style="width: 100%;">
                Registrar Usuario
            </button>
        </form>

        <div class="separador-footer" style="margin-top: 25px;">
            <a href="listar.php" class="nav-link">⬅ Volver al listado</a>
        </div>
    </div>

    <footer class="footer-admin">
        <div class="footer-contenido">
            <p class="logo-proyecto">🎮 PLAYGO</p>
            <p class="subtexto">Plataforma de Minijuegos - Proyecto DAW</p>
            <div class="copyright">
                &copy; <?php echo date('Y'); ?> - Desarrollado por el Equipo de PlayGo
            </div>
        </div>
    </footer>
</body>

</html>