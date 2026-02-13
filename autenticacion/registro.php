<?php
// UBICACIÓN: /playgo/autenticacion/registro.php
require_once "../configuracion/conexion.php";

$mensaje = '';
$error = '';
$registro_exitoso = false; 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // --- TU LÓGICA ORIGINAL ---
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);
    $tipo_usuario = $_POST['tipo_usuario']; 

    $check = mysqli_query($conn, "SELECT * FROM usuario WHERE correo='$correo'");
    
    if(mysqli_num_rows($check) > 0){
        $error = "Este correo ya está registrado en PlayGo.";
    } else {
        $sql = "INSERT INTO usuario (nombres, correo, clave, tipo_usuario) 
                VALUES ('$nombres', '$correo', '$clave', '$tipo_usuario')";
        
        if(mysqli_query($conn, $sql)){
            $mensaje = "¡Cuenta creada con éxito!";
            $registro_exitoso = true; 
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
    <title>Registro | PlayGo Space</title>

    <?php if($registro_exitoso): ?>
        <meta http-equiv="refresh" content="2;url=login.php">
    <?php endif; ?>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="../assets/css/registro.css">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>

    <div class="glass-card">
        <div class="login-side">
            <div class="brand">PLAY<span>GO</span></div>
            <h2>Únete a la misión</h2>
            <p>Crea tu perfil y empieza la aventura.</p>

            <?php if($error): ?> 
                <div class="msg error">⚠️ <?php echo $error; ?></div> 
            <?php endif; ?>
            
            <?php if($mensaje): ?> 
                <div class="msg success">✅ <?php echo $mensaje; ?></div>
                <p style="text-align: center; color: #00d2ff; font-size: 0.8rem; margin-top:10px;">
                    Despegando hacia el login...
                </p>
            <?php endif; ?>

            <?php if(!$mensaje): ?>
            <form method="POST">
                
                <div class="input-group">
                    <input type="text" name="nombres" required placeholder=" ">
                    <label>Nombre de Jugador</label>
                </div>

                <div class="input-group">
                    <input type="email" name="correo" required placeholder=" ">
                    <label>Correo Electrónico</label>
                </div>
                
                <div class="input-group">
                    <input type="password" name="clave" required placeholder=" ">
                    <label>Contraseña</label>
                </div>

                <div class="input-group">
                    <select name="tipo_usuario" required>
                        <option value="" selected disabled hidden></option> 
                        <option value="nino">🧸 Perfil Infantil</option>
                        <option value="adulto">🧠 Perfil Adulto</option>
                    </select>
                    <label>¿Quién va a jugar?</label>
                </div>
                
                <button type="submit" class="btn-space">¡CREAR CUENTA!</button>
                
                <div class="links">
                    ¿Ya tienes cuenta? <br>
                    <a href="login.php">Iniciar Sesión aquí</a>
                </div>
            </form>
            <?php endif; ?>
        </div>

        <div class="visual-side">
            <div id="canvas-container"></div>
        </div>
    </div>

    <script src="../assets/js/registro-animation.js"></script>

</body>
</html>