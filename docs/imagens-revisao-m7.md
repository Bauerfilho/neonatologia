# Revisão conteudística de imagens — M7 (TTRN + SAM + HPPN)

**Data**: 2026-05-26
**Fase**: 0 — read-only, input pra Fase 1 (priorização) e Fase 2 (busca paralela)
**Agente**: revisão conteudística (general-purpose, leitura apenas)
**Artefatos lidos**:
- `prompts-finais/prompt-final-aula7.md` (1836 linhas, 13 páginas, 17 briefs V)
- `modules/m7-ttrn-sam-hppn/index.html` (2110 linhas, implementação atual)
- `modules/m7-ttrn-sam-hppn/assets/img/BUSCA-IMAGENS.md` (laudo busca 2026-05-25)
- `roteiros/roteiro-aula7.md` (204 itens, contexto)
- 8 arquivos atualmente em `assets/img/` (2 RX Hellerhoff reais + 1 ilustração Canva Hood + 1 mecônio fralda + 4 SVG autorais já entregues)

---

## Sumário executivo

- **Briefs visuais declarados no prompt-final M7**: 17 (V49–V66 — V49/V51/V61/V65/V66 são componentes HTML, fora do escopo de imagem; V50/V53/V55/V62 são SVG autoral; V52/V54/V56/V57/V58/V59/V60/V63 são imagens reais buscáveis; V64 é painel composto reusando V52+V59+M6).
- **Briefs no escopo desta revisão** (11): V50, V52, V54, V55, V56, V57, V58, V59, V60, V62, V63 + slot V64-NORMAL como dependência cross-module.
- **Reais já embutidas no HTML (✅)**: 2 — V59 (RX SAM Hellerhoff) e V60 (RX pneumotórax Hellerhoff), ambas em `7.9`.
- **SVG autoral já INLINE no HTML (✅)**: 1 — V53 (mecanismo valvular, 3 painéis com SVG inline em `7.5`) — não é skeleton, está implementado.
- **Skeletons ainda abertos (⚠️)**: 7 declarados — V50 (`7.2`), V52 (`7.4`), V54 (`7.6`), V55 (`7.7`), V56 (`7.7`), V57 (`7.8`), V58 (`7.8`), V62 (`7.11`) + 2 slots de V64 em `7.12` (TTRN + SDR cross-reuso + Normal cross-reuso).
- **V63** (iNO setup): declarado OPCIONAL no prompt-final §7.11 — nem está renderizado como skeleton no HTML atual (omitido cirurgicamente).

**Priorização final (ver §3)**:
- 🔴 **ALTA** (achado patognomônico visualmente, prosa não substitui): 1 brief — V52.
- 🟡 **MÉDIA** (imagem ajuda, mas SVG autoral premium também resolve): 2 briefs — V57 + V58.
- 🟢 **BAIXA** (SVG autoral é igual ou melhor que foto real): 6 briefs — V50, V54, V55, V56, V62, V63.

**Candidatos NOVOS a imagem real** (não estavam em briefs originais): 2 com viabilidade pedagógica real (ver §2). Outros 5 trechos descrevem achados clínicos sem imagem mas são pedagogicamente cobertos por prosa + diagramas/tabelas existentes (não justifica nova imagem).

**Recomendação Fase 2**: buscar **1 imagem real ALTA + 2 MÉDIAS = 3 imagens** prioritárias. Resto fica SVG autoral (ilustrador) ou prosa soberana.

---

## 1. Briefs declarados — tabela detalhada

