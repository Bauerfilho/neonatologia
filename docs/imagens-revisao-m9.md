# Revisão conteudística de imagens — M9 (Bônus 1 · Enterocolite Necrosante)

**Data**: 2026-05-26
**Fase**: 0 — Revisão conteudística read-only (Pipeline Imagens Reais — M7+M8+M9)
**Agente**: Fase 0 / M9
**Modo**: READ-ONLY (apenas produz este documento)
**Artefatos auditados**:
- `prompts-finais/prompt-final-aula9.md` (1.680 linhas, 8 páginas, Bônus 1)
- `modules/m9-enterocolite-necrosante/index.html` (1.673 linhas, 8 páginas implementadas)
- `modules/m9-enterocolite-necrosante/assets/img/` — **vazio** (ausência de subpasta `img/` em `assets/`)
- `roteiros/roteiro-aula9.md` (297 linhas, 96 itens canônicos)

**Contexto crítico**: ECN é classicamente UMA DAS AULAS mais radiografia-dependentes do currículo neonatal. A página 9.5 declara textualmente que existe uma "**imagem de prova**" (pneumatose corte transversal, padrão bolhoso) — descrever esse achado canônico sem imagem é exatamente o anti-padrão que Bauer criticou ("igual descrever todos os achados de um raio x e nao colocar uma imagem… fica vago"). M9 é o **exemplo paradigmático** do problema que a pipeline existe pra resolver.

---

## 1. Briefs declarados V72 / V74 / V75 / V77 / V78 / V79

Estado em disco confirmado: **6 skeletons no HTML, 0 imagens reais**. Todos `<figure class="medfig" data-img-id="V*">` com `<div class="medfig__skeleton">` aguardando substituição.

