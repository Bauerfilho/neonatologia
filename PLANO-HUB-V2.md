# Plano de Implementação — Hub Bauer Neonatologia V2

**Versão**: V2 (substituirá `index.html` atual)
**Escopo**: Hub unificado de **12 módulos** (Parte 1 + Parte 2) — a porta de entrada da semana de neonatologia.
**Status**: Aguardando aprovação Bauer antes da execução.
**Referência arquitetural**: `~/Documents/Referências de plataformas /antibioticoterapia/`
**Data**: 2026-05-25

---

## 1. Contexto e objetivo

### Por que V2

O `index.html` V1 (commit `c9169b1`) é funcional mas tem **3 limites estruturais** que vão quebrar quando o conteúdo crescer de 4 → 12 módulos:

1. **Grid 2-col fixo**: em 12 módulos vira 6 linhas — visualmente truncado em telas largas
2. **CSS inline monolítico**: 680 linhas no `<style>` do `index.html` impossibilita reuso e versionamento
3. **Não tem PWA**: o hub é a porta de entrada — sem manifest + sw.js, instalação no celular fica capada

A referência antibio resolveu esses 3 problemas e tem 10 módulos rodando estável. Vou replicar o padrão arquitetural, manter a paleta autoral Bauer-neonatologia (coral + petróleo) e expandir pra suportar **divisão Parte 1 / Parte 2 / Bônus**.

### Conteúdo final esperado

| Bloco | Módulos | Origem |
|---|---|---|
| **Parte 1** (Neonatologia 1) | 5 (M1-M5) | M1-M4 prontos; M5 (Apgar + complementares) com transcrição chegando da fazenda |
| **Parte 2** (Neonatologia 2) — principais | 3 (M6-M8) | A serem gravadas/produzidas |
| **Parte 2** — bônus | 4 (M9-M12) | A serem gravadas/produzidas |
| **Total** | **12** | — |

---

## 2. Análise da referência (antibioticoterapia)

### 2.1 Estrutura de arquivos

```
antibioticoterapia/
├── index.html                  ← landing hub (229 linhas)
├── manifest.webmanifest        ← PWA manifest
├── sw.js                       ← service worker
├── assets/
│   ├── css/
│   │   ├── tokens.css         ← variáveis CSS canônicas
│   │   ├── base.css           ← reset + tipografia + layout
│   │   ├── components.css     ← site-header, container, skip-link
│   │   └── aula-NN.css        ← CSS específico por aula
│   ├── js/
│   │   ├── app.js
│   │   ├── router.js
│   │   ├── app-aula-NN.js
│   │   └── components/        ← quiz, banners, timeline
│   └── img/                   ← icons PWA + ilustrações
└── aulas/
    └── aula-NN/index.html     ← cada aula é uma SPA isolada
```

### 2.2 Padrões visuais do `index.html` (linhas 1-229)

| Componente | Linhas | Característica-chave |
|---|---|---|
| `<meta>` PWA | 5-13 | viewport, apple-mobile, theme-color, manifest, icons |
| `<style>` inline | 16-81 | apenas estilos da landing (hero, anchors, syllabus, mantra) — chassi global em CSS externo |
| `site-header` | 86-98 | brand "AB" + título + sub-título + CTA "Abrir Aula 1" |
| `.hero` | 101-111 | eyebrow mono + h1 com `<em>` em accent + lede + 2 CTAs |
| `.anchors` | 113-127 | 3 fact cards grid 3-col → 1-col mobile (`max-width: 720px`) |
| `.compact-mantra` | 129-131 | gradient sutil + `<em>` accent + serif itálico |
| `.syllabus` | 133-217 | h2 + intro + **grid `auto-fill, minmax(280px, 1fr)`** |
| `.lesson` (card) | 137-216 | `<a>` com row (num + chip) + title + desc |
| `.lesson__chip` | 65-67 | estados `--ready` (verde border+bg dim) ou `--soon` (cinza) |
| `[data-status="soon"]` | 62 | opacity 0.55 + `pointer-events: none` |
| `site-footer` | 222-227 | container + 2 linhas (brand + nota educacional) |

