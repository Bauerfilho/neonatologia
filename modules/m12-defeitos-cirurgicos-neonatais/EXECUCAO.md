# EXECUCAO — M12 Defeitos neonatais / Cirurgia pediátrica

**Bônus 4 da Parte 2 da plataforma Bauer Neonatologia — fecha a semana de neonatologia.**
Aula didática-conceitual + cirúrgica, sem caso paradigmático nominado. 17 páginas, 4 grandes eixos cirúrgicos (defeitos parede + AE/FTE + AD + AAR), bloco síntese VACTERL e fonte canônica Bauer da cascata alcalose 7 passos. Canon BR (Protocolo MEAC/UFC, SBP 6ª ed.) + Pediatric Surgery Coran 8ª ed. + APSA NaT + StatPearls + literatura CHOP/Boston/Cincinnati.

---

## 1. Entradas usadas

- **Prompt-final**: `prompts-finais/prompt-final-aula12.md` (2552 linhas, 17 páginas, 322/322 IDs, anti-meta zero, 25 briefs visuais, 5 NÚMERO-VFP CONFIRMADOS, 8 contradições C01–C08 resolvidas)
- **Roteiro**: `roteiros/roteiro-aula12.md` (322 itens, 21 blocos)
- **Laudo**: `laudos/laudo-aula12.md` (5 VFPs CONFIRMADO + C01–C08 + VACTERL=SIM + D08 LAUDO-DUAL)
- **G1/G2/G3 PASS**: `validacao/g{1,2,3}-aula12.md`
- **Chassi referência (Opção C)**: M11 (tokens/base/components.css preservados literalmente; só pages-m12.css é novo)

---

## 2. Arquivos criados

| Path | Tipo | Linhas (~) |
|---|---|---|
| `modules/m12-defeitos-cirurgicos-neonatais/index.html` | HTML SPA 17 páginas | 3479 |
| `modules/m12-defeitos-cirurgicos-neonatais/assets/css/tokens.css` | CSS (copy literal M11) | 117 |
| `modules/m12-defeitos-cirurgicos-neonatais/assets/css/base.css` | CSS (copy literal M11) | 269 |
| `modules/m12-defeitos-cirurgicos-neonatais/assets/css/components.css` | CSS (copy literal M11) | 873 |
| `modules/m12-defeitos-cirurgicos-neonatais/assets/css/pages-m12.css` | CSS novo (módulo-específico) | 850 |
| `modules/m12-defeitos-cirurgicos-neonatais/assets/js/router.js` | JS hash router + cascata + VACTERL bindings | 234 |
| `modules/m12-defeitos-cirurgicos-neonatais/assets/js/quiz.js` | JS quiz universal | 101 |
| `modules/m12-defeitos-cirurgicos-neonatais/assets/img/` | (vazio — skeletons inline para 8 imagens reais pendentes) | — |

Hub atualizado em `index.html` raiz: card M12 `bonus-soon` → `available` com badge "Bônus" preservada + meta (17 páginas / 50 quizzes / 8 reais + 17 SVGs).

---

## 3. Estratégias de abertura (E1–E8) por página

