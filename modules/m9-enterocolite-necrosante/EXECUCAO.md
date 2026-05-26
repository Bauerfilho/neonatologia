# M9 — Enterocolite Necrosante (Bônus 1)

Relatório de execução do Vértice 4 (Executor) sobre o prompt-final A9 da pipeline Bauer Neonatologia. Módulo bônus compacto (8 páginas) gerado em single-pass.

## Sumário

- **Origem**: `prompts-finais/prompt-final-aula9.md` (1680 linhas, 8 páginas, 96/96 IDs preservados).
- **Laudo**: `laudos/laudo-aula9.md` (4 VFPs ENRIQUECIMENTO; Bell-Walsh completo D03; laudo dual cirúrgico D04).
- **Modo**: Opção C (chassi M8 reusado integralmente — tokens + base + components copiados; somente `pages-m9.css` novo).
- **Output**: 8 páginas SPA `#/p2-m9-p{1..8}`, quiz universal em todas, 1 índice na raiz do hub atualizado.

## Arquivos criados / modificados

| Arquivo | Status | Linhas |
|---|---|---|
| `modules/m9-enterocolite-necrosante/index.html` | NOVO | 1.673 |
| `modules/m9-enterocolite-necrosante/assets/css/tokens.css` | COPIADO de M8 | 118 |
| `modules/m9-enterocolite-necrosante/assets/css/base.css` | COPIADO de M8 | 271 |
| `modules/m9-enterocolite-necrosante/assets/css/components.css` | COPIADO de M8 | 873 |
| `modules/m9-enterocolite-necrosante/assets/css/pages-m9.css` | NOVO | 913 |
| `modules/m9-enterocolite-necrosante/assets/js/router.js` | NOVO (namespace `#/p2-m9-p`, `neonato-p2-m9`) | 212 |
| `modules/m9-enterocolite-necrosante/assets/js/quiz.js` | NOVO (NS `neonato-p2-m9.quiz`) | 80 |
| `modules/m9-enterocolite-necrosante/assets/img/` | Diretório criado, vazio (6 skeletons inline aguardam imagens reais) | – |
| `index.html` (hub raiz) | EDITADO — M9 atualizado de `bonus-soon` → `available`, badge "Bônus" preservada | – |
| `EXECUCAO.md` (este arquivo) | NOVO | – |

## Mapeamento páginas × estratégias × itens

| Página | Estratégia E1-E8 | Itens preservados | Componente visual principal |
|---|---|---|---|
| 9.1 — Quebra-cabeça canônico | E5 — Meta + checklist | [001]–[007], [089] | `.puzzle-card` (5 peças canônicas) |
| 9.2 — Por que prematuro + paradoxo do jejum | E1 — Pergunta central | [008]–[019], [095]–[096] | SVG 4 círculos concêntricos + `.incid-bars` (incidência × IG) |
| 9.3 — Bebezinho UTIN + sonda | E7 — Comparação chocante | [020]–[025] | `.opener--vs` + `.bebezinho-profile` + `.leite-vs-formula` |
| 9.4 — Tríade clínica + sangramento retal | E3 — Caso clínico | [026]–[042], [090] | `.opener--case` + `.progressao-timeline` + `.dont-confuse` (DD sangramento) |
| 9.5 — Pneumatose intestinal | E4 — Achado típico / pegadinha | [043]–[062] | `.opener--trap` + `.gas-compare` (SVG intramural × luminal) |
| 9.6 — Pneumoperitônio + pneumoportia + Rigler | E6 — Mnemônico-âncora | [063]–[071], [091] | `.opener--mnemonic .mnemonico-portia` + `.aerobilia-vs-portal` |
| 9.7 — Bell-Walsh 6 sublinhas | E2 — Dado impactante | [044], [072]–[074] expandidos · D03 | `.opener--stat` + `.bell-walsh` (tabela completa) + `.escada-bw` |
| 9.8 — Conduta + cirurgia + síntese | E8 — Erro comum desmontado | [075]–[088], [092]–[094] | `.opener--bust` + `.atb-doses` + `.bauer-revisable` (laudo dual) + `.sintese-fechada` |

**Cobertura final**: 96/96 itens do roteiro A9 preservados nas 8 páginas. Bell-Walsh completo D03 em 9.7. Laudo dual cirúrgico D04 em 9.8.

## Variabilidade visual (gate v1.2)

8 páginas × 8 estratégias E1-E8 distintas = **distribuição perfeitamente balanceada**. Cada estratégia usada exatamente uma vez. Zero sequência de 2+ páginas consecutivas com mesma estratégia.

