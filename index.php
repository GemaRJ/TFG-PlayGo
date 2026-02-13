<?php
// UBICACIÓN: /playgo/index.php

// --- 1. ACTIVAR CHIVATOS DE ERROR ---
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

// --- 2. CONEXIÓN SEGURA ---
if (file_exists("configuracion/conexion.php")) {
    require_once "configuracion/conexion.php";
} else {
    // Fallback por si acaso la ruta varía
    die("❌ Error Crítico: No encuentro el archivo 'configuracion/conexion.php'.");
}

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

// --- 3. CONSULTA BLINDADA DE JUEGOS ---
$juegos_escaparate = []; 

if (isset($conn) && $conn) {
    // Limitamos a 6 para que quede bonita la rejilla
    $sql = "SELECT * FROM juegos WHERE activo = 1 ORDER BY rand() LIMIT 6"; 
    $res = mysqli_query($conn, $sql);
    
    if ($res) {
        $juegos_escaparate = mysqli_fetch_all($res, MYSQLI_ASSOC);
    } else {
        $error_sql = mysqli_error($conn);
    }
} else {
    $error_conexion = "No hay conexión a la base de datos.";
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PlayGo | Tu Portal de Juegos</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/index.css">
    
    <link rel="stylesheet" href="chatbot/bot.css">
</head>

<body>

    <nav class="barra-navegacion">
        <div class="contenido-nav">
            <a href="index.php" class="logo">
                PLAY<span>GO</span>
            </a>
            <div class="menu-derecha">
                <a href="#catalogo" class="enlace-texto">Catálogo</a>
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
        
        <?php if (isset($error_sql)): ?>
            <div class="alert error">Error SQL: <?php echo $error_sql; ?></div>
        <?php endif; ?>
        <?php if (isset($error_conexion)): ?>
            <div class="alert error"><?php echo $error_conexion; ?></div>
        <?php endif; ?>

        <div class="rejilla-juegos">
            <?php if (!empty($juegos_escaparate)): ?>
                <?php foreach($juegos_escaparate as $juego): ?>
                
                <article class="tarjeta">
                    <div class="tarjeta-imagen">
                        <?php echo ($juego['categoria'] == 'niños') ? '🧸' : '🧠'; ?>
                    </div>
                    
                    <div class="tarjeta-cuerpo">
                        <span class="etiqueta <?php echo ($juego['categoria'] == 'niños') ? 'etiqueta-nino' : 'etiqueta-adulto'; ?>">
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
                <p class="mensaje-vacio">No hay juegos disponibles por ahora. ¡Vuelve pronto!</p>
            <?php endif; ?>
        </div>
    </main>

    <footer class="pie-pagina">
        <div class="contenido-footer">
            <p class="logo-footer">🎮 PLAYGO</p>
            <p>&copy; <?php echo date('Y'); ?> PlayGo Team - Misión Espacial</p>
        </div>
    </footer>

    <script src="chatbot/bot.js"></script>
</body>
</html>