### 2.3 PWA (manifest + sw.js)

- **manifest**: name, short_name, description, start_url, scope, display: standalone, theme_color, icons SVG 192/512
- **sw.js**: cache estático listando todos os assets críticos (HTML + CSS + JS); revalidação por versão (`CACHE = 'antibio-v1.10.1'`)

### 2.4 O que adotar conceitualmente

- ✅ **Grid auto-fill** (escala com qualquer N de módulos)
- ✅ **CSS externalizado** em `assets/css/hub-tokens.css` + `assets/css/hub.css`
- ✅ **PWA** com manifest + sw.js dedicados ao hub
- ✅ **`data-status`** em cards (`available` / `soon` / `bonus`)
- ✅ **Skip-link** de acessibilidade
- ✅ **`<em>` accent** no h1 da hero (palavra-âncora em coral itálico Lora)
- ✅ Footer minimalista 2 linhas

### 2.5 O que NÃO copiar

- ❌ Paleta teal — usar **coral + petróleo** (autoral Bauer Neonatologia)
- ❌ Texto da hero (substituir pelo conteúdo neonatologia)
- ❌ Cache do sw.js (refazer mapeamento dos assets neonato)
- ❌ "10 sessões clínicas" — neonato terá **divisão em Parte 1 / Parte 2 / Bônus**, estrutura nova

---

## 3. Gap analysis (V1 atual vs V2 alvo)

| Aspecto | V1 atual (`c9169b1`) | V2 alvo | Ação |
|---|---|---|---|
| Grid | 2-col fixo | auto-fill minmax(300px, 1fr) | Refatorar CSS |
| CSS | 680 linhas inline | `hub-tokens.css` + `hub.css` externos | Extrair |
| PWA | Ausente | manifest + sw.js + ícones | Criar do zero |
| Skip-link | Ausente | `<a href="#main" class="skip-link">` | Adicionar |
| Divisão Parte 1/2 | Não tem | Seções `<section data-section="parte-1\|parte-2\|bonus">` com h2 ancora | Estruturar |
| Filtros | Não tem | Toggle "Mostrar tudo / Só Parte 1 / Só Parte 2 / Só Bônus" | Implementar JS |
| Cards | 5 | 12 (com 7 em "Em produção") | Expandir |
| Brand mark | "NN" | Manter "NN" | OK |
| Headline-âncora | "Os primeiros minutos decidem *o resto da vida*" | Avaliar se mantém ou ajusta pra unificar P1+P2 | Decisão Bauer |
| Banner-citação | "Quem ganha minutos na sala de parto, *ganha décadas*" | Avaliar | Decisão Bauer |
| Stats (3 fact cards) | 4 módulos / 6 triagens / 5 infecções | Vai ficar desatualizado com P2 | Reavaliar |
| Footer | Bauer · Neonatologia · 2026 | Manter (igual ref) | OK |
| Open Graph meta | Já tem | Manter, atualizar quando fechar P2 | OK |
| Acessibilidade | Boa (focus-visible, prefers-reduced-motion) | Manter + skip-link | Incremental |
| Responsividade | OK | Validar em 320px (smartphone pequeno) | Auditar |

---

## 4. Arquitetura do Hub V2

### 4.1 Estrutura de arquivos proposta

