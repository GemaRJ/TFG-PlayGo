<?php
// UBICACIÓN: /playgo/administrador/usuarios/buscar.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin(); 

$busqueda = $_GET['busqueda'] ?? '';
$usuarios = [];

if($busqueda){
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
    <title>Buscar Jugadores | PlayGo Admin</title>

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
                Buscador Inteligente
            </div>
        </div>
    </nav>

    <div class="container my-5">

        <div class="card shadow-sm border-0 rounded-4 animate-fade-in">
            <div class="card-body p-5">

                <div class="text-center mb-4">
                    <h2 class="fw-bold text-playgo">Encontrar Jugador</h2>
                    <p class="text-muted">Busca por nombre, correo electrónico o tipo de perfil</p>
                </div>

                <form method="GET" class="mb-5">
                    <div class="input-group input-group-lg shadow-sm">
                        <span class="input-group-text bg-white text-muted border-end-0">
                            🔍
                        </span>
                        <input type="text" name="busqueda" class="form-control border-start-0"
                            placeholder="Escribe aquí (ej: Juan, nino, correo@...)"
                            value="<?php echo htmlspecialchars($busqueda); ?>" required>
                        <button class="btn btn-primary fw-bold px-4" type="submit"
                            style="background-color: var(--playgo-blue); border: none;">
                            BUSCAR
                        </button>
                    </div>
                </form>

                <?php if($busqueda): ?>
                <h5 class="mb-4 text-muted fw-bold border-bottom pb-2">
                    Resultados para: <span class="text-playgo">"<?php echo htmlspecialchars($busqueda); ?>"</span>
                </h5>

                <?php if($usuarios): ?>
                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-light">
                            <tr>
                                <th class="text-muted small">ID</th>
                                <th class="text-muted small">JUGADOR</th>
                                <th class="text-muted small">CORREO</th>
                                <th class="text-muted small">PERFIL</th>
                                <th class="text-end text-muted small">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach($usuarios as $u): ?>
                            <tr>
                                <td class="fw-bold text-muted">#<?php echo $u['usuario_id']; ?></td>

                                <td>
                                    <div class="fw-bold text-dark"><?php echo htmlspecialchars($u['nombres']); ?></div>
                                </td>

                                <td class="text-muted"><?php echo htmlspecialchars($u['correo']); ?></td>

                                <td>
                                    <?php 
                                                $claseBadge = 'bg-secondary';
                                                $icono = '👤';
                                                if($u['tipo_usuario'] == 'nino') { $claseBadge = 'bg-info text-dark'; $icono = '🧸'; }
                                                if($u['tipo_usuario'] == 'adulto') { $claseBadge = 'bg-success'; $icono = '🧠'; }
                                                if($u['tipo_usuario'] == 'administrador') { $claseBadge = 'bg-dark'; $icono = '🛡️'; }
                                            ?>
                                    <span class="badge rounded-pill <?php echo $claseBadge; ?> px-3 py-2">
                                        <?php echo $icono . ' ' . strtoupper($u['tipo_usuario']); ?>
                                    </span>
                                </td>

                                <td class="text-end">
                                    <div class="btn-group">
                                        <a href="modificar.php?id=<?php echo $u['usuario_id']; ?>"
                                            class="btn btn-sm btn-outline-primary" title="Editar">
                                            ✏️ Editar
                                        </a>
                                        <a href="baja.php?id=<?php echo $u['usuario_id']; ?>"
                                            class="btn btn-sm btn-outline-danger"
                                            onclick="return confirm('¿Estás seguro de eliminar a <?php echo $u['nombres']; ?>? Esta acción no se puede deshacer.')"
                                            title="Eliminar">
                                            🗑️ Borrar
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>

                <?php else: ?>
                <div class="alert alert-warning d-flex align-items-center rounded-3" role="alert">
                    <span class="fs-2 me-3">🤷‍♂️</span>
                    <div>
                        <h5 class="alert-heading fw-bold mb-1">Sin coincidencias</h5>
                        <p class="mb-0">No hemos encontrado ningún jugador con esos datos. Intenta con otro nombre o
                            correo.</p>
                    </div>
                </div>
                <?php endif; ?>
                <?php endif; ?>

            </div>
        </div>

        <div class="text-center mt-4">
            <a href="listar.php" class="btn btn-link text-decoration-none text-muted">
                ← Volver al Listado Completo
            </a>
        </div>

    </div>


</body>

</html>