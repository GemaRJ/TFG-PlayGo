<?php
/* Limpia la sesión en el servidor y la memoria del chatbot en el cliente. */

// Cargamos sesiones.php
require_once "../configuracion/sesiones.php";

// Limpiamos todas las variables de sesión del servidor
$_SESSION = array();

// Borramos la cookie de sesión si existe
if (ini_get("session.use_cookies")) {

    $params = session_get_cookie_params();

    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params["path"],
        $params["domain"],
        $params["secure"],
        $params["httponly"]
    );
}

// Destruimos la sesión en el servidor
session_destroy();

// Limpiamos LocalStorage y redirigimos
echo "<script>
    localStorage.removeItem('usuario_id');
    localStorage.removeItem('usuario_nombre');

    window.location.href = '../index.php';
</script>";

exit;
