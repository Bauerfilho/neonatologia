// Hash router SPA. Namespace #/p2-m10-p{1..13}
// Miscelânea neonatal — M10 (Parte 2, Bônus 2)
// Apgar canônico + Hipoglicemia/Hipocalcemia + EHI/Convulsão/Hipotermia + ROP
// Mantém histórico do navegador, fecha drawer, atualiza progresso e ARIA.

(function () {
  'use strict';

  const PAGES_TOTAL = 13;
  const HASH_PREFIX = '#/p2-m10-p';
  const STORAGE_PREFIX = 'neonato-p2-m10';

  function parseHash() {
    const h = location.hash || HASH_PREFIX + '1';
    const m = /^#\/p2-m10-p(\d+)$/.exec(h);
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
    const base = 'Miscelânea neonatal — Neonatologia (Parte 2, M10)';
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
    document.dispatchEvent(new CustomEvent('m10:pagechange', { detail: { page } }));
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

  function bindBauerRevisableToggles() {
    document.querySelectorAll('.bauer-revisable').forEach((box) => {
      const btn = box.querySelector('.bauer-revisable__toggle');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const expanded = box.dataset.expanded === 'true';
        box.dataset.expanded = expanded ? 'false' : 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        btn.textContent = expanded ? 'Expandir' : 'Recolher';
      });
    });
  }

  function bindApgarToggle() {
    // V03 — Tabela Apgar com toggle de sinônimos da banca
    document.querySelectorAll('.apgar-table__toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const table = btn.closest('.apgar-table');
        if (!table) return;
        const showing = table.dataset.synonyms === 'true';
        table.dataset.synonyms = showing ? 'false' : 'true';
        btn.setAttribute('aria-expanded', String(!showing));
        btn.textContent = showing ? 'Mostrar sinônimos da banca' : 'Ocultar sinônimos';
      });
    });
  }

  function bindHipotermiaCalc() {
    // V12 — Calculadora elegibilidade hipotermia terapêutica
    const calc = document.querySelector('.calc-hipotermia');
    if (!calc) return;
    const output = calc.querySelector('.calc-hipotermia__output');
    const inputs = calc.querySelectorAll('input, select');

    function compute() {
      const ig = parseFloat(calc.querySelector('[name="ig"]').value);
      const peso = parseFloat(calc.querySelector('[name="peso"]').value);
      const apgar = parseFloat(calc.querySelector('[name="apgar5"]').value);
      const ence = calc.querySelector('[name="encefalopatia"]').value;
      const horas = parseFloat(calc.querySelector('[name="horas"]').value);

      const missing = [];
      if (isNaN(ig)) missing.push('IG');
      if (isNaN(peso)) missing.push('peso');
      if (isNaN(apgar)) missing.push('Apgar 5º min');
      if (!ence) missing.push('encefalopatia');
      if (isNaN(horas)) missing.push('horas de vida');

      if (missing.length) {
        output.innerHTML = '<strong>Faltam dados:</strong> ' + missing.join(', ') + '.';
        output.dataset.verdict = 'pending';
        return;
      }

      const igOK = ig >= 35;
      const horaOK = horas <= 6;
      const asfixia = apgar <= 5;
      const enceOK = ence === 'mod-grave';

      let verdict, msg;
      if (!igOK) {
        verdict = 'no';
        msg = '<strong>NÃO indicada.</strong> IG ' + ig + ' sem &lt; 35 sem — critério decisivo de exclusão, independente do peso (' + peso + ' g).';
      } else if (!horaOK) {
        verdict = 'no';
        msg = '<strong>NÃO indicada.</strong> ' + horas + ' h de vida ultrapassa a janela terapêutica de 6 h.';
      } else if (!asfixia) {
        verdict = 'no';
        msg = '<strong>NÃO indicada.</strong> Apgar 5º min ' + apgar + ' não caracteriza asfixia perinatal suficiente.';
      } else if (!enceOK) {
        verdict = 'no';
        msg = '<strong>NÃO indicada.</strong> Sem encefalopatia moderada-grave — critério obrigatório.';
      } else {
        verdict = 'yes';
        msg = '<strong>INDICADA.</strong> IG ' + ig + ' sem (≥ 35) + janela ' + horas + ' h (≤ 6) + Apgar 5º min ' + apgar + ' (≤ 5) + encefalopatia mod-grave. Iniciar protocolo 33,5 °C corpo total / 72 h.';
      }
      output.innerHTML = msg;
      output.dataset.verdict = verdict;
    }
    inputs.forEach((i) => i.addEventListener('input', compute));
    inputs.forEach((i) => i.addEventListener('change', compute));
  }

  function bindRopRastreio() {
    // V15 — Checklist rastreio ROP
    const box = document.querySelector('.calc-rop');
    if (!box) return;
    const output = box.querySelector('.calc-rop__output');

    function compute() {
      const ig = parseFloat(box.querySelector('[name="ig-rop"]').value);
      const peso = parseFloat(box.querySelector('[name="peso-rop"]').value);
      const adicionais = box.querySelectorAll('[name="adicionais"]:checked');

      const igCrit = !isNaN(ig) && ig < 32;
      const pesoCrit = !isNaN(peso) && peso <= 1500;
      const principal = igCrit || pesoCrit;
      const advCount = adicionais.length;

      let verdict, msg;
      if (principal) {
        verdict = 'yes';
        const motivo = [];
        if (igCrit) motivo.push('IG ' + ig + ' sem < 32 sem');
        if (pesoCrit) motivo.push('peso ' + peso + ' g ≤ 1500 g');
        msg = '<strong>RASTREIA</strong> — critério principal: ' + motivo.join(' / ') + '. Primeira avaliação 4-6 sem pós-natais.';
      } else if (advCount > 0 && (!isNaN(ig) || !isNaN(peso))) {
        verdict = 'maybe';
        msg = '<strong>Considerar rastreamento</strong> — ' + advCount + ' fator(es) adicional(is) presentes. Critério principal não cumprido (IG ≥ 32 sem e peso > 1500 g), mas vulnerabilidade adicional justifica avaliação.';
      } else {
        verdict = 'no';
        if (isNaN(ig) && isNaN(peso)) {
          msg = '<strong>Preencha IG e peso.</strong>';
          verdict = 'pending';
        } else {
          msg = '<strong>Não rastreia.</strong> Critério principal (IG &lt; 32 sem OU peso ≤ 1500 g) não cumprido e sem fatores adicionais.';
        }
      }
      output.innerHTML = msg;
      output.dataset.verdict = verdict;
    }
    box.querySelectorAll('input').forEach((i) => i.addEventListener('input', compute));
    box.querySelectorAll('input[type="checkbox"]').forEach((i) => i.addEventListener('change', compute));
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindMenu();
    bindTheme();
    bindOpenerChecklists();
    bindBauerRevisableToggles();
    bindApgarToggle();
    bindHipotermiaCalc();
    bindRopRastreio();
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
  });
})();