| ID  | Página | Descrição (1 linha) | Tipo declarado | Status atual | Prioridade pedagógica | Sugestão final |
|-----|--------|---------------------|----------------|--------------|------------------------|----------------|
| **V72** | 9.4 | Foto clínica de distensão abdominal em RN prematuro com ECN (abdômen brilhoso, alças visíveis através da pele fina, eventual eritema/edema parede) | Foto clínica real (busca obrigatória) | SKELETON · sem imagem | 🟡 **MÉDIA** — clínica útil mas não-patognomônica; tríade clínica (distensão + vômito bilioso + sangramento retal) é o ouro pedagógico de 9.4, e a distensão clínica isolada é só 1 dos 3 vértices. **Sangramento retal** (sinal-chave canônico) NÃO tem brief de imagem associado — distensão isolada é menos crítica que pneumatose. Adicionalmente: foto clínica neonatal pediátrica tem risco ético (consentimento parental, anonimização facial). | **BUSCAR REAL — viável mas opcional**; aceitar SVG autoral ou ilustração se busca CC ficar inconclusiva |
| **V74** | 9.5 | RX abdome AP neonatal de ECN com **pneumatose intestinal corte transversal — padrão bolhoso** ("colar de pérolas pretas" margeando o contorno da alça) | RX neonatal real (busca obrigatória) | SKELETON · sem imagem | 🔴 **ALTA · CRÍTICA** — **a "imagem de prova"** declarada literalmente no prompt-final (linha 642) e no HTML (`<figcaption>` linha 814: "Esta é a imagem que tipicamente aparece nas questões BR"). Achado patognomônico radiográfico que **define ECN confirmada** (estágio IIA Bell-Walsh). Descrever colar-de-pérolas sem mostrar é o caso paradigmático do anti-padrão Bauer. | **BUSCAR REAL — CRÍTICO** |
| **V75** | 9.5 | RX abdome AP com **pneumatose linear/curvilíneo (corte longitudinal)** — padrão pontilhado radiolucente dissecando ao longo da parede da alça | RX neonatal real (busca obrigatória) | SKELETON · sem imagem | 🔴 **ALTA** — segundo padrão visual da pneumatose; a página 9.5 enfatiza que "o mesmo gás na parede, mas visto ao longo do eixo longitudinal, dá uma impressão visual diferente". Comparação 2 padrões (V74 transversal × V75 longitudinal) é didaticamente forte. Sem imagem, a comparação fica abstrata. | **BUSCAR REAL** |
| **V77** | 9.6 | RX abdome neonatal com **pneumoperitônio** — gás livre na cavidade peritoneal (ortostática: gás entre fígado e cúpula diafragmática; supino: sinal do futebol americano + falciforme delineado) | RX neonatal real (busca obrigatória) | SKELETON · sem imagem | 🔴 **ALTA · CRÍTICA** — pneumoperitônio é o **único critério radiográfico de cirurgia inequívoca em ECN** (estágio IIIB Bell-Walsh). Quiz Q2 da página 9.6 testa decúbito lateral esquerdo com raio horizontal como melhor incidência em prematuro instável — sem imagem, o aluno não internaliza a topografia do gás livre. | **BUSCAR REAL — CRÍTICO** |
| **V78** | 9.6 | RX abdome com **gás venoso portal / pneumoportia** — padrão **arborescente intra-hepático periférico** (ramificações finas radiolucentes seguindo veia porta até a periferia do fígado) | RX neonatal real (busca obrigatória) | SKELETON · sem imagem | 🔴 **ALTA · MAIS DIFÍCIL** — declarado no prompt-final como "**imagem rara e de alto valor didático** — vale persistência na busca em Radiopaedia + revisões BR open-access" (linha 791). Mnemônico literal "**portia de porta, pneumo de gás**" depende dessa imagem pra ter ancoragem visual. Diferencial fino aerobilia (central) × gás portal (periférico) é o detalhe R2 hospital top — sem imagem, aluno não vê a diferença de distribuição. | **BUSCAR REAL — persistência alta** |
| **V79** | 9.6 | RX abdome com **sinal de Rigler / dupla parede** — alça intestinal com contorno desenhado em ambos os lados (gás dentro + gás fora) | RX neonatal real (busca obrigatória) | SKELETON · sem imagem | 🔴 **ALTA** — sinal canônico de pneumoperitônio em supino. Importância clínica documentada: "critério radiográfico de pneumoperitônio **mesmo em posição supina sem outras incidências**" (HTML linha 1066). Em prematuro instável que não tolera mudança postural, Rigler na supina confirma perfuração — sem imagem, o aluno não treina o reconhecimento. | **BUSCAR REAL** |

**Resumo da priorização**:
- 🔴 **ALTA**: **5 briefs** (V74, V75, V77, V78, V79) — TODOS são padrões radiográficos canônicos de prova em ECN. Pneumatose (V74/V75) define o estágio IIA Bell-Walsh; pneumoperitônio (V77) define IIIB e indicação cirúrgica inequívoca; gás venoso portal (V78) escala IIA→IIB; Rigler (V79) é variante visual do pneumoperitônio em supino. Os 5 são exatamente o conteúdo que Bauer marcou como "achado clínico canonicamente visual fica vago sem a imagem real".
- 🟡 **MÉDIA**: **1 brief** (V72) — distensão clínica abdominal. Pedagogicamente útil (ancora a tríade clínica de 9.4) mas não-patognomônica. Foto clínica neonatal tem barreira ética (consentimento + anonimização). Aceitável escalar como SVG autoral se busca CC fracassar.

---

## 2. Pontos didáticos no HTML que descrevem achado SEM imagem

Sample de **10 trechos** densos em descrição radiográfica/clínica sem imagem associada. Todos confirmam o padrão: M9 carrega muito conteúdo visualmente narrado em texto puro, especialmente em 9.5 e 9.7.

### Trecho 1 — 9.5 "colar de pérolas pretas" (HTML linha 789)
> "Num corte transversal de uma alça intestinal, o gás na parede aparece como **bolhas pretas pequenas distribuídas ao longo da circunferência da alça**. Padrão de 'miçangas' ou '**colar de pérolas pretas**' margeando o contorno externo da alça vista de frente."

**Por que importa**: descrição altamente visual de padrão patognomônico. V74 cobre — mas hoje é skeleton.

