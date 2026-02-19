<?php
// UBICACIÓN: /playgo/administrador/usuarios/modificar.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin();

$id = intval($_GET['id'] ?? 0);
$mensaje = '';
$error = '';

// 1. PROCESAR EL FORMULARIO (Lógica intacta)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombres = mysqli_real_escape_string($conn, $_POST['nombres']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $rol = $_POST['tipo_usuario']; 

    $sql = "UPDATE usuario SET nombres='$nombres', correo='$correo', tipo_usuario='$rol' WHERE usuario_id=$id";
    
    if(mysqli_query($conn, $sql)) {
        $mensaje = "Sincronización de datos completada.";
    } else {
        $error = "Error en el enlace de datos: " . mysqli_error($conn);
    }
}

// 2. OBTENER DATOS ACTUALES
$res = mysqli_query($conn, "SELECT * FROM usuario WHERE usuario_id=$id");
$u = mysqli_fetch_assoc($res);

if(!$u) {
    die("
    <link rel='stylesheet' href='../../assets/css/menu.css'>
    <body class='portal-galactico'>
        <main class='admin-main'>
            <div class='card-comando' style='text-align:center; padding:50px;'>
                <h2 style='color:#ff4444;'>⚠ ERROR DE LOCALIZACIÓN</h2>
                <p>El tripulante con ID #$id no ha sido detectado en este sector.</p>
                <a href='listar.php' class='btn-admin' style='display:inline-block; width:auto; margin-top:20px;'>Volver al Radar</a>
            </div>
        </main>
    </body>");
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Perfil | PlayGo Admin</title>
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
        .success-space { background: rgba(0, 210, 255, 0.15); border: 1px solid #00d2ff; color: #00d2ff; }
        .error-space { background: rgba(255, 68, 68, 0.15); border: 1px solid #ff4444; color: #ff4444; }

        .form-group { margin-bottom: 20px; }
        
        .form-label-space {
            display: block;
            color: #00d2ff;
            font-size: 0.75rem;
            font-weight: 800;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .input-space {
            width: 100%;
            padding: 12px 15px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: white;
            font-family: 'Poppins';
            transition: 0.3s;
        }

        .input-space:focus {
            outline: none;
            border-color: #00d2ff;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 15px rgba(0, 210, 255, 0.2);
        }

        select.input-space option { background: #1e293b; color: white; }

        .btn-update {
            width: 100%;
            padding: 15px;
            background: #00d2ff;
            color: #0f172a;
            border: none;
            border-radius: 12px;
            font-weight: 800;
            text-transform: uppercase;
            cursor: pointer;
            transition: 0.3s;
        }

        .btn-update:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(0, 210, 255, 0.4);
            background: #fff;
        }
        
        .id-badge {
            background: rgba(255, 193, 7, 0.1);
            color: #ffc107;
            border: 1px solid #ffc107;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 800;
            display: inline-block;
            margin-bottom: 10px;
        }
    </style>
</head>

<body class="portal-galactico">

    <main class="admin-main">
        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> COMMAND</div>
            <h1>Edición de Bio-Datos</h1>
            <p>Modificando los parámetros del registro de tripulación.</p>
        </div>

        <div class="card-comando form-container">
            <div style="text-align: center;">
                <span class="id-badge">LOCALIZADOR: #<?php echo $id; ?></span>
            </div>

            <?php if($mensaje): ?>
                <div class="msg-alerta success-space">✔ <?php echo $mensaje; ?></div>
            <?php endif; ?>

            <?php if($error): ?>
                <div class="msg-alerta error-space">⚠ <?php echo $error; ?></div>
            <?php endif; ?>

            <form method="POST">
                <div class="form-group">
                    <label class="form-label-space">Nombre del Tripulante</label>
                    <input type="text" name="nombres" class="input-space" 
                           value="<?php echo htmlspecialchars($u['nombres']); ?>" required>
                </div>

                <div class="form-group">
                    <label class="form-label-space">Frecuencia (Correo)</label>
                    <input type="email" name="correo" class="input-space" 
                           value="<?php echo htmlspecialchars($u['correo']); ?>" required>
                </div>

                <div class="form-group">
                    <label class="form-label-space">Rango de Acceso</label>
                    <select name="tipo_usuario" class="input-space" required>
                        <option value="nino" <?php echo ($u['tipo_usuario'] == 'nino') ? 'selected' : ''; ?>>🧸 Niño</option>
                        <option value="adulto" <?php echo ($u['tipo_usuario'] == 'adulto') ? 'selected' : ''; ?>>🧠 Adulto</option>
                        <option value="administrador" <?php echo ($u['tipo_usuario'] == 'administrador') ? 'selected' : ''; ?>>🛡️ Administrador</option>
                    </select>
                </div>

                <button type="submit" class="btn-update">Actualizar Registro</button>
            </form>
        </div>

        <div style="margin-top: 30px;">
            <a href="listar.php" class="btn-logout" style="border-color: #00d2ff; color: #00d2ff;">
                ← Regresar al Listado General
            </a>
        </div>
    </main>

</body>
</html>