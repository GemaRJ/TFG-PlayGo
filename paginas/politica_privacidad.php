<?php
require_once "../configuracion/sesiones.php";
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Política de privacidad | PlayGo</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/footer.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../assets/css/info_pagina.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../utils/lang_selector.css">
    <link rel="icon" href="../assets/img/icono192-jugando-videojuegos.png?v=3" type="image/png">

</head>

<body>

    <header class="info-topbar">
        <div class="info-container">
            <a href="../index.php" class="info-logo">
                <img src="../assets/img/logoPlayGo.png" alt="PlayGo logo" class="info-logo-img">
                <span>PLAY<span class="accent">GO</span></span>
            </a>
            <div class="lang-selector-panel" style="margin-left: 20px;">
                <button id="lang-es" onclick="aplicarTraduccion('es')"><img src="https://flagcdn.com/w20/es.png"
                        width="20" alt="ES"> ES</button>
                <button id="lang-en" onclick="aplicarTraduccion('en')"><img src="https://flagcdn.com/w20/gb.png"
                        width="20" alt="UK"> UK</button>
            </div>
        </div>
    </header>

    <main class="info-container info-page">
        <section class="info-hero">
            <h1 data-key="priv_title">Política de privacidad</h1>
            <p data-key="priv_p1">
                En PlayGo nos comprometemos a respetar la privacidad de las personas usuarias.
                Este documento muestra un ejemplo orientativo de política de privacidad con fines académicos.
            </p>
        </section>

        <section class="info-card">
            <h2 data-key="priv_h1">1. Responsable del sitio web</h2>
            <p data-key="priv_p_h1">
                PlayGo es un proyecto académico desarrollado como Trabajo de Fin de Grado (TFG).
                Esta web tiene finalidad educativa y demostrativa.
            </p>
        </section>

        <section class="info-card">
            <h2 data-key="priv_h2">2. Datos que podrían recopilarse</h2>
            <p data-key="priv_p_h2">
                En un entorno real, este sitio podría recopilar datos básicos como nombre, correo electrónico,
                credenciales de acceso o información técnica relacionada con la navegación del usuario.
            </p>
        </section>

        <section class="info-card">
            <h2 data-key="priv_h3">3. Finalidad del tratamiento</h2>
            <p data-key="priv_p_h3">
                Los datos podrían utilizarse para gestionar el acceso a la plataforma, responder consultas,
                mejorar la experiencia de usuario, garantizar la seguridad del sistema y realizar análisis
                internos del funcionamiento del sitio.
            </p>
        </section>

        <section class="info-card">
            <h2 data-key="priv_h4">4. Conservación de la información</h2>
            <p data-key="priv_p_h4">
                Los datos se conservarían únicamente durante el tiempo necesario para cumplir con la finalidad
                para la que hubieran sido recogidos y conforme a la normativa vigente aplicable en un caso real.
            </p>
        </section>

        <section class="info-card">
            <h2 data-key="priv_h5">5. Derechos de las personas usuarias</h2>
            <p data-key="priv_p_h5">
                Las personas usuarias podrían ejercer sus derechos de acceso, rectificación, supresión,
                oposición, limitación del tratamiento y portabilidad de sus datos, cuando corresponda.
            </p>
        </section>

        <section class="info-card">
            <h2 data-key="priv_h6">6. Seguridad de los datos</h2>
            <p data-key="priv_p_h6">
                En un entorno real, se adoptarían las medidas técnicas y organizativas necesarias para proteger
                la información personal frente a accesos no autorizados, pérdida, destrucción o alteración.
            </p>
        </section>

        <section class="info-card">
            <h2 data-key="priv_h7">7. Carácter demostrativo</h2>
            <p data-key="priv_p_h7">
                El contenido de esta política se ofrece exclusivamente como ejemplo dentro de un proyecto académico
                y no sustituye asesoramiento jurídico profesional.
            </p>
        </section>

        <div class="btn-volver-container">
            <a href="../index.php" class="btn-volver" data-key="return_home">← Volver al Inicio</a>
        </div>
    </main>

    <?php include '../footer.php'; ?>

    <script src="../utils/idiomas.js"></script>
    <script src="../utils/traductor.js"></script>
</body>

</html>