| ID | Página | Brief (1 linha) | Tipo declarado | Status atual | Prioridade pedagógica | Sugestão final |
|----|--------|-----------------|----------------|--------------|----------------------|----------------|
| **V50** | 7.2 | Inversão epitelial fetal: secretar → reabsorver (2 painéis) | SVG autoral | SKELETON com brief detalhado | 🟢 BAIXA | **MANTER SVG AUTORAL** — fisiopato celular conceitual; SVG didático com setas + rótulos cobre infinitamente melhor que qualquer foto/microscopia possível. Foto histológica seria ruído visual. Prompt-final declarou SVG autoral desde o início. |
| **V52** | 7.4 | RX tórax TTRN clássica — cisurite + estrias do hilo + cardiomegalia discreta | Real (busca obrigatória) | SKELETON (BUSCA-IMAGENS B45 INCONCLUSIVO em CC; PMC tem mas é copyright restritivo) | 🔴 **ALTA** | **BUSCAR REAL — esforço extra na Fase 2** OU ESCALONAR ILUSTRADOR. Achado radiográfico patognomônico ("cisurite" é palavra-chave de prova, alta especificidade); descrever sem imagem fragiliza didática visual. Bauer já estabeleceu na regra: "igual descrever todos os achados de um raio x e nao colocar uma imagem... fica vago". Tentativas extras pra Fase 2: re-tentar Radiopaedia com headers User-Agent customizados, OpenI NLM (Open-i — biomedical image search NIH), Wikimedia category `X-rays of newborns` direta sem busca, OpenSubdb, Cases Journal e BMC open access. Se nada → SVG ilustrador com anotações superpostas (cobre didaticamente porque cisurite/estrias/cardiomegalia/hiperinsuflação se traduz em descrição textual exaustiva já presente no HTML §7.4). |
| **V54** | 7.6 | Foto RN em Hood/oxihood neonatal | Real (busca obrigatória) | SKELETON (BUSCA-IMAGENS B49 INCONCLUSIVO foto real; ilustração Canva baixada mas descartada por destoar estética Bauer) | 🟢 BAIXA | **MANTER SVG AUTORAL (ilustrador)** — equipamento didático, não achado clínico. Foto real CC neonatal em Hood é genuinamente rara (consentimento ético + raridade de fotografia institucional aberta). SVG Bauer em paleta `--neonato-primary` com setas de fluxo O₂ + monitor SpO₂ + contraste com CPAP de M6 = solução premium. Foto real só agregaria "realismo" sem ganho pedagógico (o conceito é "capacete plástico + fluxo O₂", não um achado a reconhecer). Ilustração Canva existente (`BNN-hood-oxihood-illustration.png`) é fallback de emergência se ilustrador não entregar a tempo. |
| **V55** | 7.7 | 3 mecanismos lesionais SAM (obstrução + pneumonite química + infecção) | SVG autoral | SKELETON com brief detalhado; cards `mec-sam` HTML já presentes mas sem SVG inline (texto-only) | 🟢 BAIXA | **MANTER SVG AUTORAL** — conceito didático abstrato (3 mecanismos simultâneos com elementos químicos + bactérias representadas pictoricamente). Foto real impossível (não existe modo de fotografar "pneumonite química inativando surfactante"). Ilustrador faz reuso do `<defs>` base de V53 — entrega modular, baixo custo marginal. |
| **V56** | 7.7 | Foto líquido amniótico meconial (fluido vs espesso) | Real (busca obrigatória) | SKELETON (BUSCA-IMAGENS B47 INCONCLUSIVO; proxy `BNN-meconio-passagem-fralda.jpg` baixado mas pedagogicamente errado — mecônio em fralda ≠ líquido amniótico tinto) | 🟢 BAIXA | **MANTER SVG AUTORAL (ilustrador)** — refinamento B-A7-05 do prompt requer GRADIENTE fluido/espesso (Grade I → II → III), exatamente o tipo de visual que SVG faz melhor que foto (controle didático das 3 graduações lado a lado). Foto real raramente captura os 3 graus simultaneamente; SVG ilustrador com 3 cubas/bolsas em gradiente verde-amarelo → verde-marrom → "pea soup" é solução pedagogicamente superior. Proxy mecônio-em-fralda descartado corretamente. |
| **V57** | 7.8 | Foto RN banhado em mecônio (pele + coto + unhas tintos) | Real (busca obrigatória) | SKELETON (BUSCA-IMAGENS B48 INCONCLUSIVO; consentimento ético raramente obtido em CC) | 🟡 **MÉDIA** | **BUSCAR REAL — tentativa extra Fase 2, mas aceitar fallback ilustrador** . Foto real em CC tem alto valor didático porque impregnação cutânea é achado clínico visual que aluno precisa **reconhecer** (não só descrever). Mas SVG ilustrador autoral com 3 elementos rotulados (pele tinta + coto tinto + unha alaranjada) cobre pedagogicamente. Tentativas extras pra Fase 2: OpenI NLM `meconium stained newborn`, busca Bing/Google CC-filter por `"neonatal meconium impregnation skin"` com `cc_publicdomain,cc_attribute,cc_sharealike`, banco DermNet NZ (raramente, mas cabe verificar), arquivo institucional FIOCRUZ/UNIFESP open. Se nada → ilustrador SVG (cobertura aceitável). |
| **V58** | 7.8 | Detalhe unha alaranjada OU coto umbilical tinto | Real (busca obrigatória) | SKELETON (BUSCA-IMAGENS B48 mesmo escopo de V57 — INCONCLUSIVO) | 🟡 **MÉDIA** | **BUSCAR REAL — secundário a V57** OU FALLBACK ILUSTRADOR. Detalhe close-up tem valor didático (achado pequeno mas pontual em prova: "unha alaranjada" é critério clínico canonicamente cobrado). Se a busca extra de V57 encontrar qualquer foto que inclua close-up de unha/coto, atende V58 também. Senão, SVG ilustrador zoom de unha + coto serve. |
| **V59** | 7.9 | RX tórax SAM clássica — grosseiro + hiperinsuflação | Real (busca obrigatória) | ✅ **REAL JÁ EMBUTIDA** — `BNN-rx-sam-grosseiro-hellerhoff.jpg` (Wikimedia CC BY-SA 4.0, Hellerhoff, 1275×1092 px, 187 KB). HTML linha 1277 com `<figure class="figure-clinical">` + `<figcaption>` canônica completa. | — | **MANTIDA** — implementação impecável, attribution canônica, alt text didático. Sem ação pendente. |
| **V60** | 7.9 | RX tórax SAM complicado com pneumotórax (opcional) | Real (busca obrigatória opcional) | ✅ **REAL JÁ EMBUTIDA** — `BNN-rx-pneumotorax-neonato-hellerhoff.jpg` (Wikimedia CC BY-SA 4.0, Hellerhoff, 1463×1301 px, 99 KB). HTML linha 1311 com `<figure class="figure-clinical">` + `<figcaption>` canônica completa. | — | **MANTIDA** — implementação impecável. Sem ação pendente. Bônus didático: cobre refinamento B-A7-06 (critério de drenagem pneumotórax hipertensivo). |
| **V62** | 7.11 | Esquema shunt D→E persistente HPPN (variação patológica M4 §4.5) | SVG autoral cross-module | SKELETON; cross-`<defs>` declarado com M4 §4.5 (decisão S38 dossiê A7) | 🟢 BAIXA | **MANTER SVG AUTORAL** — diagrama de circulação cardíaca patológica. Foto real impossível (circulação interna não fotografável). SVG modular reaproveitando `<defs>` de M4 = entrega de baixo custo + integridade visual cross-module + permite anotações didáticas (badge "RN PÓS-NASCIMENTO" + setas "shunt D→E mantido" + valores SpO₂ MSD 95%/MI 85%). Prompt-final declarou desde o início. |
| **V63** | 7.11 | Foto setup iNO bedside (ventilador + módulo INOmax) — OPCIONAL | Real (busca obrigatória opcional) | NÃO RENDERIZADO no HTML atual (omitido cirurgicamente; BUSCA-IMAGENS B50 INCONCLUSIVO em CC; brief original já declarava opcional) | 🟢 BAIXA | **OMITIR** (mantém status quo) OU **MANTER SVG AUTORAL (esquema bedside)** se ilustrador tiver capacidade marginal. V63 foi declarado opcional no prompt-final §7.11 explicitamente. Checagem Bauer da §7.11 está APROVADA-com-expansão — texto cobre dose canônica 20 ppm + faixa segura 15-30 + risco metahemoglobinemia > 40 + critério de resposta sem precisar de imagem. Esquema SVG seria "nice-to-have", nunca essencial. |
| **V64-TTRN** (slot) | 7.12 | Reuso interno V52 no painel 2×2 | Reuso interno | SKELETON (depende de V52 ser entregue) | 🔴 **ALTA (transitivo de V52)** | **CASCATA DE V52** — assim que V52 for resolvido (busca real OU ilustrador SVG), este slot herda automaticamente o mesmo arquivo via `<img src>` reutilizado. Sem ação direta extra. |
| **V64-SAM** (slot) | 7.12 | Reuso interno V59 no painel 2×2 | Reuso interno | ✅ **JÁ REUSADA** — HTML linha 1790 usa `BNN-rx-sam-grosseiro-hellerhoff.jpg` cross-page interno | — | **MANTIDA** |
| **V64-SDR** (slot) | 7.12 | Cross-reuso M6 §6.5 (`BNN-rx-sdr-irds-haggstrom.png`) | Cross-module reuso | SKELETON (asset existe em M6, só falta path correto + attribution cross-module no HTML; precedente S37) | 🟡 MÉDIA (transitivo da decisão de embed) | **EDIT CIRÚRGICO (não busca)** — Fase 3 do pipeline substitui skeleton por `<img src="../m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-rx-sdr-irds-haggstrom.png">` com attribution cross-module. Não requer busca nova. |
| **V64-NORMAL** (slot) | 7.12 | Cross-reuso M6 (RX normal neonatal — pendente em M6 B34 INCONCLUSIVO) | Cross-module reuso | SKELETON (asset não existe em M6 ainda — escalado a ilustrador) | 🟡 MÉDIA (escalado a ilustrador M6) | **AGUARDAR ILUSTRADOR M6** — fora do escopo do buscador M7. Se ilustrador entregar RX normal autoral em M6 durante Fase 2, este slot herda. Senão, painel V64 fica 3/4 preenchido (TTRN cascata + SAM ✅ + SDR cross-reuso + ❌ Normal). Aceite parcial OK. |