### Trecho 2 — 9.5 padrão linear/curvilíneo (HTML linha 800)
> "O mesmo gás na parede, mas visto **ao longo do eixo longitudinal** da alça, dá uma impressão visual diferente — fica como uma **linha fina pontilhada / curvilínea radiolucente** dissecando ao longo da parede."

**Por que importa**: justamente a comparação transversal × longitudinal que V74+V75 deveriam viabilizar lado a lado.

### Trecho 3 — 9.5 gás intramural × luminal (HTML linha 867 — esse tem SVG esquemático autoral, V76)
> "Gás intramural **persiste** na mesma localização entre exames com intervalo de 6–12h (preso na parede). Gás luminal **mobiliza** — muda de posição, redistribui-se com peristalse residual."

**Status**: já ilustrado por SVG inline (`gas-compare__panel`) — V76 autoral aprovado. NÃO precisa imagem real adicional.

### Trecho 4 — 9.6 pneumoperitônio em supino (HTML linha 995)
> "Posição supina (preferida em prematuro): gás livre acumula sob a parede anterior do abdome → 'blackening' de toda a cavidade + visualização do **falciforme** (ligamento delineado pelo gás dos dois lados) + **sinal do futebol americano** (football sign — gás envolvendo todo o abdome desenhando o contorno oval)."

**Por que importa**: 3 sinais radiográficos distintos descritos em 1 parágrafo. Sem imagem, aluno memoriza nome mas não reconhece padrão. V77 cobre — hoje skeleton.

### Trecho 5 — 9.6 padrão arborescente da pneumoportia (HTML linha 1018)
> "**Padrão arborescente**: ramificações finas radiolucentes seguindo o trajeto dos ramos da veia porta intra-hepática. Pequenos canais escuros (gás) ramificando-se desde o hilo hepático até a periferia do fígado, como uma árvore radiolucente sobre o parênquima."

**Por que importa**: o mnemônico literal "portia de porta, pneumo de gás" — preservado como bordão canônico — perde força sem ancoragem visual. V78 cobre — hoje skeleton.

### Trecho 6 — 9.6 diferencial aerobilia × gás portal (HTML linha 1031)
> "Atinge '**até a periferia do fígado**', chega aos ramos venosos mais distais perto da cápsula hepática. Sinal de **gravidade** em ECN."

**Por que importa**: diferencial fino central × periférico testado em Q3 do quiz 9.6. **Já tem SVG autoral (V81) declarado mas não vejo `<figure>` SVG inline implementado** — apenas asides comparativos textuais. Provável gap secundário do Executor (fora escopo desta revisão; nota apenas).

### Trecho 7 — 9.7 Bell-Walsh radiográficos por estágio (HTML tabela linhas 1216–1264)
> "IA: Normal OU dilatação leve de alças, íleo discreto / IIA: Dilatação de alças, íleo, **pneumatose intestinal definitiva** / IIB: Idênticos a IIA **+ ascite + pneumoportia (gás venoso portal)** / IIIB: Idênticos a IIIA **+ pneumoperitônio**"

**Por que importa**: 4 padrões radiográficos discriminadores cobertos em 4 sublinhas. Sem mini-thumbnails ao lado de cada linha (que poderiam reusar V74/V77/V78), aluno decora texto mas não vê escalada visual. **Oportunidade secundária**: na Fase 3 (embed), considerar reuso de V74/V77/V78 como mini-thumbnails na tabela Bell-Walsh — cross-reuso intra-aula (mesmo padrão que M7 §7.12 fez com RX SAM cross-reuso).

### Trecho 8 — 9.4 tríade clínica e sangramento retal (HTML linhas 553–663)
> "A tríade clínica canônica de ECN: distensão abdominal + vômitos biliosos + sangramento retal em prematuro alimentado. … **Sangramento retal isolado em RNPT = ECN até prova em contrário.**"

