<?php
/**
 * SOPORTE TÉCNICO PLAYGO - VERSIÓN FINAL UNIFICADA
 */
require_once "configuracion/conexion.php";
require_once "configuracion/sesiones.php";

// SOLUCIÓN AL ERROR DE TU IMAGEN: Evita el "Notice: session_start()" duplicado
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// 1. CAPTURAR DATOS DE LA URL
$tipo_pre = isset($_GET['tipo']) ? htmlspecialchars($_GET['tipo']) : '';

// 2. LÓGICA DE ASUNTO AUTOMÁTICO
$asunto_auto = "";
switch($tipo_pre) {
    case 'solicitud_baja_usuario': $asunto_auto = "Solicitud de baja de cuenta"; break;
    case 'fallo_seguridad': $asunto_auto = "Reporte de vulnerabilidad detectada"; break;
    case 'error_ranking': $asunto_auto = "Error en la puntuación del ranking"; break;
    case 'incidencia_juego': $asunto_auto = "Problema técnico en juego"; break;
    case 'error_alta_usuario': $asunto_auto = "Error en el proceso de registro"; break;
}

$mensaje_js = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tipo = mysqli_real_escape_string($conn, $_POST['tipo']);
    $asunto = mysqli_real_escape_string($conn, $_POST['asunto']);
    $mensaje = mysqli_real_escape_string($conn, $_POST['mensaje']);
    
    // Usamos 'id' que es tu clave de sesión en login.php
    $usuario_id = isset($_SESSION['id']) ? $_SESSION['id'] : "NULL";

    $sql = "INSERT INTO incidencias (usuario_id, tipo, asunto, mensaje, estado) 
            VALUES ($usuario_id, '$tipo', '$asunto', '$mensaje', 'pendiente')";

    if (mysqli_query($conn, $sql)) {
        // Al enviar con éxito, redirigimos a la landing page (index.php)
        $mensaje_js = "
            Swal.fire({
                title: '¡Recibido!',
                text: 'Tu incidencia ha sido registrada. Volviendo a la página principal...',
                icon: 'success',
                timer: 2500,
                showConfirmButton: false
            }).then(() => { 
                window.location.href = 'index.php'; 
            });
        ";
    } else {
        $mensaje_js = "Swal.fire('Error', 'No se pudo guardar en la base de datos.', 'error');";
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soporte Técnico | PlayGo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="assets/css/soporte.css">
</head>

<body>
    <div class="soporte-card">
        <h2>📩 Ayuda PlayGo</h2>
        <form method="POST">
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
    <?php echo $mensaje_js; ?>
    </script>
</body>

</html>