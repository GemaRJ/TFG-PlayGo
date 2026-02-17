<?php
// --- LÓGICA DE INICIO ---
session_start();

$es_invitado = false;

if (isset($_SESSION['tipo_usuario']) && $_SESSION['tipo_usuario'] == 'invitado') {
    // CASO 1: ES UN INVITADO
    $es_invitado = true;
    if (!isset($_SESSION['nombre'])) $_SESSION['nombre'] = 'Explorador';
} else {
    // CASO 2: ES UN USUARIO REGISTRADO
    include_once "configuracion/sesiones.php";
    if (function_exists('comprobarJugador')) {
        comprobarJugador();
    }
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zona de Juegos | PlayGo</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/panel.css?v=<?php echo time(); ?>">
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-dark main-navbar px-3 fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold d-flex align-items-center" href="index.php">
                <span class="fs-3 me-2">🎮</span> PLAYGO
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContenido">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navContenido">
                <div class="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                    <div class="text-white text-end d-none d-md-block lh-1">
                        <div class="fw-bold small"><?php echo htmlspecialchars($_SESSION['nombre']); ?></div>
                        <span class="badge bg-white text-primary rounded-pill" style="font-size: 0.7rem;">
                            <?php echo strtoupper($_SESSION['tipo_usuario']); ?>
                        </span>
                    </div>
                    <a href="autenticacion/logout.php" class="btn btn-danger btn-sm rounded-pill fw-bold px-3">
                        Salir de la Nave
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <div class="main-layout">

        <div class="sidebar-area shadow-sm">
            <h6 class="px-4 fw-bold small mb-3 title-menu border-start border-3 border-info ms-3 ps-2">
                SISTEMA DE JUEGOS
            </h6>

            <div class="list-group list-group-flush px-3">
                <?php if ($_SESSION['tipo_usuario'] === 'adulto'): ?>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center active" onclick="cargarJuego('juegos/adultos/trivial/index.html', this)">
                        <span class="fs-3 p-2">🧠</span>
                        <div><div class="fw-bold fs-6">Trivial</div><small>Conocimiento</small></div>
                    </button>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center" onclick="cargarJuego('juegos/adultos/blackjack/index.html', this)">
                        <span class="fs-3 p-2">♠️</span>
                        <div><div class="fw-bold fs-6">Blackjack</div><small>Cartas</small></div>
                    </button>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center" onclick="cargarJuego('juegos/adultos/impostor/index.html', this)">
                        <span class="fs-3 p-2">🕵️</span>
                        <div><div class="fw-bold fs-6">Impostor</div><small>Estrategia</small></div>
                    </button>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center" onclick="cargarJuego('juegos/adultos/tabu/index.html', this)">
                        <span class="fs-3 p-2">🚫</span>
                        <div><div class="fw-bold fs-6">Tabú</div><small>Palabras</small></div>
                    </button>

                <?php else: ?>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center active" onclick="cargarJuego('juegos/ninos/cuenta_numeros/index.html', this)">
                        <span class="fs-3 p-2">🔢</span>
                        <div><div class="fw-bold fs-6">Cuenta Números</div><small>Matemáticas</small></div>
                    </button>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center" onclick="cargarJuego('juegos/ninos/cuenta_letras/index.html', this)">
                        <span class="fs-3 p-2">🔤</span>
                        <div><div class="fw-bold fs-6">Cuenta Letras</div><small>Vocabulario</small></div>
                    </button>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center" onclick="cargarJuego('juegos/ninos/memory/index.html', this)">
                        <span class="fs-3 p-2">🃏</span>
                        <div><div class="fw-bold fs-6">Memory</div><small>Memoria</small></div>
                    </button>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center" onclick="cargarJuego('juegos/ninos/tres_raya/menu.html', this)">
                        <span class="fs-3 p-2">❌</span>
                        <div><div class="fw-bold fs-6">Tres en Raya</div><small>Clásico</small></div>
                    </button>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center" onclick="cargarJuego('juegos/ninos/trivial/index.html', this)">
                        <span class="fs-3 p-2">🎓</span>
                        <div><div class="fw-bold fs-6">Trivial Kids</div><small>Preguntas</small></div>
                    </button>
                    <button class="list-group-item list-group-item-action d-flex gap-3 align-items-center" onclick="cargarJuego('juegos/ninos/tabu/index.html', this)">
                        <span class="fs-3 p-2">🙊</span>
                        <div><div class="fw-bold fs-6">Tabú Kids</div><small>Adivina</small></div>
                    </button>
                <?php endif; ?>
            </div>
        </div>

        <div class="game-area">
            
            <?php if ($es_invitado): ?>
            <div class="alert alert-invitado d-flex align-items-center shadow-sm mb-3 rounded-3 py-2" role="alert">
                <span class="fs-5 me-2">⚠️</span>
                <div>
                    <strong>Modo Invitado:</strong> Juegas sin guardar progreso. 
                    <a href="autenticacion/registro.php" class="fw-bold">Regístrate aquí</a>.
                </div>
            </div>
            <?php endif; ?>

            <div class="game-card-container">
                <div class="game-header">
                    <span class="badge bg-danger bg-opacity-75 animate-pulse">🔴 EN JUEGO</span>
                    <button class="btn btn-sm btn-outline-light rounded-pill px-3" onclick="pantallaCompleta()">
                        ⛶ Pantalla Completa
                    </button>
                </div>

                <div class="iframe-wrapper">
                    <iframe id="pantalla-juego"
                        src="<?php echo ($_SESSION['tipo_usuario'] === 'adulto') ? 'juegos/adultos/trivial/index.html' : 'juegos/ninos/cuenta_numeros/index.html'; ?>"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>

            <footer class="pie-pagina">
                <p class="mb-0">&copy; <?php echo date('Y'); ?> PlayGo Team - Misión Espacial</p>
            </footer>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>

    <script>
        /* LÓGICA JAVASCRIPT */
        let iframeJuego = null;
        let botonesMenu = null;

        document.addEventListener("DOMContentLoaded", () => {
            iframeJuego = document.querySelector('#pantalla-juego');
            botonesMenu = document.querySelectorAll('.list-group-item');
        });

        function cargarJuego(ruta, btn) {
            if (iframeJuego) iframeJuego.src = ruta;
            if (botonesMenu) {
                botonesMenu.forEach(el => el.classList.remove('active'));
            }
            btn.classList.add('active');
        }

        function pantallaCompleta() {
            if (!iframeJuego) return;
            if (iframeJuego.requestFullscreen) iframeJuego.requestFullscreen();
            else if (iframeJuego.webkitRequestFullscreen) iframeJuego.webkitRequestFullscreen();
            else if (iframeJuego.msRequestFullscreen) iframeJuego.msRequestFullscreen();
        }
    </script>
    <script src="chatbot/bot.js"></script>
</body>
</html>