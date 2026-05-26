#!/usr/bin/env node
/**
 * QA Neonatologia — Plataforma Bauer
 * Suite Playwright cobrindo hub + M1-M12 (Parte 1 + Parte 2 + Cirúrgico).
 * Padrão herdado de preventiva-2/scripts/qa-fase6.js — 1 script vanilla, sem framework.
 *
 * Uso:
 *   node scripts/qa-neonato.js [baseUrl]
 *   baseUrl padrão: http://localhost:8000/neonatologia/
 *
 * Cobertura:
 *   - Hub: cards, filtros, PWA (manifest+SW), console limpo
 *   - Cada módulo M1-M12: load, hash routing primeira/última, per-page sampling,
 *     quiz universal por página amostrada, anti-meta grep, botão Hub, PWA bootstrap,
 *     fechamento <main> correto, mobile 375x667
 *   - Checks especiais por aula: case-anchor (M1/M6/M7/M8), LAUDO-DUAL (M8/M9/M10/M12),
 *     cascata alcalose (M12)
 *
 * Saída: docs/qa-neonato.md + docs/qa-neonato.json
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = (process.argv[2] || 'http://localhost:8000/neonatologia/').replace(/\/$/, '/');
const OUT_DIR = path.join(__dirname, '..', 'docs');
const REPORT_MD = path.join(OUT_DIR, 'qa-neonato.md');
const REPORT_JSON = path.join(OUT_DIR, 'qa-neonato.json');

// ------------------------------------------------------------------
// Inventário M1-M12 (Parte 1 + Parte 2 + Cirúrgico)
// ------------------------------------------------------------------
const MODULES = [
  { slug: 'm1-classificacao-sifilis',         label: 'Classificação RN + Sífilis',  hashPrefix: '#/p1-m1-p',  pages: 11 },
  { slug: 'm2-torch',                          label: 'TORCH não-sífilis',           hashPrefix: '#/p1-m2-p',  pages:  8 },
  { slug: 'm3-reanimacao',                     label: 'Reanimação Neonatal',         hashPrefix: '#/p1-m3-p',  pages: 12 },
  { slug: 'm4-triagem-neonatal',               label: 'Triagem Neonatal 6T',         hashPrefix: '#/p1-m4-p',  pages: 12 },
  { slug: 'm5-triagem-auditiva-neonatal',      label: 'Triagem Auditiva',            hashPrefix: '#/p1-m5-p',  pages: 13 },
  { slug: 'm6-dispneia-neonatal-sdr-sepse',    label: 'Dispneia SDR+sepse',          hashPrefix: '#/p2-m6-p',  pages: 14 },
  { slug: 'm7-ttrn-sam-hppn',                  label: 'TTRN+SAM+HPPN',               hashPrefix: '#/p2-m7-p',  pages: 13 },
  { slug: 'm8-ictericia-neonatal',             label: 'Icterícia',                   hashPrefix: '#/p2-m8-p',  pages: 15 },
  { slug: 'm9-enterocolite-necrosante',        label: 'ECN',                         hashPrefix: '#/p2-m9-p',  pages:  8 },
  { slug: 'm10-miscelania-neonatal',           label: 'Miscelânia',                  hashPrefix: '#/p2-m10-p', pages: 13 },
  { slug: 'm11-condicoes-cervicais',           label: 'Cervicais',                   hashPrefix: '#/p2-m11-p', pages:  7 },
  { slug: 'm12-defeitos-cirurgicos-neonatais', label: 'Cirurgia pediátrica',         hashPrefix: '#/p2-m12-p', pages: 17 },
];

// ------------------------------------------------------------------
// Per-page sampling — 4-5 páginas pseudo-aleatórias por módulo,
// usando seed determinístico (slug) pra reprodutibilidade entre runs.
// ------------------------------------------------------------------
function samplePages(mod) {
  const total = mod.pages;
  const sampleSize = Math.min(5, total);
  // Hash determinístico do slug pra seed estável
  let seed = 0;
  for (let i = 0; i < mod.slug.length; i++) seed = (seed * 31 + mod.slug.charCodeAt(i)) >>> 0;
  const picked = new Set();
  // Garante p1 e última sempre (ancoram o módulo)
  picked.add(1);
  picked.add(total);
  let s = seed;
  while (picked.size < sampleSize) {
    s = (s * 1103515245 + 12345) >>> 0;
    const candidate = (s % total) + 1;
    picked.add(candidate);
  }
  return [...picked].sort((a, b) => a - b);
}

// ------------------------------------------------------------------
// Anti-metalinguagem — padrões proibidos no DOM didático
// (alinhado com §3.1 do AGENTS.md)
// ------------------------------------------------------------------
const ANTI_META_PATTERNS = [
  /conforme\s+(solicitado|demonstrado|a\s+aula)/i,
  /de\s+acordo\s+com\s+a\s+aula/i,
  /a\s+aula\s+diz/i,
  /o\s+professor\s+menciona/i,
  /o\s+objetivo\s+(d[aoe]ss[ae]|d[ea])\s+(sess[ãa]o|aula|p[áa]gina)/i,
  /esp[eé]ro\s+que\s+ajude/i,
];

// ------------------------------------------------------------------
// Checks especiais por aula — componentes únicos
// ------------------------------------------------------------------
const SPECIAL_CHECKS = {
  'm1-classificacao-sifilis': [
    { name: 'case-anchor-joao-eucalipto', selector: '.case-anchor', minCount: 1, expectPages: 'qualquer' },
  ],
  'm6-dispneia-neonatal-sdr-sepse': [
    { name: 'case-anchor-firmindo', selector: '.case-anchor', minCount: 1, expectPages: 'qualquer' },
  ],
  'm7-ttrn-sam-hppn': [
    { name: 'case-anchor-joao-elvira-maria', selector: '.case-anchor', minCount: 1, expectPages: 'qualquer' },
  ],
  'm8-ictericia-neonatal': [
    { name: 'case-anchor-eusebio-foucault', selector: '.case-anchor', minCount: 1, expectPages: 'qualquer' },
    { name: 'laudo-dual-revisable', selector: '.bauer-revisable', minCount: 1, expectPages: [1, 2, 7, 9] },
  ],
  'm9-enterocolite-necrosante': [
    { name: 'laudo-dual-d04-cirurgico', selector: '.bauer-revisable', minCount: 1, expectPages: [4] },
  ],
  'm10-miscelania-neonatal': [
    { name: 'laudo-dual-hipoglicemia-hipotermia', selector: '.bauer-revisable', minCount: 1, expectPages: [1, 3] },
  ],
  'm12-defeitos-cirurgicos-neonatais': [
    { name: 'laudo-dual-d08-jejuno-gastro', selector: '.bauer-revisable', minCount: 1, expectPages: [8] },
    { name: 'cascata-alcalose-canonica', anchor: '#bloco-13-cascata-alcalose-canonica', expectPages: [13] },
  ],
};

// ------------------------------------------------------------------
// Console error ignorelist — evita falso positivo de warnings esperados
// ------------------------------------------------------------------
const CONSOLE_IGNORE = [
  /favicon\.ico/i,
  /chrome-extension/i,
  /^\[PWA\]/i, // logs informativos do pwa-bootstrap
];

function shouldIgnoreConsoleMsg(msg) {
  const text = msg.text();
  return CONSOLE_IGNORE.some((re) => re.test(text));
}

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
async function loadPage(browser, url, viewport) {
  const ctx = await browser.newContext({ viewport: viewport || { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' && !shouldIgnoreConsoleMsg(msg)) {
      errors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
  await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
  return { ctx, page, errors };
}

function pass(name)         { return { name, status: 'PASS', detail: '' }; }
function fail(name, detail) { return { name, status: 'FAIL', detail }; }
function warn(name, detail) { return { name, status: 'WARN', detail }; }

async function navigateToHash(page, hash) {
  await page.evaluate((h) => { location.hash = h; }, hash);
  await page.waitForTimeout(350);
}

// ------------------------------------------------------------------
// SUITE: Hub
// ------------------------------------------------------------------
async function suiteHub(browser) {
  const results = [];
  const url = BASE_URL;
  let ctx, page, errors;
  try {
    ({ ctx, page, errors } = await loadPage(browser, url));

    // Hub: 12 cards visíveis
    const cards = await page.locator('.module-card').count();
    results.push(cards === 12 ? pass(`hub.cards (12)`) : fail(`hub.cards`, `esperado 12, encontrado ${cards}`));

    // Hub: cards "DISPONÍVEL" — Parte 1 + Parte 2 + Cirúrgico (M1-M12)
    const disponiveis = await page.locator('.module-card:not([data-status="soon"]):not([data-status="bonus-soon"])').count();
    results.push(disponiveis >= 5 ? pass(`hub.cards.disponiveis (${disponiveis})`) : fail(`hub.cards.disponiveis`, `esperado >=5, encontrado ${disponiveis}`));

    // Filtro chips
    const chips = await page.locator('.filter-chip').count();
    results.push(chips === 4 ? pass(`hub.filterChips (4)`) : fail(`hub.filterChips`, `esperado 4, encontrado ${chips}`));

    // Console errors
    if (errors.length === 0) results.push(pass(`hub.console`));
    else results.push(fail(`hub.console`, `${errors.length} erros: ${errors.slice(0, 3).join(' | ')}`));

    // PWA: SW registered
    const swReg = await page.evaluate(async () => {
      if (!('serviceWorker' in navigator)) return null;
      const reg = await navigator.serviceWorker.getRegistration();
      return reg ? { scope: reg.scope, active: !!reg.active } : null;
    });
    if (swReg && swReg.active) results.push(pass(`hub.pwa.sw (${swReg.scope})`));
    else results.push(warn(`hub.pwa.sw`, `SW não registrado ou inativo (timing — testar online >=2x)`));

    // Manifest acessível
    const manifestStatus = await page.evaluate(async (base) => {
      try {
        const r = await fetch(base + 'manifest.webmanifest');
        return r.status;
      } catch (e) { return 'ERR'; }
    }, BASE_URL);
    results.push(manifestStatus === 200 ? pass(`hub.pwa.manifest`) : fail(`hub.pwa.manifest`, `status=${manifestStatus}`));

  } catch (err) {
    results.push(fail(`hub.load`, err.message));
  } finally {
    if (ctx) await ctx.close();
  }
  return { suite: 'hub', results };
}

// ------------------------------------------------------------------
// SUITE: Módulo (per-page expandido)
// ------------------------------------------------------------------
async function suiteModule(browser, mod) {
  const results = [];
  const moduleUrl = BASE_URL + `modules/${mod.slug}/`;
  let ctx, page, errors;
  try {
    ({ ctx, page, errors } = await loadPage(browser, moduleUrl));

    // -------- Smoke (mantido do baseline) --------
    const firstHash = mod.hashPrefix + '1';
    const onFirst = await page.evaluate(() => location.hash);
    if (!onFirst || onFirst === '#' || onFirst === '') {
      const p1Visible = await page.locator('[data-page-num="1"]').first().isVisible();
      results.push(p1Visible ? pass(`${mod.slug}.firstPage`) : fail(`${mod.slug}.firstPage`, 'p1 não visível'));
    } else {
      results.push(pass(`${mod.slug}.firstPage (hash=${onFirst})`));
    }

    const lastHash = mod.hashPrefix + mod.pages;
    await navigateToHash(page, lastHash);
    const lastVisible = await page.locator(`[data-page-num="${mod.pages}"]`).first().isVisible().catch(() => false);
    results.push(lastVisible ? pass(`${mod.slug}.lastPage (p${mod.pages})`) : fail(`${mod.slug}.lastPage`, `p${mod.pages} não visível após hash=${lastHash}`));

    // Quiz na última página (smoke)
    const quizBtns = await page.locator(`[data-page-num="${mod.pages}"] .quiz-option, [data-page-num="${mod.pages}"] button[data-quiz-option], [data-page-num="${mod.pages}"] [role="radio"]`).count();
    results.push(quizBtns >= 2 ? pass(`${mod.slug}.quiz.options (${quizBtns})`) : warn(`${mod.slug}.quiz.options`, `${quizBtns} opções em p${mod.pages}`));

    if (errors.length === 0) results.push(pass(`${mod.slug}.console`));
    else results.push(fail(`${mod.slug}.console`, `${errors.length} erros: ${errors.slice(0, 3).join(' | ')}`));

    // -------- Transversais (1x por módulo) --------

    // Botão Hub no header
    const hubBtn = await page.locator('a.icon-btn[href="../../"]').count();
    results.push(hubBtn >= 1 ? pass(`${mod.slug}.header.hubBtn`) : fail(`${mod.slug}.header.hubBtn`, 'a.icon-btn[href="../../"] ausente'));

    // PWA bootstrap carregado
    const pwaScript = await page.locator('script[src*="pwa-bootstrap.js"]').count();
    results.push(pwaScript >= 1 ? pass(`${mod.slug}.pwa.bootstrap`) : fail(`${mod.slug}.pwa.bootstrap`, 'script pwa-bootstrap.js ausente'));

    // </main> fecha 1x APÓS última page — leve via HTML cru
    const html = await page.content();
    const mainCloseMatches = (html.match(/<\/main>/gi) || []).length;
    const lastPageMarker = `data-page-num="${mod.pages}"`;
    const lastPageIdx = html.indexOf(lastPageMarker);
    const mainCloseIdx = html.lastIndexOf('</main>');
    if (mainCloseMatches === 1 && lastPageIdx > -1 && mainCloseIdx > lastPageIdx) {
      results.push(pass(`${mod.slug}.layout.mainClose`));
    } else {
      results.push(fail(`${mod.slug}.layout.mainClose`, `closes=${mainCloseMatches}, lastPageIdx=${lastPageIdx}, closeIdx=${mainCloseIdx}`));
    }

    // -------- Per-page sampling --------
    const sample = samplePages(mod);
    for (const pageNum of sample) {
      await navigateToHash(page, mod.hashPrefix + pageNum);

      // Article visível
      const articleVisible = await page.locator(`article.page[data-page-num="${pageNum}"]`).first().isVisible().catch(() => false);
      results.push(articleVisible
        ? pass(`${mod.slug}.p${pageNum}.article`)
        : fail(`${mod.slug}.p${pageNum}.article`, 'article.page[data-page-num] não visível'));

      // Quiz universal presente (data-quiz-id no DOM da página)
      const quizUnivCount = await page.locator(`article.page[data-page-num="${pageNum}"] [data-quiz-id]`).count();
      if (quizUnivCount >= 1) {
        results.push(pass(`${mod.slug}.p${pageNum}.quiz`));
      } else {
        results.push(warn(`${mod.slug}.p${pageNum}.quiz`, 'sem [data-quiz-id] — verificar se essa página comporta quiz'));
      }

      // Anti-meta grep dentro da página
      const pageHtml = await page.locator(`article.page[data-page-num="${pageNum}"]`).first().innerHTML().catch(() => '');
      const hit = ANTI_META_PATTERNS.find((re) => re.test(pageHtml));
      if (!hit) {
        results.push(pass(`${mod.slug}.p${pageNum}.antiMeta`));
      } else {
        results.push(fail(`${mod.slug}.p${pageNum}.antiMeta`, `padrão proibido: ${hit}`));
      }
    }

    // -------- Mobile viewport 375×667 --------
    await page.setViewportSize({ width: 375, height: 667 });
    await navigateToHash(page, firstHash);
    const mobileOk = await page.locator(`[data-page-num="1"]`).first().isVisible().catch(() => false);
    results.push(mobileOk ? pass(`${mod.slug}.mobile375`) : fail(`${mod.slug}.mobile375`, 'p1 não visível em 375x667'));

    // Mobile — navega pra última e confere
    await navigateToHash(page, lastHash);
    const mobileLast = await page.locator(`[data-page-num="${mod.pages}"]`).first().isVisible().catch(() => false);
    results.push(mobileLast ? pass(`${mod.slug}.mobile375.last`) : fail(`${mod.slug}.mobile375.last`, `p${mod.pages} não visível mobile`));

    // Restaura desktop pros especiais
    await page.setViewportSize({ width: 1440, height: 900 });

    // -------- Checks especiais por aula --------
    const specials = SPECIAL_CHECKS[mod.slug] || [];
    for (const spec of specials) {
      if (spec.anchor) {
        // Anchor cross-page — varre HTML cru
        const found = html.includes(`id="${spec.anchor.replace(/^#/, '')}"`) || html.includes(spec.anchor);
        results.push(found
          ? pass(`${mod.slug}.special.${spec.name}`)
          : fail(`${mod.slug}.special.${spec.name}`, `âncora ${spec.anchor} ausente no HTML`));
        continue;
      }

      if (spec.expectPages === 'qualquer') {
        // Conta global do componente em qualquer página do módulo
        const total = await page.locator(spec.selector).count();
        results.push(total >= spec.minCount
          ? pass(`${mod.slug}.special.${spec.name} (${total})`)
          : fail(`${mod.slug}.special.${spec.name}`, `esperado >=${spec.minCount} ${spec.selector}, encontrado ${total}`));
        continue;
      }

      if (Array.isArray(spec.expectPages)) {
        // Verifica presença nas páginas esperadas
        let allFound = true;
        const missing = [];
        for (const pageNum of spec.expectPages) {
          await navigateToHash(page, mod.hashPrefix + pageNum);
          const count = await page.locator(`article.page[data-page-num="${pageNum}"] ${spec.selector}`).count();
          if (count < spec.minCount) {
            allFound = false;
            missing.push(`p${pageNum}(${count})`);
          }
        }
        results.push(allFound
          ? pass(`${mod.slug}.special.${spec.name} (p${spec.expectPages.join(',')})`)
          : fail(`${mod.slug}.special.${spec.name}`, `faltando em ${missing.join(', ')}`));
      }
    }

  } catch (err) {
    results.push(fail(`${mod.slug}.load`, err.message));
  } finally {
    if (ctx) await ctx.close();
  }
  return { suite: mod.slug, results };
}

// ------------------------------------------------------------------
// Run
// ------------------------------------------------------------------
(async () => {
  console.log(`\n[QA] BASE_URL = ${BASE_URL}\n`);
  const browser = await chromium.launch();
  const allSuites = [];
  allSuites.push(await suiteHub(browser));
  for (const mod of MODULES) {
    process.stdout.write(`[QA] ${mod.slug} ... `);
    const s = await suiteModule(browser, mod);
    const fails = s.results.filter((r) => r.status === 'FAIL').length;
    const warns = s.results.filter((r) => r.status === 'WARN').length;
    console.log(`${fails === 0 ? 'OK' : 'FAIL'} (${s.results.length - fails - warns} pass, ${warns} warn, ${fails} fail)`);
    allSuites.push(s);
  }
  await browser.close();

  // ----- Sumário -----
  let totalPass = 0, totalFail = 0, totalWarn = 0;
  let totalPagesValidated = 0;
  for (const mod of MODULES) totalPagesValidated += samplePages(mod).length;

  const lines = [
    '# QA Neonatologia — Plataforma Bauer',
    '',
    `**Base URL**: ${BASE_URL}`,
    `**Data**: ${new Date().toISOString()}`,
    `**Módulos cobertos**: ${MODULES.length} (M1-M12)`,
    `**Páginas amostradas (per-page checks)**: ${totalPagesValidated}`,
    `**Páginas totais nos módulos**: ${MODULES.reduce((a, m) => a + m.pages, 0)}`,
    '',
  ];
  for (const s of allSuites) {
    lines.push(`## Suite: ${s.suite}`);
    lines.push('');
    lines.push('| Check | Status | Detalhe |');
    lines.push('|---|---|---|');
    for (const r of s.results) {
      lines.push(`| ${r.name} | ${r.status === 'PASS' ? '✅ PASS' : r.status === 'WARN' ? '🟡 WARN' : '🔴 FAIL'} | ${r.detail} |`);
      if (r.status === 'PASS') totalPass++;
      else if (r.status === 'WARN') totalWarn++;
      else totalFail++;
    }
    lines.push('');
  }
  const total = totalPass + totalFail + totalWarn;
  lines.unshift(`> **Resultado**: ${totalPass}/${total} PASS · ${totalWarn} WARN · ${totalFail} FAIL`);
  lines.unshift('');

  fs.writeFileSync(REPORT_MD, lines.join('\n'));
  fs.writeFileSync(REPORT_JSON, JSON.stringify({
    baseUrl: BASE_URL,
    date: new Date().toISOString(),
    modulesCount: MODULES.length,
    pagesValidated: totalPagesValidated,
    pagesTotal: MODULES.reduce((a, m) => a + m.pages, 0),
    suites: allSuites,
    summary: { totalPass, totalWarn, totalFail, total },
  }, null, 2));

  console.log(`\n[QA] Resultado: ${totalPass}/${total} PASS · ${totalWarn} WARN · ${totalFail} FAIL`);
  console.log(`[QA] Páginas amostradas: ${totalPagesValidated} (de ${MODULES.reduce((a, m) => a + m.pages, 0)} totais)`);
  console.log(`[QA] Relatório: ${REPORT_MD}\n`);
  process.exit(totalFail === 0 ? 0 : 1);
})();
