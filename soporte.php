<?php

/**
 * SOPORTE TÉCNICO PLAYGO - VERSIÓN FINAL BLINDADA
 */
require_once "configuracion/conexion.php";
require_once "configuracion/sesiones.php";

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// 1. DEFINICIÓN DE VARIABLE DE RESPALDO (Crucial para que Formspree no falle)
$correo_remitente = isset($_SESSION['correo']) ? $_SESSION['correo'] : 'invitado@playgo.com';

$tipo_pre = isset($_GET['tipo']) ? htmlspecialchars($_GET['tipo']) : '';
$asunto_auto = "";
switch ($tipo_pre) {
    case 'solicitud_baja_usuario':
        $asunto_auto = "Solicitud de baja de cuenta";
        break;
    case 'fallo_seguridad':
        $asunto_auto = "Reporte de vulnerabilidad detectada";
        break;
    case 'error_ranking':
        $asunto_auto = "Error en la puntuación del ranking";
        break;
    case 'incidencia_juego':
        $asunto_auto = "Problema técnico en juego";
        break;
    case 'error_alta_usuario':
        $asunto_auto = "Error en el proceso de registro";
        break;
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
    <title>Soporte Galáctico | PlayGo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link
        href="https://fonts.googleapis.com/css2?family= Orbitron:wght@400;700&family=Inter:wght@300;400;600&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="assets/css/soporte.css?v=<?php echo time(); ?>">
</head>

<body>

    <div class="soporte-card">
        <h2>📩 Ayuda PlayGo</h2>
        <form id="formSoporte" method="POST">
            <input type="hidden" name="email" value="<?php echo $correo_remitente; ?>">
            <input type="hidden" name="_subject" value="PlayGo Soporte: <?php echo $asunto_auto; ?>">

            <label for="tipo">¿Qué tipo de mensaje es?</label>
            <select name="tipo" id="tipo" required>
                <option value="queja" <?php echo ($tipo_pre == 'queja') ? 'selected' : ''; ?>>😡 Queja</option>

                <option value="sugerencia" <?php echo ($tipo_pre == 'sugerencia') ? 'selected' : ''; ?>>💡 Sugerencia
                </option>

                <option value="incidencia_juego" <?php echo ($tipo_pre == 'incidencia_juego') ? 'selected' : ''; ?>>🕹️
                    Error en Juego</option>

                <option value="fallo_seguridad" <?php echo ($tipo_pre == 'fallo_seguridad') ? 'selected' : ''; ?>>🛡️
                    Fallo de Seguridad</option>

                <option value="problema_registro" <?php echo ($tipo_pre == 'problema_registro') ? 'selected' : ''; ?>>👤
                    Problema Registro</option>

                <option value="solicitud_baja" <?php echo ($tipo_pre == 'solicitud_baja') ? 'selected' : ''; ?>>📉
                    Solicitud de Baja</option>

                <option value="problema_ranking" <?php echo ($tipo_pre == 'problema_ranking') ? 'selected' : ''; ?>>🏆
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
                        text: 'Ticket guardado y alerta enviada al administrador.',
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