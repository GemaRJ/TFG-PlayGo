<?php


// 1. Iniciamos la sesión si no está iniciada
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Verifica si hay un usuario logueado.
 * Si no, lo redirige al login usando la RUTA ABSOLUTA.
 * Al poner /playgo/ al principio, funcionará desde cualquier carpeta.
 */
function comprobarSesion()
{
    if (!isset($_SESSION['id'])) {
        // CORRECCIÓN CLAVE: Usamos la ruta completa desde la raíz del servidor
        header("Location: /playgo/autenticacion/login.php");
        exit;
    }
}

/**
 * Verifica si el usuario es ADMINISTRADOR.
 */
function comprobarAdmin()
{
    comprobarSesion(); // Primero miramos si está logueado
    if ($_SESSION['tipo_usuario'] !== 'administrador') {
        // Si intenta entrar y no es admin, lo mandamos a la portada
        header("Location: /playgo/index.php");
        exit;
    }
}

/**
 * Verifica si el usuario es JUGADOR (Niño o Adulto).
 */
function comprobarJugador()
{
    comprobarSesion(); // Primero miramos si está logueado
    if ($_SESSION['tipo_usuario'] !== 'nino' && $_SESSION['tipo_usuario'] !== 'adulto') {
        // Si es admin o algo raro, a la portada
        header("Location: /playgo/index.php");
        exit;
    }
}