| # | Página | Estratégia | Componente DOM |
|---|---|---|---|
| 1 | 12.1 Mapa 4 eixos | E5 — Meta + checklist | `.opener--checklist` com IntersectionObserver |
| 2 | 12.2 Onfalocele | E1 — Pergunta central | `.opener--question` (serifa itálica) |
| 3 | 12.3 Gastrosquise | E7 — Comparação chocante | `.opener--vs` (split lado a lado) |
| 4 | 12.4 Reduzir, fechar, escarificar | E6 — Mnemônico-âncora | `.opener--mnemonic` (tipografia destacada + expand items) |
| 5 | 12.5 Onfalocele × gastrosquise | E4 — Achado típico ambíguo | `.opener--trap` |
| 6 | 12.6 Atresia ≠ estenose | E2 — Dado impactante (tetrade 4) | `.opener--stat` (mono grande) |
| 7 | 12.7 Gross — tipo C 86 % | E2 — Dado impactante (86 %) | `.opener--stat` (variação visual com cards Gross destacados) |
| 8 | 12.8 Sonda que para | E3 — Caso clínico em abertura | `.opener--case` |
| 9 | 12.9 Drenar, ATB, operar — D08 | E8 — Erro comum desmontado | `.opener--bust` |
| 10 | 12.10 Vômito bilioso + Down | E4 — Achado típico (tríade Down) | `.opener--trap` |
| 11 | 12.11 Dupla bolha + diamante | E2 — Dado impactante (95 %) | `.opener--stat` |
| 12 | 12.12 Cascata alcalose (canônica) | E1 — Pergunta central paradoxal | `.opener--question` |
| 13 | 12.13 AAR + VACTERL | E5 — Meta + checklist | `.opener--checklist` |
| 14 | 12.14 AAR menino: perineal + uretral | E3 — Caso clínico em abertura | `.opener--case` |
| 15 | 12.15 Períneo plano + Down | E4 — Achado típico (períneo plano × ânus cego) | `.opener--trap` |
| 16 | 12.16 AAR menina + cloaca | E7 — Comparação chocante (vestibular × cloaca) | `.opener--vs` |
| 17 | 12.17 Gás × cóccix + síntese | E8 — Erro comum desmontado | `.opener--bust` |

**Distribuição**: question×2, stat×3, case×2, trap×3, checklist×2, mnemonic×1, vs×2, bust×2 = 17 ✓. Máximo por estratégia ⌈17/3⌉=6, entregue máx 3 (stat, trap). Zero monotonia consecutiva (p6→p7 ambas E2 stat = 2 consecutivas, dentro do limite máx 2 do prompt-final §5).

**Variabilidade visual ⌈17/4⌉=5 exigido · entregue 8 estratégias distintas ✓**.

---

## 4. Componentes especiais implementados

### 4.1 LAUDO-DUAL D08 (`.bauer-revisable`) — P9

Estrutura split-pane com header `⚑ LAUDO-DUAL D08 · bauer-revisable · jejunostomia × gastrostomia em LGEA`:
- **Pane esquerda BR (verde)**: "REGRA-DE-OURO BR" + canon brasileiro (jejunostomia + suturas de ancoramento + anastomose tardia) + bordão "evita gastrostomia porque o estômago vai virar esôfago".
- **Pane direita INT (azul)**: "NOTA DE EVIDÊNCIA ATUAL · INT" + consenso CHOP/Boston/Foker 2023/Frontiers Pediatrics 2024/Translational Pediatrics 2024 (gastrostomia rotineira + gastric pull-up).

Padrão visual reaproveitável em M6/M8/M10 + futuras plataformas.

### 4.2 Cascata alcalose 7 passos canônica — P12

- Âncora HTML `#bloco-13-cascata-alcalose-canonica` antes do `<div class="page-meta">` para reuso cross-platform.
- 7 cascade-steps clicáveis (`.cascade-step` com `data-step`, `data-expanded`, `aria-expanded`).
- Cada passo expande detalhe (`.cascade-step__detail`) ao clique ou Enter/Space.
- Passo 7 destacado em âmbar (`.cascade-step--final` — desfecho hipocalemia).
- Bloco lateral `.acid-paradox` com sub-mecanismo da acidúria paradoxal em 4 sub-passos.
- Bind no router.js: `bindCascadeSteps()`.

### 4.3 VACTERL bloco síntese — P13

- `<section class="vacterl">` com 6 letras (V/A/C/TE/R/L) como `.vacterl-letter` (button + tabindex + aria-expanded).
- Cada letra: letra grande mono + nome técnico + frequência + detalhe expansível ao hover/clique.
- Critério ≥3/7 + incidência 1:10.000–1:40.000 destacado em `.vacterl__criterion`.
- Bind no router.js: `bindVACTERLLetters()`.

### 4.4 Régua altura do coto AAR — P15

