/* Hub Bauer Neonatologia — interatividade da landing
 * Responsabilidades:
 * 1. Filtros (Todos / Parte 1 / Parte 2 / Bônus) com persistência localStorage
 * 2. Service Worker registration + update mechanism
 * 3. PWA install prompt (beforeinstallprompt)
 */

(() => {
  'use strict';

  const STORAGE_KEY = 'neonato-hub.filter';
  const SW_PATH = '/neonatologia/sw.js';
  const SW_SCOPE = '/neonatologia/';

  // ============================================================
  // 1. Filtros
  // ============================================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const body = document.body;

  function applyFilter(filter) {
    if (filter === 'all') {
      body.removeAttribute('data-filter');
    } else {
      body.setAttribute('data-filter', filter);
    }
    filterChips.forEach((chip) => {
      const isActive = chip.dataset.filter === filter;
      chip.setAttribute('aria-pressed', String(isActive));
    });
    try {
      localStorage.setItem(STORAGE_KEY, filter);
    } catch (err) {
      // localStorage indisponível (modo privado etc) — falha silenciosa
    }
  }

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter || 'all';
      applyFilter(filter);
    });
  });

  // Restaura filtro persistido
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && ['all', 'parte-1', 'parte-2', 'bonus'].includes(saved)) {
      applyFilter(saved);
    }
  } catch (err) {
    // ignora
  }

  // ============================================================
  // 2. Service Worker
  // ============================================================
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(SW_PATH, { scope: SW_SCOPE })
        .then((reg) => watchForUpdate(reg))
        .catch((err) => console.warn('[Hub] Service Worker registration falhou:', err));
    });
  }

  function watchForUpdate(reg) {
    if (!reg) return;
    reg.addEventListener('updatefound', () => {
      const newSW = reg.installing;
      if (!newSW) return;
      newSW.addEventListener('statechange', () => {
        if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
          showUpdateToast(newSW);
        }
      });
    });

    // Quando o novo SW ativa após SKIP_WAITING, recarrega a página
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  }

  function showUpdateToast(newSW) {
    const toast = document.getElementById('pwa-update-toast');
    if (!toast) return;
    toast.setAttribute('data-show', 'true');
    const btn = toast.querySelector('.pwa-update-toast__btn');
    if (btn) {
      btn.addEventListener('click', () => {
        newSW.postMessage({ type: 'SKIP_WAITING' });
      }, { once: true });
    }
  }

  // ============================================================
  // 3. PWA install prompt
  // ============================================================
  let deferredPrompt = null;
  const installBtn = document.getElementById('pwa-install-btn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.setAttribute('data-show', 'true');
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      deferredPrompt = null;
      if (choice.outcome === 'accepted') {
        installBtn.setAttribute('data-show', 'false');
      }
    });
  }

  window.addEventListener('appinstalled', () => {
    if (installBtn) installBtn.setAttribute('data-show', 'false');
    deferredPrompt = null;
  });
})();
