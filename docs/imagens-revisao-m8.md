# Revisão conteudística de imagens — M8 (Icterícia Neonatal)

**Data**: 2026-05-26
**Modo**: FASE 0 read-only — apenas este arquivo foi criado; nada mais foi tocado.
**Fonte primária**: `prompts-finais/prompt-final-aula8.md` (2739 linhas, 15 páginas, 33 briefs V67-V99).
**HTML implementado**: `modules/m8-ictericia-neonatal/index.html` (2877 linhas).
**Roteiro**: `roteiros/roteiro-aula8.md` (432 itens).
**Diretório imagens**: `modules/m8-ictericia-neonatal/assets/img/` — **VAZIO** confirmado.
**Pipeline**: `docs/pipeline-imagens-reais.md` (já lida).

⚠️ **M8 é o gap crítico da plataforma**: 11 imagens reais OBRIGATÓRIAS declaradas no prompt-final + 2 opcionais; densidade pedagógica máxima (caso paradigmático Eusébio Foucault em 8 páginas + 4 LAUDO-DUAL + 9 subtipos de icterícia).

---

## 1. Inventário dos 33 briefs V67-V99

Tipo declarado conforme linha 2223 do prompt-final:
- **Imagens reais OBRIGATÓRIAS** (11): V69, V74, V79, V81, V86, V87, V91, V93, V94, V77 (opcional), V89 (opcional) — listados como 11 + 2 opcionais.
- **SVGs autorais** (9): V68, V70, V73, V75, V76, V78, V85, V90, V95.
- **Componentes HTML/CSS/JS** (13): V67, V71, V72, V80, V82, V83, V84, V88, V92, V96, V97, V98, V99.

