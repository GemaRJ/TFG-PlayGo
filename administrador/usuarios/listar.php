<?php
// UBICACIÓN: /playgo/administrador/usuarios/listar.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin(); // Seguridad: Solo el equipo administrador accede

// Consulta a la tabla 'usuario' de PlayGo
$res = mysqli_query($conn, "SELECT usuario_id, nombres, correo, tipo_usuario FROM usuario");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión Jugadores | PlayGo Admin</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
</head>

<body class="bg-light">

    <nav class="navbar navbar-expand-lg navbar-dark bg-playgo shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="../menu.php">
                <span>🎮</span> Admin PlayGo
            </a>
            <div class="text-white small">
                Listado General
            </div>
        </div>
    </nav>

    <div class="container my-5">

        <div class="card shadow-sm border-0 rounded-4 animate-fade-in">
            <div class="card-body p-5">

                <div class="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                    <div>
                        <h2 class="fw-bold text-playgo mb-0">Comunidad PlayGo</h2>
                        <p class="text-muted small mb-0">Control total de perfiles y accesos</p>
                    </div>

                    <a href="alta.php" class="btn btn-success fw-bold rounded-pill px-4 shadow-sm">
                        <span class="me-1">+</span> Nuevo Jugador
                    </a>
                </div>

                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-light">
                            <tr>
                                <th class="text-muted small">ID</th>
                                <th class="text-muted small">NOMBRE</th>
                                <th class="text-muted small">EMAIL</th>
                                <th class="text-muted small text-center">PERFIL</th>
                                <th class="text-muted small text-end">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while($u = mysqli_fetch_assoc($res)): ?>
                            <tr>
                                <td class="fw-bold text-muted">#<?php echo $u['usuario_id']; ?></td>

                                <td>
                                    <div class="fw-bold text-dark"><?php echo htmlspecialchars($u['nombres']); ?></div>
                                </td>

                                <td class="text-muted"><?php echo htmlspecialchars($u['correo']); ?></td>

                                <td class="text-center">
                                    <?php 
                                        // Lógica visual para los badges
                                        $badgeClass = 'bg-secondary';
                                        $icon = '👤';
                                        
                                        if($u['tipo_usuario'] == 'nino'){ 
                                            $badgeClass = 'bg-info text-dark'; 
                                            $icon = '🧸'; 
                                        } elseif($u['tipo_usuario'] == 'adulto'){ 
                                            $badgeClass = 'bg-success'; 
                                            $icon = '🧠'; 
                                        } elseif($u['tipo_usuario'] == 'administrador'){ 
                                            $badgeClass = 'bg-dark'; 
                                            $icon = '🛡️'; 
                                        }
                                    ?>
                                    <span class="badge rounded-pill <?php echo $badgeClass; ?> px-3 py-2">
                                        <?php echo $icon . ' ' . strtoupper($u['tipo_usuario']); ?>
                                    </span>
                                </td>

                                <td class="text-end">
                                    <div class="btn-group" role="group">
                                        <a href="modificar.php?id=<?php echo $u['usuario_id']; ?>"
                                            class="btn btn-sm btn-outline-primary" title="Editar Usuario">
                                            ✏️
                                        </a>
                                        <a href="baja.php?id=<?php echo $u['usuario_id']; ?>"
                                            class="btn btn-sm btn-outline-danger" title="Eliminar Usuario"
                                            onclick="return confirm('¿Estás seguro de que quieres eliminar a <?php echo $u['nombres']; ?>? Se perderá su progreso.')">
                                            🗑️
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <?php endwhile; ?>
                        </tbody>
                    </table>
                </div> <?php if(mysqli_num_rows($res) == 0): ?>
                <div class="alert alert-warning text-center mt-3">
                    No hay usuarios registrados todavía.
                </div>
                <?php endif; ?>

            </div>
        </div>

        <div class="text-center mt-4">
            <a href="../menu.php" class="text-decoration-none text-muted small">
                ← Volver al Menú Principal
            </a>
        </div>

    </div>


</body>

</html>