<?php

// 1. Iniciamos la sesión si no está iniciada
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/*
 * Detecta automáticamente si estamos:
 * - En LOCAL (XAMPP → localhost/playgo)
 * - O en HOSTING (InfinityFree)
 * 
 * Si estamos en localhost:
 * Devuelve /playgo
 * 
 * Si estamos en hosting:
 * Devuelve vacío ""
 * 
 * Esto evita tener que cambiar rutas manualmente
 * al subir el proyecto al hosting.
 */
function rutaBase()
{
    return (strpos($_SERVER['HTTP_HOST'], 'localhost') !== false) ? '/playgo' : '';
}

/*
 * Verifica si hay un usuario logueado.
 * 
 * Si NO hay sesión iniciada:
 * lo redirige automáticamente al login.
 */
function comprobarSesion()
{
    if (!isset($_SESSION['id'])) {

        // Redirección dinámica compatible
        // con LOCAL y HOSTING
        header("Location: " . rutaBase() . "/autenticacion/login.php");

        exit;
    }
}

/*
 * Verifica si el usuario es ADMINISTRADOR.
 */
function comprobarAdmin()
{
    // Primero comprobamos si está logueado
    comprobarSesion();

    // Si no es administrador,
    // lo mandamos a la portada
    if ($_SESSION['tipo_usuario'] !== 'administrador') {

        header("Location: " . rutaBase() . "/index.php");

        exit;
    }
}

/*
 * Verifica si el usuario es JUGADOR
 * (Niño o Adulto).
 */
function comprobarJugador()
{
    // Primero comprobamos si está logueado
    comprobarSesion();

    // Si NO es niño ni adulto,
    // lo mandamos a la portada
    if (
        $_SESSION['tipo_usuario'] !== 'nino' &&
        $_SESSION['tipo_usuario'] !== 'adulto'
    ) {

        header("Location: " . rutaBase() . "/index.php");

        exit;
    }
}
