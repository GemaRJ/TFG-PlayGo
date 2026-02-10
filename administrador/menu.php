<?php
// UBICACIÓN: /playgo/administrador/menu.php

require_once "../configuracion/conexion.php";
require_once "../configuracion/sesiones.php";
comprobarAdmin(); // Seguridad: Solo el administrador entra aquí
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Administración | PlayGo</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/menu.css">
</head>

<body class="bg-light">

    <nav class="navbar navbar-expand-lg navbar-dark bg-playgo shadow-sm">
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
            <h1 class="display-5 fw-bold text-playgo">Centro de Comando</h1>
            <p class="text-muted">Gestiona usuarios, juegos y configuraciones desde aquí.</p>
        </div>

        <div class="row g-4">

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0 card-hover">
                    <div class="card-body text-center p-4">
                        <div class="icon-circle bg-light-blue mb-3">
                            👥
                        </div>
                        <h3 class="h4 text-playgo fw-bold">Usuarios</h3>
                        <p class="text-muted small">Administra los jugadores registrados.</p>

                        <div class="d-grid gap-2 mt-4">
                            <a href="usuarios/listar.php" class="btn btn-outline-primary btn-sm">Listar Todos</a>
                            <a href="usuarios/alta.php" class="btn btn-outline-primary btn-sm">Crear Nuevo</a>
                            <a href="usuarios/buscar.php" class="btn btn-outline-primary btn-sm">Buscar</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0 card-hover">
                    <div class="card-body text-center p-4">
                        <div class="icon-circle bg-light-green mb-3">
                            🕹️
                        </div>
                        <h3 class="h4 text-playgo fw-bold">Catálogo</h3>
                        <p class="text-muted small">Añade o edita los minijuegos.</p>

                        <div class="d-grid gap-2 mt-4">
                            <a href="juegos/listar.php" class="btn btn-outline-success btn-sm">Gestionar Catálogo</a>
                            <a href="juegos/alta.php" class="btn btn-success btn-sm text-white">
                                + Nuevo Juego
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 mx-auto">
                <div class="card h-100 shadow-sm border-0 card-hover">
                    <div class="card-body text-center p-4">
                        <div class="icon-circle bg-light-purple mb-3">
                            🤖
                        </div>
                        <h3 class="h4 text-playgo fw-bold">Inteligencia</h3>
                        <p class="text-muted small">Configura las respuestas del bot.</p>

                        <div class="d-grid gap-2 mt-4">
                            <a href="../chatbot/chatbot.php" class="btn btn-outline-dark btn-sm">Configurar Chatbot</a>
                            <button class="btn btn-secondary btn-sm disabled" disabled>Estadísticas (Pronto)</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <footer class="bg-white text-center py-4 mt-5 border-top">
        <p class="mb-0 fw-bold text-playgo">🎮 PLAYGO ADMIN</p>
        <small class="text-muted">&copy; <?php echo date('Y'); ?> - Panel de Control Interno</small>
    </footer>


</body>

</html>