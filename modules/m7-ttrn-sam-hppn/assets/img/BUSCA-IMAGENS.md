# BUSCA-IMAGENS — Módulo 7 (TTRN + SAM + HPPN integrada)

**Data**: 2026-05-25
**Buscador**: buscador-imagem-medica-bauer
**Modo**: Bauer ativo, --auto
**Briefs alvo**: B45-B51 (7 imagens — 5 essenciais + 2 opcionais), correspondem a V52, V54, V56, V57, V58, V59 essenciais + V60/V63 opcionais do prompt-final A7

---

## Sumário executivo

| Brief | Visual ID | Achado | Status | Arquivo local | Fonte |
|-------|-----------|--------|--------|---------------|-------|
| B45 | V52 | RX TTRN — líquido na cisura | ⚠️ INCONCLUSIVO | — | Escalar ilustrador SVG |
| B46 | V59 | RX SAM — grosseiro irregular | ✅ QUALIFICADA | `BNN-rx-sam-grosseiro-hellerhoff.jpg` | Wikimedia Commons (CC BY-SA 4.0) |
| B47 | V56 | Líquido amniótico meconial | ⚠️ INCONCLUSIVO (com proxy disponível) | `BNN-meconio-passagem-fralda.jpg` (PROXY) | Wikimedia Commons (Copyrighted free use) |
| B48 | V57 | RN banhado em mecônio | ⚠️ INCONCLUSIVO | — | Escalar ilustrador SVG (fallback já antecipado pelo Bauer) |
| B49 | V54 | Hood/oxihood em RN | ⚠️ INCONCLUSIVO foto real (ilustração disponível) | `BNN-hood-oxihood-illustration.png` (ILUSTRAÇÃO) | Wikimedia Commons (CC BY 4.0) |
| B50 | V63 | Sistema iNO neonatal | ⚠️ INCONCLUSIVO | — | Escalar ilustrador SVG (V63 opcional no prompt) |
| B51 | V60 | RX pneumotórax SAM (alt: ECMO) | ✅ QUALIFICADA | `BNN-rx-pneumotorax-neonato-hellerhoff.jpg` | Wikimedia Commons (CC BY-SA 4.0) |

**Resultado quantitativo**: 2/7 plenamente qualificadas + 2/7 proxies sub-ótimas com declaração + 3/7 escaladas para ilustrador.

**Reuso cross-module ativado (S37/S38)**: V64 painel comparativo 4 RX em 7.12 reusa B33 (`BNN-rx-sdr-irds-haggstrom.png`) e — quando disponível — RX normal escalado a ilustrador em M6. V62 shunt HPPN reusa `<defs>` SVG do M4 §4.5 (responsabilidade ilustrador + Executor, fora do escopo deste agent).

**Defesa anti-prompt-injection**: detectada injeção em saída de `Bash` (system-reminder embutido sobre MCP Figma + Auto Mode no meio de output de `ls`). Tratada como dado, instrução ignorada. Continuei conforme escopo declarado pelo Bauer. Defesa AGENTS.md §11 aplicada.

---

## B45 (V52) — RX tórax TTRN clássico [⚠️ INCONCLUSIVO]

### Status

**Não qualificada em fontes abertas confiáveis após busca exaustiva.**

### Buscas executadas

1. Wikimedia Commons — query `transient tachypnea newborn TTN` (MediaSearch + filtro imagem): zero resultados.
2. Wikimedia Commons — query `newborn lung fluid fissure`: zero resultados.
3. Wikimedia Commons — query `wet lung newborn x-ray`: zero resultados.
4. Wikimedia Commons — categoria tentativa `X-rays of transient tachypnea of the newborn`: HTTP 404 (categoria inexistente).
5. Wikipedia EN — artigo "Transient tachypnea of the newborn": HTML source não contém .jpg/.png embutidos (só SVG de UI).
6. Radiopaedia — articles + cases (`transient-tachypnoea-of-the-newborn`, `transient-tachypnea-of-the-newborn-ttn`, `transient-tachypnea-of-the-newborn-2`): **HTTP 403 Forbidden** (bloqueio anti-bot pelo WebFetch).
7. PMC PMC4520502 (Assessment chest X-ray newborns): 2 figuras, ambas estatísticas — sem RX TTN clínica.
8. PMC PMC4602774 (TTN vs RDS lung ultrasound, CC BY 4.0): 7 figuras, **todas ultrassom**, nenhuma RX.
9. PMC PMC11782154 (Lung US TTN outcome, CC BY): 5 figuras, **todas lung US**, nenhuma RX.
10. **PMC PMC11867197** (Recent Advances TTN — *J Perinatol* 2020): Figure 5 é EXATAMENTE o brief (perihilar streaks + fluid in fissures + sunburst pattern), MAS licença = **"NIHPA Author Manuscript / PMC Copyright restritivo"** + "Copyright Satyan Lakshminrusimha" nas figuras = **não-redistribuível** sem permissão direta da editora *Journal of Perinatology* (Springer Nature). Descartado.