**Por que importa**: sangramento retal é o **sinal-chave** da página (Q1 do quiz 9.4 testa exatamente isso). **NÃO existe brief de imagem associado** ao sangramento retal — V72 só cobre distensão. Sangramento retal em fralda neonatal seria foto eticamente sensível (consentimento parental, identificação). Decisão razoável: aceitar como conteúdo textual canônico — não escalar.

### Trecho 9 — 9.5 evolução IIA → IIIB (HTML linha 875)
> "Essas crianças que têm uma perfuração apresentam pneumoperitônio. … É a transição Bell-Walsh do estágio IIA (pneumatose) pra IIIB (pneumoperitônio + perfuração)."

**Por que importa**: encadeia 9.5 → 9.6 → 9.7. Sem imagens reais V74 e V77 lado a lado em algum painel comparativo, a "evolução" fica abstrata. Painel comparativo IIA × IIIB seria reuso visual potente (não declarado em brief, mas viável na Fase 3 com V74 + V77 já buscados).

### Trecho 10 — 9.8 alça sentinela / persistent loop sign (HTML linha 1524)
> "**Alça intestinal fixa** em radiografias seriadas — 'persistent loop sign' / **alça sentinela** (alça que não muda de posição entre 2 RX com intervalo de 24–36h)."

**Por que importa**: critério radiográfico de indicação cirúrgica **relativa** (laudo dual D04). Sinal canônico de prova R2. **NÃO tem brief de imagem associado** — só descrição textual no laudo dual. Candidato NOVO opcional (ver seção 3).

---

## 3. Candidatos NOVOS possíveis (fora dos 6 skeletons declarados)

Avaliação parcimoniosa — só sugerir se enriquecer didaticamente sem inflar volume.

| Candidato | Página | Justificativa pedagógica | Viabilidade CC | Decisão sugerida |
|-----------|--------|--------------------------|----------------|------------------|
| **Alça sentinela / persistent loop sign** | 9.8 | Critério cirúrgico relativo canônico (1 das 8 relativas do laudo dual D04). Visual: alça intestinal fixa em 2 RX seriadas — comparação lado a lado seria didaticamente potente. | Baixa-média — Radiopaedia tem mas comparação seriada em open access é raro. | **PRÓXIMA SESSÃO** — não bloqueia M9 atual; brief opcional pra reabertura |
| **Sinal do futebol americano (football sign) — pneumoperitônio supino isolado** | 9.6 | A descrição em 9.6 lista 3 padrões de supino (blackening + falciforme + futebol americano). Se V77 trouxer 1 imagem que mostre TODOS os 3 em um caso só (ortostática + supino), 1 imagem cobre — não precisa candidato novo. Se V77 trouxer só ortostática, vale brief secundário pra football sign. | Média — Hellerhoff (Wikimedia) é conhecido por ter pneumoperitônio neonatal em várias incidências. | **SOLICITAR AO BUSCADOR**: priorizar V77 que cubra múltiplas incidências em um único caso (ortostática + supino se possível); SE não disponível, abrir V77b complementar |
| **Foto cirúrgica de alça necrótica (espécime intra-op)** | 9.8 ou 9.6 | A página 9.8 fala em "ressecção do segmento necrótico". Imagem real de alça necrótica intra-op enriqueceria a conceptualização da gravidade. | Baixa — fotos cirúrgicas neonatais com identificação parental são raras em CC. | **FORA DE ESCOPO M9** — não declarado em brief, conteúdo textual de 9.8 já carrega o conceito. NÃO escalar |
| **Mini-thumbnails de V74/V77/V78 na tabela Bell-Walsh (9.7)** | 9.7 | Reuso intra-aula das imagens já buscadas, integradas na tabela como mini-thumbnails alinhadas às colunas radiográficas IIA, IIB, IIIB. Precedente: M7 §7.12 fez cross-reuso de RX SAM Hellerhoff. | Alta — depende só de Fase 3 (embed) ter as imagens já buscadas. | **NOTA À FASE 3 (embed cirúrgico)** — não cria brief novo, mas pré-aprova cross-reuso |
| **Painel comparativo IIA × IIIB (pneumatose × pneumoperitônio lado a lado)** | 9.5 ou 9.6 | Reuso intra-aula de V74 + V77 em painel comparativo de "evolução radiográfica" (mesmo padrão de M7 §7.12 — painel 4 RX comparativos). Ancora a transição Bell-Walsh visualmente. | Alta — depende só de V74 + V77 já buscados. | **NOTA À FASE 3 (embed cirúrgico)** — não cria brief novo |

