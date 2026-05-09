<?php
// 1. CONEXIÓN Y LÓGICA
require_once "../configuracion/conexion.php";
session_start();
/** @var mysqli $conn */

// Si ya está logueado y NO es un invitado, redirigir
if (isset($_SESSION['id']) && isset($_SESSION['tipo_usuario']) && $_SESSION['tipo_usuario'] !== 'invitado') {
    header("Location: " . ($_SESSION['tipo_usuario'] == 'administrador' ? "../administrador/menu.php" : "../panel.php"));
    exit;
}

$error = '';
$destino = isset($_GET['destino']) ? htmlspecialchars($_GET['destino']) : 'juegos';
$tipo_ticket = isset($_GET['tipo']) ? htmlspecialchars($_GET['tipo']) : '';

// 2. PROCESAR LOGIN
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = $_POST['clave'];

    $destino_post = isset($_POST['destino']) ? $_POST['destino'] : '';
    $tipo_post = isset($_POST['tipo_ticket']) ? $_POST['tipo_ticket'] : '';

    $res = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    $usuario = mysqli_fetch_assoc($res);

    if ($usuario && password_verify($clave, $usuario['clave'])) {

        $_SESSION['id'] = $usuario['usuario_id'];
        $_SESSION['nombre'] = $usuario['nombres'];
        $_SESSION['tipo_usuario'] = $usuario['tipo_usuario'];

        if ($destino_post === 'soporte') {
            $redir = "../soporte.php" . ($tipo_post ? "?tipo=$tipo_post" : "");
        } else {
            $redir = ($usuario['tipo_usuario'] == 'administrador') ? "../administrador/menu.php" : "../panel.php";
        }

        echo "<script>
            localStorage.setItem('usuario_id', '" . $usuario['usuario_id'] . "');
            localStorage.setItem('usuario_nombre', '" . $usuario['nombres'] . "');
            window.location.href = '$redir';
        </script>";
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
    <script>
        if (localStorage.getItem('playgo-tema') === 'dia') {
            document.documentElement.classList.add('modo-dia');
        }
    </script>
    <link rel="stylesheet" href="/playgo/utils/theme.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PlayGo | Space Login</title>

    <link rel="stylesheet" href="../assets/css/login_registro.css">
    <link rel="stylesheet" href="../utils/lang_selector.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <link rel="icon" href="../assets/img/icono192-jugando-videojuegos.png?v=3" type="image/png">
    <style>
        /* ESTILOS SPACE - LOGIN AZUL */
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
            /* Por defecto: El azul espacial original */
            background: radial-gradient(circle at center, #1e3a8a 0%, #0f172a 100%);
            font-family: 'Poppins', sans-serif;
            overflow: hidden;
            position: relative;
            transition: background 0.5s ease;
        }

        /* --- CUANDO SE ACTIVA EL MODO DÍA (Sincronizado con Registro) --- */
        html.modo-dia body {
            background: radial-gradient(circle at center, #f0f2f5 0%, #dbeafe 100%);
        }

        html.modo-dia body::before {
            opacity: 0.1;
        }

        /* Tarjeta y textos en modo día */
        html.modo-dia .glass-card {
            background: rgba(255, 255, 255, 0.5);
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        html.modo-dia .login-side {
            color: #1e3a8a;
        }

        html.modo-dia .login-side h2,
        html.modo-dia .login-side p,
        html.modo-dia .links span {
            color: #1e3a8a;
        }

        html.modo-dia .brand span {
            color: #005bea;
            text-shadow: none;
        }

        /* Mejora de inputs en modo día */
        html.modo-dia .input-group input {
            background: rgba(0, 0, 0, 0.05);
            border: 1.5px solid rgba(0, 0, 0, 0.1);
            color: #111827;
        }

        html.modo-dia .input-group input:focus {
            border-color: #00d2ff;
            background: white;
        }

        /* Botón y links en modo día */
        html.modo-dia .btn-space {
            background: #0099bb;
            color: white;
            box-shadow: 0 5px 15px rgba(0, 153, 187, 0.3);
        }

        html.modo-dia .links a {
            color: #007791;
        }

        html.modo-dia hr {
            border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
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
            height: 600px;
            /* Un poco más alto para el link */
            background: rgba(255, 255, 255, 0.07);
            backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 40px;
            box-shadow: 0 0 40px rgba(0, 210, 255, 0.3);
        }

        .login-side {
            flex: 1;
            padding: 50px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .login-side form {
            margin-top: 30px;
        }

        .brand {
            font-size: 2rem;
            font-weight: 900;
            color: #00d2ff;
            margin-bottom: 10px;
        }

        .brand span {
            color: #fff;
            text-shadow: 0 0 10px #00d2ff;
        }

        .login-side h2 {
            margin-bottom: 5px;
        }

        .login-side p {
            margin-bottom: 0;
            opacity: 0.8;
            font-size: 0.9rem;
        }

        .input-group {
            position: relative;
            margin-bottom: 25px;
        }

        .input-group input {
            width: 100%;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            outline: none;
            color: white;
        }

        .input-group label {
            position: absolute;
            left: 12px;
            top: -22px;
            font-size: 14px;
            color: #00d2ff;
        }

        .btn-space {
            width: 100%;
            padding: 15px;
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

        .error-msg {
            background: rgba(255, 0, 0, 0.2);
            border: 1px solid red;
            color: #ffcccc;
            padding: 10px;
            border-radius: 8px;
            margin-top: 15px;
            font-size: 0.9em;
            text-align: center;
        }

        /* ESTILO PARA EL LINK DE REGISTRO */
        .links {
            margin-top: 25px;
            text-align: center;
            font-size: 0.9rem;
            color: #ccc;
        }

        .links a {
            color: #00d2ff;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }

        .links a:hover {
            color: #fff;
            text-shadow: 0 0 10px #00d2ff;
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

        .visual-side {
            flex: 1.2;
            position: relative;
        }

        #canvas-container {
            width: 100%;
            height: 100%;
        }
    </style>
</head>

<div class="glass-card">
    <div class="login-side">
        <div class="brand" style="display: flex; align-items: center;">
            <img src="../assets/img/logoPlayGo.png" alt="PlayGo logo" class="logoPlayGo">
            <div>PLAY<span>GO</span></div>
        </div>
        <h2 data-key="login_title">Bienvenido</h2>
        <p data-key="login_subtitle">Tu aventura espacial de juegos comienza aquí.</p>

        <?php if ($error): ?>
            <div class='error-msg'>⚠️ <?php echo $error; ?></div>
        <?php endif; ?>

        <form method="POST">
            <input type="hidden" name="destino" value="<?php echo $destino; ?>">
            <input type="hidden" name="tipo_ticket" value="<?php echo $tipo_ticket; ?>">

            <div class="input-group">
                <input type="email" name="correo" id="emailField" required placeholder=" ">
                <label data-key="login_email">Correo Electrónico</label>
            </div>

            <div class="input-group">
                <input type="password" name="clave" id="passField" required placeholder=" ">
                <label data-key="login_password">Contraseña</label>
            </div>

            <button type="submit" class="btn-space" data-key="login_btn">¡ENTRAR!</button>

            <div class="links">
                <span data-key="login_new">¿Nuevo en la nave?</span> <br>
                <a href="registro.php" data-key="login_create">Crea tu cuenta aquí</a>
                <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">

                <a href="../index.php" style="font-size: 0.8rem; opacity: 0.7;">
                    <i class="bi bi-arrow-left"></i> <span data-key="login_back">Volver al inicio</span>
                </a>
            </div>
        </form>
    </div>

    <div class="visual-side">
        <div id="canvas-container"></div>
    </div>
</div>

<script src="../assets/js/login-animation.js"></script>
<script src="../chatbot/bot.js"></script>
<script src="../utils/idiomas.js"></script>
<script src="../utils/traductor.js"></script>
<!-- Botón flotante día/noche -->
<button id="btn-tema" class="btn-tema" aria-label="Cambiar a modo día">
    <span class="icon-luna">🌙</span>
    <span class="icon-sol">☀️</span>
</button>
<script src="/playgo/utils/theme.js"></script>

</body>

</html>