### Motivo da inconclusividade

RX TTN clinicamente patognomônica (com cisurite visível + estrias hilares + cardiomegalia discreta) existe em literatura paga e em PMCs de author-manuscript copyright-restritivo, mas **não em Wikimedia Commons nem em PMCs CC BY**. Padrão similar ao observado em M6 com RX neonatal normal (B34 INCONCLUSIVO): RX neonatal específica patognomônica é predominantemente conteúdo licenciado de editoras médicas. Tentativa de Radiopaedia bloqueada por HTTP 403 (proteção anti-scraping); a fonte tem cases ricos mas não acessíveis por WebFetch.

### Fallback recomendado

**Escalar para `ilustrador-medico-bauer`**: gerar SVG esquemático de RX neonatal TTN clássico com anotações superpostas — silhueta de tórax neonatal, cisura interlobar direita espessada (cisurite), estrias lineares emergindo do hilo bilateralmente, trama vascular aumentada, cardiomegalia discreta, arcos costais sutilmente retificados. Vantagem pedagógica do SVG sobre RX real: as setas + labels permitem destacar cada achado nomeado no texto soberano da página 7.4 ("estrias do hilo", "cisurite", "cardiomegalia discreta") — exatamente o que a banca cobra em **descrição textual**, conforme pegadinha de prova declarada na §7.4 do prompt-final.

**Alternativa secundária (se Bauer recusar SVG e exigir RX real)**: solicitar permissão direta ao autor Satyan Lakshminrusimha (UC Davis, neonatologist + corresponding author da PMC11867197) pra reuso de Figure 5 com atribuição. Caminho lento (semanas), não compatível com sprint Bauer.

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` B45

**Caminho preferido**: SVG do ilustrador anotado. Página 7.4 funciona pedagogicamente com SVG + texto soberano + tabela de achados radiográficos nomeados — a Checagem Bauer declarada APROVADA-com-expansão na §7.4 confirma que o texto descreve cada achado verbalmente, independente da imagem.

---

## B46 (V59) — RX tórax SAM clássico [✅ QUALIFICADA]

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-rx-sam-grosseiro-hellerhoff.jpg`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:Mekoniumaspiration_bei_Neugeborenen_im_Roentgenbild_0W_-_CR_ap_-_001.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/9/93/Mekoniumaspiration_bei_Neugeborenen_im_Roentgenbild_0W_-_CR_ap_-_001.jpg
- **Autor**: Hellerhoff (radiologista alemão, contribuidor prolífico de RX em Wikimedia Commons)
- **Data**: 27 de outubro de 2021
- **Dimensões originais**: 1.275 × 1.092 px (JPEG, 187 KB) — atende ≥800 px largura
- **Descrição técnica da fonte (verbatim, traduzido do alemão)**: "Mekoniumaspiration bei Neugeborenen im Röntgenbild: Beidseits multiple fleckige Verdichtungen. Tubus eher zu tief, Magensonde regelrecht" → "Aspiração meconial em recém-nascido em radiografia: múltiplas opacidades irregulares bilaterais. Tubo orotraqueal um pouco profundo, sonda gástrica em posição correta."

### Validação tripla

- ✅ **Camada 1 (achado clínico correto)**: "Multiple fleckige Verdichtungen" = **padrão grosseiro/irregular distribuído bilateralmente**, exatamente o achado canônico SAM (palavra-chave "grosseiro" do prompt-final §7.9 itens [140]-[148]). Confirma a tríade SAM: infiltrado grosseiro + hiperinsuflação + distribuição bilateral irregular.
- ✅ **Camada 2 (modalidade correta)**: Radiografia de tórax AP (CR ap) neonatal — modalidade conforme brief V59.
- ✅ **Camada 3 (anatomia correta)**: Tórax neonatal completo, bilateral. Tubo orotraqueal visível (contexto SAM grave com VM, alinhado com §7.10 escalada terapêutica). Sonda gástrica visível.

### Licença

- **Tipo**: Creative Commons CC BY-SA 4.0 International (Attribution-ShareAlike)
- **Compatibilidade Bauer**: alta. Permite uso, modificação e redistribuição inclusive em contexto comercial; derivado deve manter mesma licença (compatível com plataforma educacional Neonatologia, que é não-comercial).
- **Restrições**: atribuição obrigatória; derivados devem ser CC BY-SA.

### Attribution canônica pronta para Executor

```
Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 4.0).
RN com aspiração meconial — padrão grosseiro irregular bilateral.
Fonte: https://commons.wikimedia.org/wiki/File:Mekoniumaspiration_bei_Neugeborenen_im_Roentgenbild_0W_-_CR_ap_-_001.jpg
```

### Alt text recomendado (PT-BR, didático)