```
neonatologia/
├── index.html                          ← landing hub V2
├── manifest.webmanifest                ← PWA do hub (start_url = /)
├── sw.js                               ← service worker do hub
├── assets/
│   ├── css/
│   │   ├── hub-tokens.css             ← tokens compartilhados com módulos
│   │   └── hub.css                    ← estilos da landing (hero, syllabus, etc.)
│   ├── js/
│   │   ├── hub.js                     ← interatividade (filtros, theme toggle)
│   │   └── pwa-install.js             ← install prompt + update mechanism
│   └── img/
│       ├── icon-192.svg               ← ícone PWA 192×192
│       ├── icon-512.svg               ← ícone PWA 512×512
│       └── og-image.png               ← Open Graph (opcional)
└── modules/
    ├── m1-classificacao-sifilis/      ← (existente)
    ├── m2-torch/                       ← (existente)
    ├── m3-reanimacao/                  ← (existente)
    ├── m4-triagem-neonatal/            ← (existente)
    ├── m5-apgar-complementares/        ← (a criar quando A5 chegar)
    ├── m6-.../                         ← (Parte 2 principal 1)
    ├── m7-.../                         ← (Parte 2 principal 2)
    ├── m8-.../                         ← (Parte 2 principal 3)
    ├── m9-.../                         ← (Parte 2 bônus 1)
    ├── m10-.../                        ← (Parte 2 bônus 2)
    ├── m11-.../                        ← (Parte 2 bônus 3)
    └── m12-.../                        ← (Parte 2 bônus 4)
```

### 4.2 Estrutura visual do `index.html` V2

```
┌─────────────────────────────────────────────┐
│ HEADER STICKY (translúcido com blur)         │
│ ├─ [NN] Neonatologia · Parte 1+2             │
│ └─                          [Abrir Módulo 1] │
├─────────────────────────────────────────────┤
│ HERO                                         │
│ EYEBROW: Plataforma Bauer · 12 módulos      │
│ H1: "Os primeiros minutos decidem            │
│      o resto da vida."                       │
│      (palavra-âncora em coral itálico)       │
│ LEAD: descrição P1+P2 unificada              │
│ [Começar pelo M1] [Ver sumário]              │
├─────────────────────────────────────────────┤
│ 3 FACT CARDS                                 │
│ ┌────────┐ ┌────────┐ ┌────────┐            │
│ │  12    │ │   N    │ │   N    │            │
│ │módulos │ │ tema 2 │ │ tema 3 │            │
│ └────────┘ └────────┘ └────────┘            │
├─────────────────────────────────────────────┤
│ BANNER-CITAÇÃO centralizado                  │
│ "Quem ganha minutos na sala de parto,        │
│  ganha décadas." (itálico Lora)              │
├─────────────────────────────────────────────┤
│ FILTROS (chips toggle)                       │
│ [Todos] [Parte 1] [Parte 2] [Bônus]          │
├─────────────────────────────────────────────┤
│ SEÇÃO PARTE 1 — Recém-nascido nos            │
│                  primeiros 7 dias            │
│ ┌──────┐ ┌──────┐ ┌──────┐                  │
│ │  M1  │ │  M2  │ │  M3  │                  │
│ └──────┘ └──────┘ └──────┘                  │
│ ┌──────┐ ┌──────┐                            │
│ │  M4  │ │  M5  │                            │
│ └──────┘ └──────┘                            │
├─────────────────────────────────────────────┤
│ SEÇÃO PARTE 2 — Continuidade do cuidado     │
│ ┌──────┐ ┌──────┐ ┌──────┐                  │
│ │  M6  │ │  M7  │ │  M8  │                  │
│ └──────┘ └──────┘ └──────┘                  │
├─────────────────────────────────────────────┤
│ SEÇÃO BÔNUS — Temas avançados                │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐         │
│ │  M9  │ │ M10  │ │ M11  │ │ M12  │         │
│ └──────┘ └──────┘ └──────┘ └──────┘         │
├─────────────────────────────────────────────┤
│ FOOTER                                       │
│ Plataforma Bauer · Neonatologia · 2026       │
│      Conteúdo educacional · Não substitui    │
└─────────────────────────────────────────────┘
```

### 4.3 Estados de card de módulo

| `data-status` | Visual | Comportamento |
|---|---|---|
| `available` | Border coral suave no hover, badge verde "Disponível" | Clicável → abre módulo |
| `soon` | Opacity 0.55, badge cinza "Em produção" | Não-clicável, cursor not-allowed |
| `bonus-available` | Badge âmbar "Bônus" + verde "Disponível" | Clicável → abre módulo |
| `bonus-soon` | Badge âmbar "Bônus" + cinza "Em produção" | Não-clicável |

