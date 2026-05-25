/* Service Worker — Hub Bauer Neonatologia
   Cache-first com fallback de rede + revalidação por versão. */

const CACHE = 'neonato-hub-v1.0.0';
const BASE = '/neonatologia/';

const ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.webmanifest',
  BASE + 'assets/css/hub-tokens.css',
  BASE + 'assets/css/hub.css',
  BASE + 'assets/js/hub.js',
  BASE + 'assets/img/icon-192.svg',
  BASE + 'assets/img/icon-512.svg',
  // Casco dos módulos disponíveis (cacheia HTML; CSS/JS/imgs carregam on-demand)
  BASE + 'modules/m1-classificacao-sifilis/index.html',
  BASE + 'modules/m2-torch/index.html',
  BASE + 'modules/m3-reanimacao/index.html',
  BASE + 'modules/m4-triagem-neonatal/index.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      // Adiciona individualmente pra tolerar 404 de algum asset sem quebrar tudo
      return Promise.allSettled(
        ASSETS.map((url) => cache.add(url).catch((err) => console.warn('[SW] skip', url, err)))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Ignora cross-origin (Google Fonts, etc) — deixa o browser cuidar
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Revalida em background (stale-while-revalidate)
        fetch(req).then((fresh) => {
          if (fresh && fresh.status === 200) {
            caches.open(CACHE).then((cache) => cache.put(req, fresh));
          }
        }).catch(() => {});
        return cached;
      }
      // Não tinha em cache — busca na rede e adiciona
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => {
        // Offline e sem cache — retorna fallback HTML do hub
        if (req.mode === 'navigate') {
          return caches.match(BASE);
        }
      });
    })
  );
});
