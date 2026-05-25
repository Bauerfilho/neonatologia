// Caso João Eucalipto — caixinha lateral persistente.
// Lê de data/casos-p1.json (fetch). Falha silenciosamente se ausente (cross-module fallback).
// Exibida apenas em páginas marcadas com data-show-caso="caso-1".

(function () {
  'use strict';

  const NS = 'neonato-p1.caso-1';
  let casoData = null;

  function buildAnchor(caso) {
    const collapsed = sessionStorage.getItem(NS + '.collapsed') === 'true';
    const root = document.createElement('aside');
    root.className = 'case-anchor';
    root.dataset.collapsed = String(collapsed);
    root.setAttribute('aria-label', 'Caso clínico ancorado — ' + caso.nome);
    root.innerHTML = `
      <div class="case-anchor__header">
        <h3 class="case-anchor__title">Caso 1 — ${caso.nome}</h3>
        <button class="case-anchor__toggle" type="button" aria-label="Expandir ou recolher caso clínico ancorado">${collapsed ? '▴' : '▾'}</button>
      </div>
      <div class="case-anchor__body">
        <dl>
          <dt>Mãe</dt><dd>${caso.mae}</dd>
          <dt>IG</dt><dd>${caso.ig}</dd>
          <dt>Peso</dt><dd>${caso.peso}</dd>
          <dt>Classif.</dt><dd>${caso.classificacao}</dd>
          <dt>Achados</dt><dd>${caso.achados_iniciais}</dd>
          <dt>Cenário</dt><dd>Semáforo ${caso.cenario_semaforo}</dd>
        </dl>
        <div class="case-anchor__crosslinks">
          <a href="${caso.deep_links.modulo_3_abertura}">→ Abertura do caso (3.1)</a>
          <a href="${caso.deep_links.modulo_3_resolucao}">→ Resolução completa (3.12)</a>
          <a href="${caso.deep_links.modulo_1_apresentacao}" data-crossmodule="m1">↗ Apresentação no Módulo 1 (1.4)</a>
        </div>
      </div>
    `;
    const toggleBtn = root.querySelector('.case-anchor__toggle');
    toggleBtn.addEventListener('click', () => {
      const isC = root.dataset.collapsed === 'true';
      root.dataset.collapsed = String(!isC);
      toggleBtn.textContent = !isC ? '▴' : '▾';
      sessionStorage.setItem(NS + '.collapsed', String(!isC));
    });
    // Marcar cross-module link como "sinalizado" se M1 não existir
    const crossM1 = root.querySelector('[data-crossmodule="m1"]');
    if (crossM1) {
      crossM1.addEventListener('click', (e) => {
        // Tentativa best-effort; se 404, navegador exibe. Não bloqueamos navegação.
        // Apenas marca visualmente como pendência.
      });
    }
    return root;
  }

  function shouldShow() {
    const page = document.querySelector('.page:not([hidden])');
    if (!page) return false;
    return page.dataset.showCaso === 'caso-1';
  }

  function refresh() {
    const existing = document.querySelector('.case-anchor');
    if (existing) existing.remove();
    if (!casoData || !shouldShow()) return;
    document.body.appendChild(buildAnchor(casoData));
  }

  async function loadCaso() {
    try {
      const res = await fetch('./data/casos-p1.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      casoData = data['caso-1'] || null;
    } catch (e) {
      // Fallback inline: dados mínimos hardcoded para não quebrar (cross-module tolerante)
      casoData = {
        nome: 'João Eucalipto',
        mae: 'Florinda Rosa',
        ig: '36 semanas e 4 dias',
        peso: '1900 g',
        classificacao: 'PIG',
        achados_iniciais: 'hipotônico, em apneia',
        cenario_semaforo: 'vermelho',
        deep_links: {
          modulo_3_abertura: '#/p1-m3-p1',
          modulo_3_resolucao: '#/p1-m3-p12',
          modulo_1_apresentacao: '../m1-icterneo/index.html#/p1-m1-p4'
        }
      };
      console.info('[caso-card] usando fallback inline:', e.message);
    }
    refresh();
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadCaso();
    window.addEventListener('hashchange', () => {
      // Aguarda router atualizar visibilidade da página
      setTimeout(refresh, 50);
    });
  });
})();
