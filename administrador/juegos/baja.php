<?php
require_once "../../configuracion/sesiones.php";
require_once "../../configuracion/conexion.php";
comprobarAdmin();

$id = intval($_GET['id'] ?? 0);

if($id > 0) {
    mysqli_query($conn, "DELETE FROM juegos WHERE id_juego = $id");
}

header("Location: listar.php");
exit;