<?php

/**
 * Limpia la sesión en el servidor y la memoria del chatbot en el cliente.
 */

// 1. Iniciamos la sesión para poder destruirla
session_start();

// 2. Limpiamos todas las variables de sesión del servidor
$_SESSION = array();

// 3. Borramos la cookie de sesión si existe
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

// 4. Destruimos la sesión en el servidor
session_destroy();

// 5. Limpiamos el LocalStorage y redirigimos mediante JS
// Esto asegura que el chatbot vuelva a tratar al usuario como "Invitado"
echo "<script>
    localStorage.removeItem('usuario_id');
    localStorage.removeItem('usuario_nombre');
    window.location.href = '../index.php';
</script>";
exit;