### 4.4 Filtros (JS leve)

- Chips no topo da listagem
- Click no chip → adiciona/remove class `[data-filter-active]` em `<body>` ou no container
- CSS controla visibilidade: `[data-filter="parte-1"] [data-section="parte-2"] { display: none; }`
- Padrão sem JS = mostra tudo (graceful degradation)
- Estado persistido em `localStorage` (`neonato-hub.filter`)

### 4.5 PWA

**manifest.webmanifest**:
```json
{
  "name": "Neonatologia — Plataforma Bauer",
  "short_name": "Neonato Bauer",
  "description": "...",
  "start_url": "/neonatologia/",
  "scope": "/neonatologia/",
  "display": "standalone",
  "theme_color": "#0a1620",
  "background_color": "#0a1620",
  "lang": "pt-BR",
  "categories": ["education", "medical"],
  "icons": [/* 192 e 512 */]
}
```

**sw.js**: cache estratégia "cache-first com fallback de rede", versão por revisão. Cachear:
- `/` (index.html do hub)
- `/manifest.webmanifest`
- `/assets/css/hub-tokens.css`
- `/assets/css/hub.css`
- `/assets/js/hub.js`
- Casco de cada módulo disponível (`/modules/mN/index.html` + CSS+JS principal)

**install prompt**: botão sutil "Instalar app" no header quando `beforeinstallprompt` dispara. Update mechanism com `updatefound` + `controllerchange` + `SKIP_WAITING` + toast "Nova versão — recarregar".

---

## 5. Especificação técnica

### 5.1 Stack
- HTML5 semântico (`<header>`, `<main>`, `<section>`, `<footer>`, ARIA roles)
- CSS3 com custom properties (tokens externos)
- JavaScript vanilla (sem framework)
- Service Worker registrado em `<script>` final
- Google Fonts: Inter + Lora + JetBrains Mono (consistente com módulos)

### 5.2 Tokens compartilhados

`assets/css/hub-tokens.css` será **idêntico** ao `tokens.css` dos módulos M1-M4 (Modo Opção C preservado). Importa:
- Paleta: `--bg-base` `#0a1620`, `--accent-coral` `#ff6b5a`, `--ink-100` `#f3ede0`
- Tipografia: `--font-body` Inter, `--font-display` Lora, `--font-mono` JetBrains Mono
- Espaçamento, raios, sombras, breakpoints

### 5.3 Componentes CSS (em `assets/css/hub.css`)

| Componente | Classe | Responsabilidade |
|---|---|---|
| Skip link | `.skip-link` | A11y — pular header com Tab |
| Site header | `.site-header` | Sticky com blur backdrop |
| Brand | `.brand`, `.brand__mark`, `.brand__title` | Logo + título |
| Hero | `.hero`, `.hero__title`, `.hero__lead` | Manchete e descrição |
| Eyebrow | `.eyebrow` | Sobretítulo mono coral |
| Botão | `.btn`, `.btn--primary`, `.btn--ghost`, `.btn--icon` | CTAs |
| Fact cards | `.facts`, `.fact`, `.fact__number` | 3 cards números |
| Banner-citação | `.quote-banner`, `.quote-banner__text` | Mantra centralizado |
| Filtros | `.filters`, `.filter-chip`, `.filter-chip[aria-pressed]` | Toggle Parte 1/2/Bônus |
| Seção módulos | `.section-modules`, `.section-modules__head` | Cada parte é uma section |
| Grid módulos | `.modules-grid` | auto-fill minmax(300px, 1fr) |
| Card módulo | `.module-card`, `.module-card[data-status]` | Card individual |
| Badge | `.badge`, `.badge--available`, `.badge--soon`, `.badge--bonus` | Status do card |
| Footer | `.site-footer` | 2 linhas brand + nota |
| Aurora bg | `body::before` | Gradients radiais decorativos |
| PWA install | `.pwa-install-btn`, `.pwa-update-toast` | Botão + toast |

