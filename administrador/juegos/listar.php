<?php
// UBICACIÓN: /playgo/administrador/juegos/listar.php
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin();

// Consulta de juegos (Lógica similar a la inmobiliaria)
$sql = "SELECT * FROM juegos ORDER BY id_juego DESC";
$res = mysqli_query($conn, $sql);
$juegos = mysqli_fetch_all($res, MYSQLI_ASSOC);

mysqli_free_result($res);
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Gestión de Catálogo | PlayGo Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
</head>

<body class="bg-light">

    <div class="container my-5">
        <div class="admin-header mb-4">
            <h1 class="fw-bold text-playgo">Gestión de Catálogo</h1>
            <p class="text-muted">ADMINISTRADOR: <?php echo strtoupper($_SESSION['nombre'] ?? 'ADMIN'); ?></p>
        </div>

        <div class="card shadow-sm border-0 rounded-4">
            <div class="card-body p-0">
                <table class="table table-hover align-middle table-juegos mb-0">
                    <thead class="table-light">
                        <tr>
                            <th class="ps-4">Imagen</th>
                            <th>ID</th>
                            <th>Nombre del Juego</th>
                            <th>Ruta</th>
                            <th class="text-center">Categoría</th>
                            <th class="text-end pe-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($juegos as $j): ?>
                        <tr>
                            <td class="ps-4">
                                <?php 
                                    // Buscamos el .jpg en la carpeta de imágenes
                                    $foto = "../../assets/img/" . $j['ruta'] . ".jpg"; 
                                ?>
                                <img src="<?php echo $foto; ?>" class="img-miniatura"
                                    onerror="this.src='../../assets/img/default.jpg'">
                            </td>
                            <td class="text-muted">#<?php echo $j['id_juego']; ?></td>
                            <td class="fw-bold text-dark"><?php echo htmlspecialchars($j['nombre']); ?></td>
                            <td>
                                <code class="ruta-tecnica">/<?php echo $j['ruta']; ?>/</code>
                            </td>
                            <td class="text-center">
                                <span
                                    class="badge rounded-pill <?php echo ($j['categoria'] == 'adultos' ? 'bg-success' : 'bg-info text-dark'); ?>">
                                    <?php echo strtoupper($j['categoria']); ?>
                                </span>
                            </td>
                            <td class="text-end pe-4">
                                <a href="editar.php?id=<?php echo $j['id_juego']; ?>"
                                    class="btn btn-sm btn-outline-primary">Editar</a>
                                <span class="text-muted mx-1">|</span>
                                <a href="baja.php?id=<?php echo $j['id_juego']; ?>"
                                    class="btn btn-sm btn-outline-danger"
                                    onclick="return confirm('¿Seguro que quieres eliminar este juego y su imagen?')">Borrar</a>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="text-center mt-4">
            <a href="../menu.php" class="text-decoration-none text-muted small">🏠 Volver al Panel</a>
        </div>
    </div>
</body>

</html>