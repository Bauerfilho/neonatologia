/* Hub Bauer Neonatologia — interatividade exclusiva da landing
 *
 * Responsabilidades:
 * 1. Filtros (Todos / Parte 1 / Parte 2 / Bônus) com persistência localStorage
 *
 * NOTA: PWA (service worker, install prompt, auto-update obrigatório) está
 * em /assets/js/pwa-bootstrap.js — carregado em paralelo via <script> no <head>.
 * Não duplicar lógica aqui.
 */

(() => {
  'use strict';

  const STORAGE_KEY = 'neonato-hub.filter';
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
})();
