<?php
/*
 * CONTROLADOR DE ACCIONES - PLAYGO
 * Maneja: Resolver, Reabrir y Eliminar incidencias.
 */
require_once "../../configuracion/conexion.php";
require_once "../../configuracion/sesiones.php";
comprobarSesion();

if (!isset($_SESSION['tipo_usuario']) || $_SESSION['tipo_usuario'] !== 'administrador') {
    header("Location: ../../index.php");
    exit;
}

if (isset($_GET['id']) && isset($_GET['accion'])) {
    $id = mysqli_real_escape_string($conn, $_GET['id']);
    $accion = $_GET['accion'];

    switch ($accion) {
        case 'resolver':
            $sql = "UPDATE incidencias SET estado = 'resuelta' WHERE id_incidencia = $id";
            break;
        case 'reabrir':
            $sql = "UPDATE incidencias SET estado = 'pendiente' WHERE id_incidencia = $id";
            break;
        case 'eliminar':
            $sql = "DELETE FROM incidencias WHERE id_incidencia = $id";
            break;
        default:
            header("Location: listar.php");
            exit;
    }

    if (mysqli_query($conn, $sql)) {
        header("Location: listar.php?msg=ok");
    } else {
        header("Location: listar.php?msg=error");
    }
} else {
    header("Location: listar.php");
}
exit;