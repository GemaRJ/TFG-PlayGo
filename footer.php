<footer class="playgo-footer">

    <!-- Fondo de partículas decorativas -->
    <div class="footer-bg" aria-hidden="true">
        <span class="particle p1"></span>
        <span class="particle p2"></span>
        <span class="particle p3"></span>
        <span class="particle p4"></span>
        <div class="footer-grid-line"></div>
    </div>

    <div class="footer-inner">

        <!-- Columna izquierda: Branding -->
        <div class="footer-brand">

            <div class="footer-logo">
                <span class="logo-icon" aria-hidden="true">⬡</span>
                <span class="logo-text">
                    Play<span class="logo-accent">Go</span>
                </span>
            </div>

            <p class="footer-tagline">
                Tu universo de juegos en la nube.
            </p>

        </div>

        <!-- Columna central: Links legales -->
        <nav class="footer-links" aria-label="Enlaces legales y de información">

            <h3 class="footer-nav-title">Información</h3>

            <ul>

                <li>
                    <a href="<?= rutaBase() ?>/paginas/quienes_somos.php">
                        Quiénes somos
                    </a>
                </li>

                <li>
                    <a href="<?= rutaBase() ?>/paginas/politica_privacidad.php">
                        Política de privacidad
                    </a>
                </li>

                <li>
                    <a href="<?= rutaBase() ?>/paginas/politica_cookies.php">
                        Política de cookies
                    </a>
                </li>

            </ul>

        </nav>

        <!-- Columna derecha: Créditos -->
        <div class="footer-team">

            <h3 class="footer-nav-title">El equipo</h3>

            <ul class="footer-team-list">

                <li>
                    <span class="team-dot" aria-hidden="true"></span>
                    Gema Rodriguez Jorge
                </li>

                <li>
                    <span class="team-dot" aria-hidden="true"></span>
                    Patricia Jimenez Berzal
                </li>

                <li>
                    <span class="team-dot" aria-hidden="true"></span>
                    Sofía Fabiana Daniele
                </li>

            </ul>

            <p class="footer-school">
                DAW · <?php echo date('Y'); ?>
            </p>

        </div>

    </div>

    <!-- Barra inferior -->
    <div class="footer-bottom">

        <p>
            &copy; <?php echo date('Y'); ?>
            PlayGo. Proyecto educativo sin fines comerciales.
        </p>

        <div class="footer-bottom-dots" aria-hidden="true">
            <span></span><span></span><span></span>
        </div>

    </div>

</footer>