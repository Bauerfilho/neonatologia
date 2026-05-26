# Checkup M6 — pré-retomada (read-only)

**Gate**: G4 — Prompt-final → Código Executor
**Artefato validado**: `modules/m6-dispneia-neonatal-sdr-sepse/index.html` (1240 linhas)
**Artefato de referência**: `prompts-finais/prompt-final-aula6.md` (2949 linhas, 285 IDs, 14 páginas declaradas)
**Roteiro de origem**: `roteiros/roteiro-aula6.md` (618 linhas, 285 IDs)
**Data do checkup**: 2026-05-25

---

## Resumo executivo

**NÃO PODE RETOMAR pra commit.** A pipeline anterior parou em estado degradado por context-saturation: das 14 páginas declaradas no prompt-final, apenas **7 (50%) estão implementadas no HTML**. As páginas 6.8 a 6.14 (sepse precoce × tardia, fatores maternos, investigação laboratorial, tratamento empírico, profilaxia GBS, resolução de Firmindo, síntese-ponte M7) **não existem como `<article>` no DOM** — `</main>` fecha logo após a página 6.7 (linha 1200), enquanto o menu drawer e os case-anchor crosslinks já referenciam as 14 páginas como se existissem. Isso é o padrão clássico de saída sob saturação de contexto: andaime declarado, conteúdo perdido. Conteúdo das páginas 1-7 (IDs [001]-[146]) está sólido, denso, com voz Bauer preservada e visual médico real onde declarado. Conteúdo das páginas 8-14 (IDs [147]-[285], 139 itens = 48,8% do roteiro) está integralmente ausente do HTML. Severidade máxima: **🔴 Crítico**. Pipeline tem que rodar Executor de novo nas páginas 6.8-6.14 antes de qualquer commit.

---

## Achados por severidade

### 🔴 Crítico (bloqueia commit)

**C1 — Pages 6.8 a 6.14 ausentes do HTML.**
- Evidência: `grep -cE '<article class="page"' modules/m6-dispneia-neonatal-sdr-sepse/index.html` = **7** (esperado: 14).
- `data-page-num` atribuído apenas a 1, 2, 3, 4, 5, 6, 7. Não há `data-page-num="8"` em diante no DOM principal.
- `</main>` fecha em **linha 1200** logo após `</article>` da página 7 (linha 1198). Não há mais articles depois.
- Menu drawer (linhas 71-72) lista 6.13 e 6.14 com `href="#/p2-m6-p13"` e `href="#/p2-m6-p14"` apontando pra nada — links quebrados em runtime.
- Case-anchor (linhas 1222-1226) tem crosslink "→ Resolução (6.13)" → âncora inexistente. Mesmo problema com "→ Erro evitável (6.6)" (esse OK porque 6.6 existe).
- IDs do roteiro [147]-[285] (139 itens, 48.8% do total) **não foram processados pelo Executor**. Roteiro tem [147]-[150] (caso Firmindo segunda aposta), [151]-[180] (sepse panorama), [181]-[194] (fatores maternos GBS), [195]-[210] (manifestações sepse), [211]-[251] (investigação laboratorial + tratamento empírico), [252]-[277] (protocolo GBS pediátrico), [278]-[283] (resolução Firmindo), [284]-[285] (ponte M7). Todos estes ausentes.
- Correção necessária: re-executar Executor nas páginas 6.8 a 6.14 do prompt-final (offset 1040-2949 em `prompt-final-aula6.md`), inserir os 7 `<article>` antes da linha `</main>` atual, validar crosslinks do case-anchor.

**C2 — Conteúdo pedagógico nuclear perdido em massa.**
- IDs NUCLEAR perdidos confirmados por amostragem: [148], [153], [173], [187], [197], [202], [203], [218], [234], [254], [255] — apenas dos 30 IDs amostrados. Por extrapolação proporcional: ~85-100 dos 139 IDs ausentes são `[NUCLEAR]` ou `[REGRA-DE-OURO]`.
- Conceitos canônicos integralmente ausentes do HTML M6: relação I/T, neutropenia, PCR/procalcitonina, regra das culturas (sangue/líquor/urina), tratamento empírico ampi+genta, divergência SBP × AAP GBS (B-A6-01 — decisão Bauer pré-aprovada), Kaiser Calculator, doses pediátricas formalizadas, conceito sepse precoce × tardia, resolução de Firmindo com 2 diagnósticos, ponte M7.
- B-A6-01 (laudo dual SBP × AAP, posição Bauer crítica) declarado no prompt-final §3 como decisão editorial **crítica** — não renderizado no HTML.