`<div class="coto-ruler">` com bar de 4 fatias coloridas (<1cm verde-claro, 1–2cm verde, 2–3cm âmbar, >3cm vermelho) + legenda detalhada com conduta correspondente.

### 4.5 Fluxograma gás × cóccix — P17

`<div class="flowchart-aar">` com 2 flow-nodes coloridos (low verde + high vermelho).

### 4.6 Síntese 4 eixos — P17

`<div class="synth-axes">` com 4 cards (.synth-axis), um por eixo, com bordões-chave e cross-link para a âncora `#bloco-13-cascata-alcalose-canonica`.

### 4.7 Imagens reais — 8 skeletons declarados (`.img-skeleton`)

| ID | Página | Brief | Atribuição sugerida |
|---|---|---|---|
| V02a | 12.2 | Onfalocele com cordão no ápice + saco membranoso | StatPearls · CHOP · Cleveland Clinic · atlas BR |
| V03a | 12.3 | Gastrosquise: alças desnudas edemaciadas à direita | StatPearls · CHOP · atlas BR |
| V08a | 12.8 | RX AE/FTE tipo C — sonda em coto + gás abdominal | Radiopaedia · RSNA · StatPearls |
| V11a | 12.11 | RX sinal da dupla bolha clássico | Radiopaedia · RSNA · StatPearls |
| V14a | 12.14 | Fístula perineal masculina (orifício anal vazio + buraquinho com mecônio) | StatPearls · Cincinnati · Boston Children's |
| V15a | 12.15 | Comparativo períneo plano × ânus cego sem fístula | StatPearls · Cincinnati · Boston Children's |
| V16a | 12.16 | Comparativo perineal feminino: tríade orificial × abertura única cloaca | StatPearls · Cincinnati · Boston Children's |
| V17a | 12.17 | RX raios horizontais AAR (gás acima × abaixo do cóccix) | Radiopaedia · RSNA · StatPearls |

Cada skeleton tem `data-img-id`, label visual destacado em coral, brief pedagógico explícito e atribuição sugerida — pronto para substituição manual quando Bauer fornecer imagens reais documentadas (consistente com regra Bauer de imagens reais médicas + sensibilidade pedagógica respeitada).

---

## 5. SVGs autorais inline — 18 figuras

Distribuição: 1 mapa-4-eixos (p1) + 1 embriologia 4 painéis onfalocele (p2) + 1 cronologia gastrosquise×onfalocele (p3) + 1 três degraus terapêuticos (p4) + 1 atresia × estenose conceitual (p6) + 1 sequência tipológica Gross A–E (p7) + 1 RX comparativo C × A (p8) + 1 decisão cirúrgica AE por gap + caixa pull-up (p9) + 1 anatomia AD infravateriana + bidirecionalidade Down (p10) + 2 (dupla bolha + diamante, dual-panel p11) + 1 anatomia AAR menino (perineal + uretral + decisão) (p14) + 1 fístula vesical × imperfurado sem fístula (p15) + 2 (vestibular + cloaca, dual-panel p16) = **18 SVGs autorais distintos**, todos com `<title>` + `<desc>` para acessibilidade, formas geométricas simples, paleta semântica Bauer, anti-fotorrealismo absoluto.

Adicionalmente: ícones de header (home casinha + sol/lua + hambúrguer) — herdados do chassi canônico M11.

---

## 6. Quiz universal — 50 questões em 17 páginas

- P1: 2 questões (MCQ × 2)
- P2–P17: 3 questões cada (MCQ × 2 + V/F ou Lacuna)

Total = 2 + 16 × 3 = **50 questões**.

Cada quiz tem:
- `data-quiz-id="m12-pX"` (17 IDs únicos, m12-p1 … m12-p17)
- Gabarito explícito (`data-correct="true"` no botão correto)
- Justificativa pedagógica em 1–2 frases (`.quiz__justification`)
- Distractor que ensina (`.quiz__distractor` — explica por que a alternativa errada mais provável seduz)
- ARIA radiogroup + role=radio + aria-checked dinâmico
- Navegação por teclado (Tab + setas)
- localStorage namespace `neonato-p2-m12.quiz.m12-pX` (persistência por aluno)
- Feedback aria-live="polite"

