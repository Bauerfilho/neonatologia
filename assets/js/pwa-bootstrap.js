/* PWA Bootstrap — Plataforma Bauer Neonatologia
 * Reusável em hub + todos os módulos (DRY).
 *
 * REGRA INVIOLÁVEL Bauer: PWAs atualizam automaticamente pra todos os
 * usuários que instalaram. Não-opcional. Implementado via:
 *
 * 1. SW.register() em qualquer página do scope /neonatologia/
 * 2. Auto-skipWaiting() imediato ao detectar update (sem esperar clique)
 * 3. Toast informativo curto "Atualizando..." antes do reload
 * 4. Reload silencioso após 1500ms via controllerchange listener
 * 5. Verificação periódica de update a cada 60 min (aba aberta)
 * 6. Verificação imediata em visibilitychange (aba volta do background)
 * 7. Install button aparece via beforeinstallprompt (opt-in user)
 *
 * Fluxo de update obrigatório:
 *   User abre página → SW register → SW checa update no servidor →
 *   Se update existe → installs nova versão (skipWaiting auto) →
 *   activate → controllerchange dispara → reload silencioso.
 *   User SEMPRE acaba na última versão sem precisar de ação.
 */

(() => {
  'use strict';

  const SW_PATH = '/neonatologia/sw.js';
  const SW_SCOPE = '/neonatologia/';
  const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000; // 60 min

  if (!('serviceWorker' in navigator)) {
    console.info('[PWA] Service Worker não suportado neste browser');
    return;
  }

  let registration = null;
  let updateApplied = false;

  // ============================================================
  // 1. Registro do SW
  // ============================================================
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(SW_PATH, { scope: SW_SCOPE })
      .then((reg) => {
        registration = reg;
        watchForUpdate(reg);
        schedulePeriodicCheck(reg);
        // Checa update imediato no registro (caso já tenha nova versão no servidor)
        reg.update().catch(() => {});
      })
      .catch((err) => console.warn('[PWA] SW register falhou:', err));
  });

  // ============================================================
  // 2. Detecta update + skipWaiting AUTOMÁTICO obrigatório
  // ============================================================
  function watchForUpdate(reg) {
    reg.addEventListener('updatefound', () => {
      const newSW = reg.installing;
      if (!newSW) return;

      newSW.addEventListener('statechange', () => {
        // Quando a nova versão termina de instalar E já existe um SW controlando
        // → ativa imediatamente sem precisar do usuário clicar nada
        if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
          showUpdateingToast();
          newSW.postMessage({ type: 'SKIP_WAITING' });
        }
      });
    });
  }

  // ============================================================
  // 3. Quando o novo SW assume controle → reload silencioso
  // ============================================================
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (updateApplied) return;
    updateApplied = true;
    // 1.5s pra dar tempo do toast "Atualizando..." aparecer
    setTimeout(() => window.location.reload(), 1500);
  });

  // ============================================================
  // 4. Toast informativo curto (não-bloqueante, sem botão)
  // ============================================================
  function showUpdateingToast() {
    // Tenta achar toast pré-existente (hub) primeiro
    let toast = document.getElementById('pwa-update-toast');

    if (!toast) {
      // Cria toast inline se módulo não tiver
      toast = document.createElement('div');
      toast.id = 'pwa-update-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #142838;
        color: #f3ede0;
        border: 1px solid #ff6b5a;
        border-radius: 12px;
        padding: 14px 20px;
        font-family: "Inter", -apple-system, sans-serif;
        font-size: 14px;
        box-shadow: 0 16px 48px rgba(0,0,0,0.40);
        z-index: 9999;
        max-width: 360px;
      `;
      toast.innerHTML = '<span>Nova versão disponível — atualizando...</span>';
      document.body.appendChild(toast);
    } else {
      // Hub tem o componente — substitui conteúdo (sem botão, auto-update)
      toast.innerHTML = '<span class="pwa-update-toast__text">Nova versão disponível — atualizando...</span>';
      toast.setAttribute('data-show', 'true');
    }
  }

  // ============================================================
  // 5. Verificação periódica de update (60 min)
  // ============================================================
  function schedulePeriodicCheck(reg) {
    setInterval(() => {
      reg.update().catch((err) => console.debug('[PWA] update check falhou:', err));
    }, UPDATE_CHECK_INTERVAL_MS);
  }

  // ============================================================
  // 6. Verifica update quando aba volta do background
  // ============================================================
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && registration) {
      registration.update().catch(() => {});
    }
  });

  // ============================================================
  // 7. Install prompt (opt-in user, não-obrigatório)
  // ============================================================
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) installBtn.setAttribute('data-show', 'true');
  });

  document.addEventListener('click', async (e) => {
    const installBtn = e.target.closest('#pwa-install-btn');
    if (!installBtn || !deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    deferredPrompt = null;
    if (choice.outcome === 'accepted') {
      installBtn.setAttribute('data-show', 'false');
    }
  });

  window.addEventListener('appinstalled', () => {
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) installBtn.setAttribute('data-show', 'false');
    deferredPrompt = null;
  });

})();