**C3 — Quiz universal ausente em 7 páginas.**
- Regra Bauer: toda página tem quiz final (gate Didata §8.3). 7 páginas sem quiz = falha de cobertura.

### 🟠 Alto (corrigir antes do commit)

**A1 — `</span>` extra no menu drawer.**
- Linha 72: `<li><a class="menu-drawer__link" href="#/p2-m6-p14" data-page-num="14"><span class="menu-drawer__num">6.14</span>Síntese + ponte M7</span></a></li>`
- O segundo `</span>` (antes do `</a>`) é spurious — não há `<span>` aberto correspondente envolvendo "Síntese + ponte M7".
- Impacto: parser de HTML moderno tolera (browser ignora). Validador W3C estrito acusa. Acessibilidade indeterminada.
- Correção: remover o `</span>` extra em linha 72.

**A2 — Case-anchor referencia páginas inexistentes.**
- Linhas 1223-1225: `<a href="#/p2-m6-p1">→ Caso completo (6.1)</a>` (OK), `<a href="#/p2-m6-p6">→ Erro evitável (6.6)</a>` (OK), `<a href="#/p2-m6-p13">→ Resolução (6.13)</a>` (QUEBRADO).
- Resolve junto com C1 (quando 6.13 for renderizada, o link funciona).

**A3 — Quiz P1 com gabarito que adianta conteúdo de página inexistente.**
- Página 6.1, Q2 (linhas 156-170): gabarito C ("Dois diagnósticos coexistem: SDR + pneumonia/sepse precoce") com justificativa que cita "bolsa rota prolongada + I/T elevada + manifestação sistêmica" — todo o conteúdo de sepse precoce que estaria em 6.8-6.12.
- Em si o gabarito está correto pedagogicamente. Mas no estado atual o aluno acerta o quiz sem ter visto o conteúdo justificativo (que está em página não renderizada). Drift contextual de quem espera o aluno chegar por jornada — não há jornada.
- Não-bloqueante isoladamente; vira normalmente quando C1 corrigir.

### 🟡 Médio (pode ir, anotar)

**M1 — Comentário de case-anchor diz "persistente nas páginas 1/6/10/12/13".**
- Linha 1202: `<!-- CASE ANCHOR (Caso Firmindo, persistente nas páginas 1/6/10/12/13) -->`
- 10/12/13 são páginas inexistentes hoje. Coerente quando C1 corrigir; até lá, comentário promete o que não existe.

**M2 — Drawer mostra rótulos 6.13/6.14 cujo conteúdo não existe.**
- UX: usuário clica em "Resolução de Firmindo" e cai em página vazia.
- Mitigação possível: até C1 ser resolvido, comentar (em HTML) os `<li>` 8-14 do drawer.

### 🟢 OK (passou)