### 5.4 JavaScript (em `assets/js/hub.js`)

```js
// Pseudocódigo

// 1. Filtros
const filterChips = document.querySelectorAll('.filter-chip');
filterChips.forEach(chip => chip.addEventListener('click', toggleFilter));
function toggleFilter(e) {
  // adiciona data-filter no body, atualiza aria-pressed
  // persiste em localStorage('neonato-hub.filter')
}

// 2. Restaura filtro do localStorage
restoreFilter();

// 3. Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/neonatologia/sw.js')
    .then(reg => watchForUpdate(reg))
    .catch(err => console.warn('SW falhou', err));
}

// 4. PWA install
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallBtn();
});

// 5. Update mechanism
function watchForUpdate(reg) {
  reg.addEventListener('updatefound', () => {
    const newSW = reg.installing;
    newSW.addEventListener('statechange', () => {
      if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
        showUpdateToast(newSW);
      }
    });
  });
}
```

### 5.5 Acessibilidade (gates WCAG AA)

- ✅ Contraste texto/fundo ≥ 4.5:1 (corpo) / 3:1 (UI grande)
- ✅ `:focus-visible` em todos os elementos interativos
- ✅ Skip-link funcional (tab → "Pular para conteúdo")
- ✅ ARIA: `aria-label` nas seções, `aria-pressed` nos filter chips, `aria-disabled` em cards soon
- ✅ Navegação 100% por teclado
- ✅ `prefers-reduced-motion: reduce` desliga animações
- ✅ Heading hierarchy: h1 (hero) → h2 (seção) → h3 (card)
- ✅ Lang `pt-BR` + viewport correto
- ✅ Touch targets ≥ 44×44px em mobile

---

## 6. Pipeline de implementação (fases)

### Fase 0 — Validação do plano (atual)
- Bauer revê este `PLANO-HUB-V2.md`
- Aprova ou pede ajustes
- **Saída**: aprovação textual no chat

### Fase 1 — Esqueleto técnico (≈ 1 ciclo)
- Criar `assets/css/hub-tokens.css` (cópia exata do tokens.css dos módulos)
- Criar `assets/css/hub.css` (componentes extraídos do CSS inline V1, refatorados)
- Criar `assets/js/hub.js` (filtros + SW registration)
- Criar `manifest.webmanifest`
- Criar `sw.js` com cache list inicial
- Criar `assets/img/icon-192.svg` e `icon-512.svg` (ícone "NN" coral em petróleo)
- Reescrever `index.html` V2 importando os assets externos

### Fase 2 — Conteúdo dos 12 módulos no syllabus
- M1-M4: cards completos com `data-status="available"`
- M5: card com `data-status="soon"` (descrição preliminar — atualiza quando A5 chegar)
- M6-M8: 3 placeholders Parte 2 principal com `data-status="soon"`
- M9-M12: 4 placeholders Bônus com `data-status="bonus-soon"`

### Fase 3 — Filtros funcionais
- Chips "Todos / Parte 1 / Parte 2 / Bônus"
- CSS controlling visibility por `[data-filter]` no body
- Persistência localStorage
- Smooth transition (opacity + display) respeitando prefers-reduced-motion

### Fase 4 — PWA funcional
- manifest.webmanifest validado (Chrome DevTools → Application → Manifest)
- sw.js cache-first com fallback rede
- Botão "Instalar app" aparece quando `beforeinstallprompt` dispara
- Toast "Nova versão disponível" no `updatefound` + botão "Recarregar"
- Teste em Chrome desktop + Safari mobile

### Fase 5 — Validação automatizada
- Grep anti-metalinguagem v1.2 (zero hits)
- Lighthouse audit: Performance ≥ 90, A11y ≥ 95, SEO ≥ 90, PWA ✅
- axe-core via Playwright (ou manual com Chrome DevTools)
- Validador HTML W3C
- Validação visual em 3 viewports: 320px / 768px / 1280px

### Fase 6 — Push + GitHub Pages refresh
- Commit local
- `git push` (Bauer aprova)
- Aguardar build do Pages (~2min)
- Validar URL pública

