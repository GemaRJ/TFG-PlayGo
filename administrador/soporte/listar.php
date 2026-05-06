<?php
require_once "../../configuracion/conexion.php";
require_once "../../configuracion/sesiones.php";

comprobarSesion(); 

if (!isset($_SESSION['tipo_usuario']) || $_SESSION['tipo_usuario'] !== 'administrador') {
    header("Location: ../../index.php");
    exit;
}

$filtro = isset($_GET['tipo']) ? mysqli_real_escape_string($conn, $_GET['tipo']) : '';

$sql = "SELECT i.*, u.nombres as usuario_nombre 
        FROM incidencias i 
        LEFT JOIN usuario u ON i.usuario_id = u.usuario_id";

if ($filtro) { 
    $sql .= " WHERE i.tipo = '$filtro'"; 
}

$sql .= " ORDER BY i.fecha_reporte DESC"; 
$res = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radar de Soporte | PlayGo</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <style>
        .filtro-consola {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 25px;
            margin-bottom: 30px;
            display: flex;
            gap: 15px;
            align-items: flex-end;
            flex-wrap: wrap;
        }
        .input-space-select {
            flex: 1;
            min-width: 250px;
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 12px;
            border-radius: 12px;
            outline: none;
        }
        .btn-filtro {
            background: #00d2ff;
            color: #0f172a;
            border: none;
            padding: 12px 25px;
            border-radius: 12px;
            font-weight: 700;
            cursor: pointer;
        }
        .table-radar {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 8px;
        }
        .table-radar tr { background: rgba(255, 255, 255, 0.03); transition: 0.3s; }
        .table-radar tr:hover { background: rgba(255, 255, 255, 0.08); }
        .table-radar td, .table-radar th { padding: 15px; text-align: left; }
        .badge-status { padding: 5px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: 800; }
        .pend { background: rgba(255, 193, 7, 0.2); color: #ffc107; border: 1px solid #ffc107; }
        .res { background: rgba(40, 167, 69, 0.2); color: #28a745; border: 1px solid #28a745; }
    </style>
</head>
<body class="portal-galactico">
    <main class="admin-main">
        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> SUPPORT</div>
            <h1>Radar de Incidencias</h1>
            <p>Comunicaciones recibidas desde los sectores de exploración.</p>
        </div>

        <form method="GET" class="filtro-consola">
            <div style="flex: 1;">
                <label class="form-label-space">Filtrar Señales por Categoría</label>
                <select name="tipo" class="input-space-select">
                    <option value="">-- Ver todas las señales --</option>
                    <option value="queja" <?php if($filtro=='queja') echo 'selected'; ?>>😡 Queja General</option>
                    <option value="sugerencia" <?php if($filtro=='sugerencia') echo 'selected'; ?>>💡 Sugerencia</option>
                    <option value="error_alta_usuario" <?php if($filtro=='error_alta_usuario') echo 'selected'; ?>>👤 Error Alta</option>
                    <option value="incidencia_juego" <?php if($filtro=='incidencia_juego') echo 'selected'; ?>>🕹️ Juego</option>
                </select>
            </div>
            <button type="submit" class="btn-filtro">Sincronizar</button>
            <a href="listar.php" class="btn-admin" style="width: auto; padding: 12px 20px;">Limpiar</a>
        </form>

        <div class="card-comando" style="width: 100%; padding: 20px;">
            <table class="table-radar">
                <thead>
                    <tr style="background: transparent; color: #00d2ff; font-size: 0.8rem;">
                        <th>FECHA</th>
                        <th>USUARIO</th>
                        <th>ASUNTO</th>
                        <th>ESTADO</th>
                        <th style="text-align: center;">ACCIÓN</th>
                    </tr>
                </thead>
                <tbody>
                    <?php while($f = mysqli_fetch_assoc($res)): ?>
                    <tr>
                        <td style="font-size: 0.8rem; opacity: 0.7;"><?php echo date('d/m/Y', strtotime($f['fecha_reporte'])); ?></td>
                        <td style="font-weight: 600;"><?php echo $f['usuario_nombre'] ? htmlspecialchars($f['usuario_nombre']) : 'Invitado'; ?></td>
                        <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><?php echo htmlspecialchars($f['asunto']); ?></td>
                        <td>
                            <span class="badge-status <?php echo $f['estado'] == 'pendiente' ? 'pend' : 'res'; ?>">
                                <?php echo strtoupper($f['estado']); ?>
                            </span>
                        </td>
                        <td>
                            <div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
                                <a href="gestion.php?id=<?php echo $f['id_incidencia']; ?>" class="btn-admin" style="width: auto; margin-top: 0; padding: 5px 15px; font-size: 0.7rem;">Gestionar</a>
                                <button onclick="confirmarEliminar(<?php echo $f['id_incidencia']; ?>)" class="btn-admin" style="width: auto; margin-top: 0; padding: 5px 10px; border-color: #ff4444; color: #ff4444;">🗑️</button>
                            </div>
                        </td>
                    </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>
        </div>

        <div style="margin-top: 30px;">
            <a href="../menu.php" class="btn-logout" style="border-color: #00d2ff; color: #00d2ff;">
                ← Regresar a la Central
            </a>
        </div>
    </main>

    <script>
    function confirmarEliminar(id) {
        Swal.fire({
            title: '¿Eliminar señal?',
            text: "Esta acción borrará el ticket definitivamente.",
            icon: 'warning',
            background: '#0f172a',
            color: '#fff',
            showCancelButton: true,
            confirmButtonColor: '#ff4444',
            confirmButtonText: 'Sí, borrarlo'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = `procesar_incidencia.php?id=${id}&accion=eliminar`;
            }
        });
    }
    </script>
</body>
</html>