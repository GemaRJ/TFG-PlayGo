<?php
// UBICACIÓN: /playgo/administrador/usuarios/listar.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
/** @var mysqli $conn */
comprobarAdmin();

// Consulta a la tabla 'usuario'
$res = mysqli_query($conn, "SELECT usuario_id, nombres, correo, tipo_usuario FROM usuario");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manifiesto de Tripulación | PlayGo Admin</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">

    <!-- SweetAlert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <style>
        .table-space {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 10px;
            color: white;
        }

        .table-space thead th {
            color: #00d2ff;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 1px;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 210, 255, 0.3);
        }

        .table-space tbody tr {
            background: rgba(255, 255, 255, 0.03);
            transition: 0.3s;
        }

        .table-space tbody tr:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: scale(1.01);
        }

        .table-space td {
            padding: 15px;
            vertical-align: middle;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Redondeado de filas */
        .table-space td:first-child {
            border-radius: 12px 0 0 12px;
            border-left: 1px solid rgba(255, 255, 255, 0.05);
        }

        .table-space td:last-child {
            border-radius: 0 12px 12px 0;
            border-right: 1px solid rgba(255, 255, 255, 0.05);
        }

        .badge-perfil {
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 800;
            text-transform: uppercase;
            display: inline-block;
        }

        .bg-nino {
            background: rgba(0, 210, 255, 0.15);
            color: #00d2ff;
            border: 1px solid #00d2ff;
        }

        .bg-adulto {
            background: rgba(40, 167, 69, 0.15);
            color: #28a745;
            border: 1px solid #28a745;
        }

        .bg-admin {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            border: 1px solid #fff;
        }

        .btn-accion {
            padding: 8px;
            border-radius: 8px;
            text-decoration: none;
            transition: 0.3s;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: transparent;
        }

        .btn-edit {
            border: 1px solid #00d2ff;
            color: #00d2ff;
        }

        .btn-edit:hover {
            background: #00d2ff;
            color: #0f172a;
        }

        .btn-delete {
            border: 1px solid #ff4444;
            color: #ff4444;
            margin-left: 5px;
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
            <div class="logo">PLAY<span>GO</span> ADMIN</div>
            <h1>Manifiesto de Tripulación</h1>
            <p>Listado de todos los exploradores registrados en el sistema.</p>
        </div>

        <div style="text-align: right; width: 100%; margin-bottom: 20px;">
            <a href="alta.php" class="btn-admin"
                style="width: auto; padding: 10px 25px; background: #28a745; border-color: #28a745; color: white;">
                + Reclutar Nuevo Jugador
            </a>
            <a href="buscar.php" class="btn-admin" style="width: auto; padding: 10px 25px; margin-left: 10px;">
                🔍 Escanear Radar
            </a>
        </div>

        <div class="card-comando" style="width: 100%; padding: 20px;">
            <table class="table-space">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Explorador</th>
                        <th>Identificador</th>
                        <th style="text-align: center;">Rango</th>
                        <th style="text-align: center;">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php while ($u = mysqli_fetch_assoc($res)): ?>
                        <tr>
                            <td style="font-family: monospace; color: #00d2ff;">#<?php echo $u['usuario_id']; ?></td>
                            <td>
                                <div style="font-weight: 600;"><?php echo htmlspecialchars($u['nombres']); ?></div>
                            </td>
                            <td style="opacity: 0.7; font-size: 0.9rem;"><?php echo htmlspecialchars($u['correo']); ?></td>
                            <td style="text-align: center;">
                                <?php
                                $badgeClass = 'bg-admin';
                                $icon = '🛡️';
                                if ($u['tipo_usuario'] == 'nino') {
                                    $badgeClass = 'bg-nino';
                                    $icon = '🧸';
                                } elseif ($u['tipo_usuario'] == 'adulto') {
                                    $badgeClass = 'bg-adulto';
                                    $icon = '🧠';
                                }
                                ?>
                                <span class="badge-perfil <?php echo $badgeClass; ?>">
                                    <?php echo $icon . ' ' . $u['tipo_usuario']; ?>
                                </span>
                            </td>
                            <td>
                                <div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
                                    <a href="modificar.php?id=<?php echo $u['usuario_id']; ?>" class="btn-admin"
                                        style="width: auto; margin-top: 0; padding: 5px 15px; font-size: 0.7rem;">Editar</a>

                                    <a href="#" class="btn-admin"
                                        style="width: auto; margin-top: 0; padding: 5px 10px; border-color: #ff4444; color: #ff4444;"
                                        title="Eliminar"
                                        onclick="confirmarEliminacion(<?php echo $u['usuario_id']; ?>, '<?php echo htmlspecialchars($u['nombres'], ENT_QUOTES); ?>')">
                                        🗑️
                                    </a>

                                </div>
                            </td>
                        </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>

            <?php if (mysqli_num_rows($res) == 0): ?>
                <div style="padding: 40px; text-align: center; color: #ffc107;">
                    <p>No se han detectado tripulantes en la base de datos.</p>
                </div>
            <?php endif; ?>
        </div>

        <div style="margin-top: 30px;">
            <a href="../menu.php" class="btn-logout" style="border-color: #00d2ff; color: #00d2ff;">
                ← Regresar a la Central
            </a>
        </div>
    </main>

    <script>
        function confirmarEliminacion(id, nombre) {

            Swal.fire({
                title: '¿Eliminar usuario?',
                text: '¿Confirmar desvinculación de ' + nombre + '?',
                icon: 'warning',
                background: '#0f172a',
                color: '#fff',
                showCancelButton: true,
                confirmButtonColor: '#ff4444',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {

                if (result.isConfirmed) {
                    window.location.href = 'baja.php?id=' + id;
                }

            });

        }
    </script>

</body>

</html>