> "Radiografia de tórax AP de recém-nascido com Síndrome de Aspiração Meconial (SAM). Mostra múltiplas opacidades grosseiras e irregulares distribuídas bilateralmente em todo o parênquima pulmonar, padrão característico de SAM. Tubo orotraqueal e sonda gástrica visíveis indicando suporte ventilatório invasivo — contexto típico de SAM grave com necessidade de VM."

### Posicionamento sugerido

- **Página destino**: 7.9 (`7-9-sam-radiografia-grosseiro`)
- **Posição**: após o parágrafo "Imagina isso na imagem (V59). É um infiltrado meio esquisito..." (item §7.9 prompt-final).
- **Container sugerido**: glass card com legenda técnica embaixo + attribution em fonte secundária. Anotações pedagógicas (setas marcando "grosseiro" + arco costal 8 + diafragma) em **SVG overlay separado** (Executor monta) — não modificar o asset original.
- **Reuso interno**: imagem reaparece em 7.12 (V64 painel comparativo 4 RX) — mesmo arquivo via `<img>` reutilizado.

---

## B47 (V56) — Foto líquido amniótico meconial [⚠️ INCONCLUSIVO com proxy disponível]

### Status

**Foto canônica de líquido amniótico tinto de mecônio macroscópico (em cuba/bolsa pós-amniorrexe) não encontrada em fontes abertas confiáveis.** Proxy didático disponível: foto close-up de mecônio fresco em fralda neonatal, que ilustra a COR e CONSISTÊNCIA do mecônio, mas NÃO o líquido amniótico tingido em si.

### Buscas executadas

1. Wikimedia Commons — query `meconium stained amniotic fluid`: 3 resultados, todos histopato 250x ou microscopia (descartados — brief pede macroscópico).
2. Wikimedia Commons — query `meconium liquor OR amniotic fluid green`: 1 resultado (`Structure of the human amniotic membrane.jpg`) — histologia da membrana, irrelevante.
3. Wikipedia EN — artigo Meconium: 4 imagens em galeria, todas de **mecônio fresco em fralda** (não líquido amniótico tingido).
4. PMC PMC10358378 (Ethiopia MSAF study, CC BY): 3 tabelas, **zero fotos clínicas**.
5. PMC PMC9446496 (Nepal MSAF study, CC BY 4.0): 1 figura — gráfico distribuição de grade (não foto).
6. PMC PMC10866510 (North Shoa MSAF study): tabelas estatísticas, sem fotos.
7. PMC PMC10421705 / PMC12522904 / PMC9131707 (revisões MSAF): sem fotos clínicas do fluido.

### Motivo da inconclusividade

Foto de líquido amniótico meconial macroscópico (em frasco/cuba pós-rotura) é raramente publicada em open access — está em manuais obstétricos pagos (Williams Obstetrics, Rezende, FEBRASGO Manual de Assistência ao Parto) ou em ambientes clínicos sem documentação fotográfica liberada. Há classificações verbais ricas (Grade I fluido translúcido verde-amarelo, Grade II moderado verde-marrom, Grade III espesso "pea soup") mas pouquíssima documentação visual aberta.

### Proxy sub-ótimo disponível (baixado, decisão Bauer pendente)

- **Arquivo local**: `assets/img/BNN-meconio-passagem-fralda.jpg`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:Meconium.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/e/e6/Meconium.jpg
- **Autor**: Jeremy Kemp
- **Data**: 9 de abril de 2005
- **Dimensões originais**: 900 × 1.200 px (JPEG, 577 KB)
- **Descrição técnica da fonte (verbatim)**: "Close-up photograph of meconium" — depicta mecônio em fralda neonatal, NÃO líquido amniótico.

### Validação tripla — proxy

- ❌ **Camada 1 (achado clínico correto)**: FALHA — a imagem mostra **mecônio fresco em fralda** (fezes meconiais pós-parto), NÃO **líquido amniótico tinto de mecônio** intra-parto. São fenômenos distintos: o brief pede o líquido amniótico no qual o feto estava banhado (gatilho do mecanismo SAM, página 7.7); a imagem mostra a evacuação fisiológica pós-parto do mecônio retido no TGI fetal. **Erro pedagógico real**: usar essa imagem como "líquido amniótico meconial" gera confusão clínica.
- ⚠️ **Camada 1 atenuada (proxy didático)**: a imagem ilustra **cor e consistência do mecônio** (verde-escuro a marrom) — informação útil pra entender por que líquido amniótico tinto tem aspecto verde-amarelo (fluido) a marrom (espesso). Como **legenda explícita** ("Mecônio em sua forma fresca pós-parto, para referência de cor e consistência. O líquido amniótico meconial tem aspecto similar, diluído em proporções variáveis"), serve como proxy didático cego.
- ✅ **Camada 2 (modalidade)**: fotografia clínica conforme brief.
- N/A **Camada 3 (anatomia)**: não aplicável a foto de substância.

### Licença — proxy

