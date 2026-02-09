<?php
// Iniciamos la sesión de forma segura si no existe una previa
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Verifica si hay un usuario logueado.
 * Si no, lo redirige al login dentro de la carpeta /playgo/.
 */
function comprobarSesion() {
    if (!isset($_SESSION['id'])) {
        // Ruta absoluta actualizada a /playgo/
        header("Location: /playgo/autenticacion/login.php");
        exit;
    }
}

/**
 * Verifica si el usuario es ADMINISTRADOR.
 * Si no lo es, lo expulsa a la landing page principal.
 */
function comprobarAdmin() {
    comprobarSesion();
    if ($_SESSION['tipo_usuario'] !== 'administrador') {
        header("Location: /playgo/index.html");
        exit;
    }
}

/**
 * Verifica si el usuario es un JUGADOR (Niño o Adulto).
 * Protege el acceso al panel de juegos.
 */
function comprobarJugador() {
    comprobarSesion();
    // Validamos los perfiles específicos de PlayGo
    if ($_SESSION['tipo_usuario'] !== 'nino' && $_SESSION['tipo_usuario'] !== 'adulto') {
        header("Location: /playgo/index.html");
        exit;
    }
}
?>