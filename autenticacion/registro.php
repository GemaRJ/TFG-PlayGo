<?php
require_once "../configuracion/conexion.php";
$mensaje = '';
$error = '';
$registro_exitoso = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);
    $tipo_usuario = $_POST['tipo_usuario'];

    $check = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    if (mysqli_num_rows($check) > 0) {
        $error = "Este correo ya está registrado.";
    } else {
        $sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario) VALUES ('$nombres', '$correo', '$clave', '$tipo_usuario')";
        if (mysqli_query($conn, $sql)) {
            $mensaje = "¡Cuenta creada con éxito!";
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
    <title>PlayGo | Registro Espacial</title>
    <?php if ($registro_exitoso): ?>
        <meta http-equiv="refresh" content="2;url=login.php"><?php endif; ?>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <style>
        /* ESTILOS CLONADOS EXACTAMENTE DEL LOGIN */
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

        .input-group input,
        .input-group select {
            width: 100%;
            padding: 10px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            outline: none;
            color: white;
            font-family: 'Poppins';
        }

        .input-group select option {
            background: #0f172a;
            color: white;
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
    </style>
</head>

<body>
    <div class="glass-card">
        <div class="login-side">
            <div class="brand">PLAY<span>GO</span></div>
            <h2>Únete a la misión</h2>
            <p>Crea tu perfil y empieza la aventura.</p>
            <?php if ($error) echo "<div class='msg error'>$error</div>"; ?>
            <?php if ($mensaje) echo "<div class='msg success'>$mensaje</div>"; ?>
            <form method="POST">
                <div class="input-group"><input type="text" name="nombres" required><label>Nombre de Jugador</label>
                </div>
                <div class="input-group"><input type="email" name="correo" id="emailField" required><label>Correo
                        Electrónico</label></div>
                <div class="input-group"><input type="password" name="clave" id="passField"
                        required><label>Contraseña</label></div>
                <div class="input-group">
                    <select name="tipo_usuario" required>
                        <option value="nino">🧸 Perfil Infantil</option>
                        <option value="adulto">🧠 Perfil Adulto</option>
                    </select>
                    <label>Tipo de Perfil</label>
                </div>
                <button type="submit" class="btn-space">¡CREAR CUENTA!</button>
                <div class="links">¿Ya eres parte de la nave? <a href="login.php">Entrar aquí</a></div>
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