| ID | Página | Descrição (1 linha) | Tipo declarado | Status atual HTML | Priorização pedagógica | Sugestão final |
|---|---|---|---|---|---|---|
| **V67** | 8.1 | Vinheta clínica de Eusébio (9 micro-dados) | HTML componente | ✅ Implementado (`<aside class="eusebio-vinheta">`) | 🟢 BAIXA | MANTER componente — não é imagem |
| **V68** | 8.2 | Esquema "BI atravessa BHE, BD não" + tríade kernicterus | SVG autoral | ✅ Implementado (figure medfig) | 🟢 BAIXA | MANTER SVG autoral — esquemático conceitual |
| **V69** | 8.2 | **Foto REAL: RN ictérico zona 1 Kramer (face+pescoço)** | Real OBRIG | 🟥 SKELETON `[BRIEF-IMAGEM V69]` (linha 318) | 🔴 ALTA | **BUSCAR REAL** — Wikimedia "neonatal jaundice" |
| **V70** | 8.3 | Tripé fisiológico (3 painéis convergentes) | SVG autoral | ✅ Implementado | 🟢 BAIXA | MANTER SVG autoral — mecanismo abstrato |
| **V71** | 8.4 | Tabela 5 critérios + alternatividade | HTML componente | ✅ Implementado | 🟢 BAIXA | MANTER componente |
| **V72** | 8.4 | Interativo B49 — checklist 5 critérios | Interativo JS | ✅ Implementado | 🟢 BAIXA | MANTER componente interativo |
| **V73** | 8.5 | Esquema 5 zonas Kramer + "passou do umbigo" | SVG autoral | ✅ Implementado (figure medfig com `kramer-zones__svg-wrap`) | 🟡 MÉDIA | MANTER SVG autoral + considerar overlay com foto V74 ao lado |
| **V74** | 8.5 | **Foto REAL: RN ictérico zona 3-4 Kramer** | Real OBRIG | 🟥 SKELETON `[BRIEF-IMAGEM V74]` (linha 881) | 🔴 ALTA | **BUSCAR REAL** — Wikimedia/DermNet, anonimização |
| **V75** | 8.6 | Árvore icterícia precoce: imune × não-imune | SVG autoral | ✅ Implementado | 🟢 BAIXA | MANTER SVG autoral — fluxograma decisório |
| **V76** | 8.7 | Mecanismo Rh: sensibilização → reexposição (2 painéis) | SVG autoral | ✅ Implementado | 🟢 BAIXA | MANTER SVG autoral — mecanismo abstrato gestações |
| **V77** | 8.7 | Foto REAL: RN com icterícia + palidez + esplenomegalia | Real OPCIONAL | 🟥 SKELETON `[BRIEF-IMAGEM V77]` (linha 1163) | 🟡 MÉDIA | **BUSCAR REAL** — tentar; se INCONCLUSIVO, manter SVG V76 ampliado conforme brief original |
| **V78** | 8.8 | Mecanismo ABO molecular + cascata diagnóstica | SVG autoral | ✅ Implementado | 🟢 BAIXA | MANTER SVG autoral — fluxograma |
| **V79** | 8.8 | **Esfregaço com esferócitos (microscopia)** | Real OBRIG | 🟥 SKELETON `[BRIEF-IMAGEM V79]` (linha 1364) | 🔴 ALTA | **BUSCAR REAL** — Wikimedia "hereditary spherocytosis blood smear" / ASH ImageBank |
| **V80** | 8.9 | Painel comparativo esferócito × Heinz | HTML componente | ⚠️ Wrapper implementado (linha 1514) mas depende de V79+V81 reais | 🔴 ALTA (depende) | MANTER componente — popular com V79+V81 buscadas |
| **V81** | 8.9 | **Esfregaço com corpúsculos de Heinz** | Real OBRIG | 🟥 SKELETON `[BRIEF-IMAGEM V81]` (linha 1538) | 🔴 ALTA | **BUSCAR REAL** — Wikimedia "Heinz bodies" / ASH (azul cresil supravital) |
| **V82** | 8.10 | Fluxograma icterícia precoce em 4 perguntas | SVG/HTML | ✅ Implementado | 🟢 BAIXA | MANTER fluxograma autoral |
| **V83** | 8.10 | Interativo B50 — 4 mini-casos fluxograma | Interativo JS | ✅ Implementado | 🟢 BAIXA | MANTER componente interativo |
| **V84** | 8.11 | Painel leite materno × aleitamento (6 atributos) | HTML componente | ✅ Implementado | 🟢 BAIXA | MANTER componente |
| **V85** | 8.11 | Mecanismo icterícia aleitamento (cross-reuso V70 + badge) | SVG autoral | ✅ Implementado | 🟢 BAIXA | MANTER SVG autoral |
| **V86** | 8.12 | **USG abdominal — sinal cordão triangular (atresia)** | Real OBRIG | 🟥 SKELETON `[BRIEF-IMAGEM V86]` (linha 2008) | 🔴 ALTA | **BUSCAR REAL — ALTO RISCO INCONCLUSIVO** (Radiopaedia bloqueia bot; fontes alternativas PMC/LearningRadiology) |
| **V87** | 8.12 | **Biópsia hepática — plugs de bile + fibrose portal + proliferação ductal** | Real OBRIG | 🟥 SKELETON `[BRIEF-IMAGEM V87]` (linha 2019) | 🔴 ALTA | **BUSCAR REAL — ALTO RISCO INCONCLUSIVO** (literatura paga; tentar Wikimedia + PMC; fallback: escalonar ilustrador) |
| **V88** | 8.12 | Fluxograma Kasai vs transplante | HTML componente | ✅ Implementado | 🟢 BAIXA | MANTER componente |
| **V89** | 8.12 | Foto REAL: RN com colúria + acolia (fralda) | Real OPCIONAL | ⚠️ **NÃO IMPLEMENTADO no HTML** — texto descreve em 8.4/8.12 sem figure dedicada | 🟡 MÉDIA | **BUSCAR REAL** — clássico de prova; tentar Wikimedia/DermNet. Se achar, **adicionar figure novo** ao HTML (8.12) |
| **V90** | 8.13 | Mecanismo fototerapia (3 painéis: luz→capilar→excreção) | SVG autoral | ✅ Implementado | 🟢 BAIXA | MANTER SVG autoral — mecanismo molecular |
| **V91** | 8.13 | **Gráfico AAP 2004 (3 curvas — canon BR de prova)** | Real OBRIG + ilustração autoral | 🟥 PLACEHOLDER `aap-chart__brief` (linha 2252) | 🟡 MÉDIA | **RECONSTRUIR SVG CC** — gráfico AAP 2004 é protegido; ou reusar paper original CC se existir; ou autoral fiel com cross-link AAP institucional |
| **V92** | 8.13 | Painel comparativo AAP 2004 × AAP 2022 + `.bauer-revisable` | HTML componente | ✅ Implementado | 🟢 BAIXA | MANTER componente |
| **V93** | 8.13 | **Foto REAL: RN sob fototerapia em UTIN** | Real OBRIG | 🟥 SKELETON `[BRIEF-IMAGEM V93]` (linha 2335) | 🔴 ALTA | **BUSCAR REAL** — Wikimedia "neonatal phototherapy" / CDC PHIL — alta disponibilidade |
| **V94** | 8.14 | **Nomograma de Bhutani 1999 (4 zonas + percentis)** | Real OBRIG + ilustração autoral | 🟥 PLACEHOLDER `aap-chart__brief` (linha 2503) | 🟡 MÉDIA | **RECONSTRUIR SVG CC** — Bhutani 1999 protegido; autoral fiel preferível; tentar Wikimedia/Open Pediatrics |
| **V95** | 8.14 | Sequência terapêutica escalonada foto→exsanguíneo | SVG autoral | ✅ Implementado | 🟢 BAIXA | MANTER fluxograma autoral |
| **V96** | 8.14 | Tabela 3 indicações exsanguineotransfusão | HTML componente | ✅ Implementado | 🟢 BAIXA | MANTER componente |
| **V97** | 8.15 | Resolução Caso Eusébio (card de fechamento) | HTML componente | ✅ Implementado | 🟢 BAIXA | MANTER componente |
| **V98** | 8.15 | Tabela síntese 9 subtipos × 5 atributos | HTML componente | ✅ Implementado | 🟢 BAIXA | MANTER componente |
| **V99** | 8.15 | Algoritmo decisório integrado (3 níveis interativo) | HTML/JS interativo | ✅ Implementado | 🟢 BAIXA | MANTER componente interativo |

