// Caso 2 — Lucrécia.
// Web Component <caso-clinico data-caso="2" data-momento="abertura|resolucao">
// Hash routing bidirecional: 2.1 (abertura) <-> 2.8 (resolucao).
// Renderização inline (não-overlay) — o caso É o conteúdo da página em 2.1 e 2.8.
// Dados carregados de data/casos-p1.json (com fallback inline para file://).

(function () {
  'use strict';

  let casoData = null;

  function renderAbertura(c) {
    return `
      <div class="lucrecia-card__head">
        <h2 class="lucrecia-card__title">Caso 2 — ${c.nome}</h2>
        <span class="lucrecia-card__moment" aria-label="Momento da narrativa: apresentação">Apresentação</span>
      </div>
      <dl>
        <dt>Gestante</dt><dd>${c.mae_nome}, <strong>${c.mae_ig_atendimento}</strong> de idade gestacional</dd>
        <dt>Queixa</dt><dd>${c.queixa}</dd>
        <dt>Epidemio</dt><dd><strong>${c.epidemio_chave}</strong></dd>
      </dl>
      <div class="sorologia" aria-label="Painel sorológico pré-natal de Lucrécia">
        <div class="sorologia__line">HIV: <strong>${c.sorologia_mae.hiv}</strong></div>
        <div class="sorologia__line">VDRL: <strong>${c.sorologia_mae.vdrl}</strong></div>
        <div class="sorologia__line">Rubéola: <strong>${c.sorologia_mae.rubeola}</strong></div>
        <div class="sorologia__line">CMV: <strong>${c.sorologia_mae.cmv}</strong></div>
        <div class="sorologia__line sorologia__line--toxo" style="grid-column: 1 / -1">Toxoplasmose: <strong>${c.sorologia_mae.toxo}</strong></div>
      </div>
      <dl>
        <dt>RN ao nascer</dt><dd><strong>${c.rn_ig}</strong> · <strong>${c.rn_peso}</strong> · classificada como <strong>${c.rn_classificacao}</strong></dd>
        <dt>Sorologia filha</dt><dd><strong>${c.rn_sorologia}</strong></dd>
      </dl>
      <p style="font-family: var(--font-display); font-style: italic; color: var(--ink-90); margin: var(--space-3) 0;">As duas perguntas que ficam abertas:</p>
      <ol style="margin: 0 0 var(--space-3) var(--space-5); color: var(--ink-100);">
        <li>${c.pergunta_1}</li>
        <li>${c.pergunta_2}</li>
      </ol>
      <a class="lucrecia-card__link" href="${c.deep_links.resolucao}" data-action="ir-resolucao">Ir para a resolução do caso (2.8) →</a>
    `;
  }

  function renderResolucao(c) {
    return `
      <div class="lucrecia-card__head">
        <h2 class="lucrecia-card__title">Caso 2 — ${c.nome}</h2>
        <span class="lucrecia-card__moment" aria-label="Momento da narrativa: resolução">Resolução</span>
      </div>
      <dl>
        <dt>Diagnóstico</dt><dd><strong>${c.resolucao.diagnostico}</strong></dd>
        <dt>Base diagnóstica</dt><dd>${c.resolucao.base_dx}</dd>
        <dt>Conduta complementar</dt><dd>${c.resolucao.conduta_complementar}</dd>
        <dt>Tratamento</dt><dd><strong>${c.resolucao.tratamento}</strong></dd>
        <dt>Duração</dt><dd><strong>${c.resolucao.duracao}</strong></dd>
        <dt>Corticoide adicional</dt><dd>${c.resolucao.corticoide}</dd>
      </dl>
      <a class="return-link" href="${c.deep_links.apresentacao}" data-action="voltar-apresentacao">Voltar à apresentação do caso (2.1)</a>
    `;
  }

  function renderInto(slot) {
    if (!casoData || !slot) return;
    const momento = slot.getAttribute('data-momento') || 'abertura';
    slot.classList.add('lucrecia-card');
    slot.setAttribute('role', 'article');
    slot.setAttribute('aria-label',
      'Caso clínico 2 — Lucrécia — ' + (momento === 'resolucao' ? 'resolução' : 'apresentação'));
    slot.innerHTML = momento === 'resolucao' ? renderResolucao(casoData) : renderAbertura(casoData);
  }

  function refresh() {
    document.querySelectorAll('caso-clinico[data-caso="2"]').forEach(renderInto);
  }

  async function loadCaso() {
    try {
      const res = await fetch('./data/casos-p1.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      casoData = data['caso-2'] || null;
    } catch (e) {
      // Fallback inline (file:// sem servidor)
      casoData = {
        nome: 'Lucrécia',
        mae_nome: 'Lucrécia',
        mae_ig_atendimento: '12 semanas',
        queixa: 'Febre baixa há alguns dias + linfadenopatia cervical',
        epidemio_chave: 'Viagem à casa de campo da prima 3 semanas antes (contato com gatos sem luvas)',
        sorologia_mae: {
          hiv: 'negativo',
          vdrl: 'não-reator',
          rubeola: 'IgG positivo · IgM negativo (imune)',
          cmv: 'IgG negativo · IgM negativo (suscetível)',
          toxo: 'IgG positivo · IgM positivo (aguda recente)'
        },
        rn_ig: '39 semanas (termo)',
        rn_peso: '2.200 g',
        rn_classificacao: 'PIG (abaixo da P10)',
        rn_sorologia: 'IgM positiva para toxoplasmose',
        pergunta_1: 'Qual o significado da IgM positiva no recém-nascido — e qual o tratamento indicado?',
        pergunta_2: 'Qual o tempo de duração do tratamento?',
        deep_links: {
          apresentacao: '#/p1-m2-p1',
          resolucao: '#/p1-m2-p8'
        },
        resolucao: {
          diagnostico: 'Toxoplasmose congênita',
          base_dx: 'IgM positiva no RN (pentâmero não atravessa a placenta — produção própria) + história materna de infecção aguda confirmada no 1º trimestre',
          conduta_complementar: 'Sorologia confirmatória (segunda amostra) + USG transfontanelar + fundoscopia; se alteração, TC de crânio + estudo do líquor',
          tratamento: 'Sulfadiazina + pirimetamina + ácido FOLÍNICO (não fólico)',
          duracao: '12 meses (1 ano) contínuo',
          corticoide: 'Apenas se coriorretinite grave em atividade OU proteína liquórica > 1 g/dL (1000 mg/dL)'
        }
      };
      console.info('[caso-lucrecia] fallback inline:', e.message);
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
