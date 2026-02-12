<?php
// /playgo/paginas/soporte.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    
    // Configuración del correo
    $para = "soporte.ayuda.playgo@gmail.com";
    $titulo = "SOPORTE PLAYGO: " . $asunto;
    $cuerpo = "Has recibido una nueva solicitud:\n\nAsunto: $asunto\n\nMensaje: $mensaje";
    $cabeceras = "From: no-reply@playgo.com";

    // Enviamos el correo (Recuerda que en Localhost puede no llegar, pero el código es correcto)
    @mail($para, $titulo, $cuerpo, $cabeceras);

    echo "<script>
            alert('¡Reporte enviado con éxito! Revisaremos tu mensaje pronto.');
            window.close();
          </script>";
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Soporte Técnico | PlayGo</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f1f2f6;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .soporte-card {
            background: white;
            padding: 40px;
            border: 4px solid black;
            border-radius: 15px;
            box-shadow: 12px 12px 0px black;
            width: 100%;
            max-width: 450px;
        }
        h2 { margin-top: 0; font-weight: 700; color: #2d3436; text-align: center; }
        label { display: block; margin-bottom: 5px; font-weight: 600; }
        input, textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 3px solid black;
            border-radius: 8px;
            font-family: inherit;
            box-sizing: border-box;
        }
        button {
            width: 100%;
            background-color: #6c5ce7;
            color: white;
            padding: 15px;
            border: 3px solid black;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            box-shadow: 4px 4px 0px black;
            transition: all 0.2s;
        }
        button:hover {
            transform: translate(-2px, -2px);
            box-shadow: 7px 7px 0px black;
        }
    </style>
</head>
<body>
    <div class="soporte-card">
        <h2>📩 Formulario de Ayuda</h2>
        <form method="POST">
            <label for="asunto">¿Cuál es el motivo?</label>
            <input type="text" name="asunto" id="asunto" placeholder="Ej: No carga un juego" required>

            <label for="mensaje">Cuéntanos los detalles:</label>
            <textarea name="mensaje" id="mensaje" rows="5" placeholder="Escribe aquí tu duda o sugerencia..." required></textarea>

            <button type="submit">ENVIAR A SOPORTE</button>
        </form>
        <p style="text-align: center; margin-top: 20px; font-size: 0.8rem; color: #636e72;">
            Se enviará una copia a: soporte.ayuda.playgo@gmail.com
        </p>
    </div>
</body>
</html>