**Totais por status**:
- ✅ Reais embutidas: **2** (V59, V60)
- ✅ SVG autoral inline: **1** (V53 mecanismo valvular)
- ⚠️ Skeletons restantes: **8** (V50, V52, V54, V55, V56, V57, V58, V62) + 3 slots V64 (TTRN-cascata, SDR-edit, NORMAL-aguarda-M6)
- ⊝ Não-renderizado (omitido): **1** (V63 opcional)

**Totais por prioridade da revisão**:
- 🔴 ALTA: **1** brief direto (V52) + 1 cascata (V64-TTRN herda V52) = 1 alvo de busca extra
- 🟡 MÉDIA: **2** briefs (V57 + V58 — tentativa única que cobre ambos) + 1 edit cirúrgico (V64-SDR) + 1 aguarda-M6 (V64-NORMAL)
- 🟢 BAIXA: **6** briefs (V50, V54, V55, V56, V62, V63) — todos para SVG autoral ou omitir

---

## 2. Pontos didáticos no HTML que descrevem achado SEM imagem associada

Análise de trechos do `index.html` M7 que descrevem achados clínicos visuais mas NÃO estão cobertos por nenhum `<img>` real, SVG inline, ou skeleton declarado. Filtro de candidatos a **NOVAS imagens** não previstas no brief original.