- **Páginas 1-7 renderizadas com densidade pedagógica adequada**: texto principal substancial (média ~150 linhas por página), múltiplas seções, asides estruturadas (`trap`, `op-summary`, `mnemonic`, `finding`, `dont-confuse`, `def-box`).
- **Sincronia visual-texto nas páginas 1-7**: cada página com imagem real e/ou SVG inline (alvéolo abre/fecha em 6.3, RX SDR + RX normal em 6.5, CPAP foto real em 6.6, LISA/INSURE esquema em 6.6, monitor apneia em 6.7). Todos os 5 arquivos referenciados em `assets/img/` existem no disco.
- **Voz Bauer preservada nas 7 páginas**: bordões "respira, oxigena", "Bora pra mais uma semana", "tadinho", "pulmão pique × chique", interlocutora Júlia (linha 124), obstetra Vinícius (linha 105), bebezinho Firmindo, mãe Esmeralda — todos no DOM.
- **Anti-metalinguagem nas páginas 1-7**: zero hits para "aula", "professor", "MedCurso", "MED" (como sigla descontextualizada), "canon MED", "prova MED", "(item [NNN]", "módulo anterior", "Vamos fechar". Auditor não disparou alarme em runtime de grep direto.
- **Zero vazamento de caso de outra aula**: nenhum hit para "Eucalipto" (M1/M3/M5), "Lucrécia" (M2), "Elvira Maria" (M7).
- **Estratégias de abertura distribuídas nas 7 implementadas**: E3 (6.1), E4 (6.2), E2 (6.3), E6 (6.4), E4 (6.5), E8 (6.6), E7 (6.7) — sem repetição consecutiva de 3+.
- **Tópicos específicos não-genéricos**: nenhum título "Introdução", "Conceitos básicos", "Generalidades". Títulos no padrão Bauer-style ("Pulmão pique × pulmão chique: o mnemônico contraintuitivo da SDR").
- **HTML estruturalmente balanceado**: `<article>` 22/22, `<section>` 16/16. Único defeito é o `</span>` extra (A1).
- **Quiz universal presente nas 7 páginas existentes** (`data-quiz-id="m6-p1"` até `m6-p7`).
- **PWA**: manifest no parent (`../../manifest.webmanifest`), sw.js no parent, `pwa-bootstrap.js` injetado (linha 1238). PWA infra OK no escopo M6.
- **Texto soberano nas páginas 1-7**: cada conceito chave (surfactante, microatelectasias, tríade RX, fatores de risco SDR, definição de apneia, doses de cafeína) explicado em prosa, não dependente de imagem.
- **Quiz feedback rico**: distractor justificado em todas as 7 páginas.

---

## Diff de IDs (sample 30)

**Metodologia**: 30 IDs amostrados com seed fixa, 15 da zona [001]-[146] (escopo das páginas 1-7 implementadas) e 15 da zona [147]-[285] (escopo das páginas 8-14 ausentes). Para cada ID, palavra-chave canônica do roteiro foi grepada no HTML.

### Zona 1 — IDs esperados no HTML (páginas 1-7)

| ID | Categoria | Keyword no roteiro | Hits no HTML | Status |
|---|---|---|---|---|
| [007] | CASO-VFP | "betametasona" | 3 | 🟢 PASS |
| [008] | BORDÃO | "Vinícius" | 1 | 🟢 PASS |
| [009] | CASO | "taquipneia" | 10 | 🟢 PASS |
| [023] | REGRA-DE-OURO | "diagnóstico diferencial" | 4 | 🟢 PASS |
| [024] | REGRA-DE-OURO + PEGADINHA | "banca" | 7 | 🟢 PASS |
| [027] | NUCLEAR | "manifestações clínicas" | 2 | 🟢 PASS |
| [029] | BORDÃO | "Ô banca" | 1 | 🟢 PASS |
| [036] | NUCLEAR | "todas as crianças com dispneia" | 0 (paráfrase legítima) | 🟡 NOTA (conceito presente reformulado) |
| [056] | NUCLEAR | "tamanho original" | 1 | 🟢 PASS |
| [058] | NUCLEAR | "permanece aberto" | 2 | 🟢 PASS |
| [060] | NUCLEAR + REGRA-DE-OURO | "abre, fecha" | 1 | 🟢 PASS |
| [063] | NUCLEAR | "primeiras horas de vida" | 1 | 🟢 PASS |
| [071] | NUCLEAR | "muita insulina" | 1 | 🟢 PASS |
| [109] | NUCLEAR + REGRA-DE-OURO + VFP | "menor de 34 semanas" | 0 (paráfrase "< 34 sem") | 🟡 NOTA (conceito presente reformulado, hits em "&lt; 34 sem") |
| [140] | NUCLEAR + VFP | "metilxantinas" | 1 | 🟢 PASS |

**Zona 1 total**: 13 PASS + 2 NOTA-paráfrase = 15/15 efetivos. Cobertura semântica zona 1 = **100%**.

### Zona 2 — IDs esperados no HTML (páginas 8-14 — não renderizadas)