### Fase 7 — Roadmap incremental (quando aulas chegarem)
- A5 chega → M5 vira `data-status="available"` + descrição final
- Cada aula Parte 2 produzida → módulo vira available, descrição preenchida
- Total fechamento de 12 módulos = release V2.0

---

## 7. Critérios de aceite ✅

Hub V2 só pode ir pro push se TODOS estes critérios passarem:

### 7.1 Visual e identidade
- ✅ Paleta Bauer Neonatologia preservada (coral + petróleo + off-white)
- ✅ Tipografia Inter + Lora + JetBrains Mono carregada e renderizando
- ✅ Brand "NN" no header com gradient coral
- ✅ Hero com palavra-âncora em coral itálico Lora
- ✅ Banner-citação centralizado com gradient sutil
- ✅ Footer minimalista 2 linhas "Bauer · Neonatologia · 2026"
- ✅ Aurora decorativa de fundo (radial gradients) sem distrair
- ✅ Hover states em cards (border coral + lift)

### 7.2 Arquitetura e código
- ✅ CSS externalizado em `hub-tokens.css` + `hub.css` (≤ 100 linhas inline no `<style>`)
- ✅ Tokens **idênticos** aos dos módulos M1-M4 (Opção C preservada)
- ✅ JS externalizado em `hub.js` (sem inline scripts além do SW register)
- ✅ HTML semântico (header/main/section/footer com ARIA)
- ✅ Grid `auto-fill minmax(300px, 1fr)` escala de 5 a 20+ cards
- ✅ Zero referências quebradas (todos hrefs apontam pra paths existentes ou `#`)

### 7.3 Funcionalidade
- ✅ 12 cards de módulo renderizados (4 available + 1 P1-soon + 3 P2-soon + 4 bônus-soon)
- ✅ Filtros funcionais: Todos / Parte 1 / Parte 2 / Bônus
- ✅ Filtro persiste em localStorage entre sessões
- ✅ Cards `available` clicáveis (abrem módulo)
- ✅ Cards `soon`/`bonus-soon` não-clicáveis (cursor not-allowed, opacity 0.55)
- ✅ Smooth scroll do "Ver sumário" pro `#syllabus`

### 7.4 PWA
- ✅ `manifest.webmanifest` validado pelo Chrome DevTools
- ✅ `sw.js` registrando sem erros no console
- ✅ Funciona offline após primeira visita (testado em modo airplane)
- ✅ Botão "Instalar app" aparece em browsers compatíveis (Chrome, Edge)
- ✅ Toast "Nova versão disponível" aparece quando service worker atualiza
- ✅ Ícones 192/512 renderizando corretamente

### 7.5 Acessibilidade
- ✅ Lighthouse A11y ≥ 95
- ✅ Skip-link funcional
- ✅ Navegação completa por teclado (Tab, Shift+Tab, Enter, Space)
- ✅ Focus-visible visível em todos os elementos
- ✅ Contraste ≥ 4.5:1 em texto corpo (verificado em coral/petróleo/off-white)
- ✅ ARIA roles e aria-labels corretos
- ✅ Heading hierarchy não pula níveis
- ✅ `prefers-reduced-motion` desliga animações

### 7.6 Responsividade
- ✅ Renderiza correto em **320px** (iPhone SE mínimo)
- ✅ Renderiza correto em **768px** (tablet retrato)
- ✅ Renderiza correto em **1280px** (laptop)
- ✅ Renderiza correto em **1920px** (desktop large)
- ✅ Touch targets ≥ 44px no mobile

### 7.7 Performance
- ✅ Lighthouse Performance ≥ 90 (desktop)
- ✅ Lighthouse Performance ≥ 80 (mobile)
- ✅ LCP < 2.5s
- ✅ CLS < 0.1
- ✅ Total bundle (HTML+CSS+JS hub) < 60kb