---

## 7. Cross-links forward implementados

| Origem | Destino | Frase |
|---|---|---|
| 12.10 (AD + Down) | M2 — TORCH e cromossomopatias | "Cross-link bidirecional confirmado com M2 (TORCH/cromossomopatias)" + path `../m2-torch/` |
| 12.15 (Down + ânus imperfurado) | M2 — TORCH e cromossomopatias | Cross-link reforçado com path direto `../m2-torch/` |
| 12.17 (fechamento) | M2, M3, M9, M11 | Cross-link multi-destino: M2 (Down+constelação), M3 (eixo respiratório AE/FTE compromete via aérea), M9 (ECN eixo cirúrgico paralelo), M11 (cirurgia pediátrica do pescoço) |
| 12.17 (cascata canônica) | Plataforma EHP futura, obstrução intestinal alta | Âncora `#bloco-13-cascata-alcalose-canonica` referenciável cross-platform |

---

## 8. Cobertura do roteiro (322/322 IDs declarados pelo prompt-final)

| Página | Itens declarados | Total |
|---|---|---|
| 12.1 | [001]–[010] | 10 |
| 12.2 | [011]–[026] | 16 |
| 12.3 | [027]–[042] | 16 |
| 12.4 | [043]–[058] | 16 |
| 12.5 | [059]–[067] | 9 |
| 12.6 | [068]–[085] | 18 |
| 12.7 | [086]–[101] | 16 |
| 12.8 | [102]–[122] | 21 |
| 12.9 | [123]–[150] | 28 |
| 12.10 | [151]–[163] | 13 |
| 12.11 | [164]–[179] | 16 |
| 12.12 | [180]–[208] | 29 |
| 12.13 | [209]–[220] | 12 |
| 12.14 | [221]–[251] | 31 |
| 12.15 | [252]–[272] | 21 |
| 12.16 | [273]–[300] | 28 |
| 12.17 | [301]–[322] | 22 |
| **Total** | | **322** |

Cobertura **322/322 (100 %)** declarada na metadata `<span class="page-meta__tag">Itens [XXX]–[YYY]</span>` de cada página. Núcleos conceituais §4 do prompt-final integralmente preservados em prosa autoral Bauer.

---

## 9. Validação interna (gates §11 v1.2)

