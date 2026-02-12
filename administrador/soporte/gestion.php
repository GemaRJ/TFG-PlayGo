<?php
require_once "../../configuracion/conexion.php";
require_once "../../configuracion/sesiones.php";
comprobarSesion();

if ($_SESSION['tipo_usuario'] !== 'administrador' || !isset($_GET['id'])) {
    header("Location: listar.php");
    exit;
}

$id = mysqli_real_escape_string($conn, $_GET['id']);
$sql = "SELECT i.*, u.nombres FROM incidencias i 
        LEFT JOIN usuario u ON i.usuario_id = u.usuario_id 
        WHERE i.id_incidencia = $id";
$res = mysqli_query($conn, $sql);
$ticket = mysqli_fetch_assoc($res);

if (!$ticket) { header("Location: listar.php"); exit; }
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Ticket #<?php echo $id; ?> | PlayGo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body class="bg-light">
    <div class="container my-5">
        <div class="card shadow-lg border-0 mx-auto" style="max-width: 800px; border-radius: 20px;">
            <div class="card-header bg-dark text-white p-4 d-flex justify-content-between align-items-center">
                <h4 class="mb-0">Gestión de Ticket #<?php echo $id; ?></h4>
                <span
                    class="badge <?php echo $ticket['estado'] == 'pendiente' ? 'bg-warning text-dark' : 'bg-success'; ?> fs-6">
                    <?php echo strtoupper($ticket['estado']); ?>
                </span>
            </div>
            <div class="card-body p-5">
                <div class="row mb-4">
                    <div class="col-md-6">
                        <p class="text-muted small mb-0">Usuario:</p>
                        <p class="fw-bold">
                            <?php echo $ticket['nombres'] ? htmlspecialchars($ticket['nombres']) : 'Invitado'; ?></p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <p class="text-muted small mb-0">Fecha de reporte:</p>
                        <p><?php echo date('d/m/Y H:i', strtotime($ticket['fecha_reporte'])); ?></p>
                    </div>
                </div>

                <div class="p-4 bg-light rounded-4 border mb-4">
                    <h6 class="fw-bold text-primary">Asunto: <?php echo htmlspecialchars($ticket['asunto']); ?></h6>
                    <hr>
                    <p class="mb-0"><?php echo nl2br(htmlspecialchars($ticket['mensaje'])); ?></p>
                </div>

                <div class="d-flex justify-content-between">
                    <a href="listar.php" class="btn btn-outline-secondary px-4 rounded-pill">Volver</a>

                    <div class="gap-2 d-flex">
                        <?php if ($ticket['estado'] === 'pendiente'): ?>
                        <a href="procesar_incidencia.php?id=<?php echo $id; ?>&accion=resolver"
                            class="btn btn-success px-4 rounded-pill">Resolver Ticket</a>
                        <?php else: ?>
                        <a href="procesar_incidencia.php?id=<?php echo $id; ?>&accion=reabrir"
                            class="btn btn-warning px-4 rounded-pill">⚠️ Reabrir Ticket</a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>