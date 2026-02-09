<?php
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin();

$mensaje = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $ruta = mysqli_real_escape_string($conn, $_POST['ruta']);
    $categoria = $_POST['categoria']; 

    $sql = "INSERT INTO juegos (nombre, ruta, categoria) VALUES ('$nombre', '$ruta', '$categoria')";
    
    if(mysqli_query($conn, $sql)){
        $mensaje = "Juego registrado correctamente en el catálogo.";
    } else {
        $error = "Error al registrar el juego: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Alta Juego | PlayGo Admin</title>
    <link rel="stylesheet" href="../../assets/css/estilos.css">
    <link rel="stylesheet" href="../../assets/css/admin.css">
</head>

<body>
    <div class="caja-principal" style="max-width: 550px; margin-top: 40px;">
        <div class="admin-header">
            <h1 style="color: #1a5276;">🎮 Nuevo Juego</h1>
            <p>Registrar contenido para la plataforma</p>
        </div>

        <?php if($mensaje): ?><div class="alerta alerta-exito">✅ <?php echo $mensaje; ?></div><?php endif; ?>
        <?php if($error): ?><div class="alerta alerta-error">⚠️ <?php echo $error; ?></div><?php endif; ?>

        <form method="POST">
            <label class="label-bold">Nombre del Juego:</label>
            <input type="text" name="nombre" class="input-control" placeholder="Ej: Memory Infantil" required>

            <label class="label-bold">Carpeta (Ruta):</label>
            <input type="text" name="ruta" class="input-control" placeholder="Ej: memory" required>

            <label class="label-bold">Sección / Público:</label>
            <select name="categoria" class="select-control" style="width:100%; padding:10px; margin-bottom:20px;">
                <option value="ninos">Niños</option>
                <option value="adultos">Adultos</option>
            </select>

            <button type="submit" class="boton-principal" style="width: 100%;">Registrar Juego</button>
        </form>

        <div class="separador-footer">
            <a href="listar.php" class="nav-link">⬅ Volver al Catálogo</a>
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