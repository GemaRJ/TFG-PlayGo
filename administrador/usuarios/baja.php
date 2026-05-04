<?php
// Actualizamos las rutas a la carpeta 'configuracion' del proyecto PlayGo
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
/** @var mysqli $conn */

// Verificamos que sea administrador para permitir el borrado
comprobarAdmin();

// Obtenemos el ID del usuario a eliminar
$id = intval($_GET['id'] ?? 0);

if ($id > 0) {
    // Seguridad: El administrador no puede borrarse a sí mismo
    if ($id == $_SESSION['id']) {
        die("Error: Por seguridad, no puedes eliminar tu propia cuenta de administrador.");
    }

    // Ejecutamos la eliminación en la tabla 'usuario' de PlayGo
    $sql = "DELETE FROM usuario WHERE usuario_id = $id";

    if (mysqli_query($conn, $sql)) {
        // Redirigimos al listado con éxito
        header("Location: listar.php?msg=eliminado");
    } else {
        echo "Error al intentar eliminar el registro: " . mysqli_error($conn);
    }
} else {
    // Si no hay ID válido, volvemos a la lista
    header("Location: listar.php");
}
exit;
