<?php
// UBICACIÓN: /playgo/index.php

session_start();
require_once "configuracion/conexion.php";

// Redirección si ya está logueado
if (isset($_SESSION['id'])) {
    if ($_SESSION['tipo_usuario'] == 'administrador') {
        header("Location: /playgo/administrador/menu.php");
        exit;
    } else {
        header("Location: /playgo/panel.php");
        exit;
    }
}

// Consulta de juegos
$sql = "SELECT * FROM juegos WHERE activo = 1 ORDER BY rand() LIMIT 6"; 
$res = mysqli_query($conn, $sql);
$juegos_escaparate = mysqli_fetch_all($res, MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PlayGo | Tu Portal de Juegos</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/index.css">
</head>

<body>

    <nav class="barra-navegacion">
        <div class="contenido-nav">
            <a href="index.php" class="logo">
                <span>🎮</span> PLAYGO
            </a>

            <div class="menu-derecha">
                <a href="#catalogo" class="enlace-texto">Catálogo</a>
                <span class="separador">|</span>
                <a href="autenticacion/login.php" class="boton-principal">
                    👤 Iniciar Sesión
                </a>
            </div>
        </div>
    </nav>

    <header class="hero-banner">
        <div class="hero-contenido">
            <h1>Encuentra tu próximo reto</h1>
            <p>Diversión educativa para niños y desafíos mentales para adultos.</p>

            <div class="buscador">
                <input type="text" placeholder="¿Qué quieres jugar hoy?">
                <a href="autenticacion/login.php" class="boton-buscar">BUSCAR</a>
            </div>
        </div>
    </header>

    <main id="catalogo" class="seccion-principal">
        <h2 class="titulo-seccion">🔥 Destacados de la Semana</h2>

        <div class="rejilla-juegos">
            <?php if (count($juegos_escaparate) > 0): ?>
            <?php foreach($juegos_escaparate as $juego): ?>

            <article class="tarjeta">
                <div class="tarjeta-imagen">
                    <?php echo ($juego['categoria'] == 'niños') ? '🧸' : '🎲'; ?>
                </div>

                <div class="tarjeta-cuerpo">
                    <span
                        class="etiqueta <?php echo ($juego['categoria'] == 'niños') ? 'etiqueta-nino' : 'etiqueta-adulto'; ?>">
                        <?php echo strtoupper($juego['categoria']); ?>
                    </span>

                    <h3><?php echo htmlspecialchars($juego['nombre']); ?></h3>
                    <p>Haz clic para empezar a jugar este clásico.</p>

                    <a href="autenticacion/login.php" class="boton-tarjeta">
                        Jugar Ahora
                    </a>
                </div>
            </article>

            <?php endforeach; ?>
            <?php else: ?>
            <p class="mensaje-vacio">No hay juegos disponibles.</p>
            <?php endif; ?>
        </div>
    </main>

    <footer class="pie-pagina">
        <div class="contenido-footer">
            <p class="logo-footer">🎮 PLAYGO</p>
            <p>&copy; <?php echo date('Y'); ?> PlayGo Team - Proyecto DAW</p>
        </div>
    </footer>


</body>

</html>