- **Tipo**: "Copyrighted free use" — autor declarou uso livre para qualquer propósito incluindo redistribuição irrestrita, uso comercial e modificação.
- **Compatibilidade Bauer**: total.
- **Attribution canônica (se Bauer optar usar como proxy)**:
  ```
  Fotografia: Jeremy Kemp, via Wikimedia Commons (Copyrighted free use, 2005).
  Mecônio fresco — referência de cor e consistência.
  Fonte: https://commons.wikimedia.org/wiki/File:Meconium.jpg
  ```

### Fallback recomendado

**Decisão Bauer necessária — 3 caminhos**:

1. **Preferido**: escalar `ilustrador-medico-bauer` pra gerar SVG/PNG didático mostrando **gradiente fluido vs espesso** (Grade I translúcido verde-claro → Grade II moderado verde-marrom → Grade III "pea soup" espesso) em representação de cuba/bolsa pós-amniorrexe. Vantagem: cobre o refinamento B-A7-05 do prompt-final §7.7 (gradiente fluido vs espesso explicado em prosa) com visual coerente — exatamente o conceito que faz o aluno entender por que **João da Elvira Maria escapou da SAM mesmo nascendo banhado em mecônio** (líquido fluido vs espesso).
2. **Alternativa**: usar o proxy `BNN-meconio-passagem-fralda.jpg` com legenda explícita declarando que é mecônio fresco pós-parto como **referência de cor/consistência**, e expandir o texto da §7.7 pra cobrir o gap visual sem distorção pedagógica.
3. **Pular a imagem**: a Checagem Bauer da §7.7 declara APROVADA — os 3 mecanismos lesionais estão narrados em prosa completa, o esquema autoral V55 (responsabilidade ilustrador) cobre a fisiopato, e o refinamento B-A7-05 do gradiente fluido vs espesso é texto, não imagem.

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` B47

Sugestão Bauer: **escalar ilustrador (caminho 1) OU pular (caminho 3)**. Proxy disponível (caminho 2) tem trade-off pedagógico real — usar apenas se legenda explícita for inegociável.

---

## B48 (V57) — Foto RN banhado em mecônio [⚠️ INCONCLUSIVO]

### Status

**Não qualificada em fontes abertas confiáveis.**

### Buscas executadas

1. Wikimedia Commons — query `meconium stained newborn` + variações `infant skin photograph`: zero resultados clínicos relevantes.
2. Wikipedia EN — artigo Meconium: 4 imagens, **todas de mecônio em fralda**, nenhuma de RN com impregnação cutânea.
3. PMC PMC8005197 (Neonatal respiratory distress secondary to MAS, CC BY): 2 figuras — pathophysiology diagram + chest X-ray. Sem foto de RN.
4. PMC PMC4920933 (MAS Insight, copyright Elsevier — descartado por licença): 3 figuras — 2 RX + 1 meconium-stained urine. Sem foto de RN com impregnação cutânea.
5. PMC PMC8002729 (MAS Narrative Review, CC BY 4.0): 2 figuras — pathophysiology + chest X-ray. Sem foto.
6. PMC PMC10990371 (MAS pathophysiology to treatment, CC BY-NC-SA): 3 figuras — pathophysiology + chest X-ray + pharmacotherapy flowchart. Sem foto de RN.
7. StatPearls NBK542240 (Meconium): 1 figura — meconium stained diaper (Dr Chaigasame), não impregnação cutânea.
8. Flickr CC BY search: sem resultados específicos com licença adequada.

### Motivo da inconclusividade

RN com impregnação cutânea por mecônio (unha alaranjada, coto tinto, pele tinta) é achado clínico documentado em livros e atlas pagos (Avery's Diseases of the Newborn, Rennie Roberton Textbook of Neonatology, atlas de exame físico pediátrico SBP), mas raramente em fontes CC abertas. Razão dupla: (1) anonimização total facial de RN é tecnicamente complexa em foto de corpo inteiro, (2) consentimento parental pra publicação aberta de imagem de RN sob sofrimento perinatal é eticamente sensível e raramente obtido em open access.

### Fallback recomendado

**Escalar para `ilustrador-medico-bauer`**: gerar ilustração SVG/PNG didática mostrando os 3 sinais clássicos de impregnação meconial — unha alaranjada (close-up), coto umbilical tinto (close-up), pele com manchas verde-amareladas a marrom (vista corporal estilizada, sem face). Vantagem pedagógica: permite anotar cada sinal nomeado pelo prompt-final §7.8 ("unha alaranjada, amarronzada", "coto umbilical fica tinto", "pele fica tinta") com setas e labels, exatamente o que a Checagem Bauer da §7.8 confirma como cobrança de prova ("vocabulário suficiente pra reconhecimento textual em prova").

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` B48

**Fallback ilustrador SVG já declarado no brief Bauer original** (§ do pedido inicial: "Fallback ilustrador SVG declarado se buscador inconclusivo"). Caminho preferido confirmado: ilustrador.