### Trechos avaliados (10 candidatos potenciais, 2 com mérito real)

| # | Trecho do HTML | Página | Achado descrito | Já tem imagem? | Candidato a nova imagem? |
|---|----------------|--------|-----------------|----------------|--------------------------|
| C1 | "linha de cisura evidenciada à direita + congestão peri-hilar + área cardíaca normal" (linha 120, 141, 167) | 7.1 (caso João) | RX TTRN parcialmente descrita | ❌ Não — caso João abre vinheta sem imagem própria. RX completa fica em 7.4 (V52). | **NÃO** — duplicaria V52. Reservar pra resolução em 7.4/7.13. |
| C2 | "FR 80 ipm" + "SatO₂ 85%" + "Hood FiO₂ 40%" (linha 162) | 7.1 (vinheta visual João) | Dados clínicos do caso paradigma | ✅ Coberto pelo componente `joao-vinheta` (V49 — micro-dados visuais com ícones) | **NÃO** — componente HTML autoral cobre. |
| C3 | "rolha de mecônio na traqueia" + "Laringoscópio + aspiração traqueal direta" (linha 1115-1116) | 7.8 | Aspiração traqueal direta de mecônio sob laringoscopia | ❌ Não — descrito em prosa, sem imagem | **NÃO RECOMENDADO** — procedimento de reanimação detalhado vive em M3 §3.10 (fonte canônica reanimação, cross-link explícito no texto). Duplicar imagem aqui violaria DRY da plataforma + risco de inconsistência. M3 §3.10 é onde a imagem real/SVG cabe, se cabe em algum lugar. |
| C4 | "pneumotórax pequeno e estável... toracocentese de alívio + dreno torácico" (linha 1303-1305) | 7.9 | Procedimento drenagem pneumotórax neonatal | ❌ Não — só descrito em prosa (refinamento B-A7-06) | 🟡 **CANDIDATO FRACO** — imagem real de toracocentese neonatal em CC é viável (Wikimedia tem alguns), mas pedagogicamente o aluno de residência geral precisa **saber QUANDO drenar**, não COMO drenar (procedimento técnico de UTI). Recomendação: omitir. Se ilustrador tiver folga, SVG esquemático do "sítio de inserção do dreno em 4º-5º EIC linha axilar média" agrega marginalmente — mas é nice-to-have, não gap pedagógico. Não escalar. |
| C5 | "tórax aparece insuflado" (ectoscopia SAM, linha 1267) | 7.9 | Inspeção visual de tórax SAM hiperinsuflado | ❌ Não — descrição verbal | **NÃO** — achado visual estático que prosa cobre. RX SAM (V59) já dá a hiperinsuflação radiograficamente; foto de ectoscopia não agrega marginalmente. |
| C6 | "transiluminação torácica" (linha 1307) | 7.9 | Diagnóstico de pneumotórax à beira do leito por transiluminação | ❌ Não — só descrito | 🟡 **CANDIDATO FRACO** — imagem de transiluminação positiva em neonato é didaticamente impactante (foto-flagrante de um pneumotórax) e existe em CC (PMC casos clínicos open access tem alguns). Mas é técnica de bedside emergencial específica de UTIN — fora do core da residência geral. Recomendação: **omitir** salvo se Fase 2 fizer essa busca como "bônus de timestamp" sem custo extra. Não escalar como prioridade. |
| C7 | "metahemoglobina sérica" (toxicidade iNO > 40 ppm, linha 1644, 1649) | 7.11 | Risco toxicidade iNO | ❌ Não | **NÃO** — laboratorial, não visual. |
| C8 | "Diferença ≥ 3% entre os dois pontos = sinal de shunt D→E significativo" + "teste do coraçãozinho" (linha 1627-1628) | 7.11 | Medição SpO₂ pré-ductal × pós-ductal | ✅ Coberto pelo brief V62 (esquema SVG com SpO₂ MSD 95% / MI 85% rotulado) + cross-link M4 §4.4 (fonte canônica do teste) | **NÃO** — V62 cobre quando entregue. |
| C9 | "cianose persistente, refratária a oxigenoterapia simples" (linha 1607) | 7.11 | Cianose central HPPN | ❌ Não — descrição clínica | 🟢 **CANDIDATO REAL** ✨ — cianose central em neonato é achado clínico **visualmente patognomônico** (coloração azul-acinzentada de lábios/perioral/extremidades em RN) e existe em CC: Wikimedia (`Cyanosis newborn`, raros casos), DermNet, PMC casos clínicos HPPN com fotos pré-tratamento. **Candidato a imagem real NOVA** com mérito pedagógico real — a banca cobra "cianose persistente refratária" como sinal canônico HPPN, e ver a cor é diferente de ler "azul-acinzentada". Recomendação: **adicionar à lista de busca Fase 2 como BUSCA OPORTUNÍSTICA MÉDIA** (não bloqueante; se buscador encontrar em CC sem esforço extra, embute em §7.11 antes de V62). Privacidade: imagens neonatais de cianose costumam ter face anonimizada nativamente em literatura aberta. |
| C10 | "padrão retículo-granular difuso" + "vidro moído" + "aerobroncograma" + "pulmão pequeno" (linha 1757, 1851) | 7.12 (síntese SDR cross-reuso) | RX SDR | ✅ Coberto por V64-SDR slot (cross-reuso M6 §6.5 — `BNN-rx-sdr-irds-haggstrom.png` existe em M6) | **NÃO** — só falta edit cirúrgico Fase 3 para substituir skeleton. |

