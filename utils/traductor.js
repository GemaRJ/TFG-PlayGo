function aplicarTraduccion(lang) {
    if (!translations[lang]) return;

    // Guardar el idioma en localStorage
    localStorage.setItem('playgo_lang', lang);

    // Actualizar elementos con data-key (innerHTML)
    const elementos = document.querySelectorAll('[data-key]');
    elementos.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Actualizar placeholders con data-key-placeholder
    const placeholders = document.querySelectorAll('[data-key-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-key-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Actualizar values con data-key-value
    const values = document.querySelectorAll('[data-key-value]');
    values.forEach(el => {
        const key = el.getAttribute('data-key-value');
        if (translations[lang] && translations[lang][key]) {
            el.value = translations[lang][key];
        }
    });

    // Actualiza el estado activo de los botones si los hay
    const botones = document.querySelectorAll('.lang-selector button, .lang-selector-panel button');
    botones.forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `lang-${lang}`) {
            btn.classList.add('active');
        }
    });

    // Propagar la traducción a posibles iframes incrustados
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        try {
            if (iframe.contentWindow && typeof iframe.contentWindow.aplicarTraduccion === 'function') {
                iframe.contentWindow.aplicarTraduccion(lang);
            }
        } catch (e) {
            console.warn("No se pudo traducir el iframe (CORS o no cargado):", e);
        }
    });
}

// Función auxiliar para obtener textos desde JavaScript
function getText(key) {
    const lang = localStorage.getItem('playgo_lang') || 'es';
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    return key;
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('playgo_lang') || 'es';
    aplicarTraduccion(savedLang);
});
