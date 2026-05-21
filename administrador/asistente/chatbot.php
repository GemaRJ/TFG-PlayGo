<?php

/**
 * API ASISTENTE - PROCESAMIENTO INTERACTIVO
 */
require_once "../../configuracion/conexion.php";
require_once "../../configuracion/sesiones.php";

/** @var mysqli $conn */

// Definimos que la respuesta siempre será un objeto JSON para el JavaScript
header('Content-Type: application/json');

// Capturamos el flujo de entrada que viene del fetch de JS
$input = json_decode(file_get_contents('php://input'), true);

// Verificamos que existan tanto el mensaje como la categoría seleccionada
if (isset($input['mensaje']) && isset($input['tipo'])) {

    // Saneamiento de variables para evitar inyecciones SQL
    $mensaje = mysqli_real_escape_string($conn, $input['mensaje']);
    $tipo = mysqli_real_escape_string($conn, $input['tipo']);

    // Identificamos al usuario por su sesión; si no hay, se registra como NULL
    $usuario_id = isset($_SESSION['id']) ? $_SESSION['id'] : "NULL";

    $asunto = "Reporte interactivo desde Chatbot";

    // Inserción directa en la tabla unificada de incidencias
    $sql = "INSERT INTO incidencias (usuario_id, tipo, asunto, mensaje, estado) 
            VALUES ($usuario_id, '$tipo', '$asunto', '$mensaje', 'pendiente')";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(['status' => 'ok']);
    } else {
        echo json_encode(['status' => 'error', 'msg' => mysqli_error($conn)]);
    }
} else {
    echo json_encode(['status' => 'error', 'msg' => 'Datos incompletos']);
}