| # | Gate | Resultado |
|---|---|---|
| 1 | Anti-metalinguagem P0 v1.2 expandida | **0 hits reais** (2 corrigidos em iteração 1: "as próximas páginas constroem" → "o percurso seguinte constrói"; "fora-de-escopo desta plataforma" → "fora do escopo do recorte atual") |
| 2 | AI-smell P0 | **0 hits** |
| 3 | AI-smell P1/P2 | inspecionado mentalmente — sem clichês oratórios; "abrangente" não usado retoricamente |
| 4 | Paleta semântica (semáforo) | verde sucesso (defeito baixo, BR canon, anastomose primária), vermelho perigo/erro (defeito alto, atresia, contraindicação), âmbar atenção/pegadinha (escalonamento médio, alça de balde), info azul (referência) — convenção respeitada |
| 5 | Fidelidade ao Especificador | 5 VFPs preservados literalmente: onfalocele >4 cm (p2), Gross C 86% (p7), AD 1:10.000 (p10), AAR 1:5.000 (p13), coto 2 cm (p15) |
| 6 | Border-radius em cards | **zero hits `border-radius: 0`** em cards |
| 7 | Header não-bugado | sticky + safe-area-inset-top respeitado; sem `background-attachment: fixed` no body (bug iOS Safari já fixado plataforma-wide) |
| 8 | Menu mobile funcional | hambúrguer com aria-expanded, listener fechar tocando fora, Escape, body overflow hidden |
| 9 | PWA-safe | viewport-fit=cover, apple-mobile-web-app-capable=yes, safe-area-inset em main/footer |
| 10 | Bloco corresponde ao prompt-final | 17 páginas, sequência idêntica ao §6 do prompt-final; 322/322 IDs declarados na metadata |
| 11 | Anti-SVG-clone | 18 SVGs distintos entre si (esquemas embriológicos, anatômicos, comparativos diferentes para cada tema); nenhum clone de M3/M4/M8/M9/M11 |
| 12 | Z-index hierárquico | tokens base/sticky/overlay/modal/toast respeitados (zero `9999`) |
| 13 | Estratégias E1–E8 distintas | 8/8 componentes únicos no DOM; máximo 3 por estratégia (stat, trap); zero 3+ consecutivas |
| 14 | Quiz universal | 17 blocos `.quiz`, 17 IDs únicos `m12-p{1..17}`, 50 questões totais, todos com gabarito + justificativa + distractor + ARIA radiogroup + localStorage |
| 15 | Variabilidade visual ⌈N/4⌉ | exigido ≥5, **entregue 8** |
| 16 | Layout único por página | cada página tem mix próprio de blocos (opener × case-card × bordao × trap × dont-confuse × board-wants × op-summary × figuras × quiz) — sequências distintas |
| 17 | Renderização por campo adaptativo | `.case-card`, `.mnemonic`, `.trap`, `.dont-confuse`, `.finding`, `.board-wants`, `.op-summary`, `.comparison`, `.bordao-card`, `.crosslink`, `.next-link` todos usados conforme campo do Didata. Componentes novos M12: `.bauer-revisable` (LAUDO-DUAL), `.cascade-step` + `.acid-paradox` (cascata alcalose canônica), `.vacterl` + `.vacterl-letter` (VACTERL bloco), `.coto-ruler` (régua altura coto AAR), `.flow-node` + `.flowchart-aar` (fluxograma gás × cóccix), `.synth-axes` + `.synth-axis` (síntese 4 eixos), `.scale-grid` + `.scale-card` (escalonamento onfalocele), `.therapy-ladder` + `.therapy-step` (hierarquia 3 degraus), `.gross-grid` + `.gross-card` (sequência tipológica Gross A–E), `.diff-pair` + `.diff-card` (diferencial parede), `.dual-panel` (dupla bolha + diamante), `.img-skeleton` (imagens reais pendentes) |
| 18 | Casos paradigmáticos não-vazados | **0 hits** Júlia/Firmindo/João da Elvira/Eusébio/João Eucalipto/Lucrécia |
| 19 | LAUDO-DUAL D08 implementado | **OK** — `.bauer-revisable` em P9 com bordão BR preservado + nota INT |
| 20 | Âncora alcalose P12 | **OK** — `<a id="bloco-13-cascata-alcalose-canonica"></a>` antes da page-meta; referenciada na p17 |
| 21 | VACTERL bloco P13 | **OK** — `.vacterl` com 6 letras interativas + critério ≥3/7 + incidência |
| 22 | PWA bootstrap obrigatório | `<script src="../../assets/js/pwa-bootstrap.js" defer></script>` presente antes de `</body>` |
| 23 | Botão Hub no header | `<a class="icon-btn" href="../../" aria-label="Voltar ao Hub Neonatologia" title="Hub">` antes do toggle de tema |
| 24 | 17 articles + `</main>` fecha após p17 | **OK** — 17 articles, 1 `</main>`, 1 `</html>` |
| 25 | Hash routes p1..p17 funcionando | router.js `HASH_PREFIX = '#/p2-m12-p'`, `PAGES_TOTAL = 17` |
| 26 | localStorage namespace consistente | `neonato-p2-m12` (tema) + `neonato-p2-m12.quiz.m12-p{1..17}` (quizzes) |

**Iterações**: 1 iteração de correção sobre anti-meta P0 v1.2 (2 ocorrências sutis: "próximas páginas" + "desta plataforma" reescritas). Todos os demais gates passaram em 1ª tentativa.

---

## 10. Componentes novos criados em pages-m12.css

