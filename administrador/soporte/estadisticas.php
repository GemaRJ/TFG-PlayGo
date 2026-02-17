<?php
require_once "../../configuracion/conexion.php";
require_once "../../configuracion/sesiones.php";
comprobarSesion();

if ($_SESSION['tipo_usuario'] !== 'administrador') {
    header("Location: ../../index.php");
    exit;
}

/**
 * [TICKET SEGURIDAD/OPTIMIZACIÓN] 
 * Consulta de agregación para evitar procesar miles de filas en PHP.
 * Delebamos el conteo al motor InnoDB de MySQL.
 */
$sql_stats = "SELECT tipo, COUNT(*) as total FROM incidencias GROUP BY tipo";
$res_stats = mysqli_query($conn, $sql_stats);

// Consulta para el total general de pendientes (Badge del menú)
$sql_total = "SELECT COUNT(*) as total FROM incidencias WHERE estado = 'pendiente'";
$res_total = mysqli_query($conn, $sql_total);
$total_pendiente = mysqli_fetch_assoc($res_total)['total'];
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Estadísticas de Soporte | PlayGo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
</head>

<body class="bg-light">
    <div class="container my-5">
        <div class="d-flex justify-content-between align-items-center mb-5">
            <div>
                <h1 class="text-playgo fw-bold">Análisis de Soporte</h1>
                <p class="text-muted">Resumen cuantitativo de la actividad en PlayGo</p>
            </div>
            <a href="../menu.php" class="btn btn-outline-dark">Regresar al Panel</a>
        </div>

        <div class="row g-4">
            <?php 
            if (mysqli_num_rows($res_stats) > 0):
                while($f = mysqli_fetch_assoc($res_stats)): 
            ?>
            <div class="col-md-6 col-lg-3">
                <div class="card h-100 shadow-sm border-0 text-center p-4">
                    <div class="text-muted small mb-2"><?php echo strtoupper(str_replace('_', ' ', $f['tipo'])); ?>
                    </div>
                    <div class="h2 fw-bold text-playgo"><?php echo $f['total']; ?></div>
                </div>
            </div>
            <?php 
                endwhile; 
            else:
            ?>
            <div class="col-12 text-center py-5">
                <p class="text-muted">No hay datos registrados todavía.</p>
            </div>
            <?php endif; ?>
        </div>

        <div class="mt-5 p-4 bg-white rounded shadow-sm">
            <h3 class="h5 mb-3">Estado Operativo</h3>
            <div class="progress" style="height: 30px;">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;">
                    Incidencias Pendientes: <?php echo $total_pendiente; ?>
                </div>
            </div>
        </div>
    </div>
</body>

</html>