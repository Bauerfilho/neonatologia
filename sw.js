/* Service Worker — Plataforma Bauer Neonatologia (Parte 1 + Parte 2 + Bônus 1-3)
 * Cache-first com fallback stale-while-revalidate.
 * Cobertura offline: hub + 11 módulos (M1-M5 Parte 1; M6-M8 Parte 2; M9-M11 Bônus 1-3).
 * M12 (Bônus 4) entra em bump v2.5.0 quando entregue.
 */

const CACHE = 'neonato-platform-v2.4.2';
const BASE = '/neonatologia/';

const ASSETS = [
  /* === HUB === */
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.webmanifest',
  BASE + 'assets/css/hub-tokens.css',
  BASE + 'assets/css/hub.css',
  BASE + 'assets/js/hub.js',
  BASE + 'assets/js/pwa-bootstrap.js',
  BASE + 'assets/img/icon-192.png',
  BASE + 'assets/img/icon-512.png',
  BASE + 'assets/img/icon-192.svg',
  BASE + 'assets/img/icon-512.svg',

  /* === M1 — Classificação RN + Sífilis Congênita === */
  BASE + 'modules/m1-classificacao-sifilis/index.html',
  BASE + 'modules/m1-classificacao-sifilis/assets/css/tokens.css',
  BASE + 'modules/m1-classificacao-sifilis/assets/css/base.css',
  BASE + 'modules/m1-classificacao-sifilis/assets/css/components.css',
  BASE + 'modules/m1-classificacao-sifilis/assets/css/pages-m1.css',
  BASE + 'modules/m1-classificacao-sifilis/assets/js/router.js',
  BASE + 'modules/m1-classificacao-sifilis/assets/js/quiz.js',
  BASE + 'modules/m1-classificacao-sifilis/assets/js/caso-card.js',
  BASE + 'modules/m1-classificacao-sifilis/data/casos-p1.json',
  BASE + 'modules/m1-classificacao-sifilis/assets/svg/v01-graph-igxpeso.svg',
  BASE + 'modules/m1-classificacao-sifilis/assets/svg/v02-timeline-ig.svg',
  BASE + 'modules/m1-classificacao-sifilis/assets/svg/v03-weight-scale.svg',
  BASE + 'modules/m1-classificacao-sifilis/assets/svg/v04-igm-igg-placenta.svg',
  BASE + 'modules/m1-classificacao-sifilis/assets/svg/v05-vias-infeccao.svg',
  BASE + 'modules/m1-classificacao-sifilis/assets/svg/v06-desktop.svg',
  BASE + 'modules/m1-classificacao-sifilis/assets/svg/v06-mobile-1.svg',
  BASE + 'modules/m1-classificacao-sifilis/assets/svg/v06-mobile-2.svg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b01-periostite-rx.jpg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b01-periostite-rx-membro-superior.jpg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b02-penfigo-palmar.jpg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b02-penfigo-plantar-direito.jpg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b03-rinite-placas-svg.svg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b04-fronte-olimpica.jpg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b05-tibia-em-sabre.jpg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b06-dente-hutchinson.jpg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b07-estigmas-faciais.jpg',
  BASE + 'modules/m1-classificacao-sifilis/assets/img/BNN-b17-pretermo-na-palma-svg.svg',

  /* === M2 — TORCH não-sífilis === */
  BASE + 'modules/m2-torch/index.html',
  BASE + 'modules/m2-torch/assets/css/tokens.css',
  BASE + 'modules/m2-torch/assets/css/base.css',
  BASE + 'modules/m2-torch/assets/css/components.css',
  BASE + 'modules/m2-torch/assets/css/pages-m2.css',
  BASE + 'modules/m2-torch/assets/js/router.js',
  BASE + 'modules/m2-torch/assets/js/quiz.js',
  BASE + 'modules/m2-torch/assets/js/caso-lucrecia.js',
  BASE + 'modules/m2-torch/data/casos-p1.json',
  BASE + 'modules/m2-torch/assets/svg/v07-triade-sabin.svg',
  BASE + 'modules/m2-torch/assets/svg/v08-tc-toxo.svg',
  BASE + 'modules/m2-torch/assets/svg/v08-tc-cmv.svg',
  BASE + 'modules/m2-torch/assets/svg/v08-tc-vzv.svg',
  BASE + 'modules/m2-torch/assets/svg/v09-pca-eap.svg',
  BASE + 'modules/m2-torch/assets/svg/v10-blueberry-muffin.svg',
  BASE + 'modules/m2-torch/assets/img/BNN-b08-toxo-ct-difusa.jpg',
  BASE + 'modules/m2-torch/assets/img/BNN-b09-cmv-ct-periventricular.jpg',
  BASE + 'modules/m2-torch/assets/img/BNN-b10-blueberry-muffin-cmv.jpg',
  BASE + 'modules/m2-torch/assets/img/BNN-b11-sunset-eyes-hidrocefalia.jpg',
  BASE + 'modules/m2-torch/assets/img/BNN-b12-leucocoria-rubeola.jpg',
  BASE + 'modules/m2-torch/assets/img/BNN-b13-varicela-cicatriz-dermatomo.jpg',

  /* === M3 — Reanimação Neonatal === */
  BASE + 'modules/m3-reanimacao/index.html',
  BASE + 'modules/m3-reanimacao/assets/css/tokens.css',
  BASE + 'modules/m3-reanimacao/assets/css/base.css',
  BASE + 'modules/m3-reanimacao/assets/css/components.css',
  BASE + 'modules/m3-reanimacao/assets/js/router.js',
  BASE + 'modules/m3-reanimacao/assets/js/quiz.js',
  BASE + 'modules/m3-reanimacao/assets/js/caso-card.js',
  BASE + 'modules/m3-reanimacao/data/casos-p1.json',
  BASE + 'modules/m3-reanimacao/assets/img/BNN-b14-hdc-esquerda-newborn-rx.jpg',
  BASE + 'modules/m3-reanimacao/assets/img/BNN-b15-vpp-balao-mascara-manikin.jpg',
  BASE + 'modules/m3-reanimacao/assets/img/BNN-b16-mce-dois-polegares-manikin.png',
  BASE + 'modules/m3-reanimacao/assets/img/BNN-b18-saco-plastico-svg.svg',

  /* === M4 — Triagem Neonatal === */
  BASE + 'modules/m4-triagem-neonatal/index.html',
  BASE + 'modules/m4-triagem-neonatal/assets/css/tokens.css',
  BASE + 'modules/m4-triagem-neonatal/assets/css/base.css',
  BASE + 'modules/m4-triagem-neonatal/assets/css/components.css',
  BASE + 'modules/m4-triagem-neonatal/assets/css/pages-m4.css',
  BASE + 'modules/m4-triagem-neonatal/assets/js/router.js',
  BASE + 'modules/m4-triagem-neonatal/assets/js/quiz.js',
  BASE + 'modules/m4-triagem-neonatal/assets/img/BNN-b19-pezinho-puncao.jpg',
  BASE + 'modules/m4-triagem-neonatal/assets/img/BNN-b20-oximetro-rn.jpg',
  BASE + 'modules/m4-triagem-neonatal/assets/img/BNN-b21-reflexo-vermelho-positivo-svg.svg',
  BASE + 'modules/m4-triagem-neonatal/assets/img/BNN-b22-leucocoria-catarata.jpg',
  BASE + 'modules/m4-triagem-neonatal/assets/img/BNN-b23-eoa-equipamento.png',
  BASE + 'modules/m4-triagem-neonatal/assets/img/BNN-b24-bera-eletrodos.jpg',
  BASE + 'modules/m4-triagem-neonatal/assets/img/BNN-b25-linguinha-frenulo.jpg',
  BASE + 'modules/m4-triagem-neonatal/assets/img/BNN-b26-fop-halux-bilateral.jpg',
  BASE + 'modules/m4-triagem-neonatal/assets/img/BNN-b27-fop-ossificacao-dorso.jpg',

  /* === M5 — Triagem Auditiva Neonatal === */
  BASE + 'modules/m5-triagem-auditiva-neonatal/index.html',
  BASE + 'modules/m5-triagem-auditiva-neonatal/assets/css/tokens.css',
  BASE + 'modules/m5-triagem-auditiva-neonatal/assets/css/base.css',
  BASE + 'modules/m5-triagem-auditiva-neonatal/assets/css/components.css',
  BASE + 'modules/m5-triagem-auditiva-neonatal/assets/css/pages-m5.css',
  BASE + 'modules/m5-triagem-auditiva-neonatal/assets/js/router.js',
  BASE + 'modules/m5-triagem-auditiva-neonatal/assets/js/quiz.js',
  BASE + 'modules/m5-triagem-auditiva-neonatal/assets/img/BNN-b30-coclea-corte-transversal.svg',
  BASE + 'modules/m5-triagem-auditiva-neonatal/assets/img/BNN-b31-eoa-sonda-rn-triagem.jpg',

  /* === M6 — Dispneia SDR + sepse precoce === */
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/index.html',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/css/tokens.css',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/css/base.css',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/css/components.css',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/css/pages-m6.css',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/js/router.js',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/js/quiz.js',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/data/casos-p1.json',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-b34-rx-neonatal-normal-svg.svg',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-b36-lisa-vs-insure-svg.svg',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-b37-monitor-apneia-svg.svg',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-cpap-premature-infant-hall.jpg',
  BASE + 'modules/m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-rx-sdr-irds-haggstrom.png',

  /* === M7 — Dispneia TTRN + SAM + HPPN === */
  BASE + 'modules/m7-ttrn-sam-hppn/index.html',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/css/tokens.css',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/css/base.css',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/css/components.css',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/css/pages-m7.css',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/js/router.js',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/js/quiz.js',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/img/BNN-b45-rx-ttrn-svg.svg',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/img/BNN-b47-liquido-amniotico-meconial-svg.svg',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/img/BNN-b48-rn-banhado-meconio-svg.svg',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/img/BNN-b50-ino-setup-svg.svg',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/img/BNN-hood-oxihood-illustration.png',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/img/BNN-meconio-passagem-fralda.jpg',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/img/BNN-rx-pneumotorax-neonato-hellerhoff.jpg',
  BASE + 'modules/m7-ttrn-sam-hppn/assets/img/BNN-rx-sam-grosseiro-hellerhoff.jpg',

  /* === M8 — Icterícia Neonatal (Caso Eusébio Foucault) === */
  BASE + 'modules/m8-ictericia-neonatal/index.html',
  BASE + 'modules/m8-ictericia-neonatal/assets/css/tokens.css',
  BASE + 'modules/m8-ictericia-neonatal/assets/css/base.css',
  BASE + 'modules/m8-ictericia-neonatal/assets/css/components.css',
  BASE + 'modules/m8-ictericia-neonatal/assets/css/pages-m8.css',
  BASE + 'modules/m8-ictericia-neonatal/assets/js/router.js',
  BASE + 'modules/m8-ictericia-neonatal/assets/js/quiz.js',
  BASE + 'modules/m8-ictericia-neonatal/assets/js/caso-eusebio.js',

  /* === M9 — Bônus 1 ECN === */
  BASE + 'modules/m9-enterocolite-necrosante/index.html',
  BASE + 'modules/m9-enterocolite-necrosante/assets/css/tokens.css',
  BASE + 'modules/m9-enterocolite-necrosante/assets/css/base.css',
  BASE + 'modules/m9-enterocolite-necrosante/assets/css/components.css',
  BASE + 'modules/m9-enterocolite-necrosante/assets/css/pages-m9.css',
  BASE + 'modules/m9-enterocolite-necrosante/assets/js/router.js',
  BASE + 'modules/m9-enterocolite-necrosante/assets/js/quiz.js',

  /* === M10 — Bônus 2 Miscelânia === */
  BASE + 'modules/m10-miscelania-neonatal/index.html',
  BASE + 'modules/m10-miscelania-neonatal/assets/css/tokens.css',
  BASE + 'modules/m10-miscelania-neonatal/assets/css/base.css',
  BASE + 'modules/m10-miscelania-neonatal/assets/css/components.css',
  BASE + 'modules/m10-miscelania-neonatal/assets/css/pages-m10.css',
  BASE + 'modules/m10-miscelania-neonatal/assets/js/router.js',
  BASE + 'modules/m10-miscelania-neonatal/assets/js/quiz.js',

  /* === M11 — Bônus 3 Condições cervicais === */
  BASE + 'modules/m11-condicoes-cervicais/index.html',
  BASE + 'modules/m11-condicoes-cervicais/assets/css/tokens.css',
  BASE + 'modules/m11-condicoes-cervicais/assets/css/base.css',
  BASE + 'modules/m11-condicoes-cervicais/assets/css/components.css',
  BASE + 'modules/m11-condicoes-cervicais/assets/css/pages-m11.css',
  BASE + 'modules/m11-condicoes-cervicais/assets/js/router.js',
  BASE + 'modules/m11-condicoes-cervicais/assets/js/quiz.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      // Adiciona individualmente pra tolerar 404 de algum asset sem quebrar tudo
      return Promise.allSettled(
        ASSETS.map((url) =>
          cache.add(url).catch((err) => console.warn('[SW] skip', url, err.message))
        )
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

  // Ignora requisições fora do scope da plataforma
  if (!url.pathname.startsWith(BASE)) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Stale-while-revalidate: serve do cache, atualiza em background
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
        // Offline e sem cache — retorna fallback HTML do hub pra navegação
        if (req.mode === 'navigate') {
          return caches.match(BASE);
        }
      });
    })
  );
});