**Totais por tipo**:
- 🔴 ALTA: 8 briefs (V69, V74, V79, V81, V86, V87, V93) + V80 (depende de V79+V81). Conta efetiva = **8 alta**.
- 🟡 MÉDIA: 4 briefs (V73 considerando overlay, V77 opcional, V89 opcional, V91, V94). Conta efetiva = **5 média** (somando V77/V89 opcionais + V91/V94 gráficos + V73 overlay).
- 🟢 BAIXA: 20 briefs (todos SVG autorais conceituais + componentes HTML/CSS).

**Recálculo conforme tabela**: 8 🔴 ALTA + 5 🟡 MÉDIA + 20 🟢 BAIXA = 33 briefs.

---

## 2. Pontos didáticos no HTML que descrevem achado visual SEM imagem (NOVOS CANDIDATOS)

Sample de trechos onde o HTML cita achado clínico **canonicamente visual** mas não tem figure/imagem associada. Critério: "descrever achado sem imagem é deixar vago" (Bauer, regra imagens reais).

| # | Página | Linha HTML aprox | Achado descrito | Imagem real ajudaria? | Recomendação |
|---|---|---|---|---|---|
| C1 | 8.1 | linha 131 | "discretamente hipocorado — tem palidez junto da icterícia" + "ponta de baço palpável (esplenomegalia duvidosa)" | 🟡 sim mas difícil (foto neonatal anonimizada com palidez+icterícia rara em CC) | **COBERTO por V69+V74** (faciais) e V77 opcional (sistêmica). Manter sem novo brief. |
| C2 | 8.4 | linha 668-701 | "colúria (urina escura, cor de Coca-Cola) + acolia (fezes esbranquiçadas, sem pigmento bilioso)" | 🔴 SIM — patognomônico de prova; fralda colúrica/fezes acólicas = imagem clássica | **NOVO CANDIDATO ALTO** — promover V89 de OPCIONAL → ALTA. Adicionar figure dedicada em 8.12 ou 8.4. |
| C3 | 8.6/8.7 | múltiplas | "padrão hemolítico: palidez + icterícia precoce" — clínico canônico | 🟡 COBERTO por V77 opcional | Manter V77 como opcional + tentar busca. |
| C4 | 8.9 | linha 1489 | "'bite cells' (células mordidas — área da hemácia onde o corpúsculo de Heinz foi removido pelo baço)" | 🟡 patognomônico microscópico — frequentemente acompanha Heinz em mesmo esfregaço CC | **NOVO CANDIDATO MÉDIO** — pedir buscador-imagem-medica-bauer pra **priorizar esfregaço de G6PD com Heinz E bite cells visíveis no mesmo campo** ao buscar V81 (2-em-1). |
| C5 | 8.9 | linha 1460 | "esferócitos no esfregaço — hemácias densas, hipercrômicas, sem zona central pálida" | 🔴 SIM — COBERTO por V79; ideal que a imagem traga **comparativo hemácias normais ao lado** | **REFINAR BRIEF V79** — preferir esfregaço com esferócitos E hemácias normais lado-a-lado pra contraste didático. |
| C6 | 8.7 | linha 1144 | "anemia profunda + hidropsia fetal + óbito intraútero" / "BT > 4 mg/dL no sangue de cordão" | 🟢 não — descrição de extremo, foto seria sensacionalista | NÃO buscar — manter texto. |
| C7 | 8.12 | linha 1962-1990 | "colestase declarada: colúria + acolia" — texto desenvolve mas sem imagem | 🔴 SIM — duplica C2 | **NOVO CANDIDATO** confirmado: V89 promover ALTA + adicionar figure em 8.12. |
| C8 | 8.13 | linha 2174 | "Bebê com fralda mínima, sem roupa, sem cobertor. Olhos protegidos com tampão." | 🔴 SIM — COBERTO por V93 | Manter V93 ALTA. |
| C9 | 8.15 | resolução Eusébio | Card de fechamento textual sem imagem clínica nova | 🟢 não — V97 é componente de síntese, reusar V69/V74 não agrega | NÃO buscar — componente HTML basta. |
| C10 | 8.8 | linha 1313 | "esferócito no esfregaço de sangue periférico" como achado-chave ABO | 🔴 COBERTO por V79 reusado em 8.8 | Confirmar cross-reuso V79→8.8 via componente `.didax-imagem-painel-comparativo` (já implementado). |
| C11 | 8.4 | linha 576 | "BD > 1 mg/dL ou > 20% da BT + sinais de colestase (colúria/acolia)" como critério-4 | 🟡 SIM (duplica C2) | Considerar cross-reuso V89 em 8.4 quando localizada. |
| C12 | 8.6 | "Coombs direto/indireto" | 🟢 não — Coombs é tubo de ensaio com aglutinação; SVG autoral em V76 footer já cobre conceitualmente | Manter SVG. |
| C13 | 8.5 | Kramer texto progressão craniocaudal | 🔴 SIM — V73 é esquema autoral; V74 (foto real) é o pareamento didático ideal | Confirmar **layout pareado** V73 (esquema) + V74 (foto) lado-a-lado na 8.5 (atualmente V74 está em figure separada após V73). |
| C14 | 8.7 | "tubos de ensaio com aglutinação visível" (descrição V76 footer) | 🟢 não — abstrato, SVG basta | Manter SVG V76. |

