<?php
require_once "../configuracion/sesiones.php";
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiénes somos | PlayGo</title>


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
        <div class="hero-layout">
            <section class="info-hero">
                <h1 data-key="about_title">Quiénes somos</h1>
                <p data-key="about_p1">
                    PlayGo es un proyecto académico desarrollado como Trabajo de Fin de Grado (TFG),
                    centrado en la creación de una plataforma web de juegos con una interfaz moderna,
                    accesible y orientada a diferentes tipos de usuarios.
                </p>
            </section>

            <div class="quienes-imagen">
                <img src="./quienes_somos.png" alt="Equipo PlayGo" class="img-equipo-chicas">
            </div>
        </div>

        <section class="info-card">
            <h2 data-key="about_mission_title">Nuestra misión</h2>
            <p data-key="about_mission_p">
                El objetivo de PlayGo es ofrecer un entorno digital atractivo en el que los usuarios
                puedan disfrutar de experiencias de juego adaptadas a distintas edades, combinando
                entretenimiento, aprendizaje y usabilidad.
            </p>
        </section>

        <section class="info-card">
            <h2 data-key="about_vision_title">Visión del proyecto</h2>
            <p data-key="about_vision_p">
                Este sitio ha sido diseñado para demostrar la aplicación práctica de conocimientos
                de desarrollo web, diseño visual, estructura de navegación y experiencia de usuario
                dentro del contexto de un proyecto final de estudios.
            </p>
        </section>

        <section class="info-card">
            <h2 data-key="about_team_title">Equipo de desarrollo</h2>
            <p data-key="about_team_p">
                El proyecto PlayGo ha sido realizado con fines formativos dentro del curso académico 2025-2026.
            </p>
            <ul>
                <li>Gema Rodríguez Jorge</li>
                <li>Patricia Jiménez Berzal</li>
                <li>Sofía Fabiana Daniele</li>
            </ul>
        </section>

        <section class="info-card">
            <h2 data-key="about_academic_title">Finalidad académica</h2>
            <p data-key="about_academic_p">
                Todo el contenido de esta web ha sido elaborado con carácter educativo y demostrativo.
                Su finalidad es representar una propuesta funcional y visual de plataforma interactiva
                desarrollada en el marco de un TFG.
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