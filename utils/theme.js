// utils/theme.js — PlayGo · Toggle Modo Día / Noche
// Aplicar tema ANTES de pintar la página (evita parpadeo)

(function () {
    if (localStorage.getItem('playgo-tema') === 'dia') {
        document.documentElement.classList.add('modo-dia');
    }
})();

// Lógica del botón, cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn-tema');
    if (!btn) return;

    // Sincronizar icono al cargar
    const esDia = document.documentElement.classList.contains('modo-dia');
    btn.setAttribute('aria-label', esDia ? 'Cambiar a modo noche' : 'Cambiar a modo día');

    btn.addEventListener('click', function () {
        const ahora = document.documentElement.classList.toggle('modo-dia');
        localStorage.setItem('playgo-tema', ahora ? 'dia' : 'noche');
        btn.setAttribute('aria-label', ahora ? 'Cambiar a modo noche' : 'Cambiar a modo día');
    });
});