**Síntese seção 2**: **2 candidatos NOVOS confirmados** que merecem promoção:
- **V89** (colúria + acolia) — promover **OPCIONAL → ALTA** + adicionar `<figure>` dedicada em 8.12 (e considerar cross-reuso em 8.4 critério-4).
- **Refinamento V81** — pedir buscador priorizar esfregaço G6PD com **Heinz E bite cells no mesmo campo** (2-em-1, cobre achado C4).
- **Refinamento V79** — preferir comparativo esferócitos + hemácias normais.
- **Confirmar pareamento V73+V74** lado-a-lado na 8.5.

---

## 3. Recomendação final por brief — LISTA PRIORIZADA

### 🔴 BUSCAR REAL — ALTA prioridade (8 buscas obrigatórias para Fase 2)

1. **V69** — RN ictérico zona 1 Kramer (face+pescoço). Fonte primária: Wikimedia Commons "neonatal jaundice". Anonimização facial respeitada. Status: 8.2 skeleton ativo.
2. **V74** — RN com icterícia avançada zona 3-4 Kramer. Fonte: Wikimedia/DermNet NZ. Pareamento didático com V73 (esquema autoral). Status: 8.5 skeleton ativo.
3. **V79** — Esfregaço com esferócitos (microscopia Romanowsky). Refinar brief: preferir comparativo com hemácias normais. Fonte: Wikimedia "hereditary spherocytosis blood smear" / ASH ImageBank. Cross-reuso em 8.9. Status: 8.8 skeleton ativo.
4. **V81** — Esfregaço com corpúsculos de Heinz (coloração supravital azul de cresil). Refinar brief: priorizar campo com **Heinz E bite cells visíveis** (2-em-1). Fonte: Wikimedia "Heinz bodies" / ASH. Status: 8.9 skeleton ativo.
5. **V86** — USG abdominal com sinal cordão triangular (atresia vias biliares). **ALTO RISCO INCONCLUSIVO** — Radiopaedia bloqueia bot; usar PMC + LearningRadiology como alternativas. Status: 8.12 skeleton ativo.
6. **V87** — Biópsia hepática (HE) com plugs de bile + fibrose portal + proliferação ductal. **ALTO RISCO INCONCLUSIVO** — literatura paga; tentar Wikimedia + PMC patologia open-access + ASCP atlas. Status: 8.12 skeleton ativo.
7. **V93** — RN sob fototerapia em UTIN (LED azul, fralda mínima, tampão ocular). **ALTA DISPONIBILIDADE** — Wikimedia "neonatal phototherapy" + CDC PHIL. Status: 8.13 skeleton ativo.
8. **V89** (promoção de OPCIONAL → ALTA) — RN com colúria + acolia (fralda comparativa). Fonte: Wikimedia + DermNet + PMC pediatria. Clássico de prova de residência. Status: **NÃO IMPLEMENTADO no HTML** — adicionar figure novo em 8.12 (e considerar cross-reuso em 8.4 critério-4).

