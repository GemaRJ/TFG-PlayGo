// theme.js — PlayGo · Toggle Modo Día / Noche
// Con localStorage: asi recuerda la preferencia entre páginas PERO NO ME FUNCIONA

(function () {
  // Aplicar tema guardado AL CARGAR la página (antes de que se pinte)
  const temaGuardado = localStorage.getItem('playgo-tema');
  if (temaGuardado === 'dia') {
    document.documentElement.classList.add('modo-dia');
  }

  // Esperar a que el DOM esté listo para añadir el evento al botón
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn-tema');
    if (!btn) return;

    // Actualizar aria-label según el tema actual al cargar
    const esDia = document.documentElement.classList.contains('modo-dia');
    btn.setAttribute('aria-label', esDia ? 'Cambiar a modo noche' : 'Cambiar a modo día');

    btn.addEventListener('click', function () {
      const ahora = document.documentElement.classList.toggle('modo-dia');

      // Guardar preferencia
      localStorage.setItem('playgo-tema', ahora ? 'dia' : 'noche');

      // Actualizar aria-label
      btn.setAttribute('aria-label', ahora ? 'Cambiar a modo noche' : 'Cambiar a modo día');
    });
  });
})();