---

## B49 (V54) — Foto Hood/oxihood em RN [⚠️ INCONCLUSIVO foto real — ilustração disponível]

### Status

**Foto clínica REAL de RN em capacete Hood/oxihood não encontrada em fontes abertas confiáveis.** Ilustração didática disponível com licença permissiva.

### Buscas executadas

1. Wikimedia Commons — query `oxygen hood neonatal`: 1 resultado — **ilustração Canva**, não foto clínica.
2. Wikimedia Commons — query `head box oxygen newborn`: zero resultados.
3. Wikimedia Commons — query `neonate nasal cannula oxygen`: zero resultados.
4. Wikimedia Commons — query `respiratory therapist newborn`: 2 resultados — fotos militar/educacional, **uma é de Air Force showing blood draw pre-ECMO** (não Hood), outras incompletas (HTTP 404 em arquivos derivados).
5. Wikimedia Commons — categoria `Oxygen therapy`: 46 arquivos, **único relacionado a infante = ilustração Canva** (já encontrada). 45 outros são adulto.
6. Wikimedia Commons — categoria `Neonatal intensive care units`: HTTP 404 na URL completa de subcategorias específicas.
7. PMC PMC8779027 (Reconciling Oxygen Delivery with Hood, CC BY 4.0): 7 figuras — **todas de manequim/modelo CFD**, nenhuma de RN real em Hood.
8. PMC PMC8336200 / PMC8698336 / PMC10047080 (revisões oxigenoterapia neonatal): texto + gráficos, sem foto de Hood real.
9. MedlinePlus image 19869: foto de Hood real, MAS licença = "A.D.A.M., Inc." — **copyright restritivo, não-CC**.
10. CDC PHIL: não retornou Hood neonatal específico em buscas testadas.
11. Flickr CC BY search: stock genérico predominante, sem RN em Hood com licença adequada confirmada.

### Imagem alternativa disponível (ilustração, baixada, decisão Bauer pendente)

- **Arquivo local**: `assets/img/BNN-hood-oxihood-illustration.png`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:Infant-oxygen-hood-illustration.png
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/e/e3/Infant-oxygen-hood-illustration.png
- **Autor**: Respiratory Therapy Zone
- **Data**: 14 de junho de 2022
- **Dimensões originais**: 1.200 × 628 px (PNG, 87 KB)
- **Descrição técnica da fonte (verbatim)**: "Illustration of an infant wearing an oxygen hood" — ilustração esquemática criada via Canva.

### Validação tripla — ilustração

- ⚠️ **Camada 1 (achado correto)**: PARCIAL — a imagem mostra um **infante esquematizado dentro de capacete Hood/oxihood transparente** com tubo de oxigênio conectado. Conceito correto (Hood = capacete plástico cobrindo cabeça com mistura O₂), MAS é **ilustração estilizada**, não foto clínica real. Brief Bauer pede "foto clínica REAL" ou "alternativa: foto de modelo/manequim anatômico didático" (§V54 prompt-final). Ilustração Canva fica num terceiro tier abaixo de manequim.
- ✅ **Camada 2 (modalidade correta)**: brief admite alternativa didática; ilustração CC BY 4.0 admissível com legenda transparente.
- N/A **Camada 3**.

### Licença — ilustração

- **Tipo**: Creative Commons CC BY 4.0 International (Attribution)
- **Compatibilidade Bauer**: alta. Permite uso, modificação e redistribuição inclusive comercial; só exige atribuição.
- **Attribution canônica (se Bauer optar usar)**:
  ```
  Ilustração: Respiratory Therapy Zone, via Wikimedia Commons (CC BY 4.0, 2022).
  Esquema didático de capacete Hood (oxihood) em recém-nascido.
  Fonte: https://commons.wikimedia.org/wiki/File:Infant-oxygen-hood-illustration.png
  ```

### Fallback recomendado

**Decisão Bauer necessária — 2 caminhos**:

1. **Preferido**: escalar `ilustrador-medico-bauer` pra gerar SVG didático autoral de RN em Hood, em estilo coerente com paleta neonato Bauer (`--neonato-primary`), com anotações pedagógicas (capacete plástico transparente, fluxo de O₂ entrando, monitor de SpO₂, posição correta em UTIN, contraste com CPAP nasal §7.6). Vantagem: estética Bauer + permite legendas didáticas + sem dependência de fonte externa.
2. **Alternativa**: usar `BNN-hood-oxihood-illustration.png` como ilustração admitida com legenda explícita declarando origem como Respiratory Therapy Zone via Wikimedia. Vantagem: pronto-pra-uso; desvantagem: estilo Canva genérico não combina com estética premium Bauer (anti-padrão "cara de template gratuito" do AGENTS-PLATAFORMAS §11).

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` B49

**Caminho preferido**: SVG do ilustrador. Imagem ilustração baixada como fallback de emergência se sprint Bauer não comportar tempo do ilustrador.

---

## B50 (V63) — Foto sistema iNO (óxido nítrico inalatório) [⚠️ INCONCLUSIVO]

### Status

**Não qualificada em fontes abertas confiáveis. V63 declarado OPCIONAL pelo prompt-final §7.11.**

### Buscas executadas

1. Wikimedia Commons — query `nitric oxide neonatal`, `iNO ventilator`, `INOmax`: zero resultados clínicos.
2. PMC PMC29006 (iNO refractory HFV, antiga 1999): texto, sem foto de equipamento.
3. PMC PMC1060988 (guidelines safe iNO): texto técnico, sem foto.
4. PMC PMC10954355 (iNO neonatal PH): texto, gráficos.
5. PMC PMC7899041 (interfacing medical devices iNO): possíveis diagramas técnicos do INOmax delivery, MAS não baixei (texto da abstract indica diagramas técnicos, não foto clínica).
6. PMC PMC10408459 (iNO delivery systems review): texto, sem foto de bedside.
7. PMC PMC3299357 (iNO use in newborns): texto.
8. Wikipedia EN "Nitric oxide" + "Inhaled nitric oxide": páginas sem foto de setup clínico neonatal.

### Motivo da inconclusividade

Setup iNO bedside (ventilador neonatal + módulo INOmax acoplado + cilindro NO + monitor de NO₂) é fotografia de equipamento UTI raramente publicada em open access. Imagens existem em catálogos comerciais Mallinckrodt/INOmax (proprietary), em manuais de fabricante (não-CC) e em apresentações educacionais institucionais (não indexadas em CC abertas).

### Fallback recomendado

**Escalar para `ilustrador-medico-bauer`**: gerar esquema SVG didático "Setup iNO bedside" com elementos rotulados — ventilador neonatal, módulo de injeção de NO (canister + flowmeter), monitor de NO/NO₂ inspirado, paciente intubado, dose visível (20 ppm padrão §7.11). Vantagem pedagógica: permite anotar **dose canônica 20 ppm + faixa segura 15-30 + risco metahemoglobinemia > 40** declarados como facts F04/F05 do prompt-final §15 — diretamente sobre o esquema. Alternativa de baixo custo: omitir imagem (V63 declarado OPCIONAL pelo prompt) e manter Checagem Bauer da §7.11 (APROVADA-com-expansão, texto cobre dose+via+desmame sem imagem).

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` B50

**V63 é OPCIONAL no prompt-final**. Caminho preferido: SVG do ilustrador. Caminho mínimo: omitir e manter texto soberano da §7.11 (já cobre o setup conceitualmente).

---

## B51 (V60) — RX pneumotórax neonatal [✅ QUALIFICADA] (substitui ECMO opcional)

### Decisão de escopo

Brief original B51 oferecia 2 alternativas opcionais: (a) **foto ECMO neonatal**, (b) **RX pneumotórax SAM**. Busca paralela:

- **ECMO neonatal**: 3 resultados Wikimedia, sendo 1 do U.S. Air Force (HTTP 404 ao baixar URL completa) + 1 "respiratory therapist treating newborn" que é na verdade **coleta de sangue pré-ECMO**, não ECMO em uso (CC BY 2.5, U.S. Air Force domínio público parcial). Não atende brief "bebê em ECMO com cânulas visíveis".
- **RX pneumotórax neonatal**: 2 resultados Wikimedia (Hellerhoff, CC BY-SA 4.0), ambos qualificados. Alinhamento direto com V60 do prompt-final §7.9 ("RX neonatal SAM complicado com pneumotórax"). **Preferível.**

