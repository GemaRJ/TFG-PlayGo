<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Política de cookies | PlayGo</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/footer.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../assets/css/info_pagina.css?v=<?php echo time(); ?>">
    <link rel="icon" href="assets/img/jugando-videojuegos.png" type="image/png">

</head>

<body>

    <header class="info-topbar">
        <div class="info-container">
            <a href="index.php" class="info-logo">
                <img src="assets/img/logoPlayGo.png" alt="PlayGo logo" class="info-logo-img">
                <span>PLAY<span class="accent">GO</span></span>
            </a>
        </div>
    </header>

    <main class="info-container info-page">
        <section class="info-hero">
            <h1>Política de cookies</h1>
            <p>
                Esta política explica qué son las cookies, qué tipos pueden utilizarse y cuál sería
                su finalidad dentro de una plataforma web como PlayGo.
            </p>
        </section>

        <section class="info-card">
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
                Las cookies son pequeños archivos de texto que un sitio web puede almacenar en el dispositivo
                del usuario para recordar información sobre su visita y facilitar futuras interacciones.
            </p>
        </section>

        <section class="info-card">
            <h2>2. Tipos de cookies</h2>
            <ul>
                <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico del sitio.</li>
                <li><strong>Cookies de personalización:</strong> permiten recordar preferencias del usuario.</li>
                <li><strong>Cookies de análisis:</strong> ayudan a estudiar el uso y rendimiento de la web.</li>
                <li><strong>Cookies de terceros:</strong> pueden proceder de servicios externos integrados.</li>
            </ul>
        </section>

        <section class="info-card">
            <h2>3. Finalidad del uso de cookies</h2>
            <p>
                Las cookies podrían emplearse para facilitar la navegación, mantener la sesión iniciada,
                recordar configuraciones, recopilar estadísticas de uso y mejorar la experiencia general
                del usuario dentro de la plataforma.
            </p>
        </section>

        <section class="info-card">
            <h2>4. Gestión de cookies</h2>
            <p>
                El usuario puede configurar su navegador para permitir, bloquear o eliminar las cookies.
                La desactivación de algunas de ellas podría afectar al funcionamiento correcto del sitio web.
            </p>
        </section>

        <section class="info-card">
            <h2>5. Uso en este proyecto</h2>
            <p>
                Dado que PlayGo forma parte de un proyecto académico, esta política se presenta como ejemplo
                orientativo y demostrativo dentro del desarrollo del TFG.
            </p>
        </section>
    </main>

    <?php include '../footer.php'; ?>

</body>

</html>