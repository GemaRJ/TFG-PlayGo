<?php
// UBICACIÓN: /playgo/administrador/juegos/listar.php
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
/** @var mysqli $conn */
comprobarAdmin();

// Consulta de juegos
$sql = "SELECT * FROM juegos ORDER BY id_juego DESC";
$res = mysqli_query($conn, $sql);
$juegos = mysqli_fetch_all($res, MYSQLI_ASSOC);

mysqli_free_result($res);
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventario Galáctico | PlayGo Admin</title>
    <link rel="icon" type="image/png" href="../../assets/img/icono192-jugando-videojuegos.png">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../assets/css/menu.css">
    <style>
        /* Estilos específicos para la Tabla Espacial */
        .tabla-contenedor {
            width: 100%;
            overflow-x: auto;
            margin-top: 20px;
        }

        .table-space {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 12px;
            /* Separación entre filas */
            color: white;
        }

        .table-space thead th {
            color: #00d2ff;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 1px;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 210, 255, 0.3);
            text-align: left;
        }

        .table-space tbody tr {
            background: rgba(255, 255, 255, 0.03);
            transition: all 0.3s ease;
        }

        .table-space tbody tr:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .table-space td {
            padding: 15px;
            vertical-align: middle;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Redondear esquinas de las filas */
        .table-space td:first-child {
            border-radius: 15px 0 0 15px;
            border-left: 1px solid rgba(255, 255, 255, 0.05);
        }

        .table-space td:last-child {
            border-radius: 0 15px 15px 0;
            border-right: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Estilo para las imágenes miniatura */
        .img-radar {
            width: 60px;
            height: 45px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid rgba(0, 210, 255, 0.3);
            box-shadow: 0 0 10px rgba(0, 210, 255, 0.2);
        }

        /* Badges Galácticos */
        .badge-sector {
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 800;
            text-transform: uppercase;
        }

        .bg-ninos {
            background: rgba(0, 210, 255, 0.2);
            color: #00d2ff;
            border: 1px solid #00d2ff;
        }

        .bg-adultos {
            background: rgba(168, 85, 247, 0.2);
            color: #a855f7;
            border: 1px solid #a855f7;
        }

        .btn-accion {
            padding: 6px 12px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.75rem;
            font-weight: 600;
            transition: 0.3s;
            margin-left: 5px;
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
        }

        .btn-delete:hover {
            background: #ff4444;
            color: white;
        }

        /* Evitar vibración de la caja principal al hacer hover */
        .card-comando:hover {
            transform: none !important;
        }
    </style>
</head>

<body class="portal-galactico">

    <main class="admin-main">
        <div class="header-panel">
            <div class="logo">PLAY<span>GO</span> ADMIN</div>
            <h1>Inventario de Misiones</h1>
            <p>Monitoreo y gestión de los juegos desplegados en el sistema.</p>
        </div>

        <div style="text-align: right; width: 100%; margin-bottom: 15px;">
            <a href="alta.php" class="btn-admin" style="display: inline-block; width: auto; padding: 10px 25px;">
                + Inyectar Nueva Misión
            </a>
        </div>

        <div class="card-comando" style="width: 100%;">
            <div class="tabla-contenedor">
                <table class="table-space">
                    <thead>
                        <tr>
                            <th>Vista</th>
                            <th>Código</th>
                            <th>Nombre de Misión</th>
                            <th>Sector</th>
                            <th style="text-align: center;">Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($juegos as $j): ?>
                            <tr>
                                <td>
                                    <?php
                                    $cat = $j['categoria'];
                                    $ruta = $j['ruta'];
                                    $foto = "../../assets/img/icono192-jugando-videojuegos.png"; // Icono por defecto

                                    if ($cat == 'adultos') {
                                        switch ($ruta) {
                                            case 'trivial':
                                                $foto = "../../juegos/adultos/trivial/img/trivial.png";
                                                break;
                                            case 'blackjack':
                                                $foto = "../../juegos/adultos/blackjack/images/blackjack.png";
                                                break;
                                            case 'impostor':
                                                $foto = "../../juegos/adultos/impostor/img/impostor.png";
                                                break;
                                            case 'tabu':
                                                $foto = "../../juegos/adultos/tabu/img/tabu.png";
                                                break;
                                        }
                                    } else if ($cat == 'ninos' || $cat == 'niños') {
                                        switch ($ruta) {
                                            case 'cuenta_numeros':
                                                $foto = "../../juegos/ninos/cuenta_numeros/imagenes/logoCuentaNumeros.png";
                                                break;
                                            case 'cuenta_letras':
                                                $foto = "../../juegos/ninos/cuenta_letras/utils/imagenes/logoCuentaLetras.png";
                                                break;
                                            case 'memory':
                                                $foto = "../../juegos/ninos/memory/img/logoMemory.png";
                                                break;
                                            case 'tres_raya':
                                                $foto = "../../juegos/ninos/tres_raya/utils/img/logoTresRaya.png";
                                                break;
                                            case 'trivial':
                                                $foto = "../../juegos/ninos/trivial/img/logoTrivial.png";
                                                break;
                                            case 'tabu':
                                                $foto = "../../juegos/ninos/tabu/img/logoTabu.jpg";
                                                break;
                                        }
                                    }
                                    ?>
                                    <img src="<?php echo $foto; ?>" class="img-radar"
                                        onerror="this.onerror=null; this.src='../../assets/img/icono192-jugando-videojuegos.png'">
                                </td>
                                <td style="color: #00d2ff; font-family: monospace;">#<?php echo $j['id_juego']; ?></td>
                                <td style="font-weight: 600;"><?php echo htmlspecialchars($j['nombre']); ?></td>
                                <td>
                                    <span
                                        class="badge-sector <?php echo ($j['categoria'] == 'adultos' ? 'bg-adultos' : 'bg-ninos'); ?>">
                                        <?php echo ($j['categoria'] == 'adultos' ? '🧠 ADULTOS' : '🧸 NIÑOS'); ?>
                                    </span>
                                </td>
                                <td>
                                    <div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
                                        <a href="editar.php?id=<?php echo $j['id_juego']; ?>" class="btn-admin"
                                            style="width: auto; margin-top: 0; padding: 5px 15px; font-size: 0.7rem;">Editar</a>
                                        <a href="baja.php?id=<?php echo $j['id_juego']; ?>" class="btn-admin"
                                            style="width: auto; margin-top: 0; padding: 5px 10px; border-color: #ff4444; color: #ff4444;"
                                            onclick="return confirm('¿Confirmar desinstalación de la misión?')">🗑️</a>
                                    </div>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
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