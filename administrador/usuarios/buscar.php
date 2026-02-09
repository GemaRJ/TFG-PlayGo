<?php
// Actualizamos rutas a la carpeta 'configuracion'
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin(); // Solo el administrador puede buscar perfiles

$busqueda = $_GET['busqueda'] ?? '';
$usuarios = [];

if($busqueda){
    $busqueda_safe = mysqli_real_escape_string($conn, $busqueda);
    // Buscamos en la tabla usuario por nombre, correo o tipo (nino/adulto)
    $sql = "SELECT usuario_id, nombres, correo, tipo_usuario FROM usuario 
            WHERE nombres LIKE '%$busqueda_safe%' 
               OR correo LIKE '%$busqueda_safe%' 
               OR tipo_usuario LIKE '%$busqueda_safe%'";
    $res = mysqli_query($conn, $sql);
    $usuarios = mysqli_fetch_all($res, MYSQLI_ASSOC);
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscar Jugadores | PlayGo Admin</title>
    <link rel="stylesheet" href="../../assets/css/estilos.css">
    <link rel="stylesheet" href="../../assets/css/admin.css">
</head>

<body>
    <div class="caja-principal" style="max-width: 1000px; margin-top: 50px;">
        <div class="admin-header">
            <h1 class="titulo-hola" style="color: #1a5276;">Buscador de Jugadores</h1>
            <p class="texto-rol">FILTRAR COMUNIDAD PLAYGO</p>
        </div>

        <form method="GET" style="display: flex; gap: 10px; margin-bottom: 30px;">
            <input type="text" name="busqueda" class="input-control"
                placeholder="Nombre, correo o perfil (nino/adulto)..."
                value="<?php echo htmlspecialchars($busqueda); ?>" required>
            <button type="submit" class="boton-principal" style="width: auto; padding: 0 30px;">
                🔍 Buscar
            </button>
        </form>

        <?php if($busqueda): ?>
        <h2 style="color: #1a5276; margin-bottom: 20px;">
            Resultados para: "<?php echo htmlspecialchars($busqueda); ?>"
        </h2>

        <?php if($usuarios): ?>
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
                <?php foreach($usuarios as $u): ?>
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
                            onclick="return confirm('¿Seguro que quieres eliminar a este jugador?')">Eliminar</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <?php else: ?>
        <div class="alerta alerta-error">
            ❌ No se encontraron jugadores con ese criterio.
        </div>
        <?php endif; ?>
        <?php endif; ?>

        <div class="separador-footer" style="margin-top: 30px;">
            <a href="listar.php" class="nav-link">⬅ Volver al listado completo</a>
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