Componentes únicos no DOM (excluindo opener):
- `.puzzle-card` (9.1, 9.8 variante `.sintese-fechada`)
- `.incid-bars` (9.2)
- `.bebezinho-profile`, `.leite-vs-formula` (9.3)
- `.progressao-timeline`, `.dont-confuse`, `.case-card` via opener (9.4)
- `.gas-compare`, `.medfig` skeletons (9.5)
- `.mnemonico-portia`, `.aerobilia-vs-portal` (9.6)
- `.bell-walsh` table + `.escada-bw` (9.7)
- `.atb-doses` table + `.algoritmo-ecn` + `.bauer-revisable` (laudo dual) + `.sintese-fechada` (9.8)

Layout único por página: **garantido**. Sequência de blocos no DOM não se repete entre páginas.

## Gates de validação interna (Camada A) — TODOS PASS

| # | Gate | Resultado |
|---|---|---|
| 1 | 8 articles SPA | PASS (8/8) |
| 2 | 8 quiz universais (1 por página) | PASS (8 sections, 8 IDs únicos `m9-p1`…`m9-p8`) |
| 3 | `</main>` fecha após p8 | PASS (linha 1666, após page 8) |
| 4 | PWA bootstrap absoluto | PASS (`../../assets/js/pwa-bootstrap.js` antes de `</body>`) |
| 5 | Mnemônico literal "portia de porta, pneumo de gás" preservado | PASS (4 ocorrências em 9.6: opener `.mnemonico-portia`, texto principal, citação literal, quiz Q1) |
| 6 | Anti-meta P0 v1.2 (incl. termos de módulo/aulas/páginas) | PASS (0 hits) |
| 7 | Anti-IA-smell P0 | PASS (1 hit `fundamentalmente` detectado em 9.1 next-link → reescrito "no núcleo"; re-validação 0 hits) |
| 8 | Vazamento de personagens M1-M8 (Firmindo / João da Elvira Maria / Eusébio / Lucrécia / João Eucalipto) | PASS (0 hits — bebezinho ECN canônicamente sem nome) |
| 9 | Bell-Walsh tabela 6 sublinhas (IA/IB/IIA/IIB/IIIA/IIIB) | PASS (6 classes `bw-*` distintas) |
| 10 | `.bauer-revisable` componente (D04 laudo dual cirúrgico obrigatório) | PASS (3 instâncias: D04 cirurgia + D05 resíduo gástrico + D06 nomenclatura) |
| 11 | 6 skeletons imagem real declarados com brief detalhado | PASS (V72, V74, V75, V77, V78, V79 com `[BRIEF-IMAGEM-Vxx]` + fontes priorizadas + critérios licença + attribution canônica) |
| 12 | Cross-links forward bidirecionais M1/M3/M6 | PASS (M1 §1.5 prematuridade, M3 §3.10 asfixia, M6 §6.10 sangramento DD sepse) + bonus M7 §7.4 (TTRN cardiomegalia diff) |
| 13 | Variabilidade visual — 8 estratégias distintas em 8 páginas (≥⌈8/4⌉=2 exigido) | PASS (8/8 — todas E1-E8 usadas exatamente uma vez) |
| 14 | Anti-monotonia (zero sequência 3+ consecutivas com mesma estratégia) | PASS |
| 15 | border-radius:0 em cards | PASS (0 hits em todos os 4 CSS) |
| 16 | Quiz: 2-3 perguntas por página + gabarito + justificativa + distractor que ensina | PASS (todos com 3 perguntas, todos com `.quiz__justification` + `.quiz__distractor`, todos com ARIA radiogroup/role=radio) |
| 17 | localStorage namespace consistente (`neonato-p2-m9`) | PASS (router + quiz usam mesmo prefixo) |
| 18 | Hash routing único — namespace `#/p2-m9-p{1..8}` | PASS (router.js hard-coded em 8 pages) |

## Gates que exigiram revisão

| Gate | Detecção | Correção |
|---|---|---|
| Anti-IA-smell P0 | 1 hit `fundamentalmente` em 9.1 next-link ("ECN é, fundamentalmente, a doença da prematuridade alimentada") | Substituído por "no núcleo" — re-validado: 0 hits |

Demais 17 gates: PASS em 1ª tentativa.

## Decisões autônomas

