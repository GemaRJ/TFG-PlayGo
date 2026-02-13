<?php
require_once "../configuracion/conexion.php";
session_start();

if (isset($_SESSION['id'])) {
    header("Location: " . ($_SESSION['tipo_usuario'] == 'administrador' ? "../administrador/menu.php" : "../panel.php"));
    exit;
}

$error = '';
$destino = isset($_GET['destino']) ? htmlspecialchars($_GET['destino']) : 'juegos';
$tipo_ticket = isset($_GET['tipo']) ? htmlspecialchars($_GET['tipo']) : '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = $_POST['clave'];
    $destino_post = $_POST['destino'];
    $tipo_post = $_POST['tipo_ticket'];

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
    } else { $error = "Correo o contraseña incorrectos."; }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Login | PlayGo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous">
    </script>

    <link rel="stylesheet" href="../assets/css/login_registro.css">
    <link rel="stylesheet" href="/playgo/chatbot/bot.css">
</head>

<body class="bg-light-blue d-flex align-items-center min-vh-100">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card shadow-lg p-5">
                    <h1 class="text-center">PlayGo</h1>
                    <?php if($error) echo "<div class='alert alert-danger'>$error</div>"; ?>
                    <form method="POST">
                        <input type="hidden" name="destino" value="<?php echo $destino; ?>">
                        <input type="hidden" name="tipo_ticket" value="<?php echo $tipo_ticket; ?>">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" name="correo" required>
                            <label>Correo</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" name="clave" required>
                            <label>Contraseña</label>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">¡ENTRAR!</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>