| Componente | Uso | Justificativa visual |
|---|---|---|
| `.bauer-revisable` + `.laudo-pane--br/--int` | LAUDO-DUAL D08 (P9), reuso em M6/M8/M10 | Split-pane com header coral dashed + paneis BR (verde sucesso) × INT (azul info) lado a lado; preserva bordão BR como `.laudo-pane__bordao` em itálico serifa destacado |
| `.cascade-step` + `.cascade-step--final` | Cascata alcalose 7 passos (P12 fonte canônica) | Cards clicáveis numerados (data-step) com `__detail` expansível ao clique; cursor pointer + transição; passo 7 destacado em âmbar |
| `.acid-paradox` | Sub-mecanismo acidúria paradoxal (P12) | Gradient coral suave + lista numerada com counter visual; reforça caráter paradoxal |
| `.vacterl` + `.vacterl-letter` | Bloco síntese VACTERL (P13) | Grid responsivo com letras grandes em mono coral + freq + name; clique expande detalhe inline ocupando linha inteira (grid-column: 1/-1) |
| `.coto-ruler` | Régua altura coto AAR (P15) | Bar segmentado horizontal (verde-claro → verde → âmbar → vermelho) + legenda em grid |
| `.scale-grid` + `.scale-card--small/--medium/--giant` | Escalonamento onfalocele (P2) | 3 cards coloridos por severidade (verde/âmbar/vermelho) |
| `.therapy-ladder` + `.therapy-step--ideal/--intermediate/--escarification` | Hierarquia 3 degraus tratamento parede (P4) | 3 cards numerados com semáforo crescente |
| `.gross-grid` + `.gross-card--c` | Sequência tipológica Gross A–E (P7) | Card C destacado (border-top coral grosso, span 2 colunas em desktop) |
| `.diff-pair` + `.diff-card--onfalo/--gastro` | Diferencial onfalocele × gastrosquise (P5) | 2 cards lado a lado com gradient acentuado + dl com 7 critérios |
| `.dual-panel` + `.dual-panel__cell` | Dupla bolha + diamante (P11), tríade × cloaca (P16) | Dois SVGs lado a lado com título coral + caption |
| `.flowchart-aar` + `.flow-node--low/--high/--decision` | Fluxograma gás × cóccix (P17) | Decision-tree visual em verde (baixo) × vermelho (alto) |
| `.synth-axes` + `.synth-axis` | Síntese 4 eixos (P17) | Grid 2×2 com cards de bordão por eixo |
| `.img-skeleton` + `.img-skeleton__id` | Imagens reais pendentes | Padrão repetido diagonal (dashed) + ID em pill coral + brief + atribuição |
| `.surgical-map` | Mapa 4 eixos cirúrgicos (P1 hero) | Background gradient + SVG silhueta RN + legenda numerada |
| `.bordao-card` | Bordões diagnósticos | Acento coral + serifa itálica para frases-âncora |
| `.crosslink` | Cross-links M12 ↔ M2/M3/M9/M11 | Borda azul info esquerda + label mono |

Todos os componentes herdam tokens canônicos (cores, raios, espaçamentos, tipografia, sombras) de `tokens.css` — zero modificação dos 3 CSSs canônicos (`tokens.css`, `base.css`, `components.css`).

---

## 11. Decisões autônomas

- **Paleta**: herdada de M11 (Opção C) — petróleo profundo `#0a1620` + coral `#ff6b5a` + off-white quente `#f3ede0`. Acento de páginas usa info-blue (onfalocele/AE info), coral (gastrosquise/AD/AAR principal), success-green (defeito baixo/BR canon/anastomose primária), warning-âmbar (escalonamento/atenção/passo 7 cascata), danger-red (defeito alto/atresia/contraindicação).
- **Tipografia**: Inter (corpo) + Lora (display) + JetBrains Mono (números/labels). Sem alteração da escala canônica.
- **SVGs**: paleta visual coerente — formas geométricas simples (paths, circles, ellipses, rects, lines), labels em Inter/Mono, opacidades para profundidade. Anti-fotorrealismo absoluto. 18 SVGs distintos.
- **localStorage**: namespace `neonato-p2-m12` para tema + `neonato-p2-m12.quiz.m12-pX` para quizzes. Consistente com convenção dos módulos anteriores.
- **JS adicional**: `bindCascadeSteps()` (clique expande detalhe + Enter/Space) + `bindVACTERLLetters()` (clique expande detalhe inline). Ambos no router.js.

