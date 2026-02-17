<?php
require_once "../../configuracion/conexion.php";
require_once "../../configuracion/sesiones.php";

// [SEGURIDAD] Comprobación de sesión y rol de administrador
comprobarSesion(); 

if (!isset($_SESSION['tipo_usuario']) || $_SESSION['tipo_usuario'] !== 'administrador') {
    header("Location: ../../index.php");
    exit;
}

// Filtro de búsqueda
$filtro = isset($_GET['tipo']) ? mysqli_real_escape_string($conn, $_GET['tipo']) : '';

// Consulta SQL con JOIN para obtener el nombre del usuario real
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
    <title>Gestión Integral de Tickets | PlayGo</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <style>
    body {
        font-family: 'Poppins', sans-serif;
    }

    .table thead {
        background-color: #2d3436;
        color: white;
    }

    .badge-tipo {
        font-size: 0.75rem;
        text-transform: uppercase;
        font-weight: bold;
    }

    .table-hover tbody tr:hover {
        background-color: #f1f2f6;
        transition: 0.3s;
    }
    </style>
</head>

<body class="bg-light">
    <div class="container my-5">

        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h2 class="fw-bold mb-0">📩 Panel de Soporte Técnico</h2>
                <p class="text-muted">Gestión de todas las solicitudes recibidas vía Chatbot.</p>
            </div>
            <a href="../menu.php" class="btn btn-dark btn-sm rounded-pill px-3">Volver al Panel</a>
        </div>

        <form method="GET" class="row g-3 mb-4 bg-white p-4 shadow-sm rounded-4 border">
            <div class="col-md-8">
                <label class="form-label fw-bold small text-muted">Filtrar por categoría de ticket:</label>
                <select name="tipo" class="form-select border-2">
                    <option value="">-- Ver todas las incidencias --</option>
                    <option value="queja" <?php if($filtro=='queja') echo 'selected'; ?>>😡 Queja General</option>
                    <option value="sugerencia" <?php if($filtro=='sugerencia') echo 'selected'; ?>>💡 Sugerencia
                    </option>
                    <option value="error_alta_usuario" <?php if($filtro=='error_alta_usuario') echo 'selected'; ?>>👤
                        Error Alta Usuario</option>
                    <option value="solicitud_baja_usuario"
                        <?php if($filtro=='solicitud_baja_usuario') echo 'selected'; ?>>📉 Solicitud de Baja</option>
                    <option value="incidencia_juego" <?php if($filtro=='incidencia_juego') echo 'selected'; ?>>🕹️
                        Incidencia en Juego</option>
                    <option value="fallo_seguridad" <?php if($filtro=='fallo_seguridad') echo 'selected'; ?>>🛡️ Fallo
                        de Seguridad</option>
                    <option value="error_ranking" <?php if($filtro=='error_ranking') echo 'selected'; ?>>🏆 Error en
                        Ranking</option>
                </select>
            </div>
            <div class="col-md-4 d-flex align-items-end gap-2">
                <button type="submit" class="btn btn-primary w-100 fw-bold">Aplicar Filtro</button>
                <a href="listar.php" class="btn btn-outline-secondary">Limpiar</a>
            </div>
        </form>

        <div class="table-responsive bg-white shadow-sm rounded-4 border overflow-hidden">
            <table class="table table-hover align-middle mb-0">
                <thead>
                    <tr>
                        <th class="ps-4">Fecha</th>
                        <th>Categoría</th>
                        <th>Usuario</th>
                        <th>Asunto</th>
                        <th>Estado</th>
                        <th class="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if(mysqli_num_rows($res) > 0): ?>
                    <?php while($f = mysqli_fetch_assoc($res)): ?>
                    <tr>
                        <td class="ps-4 small fw-bold">
                            <?php echo date('d/m/Y', strtotime($f['fecha_reporte'])); ?>
                        </td>
                        <td>
                            <span class="badge bg-light text-dark border badge-tipo">
                                <?php echo str_replace('_', ' ', $f['tipo']); ?>
                            </span>
                        </td>
                        <td>
                            <span class="fw-bold text-dark">
                                <?php echo $f['usuario_nombre'] ? htmlspecialchars($f['usuario_nombre']) : '<span class="text-muted opacity-50">Invitado</span>'; ?>
                            </span>
                        </td>
                        <td class="text-truncate" style="max-width: 250px;">
                            <?php echo htmlspecialchars($f['asunto']); ?>
                        </td>
                        <td>
                            <span
                                class="badge <?php echo $f['estado'] == 'pendiente' ? 'bg-warning text-dark' : 'bg-success'; ?> rounded-pill">
                                <?php echo strtoupper($f['estado']); ?>
                            </span>
                        </td>
                        <td class="text-center pe-3">
                            <div class="btn-group">
                                <a href="gestion.php?id=<?php echo $f['id_incidencia']; ?>"
                                    class="btn btn-sm btn-outline-dark px-3 fw-bold">
                                    Gestionar
                                </a>
                                <button onclick="confirmarEliminar(<?php echo $f['id_incidencia']; ?>)"
                                    class="btn btn-sm btn-danger">
                                    🗑️
                                </button>
                            </div>
                        </td>
                    </tr>
                    <?php endwhile; ?>
                    <?php else: ?>
                    <tr>
                        <td colspan="6" class="text-center py-5 text-muted">
                            <p class="mb-0 fs-5">No hay tickets registrados con estos criterios.</p>
                        </td>
                    </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <script>
    function confirmarEliminar(id) {
        Swal.fire({
            title: '¿Eliminar definitivamente?',
            text: "Esta acción borrará el ticket de la base de datos.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Sí, borrarlo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = `procesar_incidencia.php?id=${id}&accion=eliminar`;
            }
        });
    }
    </script>
</body>

</html>