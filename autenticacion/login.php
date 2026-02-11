<?php
// UBICACIÓN: /playgo/autenticacion/login.php

require_once "../configuracion/conexion.php";
session_start();

$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = $_POST['clave'];

    $res = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    $usuario = mysqli_fetch_assoc($res);

    if ($usuario && password_verify($clave, $usuario['clave'])) {
        $_SESSION['id'] = $usuario['usuario_id']; 
        $_SESSION['nombre'] = $usuario['nombres']; 
        $_SESSION['tipo_usuario'] = $usuario['tipo_usuario'];

        if ($usuario['tipo_usuario'] == 'administrador') {
            header("Location: ../administrador/menu.php");
        } else {
            header("Location: ../panel.php");
        }
        exit;
    } else {
        $error = "Correo o contraseña incorrectos.";
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | PlayGo</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/login_registro.css">
</head>

<body class="bg-light-blue d-flex align-items-center min-vh-100">

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-5">

                <div class="card shadow-lg border-0 rounded-4 overflow-hidden animate-fade-in">
                    <div class="card-header-bar"></div>
                    <div class="card-body p-5">
                        <div class="text-center mb-4">
                            <h1 class="brand-title"> PlayGo</h1>
                            <p class="text-muted small">¡Bienvenido de nuevo, jugador!</p>
                        </div>

                        <?php if($error): ?>
                        <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <span class="me-2">⚠️</span>
                            <div><?php echo $error; ?></div>
                        </div>
                        <?php endif; ?>

                        <form method="POST">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="correo" name="correo"
                                    placeholder="name@example.com" required>
                                <label for="correo">Correo Electrónico</label>
                            </div>

                            <div class="form-floating mb-4">
                                <input type="password" class="form-control" id="clave" name="clave"
                                    placeholder="Password" required>
                                <label for="clave">Contraseña</label>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-lg fw-bold rounded-pill">
                                    ¡ENTRAR A JUGAR!
                                </button>
                            </div>
                        </form>

                        <div class="text-center mt-4 pt-3 border-top">
                            <p class="mb-2">¿No tienes cuenta?</p>
                            <a href="registro.php" class="text-decoration-none fw-bold text-primary">
                                Crear cuenta nueva
                            </a>
                            <div class="mt-3">
                                <a href="../index.php" class="text-muted small text-decoration-none">
                                    ← Volver al inicio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-4 text-muted small">
                    &copy; <?php echo date('Y'); ?> PlayGo Team
                </div>

            </div>
        </div>
    </div>
 <script src="/playgo/chatbot/bot.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>