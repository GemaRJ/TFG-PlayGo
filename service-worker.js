const CACHE_NAME = 'playgo-cache-v6';

const urlsToCache = [
  '/playgo/offline.html',
  '/playgo/assets/css/index.css',
  '/playgo/assets/css/panel.css',
  '/playgo/assets/img/logoPlayGo.png',
  '/playgo/assets/img/icono192-jugando-videojuegos.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Navegación -> Network first, fallback to offline.html
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/playgo/offline.html');
      })
    );
    return;
  }

  // No interceptar rutas dinámicas ni peticiones php en caché
  if (url.pathname.endsWith('.php') || url.pathname.endsWith('/playgo/')) {
    return;
  }

  // Resto de recursos (CSS, IMG, JS) -> Cache first, fallback to network
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});