### 🟡 BUSCAR REAL — MÉDIA prioridade (3 buscas — aceitar INCONCLUSIVO sem bloquear release)

9. **V77** (opcional declarado) — RN com icterícia + palidez + esplenomegalia (hemólise isoimune grave). Fonte: Wikimedia/DermNet. **Fallback aceitável**: manter SVG V76 ampliado conforme brief original. Status: 8.7 skeleton ativo.

### 🟡 GRÁFICO CANÔNICO — decisão de via (2 briefs)

10. **V91** — Gráfico AAP 2004 (3 curvas, canon BR de prova). **Decisão**: AAP 2004 é gráfico protegido. **Via preferida = RECONSTRUIR SVG CC** autoral fiel (eixos canônicos, 3 curvas com cores AAP, legenda) + cross-link AAP institucional pra ver original. Status: 8.13 placeholder `aap-chart__brief`. Pareado com V92 (laudo dual AAP 2022).
11. **V94** — Nomograma de Bhutani 1999 (4 zonas + P40/P75/P95). **Decisão**: Bhutani 1999 protegido. **Via preferida = RECONSTRUIR SVG CC** autoral fiel; tentar busca Wikimedia/Open Pediatrics como sondagem secundária. Status: 8.14 placeholder `aap-chart__brief`.

### 🟢 MANTER SVG AUTORAL — NÃO buscar (9 briefs SVG conceituais)

