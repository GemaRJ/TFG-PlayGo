<?php
require_once "../../configuracion/conexion.php";
require_once "../../configuracion/sesiones.php";

/** @var mysqli $conn */

// Verifica sesión y rol administrador
comprobarAdmin();

// LÓGICA DE DATOS
$sql_stats = "SELECT tipo, COUNT(*) as total FROM incidencias GROUP BY tipo";
$res_stats = mysqli_query($conn, $sql_stats);

$sql_total = "SELECT COUNT(*) as total FROM incidencias WHERE estado = 'pendiente'";
$res_total = mysqli_query($conn, $sql_total);
$total_pendiente = mysqli_fetch_assoc($res_total)['total'];
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telemetría de Soporte | PlayGo Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
    <style>
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            width: 100%;
            margin-top: 30px;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            transition: 0.3s;
        }

        .stat-card:hover {
            border-color: #00d2ff;
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(0, 210, 255, 0.2);
        }

        .stat-value {
            font-size: 2.5rem;
            font-weight: 800;
            color: #00d2ff;
            text-shadow: 0 0 10px rgba(0, 210, 255, 0.5);
            display: block;
        }

        .stat-label {
            font-size: 0.75rem;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }

        /* Barra de estado operativa */
        .system-status {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 25px;
            padding: 30px;
            margin-top: 40px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
        }

        .energy-bar-container {
            background: rgba(0, 0, 0, 0.3);
            height: 12px;
            border-radius: 10px;
            overflow: hidden;
            margin-top: 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .energy-fill {
            height: 100%;
            background: linear-gradient(90deg, #ff4444, #ff8800);
            box-shadow: 0 0 15px rgba(255, 68, 68, 0.6);
            transition: width 1s ease-in-out;
        }
    </style>
</head>

<body class="portal-galactico">

    <main class="admin-main">
        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> ANALYTICS</div>
            <h1>Análisis de Soporte</h1>
            <p>Monitoreo cuantitativo de señales e incidencias en la red.</p>
        </div>

        <div class="stats-grid">
            <?php
            if (mysqli_num_rows($res_stats) > 0):
                while ($f = mysqli_fetch_assoc($res_stats)):
            ?>
                    <div class="stat-card">
                        <span class="stat-label"><?php echo str_replace('_', ' ', $f['tipo']); ?></span>
                        <span class="stat-value"><?php echo $f['total']; ?></span>
                    </div>
                <?php
                endwhile;
            else:
                ?>
                <div class="stat-card" style="grid-column: 1 / -1;">
                    <p>No hay transmisiones registradas todavía.</p>
                </div>
            <?php endif; ?>
        </div>

        <div class="system-status">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 1rem; color: #ff4444;">🚨 ESTADO DE ALERTAS PENDIENTES</h3>
                <span style="font-weight: 800;"><?php echo $total_pendiente; ?> TICKETS</span>
            </div>
            <div class="energy-bar-container">
                <div class="energy-fill" style="width: <?php echo min(($total_pendiente * 10), 100); ?>%;"></div>
            </div>
        </div>

        <div style="margin-top: 40px;">
            <a href="../menu.php" class="btn-logout" style="border-color: #00d2ff; color: #00d2ff;">
                ← Regresar a la Central
            </a>
        </div>
    </main>

</body>

</html>