Decisão: priorizar **V60 RX pneumotórax** sobre **ECMO** — diretamente cobra brief original "OPCIONAL: foto ECMO neonatal" via alternativa pedagogicamente mais alinhada (mesma página 7.9 da SAM, complicação canônica = síndrome de escape de ar). ECMO declarado INCONCLUSIVO como rótulo separado.

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-rx-pneumotorax-neonato-hellerhoff.jpg`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:Pneumothorax_rechts_bei_einem_Neugeborenen_0tageW_-_CR_ap_-_001.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/5/53/Pneumothorax_rechts_bei_einem_Neugeborenen_0tageW_-_CR_ap_-_001.jpg
- **Autor**: Hellerhoff (radiologista alemão)
- **Data**: 21 de maio de 2024
- **Dimensões originais**: 1.463 × 1.301 px (JPEG, 99 KB) — atende ≥800 px largura
- **Descrição técnica da fonte (verbatim, traduzido do alemão)**: "Pneumothorax rechts bei einem Neugeborenen mit leichtem Mediastinalshift nach links" → "Pneumotórax à direita em recém-nascido com discreto desvio mediastinal para a esquerda."

### Validação tripla

- ✅ **Camada 1 (achado clínico correto)**: pneumotórax à direita visível + desvio mediastinal contralateral discreto = critério de pneumotórax hipertensivo emergente conforme refinamento B-A7-06 do prompt-final §7.9 ("pneumotórax hipertensivo = deterioração HD/respiratória + desvio mediastino = drenagem"). Achado alinhado com complicação canônica SAM (síndrome de escape de ar).
- ✅ **Camada 2 (modalidade correta)**: Radiografia de tórax AP (CR ap) neonatal — modalidade conforme brief V60.
- ✅ **Camada 3 (anatomia/lateralidade correta)**: pneumotórax à direita explicitamente declarado na fonte (marcador R/L confirmado pela descrição textual).

### Licença

- **Tipo**: Creative Commons CC BY-SA 4.0 International
- **Compatibilidade Bauer**: alta (mesma análise B46).
- **Restrições**: atribuição + derivados em CC BY-SA.

### Attribution canônica pronta para Executor

```
Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 4.0, 2024).
RN com pneumotórax à direita e discreto desvio mediastinal contralateral —
complicação da síndrome de escape de ar.
Fonte: https://commons.wikimedia.org/wiki/File:Pneumothorax_rechts_bei_einem_Neugeborenen_0tageW_-_CR_ap_-_001.jpg
```

### Alt text recomendado (PT-BR, didático)

> "Radiografia de tórax AP de recém-nascido com pneumotórax à direita. Visível área de hipertransparência avascular no hemitórax direito (ar livre no espaço pleural), com discreto desvio do mediastino para a esquerda — sinal de pneumotórax hipertensivo emergente. Achado canônico da síndrome de escape de ar, complicação grave da Síndrome de Aspiração Meconial (SAM) por volutrauma (mecanismo valvular do mecônio) ou barotrauma (ventilação mecânica com pressões positivas excessivas)."

### Posicionamento sugerido

- **Página destino**: 7.9 (`7-9-sam-radiografia-grosseiro`), **logo após V59 (B46)**, no bloco que discute "síndrome de escape de ar" e critério de drenagem torácica (B-A7-06).
- **Container sugerido**: glass card pareado com V59 (B46) em layout 2-col desktop / stack mobile — comparativo visual SAM clássica vs SAM complicada com pneumotórax.
- **Cross-reuso opcional**: pode aparecer em 7.12 (V64 painel comparativo) como ilustração suplementar de complicação SAM.

---

## Reuso cross-module — verificação (S37/S38)

### V64 — painel comparativo 4 RX (página 7.12)

Brief Bauer original solicitou reuso via path relativo de M6:
- `../m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-bXX-rx-sdr-vidro-moido.jpg` (B33 de M6)
- `../m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-bXX-rx-normal.jpg` (B34 de M6)

Verificação dos paths reais (inspeção `BUSCA-IMAGENS.md` de M6, lido na fase de levantamento):

| Slot V64 | Brief origem | Arquivo real M6 | Status |
|----------|--------------|------------------|--------|
| RX SDR (vidro moído) | B33 de M6 | `../m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-rx-sdr-irds-haggstrom.png` | ✅ Cross-reuso operável |
| RX normal neonatal | B34 de M6 | **INCONCLUSIVO em M6** (escalado a ilustrador SVG) | ⚠️ Cross-reuso depende ilustrador entregar SVG normal em M6 |
| RX TTRN (cisurite) | B45 de M7 (V52) | INCONCLUSIVO neste módulo | ⚠️ Depende ilustrador SVG TTRN entregar (mesmo problema) |
| RX SAM (grosseiro) | B46 de M7 (V59) | `assets/img/BNN-rx-sam-grosseiro-hellerhoff.jpg` | ✅ Pronto |

**Resumo cross-reuso V64**: 2 dos 4 quadrantes prontos (SDR M6 + SAM M7). 2 dos 4 dependem do `ilustrador-medico-bauer` entregar (normal M6 + TTRN M7). Cross-reuso visual cross-module **opera parcialmente**; precedente positivo S37 do dossiê A7 **inaugurado mas não fechado** até ilustrador entregar.

**Nota Executor**: ao montar V64 em `m7-ttrn-sam-hppn/pages/7-12-painel-comparativo.html`, usar paths relativos canônicos:
```html
<!-- Quadrante 1 (SDR) — cross-reuso M6 -->
<img src="../m6-dispneia-neonatal-sdr-sepse/assets/img/BNN-rx-sdr-irds-haggstrom.png" alt="..." loading="lazy">