V68 (BHE conceito), V70 (tripé fisiológico mecanismo), V73 (zonas Kramer esquema — pareado com V74 foto), V75 (árvore imune × não-imune fluxograma), V76 (mecanismo Rh gestacional — V77 opcional reforça), V78 (mecanismo ABO + cascata diagnóstica), V85 (mecanismo aleitamento cross-reuso V70 com badge), V90 (mecanismo fototerapia luz→capilar→excreção), V95 (sequência terapêutica fluxograma).

**Justificativa**: todos descrevem mecanismos abstratos (atravessar barreira, conversão molecular, sensibilização imune através de gestações, fluxograma decisório). Foto real seria sub-ótima — esquema didático autoral em paleta Bauer é pedagogicamente superior.

### 🟢 MANTER COMPONENTE HTML/CSS/JS — NÃO buscar (13 componentes)

V67 (vinheta clínica Eusébio), V71 (tabela 5 critérios), V72 (B49 checklist), V80 (painel comparativo esferócito×Heinz — depende de V79+V81 reais), V82 (fluxograma 4 perguntas), V83 (B50 4 mini-casos), V84 (painel leite × aleitamento), V88 (fluxograma Kasai), V92 (painel AAP 2004 × 2022 `.bauer-revisable`), V96 (tabela exsanguineotransfusão), V97 (resolução Eusébio card), V98 (tabela síntese 9 subtipos), V99 (algoritmo integrado interativo).

**Justificativa**: componentes textuais/tabulares/interativos — imagem não substitui, complementa apenas via reuso de V69/V74/V79/V81 nos painéis aplicáveis (V80 já depende de V79+V81).

---

## 4. Riscos por brief (alto risco INCONCLUSIVO baseado em fontes CC mapeadas)

Conforme `docs/pipeline-imagens-reais.md` §3 (riscos a priori) + catálogo `reference-busca-imagens-medicas-metodo`:

| Brief | Risco | Causa principal | Mitigação sugerida |
|---|---|---|---|
| **V79** (esferócitos) | 🟡 médio | ASH ImageBank exige registro free; Wikimedia tem "hereditary spherocytosis blood smear" disponível | Buscador-imagem-medica-bauer deve tentar Wikimedia primeiro; ASH em backup. |
| **V81** (Heinz) | 🟡 médio | Mesma classe ASH/Wikimedia | Idem V79. Refinamento crítico: priorizar imagem com Heinz + bite cells. |
| **V86** (USG cordão triangular) | 🔴 alto | Radiopaedia bloqueia bot HTTP 403 (pipeline §3); patognomônico em CC raro | Fontes alternativas: PMC pediatria open-access, LearningRadiology.com, Wikimedia ("biliary atresia ultrasound"). Se INCONCLUSIVO, manter skeleton + escalonar ilustrador na próxima sessão. |
| **V87** (biópsia plugs bile + fibrose portal + proliferação ductal) | 🔴 alto | Literatura histopatológica predominantemente paga; achados específicos | Tentar PMC patologia hepática pediátrica + Wikimedia "biliary atresia histology". Se INCONCLUSIVO, escalonar ilustrador (esquema autoral). |
| **V91** (AAP 2004) | 🔴 alto | Gráfico AAP protegido por copyright; reprodução fiel exige autorização | **Não buscar literal — reconstruir SVG CC autoral** com eixos canônicos. Cross-link AAP institucional pra original. |
| **V94** (Bhutani 1999) | 🔴 alto | Mesmo padrão V91 (publicação Pediatrics protegida) | **Reconstruir SVG CC autoral** com 4 zonas + percentis P40/P75/P95. Tentar Wikimedia/Open Pediatrics em paralelo. |
| **V69, V74, V77, V89** (fotos clínicas RN) | 🟡 médio | Consentimento pediátrico para identificação facial limita CC; anonimização necessária | Wikimedia "neonatal jaundice" tem entradas; DermNet NZ tem categoria neonatal; PMC pediatria open-access. Anonimizar manualmente se necessário (mascarar face). |
| **V93** (fototerapia UTIN) | 🟢 baixo | Wikimedia + CDC PHIL têm fartura de fotos de fototerapia neonatal CC | Alta probabilidade QUALIFICADA. |