| ID | Categoria | Keyword no roteiro | Hits no HTML | Status |
|---|---|---|---|---|
| [148] | CASO-VFP | "bolsa rota de 20 horas" | 0 | 🔴 PERDIDO |
| [153] | NUCLEAR | "foco urinário" | 0 | 🔴 PERDIDO |
| [173] | NUCLEAR + QUADRO | "infecção fúngica" | 0 | 🔴 PERDIDO |
| [186] | REGRA-DE-OURO + VFP | "marco temporal de 18" | 0 | 🔴 PERDIDO |
| [187] | NUCLEAR | "colonizada pelo GBS" | 0 | 🔴 PERDIDO |
| [197] | NUCLEAR + REGRA-DE-OURO | "doença sistêmica" | 0 | 🔴 PERDIDO |
| [202] | NUCLEAR + PEGADINHA | "logo após o nascimento" | 0 | 🔴 PERDIDO |
| [203] | NUCLEAR | "período assintomático" | 0 | 🔴 PERDIDO |
| [218] | NUCLEAR + QUADRO | "neutrófilos" | 1 (incidental em quiz 6.1) | 🔴 PERDIDO (não desenvolvido) |
| [233] | REGRA-DE-OURO | "onfalite" | 0 | 🔴 PERDIDO |
| [234] | NUCLEAR + ARVORE | "Cultura de urina" | 0 | 🔴 PERDIDO |
| [254] | NUCLEAR | "prevenção da sepse pelo GBS" | 0 | 🔴 PERDIDO |
| [255] | NUCLEAR | "está na tua conta" | 0 | 🔴 PERDIDO |
| [261] | DIVERGENCIA-SBP-AAP | "Tratado da Sociedade Brasileira" | 0 | 🔴 PERDIDO (laudo dual B-A6-01 ausente!) |
| [276] | NUCLEAR + REGRA-DE-OURO | "Observação =" | 0 | 🔴 PERDIDO |

**Zona 2 total**: 0 PASS + 15 PERDIDOS = 0/15. Cobertura semântica zona 2 = **0%**.

### Cobertura quantitativa consolidada

- Zona 1 ([001]-[146]): 146 IDs esperados, ~146 efetivamente refletidos no HTML → **100%**.
- Zona 2 ([147]-[285]): 139 IDs esperados, **0 refletidos no HTML → 0%**.
- **Cobertura global do prompt-final no HTML: 146/285 = 51,2%.**
- Gate Didata §8.3 (cobertura ≥ 95% obrigatória) → **REPROVADO**.

---

## Anti-metalinguagem grep

```bash
grep -niE 'aula|professor|MedCurso|\bMED\b|módulo anterior|Vamos fechar' index.html
```

**Resultado**: 0 hits válidos (zero ocorrências em qualquer dos termos canônicos).

```bash
grep -nE 'canon MED|prova MED|item \[[0-9]+\]|laudo|roteiro|prompt|cobertura|preservad' index.html
```

**Resultado**: 5 hits — todos em **conexão pedagógica legítima** ("roteiro de raciocínio", "roteiro" como objeto de estudo pedagógico, "Aplicando o roteiro a Firmindo"). Nenhum é meta-pipeline ("canon MED", "prova MED", "(item [NNN]", "laudo Especificador") — falsos positivos esperados, "roteiro" aqui significa "roteiro mental de raciocínio diagnóstico", não o artefato Bauer.

**Verdict anti-metalinguagem (escopo páginas 1-7)**: 🟢 PASS. Zero hits P0, zero P1, zero P2.

Páginas 8-14 não foram avaliadas pois não existem — só ai-writing-auditor poderá avaliar após implementação.

---

## Drifts de contexto saturado detectados

**Sinal principal — TRUNCAMENTO ABSOLUTO**: 7 páginas (50% do escopo) ausentes do HTML. Padrão clássico de saída sob saturação — andaime declarado em menu/comentários, conteúdo perdido. Drift severidade: 🔴 máxima.

**Outros checks**:

