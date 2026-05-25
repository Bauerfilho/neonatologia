// Hash router SPA. Namespace #/p1-m5-p{1..13}
// Triagem Auditiva Neonatal — Guia MS TAN 29/nov/2025
// Mantém histórico do navegador, fecha drawer, atualiza progresso e ARIA.

(function () {
  'use strict';

  const PAGES_TOTAL = 13;
  const HASH_PREFIX = '#/p1-m5-p';

  function parseHash() {
    const h = location.hash || HASH_PREFIX + '1';
    const m = /^#\/p1-m5-p(\d+)$/.exec(h);
    if (!m) return { page: 1 };
    let page = parseInt(m[1], 10);
    if (isNaN(page) || page < 1) page = 1;
    if (page > PAGES_TOTAL) page = PAGES_TOTAL;
    return { page };
  }

  function showPage(pageNum) {
    const pages = document.querySelectorAll('.page');
    let found = false;
    pages.forEach((el) => {
      const id = el.dataset.pageNum;
      if (parseInt(id, 10) === pageNum) {
        el.hidden = false;
        el.setAttribute('aria-current', 'page');
        found = true;
      } else {
        el.hidden = true;
        el.removeAttribute('aria-current');
      }
    });
    if (!found) {
      const first = document.querySelector('.page[data-page-num="1"]');
      if (first) {
        first.hidden = false;
        first.setAttribute('aria-current', 'page');
      }
    }
    updateProgress(pageNum);
    updateNav(pageNum);
    updateMenu(pageNum);
    updateTitle(pageNum);
    closeDrawer();
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    });
  }

  function updateProgress(pageNum) {
    const fill = document.querySelector('.progress-bar__fill');
    if (fill) {
      const pct = Math.round((pageNum / PAGES_TOTAL) * 100);
      fill.style.width = pct + '%';
      fill.setAttribute('aria-valuenow', String(pct));
    }
  }

  function updateNav(pageNum) {
    document.querySelectorAll('.page-nav__btn--prev').forEach((b) => {
      const prev = pageNum > 1 ? pageNum - 1 : null;
      if (prev) {
        b.href = HASH_PREFIX + prev;
        b.removeAttribute('aria-disabled');
      } else {
        b.removeAttribute('href');
        b.setAttribute('aria-disabled', 'true');
      }
    });
    document.querySelectorAll('.page-nav__btn--next').forEach((b) => {
      const next = pageNum < PAGES_TOTAL ? pageNum + 1 : null;
      if (next) {
        b.href = HASH_PREFIX + next;
        b.removeAttribute('aria-disabled');
      } else {
        b.removeAttribute('href');
        b.setAttribute('aria-disabled', 'true');
      }
    });
    document.querySelectorAll('.page-nav__indicator').forEach((ind) => {
      ind.textContent = pageNum + ' / ' + PAGES_TOTAL;
    });
  }

  function updateMenu(pageNum) {
    document.querySelectorAll('.menu-drawer__link').forEach((a) => {
      const n = parseInt(a.dataset.pageNum, 10);
      if (n === pageNum) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function updateTitle(pageNum) {
    const el = document.querySelector('.page[data-page-num="' + pageNum + '"] .page-title');
    const base = 'Triagem Auditiva Neonatal — Neonatologia (Parte 1, M5)';
    if (el) document.title = el.textContent.trim() + ' · ' + base;
    else document.title = base;
  }

  function closeDrawer() {
    const drawer = document.querySelector('.menu-drawer');
    if (drawer && drawer.dataset.open === 'true') {
      drawer.dataset.open = 'false';
      document.body.style.overflow = '';
      const btn = document.querySelector('[data-toggle="menu"]');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  }

  function onHashChange() {
    const { page } = parseHash();
    showPage(page);
  }

  function bindMenu() {
    const btn = document.querySelector('[data-toggle="menu"]');
    const drawer = document.querySelector('.menu-drawer');
    if (!btn || !drawer) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = drawer.dataset.open === 'true';
      drawer.dataset.open = open ? 'false' : 'true';
      btn.setAttribute('aria-expanded', String(!open));
      document.body.style.overflow = !open ? 'hidden' : '';
    });
    document.addEventListener('click', (e) => {
      if (drawer.dataset.open !== 'true') return;
      const panel = drawer.querySelector('.menu-drawer__panel');
      if (panel && !panel.contains(e.target) && !btn.contains(e.target)) {
        drawer.dataset.open = 'false';
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.dataset.open === 'true') {
        drawer.dataset.open = 'false';
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  function bindTheme() {
    const btn = document.querySelector('[data-toggle="theme"]');
    if (!btn) return;
    const saved = localStorage.getItem('neonato-p1-m5.theme');
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      btn.setAttribute('aria-pressed', 'true');
    }
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      if (cur === 'light') {
        document.documentElement.removeAttribute('data-theme');
        btn.setAttribute('aria-pressed', 'false');
        localStorage.setItem('neonato-p1-m5.theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        btn.setAttribute('aria-pressed', 'true');
        localStorage.setItem('neonato-p1-m5.theme', 'light');
      }
    });
  }

  function bindOpenerChecklists() {
    document.querySelectorAll('.opener--checklist').forEach((el) => {
      const items = el.querySelectorAll('li');
      if (!('IntersectionObserver' in window)) {
        items.forEach((li) => li.classList.add('is-revealed'));
        return;
      }
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((li, i) => {
              setTimeout(() => li.classList.add('is-revealed'), 180 * i);
            });
            obs.disconnect();
          }
        });
      }, { threshold: 0.35 });
      obs.observe(el);
    });
  }

  function bindBauerRevisable() {
    document.querySelectorAll('.bauer-revisable__toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const wrap = btn.closest('.bauer-revisable');
        if (!wrap) return;
        const expanded = wrap.dataset.expanded === 'true';
        wrap.dataset.expanded = expanded ? 'false' : 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
      });
    });
  }

  function bindGlossaryTooltip() {
    // Touch/click toggle for tooltip on mobile (hover já cobre desktop via CSS)
    document.querySelectorAll('.glossary-term').forEach((el) => {
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-haspopup', 'true');
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = el.dataset.open === 'true';
        document.querySelectorAll('.glossary-term').forEach((g) => g.removeAttribute('data-open'));
        if (!open) el.dataset.open = 'true';
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          el.click();
        }
        if (e.key === 'Escape') {
          el.removeAttribute('data-open');
        }
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('.glossary-term').forEach((g) => g.removeAttribute('data-open'));
    });
  }

  function bindFinalChecklist() {
    document.querySelectorAll('.final-checklist li').forEach((li, idx) => {
      const storageKey = 'neonato-p1-m5.checklist.' + idx;
      try {
        if (localStorage.getItem(storageKey) === 'true') {
          li.dataset.checked = 'true';
        }
      } catch (e) { /* private mode */ }
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      li.setAttribute('aria-pressed', li.dataset.checked === 'true' ? 'true' : 'false');
      const toggle = () => {
        const checked = li.dataset.checked === 'true';
        li.dataset.checked = checked ? 'false' : 'true';
        li.setAttribute('aria-pressed', String(!checked));
        try { localStorage.setItem(storageKey, String(!checked)); }
        catch (e) { /* private mode */ }
      };
      li.addEventListener('click', toggle);
      li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindMenu();
    bindTheme();
    bindOpenerChecklists();
    bindBauerRevisable();
    bindGlossaryTooltip();
    bindFinalChecklist();
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
  });
})();
