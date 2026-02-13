<?php
/**
 * SOPORTE TÉCNICO PLAYGO - VERSIÓN GALÁCTICA FINAL
 */
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

$mensaje_js = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tipo = mysqli_real_escape_string($conn, $_POST['tipo']);
    $asunto = mysqli_real_escape_string($conn, $_POST['asunto']);
    $mensaje = mysqli_real_escape_string($conn, $_POST['mensaje']);
    $usuario_id = isset($_SESSION['id']) ? $_SESSION['id'] : "NULL";

    $sql = "INSERT INTO incidencias (usuario_id, tipo, asunto, mensaje, estado) 
            VALUES ($usuario_id, '$tipo', '$asunto', '$mensaje', 'pendiente')";

    if (mysqli_query($conn, $sql)) {
        $mensaje_js = "
            Swal.fire({
                title: '¡Recibido!',
                text: 'Tu incidencia ha sido registrada. Volviendo a la base...',
                icon: 'success',
                timer: 2500,
                showConfirmButton: false
            }).then(() => { window.location.href = 'index.php'; });";
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
    <title>Soporte Galáctico | PlayGo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link href="https://fonts.googleapis.com/css2?family= Orbitron:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/soporte.css?v=<?php echo time(); ?>">
</head>
<body>

    <div class="soporte-card">
        <h2><span>📩</span> Ayuda PlayGo</h2>
        <form method="POST">
            <label>¿Qué tipo de mensaje es?</label>
            <select name="tipo" id="tipo" required>
                <option value="queja" <?php echo ($tipo_pre == 'queja') ? 'selected' : ''; ?>>😡 Queja</option>
                <option value="sugerencia" <?php echo ($tipo_pre == 'sugerencia') ? 'selected' : ''; ?>>💡 Sugerencia</option>
                <option value="incidencia_juego" <?php echo ($tipo_pre == 'incidencia_juego') ? 'selected' : ''; ?>>🕹️ Error en Juego</option>
                <option value="fallo_seguridad" <?php echo ($tipo_pre == 'fallo_seguridad') ? 'selected' : ''; ?>>🛡️ Fallo de Seguridad</option>
            </select>

            <label>Asunto breve</label>
            <input type="text" name="asunto" value="<?php echo $asunto_auto; ?>" placeholder="Ej: No carga el juego..." required>

            <label>Cuéntanos los detalles</label>
            <textarea name="mensaje" rows="4" placeholder="Describe tu problema aquí..." required></textarea>

            <button type="submit">ENVIAR TICKET</button>
            <a href="index.php" class="volver-link">Cancelar y volver al inicio</a>
        </form>
    </div>

    <script>
        (function() {
            document.body.style.background = "#05070a";
            const canvas = document.createElement('canvas');
            Object.assign(canvas.style, {
                position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
                zIndex: '1', pointerEvents: 'none'
            });
            document.body.prepend(canvas);
            const ctx = canvas.getContext('2d');

            const robot = document.createElement('div');
            robot.innerHTML = '🤖';
            Object.assign(robot.style, {
                position: 'fixed', fontSize: '60px', zIndex: '999',
                top: '20%', right: '10%', filter: 'drop-shadow(0 0 15px #00d2ff)',
                pointerEvents: 'none'
            });
            document.body.appendChild(robot);

            let stars = [];
            function init() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                stars = Array.from({length: 150}, () => ({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    s: Math.random() * 2,
                    v: Math.random() * 0.5 + 0.2
                }));
            }

            function anim() {
                ctx.clearRect(0,0, canvas.width, canvas.height);
                ctx.fillStyle = "white";
                stars.forEach(st => {
                    st.y += st.v;
                    if(st.y > canvas.height) st.y = 0;
                    ctx.fillRect(st.x, st.y, st.s, st.s);
                });
                const t = Date.now() * 0.002;
                robot.style.transform = `translateY(${Math.sin(t)*20}px) rotate(${Math.sin(t*0.5)*10}deg)`;
                requestAnimationFrame(anim);
            }
            window.onresize = init;
            init();
            anim();
        })();
        <?php echo $mensaje_js; ?>
    </script>
</body>
</html>