<?php

// --- 1. ACTIVAR CHIVATOS DE ERROR ---
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

// --- 2. CONEXIÓN SEGURA ---
if (file_exists("configuracion/conexion.php")) {
    require_once "configuracion/conexion.php";
} else {
    // Si no existe, no matamos la página, solo avisamos (para desarrollo)
    // die("❌ Error Crítico: No encuentro el archivo 'configuracion/conexion.php'.");
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
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PlayGo | Tu Portal de Juegos</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/index.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="chatbot/bot.css">
    <link rel="stylesheet" href="utils/lang_selector.css">
    <link rel="icon" href="./assets/img/icono192-jugando-videojuegos.png?v=3" type="image/png">
    <link rel="manifest" href="/playgo/manifest.json">
    <link rel="stylesheet" href="assets/css/footer.css?v=<?php echo time(); ?>">
    <meta name="theme-color" content="#0d1b2a">
</head>

<body>

    <nav class="barra-navegacion">
        <div class="contenido-nav">
            <a href="index.php" class="logo" style="display: flex; align-items: center;">
                <img src="assets/img/logoPlayGo.png" alt="PlayGo logo" class="logoPlayGo">
                <div>PLAY<span>GO</span></div>
            </a>
            <div class="menu-derecha" style="display: flex; align-items: center; gap: 15px;">
                <div class="lang-selector-panel">
                    <button id="lang-es" onclick="aplicarTraduccion('es')"><img src="https://flagcdn.com/w20/es.png" width="20" alt="ES"> ES</button>
                    <button id="lang-en" onclick="aplicarTraduccion('en')"><img src="https://flagcdn.com/w20/gb.png" width="20" alt="UK"> UK</button>
                </div>
                <a href="autenticacion/login.php" class="boton-principal" data-key="index_login">
                    👤 Iniciar Sesión
                </a>
            </div>
        </div>
    </nav>

    <header class="hero-banner">
        <div class="hero-contenido">
            <h1 data-key="index_title">Encuentra tu próximo reto</h1>
            <p data-key="index_subtitle">Diversión educativa para niños y desafíos mentales para adultos.</p>

            <div class="buscador">
                <input type="text" placeholder="¿Qué quieres jugar hoy?" data-key-placeholder="index_search_plc">
                <a href="autenticacion/login.php" class="boton-buscar" data-key="index_search_btn">BUSCAR</a>
            </div>
        </div>
    </header>

    <main id="catalogo" class="seccion-principal portal-galactico">

        <?php if (isset($error_sql)): ?>
            <div class="alert error">Error SQL: <?php echo $error_sql; ?></div>
        <?php endif; ?>

        <div class="contenedor-opciones">

            <a href="/playgo/invitado_logic.php" class="tarjeta-portal kids">

                <div class="game-bubble b-kids-1" style="top: 15%; left: 10%;">
                    <img src="juegos/ninos/cuenta_numeros/imagenes/logoCuentaNumeros.png" alt="Números">
                </div>
                <div class="game-bubble b-kids-2" style="top: 70%; left: 15%;">
                    <img src="juegos/ninos/cuenta_letras/utils/imagenes/logoCuentaLetras.png" alt="Letras">
                </div>
                <div class="game-bubble b-kids-3" style="top: 15%; right: 5%;">
                    <img src="juegos/ninos/tres_raya/utils/img/logoTresRaya.png" alt="Raya">
                </div>

                <div class="contenido-portal">
                    <div class="icono-flotante">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2a7 7 0 0 1 7 8H5a7 7 0 0 1 7-8z" />
                            <path d="M2 12h20" />
                            <path d="M5 12v4a3 3 0 0 0 6 0v-4" />
                            <path d="M13 12v4a3 3 0 0 0 6 0v-4" />
                        </svg>
                    </div>
                    <h2 data-key="index_kids_sector">SECTOR NIÑOS</h2>
                    <p data-key="index_kids_desc">Aprende jugando. Matemáticas, lógica y diversión.</p>
                    <span class="btn-accion" data-key="index_enter_kids">ENTRAR A LA NAVE</span>
                </div>
                <div class="fondo-brillo"></div>
            </a>

            <a href="/playgo/autenticacion/login.php" class="tarjeta-portal adults">

                <div class="game-bubble b-adults-1" style="top: 20%; right: 10%;">
                    <img src="juegos/adultos/trivial/img/trivial.png" alt="Trivial">
                </div>
                <div class="game-bubble b-adults-2" style="top: 65%; right: 20%;">
                    <img src="juegos/adultos/blackjack/images/blackjack.png" alt="Cartas">
                </div>
                <div class="game-bubble b-adults-3" style="top: 15%; left: 15%;">
                    <img src="juegos/adultos/impostor/img/impostor.png" alt="Impostor">
                </div>

                <div class="contenido-portal">
                    <div class="icono-flotante">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                    </div>
                    <h2 data-key="index_adults_sector">SECTOR ADULTOS</h2>
                    <p data-key="index_adults_desc">Juegos mentales para mentes maestras.</p>
                    <span class="btn-accion" data-key="index_enter_adults">INICIAR MISIÓN</span>
                </div>
                <div class="fondo-brillo"></div>
            </a>

        </div>

        <div class="zona-invitado">
            <p data-key="index_guest_desc">¿Tienes menos de 18 años? Prueba nuestros sistemas sin registrarte y accede a juegos infantiles.</p>
            <a href="invitado_logic.php" class="btn-invitado" data-key="index_guest_btn">
                🛡️ Acceso Seguro: Modo Cadete (Sin Registro)
            </a>
        </div>

    </main>
    <?php include 'footer.php'; ?>

    <script src="utils/idiomas.js"></script>
    <script src="utils/traductor.js"></script>
    <script src="chatbot/bot.js"></script>
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/playgo/service-worker.js').then(function (registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function (err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }
    </script>
</body>

</html>