**Resumo**: **0 candidatos NOVOS críticos pra M9**. Os 6 skeletons declarados cobrem o gap canônico. 2 sugestões secundárias para reuso intra-aula (mini-thumbnails Bell-Walsh + painel IIA×IIIB) são otimizações de Fase 3, **não criam briefs novos**. 1 brief opcional secundário (V77 multi-incidência) só ativa se a busca V77 retornar imagem sem múltiplas incidências.

---

## 4. Fontes CC priorizadas pra cada V

### V72 — Foto distensão abdominal RN com ECN
- **Wikimedia Commons** — busca: `"necrotizing enterocolitis" abdomen distension newborn` / `"NEC" neonatal clinical photo`
- **PMC open access** — revisões clínicas de ECN BR/INT com fotos clínicas anonimizadas (autorização parental documentada na publicação)
- **DermNet NZ** — secundária; categoria neonatal raramente cobre ECN
- **Radiopaedia** — esperado HTTP 403 anti-bot, mas vale tentar via URLs canônicas
- **Risco principal**: consentimento parental ético + anonimização facial mesmo em CC. Em última instância: SVG autoral ilustrativo de "abdômen distendido + alças visíveis" como fallback.

### V74 — RX pneumatose corte transversal (PADRÃO BOLHOSO — "imagem de prova")
- **Wikimedia Commons / Hellerhoff** — radiologista alemão prolífico, já fornecedor canônico de M7 (`BNN-rx-sam-grosseiro-hellerhoff.jpg`, `BNN-rx-pneumotorax-neonato-hellerhoff.jpg`). Categoria provável: `Category:Necrotizing enterocolitis` / `Category:Pneumatosis intestinalis`
- **Radiopaedia** — referência clínica gold-standard, esperado HTTP 403 anti-bot; persistir via URLs diretas
- **PMC open access** — revisões ECN com figuras CC: buscar `pneumatosis intestinalis radiograph CC-BY neonatal`
- **LearningRadiology.com** — categoria neonatal NEC; licença variável (verificar caso a caso)
- **SciELO Radiologia Brasileira** — busca BR open access com nomenclatura canônica BR
- **Prioridade alta de persistência**: declarada como "imagem de prova" — esforço extra justificado

### V75 — RX pneumatose linear/longitudinal
- Mesmas fontes V74. Hellerhoff é fortemente recomendado — radiologistas alemães frequentemente sobem múltiplas incidências do mesmo caso. **Ideal**: mesmo caso de V74 em corte diferente, ou caso ECN com pneumatose linear documentada.
- Aceitar imagem cropada/anotada da pneumatose linear em um caso de pneumatose mista.

### V77 — RX pneumoperitônio neonatal
- **Wikimedia Commons / Hellerhoff** — alta probabilidade. `Category:Pneumoperitoneum` + filtro neonatal.
- **Radiopaedia** — referência canônica; persistir.
- **PMC** — revisões "neonatal perforation" / "NEC perforation imaging" frequentemente trazem.
- **LearningRadiology.com** — categoria neonatal NEC.
- **Solicitar ao buscador**: se viável, imagem que mostre ortostática **E** supino do mesmo caso (cobre football sign + falciforme + gás sob cúpula em 1 figura).

### V78 — RX gás venoso portal / pneumoportia
- **Radiopaedia** — referência principal, alta persistência justificada. Busca: `portal venous gas newborn` / `pneumatosis portalis`.
- **PMC open access** — revisões em portovenous gas pediatric/neonatal. Buscar `"hepatic portal venous gas" newborn radiograph CC`.
- **Wikimedia Commons / Hellerhoff** — possível, menos garantido que V77.
- **SciELO Radiologia Brasileira** — buscar "pneumoportia" / "gás venoso portal" em RN.
- **Imagem rara** — declarado no prompt-final. Persistência alta. Se inconclusivo, marcar pra ilustrador-medico-bauer + manter skeleton.