### 7.8 Anti-metalinguagem v1.2
- ✅ Grep canon: zero hits ("canon MED", "prova MED", "professor", "aula" como meta-referência, "MedCurso")
- ✅ "Módulo N" aceitável (referência arquitetural própria, não a curso externo)
- ✅ Atribuição no footer apenas "Plataforma Bauer" (não cita fonte da aula)

---

## 8. Critérios de falha ❌ (volta obrigatória)

Se QUALQUER um destes ocorrer, V2 volta pra correção antes do push:

### 8.1 Falhas críticas (🔴 rollback)
- ❌ Quebra responsividade em qualquer viewport entre 320 e 1920px
- ❌ JS quebra em browsers Safari/Firefox/Chrome modernos (últimas 2 versões)
- ❌ Service worker cacheia conteúdo errado (URLs hardcoded incorretos)
- ❌ Cards "soon" são clicáveis (vazam pra 404)
- ❌ Hrefs de M1-M4 quebram (paths incorretos)
- ❌ Anti-metalinguagem v1.2 falha (hit P0 vazando)
- ❌ Lighthouse A11y < 90

### 8.2 Falhas altas (🟠 correção obrigatória)
- ❌ Lighthouse Performance < 80 desktop
- ❌ Filtros não persistem em localStorage
- ❌ Grid não escala — quebra ao tentar adicionar 12 cards
- ❌ Botão PWA install não aparece em Chrome (validar em DevTools → Application)
- ❌ CSS inline > 150 linhas (deveria estar externo)
- ❌ Tokens divergem dos módulos (Modo Opção C quebrado)
- ❌ Identidade visual divergiu da paleta Bauer Neonatologia (cor diferente de coral/petróleo/off-white)

### 8.3 Falhas médias (🟡 decisão Bauer)
- ⚠️ Lighthouse Performance 80-89 mobile
- ⚠️ Touch target < 44px em algum elemento
- ⚠️ Animation desliga corretamente mas estética sofre
- ⚠️ Filtro tem flash inicial antes do CSS pegar localStorage

---

## 9. Roadmap incremental

| Momento | Ação | Resultado |
|---|---|---|
| **Hoje (após aprovação plano)** | Implementar Fases 1-6 com 4 módulos available + 8 "Em produção" | Hub V2 no ar, P1 90% completo |
| **Quando A5 chegar (Bauer fazenda → wifi)** | Pipeline A5 → M5 module → atualizar card M5 no hub V1.1 | Parte 1 100% completa |
| **Quando A6/A7/A8 chegarem (P2 principal)** | Pipeline 3× → 3 modules → atualizar cards M6-M8 no hub V1.2 | Parte 2 principal 100% |
| **Quando A9-A12 chegarem (bônus)** | Pipeline 4× → 4 modules → atualizar cards M9-M12 no hub V1.3 | Plataforma completa V2.0 |
| **Release V2.0** | Marcar release no GitHub + atualizar Open Graph image | Marco fechamento |

**Nota crítica**: hub V2 não precisa esperar todas as aulas. Vai pro push com 4 disponível + 8 "Em produção". Cada aula nova vira incrementalmente um update de card (mudança mínima localizada — apenas o card afetado, não toda a página).

---

## 10. Riscos e mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| PWA não funciona no Safari iOS | Média | Alto (Bauer pode querer testar em iPhone) | Testar manualmente; fallback degrada graciosamente — site continua funcionando sem SW |
| Lighthouse Performance < 80 mobile | Baixa | Médio | Otimizar imagens, lazy load de tudo abaixo do fold, preload de fontes |
| Conteúdo de A5/P2 chegar muito diferente do esperado e exigir refator do hub | Média | Médio | Estrutura `data-section` permite adicionar/remover seções sem refator; descrições dos cards são tudo o que muda |
| Identidade visual diverge do M1-M4 quando o Executor PWA platform-wide rodar (Fase 7 do plano antigo) | Baixa | Alto | Plano declara explicitamente Modo Opção C: tokens compartilhados, chassi preservado |
| Bauer rejeitar a headline-âncora "Os primeiros minutos decidem o resto da vida" | Média | Baixo | Decisão Bauer pendente — múltiplas alternativas listadas abaixo |

