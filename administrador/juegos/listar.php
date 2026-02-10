<?php
// UBICACIÓN: /playgo/administrador/juegos/listar.php

require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin();

// Consulta ordenada por categoría y nombre
$res = mysqli_query($conn, "SELECT * FROM juegos ORDER BY categoria DESC, nombre ASC");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo | PlayGo Admin</title>

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
                Catálogo de Juegos
            </div>
        </div>
    </nav>

    <div class="container my-5">

        <div class="card shadow-sm border-0 rounded-4 animate-fade-in">
            <div class="card-body p-5">

                <div class="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                    <div>
                        <h2 class="fw-bold text-playgo mb-0">Catálogo de Juegos</h2>
                        <p class="text-muted small mb-0">Control de contenidos: Niños y Adultos</p>
                    </div>

                    <a href="alta.php" class="btn btn-success fw-bold rounded-pill px-4 shadow-sm"
                        style="background-color: #27ae60; border: none;">
                        <span class="me-1">+</span> Añadir Juego
                    </a>
                </div>

                <div class="table-responsive">
                    <table class="table table-hover align-middle">
                        <thead class="table-light">
                            <tr>
                                <th class="text-muted small">ID</th>
                                <th class="text-muted small">NOMBRE DEL JUEGO</th>
                                <th class="text-muted small">RUTA DE ARCHIVOS</th>
                                <th class="text-muted small text-center">SECCIÓN</th>
                                <th class="text-muted small text-end">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while($j = mysqli_fetch_assoc($res)): ?>
                            <tr>
                                <td class="fw-bold text-muted">#<?php echo $j['id_juego']; ?></td>

                                <td>
                                    <div class="fw-bold text-dark fs-5"><?php echo htmlspecialchars($j['nombre']); ?>
                                    </div>
                                </td>

                                <td>
                                    <code class="bg-light px-2 py-1 rounded text-primary border">
                                        /juegos/<?php echo $j['categoria']; ?>/<strong><?php echo $j['ruta']; ?></strong>/
                                    </code>
                                </td>

                                <td class="text-center">
                                    <?php 
                                        // Lógica visual para las etiquetas
                                        if($j['categoria'] == 'adultos'){
                                            $badgeColor = 'bg-success'; // Verde
                                            $icon = '🧠';
                                        } else {
                                            $badgeColor = 'bg-info text-dark'; // Azul clarito
                                            $icon = '🧸';
                                        }
                                    ?>
                                    <span class="badge rounded-pill <?php echo $badgeColor; ?> px-3 py-2">
                                        <?php echo $icon . ' ' . strtoupper($j['categoria']); ?>
                                    </span>
                                </td>

                                <td class="text-end">
                                    <a href="baja.php?id=<?php echo $j['id_juego']; ?>"
                                        class="btn btn-sm btn-outline-danger" title="Eliminar Juego"
                                        onclick="return confirm('¿Estás seguro de quitar <?php echo $j['nombre']; ?> de la plataforma? Esto podría romper enlaces si no borras la carpeta.')">
                                        🗑️ Eliminar
                                    </a>
                                </td>
                            </tr>
                            <?php endwhile; ?>
                        </tbody>
                    </table>
                </div>

                <?php if(mysqli_num_rows($res) == 0): ?>
                <div class="alert alert-warning text-center mt-3 rounded-3">
                    📭 El catálogo está vacío. ¡Empieza añadiendo el primer juego!
                </div>
                <?php endif; ?>

            </div>
        </div>

        <div class="text-center mt-4">
            <a href="../menu.php" class="text-decoration-none text-muted small">
                ← Volver al Panel de Administración
            </a>
        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>