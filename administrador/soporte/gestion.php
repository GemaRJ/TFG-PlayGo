<?php
require_once "../../configuracion/conexion.php";
require_once "../../configuracion/sesiones.php";

/** @var mysqli $conn */

// Verifica sesión y rol administrador
comprobarAdmin();

if (!isset($_GET['id'])) {
    header("Location: listar.php");
    exit;
}

$id = mysqli_real_escape_string($conn, $_GET['id']);

$sql = "SELECT i.*, u.nombres FROM incidencias i 
        LEFT JOIN usuario u ON i.usuario_id = u.usuario_id 
        WHERE i.id_incidencia = $id";

$res = mysqli_query($conn, $sql);
$ticket = mysqli_fetch_assoc($res);

if (!$ticket) {
    header("Location: listar.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Expediente #<?php echo $id; ?> | PlayGo</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
    <style>
        .ticket-view {
            max-width: 800px;
            margin: 0 auto;
            text-align: left;
        }

        .ticket-meta {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 20px;
            margin-bottom: 25px;
        }

        .mensaje-box {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            padding: 25px;
            border-left: 4px solid #00d2ff;
            font-style: italic;
            color: #ccc;
            line-height: 1.6;
        }
    </style>
</head>

<body class="portal-galactico">
    <main class="admin-main">
        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> MISSION CONTROL</div>
            <h1>Detalle de Incidencia #<?php echo $id; ?></h1>
        </div>

        <div class="card-comando ticket-view">
            <div class="ticket-meta">
                <div>
                    <span class="form-label-space">Emisor</span>
                    <h3 style="color: white;">
                        <?php echo $ticket['nombres'] ? htmlspecialchars($ticket['nombres']) : 'Explorador Invitado'; ?>
                    </h3>
                </div>
                <div style="text-align: right;">
                    <span class="form-label-space">Estado de Señal</span>
                    <span class="badge-status <?php echo $ticket['estado'] == 'pendiente' ? 'pend' : 'res'; ?>"
                        style="font-size: 1rem;">
                        <?php echo strtoupper($ticket['estado']); ?>
                    </span>
                </div>
            </div>

            <div style="margin-bottom: 30px;">
                <span class="form-label-space">Asunto</span>
                <h4 style="color: #00d2ff;"><?php echo htmlspecialchars($ticket['asunto']); ?></h4>
            </div>

            <div class="mensaje-box">
                <?php echo nl2br(htmlspecialchars($ticket['mensaje'])); ?>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 40px;">
                <a href="listar.php" class="btn-admin"
                    style="width: auto; padding: 12px 30px; border-color: #94a3b8; color: #94a3b8;">← Volver</a>

                <?php if ($ticket['estado'] === 'pendiente'): ?>
                    <a href="procesar_incidencia.php?id=<?php echo $id; ?>&accion=resolver"
                        class="btn-admin btn-primary-space"
                        style="width: auto; padding: 12px 40px; background: #28a745; color: white; border-color: #28a745;">
                        RESOLVER SEÑAL
                    </a>
                <?php else: ?>
                    <a href="procesar_incidencia.php?id=<?php echo $id; ?>&accion=reabrir" class="btn-admin"
                        style="width: auto; padding: 12px 40px; border-color: #ffc107; color: #ffc107;">
                        ⚠️ REABRIR CASO
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </main>
</body>

</html>