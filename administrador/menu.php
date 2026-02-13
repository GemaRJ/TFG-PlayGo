<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/**
 * MENU PRINCIPAL DEL ADMINISTRADOR (DASHBOARD)
 * Gestión centralizada: Usuarios, Juegos y Soporte.
 */
require_once "../configuracion/conexion.php";
require_once "../configuracion/sesiones.php";
comprobarSesion(); // [TICKET SEGURIDAD] Verifica sesión

// Seguridad adicional: Solo admin
if ($_SESSION['tipo_usuario'] !== 'administrador') {
    header("Location: ../index.php");
    exit;
}

// LÓGICA DE DATOS: Contar incidencias pendientes para el aviso
$sql_pendientes = "SELECT COUNT(*) as total FROM incidencias WHERE estado = 'pendiente'";
$res_pendientes = mysqli_query($conn, $sql_pendientes);
$cont_pendientes = mysqli_fetch_assoc($res_pendientes)['total'];
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Administración | PlayGo</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous">
    </script>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/menu.css">
</head>

<body class="bg-light">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">
                <span>🎮</span> Panel PlayGo
            </a>
            <div class="d-flex align-items-center text-white">
                <span class="me-3 d-none d-md-block">Hola, <?php echo htmlspecialchars($_SESSION['nombre']); ?></span>
                <a href="../autenticacion/logout.php" class="btn btn-danger btn-sm rounded-pill fw-bold">
                    Cerrar Sesión
                </a>
            </div>
        </div>
    </nav>

    <div class="container my-5">

        <div class="text-center mb-5 animate-fade-in">
            <h1 class="display-5 fw-bold text-dark">Centro de Comando</h1>
            <p class="text-muted">Gestiona usuarios, juegos y soporte técnico.</p>
        </div>

        <div class="row g-4 justify-content-center">

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0 card-hover">
                    <div class="card-body text-center p-4">
                        <div class="fs-1 mb-3">👥</div>
                        <h3 class="h4 fw-bold">Usuarios</h3>
                        <p class="text-muted small">Administra los jugadores registrados.</p>
                        <div class="d-grid gap-2 mt-4">
                            <a href="usuarios/listar.php" class="btn btn-outline-primary btn-sm">Listar Todos</a>
                            <a href="usuarios/alta.php" class="btn btn-outline-primary btn-sm">Crear Nuevo</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0 card-hover">
                    <div class="card-body text-center p-4">
                        <div class="fs-1 mb-3">🕹️</div>
                        <h3 class="h4 fw-bold">Catálogo</h3>
                        <p class="text-muted small">Añade o edita los minijuegos.</p>
                        <div class="d-grid gap-2 mt-4">
                            <a href="juegos/listar.php" class="btn btn-outline-success btn-sm">Gestionar Catálogo</a>
                            <a href="juegos/alta.php" class="btn btn-success btn-sm text-white">+ Nuevo Juego</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0 card-hover">
                    <div class="card-body text-center p-4">
                        <div class="fs-1 mb-3">✉️</div>
                        <h3 class="h4 fw-bold">Soporte</h3>
                        <p class="text-muted small">Tickets, reportes y estadísticas.</p>
                        <div class="d-grid gap-2 mt-4">
                            <a href="soporte/listar.php" class="btn btn-outline-danger btn-sm position-relative">
                                Gestionar Tickets
                                <?php if($cont_pendientes > 0): ?>
                                <span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                    <?php echo $cont_pendientes; ?>
                                </span>
                                <?php endif; ?>
                            </a>
                            <a href="soporte/estadisticas.php" class="btn btn-outline-danger btn-sm">Ver Resumen</a>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <footer class="bg-white text-center py-4 mt-5 border-top">
        <p class="mb-0 fw-bold text-secondary">🎮 PLAYGO ADMIN</p>
        <small class="text-muted">&copy; <?php echo date('Y'); ?> - Panel de Control Interno</small>
    </footer>

</body>

</html>