### Candidatos NOVOS finais (não estavam em briefs originais)

| # | Trecho | Página | Brief proposto | Prioridade |
|---|--------|--------|----------------|------------|
| **N1** | "cianose persistente, refratária a oxigenoterapia simples" (HPPN clínica) | 7.11 | Foto clínica de RN com **cianose central** (lábios/perioral/extremidades azulados), antes de iNO ou similar. Fontes: Wikimedia Commons `Cyanosis`, PMC HPPN case reports open access, DermNet NZ. CC obrigatória. Anonimização facial nativa preferível. | 🟡 **MÉDIA — BUSCA OPORTUNÍSTICA** (Fase 2 incluir se sem custo extra; não bloqueante) |
| **N2** | "transiluminação torácica" (diagnóstico bedside pneumotórax) | 7.9 | Foto clínica de transiluminação positiva neonatal (luz visível através do tórax em região com ar livre). Fontes: PMC casos clínicos, Wikimedia. | 🟢 **BAIXA — opcional** (nice-to-have, omissível) |

Trechos C1-C8/C10 não justificam novas imagens — duplicariam briefs existentes, ou são conceituais sem achado visual, ou são procedimentos técnicos fora do core da residência geral.

---

## 3. Recomendação final por brief — lista priorizada

### 🔴 BUSCAR REAL — ALTA prioridade (1 brief)

