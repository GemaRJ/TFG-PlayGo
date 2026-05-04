<?php
require_once "../configuracion/conexion.php";
/** @var mysqli $conn */

// Capturamos el JSON recibido
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(['success' => false, 'error' => 'No se recibieron datos']);
    exit;
}

$u_id = intval($data['usuario_id']);
$j_id = intval($data['id_juego']);
$puntos = intval($data['puntuacion']);

// Consulta preparada por seguridad (Resolución Ticket Seguridad)
$sql = "INSERT INTO ranking (usuario_id, id_juego, puntuacion, fecha_partida) VALUES (?, ?, ?, NOW())";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iii", $u_id, $j_id, $puntos);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $stmt->error]);
}

$stmt->close();
$conn->close();
