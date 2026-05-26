// Caso Eusébio Foucault — anchor flutuante persistente em 8 páginas:
// 8.1, 8.4, 8.6, 8.7, 8.8, 8.10, 8.13, 8.15 (declaração explícita do prompt-final §6).
// Mesmo padrão do M6 (Firmindo) e M7 (João da Elvira Maria).

(function () {
  'use strict';

  const STORAGE_KEY = 'neonato-p2-m8.case-anchor.collapsed';
  const SHOW_ON = [1, 4, 6, 7, 8, 10, 13, 15];

  function updateAnchorVisibility(pageNum) {
    const anchor = document.querySelector('.case-anchor');
    if (!anchor) return;
    if (SHOW_ON.includes(pageNum)) {
      anchor.hidden = false;
    } else {
      anchor.hidden = true;
    }
  }

  function bindToggle() {
    const anchor = document.querySelector('.case-anchor');
    if (!anchor) return;
    const toggle = anchor.querySelector('.case-anchor__toggle');
    if (!toggle) return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'true') {
      anchor.dataset.collapsed = 'true';
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', () => {
      const collapsed = anchor.dataset.collapsed === 'true';
      anchor.dataset.collapsed = collapsed ? 'false' : 'true';
      toggle.setAttribute('aria-expanded', String(collapsed));
      try { localStorage.setItem(STORAGE_KEY, String(!collapsed)); }
      catch (e) { /* private mode */ }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindToggle();
    // Reage ao evento do router para mostrar/esconder
    document.addEventListener('m8:pagechange', (e) => {
      updateAnchorVisibility(e.detail.page);
    });
    // Estado inicial baseado no hash
    const h = location.hash || '#/p2-m8-p1';
    const m = /^#\/p2-m8-p(\d+)$/.exec(h);
    const p = m ? parseInt(m[1], 10) : 1;
    updateAnchorVisibility(p);
  });
})();
