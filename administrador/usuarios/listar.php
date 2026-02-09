<?php
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin(); // Seguridad: Solo el equipo administrador accede

// Consulta a la tabla 'usuario' de PlayGo
$res = mysqli_query($conn, "SELECT usuario_id, nombres, correo, tipo_usuario FROM usuario");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Gestión de Jugadores | PlayGo Admin</title>
    <link rel="stylesheet" href="../../assets/css/estilos.css">
    <link rel="stylesheet" href="../../assets/css/admin.css">
</head>

<body>
    <div class="caja-principal" style="max-width: 1000px;">
        <div class="admin-header">
            <h1 style="color: #1a5276;">🎮 Comunidad PlayGo</h1>
            <p>Control total de perfiles y accesos</p>
        </div>

        <div style="margin-bottom: 20px; text-align: right;">
            <a href="alta.php" class="boton-principal" style="background:#27ae60; width:auto;">+ Nuevo Jugador</a>
        </div>

        <table class="tabla-personalizada tabla-admin">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Perfil</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php while($u = mysqli_fetch_assoc($res)): ?>
                <tr>
                    <td>#<?php echo $u['usuario_id']; ?></td>
                    <td><strong><?php echo htmlspecialchars($u['nombres']); ?></strong></td>
                    <td><?php echo htmlspecialchars($u['correo']); ?></td>
                    <td>
                        <span class="precio-tag" style="background: #ebf5fb; color: #1a5276;">
                            <?php echo strtoupper($u['tipo_usuario']); ?>
                        </span>
                    </td>
                    <td>
                        <a href="modificar.php?id=<?php echo $u['usuario_id']; ?>" class="enlace-editar">Editar</a> |
                        <a href="baja.php?id=<?php echo $u['usuario_id']; ?>" class="enlace-borrar"
                            onclick="return confirm('¿Eliminar jugador?')">Borrar</a>
                    </td>
                </tr>
                <?php endwhile; ?>
            </tbody>
        </table>

        <div class="separador-footer">
            <a href="../menu.php" class="nav-link">⬅ Volver al Menú Principal</a>
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