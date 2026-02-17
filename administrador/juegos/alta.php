<?php
// UBICACIÓN: /playgo/administrador/juegos/alta.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin();

$mensaje = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $ruta = mysqli_real_escape_string($conn, $_POST['ruta']);
    $categoria = $_POST['categoria']; 

    // Insertar en la base de datos
    $sql = "INSERT INTO juegos (nombre, ruta, categoria, activo) VALUES ('$nombre', '$ruta', '$categoria', 1)";
    
    if(mysqli_query($conn, $sql)){
        $mensaje = "¡Juego registrado con éxito en el catálogo!";
    } else {
        $error = "Error al registrar: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alta Juego | PlayGo Admin</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
</head>

<body class="bg-light">

    <nav class="navbar navbar-expand-lg navbar-dark bg-playgo shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="../menu.php">
                <span>🎮</span> Admin PlayGo
            </a>
            <div class="text-white small">
                Gestión de Contenido
            </div>
        </div>
    </nav>

    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">

                <div class="card shadow-sm border-0 rounded-4 animate-fade-in">
                    <div class="card-body p-5">

                        <div class="text-center mb-4">
                            <div class="icon-circle bg-light-green mb-3"
                                style="width: 65px; height: 65px; font-size: 1.8rem;">
                                🕹️
                            </div>
                            <h2 class="fw-bold text-playgo">Nuevo Juego</h2>
                            <p class="text-muted small">Añadir contenido al catálogo</p>
                        </div>

                        <?php if($mensaje): ?>
                        <div class="alert alert-success d-flex align-items-center" role="alert">
                            <span class="me-2">✅</span>
                            <div><?php echo $mensaje; ?></div>
                        </div>
                        <?php endif; ?>

                        <?php if($error): ?>
                        <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <span class="me-2">⚠️</span>
                            <div><?php echo $error; ?></div>
                        </div>
                        <?php endif; ?>

                        <form method="POST">

                            <div class="mb-3">
                                <label class="form-label fw-bold small text-muted">TÍTULO DEL JUEGO</label>
                                <input type="text" name="nombre" class="form-control form-control-lg"
                                    placeholder="Ej: Memory Infantil" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fw-bold small text-muted">NOMBRE DE LA CARPETA (RUTA)</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light">📂</span>
                                    <input type="text" name="ruta" class="form-control form-control-lg"
                                        placeholder="Ej: memory" required>
                                </div>
                                <div class="form-text small">
                                    Nombre exacto de la carpeta en <em>/juegos/</em>
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label fw-bold small text-muted">PÚBLICO OBJETIVO</label>
                                <select name="categoria" class="form-select form-select-lg" required>
                                    <option value="" selected disabled>Selecciona categoría...</option>
                                    <option value="ninos">🧸 Niños (Infantil)</option>
                                    <option value="adultos">🧠 Adultos (Mayores)</option>
                                </select>
                            </div>

                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-success btn-lg fw-bold"
                                    style="background-color: #27ae60; border: none;">
                                    Registrar Juego
                                </button>
                                <a href="listar.php" class="btn btn-outline-secondary">
                                    Cancelar
                                </a>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="text-center mt-4">
                    <a href="listar.php" class="text-decoration-none text-muted small">
                        ← Volver al Catálogo de Juegos
                    </a>
                </div>

            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>