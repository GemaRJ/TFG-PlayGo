<?php
// UBICACIÓN: /playgo/panel.php

require_once "configuracion/sesiones.php";
// require_once "configuracion/conexion.php"; 
comprobarJugador();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zona de Juegos | PlayGo</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/panel.css?v=<?php echo time(); ?>">
</head>

<body class="bg-light">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top main-navbar">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
                <span class="fs-3 me-2">🎮</span> PLAYGO
            </a>

            <div class="d-flex align-items-center gap-3">
                <div class="text-white text-end d-none d-md-block lh-1">
                    <div class="fw-bold small"><?php echo htmlspecialchars($_SESSION['nombre']); ?></div>
                    <span class="badge bg-white text-primary rounded-pill" style="font-size: 0.7rem;">
                        <?php echo strtoupper($_SESSION['tipo_usuario']); ?>
                    </span>
                </div>
                <a href="autenticacion/logout.php" class="btn btn-danger btn-sm rounded-pill fw-bold px-3">
                    Salir
                </a>
            </div>
        </div>
    </nav>

    <div class="d-flex min-vh-100 pt-5 main-layout">

        <div class="sidebar-area overflow-auto py-4 shadow-sm">
            <h6 class="px-4 text-muted fw-bold small mb-4 border-start border-4 border-primary ms-3 title-menu">
                TUS JUEGOS
            </h6>

            <div class="list-group list-group-flush px-3">

                <?php if ($_SESSION['tipo_usuario'] === 'adulto'): ?>
                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center active"
                    onclick="cargarJuego('juegos/adultos/trivial/index.html', this)">
                    <span class="fs-3 p-2 bg-light rounded-3">🧠</span>
                    <div>
                        <div class="fw-bold fs-5">Trivial</div>
                        <small class="text-muted">Conocimiento</small>
                    </div>
                </button>

                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center"
                    onclick="cargarJuego('juegos/adultos/blackjack/index.html', this)">
                    <span class="fs-3 p-2 bg-light rounded-3">♠️</span>
                    <div>
                        <div class="fw-bold fs-5">Blackjack</div>
                        <small class="text-muted">Cartas</small>
                    </div>
                </button>

                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center"
                    onclick="cargarJuego('juegos/adultos/impostor/index.html', this)">
                    <span class="fs-3 p-2 bg-light rounded-3">🕵️</span>
                    <div>
                        <div class="fw-bold fs-5">Impostor</div>
                        <small class="text-muted">Estrategia</small>
                    </div>
                </button>

                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center"
                    onclick="cargarJuego('juegos/adultos/tabu/index.html', this)">
                    <span class="fs-3 p-2 bg-light rounded-3">🚫</span>
                    <div>
                        <div class="fw-bold fs-5">Tabú</div>
                        <small class="text-muted">Palabras</small>
                    </div>
                </button>

                <?php else: ?>
                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center active"
                    onclick="cargarJuego('juegos/niños/cuenta_numeros/index.html', this)">
                    <span class="fs-3 p-2 bg-light-purple rounded-3">🔢</span>
                    <div>
                        <div class="fw-bold fs-5">Cuenta Números</div>
                        <small class="text-muted">Matemáticas</small>
                    </div>
                </button>

                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center"
                    onclick="cargarJuego('juegos/niños/cuenta_letras/index.html', this)">
                    <span class="fs-3 p-2 bg-light-blue rounded-3">🔤</span>
                    <div>
                        <div class="fw-bold fs-5">Cuenta Letras</div>
                        <small class="text-muted">Vocabulario</small>
                    </div>
                </button>

                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center"
                    onclick="cargarJuego('juegos/niños/memory/index.html', this)">
                    <span class="fs-3 p-2 bg-light-green rounded-3">🃏</span>
                    <div>
                        <div class="fw-bold fs-5">Memory</div>
                        <small class="text-muted">Memoria</small>
                    </div>
                </button>

                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center"
                    onclick="cargarJuego('juegos/niños/tres_raya/menu.html', this)">
                    <span class="fs-3 p-2 bg-light rounded-3">❌</span>
                    <div>
                        <div class="fw-bold fs-5">Tres en Raya</div>
                        <small class="text-muted">Clásico</small>
                    </div>
                </button>

                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center"
                    onclick="cargarJuego('juegos/niños/trivial/index.html', this)">
                    <span class="fs-3 p-2 bg-light-blue rounded-3">🎓</span>
                    <div>
                        <div class="fw-bold fs-5">Trivial Kids</div>
                        <small class="text-muted">Preguntas</small>
                    </div>
                </button>

                <button
                    class="list-group-item list-group-item-action border-0 shadow-sm p-3 mb-3 rounded-4 d-flex gap-3 align-items-center"
                    onclick="cargarJuego('juegos/niños/tabu/index.html', this)">
                    <span class="fs-3 p-2 bg-light-purple rounded-3">🙊</span>
                    <div>
                        <div class="fw-bold fs-5">Tabú Kids</div>
                        <small class="text-muted">Adivina</small>
                    </div>
                </button>

                <?php endif; ?>
            </div>
        </div>

        <div class="game-area d-flex flex-column p-4 bg-secondary-subtle">

            <div class="d-flex flex-column flex-grow-1 shadow-lg rounded-4 overflow-hidden bg-dark">
                <div class="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center"
                    style="height: 60px;">
                    <span class="badge bg-danger fw-bold animate-pulse">🔴 EN JUEGO</span>
                    <button class="btn btn-sm btn-outline-dark rounded-pill fw-bold px-3" onclick="pantallaCompleta()">
                        ⛶ Pantalla Completa
                    </button>
                </div>

                <div class="position-relative bg-black">
                    <iframe id="pantalla-juego"
                        src="<?php echo ($_SESSION['tipo_usuario'] === 'adulto') ? 'juegos/adultos/trivial/index.html' : 'juegos/niños/cuenta_numeros/index.html'; ?>"
                        style="width: 100%; border: none; min-height: 800px;" onload="ajustarAltura(this)"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>

            <footer class="pie-pagina text-center mt-4">
                <div class="contenido-footer">
                    <p class="logo-footer mb-0">🎮 PLAYGO</p>
                    <p class="mb-0">&copy; <?php echo date('Y'); ?> PlayGo Team - Proyecto DAW</p>
                </div>
            </footer>

        </div>

    </div>


    <script>
    /* 1. VARIABLES GLOBALES */
    // Las declaramos aquí para que todas las funciones puedan verlas
    let iframeJuego = null;
    let botonesMenu = null;

    /* 2. INICIALIZACIÓN DEL DOM */
    document.addEventListener("DOMContentLoaded", () => {

        // Guardamos los selectores una sola vez al cargar
        iframeJuego = document.querySelector('#pantalla-juego');
        botonesMenu = document.querySelectorAll('.list-group-item');

        // Efecto Hover usando la variable ya guardada
        if (botonesMenu) {
            botonesMenu.forEach(item => {
                item.addEventListener('mouseover', () => {
                    if (!item.classList.contains('active')) {
                        item.style.transform = 'translateX(5px)';
                    }
                });

                item.addEventListener('mouseout', () => {
                    item.style.transform = 'translateX(0)';
                });
            });
        }
    });

    /* 3. FUNCIONES GLOBALES */

    // Función: Carga el juego y actualiza estilos
    function cargarJuego(ruta, btn) {
        // Usamos la variable global del iframe
        if (iframeJuego) iframeJuego.src = ruta;

        // Usamos la variable global de los botones
        if (botonesMenu) {
            botonesMenu.forEach(el => {
                el.classList.remove('active', 'bg-primary', 'text-white');
                el.classList.add('bg-white', 'text-dark');

                const icon = el.querySelector('span');
                if (icon) icon.style.background = '#f8f9fa';
            });
        }

        // Activar botón pulsado
        btn.classList.remove('bg-white', 'text-dark');
        btn.classList.add('active', 'bg-primary', 'text-white');

        const activeIcon = btn.querySelector('span');
        if (activeIcon) activeIcon.style.background = 'rgba(255,255,255,0.2)';
    }

    // Función: Pantalla Completa
    function pantallaCompleta() {
        if (!iframeJuego) return;

        if (iframeJuego.requestFullscreen) {
            iframeJuego.requestFullscreen();
        } else if (iframeJuego.webkitRequestFullscreen) {
            iframeJuego.webkitRequestFullscreen();
        } else if (iframeJuego.msRequestFullscreen) {
            iframeJuego.msRequestFullscreen();
        }
    }

    // Función: Ajuste de altura automático
    function ajustarAltura(iframe) {
        // Esta función usa el elemento 'this' que le pasa el HTML, es independiente
        if (iframe) {
            iframe.style.height = "800px";

            try {
                const alturaContenido = iframe.contentWindow.document.body.scrollHeight;
                if (alturaContenido > 800) {
                    iframe.style.height = (alturaContenido + 50) + "px";
                }
            } catch (e) {
                // Fallback de seguridad
                iframe.style.height = "1300px";
            }
        }
    }
    </script>

</html>