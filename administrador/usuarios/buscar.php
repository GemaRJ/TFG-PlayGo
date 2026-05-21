<?php
// UBICACIÓN: /playgo/administrador/usuarios/buscar.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
/** @var mysqli $conn */
comprobarAdmin();

$busqueda = $_GET['busqueda'] ?? '';
$usuarios = [];

if ($busqueda) {
    $busqueda_safe = mysqli_real_escape_string($conn, $busqueda);
    $sql = "SELECT usuario_id, nombres, correo, tipo_usuario FROM usuario 
            WHERE nombres LIKE '%$busqueda_safe%' 
               OR correo LIKE '%$busqueda_safe%' 
               OR tipo_usuario LIKE '%$busqueda_safe%'";
    $res = mysqli_query($conn, $sql);
    $usuarios = mysqli_fetch_all($res, MYSQLI_ASSOC);
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscador de Tripulación | PlayGo Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
    <style>
        .search-console {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
        }

        .search-group {
            display: flex;
            gap: 10px;
        }

        .input-scan {
            flex: 1;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 15px;
            border-radius: 12px;
            color: white;
            font-family: 'Poppins';
            outline: none;
            transition: 0.3s;
        }

        .input-scan:focus {
            border-color: #00d2ff;
            box-shadow: 0 0 15px rgba(0, 210, 255, 0.3);
        }

        .table-radar {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 10px;
            margin-top: 20px;
        }

        .table-radar tr {
            background: rgba(255, 255, 255, 0.03);
            transition: 0.3s;
        }

        .table-radar td,
        .table-radar th {
            padding: 15px;
            text-align: left;
        }

        .badge-perfil {
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 800;
            text-transform: uppercase;
        }

        .bg-nino {
            background: rgba(0, 210, 255, 0.1);
            color: #00d2ff;
            border: 1px solid #00d2ff;
        }

        .bg-adulto {
            background: rgba(40, 167, 69, 0.1);
            color: #28a745;
            border: 1px solid #28a745;
        }

        .bg-admin {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            border: 1px solid #fff;
        }

        .btn-accion {
            padding: 6px 12px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.75rem;
            font-weight: 600;
            transition: 0.3s;
            display: inline-block;
        }

        .btn-edit {
            border: 1px solid #00d2ff;
            color: #00d2ff;
            margin-right: 5px;
        }

        .btn-edit:hover {
            background: #00d2ff;
            color: #0f172a;
        }

        .btn-delete {
            border: 1px solid #ff4444;
            color: #ff4444;
        }

        .btn-delete:hover {
            background: #ff4444;
            color: white;
        }
    </style>
</head>

<body class="portal-galactico">

    <main class="admin-main">
        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> SCANNER</div>
            <h1>Buscador de Tripulación</h1>
            <p>Introduce coordenadas (nombre o correo) para localizar al usuario.</p>
        </div>

        <div class="search-console">
            <form method="GET" class="search-group">
                <input type="text" name="busqueda" class="input-scan"
                    placeholder="Escribe aquí (ej: Juan, nino, correo@...)"
                    value="<?php echo htmlspecialchars($busqueda); ?>" required>
                <button type="submit" class="btn-admin" style="width: auto; padding: 0 30px;">ESCANEAR</button>
            </form>
        </div>

        <?php if ($busqueda): ?>
            <div class="card-comando" style="width: 100%;">
                <h3 style="color: #00d2ff; font-size: 1rem; margin-bottom: 20px; text-transform: uppercase;">
                    Resultados del Escaneo: "<?php echo htmlspecialchars($busqueda); ?>"
                </h3>

                <?php if ($usuarios): ?>
                    <table class="table-radar">
                        <thead>
                            <tr style="color: #94a3b8; font-size: 0.8rem;">
                                <th>ID</th>
                                <th>JUGADOR</th>
                                <th>IDENTIFICADOR</th>
                                <th>RANGO</th>
                                <th style="text-align: right;">OPERACIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($usuarios as $u): ?>
                                <tr>
                                    <td style="font-family: monospace; color: #00d2ff;">#<?php echo $u['usuario_id']; ?></td>
                                    <td style="font-weight: 600;"><?php echo htmlspecialchars($u['nombres']); ?></td>
                                    <td style="opacity: 0.7;"><?php echo htmlspecialchars($u['correo']); ?></td>
                                    <td>
                                        <?php
                                        $clase = 'bg-admin';
                                        $icon = '🛡️';
                                        if ($u['tipo_usuario'] == 'nino') {
                                            $clase = 'bg-nino';
                                            $icon = '🧸';
                                        }
                                        if ($u['tipo_usuario'] == 'adulto') {
                                            $clase = 'bg-adulto';
                                            $icon = '🧠';
                                        }
                                        ?>
                                        <span class="badge-perfil <?php echo $clase; ?>">
                                            <?php echo $icon . ' ' . $u['tipo_usuario']; ?>
                                        </span>
                                    </td>
                                    <td style="text-align: right;">
                                        <a href="modificar.php?id=<?php echo $u['usuario_id']; ?>"
                                            class="btn-accion btn-edit">EDITAR</a>
                                        <a href="baja.php?id=<?php echo $u['usuario_id']; ?>" class="btn-accion btn-delete"
                                            onclick="return confirm('¿Confirmar eliminación del registro?')">ELIMINAR</a>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                <?php else: ?>
                    <div style="padding: 40px; text-align: center; color: #ff4444;">
                        <span style="font-size: 3rem; display: block;">📡</span>
                        <p>No se detectan coincidencias en este sector de la base de datos.</p>
                    </div>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <div style="margin-top: 30px;">
            <a href="listar.php" class="btn-logout" style="border-color: #00d2ff; color: #00d2ff;">
                ← Volver al Listado General
            </a>
        </div>
    </main>

</body>

</html>