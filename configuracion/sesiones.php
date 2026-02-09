<?php
// Evitamos iniciar la sesión si ya está activa para evitar el aviso (Notice)
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Verifica si hay un usuario logueado.
 * Si no, lo manda al login de PlayGo.
 */
function comprobarSesion() {
    if (!isset($_SESSION['id'])) {
        header("Location: /minijuegos-daw/autenticacion/login.php");
        exit;
    }
}

/**
 * Verifica si el usuario es ADMINISTRADOR.
 */
function comprobarAdmin() {
    comprobarSesion();
    if ($_SESSION['tipo_usuario'] !== 'administrador') {
        header("Location: /minijuegos-daw/index.html");
        exit;
    }
}

/**
 * Verifica si el usuario es un JUGADOR (Niño o Adulto).
 * Útil para proteger el panel principal de juegos.
 */
function comprobarJugador() {
    comprobarSesion();
    // Verificamos que sea niño o adulto según la nueva temática
    if ($_SESSION['tipo_usuario'] !== 'nino' && $_SESSION['tipo_usuario'] !== 'adulto') {
        header("Location: /minijuegos-daw/index.html");
        exit;
    }
}
?>