| Check | Resultado |
|---|---|
| Truncamento de parágrafo dentro de página existente (1-7) | 🟢 Nenhum. Páginas 1-7 fecham parágrafos, asides, sections e articles corretamente. |
| Repetição de bloco (mesmo bloco aparece 2x) | 🟢 Nenhum detectado em amostragem. |
| Vazamento de caso de outra aula (Eucalipto / Lucrécia / Elvira Maria) | 🟢 Zero hits. Firmindo é o único caso paradigmático no HTML, coerente com M6. |
| Paths quebrados / src de imagem inexistente | 🟢 Todas 5 imagens referenciadas existem em `assets/img/`. |
| Cross-link cross-module errado | 🟡 Cross-links para `../m1-classificacao-sifilis/` e `../m3-reanimacao/` apontam para módulos que não foram conferidos neste checkup. Sugestão: validar separadamente em G4 cross-module. |
| Quiz duplicado ou gabarito inconsistente | 🟢 Cada uma das 7 páginas tem um único quiz com IDs únicos (`m6-p1` a `m6-p7`). Gabaritos coerentes com texto principal. |
| Inconsistência factual entre páginas (mesmo medicamento, doses divergentes) | 🟢 Cafeína (citrato 20 mg/kg ataque + 5-10 mg/kg/dia manutenção) aparece consistente em 6.7 (linhas 1094-1107) e quiz Q3 (linha 1181) — mesma dose. Outras doses só aparecem em páginas ausentes. |
| Páginas curtas demais sugerindo perda | 🟢 Páginas 1-7 têm densidade adequada: P1 ~98 linhas, P2 ~178 linhas, P3 ~158 linhas, P4 ~169 linhas, P5 ~135 linhas, P6 ~182 linhas, P7 ~185 linhas. Média 158 linhas/página. |
| Crosslinks internos #/p2-m6-pN apontando pra páginas inexistentes | 🔴 Múltiplos crosslinks dentro das 7 páginas existentes apontam pra 6.8/6.9/6.10/6.12/6.13: ex. linha 759 ("aprofundado em 6.8"), linha 104 ("voltamos a esse ponto em 6.9"), linha 124 ("vem em 6.10"), linha 1141 ("6.8 abre o panorama"). Todos quebrados em runtime. Coerentes quando C1 corrigir. |
| `</span>` extra no menu drawer | 🟠 Linha 72 — descrito em A1. |

**Conclusão drift**: o contexto saturado afetou a fase final (implementação Executor), não a fase de planejamento (prompt-final). O prompt-final tem as 14 páginas íntegras. O HTML é que foi entregue pela metade, sem aviso, com o andaime de menu/case-anchor preenchido como se as 14 estivessem prontas.

---

## Recomendação final

**Para o Orquestrador**:

1. **Não fazer commit do estado atual.** Pipeline incompleta.
2. **Re-invocar Executor** com escopo restrito: páginas 6.8 a 6.14 do `prompts-finais/prompt-final-aula6.md` (linhas 1040-2949 do prompt). Executor deve inserir 7 novos `<article class="page" data-page-num="N">` antes do `</main>` da linha 1200 do HTML atual.
3. **Garantir continuidade de variáveis CSS**: pages-m6.css provavelmente já tem todas as classes (`opener--vs`, `def-box`, `dose-card`, `therapy-flow`, etc.) usadas nas 7 implementadas. Mas se 6.8-6.14 usarem classes novas (ex. fluxograma GBS, tabela laudo dual `.bauer-revisable`), o CSS precisará crescer junto. Validar.
4. **Corrigir A1** em paralelo: remover `</span>` extra em linha 72.
5. **Após retomada do Executor**, re-rodar G4 inteiro (este checkup) com cobertura amostral nova focada em IDs [147]-[285].
6. **Considerar profilática contra recorrência**: rodar Executor em chunks declarados pelo Orquestrador (ex. 7 páginas por chamada), com confirmação intermediária de que `</main>` ainda não foi fechado e o trabalho continua na próxima invocação.

**Severidade máxima detectada**: 🔴 **Crítico** — 1 crítico estrutural (C1) + 1 crítico de conteúdo (C2, derivado) + 1 crítico de padrão Bauer (C3, derivado), 3 altos (A1, A2, A3), 2 médios (M1, M2).

**Decisão fica com Bauer/Orquestrador**: este vértice não comanda re-invocação. Reporta diagnóstico estruturado e aguarda comando.