**Resumo de risco**:
- ALTO RISCO INCONCLUSIVO: V86, V87 (achados patognomônicos raros em CC) + V91, V94 (gráficos protegidos → reconstrução SVG CC é a via correta).
- MÉDIO: V69, V74, V77, V79, V81, V89 (busca CC viável; possíveis ajustes de anonimização).
- BAIXO: V93 (alta disponibilidade CC).

**Marco de aceite** (conforme pipeline §4): ≥ 70% QUALIFICADAS = aceite parcial OK; ≥ 90% = verde. Pra M8 são 8 ALTA + 1 MÉDIA opcional + 2 gráficos reconstruíveis = **11 entregas**. Marco verde = ≥ 10 QUALIFICADAS. Marco amarelo = ≥ 8 QUALIFICADAS.

---

## 5. Ajustes recomendados ao orquestrador antes da Fase 2

### Ajustes ao prompt-final para o buscador-imagem-medica-bauer M8

1. **Promover V89** de OPCIONAL → OBRIGATÓRIA ALTA (justificativa: colúria/acolia é patognomônico clássico de prova; HTML ainda não tem figure — adicionar em 8.12).
2. **Refinar V79** brief: preferir comparativo esferócitos + hemácias normais lado-a-lado (didática de contraste).
3. **Refinar V81** brief: priorizar esfregaço com Heinz + bite cells no mesmo campo (2-em-1; cobre achado C4 da seção 2).
4. **V91 e V94**: assumir reconstrução SVG CC como via principal; busca de paper original CC apenas como sondagem secundária. Não é busca de "imagem real" stricto sensu — é trabalho de ilustrador-medico-bauer com referência canônica fiel.
5. **V73 + V74 layout**: confirmar pareamento lado-a-lado em 8.5 quando V74 chegar (esquema autoral + foto real = didática máxima Kramer).
6. **V80 painel comparativo**: depende crítico de V79+V81 chegarem. Se um INCONCLUSIVO, ajustar componente para mostrar 1 imagem + 1 esquema autoral.

### Total de buscas reais efetivas para Fase 2 do pipeline

- **Buscar foto/microscopia/USG real** (passar pro buscador): V69, V74, V77, V79, V81, V86, V87, V89, V93 = **9 buscas**.
- **Reconstruir SVG CC autoral** (passar pro ilustrador-medico-bauer ou tratar no embed Fase 3): V91, V94 = **2 reconstruções**.
- **Manter intocado**: 20 SVGs autorais já implementados + 11 componentes HTML/CSS/JS já implementados (parcialmente — V80 depende, V97-V99 já OK).

---

## 6. Sumário executivo final

- **33 briefs total** mapeados V67-V99.
- **8 🔴 ALTA + 5 🟡 MÉDIA + 20 🟢 BAIXA** (contagem inclui V89 promovido ALTA + V91/V94 reconstrução média + V77 opcional média + V73 overlay média).
- **2 candidatos NOVOS** identificados em sample de 14 trechos didáticos: V89 promovido a ALTA (colúria/acolia ausente do HTML) + refinamento V81 (Heinz + bite cells 2-em-1).
- **Recomendação final = buscar 9 imagens reais** (V69, V74, V77, V79, V81, V86, V87, V89, V93) **+ reconstruir 2 SVGs CC fiéis** (V91 AAP 2004, V94 Bhutani 1999) = 11 entregas para a Fase 2 do pipeline.
- **Skeletons confirmados no HTML**: V69, V74, V77, V79, V81, V86, V87, V93 (8 figure-skeletons) + V91, V94 (2 placeholders gráficos). **V89 ausente no HTML** — embed novo requerido em 8.12.
- **Riscos altos**: V86 (USG cordão triangular), V87 (biópsia atresia), V91/V94 (gráficos protegidos → reconstrução é a via correta).
- **Riscos baixos**: V93 (fototerapia, alta disponibilidade CC).
- **Marco de aceite verde**: ≥ 10/11 QUALIFICADAS.
