// Hash router SPA. Namespace #/p2-m7-p{1..13}
// Dispneia neonatal — TTRN + SAM + HPPN (parte 2 de 2) — Aula 7
// Mantém histórico do navegador, fecha drawer, atualiza progresso e ARIA.

(function () {
  'use strict';

  const PAGES_TOTAL = 13;
  const HASH_PREFIX = '#/p2-m7-p';
  const STORAGE_PREFIX = 'neonato-p2-m7';

  function parseHash() {
    const h = location.hash || HASH_PREFIX + '1';
    const m = /^#\/p2-m7-p(\d+)$/.exec(h);
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
    updateCaseAnchor(pageNum);
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
    const base = 'TTRN + SAM + HPPN — Neonatologia (Parte 2, M7)';
    if (el) document.title = el.textContent.trim() + ' · ' + base;
    else document.title = base;
  }

  // Caso João da Elvira Maria persistente em páginas declaradas (7.1, 7.7, 7.10, 7.12, 7.13).
  // Páginas-âncora confirmadas por leitura do prompt-final §6.
  function updateCaseAnchor(pageNum) {
    const anchor = document.querySelector('.case-anchor');
    if (!anchor) return;
    const showOn = [1, 7, 10, 12, 13];
    if (showOn.includes(pageNum)) {
      anchor.hidden = false;
    } else {
      anchor.hidden = true;
    }
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
    const saved = localStorage.getItem(STORAGE_PREFIX + '.theme');
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      btn.setAttribute('aria-pressed', 'true');
    }
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      if (cur === 'light') {
        document.documentElement.removeAttribute('data-theme');
        btn.setAttribute('aria-pressed', 'false');
        localStorage.setItem(STORAGE_PREFIX + '.theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        btn.setAttribute('aria-pressed', 'true');
        localStorage.setItem(STORAGE_PREFIX + '.theme', 'light');
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

  function bindCaseAnchorToggle() {
    const anchor = document.querySelector('.case-anchor');
    if (!anchor) return;
    const toggle = anchor.querySelector('.case-anchor__toggle');
    if (!toggle) return;
    const saved = localStorage.getItem(STORAGE_PREFIX + '.case-anchor.collapsed');
    if (saved === 'true') anchor.dataset.collapsed = 'true';
    toggle.addEventListener('click', () => {
      const collapsed = anchor.dataset.collapsed === 'true';
      anchor.dataset.collapsed = collapsed ? 'false' : 'true';
      toggle.setAttribute('aria-expanded', String(collapsed));
      try { localStorage.setItem(STORAGE_PREFIX + '.case-anchor.collapsed', String(!collapsed)); }
      catch (e) { /* private mode */ }
    });
  }

  function bindFinalChecklist() {
    document.querySelectorAll('.final-checklist li').forEach((li, idx) => {
      const storageKey = STORAGE_PREFIX + '.checklist.' + idx;
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

  // B45 — Interativo "4 NÃO faz da TTRN" (página 7.6)
  // Cards SIM/NÃO com revelação de justificativa fisiopatológica. Estado in-memory (sem localStorage).
  function bindNaoFazInteractive() {
    document.querySelectorAll('.nao-faz__card').forEach((card) => {
      const yesBtn = card.querySelector('[data-resp="yes"]');
      const noBtn = card.querySelector('[data-resp="no"]');
      if (!yesBtn || !noBtn) return;
      const reveal = (correct) => {
        if (card.dataset.revealed === 'true') return;
        card.dataset.revealed = 'true';
        card.dataset.resp = correct ? 'correct' : 'wrong';
        yesBtn.setAttribute('aria-pressed', correct ? 'false' : 'true');
        noBtn.setAttribute('aria-pressed', correct ? 'true' : 'false');
        yesBtn.disabled = true;
        noBtn.disabled = true;
        const fb = card.querySelector('.nao-faz__feedback');
        if (fb) fb.hidden = false;
      };
      yesBtn.addEventListener('click', () => reveal(false));
      noBtn.addEventListener('click', () => reveal(true));
    });
  }

  // B46 — Escalada 5 degraus SAM (página 7.10) — accordion clicável
  function bindEscaladaSteps() {
    document.querySelectorAll('.escalada__step').forEach((step) => {
      const head = step.querySelector('.escalada__head');
      const body = step.querySelector('.escalada__body');
      if (!head || !body) return;
      head.addEventListener('click', () => {
        const expanded = step.dataset.expanded === 'true';
        step.dataset.expanded = expanded ? 'false' : 'true';
        head.setAttribute('aria-expanded', String(!expanded));
        body.hidden = expanded;
      });
      head.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          head.click();
        }
      });
    });
  }

  // B47 — Painel RX comparativo: toggle de anotações por quadrante (página 7.12)
  function bindPainelRxToggle() {
    document.querySelectorAll('.painel-rx__toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        if (!target) return;
        const panel = document.getElementById(target);
        if (!panel) return;
        const show = panel.dataset.showAnnot !== 'true';
        panel.dataset.showAnnot = show ? 'true' : 'false';
        btn.setAttribute('aria-pressed', String(show));
        btn.textContent = show ? 'Ocultar achados' : 'Mostrar achados';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindMenu();
    bindTheme();
    bindOpenerChecklists();
    bindCaseAnchorToggle();
    bindFinalChecklist();
    bindNaoFazInteractive();
    bindEscaladaSteps();
    bindPainelRxToggle();
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
  });
})();
