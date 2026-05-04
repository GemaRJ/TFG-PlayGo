<?php
require_once "../configuracion/conexion.php";
/** @var mysqli $conn */
$mensaje = '';
$error = '';
$registro_exitoso = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);


    $tipo_usuario = 'adulto';

    $check = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    if (mysqli_num_rows($check) > 0) {
        $error = "Este correo ya está registrado.";
    } else {
        $sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario) VALUES ('$nombres', '$correo', '$clave', '$tipo_usuario')";
        if (mysqli_query($conn, $sql)) {
            $mensaje = "¡Cuenta creada con éxito! Redirigiendo...";
            $registro_exitoso = true;
        } else {
            $error = "Error al crear el perfil.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PlayGo | Registro Adultos</title>
    <?php if ($registro_exitoso): ?>
        <meta http-equiv="refresh" content="2;url=login.php"><?php endif; ?>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap" rel="stylesheet">
    <link rel="icon" href="../assets/img/icono192-jugando-videojuegos.png?v=3" type="image/png">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(circle at center, #1e3a8a 0%, #0f172a 100%);
            font-family: 'Poppins', sans-serif;
            overflow: hidden;
            position: relative;
        }

        body::before {
            content: "";
            position: absolute;
            width: 200%;
            height: 200%;
            background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0));
            background-repeat: repeat;
            background-size: 200px 200px;
            animation: stars-move 100s linear infinite;
            opacity: 0.4;
        }

        @keyframes stars-move {
            from {
                transform: translateY(0);
            }

            to {
                transform: translateY(-50%);
            }
        }

        .glass-card {
            position: relative;
            z-index: 10;
            display: flex;
            width: 950px;
            height: 650px;
            background: rgba(255, 255, 255, 0.07);
            backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 40px;
            box-shadow: 0 0 40px rgba(0, 210, 255, 0.3);
        }

        .login-side {
            flex: 1;
            padding: 40px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .login-side form {
            margin-top: 20px;
        }

        .brand {
            font-size: 2rem;
            font-weight: 900;
            color: #00d2ff;
            margin-bottom: 5px;
        }

        .brand span {
            color: #fff;
            text-shadow: 0 0 10px #00d2ff;
        }

        .login-side h2 {
            margin-bottom: 5px;
        }

        .login-side p {
            opacity: 0.8;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        .input-group {
            position: relative;
            margin-bottom: 22px;
        }

        .input-group input {
            width: 100%;
            padding: 10px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            outline: none;
            color: white;
            font-family: 'Poppins';
        }

        .input-group label {
            position: absolute;
            left: 12px;
            top: -20px;
            font-size: 13px;
            color: #00d2ff;
        }

        .btn-space {
            width: 100%;
            padding: 14px;
            background: #00d2ff;
            border: none;
            border-radius: 12px;
            color: #0f172a;
            font-weight: 800;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(0, 210, 255, 0.5);
            transition: transform 0.2s;
        }

        .btn-space:hover {
            transform: scale(1.02);
        }

        .visual-side {
            flex: 1.2;
            position: relative;
        }

        #canvas-container {
            width: 100%;
            height: 100%;
        }

        .msg {
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 15px;
            text-align: center;
            font-size: 0.9rem;
        }

        .error {
            background: rgba(255, 0, 0, 0.2);
            border: 1px solid red;
            color: #ffcccc;
        }

        .success {
            background: rgba(0, 255, 0, 0.2);
            border: 1px solid #00ff00;
            color: #ccffcc;
        }

        .links {
            margin-top: 20px;
            text-align: center;
            font-size: 0.85rem;
            color: #ccc;
        }

        .links a {
            color: #00d2ff;
            text-decoration: none;
            font-weight: bold;
        }

        .logoPlayGo {
            margin-right: 10px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            filter: drop-shadow(0 0 8px rgba(0, 210, 255, 0.6));
            border: 2px solid #00d2ff;
            box-shadow: 0 0 12px rgba(0, 210, 255, 0.5);
            transition: all 0.3s ease;
        }

        .btn-space:hover {
            transform: scale(1.02);
        }

        .visual-side {
            flex: 1.2;
            position: relative;
        }

        #canvas-container {
            width: 100%;
            height: 100%;
        }

        .msg {
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 15px;
            text-align: center;
            font-size: 0.9rem;
        }

        .error {
            background: rgba(255, 0, 0, 0.2);
            border: 1px solid red;
            color: #ffcccc;
        }

        .success {
            background: rgba(0, 255, 0, 0.2);
            border: 1px solid #00ff00;
            color: #ccffcc;
        }

        .links {
            margin-top: 20px;
            text-align: center;
            font-size: 0.85rem;
            color: #ccc;
        }

        .links a {
            color: #00d2ff;
            text-decoration: none;
            font-weight: bold;
        }

        /* Estilo para el aviso legal */
        .aviso-privacidad {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            margin-top: 15px;
            line-height: 1.2;
        }
    </style>
</head>

<body>
    <div class="glass-card">
        <div class="login-side">
            <div class="brand" style="display: flex; align-items: center;">
                <img src="../assets/img/logoPlayGo.png" alt="PlayGo logo" class="logoPlayGo">
                <div>PLAY<span>GO</span></div>
            </div>
            <h2>Registro de Adultos</h2>
            <p>Crea una cuenta para gestionar tus desafíos.</p>

            <?php if ($error)
                echo "<div class='msg error'>$error</div>"; ?>
            <?php if ($mensaje)
                echo "<div class='msg success'>$mensaje</div>"; ?>

            <form method="POST">
                <input type="hidden" name="tipo_usuario" value="adulto">

                <div class="input-group"><input type="text" name="nombres" required><label>Nombre Completo</label></div>
                <div class="input-group"><input type="email" name="correo" id="emailField" required><label>Correo
                        Electrónico</label></div>
                <div class="input-group"><input type="password" name="clave" id="passField"
                        required><label>Contraseña</label></div>

                <div style="display: flex; align-items: center; margin-bottom: 22px;">
                    <input type="checkbox" name="privacidad" id="privacidad" required
                        style="width: auto; margin-right: 10px; cursor: pointer;">
                    <label for="privacidad" style="font-size: 0.85rem; color: #ccc; cursor: pointer;">Acepto la Política
                        de privacidad</label>
                </div>

                <button type="submit" class="btn-space">¡CREAR MI CUENTA!</button>

                <p class="aviso-privacidad">
                    * Al registrarte confirmas ser mayor de edad. Los menores deben acceder a través del <b>Modo
                        Cadete</b> en la página principal para proteger su privacidad.
                </p>

                <div class="links">
                    ¿Ya tienes cuenta? <a href="login.php">Entrar aquí</a>
                    <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 15px 0;">
                    <a href="../index.php" style="font-size: 0.8rem; opacity: 0.7; display: block; margin-top: 10px;">
                        ← Volver al inicio
                    </a>
                </div>
            </form>
        </div>
        <div class="visual-side">
            <div id="canvas-container"></div>
        </div>
    </div>
    <script src="../assets/js/registro-animation.js"></script>
    <script src="../chatbot/bot.js"></script>
</body>

</html>