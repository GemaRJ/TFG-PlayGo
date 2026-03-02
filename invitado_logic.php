<?php
// UBICACIÓN: /playgo/invitado_logic.php

session_start();
session_unset();
session_destroy();
session_start();

// Crear sesión falsa
$_SESSION['id'] = 0;
$_SESSION['nombre'] = 'Explorador Anónimo';
$_SESSION['tipo_usuario'] = 'invitado';

// Enviar al panel
header("Location: panel.php");
exit();