- **V52 — RX TTRN clássica (`7.4`)** — esforço extra de busca na Fase 2. Tentativas extras pra Fase 2 (além do que B45 BUSCA-IMAGENS já fez):
  - OpenI NLM (Open-i biomedical image search): `transient tachypnea newborn x-ray`
  - Wikimedia Commons category direta `X-rays of newborns` (sem busca textual)
  - BMC Case Reports / Cases Journal CC BY (open access pediatric x-rays)
  - PubMed Central com filtro `image+open access+CC BY`
  - Cases Journal, JMCR, Open Pediatric Medical Journal
  - **Fallback definitivo**: SVG ilustrador anotado com cisurite + estrias + cardiomegalia visíveis e rotuladas. **Não é perda pedagógica grave** porque a §7.4 do HTML já cobre cada achado em prosa exaustiva (texto descreve "estrias lineares emergindo do hilo", "linha de cisura evidenciada", "cisurite") — exatamente o que a banca cobra textualmente.

### 🟡 BUSCAR REAL — MÉDIA prioridade (2 briefs principais + 2 oportunísticos)

- **V57 + V58 — RN banhado em mecônio + detalhe unha/coto (`7.8`)** — busca única (foto que cubra os dois achados serve aos dois slots). Tentativas extras Fase 2: OpenI NLM, Bing/Google CC-filter, DermNet, FIOCRUZ/UNIFESP arquivo institucional aberto. **Fallback ilustrador SVG aceitável** (cobertura pedagógica boa porque tabela contraste TTRN×SAM da §7.8 já lista "unha alaranjada + coto tinto + pele tinta" como critério verbal).
- **N1 — Cianose central HPPN (`7.11`) [NOVO]** — **busca oportunística** (não bloqueante). Wikimedia Commons + DermNet + PMC HPPN cases. Se buscador encontrar em CC, embute em §7.11 antes de V62. Senão, omitir sem prejuízo (prosa cobre).

### 🟢 MANTER SVG AUTORAL — não buscar real (6 briefs)

Justificativa pedagógica explícita pra cada um:

- **V50 — Inversão epitelial (`7.2`)**: conceito celular/fisiopatológico abstrato. SVG didático com 2 painéis (intraútero secretando vs pós-TP reabsorvendo) + seta central "início do TP = sinal de inversão" é **infinitamente mais didático** que qualquer microscopia/foto. Foto histológica seria ruído visual sem ganho pedagógico. Bauer regra: parcimônia — não escalar imagem real quando SVG é canonicamente superior.
- **V54 — Hood neonatal (`7.6`)**: equipamento didático, não achado clínico. Foto real CC genuinamente rara (consentimento + raridade institucional aberta). SVG Bauer em paleta `--neonato-primary` com setas de fluxo O₂ + monitor SpO₂ + contraste com CPAP nasal de M6 = solução premium e coerente esteticamente. Ilustração Canva `BNN-hood-oxihood-illustration.png` fica como fallback de emergência se ilustrador atrasar.
- **V55 — 3 mecanismos lesionais SAM (`7.7`)**: conceito didático abstrato (obstrução + química + infecção simultâneos). Não há foto possível de "pneumonite química inativando surfactante". Cards `mec-sam` HTML já presentes; ilustrador adiciona SVG modular reusando `<defs>` de V53.
- **V56 — Líquido amniótico meconial (`7.7`)**: refinamento B-A7-05 pede GRADIENTE fluido vs espesso (3 graduações). SVG ilustrador com 3 cubas em gradiente cor é pedagogicamente superior a foto real (foto raramente captura os 3 graus juntos). Proxy mecônio-em-fralda já descartado corretamente como erro pedagógico (mecônio em fralda ≠ líquido amniótico tinto).
- **V62 — Shunt D→E HPPN (`7.11`)**: diagrama de circulação cardíaca patológica. Não fotografável. SVG modular reusa `<defs>` de M4 §4.5 — cross-module structural, decisão S38 dossiê A7. Já planejado.
- **V63 — Setup iNO bedside (`7.11`)**: declarado OPCIONAL no prompt-final. Atualmente omitido cirurgicamente do HTML. Checagem Bauer da §7.11 está APROVADA-com-expansão sem este visual. Manter omitido. Se ilustrador tiver folga, esquema SVG bedside agrega marginalmente; sem ele, nenhuma perda pedagógica documentada.

