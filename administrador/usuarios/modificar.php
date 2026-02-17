<?php
// UBICACIÓN: /playgo/administrador/usuarios/modificar.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin();

$id = intval($_GET['id'] ?? 0);
$mensaje = '';
$error = '';

// 1. PROCESAR EL FORMULARIO SI SE HA ENVIADO
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $rol = $_POST['tipo_usuario']; // nino, adulto o administrador

    // Actualizamos los datos
    $sql = "UPDATE usuario SET nombres='$nombres', correo='$correo', tipo_usuario='$rol' WHERE usuario_id=$id";
    
    if(mysqli_query($conn, $sql)) {
        $mensaje = "Datos actualizados correctamente.";
    } else {
        $error = "Error al actualizar: " . mysqli_error($conn);
    }
}

// 2. OBTENER LOS DATOS ACTUALES DEL USUARIO
$res = mysqli_query($conn, "SELECT * FROM usuario WHERE usuario_id=$id");
$u = mysqli_fetch_assoc($res);

// Si no existe el usuario, cortamos la ejecución
if(!$u) {
    die("<div class='alert alert-danger m-5'>Error: Jugador no encontrado. <a href='listar.php'>Volver</a></div>");
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Perfil | PlayGo Admin</title>

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
                Edición de Perfiles
            </div>
        </div>
    </nav>

    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">

                <div class="card shadow-sm border-0 rounded-4 animate-fade-in">
                    <div class="card-body p-5">

                        <div class="text-center mb-4">
                            <div class="badge bg-warning text-dark mb-2 px-3 py-2 rounded-pill shadow-sm">
                                EDITANDO ID #<?php echo $id; ?>
                            </div>
                            <h2 class="fw-bold text-playgo">Editar Perfil</h2>
                            <p class="text-muted small">Modifica los datos del jugador</p>
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
                                <label class="form-label fw-bold small text-muted">NOMBRE DEL JUGADOR</label>
                                <input type="text" name="nombres" class="form-control form-control-lg"
                                    value="<?php echo htmlspecialchars($u['nombres']); ?>" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fw-bold small text-muted">CORREO ELECTRÓNICO</label>
                                <input type="email" name="correo" class="form-control form-control-lg"
                                    value="<?php echo htmlspecialchars($u['correo']); ?>" required>
                            </div>

                            <div class="mb-4">
                                <label class="form-label fw-bold small text-muted">TIPO DE PERFIL</label>
                                <select name="tipo_usuario" class="form-select form-select-lg" required>
                                    <option value="nino"
                                        <?php echo ($u['tipo_usuario'] == 'nino') ? 'selected' : ''; ?>>
                                        🧸 Niño
                                    </option>
                                    <option value="adulto"
                                        <?php echo ($u['tipo_usuario'] == 'adulto') ? 'selected' : ''; ?>>
                                        🧠 Adulto
                                    </option>
                                    <option value="administrador"
                                        <?php echo ($u['tipo_usuario'] == 'administrador') ? 'selected' : ''; ?>>
                                        🛡️ Administrador
                                    </option>
                                </select>
                            </div>

                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary btn-lg fw-bold"
                                    style="background-color: var(--playgo-blue); border: none;">
                                    💾 Guardar Cambios
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
                        ← Volver al Listado de Usuarios
                    </a>
                </div>

            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>