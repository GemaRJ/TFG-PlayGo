<?php
// UBICACIÓN: /playgo/administrador/juegos/modificar.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
/** @var mysqli $conn */
comprobarAdmin();

$id = intval($_GET['id'] ?? 0);
$mensaje = '';
$error = '';

if ($id <= 0) {
    header("Location: listar.php");
    exit;
}

// Actualizar juego
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $ruta = mysqli_real_escape_string($conn, $_POST['ruta']);
    $categoria = mysqli_real_escape_string($conn, $_POST['categoria']);
    $activo = isset($_POST['activo']) ? 1 : 0;

    $sql = "UPDATE juegos 
            SET nombre='$nombre', ruta='$ruta', categoria='$categoria', activo=$activo
            WHERE id_juego=$id";

    if (mysqli_query($conn, $sql)) {
        $mensaje = "¡Misión actualizada correctamente!";
    } else {
        $error = "Error al actualizar: " . mysqli_error($conn);
    }
}

// Obtener datos actuales
$res = mysqli_query($conn, "SELECT * FROM juegos WHERE id_juego=$id");
$juego = mysqli_fetch_assoc($res);

if (!$juego) {
    header("Location: listar.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Juego | PlayGo Admin</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">

    <style>
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
        }

        .check-space {
            color: white;
            font-weight: 600;
        }
    </style>
</head>

<body class="portal-galactico">

    <main class="admin-main">

        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> ADMIN</div>
            <h1>Modificar Misión</h1>
            <p>Edita los datos del juego seleccionado.</p>
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
                    <input type="text" name="nombre" class="input-space"
                        value="<?php echo htmlspecialchars($juego['nombre']); ?>" required>
                </div>

                <div class="form-group">
                    <label class="form-label-space">Nombre de Carpeta / Ruta</label>
                    <input type="text" name="ruta" class="input-space"
                        value="<?php echo htmlspecialchars($juego['ruta']); ?>" required>
                </div>

                <div class="form-group">
                    <label class="form-label-space">Público Objetivo</label>
                    <select name="categoria" class="input-space" required>
                        <option value="ninos" <?php if ($juego['categoria'] == 'ninos') echo 'selected'; ?>>
                            🧸 Sector Infantil (Niños)
                        </option>
                        <option value="adultos" <?php if ($juego['categoria'] == 'adultos') echo 'selected'; ?>>
                            🧠 Sector Entrenamiento (Adultos)
                        </option>
                    </select>
                </div>

                <div class="form-group check-space">
                    <label>
                        <input type="checkbox" name="activo" <?php if ($juego['activo'] == 1) echo 'checked'; ?>>
                        Juego activo
                    </label>
                </div>

                <button type="submit" class="btn-submit-space">Guardar Cambios</button>

            </form>

        </div>

        <div style="margin-top: 30px;">
            <a href="listar.php" class="btn-logout" style="border-color: #00d2ff; color: #00d2ff;">
                ← Regresar al Inventario
            </a>
        </div>

    </main>

    <script src="../../chatbot/bot.js"></script>

</body>

</html>