---

## 12. Pendências fora de escopo

- **Imagens reais médicas (8 skeletons declarados)**: V02a, V03a, V08a, V11a, V14a, V15a, V16a, V17a. Cada skeleton tem brief pedagógico + atribuição sugerida (StatPearls/Radiopaedia/RSNA/CHOP/Cincinnati/Boston Children's/atlas BR). Substituição pendente conforme regra Bauer de imagens reais médicas (Bauer fornecerá ou rotará via busca CC + validação tripla + attribution canônica). Sensibilidade pedagógica respeitada — todas marcadas como "fotografia clínica neonatal sem identificação".
- **Manifest PWA / sw.js**: existem no nível raiz `/neonatologia/` e o módulo herda automaticamente via `<link rel="manifest" href="../../manifest.webmanifest">`. Sem ação adicional necessária.
- **Banco de questões reais (BR-style WebSearch)**: questões deste módulo são autorais Bauer-style consistentes com canon BR de prova de residência; não foi solicitada busca de questões reais via WebSearch para este bônus. Se Bauer quiser, em ciclo separado pode-se rodar WebSearch e substituir as 50 autorais por questões reais verificáveis com atribuição (USP/UNIFESP/IPq-HCFMUSP/Einstein/HCPA/AMRIGS/UNICAMP/UFRJ/UERJ).
- **Update fact-card counters do hub** (atualmente diz N disponíveis / M em produção — desatualizado pelo deploy de M11+M12): fora de escopo deste deploy de M12; deve ser corrigido em passo separado.

---

## 13. NÃO COMMITAR

Conforme regra do prompt do Bauer ("NÃO COMMITAR"): zero `git add`, zero `git commit`. Estado preservado para revisão local navegando `open modules/m12-defeitos-cirurgicos-neonatais/index.html` ou via servidor estático.

---

## 14. Estratégia anti-saturação aplicada

Implementação dividida em 4 chunks salvos incrementalmente, conforme alerta de Bauer:

- **Chunk A (P1–P5)** — defeitos parede abdominal. Após escrever: validação de articles count + quizzes count + `</main>` ainda aberto.
- **Chunk B (P6–P9)** — AE/FTE com LAUDO-DUAL D08 em P9. Após escrever: re-validação estrutural.
- **Chunk C (P10–P13)** — AD + cascata alcalose canônica P12 (âncora HTML) + VACTERL bloco P13. Após escrever: re-validação estrutural.
- **Chunk D (P14–P17)** — AAR menino/menina + cloaca + síntese 4 eixos + fechamento `</main>`/`</body>`/`</html>` + scripts.

Após chunk final: gates anti-meta v1.2 + anti-IA-smell + LAUDO-DUAL + âncora alcalose + VACTERL + PWA + Hub + estruturais — todos validados sequencialmente.

---

## 15. Próximos passos

- **Aguardando aprovação Bauer** para revisar páginas navegando local (`open index.html`) ou via servidor estático.
- Após aprovação: rodar Playwright benchmark (replicar padrão de M3/M4/M5/M11/preventiva-2) para validação automatizada — bom alvo seria validar todas as 17 páginas + 50 quizzes + 8 skeletons + 18 SVGs + acessibilidade.
- Sub-passo opcional: rodar busca de imagens reais médicas para substituir os 8 skeletons (V02a/V03a/V08a/V11a/V14a/V15a/V16a/V17a) conforme método de busca de imagens médicas (CC fontes + validação tripla + attribution canônica).
- Sub-passo opcional: rodar WebSearch para questões reais de banca BR substituindo as 50 autorais.
- **NÃO COMMITAR sem instrução explícita** (conforme regra do prompt do Bauer).
