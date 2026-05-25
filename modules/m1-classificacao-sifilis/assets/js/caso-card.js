// Caso João Eucalipto — caixinha lateral persistente, ESTADO EVOLUTIVO por página.
// Lê de data/casos-p1.json (fetch). Renderiza conteúdo evolutivo:
//   - Página 1.1 (entry): dados de entrada (mãe, gestação, RN, intercorrência, líquor)
//   - Página 1.4 (classification): + classificação resolvida (pré-termo tardio + BP + PIG)
//   - Página 1.6 (sifilis-staging): + sífilis materna em fase latente / duração ignorada
//   - Página 1.9 (treatment-eval): + tratamento materno = INADEQUADO (esquema errado p/ estágio)
//   - Página 1.10 (conduct): + líquor alterado (40 céls / 160 prot) + cristalina EV indicada
//   - Página 1.11 (resolved): + status RESOLVIDO + carry Módulo 3
//
// Exibida apenas em páginas marcadas com data-show-caso="caso-1"
// e usa o atributo data-caso-stage para identificar o estágio.

(function () {
  'use strict';

  const NS = 'neonato-p1-m1.caso-1';
  let casoData = null;

  // Conteúdo evolutivo por estágio
  const STAGES = {
    'entry': {
      label: 'Apresentação — abertura',
      blocks: ['header', 'rn', 'mae', 'incidente']
    },
    'classification': {
      label: 'Classificação resolvida',
      blocks: ['header', 'rn', 'mae', 'classification']
    },
    'sifilis-staging': {
      label: 'Sífilis materna — fase identificada',
      blocks: ['header', 'rn', 'mae', 'classification', 'staging']
    },
    'treatment-eval': {
      label: 'Tratamento materno avaliado',
      blocks: ['header', 'rn', 'mae', 'classification', 'staging', 'tx-eval']
    },
    'conduct': {
      label: 'Conduta no RN definida',
      blocks: ['header', 'rn', 'mae', 'classification', 'staging', 'tx-eval', 'liquor', 'conduct']
    },
    'resolved': {
      label: 'Caso resolvido — carry M3',
      blocks: ['header', 'rn', 'mae', 'classification', 'staging', 'tx-eval', 'liquor', 'conduct', 'followup']
    }
  };

  function blockHTML(name, c) {
    switch (name) {
      case 'rn':
        return `<dt>RN</dt><dd>${c.nome} · IG ${c.ig} · ${c.peso} · ${c.comprimento || '46 cm'}</dd>`;
      case 'mae':
        return `<dt>Mãe</dt><dd>${c.mae}, 20 a · 14ª sem · VDRL ${c.vdrl_materno || '1:32'}</dd>`;
      case 'incidente':
        return `<dt>Sala parto</dt><dd>${c.achados_iniciais}</dd>
                <dt>Líquor</dt><dd>${c.liquor || '40 céls / 160 prot'}</dd>`;
      case 'classification':
        return `<dt>Classificação</dt><dd><strong>${c.classificacao_completa || 'pré-termo tardio · baixo peso · PIG'}</strong></dd>`;
      case 'staging':
        return `<dt>Estágio mãe</dt><dd>Duração ignorada (sem cancro, sem manifestação prévia)</dd>`;
      case 'tx-eval':
        return `<dt>Tx materno</dt><dd><strong style="color:var(--color-danger-500)">INADEQUADO</strong> · esquema de 1 dose p/ duração ignorada (exige 3 doses)</dd>`;
      case 'liquor':
        return `<dt>Líquor</dt><dd><strong style="color:var(--color-danger-500)">ALTERADO</strong> · 40 céls (>25) · 160 prot (>150)</dd>`;
      case 'conduct':
        return `<dt>Conduta RN</dt><dd><strong style="color:var(--accent-coral)">Cristalina EV</strong> · 50.000 UI/kg · 10 d (12/12h <7d · 8/8h ≥7d)</dd>`;
      case 'followup':
        return `<dt>Seguimento</dt><dd>1m / 3m / 6m / 12m / 18m · alta com 2 VDRLs zerados</dd>
                <dt>Carry</dt><dd>Caso reaparece no Módulo 3 (3.1 e 3.12)</dd>`;
      default:
        return '';
    }
  }

  function buildAnchor(caso, stage) {
    const collapsed = sessionStorage.getItem(NS + '.collapsed') === 'true';
    const stageDef = STAGES[stage] || STAGES['entry'];
    const root = document.createElement('aside');
    root.className = 'case-anchor';
    root.dataset.collapsed = String(collapsed);
    root.dataset.stage = stage;
    root.setAttribute('aria-label', 'Caso clínico ancorado — ' + caso.nome + ' — ' + stageDef.label);

    const dlContent = stageDef.blocks
      .filter((b) => b !== 'header')
      .map((b) => blockHTML(b, caso))
      .join('');

    root.innerHTML = `
      <div class="case-anchor__header">
        <h3 class="case-anchor__title">Caso 1 — ${caso.nome}</h3>
        <button class="case-anchor__toggle" type="button" aria-label="Expandir ou recolher caso clínico ancorado">${collapsed ? '▴' : '▾'}</button>
      </div>
      <div class="case-anchor__body">
        <div class="case-anchor__stage">${stageDef.label}</div>
        <dl>${dlContent}</dl>
        <div class="case-anchor__crosslinks">
          <a href="#/p1-m1-p1">→ Abertura (1.1)</a>
          <a href="#/p1-m1-p4">→ Classificação (1.4)</a>
          <a href="#/p1-m1-p11">→ Resolução (1.11)</a>
          <a href="../m3-reanimacao/index.html#/p1-m3-p1" data-crossmodule="m3">↗ Reaparece no Módulo 3 (3.1)</a>
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
    return root;
  }

  function currentPageInfo() {
    const page = document.querySelector('.page:not([hidden])');
    if (!page) return null;
    if (page.dataset.showCaso !== 'caso-1') return null;
    return { stage: page.dataset.casoStage || 'entry' };
  }

  function refresh() {
    const existing = document.querySelector('.case-anchor');
    if (existing) existing.remove();
    const info = currentPageInfo();
    if (!casoData || !info) return;
    document.body.appendChild(buildAnchor(casoData, info.stage));
  }

  async function loadCaso() {
    try {
      const res = await fetch('./data/casos-p1.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      casoData = data['caso-1'] || null;
    } catch (e) {
      // Fallback inline (cross-module tolerante; útil para file:// sem servidor)
      casoData = {
        nome: 'João Eucalipto',
        mae: 'Florinda Rosa',
        ig: '36+4 sem',
        peso: '1.900 g',
        comprimento: '46 cm',
        vdrl_materno: '1:32',
        classificacao: 'PIG',
        classificacao_completa: 'pré-termo tardio · baixo peso · PIG',
        achados_iniciais: 'hipotônico + apneia',
        liquor: '40 céls / 160 prot'
      };
      console.info('[caso-card] fallback inline:', e.message);
    }
    refresh();
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadCaso();
    window.addEventListener('hashchange', () => {
      setTimeout(refresh, 50);
    });
  });
})();