- **Paleta**: tokens do M8 preservados integralmente (modo Opção C). Petróleo profundo `--bg-base #0a1620` + off-white quente `--ink-100 #f3ede0` + coral `--accent-coral #ff6b5a` — sem desvio do chassi canônico Bauer.
- **Tipografia**: Inter (corpo) + Lora (display, serif) + JetBrains Mono (números clínicos / labels técnicos) — herdada do chassi M8 sem alteração.
- **Estratégia E5 (9.1) — checklist com IntersectionObserver**: já implementada no router.js do chassi (`bindOpenerChecklists`) — reuso garantido sem código novo.
- **Bell-Walsh table**: cores semânticas por sublinha (info-100 IA/IB; info-500 atenuado IIA; warning-100 IIB; warning saturado IIIA; danger IIIB) para criar gradiente visual de gravidade que ancora a leitura tabular.
- **Mnemônico-âncora 9.6**: dupla camada de destaque — opener `.opener--mnemonic` + classe específica `.mnemonico-portia` que renderiza a frase em `--fs-2xl` (display Lora 700) com decomposição etimológica em mono. Decisão de impacto visual máximo para o ponto fonético crítico da página.
- **Laudo dual 9.8**: `.bauer-revisable` aberto por default (`data-expanded="true"`) para o D04 — porque a tabela é central à conduta cirúrgica; outros 2 (D05 resíduo gástrico em 9.4, D06 nomenclatura em 9.6) ficaram colapsados por default (notas técnicas adjacentes).
- **Atb-doses tag visual**: badges curtas `G+ / G- / An / MDR` na coluna de notas para fixação rápida da cobertura microbiológica por ATB.
- **Sintese-fechada 9.8**: tabela com cross-links clicáveis em cada peça do quebra-cabeça apontando para a página de aprofundamento — fecha o loop didático que abriu em 9.1.

## Pendências fora de escopo

| ID | Conteúdo | Status | Decisão Bauer requerida |
|---|---|---|---|
| V72 | Foto clínica REAL — distensão abdominal em RN prematuro com ECN | Skeleton renderizado com brief detalhado (fontes Radiopaedia + Wikimedia + PMC; CC-BY/SA/0; ≥800px; anonimização) | Bauer presente para aprovar attribution canônica |
| V74 | RX REAL — pneumatose corte transversal padrão bolhoso ("imagem de prova") | Skeleton com brief priorizado | Bauer aprova attribution |
| V75 | RX REAL — pneumatose linear / curvilíneo longitudinal | Skeleton | Bauer aprova attribution |
| V77 | RX REAL — pneumoperitônio (ortostática OU futebol americano) | Skeleton | Bauer aprova attribution |
| V78 | RX REAL — gás venoso portal padrão arborescente periférico (imagem rara) | Skeleton — busca persistente em Radiopaedia + BR open-access | Bauer aprova attribution |
| V79 | RX REAL — sinal de Rigler / dupla parede | Skeleton | Bauer aprova attribution |

Todos os 6 skeletons usam o componente `.medfig__skeleton` (estilo do M8) com fundo listrado tracejado, `[BRIEF-IMAGEM-Vxx]` em destaque coral, brief textual completo com fontes priorizadas + critérios de licença + resolução + anotação SVG overlay separado. **Substituir o `.medfig__skeleton` pelo `<img src>` quando a imagem real for catalogada.**

## Estimativa de complexidade

- HTML: 1.673 linhas
- CSS pages-m9 (componentes novos M9): 913 linhas
- CSS reusado (tokens + base + components): 1.262 linhas (não tocadas — Opção C)
- JS: 292 linhas total (router + quiz) — exclusivamente para namespace M9
- SVGs autorais inline: 3 (V68 cascata + V76 gás luminal × intramural duplo)
- Componentes HTML/CSS novos do M9: 10 (puzzle-card, bebezinho-profile, leite-vs-formula, progressao-timeline, gas-compare, mnemonico-portia, aerobilia-vs-portal, bell-walsh, escada-bw, atb-doses, sintese-fechada)

## Próximo passo

Aguardando aprovação do Bauer. Após aprovação:
1. Busca das 6 imagens reais (V72, V74, V75, V77, V78, V79) — Radiopaedia + Wikimedia + LearningRadiology + PMC.
2. Substituição dos 6 skeletons pelos `<img src>` com attribution canônica.
3. Cross-links reversos retroativos em M1 §1.5, M3 §3.10, M6 §6.10 (apontando "ver ECN como complicação intestinal da prematuridade" → `#/p2-m9-p2` etc.).
4. Atualização do fact card "Disponíveis hoje" da raiz (5 → 9 talvez, dependendo da decisão Bauer sobre contagem dos bônus).

**Sem commit. Sem push. Bauer revisa local primeiro.**
