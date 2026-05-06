<?php
// UBICACIÓN: /playgo/administrador/usuarios/alta.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin(); 

$mensaje = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave_raw = $_POST['clave'];
    $tipo_usuario = $_POST['tipo_usuario']; 

    if (strlen(trim($clave_raw)) < 8) {
        $error = "La contraseña debe tener al menos 8 caracteres.";
    } else {
        $clave = password_hash($clave_raw, PASSWORD_DEFAULT);
        $check = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
        if(mysqli_num_rows($check) > 0){
            $error = "Esa identidad ya existe en la base de datos.";
        } else {
            $sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario) VALUES ('$nombres','$correo','$clave','$tipo_usuario')";
            if(mysqli_query($conn, $sql)){
                $mensaje = "Nuevo recluta registrado en la tripulación.";
            } else {
                $error = "Fallo en la conexión: " . mysqli_error($conn);
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reclutamiento | PlayGo Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
    <style>
        .form-container {
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
        }
        
        .msg-alerta {
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 25px;
            text-align: center;
            font-weight: 600;
        }
        .success-space { background: rgba(0, 210, 255, 0.15); border: 1px solid #00d2ff; color: #00d2ff; }
        .error-space { background: rgba(255, 68, 68, 0.15); border: 1px solid #ff4444; color: #ff4444; }

        .form-group { margin-bottom: 20px; }
        
        .form-label-space {
            display: block;
            color: #00d2ff;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .input-space {
            width: 100%;
            padding: 12px 15px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: white;
            font-family: 'Poppins';
            transition: 0.3s;
        }

        .input-space:focus {
            outline: none;
            border-color: #00d2ff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 15px rgba(0, 210, 255, 0.2);
        }

        select.input-space option {
            background: #0f172a;
            color: white;
        }

        .btn-submit-space {
            width: 100%;
            padding: 15px;
            background: #00d2ff;
            color: #0f172a;
            border: none;
            border-radius: 12px;
            font-weight: 800;
            text-transform: uppercase;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 10px;
        }

        .btn-submit-space:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(0, 210, 255, 0.4);
            background: #fff;
        }
    </style>
</head>
<body class="portal-galactico">

    <main class="admin-main">
        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> ADMIN</div>
            <h1>Alta de Tripulación</h1>
            <p>Registra manualmente nuevos accesos a la nave.</p>
        </div>

        <div class="card-comando form-container">
            <?php if($mensaje): ?>
                <div class="msg-alerta success-space">✔ <?php echo $mensaje; ?></div>
            <?php endif; ?>

            <?php if($error): ?>
                <div class="msg-alerta error-space">⚠ <?php echo $error; ?></div>
            <?php endif; ?>

            <form method="POST">
                <div class="form-group">
                    <label class="form-label-space">Nombre del Recluta</label>
                    <input type="text" name="nombres" class="input-space" placeholder="Nombre completo" required>
                </div>

                <div class="form-group">
                    <label class="form-label-space">Identificador (Correo)</label>
                    <input type="email" name="correo" class="input-space" placeholder="usuario@playgo.com" required>
                </div>

                <div class="form-group">
                    <label class="form-label-space">Clave de Acceso</label>
                    <input type="password" name="clave" class="input-space" placeholder="••••••••" required minlength="8">
                </div>

                <div class="form-group">
                    <label class="form-label-space">Rango de Usuario</label>
                    <select name="tipo_usuario" class="input-space" required>
                        <option value="" selected disabled>Selecciona rango...</option>
                        <option value="nino">🧸 Explorador Infantil (Niño)</option>
                        <option value="adulto">🧠 Explorador Senior (Adulto)</option>
                        <option value="administrador">🛡️ Comandante (Admin)</option>
                    </select>
                </div>

                <button type="submit" class="btn-submit-space">Confirmar Registro</button>
            </form>
        </div>

        <div style="margin-top: 30px;">
            <a href="../menu.php" class="btn-logout" style="border-color: #00d2ff; color: #00d2ff;">
                ← Regresar a la Central
            </a>
        </div>
    </main>

</body>
</html>