<?php
// UBICACIÓN: /playgo/invitado_logic.php

require_once "configuracion/sesiones.php";

// Limpiar sesión anterior
session_unset();
session_destroy();

session_start();

// Crear sesión falsa de invitado
$_SESSION['id'] = 0;
$_SESSION['nombre'] = 'Explorador Anónimo';
$_SESSION['tipo_usuario'] = 'invitado';

// Enviar al panel
header("Location: " . rutaBase() . "/panel.php");

exit();
