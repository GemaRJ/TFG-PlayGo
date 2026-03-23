<?php
// ... (mantenemos tu código PHP inicial igual)
require_once "../configuracion/conexion.php";
require_once "../configuracion/sesiones.php";
comprobarSesion();

if ($_SESSION['tipo_usuario'] !== 'administrador') {
    header("Location: ../index.php");
    exit;
}

$sql_pendientes = "SELECT COUNT(*) as total FROM incidencias WHERE estado = 'pendiente'";
$res_pendientes = mysqli_query($conn, $sql_pendientes);
$cont_pendientes = mysqli_fetch_assoc($res_pendientes)['total'];
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PlayGo Admin | Central de Mando</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/index.css">
    <link rel="icon" href="../assets/img/jugando-videojuegos.png" type="image/png">
    <style>
        /* CORRECCIÓN PARA EL FONDO SI ES BLANCO */
        body.portal-galactico {
            background-color: #0f172a !important;
            /* Forzamos fondo oscuro espacial */
            color: white;
        }

        .admin-main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 20px 60px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .header-panel {
            text-align: center;
            margin-bottom: 60px;
        }

        /* CORRECCIÓN DEL LOGO ADMIN */
        .header-panel .logo {
            color: #00d2ff;
            font-weight: 800;
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .header-panel .logo span {
            color: #fff;
        }

        /* CORRECCIÓN DEL TÍTULO (QUITAMOS EL BLANCO DEL DEGRADADO) */
        .header-panel h1 {
            font-size: 3.5rem;
            font-weight: 800;
            /* Degradado de Azul Claro a Azul Eléctrico */
            background: linear-gradient(to right, #00d2ff, #3a86ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-transform: uppercase;
            letter-spacing: 2px;
            filter: drop-shadow(0 2px 10px rgba(0, 210, 255, 0.3));
        }

        .grid-comandos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            width: 100%;
        }

        /* TARJETAS MÁS VISIBLES */
        .card-comando {
            background: rgba(30, 41, 59, 0.7);
            /* Fondo más sólido */
            backdrop-filter: blur(15px);
            border: 1px solid rgba(0, 210, 255, 0.3);
            border-radius: 30px;
            padding: 40px;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
        }

        .card-comando:hover {
            transform: translateY(-15px);
            background: rgba(30, 41, 59, 0.9);
            border-color: #00d2ff;
            box-shadow: 0 20px 40px rgba(0, 210, 255, 0.3);
        }

        /* ... (el resto de tus estilos btn-admin, etc. están bien) ... */
        .icono-vibrante {
            font-size: 4rem;
            margin-bottom: 20px;
            display: block;
            filter: drop-shadow(0 0 10px rgba(0, 210, 255, 0.4));
        }

        .card-comando h3 {
            color: #fff;
            font-size: 1.6rem;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .card-comando p {
            color: #94a3b8;
            font-size: 0.95rem;
            margin-bottom: 30px;
        }

        .grupo-botones {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .btn-admin {
            padding: 12px 20px;
            border-radius: 15px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.9rem;
            transition: 0.3s;
            text-transform: uppercase;
        }

        .btn-primary-space {
            background: rgba(0, 210, 255, 0.1);
            color: #00d2ff;
            border: 1px solid #00d2ff;
        }

        .btn-primary-space:hover {
            background: #00d2ff;
            color: #000;
            box-shadow: 0 0 20px rgba(0, 210, 255, 0.5);
        }

        .alerta-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 800;
        }

        .btn-logout {
            margin-top: 60px;
            color: #ff4444;
            text-decoration: none;
            font-weight: 600;
            border: 1px solid #ff4444;
            padding: 10px 25px;
            border-radius: 50px;
            transition: 0.3s;
            display: inline-block;
        }

        .btn-logout:hover {
            background: #ff4444;
            color: white;
        }
    </style>
</head>

<body class="portal-galactico">

    <main class="admin-main">
        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> ADMIN</div>
            <h1>Centro de Comando</h1>
            <p style="color: #94a3b8;">Bienvenido, Comandante <?php echo htmlspecialchars($_SESSION['nombre']); ?>. El
                sistema está operativo.</p>
        </div>

        <div class="grid-comandos">
            <div class="card-comando">
                <span class="icono-vibrante">👥</span>
                <h3>Tripulación</h3>
                <p>Gestiona los expedientes de todos los jugadores de la nave.</p>
                <div class="grupo-botones">
                    <a href="usuarios/listar.php" class="btn-admin btn-primary-space">Listar Usuarios</a>
                    <a href="usuarios/alta.php" class="btn-admin btn-primary-space">Nuevo Recluta</a>
                </div>
            </div>

            <div class="card-comando">
                <span class="icono-vibrante">🕹️</span>
                <h3>Catálogo</h3>
                <p>Configura las misiones disponibles en el sistema.</p>
                <div class="grupo-botones">
                    <a href="juegos/listar.php" class="btn-admin btn-primary-space">Gestionar Juegos</a>
                    <a href="juegos/alta.php" class="btn-admin btn-primary-space">Inyectar Misión</a>
                </div>
            </div>

            <div class="card-comando">
                <?php if ($cont_pendientes > 0): ?>
                    <span class="alerta-badge"><?php echo $cont_pendientes; ?> ALERTAS</span>
                <?php endif; ?>
                <span class="icono-vibrante">📡</span>
                <h3>Comunicaciones</h3>
                <p>Resuelve las incidencias recibidas por los exploradores.</p>
                <div class="grupo-botones">
                    <a href="soporte/listar.php" class="btn-admin btn-primary-space">Ver Mensajes</a>
                    <a href="soporte/estadisticas.php" class="btn-admin btn-primary-space">Telemetría</a>
                </div>
            </div>
        </div>

        <a href="../autenticacion/logout.php" class="btn-logout">FINALIZAR MISIÓN (LOGOUT)</a>
    </main>

    <script src="../chatbot/bot.js"></script>
</body>

</html>