### V79 — RX sinal de Rigler / dupla parede
- **Wikimedia Commons** — buscar `"Rigler sign" radiograph` / `"double wall sign" pneumoperitoneum`. Hellerhoff é candidato.
- **Radiopaedia** — referência principal canônica.
- **PMC** — revisões pneumoperitônio neonatal em supino.
- **LearningRadiology.com** — categoria pneumoperitôneo.

**Padrão de attribution canônica obrigatório** (memory `reference-busca-imagens-medicas-metodo` + `feedback-imagens-reais-medica-regra`):
```html
<figcaption class="figcaption">
  <strong>Achado:</strong> [descrição clínica do que se vê].
  <span class="attribution">[Tipo]: [Autor], via [Fonte] ([Licença], [Ano]). [URL canônica].</span>
</figcaption>
```

---

## 5. Recomendação final

### BUSCAR REAL — ALTA (5 imagens, prioridade crítica)
1. **V74** — RX pneumatose corte transversal (PADRÃO BOLHOSO — "imagem de prova" 9.5) · **CRÍTICO**
2. **V77** — RX pneumoperitônio neonatal (9.6) · **CRÍTICO**
3. **V78** — RX gás venoso portal / pneumoportia (9.6) · **persistência alta**
4. **V75** — RX pneumatose linear/longitudinal (9.5)
5. **V79** — RX sinal de Rigler / dupla parede (9.6)

### BUSCAR REAL — MÉDIA (1 imagem, viável)
6. **V72** — Foto clínica distensão abdominal em RN com ECN (9.4)

### ESCALONAR ILUSTRADOR — 0 imagens neste momento
Nenhum brief declarado como SVG autoral nesta revisão é inconclusivo a priori — os autorais (V73, V76, V81, V83 e ícone V80) já foram tratados na fase de implementação anterior (alguns embedados como SVG inline no HTML, ex.: V76 gas-compare__panel, V81 aerobilia-vs-portal__panel; outros, como V83 escada Bell-Walsh, implementados como componente HTML/CSS). **Se V72 falhar busca CC ética**, escalonar a `ilustrador-medico-bauer` como SVG autoral de "abdômen distendido com alças visíveis". **Se V78 persistir inconclusivo após busca intensiva** (declarado como rara), manter skeleton + escalonar.

### Otimizações de Fase 3 (embed cirúrgico) — sem brief novo
- Cross-reuso de V74 + V77 + V78 como mini-thumbnails na tabela Bell-Walsh (9.7) alinhados às colunas radiográficas das sublinhas IIA, IIB, IIIB.
- Painel comparativo IIA × IIIB (V74 lado a lado V77) em 9.5 ou 9.6 — reforça transição visual.

### Pontos sem cobertura visual prevista (aceitar como texto canônico)
- Sangramento retal em fralda neonatal (9.4) — barreira ética alta, texto soberano OK.
- Esquema cirúrgico de ressecção intestinal (9.8) — fora de escopo M9, conteúdo textual carrega.

---

## Sumário operacional

- **6 briefs** declarados (V72, V74, V75, V77, V78, V79) — **6 skeletons** no HTML, **0 imagens** em disco.
- **5 🔴 ALTA** (V74, V75, V77, V78, V79 — todos padrões radiográficos canônicos de prova).
- **1 🟡 MÉDIA** (V72 — distensão clínica).
- **0 candidatos NOVOS críticos** (2 otimizações de Fase 3 sugeridas como cross-reuso intra-aula, sem brief novo).
- **Recomendação final**: **buscar 6 imagens reais** (5 ALTA + 1 MÉDIA), com persistência declarada em V78 (rara) e tolerância pra V72 fallback ilustrador se busca CC ética inconclusiva.

— Fase 0 / M9, 2026-05-26
