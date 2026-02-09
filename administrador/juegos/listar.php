<?php
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin();

$res = mysqli_query($conn, "SELECT * FROM juegos ORDER BY categoria ASC");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Catálogo | PlayGo Admin</title>
    <link rel="stylesheet" href="../../assets/css/estilos.css">
    <link rel="stylesheet" href="../../assets/css/admin.css">
</head>

<body>
    <div class="caja-principal" style="max-width: 1000px;">
        <div class="admin-header">
            <h1 style="color: #1a5276;">🕹️ Catálogo de Juegos</h1>
            <p>Control de contenidos: Niños y Adultos</p>
        </div>

        <div style="text-align: right; margin-bottom: 20px;">
            <a href="alta.php" class="boton-principal" style="background:#27ae60; width:auto;">+ Añadir Juego</a>
        </div>

        <table class="tabla-personalizada tabla-admin">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Juego</th>
                    <th>Ruta de Archivos</th>
                    <th>Sección</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php while($j = mysqli_fetch_assoc($res)): ?>
                <tr>
                    <td>#<?php echo $j['id_juego']; ?></td>
                    <td><strong><?php echo htmlspecialchars($j['nombre']); ?></strong></td>
                    <td><code>/juegos/<?php echo $j['categoria']; ?>/<?php echo $j['ruta']; ?>/</code></td>
                    <td>
                        <span class="precio-tag"
                            style="background: <?php echo ($j['categoria'] == 'adultos') ? '#ebf5fb' : '#eafaf1'; ?>;">
                            <?php echo strtoupper($j['categoria']); ?>
                        </span>
                    </td>
                    <td>
                        <a href="baja.php?id=<?php echo $j['id_juego']; ?>" class="enlace-borrar"
                            onclick="return confirm('¿Quitar este juego de PlayGo?')">Eliminar</a>
                    </td>
                </tr>
                <?php endwhile; ?>
            </tbody>
        </table>

        <div class="separador-footer">
            <a href="../menu.php" class="nav-link">⬅ Volver al Panel</a>
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