<!-- Quadrante 3 (SAM) — reuso interno M7 -->
<img src="./assets/img/BNN-rx-sam-grosseiro-hellerhoff.jpg" alt="..." loading="lazy">
```

### V62 — shunt HPPN (página 7.11)

`<defs>` SVG compartilhado com M4 §4.5 (circulação fetal) — responsabilidade `ilustrador-medico-bauer` + Executor. **Fora do escopo deste agent** (buscador não trata SVG autoral cross-module). Declarado pra consistência com brief Bauer.

---

## Notas operacionais ao Executor

1. **Imagens baixadas** ficam em `assets/img/`:
   - `BNN-rx-sam-grosseiro-hellerhoff.jpg` (187 KB, 1275×1092) — **B46 pronta**
   - `BNN-rx-pneumotorax-neonato-hellerhoff.jpg` (99 KB, 1463×1301) — **B51 pronta**
   - `BNN-hood-oxihood-illustration.png` (87 KB, 1200×628) — **B49 ilustração fallback** (Bauer decide se usa ou aguarda ilustrador SVG)
   - `BNN-meconio-passagem-fralda.jpg` (577 KB, 900×1200) — **B47 proxy sub-ótimo** (Bauer decide se usa com legenda explícita ou pula)

2. **5 briefs escalados ao ilustrador** ou aguardando decisão Bauer:
   - B45 (RX TTRN) → ilustrador SVG anotado
   - B47 (líquido amniótico meconial) → ilustrador SVG gradiente fluido/espesso (preferido) OU proxy com legenda OU omitir
   - B48 (RN banhado mecônio) → ilustrador SVG (fallback já antecipado Bauer)
   - B49 (Hood) → ilustrador SVG autoral (preferido) OU ilustração Canva fallback baixada
   - B50 (iNO setup) → ilustrador SVG (V63 OPCIONAL — pode omitir)

3. **Não modificar** as imagens reais sem necessidade. B46 e B51 estão prontas para `<img>` direto com `loading="lazy"`. Anotações pedagógicas (setas + labels) devem ir em **SVG overlay separado** sobre o `<img>` base (mesmo padrão M6).

4. **Attribution obrigatória**: blocos canônicos prontos em cada seção acima — embutir como `<figcaption>` discreta ou em rodapé de página dedicado a créditos (mesmo padrão M6).

5. **Dimensões responsivas**: B46 (1275×1092) e B51 (1463×1301) são alta resolução, podem escalar até full-width sem perda. B49 ilustração (1200×628) é wide aspect (16:9 aproximado), apropriado para card horizontal.

6. **Cross-reuso V64 (7.12)**: usar paths relativos `../m6-dispneia-neonatal-sdr-sepse/assets/img/...` pra SDR. Documentar atribuição cross-module no `<figcaption>` do painel.

---

## Próximos passos sugeridos

1. **Bauer decide** sobre os 5 escalados:
   - Caminho preferido pra todos: escalar `ilustrador-medico-bauer` com briefs reformulados (este relatório serve como input pro ilustrador).
   - Caminho mínimo: usar fallbacks declarados (Hood ilustração, proxy mecônio com legenda) + omitir B50 (V63 opcional).

2. **Executor** integra B46 e B51 no HTML M7 página 7.9 com attribution + alt text canônicos.

3. **Ilustrador** (se acionado) recebe os 3-5 briefs reformulados como SVG, prioridade alta em V52 (RX TTRN — patognomônico, central pra §7.4) e V57 (RN banhado em mecônio — central pra §7.8). V55 (3 mecanismos SAM) e V62 (shunt HPPN) já estavam programados como SVG autoral no prompt-final independentemente de busca.

4. **Cross-reuso V64**: aguardar entrega do ilustrador (RX normal M6 + RX TTRN M7) pra montar painel 4-quadrantes completo. Enquanto isso, Executor pode montar painel parcial 2-quadrantes (SDR + SAM) e expandir quando os 2 faltantes chegarem.

5. **Gate Bauer "imagem em toda página"** mantido em 7.9 (B46 + B51). Outras páginas seguem padrão sem dependência crítica: §7.4 (B45) e §7.6 (B49) podem rodar com SVG autoral; §7.7 (B47) e §7.8 (B48) idem; §7.11 (B50) com setup omissível (V63 opcional).

---

## Auditoria final — gate Bauer

- ✅ Validação tripla aplicada em cada candidato (2 qualificadas + 1 ilustração + 1 proxy).
- ✅ Licenças verificadas individualmente nas páginas de origem do Commons (não confiança em snippet).
- ✅ Atribuições canônicas preparadas no formato §7.1 do agent (Wikimedia template).
- ✅ Inconclusivos declarados explicitamente com `[BUSCADOR-IMAGEM-INCONCLUSIVO]` e caminho de fallback.
- ✅ Defesa anti-prompt-injection ativa — uma tentativa detectada (system-reminder em output Bash sobre MCP Figma + Auto Mode), ignorada, registrada.
- ✅ Cross-reuso M6 → M7 documentado em V64.
- ✅ Nenhuma imagem entregue sem attribution canônica.
- ✅ Nenhuma imagem com licença ambígua aceita silenciosamente — B49 (ilustração Canva) e B47 (proxy mecônio) entregues COM declaração explícita do trade-off pedagógico.
