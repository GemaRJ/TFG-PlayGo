<?php
// UBICACIÓN: /playgo/administrador/usuarios/alta.php

// 1. Configuración y Seguridad
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin(); 

$mensaje = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);
    $tipo_usuario = $_POST['tipo_usuario']; 

    // Comprobar duplicados
    $check = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    if(mysqli_num_rows($check) > 0){
        $error = "Ese correo electrónico ya está registrado.";
    } else {
        // Insertar nuevo usuario
        $sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario) VALUES ('$nombres','$correo','$clave','$tipo_usuario')";
        if(mysqli_query($conn, $sql)){
            $mensaje = "Usuario registrado correctamente.";
        } else {
            $error = "Error técnico: " . mysqli_error($conn);
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alta Usuario | PlayGo Admin</title>

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
                Gestión de Usuarios
            </div>
        </div>
    </nav>

    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">

                <div class="card shadow-sm border-0 rounded-4 animate-fade-in">
                    <div class="card-body p-5">

                        <div class="text-center mb-4">
                            <div class="icon-circle bg-light-blue mb-3"
                                style="width: 60px; height: 60px; font-size: 1.5rem;">
                                👤
                            </div>
                            <h2 class="fw-bold text-playgo">Nuevo Usuario</h2>
                            <p class="text-muted small">Registra un jugador o administrador manualmente</p>
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
                                <label class="form-label fw-bold small text-muted">NOMBRE COMPLETO</label>
                                <input type="text" name="nombres" class="form-control form-control-lg"
                                    placeholder="Ej: Gema Rodríguez" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fw-bold small text-muted">CORREO ELECTRÓNICO</label>
                                <input type="email" name="correo" class="form-control form-control-lg"
                                    placeholder="usuario@playgo.com" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fw-bold small text-muted">CONTRASEÑA TEMPORAL</label>
                                <input type="password" name="clave" class="form-control form-control-lg"
                                    placeholder="••••••••" required>
                            </div>

                            <div class="mb-4">
                                <label class="form-label fw-bold small text-muted">TIPO DE PERFIL</label>
                                <select name="tipo_usuario" class="form-select form-select-lg" required>
                                    <option value="" selected disabled>Selecciona el rol...</option>
                                    <option value="nino">🧸 Niño (Acceso Infantil)</option>
                                    <option value="adulto">🧠 Adulto (Acceso General)</option>
                                    <option value="administrador">🛡️ Administrador (Gestión)</option>
                                </select>
                            </div>

                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary btn-lg fw-bold"
                                    style="background-color: var(--playgo-blue); border: none;">
                                    Guardar Usuario
                                </button>
                                <a href="listar.php" class="btn btn-outline-secondary">
                                    Cancelar y Volver
                                </a>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="text-center mt-4">
                    <a href="../menu.php" class="text-decoration-none text-muted small">
                        ← Volver al Panel Principal
                    </a>
                </div>

            </div>
        </div>
    </div>


</body>

</html>