---

## 11. Decisões Bauer pendentes (antes da execução)

### D1 — Headline-âncora da hero
**Default sugerido**: "Os primeiros minutos decidem *o resto da vida*."

**Alternativas se Bauer não gostar**:
- "Da sala de parto à triagem do oitavo dia — *a base de tudo*."
- "O recém-nascido fala — quem souber escutar, *ganha décadas*."
- "Antes da clínica, vem a *triagem*."
- "Reanimar não é o fim — é *o começo*."
- Sugestão própria do Bauer

### D2 — Banner-citação central
**Default sugerido**: "Quem ganha minutos na sala de parto, *ganha décadas*."

**Alternativas**:
- "Cada minuto na sala de parto pesa décadas."
- "O recém-nascido fala antes da clínica."
- "Triagem antes que a clínica *mostre o rosto*."

### D3 — Sub-título da brand (header)
**Default**: "Parte 1 · Residência médica" (atual V1)

**Alternativas pós-P2**:
- "12 módulos · Residência médica"
- "Parte 1 + Parte 2 · Residência médica"
- "Semana completa · Residência médica"

### D4 — 3 fact cards
**Default sugerido** (quando completo):
- **12** módulos clínicos
- **N** triagens + situações especiais (TBD baseado em P2)
- **N** páginas/quizzes/imagens (TBD)

**Alternativa enquanto P2 não está pronta**:
- **12** módulos planejados
- **4** disponíveis hoje
- **8** em produção

### D5 — Slug dos módulos M5-M12
M5 já tem sugestão: `m5-apgar-complementares`. M6-M12 dependem do conteúdo das aulas.

**Decisão**: Bauer define slug quando a transcrição chegar, OU eu sugiro baseado no tema da aula.

### D6 — Ícone PWA "NN"
**Default sugerido**: ícone SVG circular com "NN" em off-white sobre gradiente coral→coral-strong.

**Alternativa**: Bauer envia logo próprio.

### D7 — Ordem dos módulos disponíveis vs em produção
**Default**: Disponíveis no topo de cada seção, em produção embaixo (com opacity reduzido).

**Alternativa**: ordem cronológica fixa (M1, M2, M3... independente de status).

### D8 — Filtros visíveis ou colapsáveis?
**Default**: Chips visíveis acima da listagem.

**Alternativa**: Botão "Filtrar" que abre drawer/modal com chips.

---

## 12. Status atual

- ✅ Análise da referência completa
- ✅ Gap analysis V1 → V2 documentado
- ✅ Arquitetura V2 desenhada
- ✅ Pipeline de 7 fases definido
- ✅ Critérios de aceite e falha enumerados
- ✅ Roadmap incremental traçado
- ⏳ **Aguardando aprovação Bauer + decisões D1-D8 (pode ser default em todas)**
- ⏳ Aguardando A5 (Bauer mandando da fazenda quando tiver wifi)
- ⏳ Aguardando aulas A6-A12 (Parte 2)

---

## 13. Recomendação executiva

**Sugestão Bauer**:

1. **Aprovar este plano** (ou pedir ajustes pontuais)
2. **Confirmar defaults D1-D8** ou ajustar
3. **Eu executo Fases 1-6 agora** → hub V2 no ar com 4 módulos available + 8 "Em produção"
4. **Push GitHub**
5. **Pipeline incremental**: cada aula nova vira update de 1 card (~10 minutos de trabalho cada)
6. **Release V2.0 final** quando todas as 12 aulas estiverem prontas

Tempo estimado para Fases 1-6 (hoje): **1 ciclo pesado** (criar 5 arquivos novos: hub-tokens.css, hub.css, hub.js, manifest, sw.js + 2 ícones + reescrever index.html). Critérios de aceite garantem qualidade equivalente ou superior à referência antibio.

— Plano produzido por Claude Opus 4.7 (1M ctx), sessão 2026-05-25 tarde.
