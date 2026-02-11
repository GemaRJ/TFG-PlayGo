<?php
// UBICACIÓN: /playgo/autenticacion/registro.php

require_once "../configuracion/conexion.php";

$mensaje = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);
    $tipo_usuario = $_POST['tipo_usuario']; 

    // Comprobar correo
    $check = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    if(mysqli_num_rows($check) > 0){
        $error = "Este correo ya está registrado en PlayGo.";
    } else {
        $sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario) 
                VALUES ('$nombres', '$correo', '$clave', '$tipo_usuario')";
        
        if(mysqli_query($conn, $sql)){
            $mensaje = "¡Cuenta creada con éxito!";
        } else {
            $error = "Error al crear el perfil. Inténtalo de nuevo.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro | PlayGo</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/login_registro.css">
</head>

<body class="bg-light-blue d-flex align-items-center min-vh-100 py-4">

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">

                <div class="card shadow-lg border-0 rounded-4 overflow-hidden animate-fade-in">
                    <div class="card-header-bar"></div>

                    <div class="card-body p-5">
                        <div class="text-center mb-4">
                            <h1 class="brand-title">Únete a PlayGo</h1>
                            <p class="text-muted small">Crea tu perfil y empieza la aventura</p>
                        </div>

                        <?php if($mensaje): ?>
                        <div class="alert alert-success text-center" role="alert">
                            <h4 class="alert-heading fs-5">✅ <?php echo $mensaje; ?></h4>
                            <hr>
                            <a href="login.php" class="btn btn-success btn-sm fw-bold">Ir a Iniciar Sesión</a>
                        </div>
                        <?php endif; ?>

                        <?php if($error): ?>
                        <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <span class="me-2">⚠️</span> <?php echo $error; ?>
                        </div>
                        <?php endif; ?>

                        <?php if(!$mensaje): // Solo mostrar formulario si no hay éxito ?>
                        <form method="POST">

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="nombres" name="nombres" placeholder="Nombre"
                                    required>
                                <label for="nombres">Nombre de Jugador</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="correo" name="correo" placeholder="correo"
                                    required>
                                <label for="correo">Correo Electrónico</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="clave" name="clave" placeholder="clave"
                                    required>
                                <label for="clave">Contraseña</label>
                            </div>

                            <div class="mb-4">
                                <label class="form-label fw-bold text-primary small">¿QUIÉN VA A JUGAR?</label>
                                <select class="form-select form-select-lg" name="tipo_usuario" required>
                                    <option value="" selected disabled>Selecciona tu perfil...</option>
                                    <option value="nino">🧸 Perfil Infantil</option>
                                    <option value="adulto">🧠 Perfil Adulto</option>
                                </select>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-lg fw-bold rounded-pill">
                                    ¡CREAR CUENTA!
                                </button>
                            </div>
                        </form>
                        <?php endif; ?>

                        <div class="text-center mt-4 pt-3 border-top">
                            <p class="mb-2">¿Ya tienes cuenta?</p>
                            <a href="login.php" class="text-decoration-none fw-bold text-primary">
                                Iniciar Sesión aquí
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

<script src="/playgo/chatbot/bot.js"></script>
</body>

</html>