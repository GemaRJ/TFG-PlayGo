<?php
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin();

$id = intval($_GET['id'] ?? 0);
$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $rol = $_POST['tipo_usuario']; // nino, adulto o administrador

    $sql = "UPDATE usuario SET nombres='$nombres', correo='$correo', tipo_usuario='$rol' WHERE usuario_id=$id";
    if(mysqli_query($conn, $sql)) {
        $mensaje = "Datos actualizados correctamente.";
    }
}

$res = mysqli_query($conn, "SELECT * FROM usuario WHERE usuario_id=$id");
$u = mysqli_fetch_assoc($res);
if(!$u) die("Jugador no encontrado.");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Editar Perfil | PlayGo</title>
    <link rel="stylesheet" href="../../assets/css/estilos.css">
    <link rel="stylesheet" href="../../assets/css/admin.css">
</head>

<body>
    <div class="caja-principal" style="max-width: 500px;">
        <div class="admin-header">
            <h1 style="color: #1a5276;">Editar Perfil</h1>
            <p>ID de Jugador: #<?php echo $id; ?></p>
        </div>

        <?php if($mensaje): ?><div class="alerta alerta-exito">✅ <?php echo $mensaje; ?></div><?php endif; ?>

        <form method="POST">
            <label class="label-bold">Nombre:</label>
            <input type="text" name="nombres" class="input-control"
                value="<?php echo htmlspecialchars($u['nombres']); ?>" required>

            <label class="label-bold">Email:</label>
            <input type="email" name="correo" class="input-control"
                value="<?php echo htmlspecialchars($u['correo']); ?>" required>

            <label class="label-bold">Rol en PlayGo:</label>
            <select name="tipo_usuario" class="select-control" style="width:100%; padding:10px; margin-bottom:20px;">
                <option value="nino" <?php echo ($u['tipo_usuario'] == 'nino') ? 'selected' : ''; ?>>Niño</option>
                <option value="adulto" <?php echo ($u['tipo_usuario'] == 'adulto') ? 'selected' : ''; ?>>Adulto</option>
                <option value="administrador" <?php echo ($u['tipo_usuario'] == 'administrador') ? 'selected' : ''; ?>>
                    Administrador</option>
            </select>

            <button type="submit" class="boton-principal" style="width: 100%;">Guardar Cambios</button>
        </form>

        <div class="separador-footer">
            <a href="listar.php" class="nav-link">⬅ Volver al listado</a>
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