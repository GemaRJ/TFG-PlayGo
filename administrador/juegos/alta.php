<?php
// UBICACIÓN: /playgo/administrador/juegos/alta.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
/** @var mysqli $conn */
comprobarAdmin();

$mensaje = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $ruta = mysqli_real_escape_string($conn, $_POST['ruta']);
    $categoria = $_POST['categoria'];

    $sql = "INSERT INTO juegos (nombre, ruta, categoria, activo) VALUES ('$nombre', '$ruta', '$categoria', 1)";

    if (mysqli_query($conn, $sql)) {
        $mensaje = "¡Misión inyectada con éxito en el catálogo!";
    } else {
        $error = "Fallo en la telemetría: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inyectar Juego | PlayGo Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
    <style>
        /* Ajustes específicos para que el formulario se vea increíble */
        .form-container {
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
        }

        .msg-alerta {
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 25px;
            text-align: center;
            font-weight: 600;
            animation: fadeIn 0.5s ease;
        }

        .success-space {
            background: rgba(0, 210, 255, 0.2);
            border: 1px solid #00d2ff;
            color: #00d2ff;
        }

        .error-space {
            background: rgba(255, 68, 68, 0.2);
            border: 1px solid #ff4444;
            color: #ff4444;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-label-space {
            display: block;
            color: #00d2ff;
            font-size: 0.8rem;
            font-weight: 800;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .input-space {
            width: 100%;
            padding: 14px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            color: white;
            font-family: 'Poppins';
            font-size: 1rem;
            transition: 0.3s;
        }

        .input-space:focus {
            outline: none;
            border-color: #00d2ff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 15px rgba(0, 210, 255, 0.3);
        }

        select.input-space option {
            background: #0f172a;
            color: white;
        }

        .btn-submit-space {
            width: 100%;
            padding: 16px;
            background: #00d2ff;
            color: #0f172a;
            border: none;
            border-radius: 12px;
            font-weight: 800;
            text-transform: uppercase;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 0 5px 15px rgba(0, 210, 255, 0.4);
        }

        .btn-submit-space:hover {
            transform: translateY(-3px);
            background: #fff;
            box-shadow: 0 8px 25px rgba(0, 210, 255, 0.6);
        }
    </style>
</head>

<body class="portal-galactico">

    <main class="admin-main">
        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> ADMIN</div>
            <h1>Nueva Misión</h1>
            <p>Registra un nuevo juego en los sectores de la plataforma.</p>
        </div>

        <div class="card-comando form-container">
            <?php if ($mensaje): ?>
                <div class="msg-alerta success-space">✅ <?php echo $mensaje; ?></div>
            <?php endif; ?>

            <?php if ($error): ?>
                <div class="msg-alerta error-space">⚠️ <?php echo $error; ?></div>
            <?php endif; ?>

            <form method="POST">
                <div class="form-group">
                    <label class="form-label-space">Título del Juego</label>
                    <input type="text" name="nombre" class="input-space" placeholder="Ej: Rompecabezas Lunar" required>
                </div>

                <div class="form-group">
                    <label class="form-label-space">Nombre de Carpeta (Ruta)</label>
                    <input type="text" name="ruta" class="input-space" placeholder="Ej: puzzle-lunar" required>
                </div>

                <div class="form-group">
                    <label class="form-label-space">Público Objetivo</label>
                    <select name="categoria" class="input-space" required>
                        <option value="" selected disabled>Seleccionar sector...</option>
                        <option value="ninos">🧸 Sector Infantil (Niños)</option>
                        <option value="adultos">🧠 Sector Entrenamiento (Adultos)</option>
                    </select>
                </div>

                <button type="submit" class="btn-submit-space">Confirmar Inyección</button>
            </form>
        </div>

        <div style="margin-top: 30px;">
            <a href="../menu.php" class="btn-logout" style="border-color: #00d2ff; color: #00d2ff;">
                ← Regresar a la Central
            </a>
        </div>
    </main>

    <script src="../../chatbot/bot.js"></script>
</body>

</html>