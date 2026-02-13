<?php

require_once "configuracion/conexion.php";
require_once "configuracion/sesiones.php";

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$tipo_pre = isset($_GET['tipo']) ? htmlspecialchars($_GET['tipo']) : '';
$asunto_auto = "";
switch($tipo_pre) {
    case 'solicitud_baja_usuario': $asunto_auto = "Solicitud de baja de cuenta"; break;
    case 'fallo_seguridad': $asunto_auto = "Reporte de vulnerabilidad detectada"; break;
    case 'error_ranking': $asunto_auto = "Error en la puntuación del ranking"; break;
    case 'incidencia_juego': $asunto_auto = "Problema técnico en juego"; break;
    case 'error_alta_usuario': $asunto_auto = "Error en el proceso de registro"; break;
}

$enviar_email_js = false; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tipo = mysqli_real_escape_string($conn, $_POST['tipo']);
    $asunto = mysqli_real_escape_string($conn, $_POST['asunto']);
    $mensaje = mysqli_real_escape_string($conn, $_POST['mensaje']);
    $usuario_id = isset($_SESSION['id']) ? $_SESSION['id'] : "NULL";

    $sql = "INSERT INTO incidencias (usuario_id, tipo, asunto, mensaje, estado) 
            VALUES ($usuario_id, '$tipo', '$asunto', '$mensaje', 'pendiente')";

    if (mysqli_query($conn, $sql)) {
        $enviar_email_js = true; 
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soporte Técnico | PlayGo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="assets/css/soporte.css">
</head>

<body>
    <div class="soporte-card">
        <h2>📩 Ayuda PlayGo</h2>
        <form id="formSoporte" method="POST">
            <input type="hidden" name="email" value="soporte.ayuda.playgo@gmail.com">

            <label>¿Qué tipo de mensaje es?</label>
            <select name="tipo" id="tipo" required>
                <option value="queja" <?php echo ($tipo_pre == 'queja') ? 'selected' : ''; ?>>😡 Queja</option>
                <option value="sugerencia" <?php echo ($tipo_pre == 'sugerencia') ? 'selected' : ''; ?>>💡 Sugerencia
                </option>
                <option value="incidencia_juego" <?php echo ($tipo_pre == 'incidencia_juego') ? 'selected' : ''; ?>>🕹️
                    Error en Juego</option>
                <option value="fallo_seguridad" <?php echo ($tipo_pre == 'fallo_seguridad') ? 'selected' : ''; ?>>🛡️
                    Fallo de Seguridad</option>
                <option value="error_alta_usuario" <?php echo ($tipo_pre == 'error_alta_usuario') ? 'selected' : ''; ?>>
                    👤 Problema Registro</option>
                <option value="solicitud_baja_usuario"
                    <?php echo ($tipo_pre == 'solicitud_baja_usuario') ? 'selected' : ''; ?>>📉 Solicitud de Baja
                </option>
                <option value="error_ranking" <?php echo ($tipo_pre == 'error_ranking') ? 'selected' : ''; ?>>🏆
                    Problema Ranking</option>
            </select>

            <label>Asunto breve</label>
            <input type="text" name="asunto" value="<?php echo $asunto_auto; ?>" placeholder="Ej: No carga el juego..."
                required>

            <label>Cuéntanos los detalles</label>
            <textarea name="mensaje" rows="4" placeholder="Describe tu problema aquí..." required></textarea>

            <button type="submit">ENVIAR TICKET</button>
            <a href="index.php" class="volver-link">Cancelar y volver al inicio</a>
        </form>
    </div>

    <script>
    <?php if ($enviar_email_js): ?>
    // Enviar a Formspree usando tu ID real: mkovjpda
    fetch("https://formspree.io/f/mkovjpda", {
            method: "POST",
            body: new FormData(document.getElementById("formSoporte")),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function() {
            Swal.fire({
                title: '¡Recibido!',
                text: 'Ticket guardado en base de datos y alerta enviada al correo.',
                icon: 'success',
                timer: 2500,
                showConfirmButton: false
            }).then(function() {
                window.location.href = 'index.php';
            });
        });
    <?php endif; ?>
    </script>
</body>

</html>