### 📐 Edits cirúrgicos / aguarda M6 (V64 painel)

- **V64-SAM** ✅ já reusado.
- **V64-TTRN** — cascata automática quando V52 resolver.
- **V64-SDR** — Fase 3 edit cirúrgico embutindo path `../m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-rx-sdr-irds-haggstrom.png` + attribution cross-module. **Não requer busca nova.**
- **V64-NORMAL** — aguarda ilustrador M6 entregar SVG/RX normal autoral (B34 de M6 INCONCLUSIVO). Aceite parcial do painel V64 com 3/4 quadrantes prontos é OK no curto prazo.

### Resumo executivo Fase 2

**Imagens reais a buscar = 3 alvos**:
1. **V52** — RX TTRN (🔴 ALTA, esforço extra)
2. **V57 + V58** — RN banhado em mecônio (🟡 MÉDIA, busca única cobre os dois)
3. **N1** — Cianose central HPPN (🟡 MÉDIA, oportunística)

Demais 6 briefs (V50, V54, V55, V56, V62, V63) ficam pra `ilustrador-medico-bauer` ou omissão.

---

## 4. Cross-reuso oportunidades

### Da M7 → M8/M9

- **V59 (RX SAM Hellerhoff)** — pouco provável reuso em M8 (icterícia, fora de TTRN/SAM/HPPN). Sem oportunidade.
- **V60 (RX pneumotórax Hellerhoff)** — idem, pouco provável reuso em M8 ou M9 (ECN — abdome, não tórax).
- **V52 (RX TTRN, se buscada)** — útil em M7 §7.4 + M7 §7.12 (V64-TTRN cascata). M8/M9 não usam padrão TTRN.

### De M8/M9 → M7

- **M8 (icterícia neonatal)** — buscas paralelas de M8 podem encontrar fotos de RN com fototerapia, ictério visível, kernicterus — nenhuma reaproveitável diretamente em M7 (escopo respiratório).
- **M9 (ECN — bônus 1)** — ECN é dispneia/desconforto abdominal com pneumatose intestinal; RX abdominal, não torácica. Não reaproveitável em M7.

### Cross-module estrutural (M4/M6)

- **M6 → M7 V64-SDR**: ✅ ativo (cross-reuso `../m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-rx-sdr-irds-haggstrom.png` declarado, falta apenas edit cirúrgico Fase 3).
- **M6 → M7 V64-NORMAL**: pendente (depende ilustrador M6 entregar RX normal).
- **M4 → M7 V62**: cross-`<defs>` SVG planejado (decisão S38, escopo ilustrador). Sem ação Fase 2.
- **M3 §3.10 (reanimação) → M7 §7.8**: cross-link textual já presente no HTML; nenhuma imagem precisa ser duplicada.

### Oportunidade nova identificada

- **N1 (cianose central, se encontrada)** — pode ser cross-reusada em **M3 (reanimação — fluxograma de aspecto do RN)** e **M4 (teste do coraçãozinho — discriminação cianose central vs periférica)** se buscadores M3/M4 não tiverem imagem própria. Documentar no `BUSCA-IMAGENS.md` final como cross-reuso transversal candidato.

---

## Sumário final (formato requerido)

**M7 REVISÃO**: 11 briefs declarados (no escopo), **1** 🔴ALTA + **2** 🟡MÉDIA + **6** 🟢BAIXA, **2** candidatos NOVOS identificados (N1 cianose central com mérito real; N2 transiluminação omissível), recomendação final = **buscar 3 imagens reais na Fase 2** (V52 ALTA + V57/V58 conjunto MÉDIA + N1 cianose oportunística). Demais 6 ficam SVG autoral ou omissão. 2 reais (V59+V60) já embutidas impecavelmente. Painel V64 fica 3-4/4 quadrantes prontos via cascata/edit cirúrgico (V64-NORMAL aguarda ilustrador M6).
