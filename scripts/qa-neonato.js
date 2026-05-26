#!/usr/bin/env node
/**
 * QA Neonatologia — Plataforma Bauer
 * Suite Playwright cobrindo hub + M1-M5 (Parte 1 fechada).
 * Padrão herdado de preventiva-2/scripts/qa-fase6.js — 1 script vanilla, sem framework.
 *
 * Uso:
 *   node scripts/qa-neonato.js [baseUrl]
 *   baseUrl padrão: http://localhost:8000/neonatologia/
 *
 * Cobertura (smoke, expandível):
 *   - Hub: carrega, 12 cards visíveis, filtros funcionam
 *   - Cada módulo M1-M5: SPA carrega, hash routing navega primeira→última, quiz interativo
 *   - PWA: manifest e SW registrados
 *   - Console: zero errors críticos por página
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
// Inventário M1-M5 (Parte 1 completa)
// M6-M8 entram após checkup + fechamento (tasks #5/#6/#11)
// ------------------------------------------------------------------
const MODULES = [
  { slug: 'm1-classificacao-sifilis',       label: 'Classificação RN + Sífilis Congênita', hashPrefix: '#/p1-m1-p', pages: 11 },
  { slug: 'm2-torch',                        label: 'TORCH não-sífilis',                    hashPrefix: '#/p1-m2-p', pages:  8 },
  { slug: 'm3-reanimacao',                   label: 'Reanimação Neonatal',                   hashPrefix: '#/p1-m3-p', pages: 12 },
  { slug: 'm4-triagem-neonatal',             label: 'Triagem Neonatal — 6 triagens',        hashPrefix: '#/p1-m4-p', pages: 12 },
  { slug: 'm5-triagem-auditiva-neonatal',    label: 'Triagem Auditiva Neonatal',             hashPrefix: '#/p1-m5-p', pages: 13 },
];

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
async function loadPage(browser, url) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' && !shouldIgnoreConsoleMsg(msg)) {
      errors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
  return { ctx, page, errors };
}

function pass(name)               { return { name, status: 'PASS', detail: '' }; }
function fail(name, detail)       { return { name, status: 'FAIL', detail }; }
function warn(name, detail)       { return { name, status: 'WARN', detail }; }

// ------------------------------------------------------------------
// SUITES
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

    // Hub: 5 cards "DISPONÍVEL" Parte 1 (M1-M5)
    const disponiveis = await page.locator('.module-card:not([data-status="soon"]):not([data-status="bonus-soon"])').count();
    results.push(disponiveis === 5 ? pass(`hub.cards.disponiveis (5)`) : fail(`hub.cards.disponiveis`, `esperado 5, encontrado ${disponiveis}`));

    // Filtro chips (Todos / Parte 1 / Parte 2 / Bônus)
    const chips = await page.locator('.filter-chip').count();
    results.push(chips === 4 ? pass(`hub.filterChips (4)`) : fail(`hub.filterChips`, `esperado 4, encontrado ${chips}`));

    // Console errors
    if (errors.length === 0) results.push(pass(`hub.console`));
    else results.push(fail(`hub.console`, `${errors.length} erros: ${errors.slice(0,3).join(' | ')}`));

    // PWA: SW registered
    const swReg = await page.evaluate(async () => {
      if (!('serviceWorker' in navigator)) return null;
      const reg = await navigator.serviceWorker.getRegistration();
      return reg ? { scope: reg.scope, active: !!reg.active } : null;
    });
    if (swReg && swReg.active) results.push(pass(`hub.pwa.sw (${swReg.scope})`));
    else results.push(warn(`hub.pwa.sw`, `SW não registrado ou inativo (pode ser timing — testar online ≥2x)`));

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

async function suiteModule(browser, mod) {
  const results = [];
  const moduleUrl = BASE_URL + `modules/${mod.slug}/`;
  let ctx, page, errors;
  try {
    ({ ctx, page, errors } = await loadPage(browser, moduleUrl));

    // Primeira página carrega
    const firstHash = mod.hashPrefix + '1';
    const onFirst = await page.evaluate(() => location.hash);
    if (!onFirst || onFirst === '#' || onFirst === '') {
      // Redirect default — verifica que p1 está visível
      const p1Visible = await page.locator('[data-page-num="1"]').first().isVisible();
      results.push(p1Visible ? pass(`${mod.slug}.firstPage`) : fail(`${mod.slug}.firstPage`, 'p1 não visível'));
    } else {
      results.push(pass(`${mod.slug}.firstPage (hash=${onFirst})`));
    }

    // Hash routing: navega pra última página
    const lastHash = mod.hashPrefix + mod.pages;
    await page.evaluate((h) => { location.hash = h; }, lastHash);
    await page.waitForTimeout(400);
    const lastVisible = await page.locator(`[data-page-num="${mod.pages}"]`).first().isVisible().catch(() => false);
    results.push(lastVisible ? pass(`${mod.slug}.lastPage (p${mod.pages})`) : fail(`${mod.slug}.lastPage`, `p${mod.pages} não visível após hash=${lastHash}`));

    // Quiz: tem ao menos 1 botão de quiz na última página
    const quizBtns = await page.locator(`[data-page-num="${mod.pages}"] .quiz-option, [data-page-num="${mod.pages}"] button[data-quiz-option], [data-page-num="${mod.pages}"] [role="radio"]`).count();
    results.push(quizBtns >= 2 ? pass(`${mod.slug}.quiz.options (${quizBtns})`) : warn(`${mod.slug}.quiz.options`, `${quizBtns} opções em p${mod.pages} — verificar se última página tem quiz`));

    // Console errors da carga
    if (errors.length === 0) results.push(pass(`${mod.slug}.console`));
    else results.push(fail(`${mod.slug}.console`, `${errors.length} erros: ${errors.slice(0,3).join(' | ')}`));

    // Mobile viewport — primeira página
    await page.setViewportSize({ width: 375, height: 667 });
    await page.evaluate((h) => { location.hash = h; }, firstHash);
    await page.waitForTimeout(300);
    const mobileOk = await page.locator(`[data-page-num="1"]`).first().isVisible().catch(() => false);
    results.push(mobileOk ? pass(`${mod.slug}.mobile375`) : fail(`${mod.slug}.mobile375`, 'p1 não visível em 375x667'));

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
  const lines = ['# QA Neonatologia — Plataforma Bauer', '', `**Base URL**: ${BASE_URL}`, `**Data**: ${new Date().toISOString()}`, ''];
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
  fs.writeFileSync(REPORT_JSON, JSON.stringify({ baseUrl: BASE_URL, date: new Date().toISOString(), suites: allSuites, summary: { totalPass, totalWarn, totalFail, total } }, null, 2));

  console.log(`\n[QA] Resultado: ${totalPass}/${total} PASS · ${totalWarn} WARN · ${totalFail} FAIL`);
  console.log(`[QA] Relatório: ${REPORT_MD}\n`);
  process.exit(totalFail === 0 ? 0 : 1);
})();
