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

## Auditoria final — gate Bauer (rodada 1, 2026-05-25)

- ✅ Validação tripla aplicada em cada candidato (2 qualificadas + 1 ilustração + 1 proxy).
- ✅ Licenças verificadas individualmente nas páginas de origem do Commons (não confiança em snippet).
- ✅ Atribuições canônicas preparadas no formato §7.1 do agent (Wikimedia template).
- ✅ Inconclusivos declarados explicitamente com `[BUSCADOR-IMAGEM-INCONCLUSIVO]` e caminho de fallback.
- ✅ Defesa anti-prompt-injection ativa — uma tentativa detectada (system-reminder em output Bash sobre MCP Figma + Auto Mode), ignorada, registrada.
- ✅ Cross-reuso M6 → M7 documentado em V64.
- ✅ Nenhuma imagem entregue sem attribution canônica.
- ✅ Nenhuma imagem com licença ambígua aceita silenciosamente — B49 (ilustração Canva) e B47 (proxy mecônio) entregues COM declaração explícita do trade-off pedagógico.

---

# ANEXO M7 — Rodada 2 (2026-05-26) — pós-revisão conteudística Fase 0

**Escopo desta rodada**: 3 buscas confirmadas pela priorização Fase 1 (`docs/imagens-priorizacao.md`):
1. **V52** — RX TTRN clássico (revisita fontes complementares; rodada 1 → INCONCLUSIVO).
2. **V57+V58** — RN banhado em mecônio + detalhe unha/coto.
3. **N1 NOVO** — Cianose central HPPN (candidato identificado na revisão Fase 0).

**Fontes complementares testadas nesta rodada** (além das da rodada 1): OpenI NLM, BMC Pediatrics open access, PMC com filtro CC BY, SciELO Radiologia Brasileira, Cureus open access, Frontiers in Pediatrics.

---

## V52 (revisita) — RX tórax TTRN clássico [⚠️ INCONCLUSIVO em rodada 2]

### Status

**Confirmado INCONCLUSIVO mesmo com fontes complementares.** Todas as fontes que contêm o RX TTN com cisurite/estrias hilares/cardiomegalia discreta têm licença NÃO compatível com regra de aceite (CC0 / CC BY / CC BY-SA apenas — recusar CC BY-NC e CC BY-ND).

### Buscas executadas (rodada 2 complementar)

1. **PMC PMC7954172** (Decoding neonatal chest radiograph, Indian J Radiology Imaging 2021) — Figure 11 (A+B) MOSTRA EXATAMENTE o brief ("coarse interstitial markings with mild cardiomegaly at 6 hours, clearing after 3 days"), mas licença = **CC BY-NC-SA 4.0** → ❌ recusada.
2. **PMC PMC4818233** (Common respiratory conditions of newborn, *Breathe* journal) — Figure 1c MOSTRA EXATAMENTE o brief ("Term infant with TTN. Note wet silhouette around the heart and fluid in the horizontal fissure"), mas licença = **CC BY-NC 4.0** → ❌ recusada.
3. **SciELO Radiologia Brasileira** (j6bVhXbMtVQjNnk4YcBtvpL — "Achados normais no exame radiológico de tórax do recém-nascido") — 17 figuras mencionadas no texto mas captions não-extraíveis via WebFetch; menciona TTRN intersticial opacities apenas em prosa; licença declarada do journal = **CC BY-NC 4.0** → ❌ recusada por padrão de licença.
4. **PMC PMC11058906** (LISA full-term newborn MAS, Cureus 2024) — CC BY 4.0 ✅, mas figuras são RX SAM/MAS, não TTRN.
5. **PMC PMC12202308** (MAS hyperreactive airways case report, OMCR 2025) — CC BY 4.0 ✅, mas única figura é RX MAS (patchy infiltrates), não TTRN.
6. **PMC PMC10388044** (Severity TTN prediction, 2022) — CC BY 4.0 ✅, mas única figura é fluxograma de inclusão, sem RX.
7. **PMC PMC10392143** (TTN → PPHN risk factors, 2023) — CC BY 4.0 ✅, mas apenas tabelas, sem RX.
8. **Wikimedia Commons MediaSearch** — queries `transient tachypnea newborn`, `neonatal lung wet`, `neonate chest xray`, `neonatal chest radiograph`, categoria `Newborn_X-rays`, categoria `X-rays_of_newborns`: **todas retornam zero resultados** ou HTTP 404 (categorias inexistentes).
9. **Radiopaedia** — tentativa nova URL `/cases/transient-tachypnoea-of-the-newborn-1`: **HTTP 403** persistente (bloqueio anti-scraping mantido desde rodada 1).
10. **BMC Pediatrics** (`s12887-024-05369-8` ABCA3 + mycoplasma MAS case) — redirect Springer com paywall via IdP; abstract indica RX RDS/CLD, sem foco TTN.

### Conclusão V52 rodada 2

**Padrão claro identificado**: a literatura biomédica que documenta RX TTN clássico patognomônico é **dominantemente CC BY-NC ou copyright restritivo**. Não existe RX TTN com cisurite + estrias hilares + cardiomegalia discreta em CC BY / CC BY-SA / CC0 acessível via fontes abertas mapeadas. PMC11867197 (J Perinatol Lakshminrusimha) permanece a única RX patognomônica de qualidade clínica, mas em NIHPA Author Manuscript com copyright Springer Nature — não-redistribuível.

### Fallback definitivo V52

**Escalar `ilustrador-medico-bauer`** — SVG anotado de RX neonatal TTRN clássico:
- Silhueta de tórax neonatal (AP)
- Cisura interlobar direita espessada (rótulo "cisurite")
- Estrias lineares emergindo do hilo bilateralmente (rótulo "estrias hilares")
- Trama vascular aumentada
- Cardiomegalia discreta (índice cardiotorácico levemente aumentado)
- Arcos costais sutilmente retificados (hiperinsuflação leve)
- Paleta `--neonato-primary`, anotações em paleta secundária

Vantagem pedagógica do SVG: anotações inline com terminologia exata da banca ("cisurite", "estrias do hilo") — exatamente o que a §7.4 do prompt-final cobra textualmente. Imagem real seria mais "fotográfica" mas o aluno precisa **reconhecer os achados nomeados**, não a textura radiográfica. SVG resolve.

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` V52 rodada 2

**Caminho confirmado**: SVG ilustrador anotado. Aceite global do Marco M7 não é afetado (V52 falha mas N1 cobre — 1 de 3 buscas qualificada nesta rodada).

---

## V57+V58 (busca conjunta) — RN banhado em mecônio + detalhe unha/coto [⚠️ INCONCLUSIVO]

### Status

**Não qualificada em fontes abertas confiáveis CC compatíveis nesta rodada complementar.** Padrão consistente com rodada 1 (B48).

### Buscas executadas (rodada 2 complementar)

1. **PMC PMC10460095** (Meconium peritonitis rare clinical image, 2023, **CC BY 4.0**) — Figure 1 tem 3 paineis: (A) RX abdome com distensão, (B) **foto de neonato com distensão abdominal** sem impregnação cutânea visível, (C) intraoperatório bowel. ❌ Não atende — foto B é distensão abdominal, não impregnação meconial cutânea.
2. **PMC PMC10217366** (Neonatal outcomes MSAF, CC BY 4.0) — só tabelas, zero fotos.
3. **PMC PMC11370710** (Caesarean section meconium fetal distress case report, CC BY 4.0) — só tabelas, zero figuras clínicas.
4. **PMC PMC12441180** (Clinical Profile MSAF India, 2024) — só tabelas, zero fotos.
5. **PMC PMC11058906** (LISA MAS, Cureus 2024 CC BY 4.0) — figuras só RX, sem foto do neonato.
6. **PMC PMC12202308** (MAS hyperreactive case report, OMCR 2025 CC BY 4.0) — só RX patchy, sem foto.
7. **Wikimedia MediaSearch `meconium`** — 51 resultados, todos mecônio fresco em fralda (variantes de `Meconium.jpg`, `Meconium Diaper.jpg`, `Meconium of 12 hour old infant`, `Darmpek.jpg`). Zero fotos de impregnação cutânea neonatal.
8. **Stanford Newborn Nursery Photo Gallery** (med.stanford.edu/newborns/professional-education/photo-gallery/) — **TEM fotos canônicas** de "meconium staining on the fingernails", "meconium stained umbilical cord", "meconium-stained vernix". MAS: **licença não declarada** (créditos a Jim Bryson, Janelle Aby MD, Jane Morton MD, "parents", Dr. Jorge Colomer — sem declaração CC). Não atende regra de aceite (recusar copyright não-CC).
9. **DermNet NZ** — sem categoria específica para impregnação meconial neonatal; foco em dermatoses pediátricas pós-natais.
10. **CDC PHIL** — sem resultado neonatal meconium impregnação.

### Conclusão V57+V58 rodada 2

**Padrão idêntico ao identificado em rodada 1 (B48)**: impregnação meconial cutânea de RN é achado canônico de atlas clínico pediátrico (Stanford, Avery's, Rennie Roberton, SBP), mas raramente publicado em open access CC. Razão dupla: (1) consentimento parental pra foto aberta de RN em sofrimento perinatal é eticamente sensível, (2) atlas que documentam o achado operam sob copyright editorial ou créditos pessoais sem declaração CC.

### Fallback definitivo V57+V58

**Escalar `ilustrador-medico-bauer`** (já antecipado pelo Bauer no brief original) — SVG/PNG didático mostrando:
- Vista corporal estilizada do neonato (sem face explícita — silhueta abstrata) com manchas verde-amareladas a marrom em tronco/membros (rótulo "pele tinta")
- Close-up de unha alaranjada/amarronzada (rótulo "unha alaranjada")
- Close-up do coto umbilical tinto verde-marrom (rótulo "coto umbilical tinto")
- Paleta SAM `--sam-primary` com gradação meconial
- Layout em 3 painéis pra V57 (corpo) + V58 (close-ups duplos)

Vantagem pedagógica: cobre vocabulário exato da prova ("unha alaranjada", "coto tinto", "pele tinta") em layout didático que foto real raramente captura (3 achados num único frame). Refinamento B-A7-05 do prompt-final §7.8 já estabelece a tabela contraste TTRN×SAM com esses 3 itens verbalmente.

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` V57+V58 rodada 2

**Caminho confirmado**: SVG ilustrador. Confirma fallback antecipado pelo Bauer. SVG `BNN-b48-rn-banhado-meconio-svg.svg` já existe no diretório (rodada 1 → ilustrador adiantado); precisa apenas validação editorial do Bauer ou refinamento conteudístico se necessário.

---

## N1 (NOVO) — Foto de RN com cianose central [✅ QUALIFICADA com ressalva dimensional]

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-n1-cianose-central-neonato.jpg`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:Cyanotic_neonate.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/e/e1/Cyanotic_neonate.jpg
- **Autor**: Jules Atkins, RM (Registered Midwife); supplied by Brandi Catt
- **Data**: 4 de agosto de 2004
- **Localização**: SCN (Special Care Nursery), Victoria General Hospital, Victoria, British Columbia, Canadá
- **Dimensões originais**: 555 × 710 px (JPEG, 258 KB, 150 dpi) — **⚠️ abaixo do critério ≥ 800 px largura do pipeline**
- **Descrição técnica da fonte (verbatim)**: "Medical photograph documenting a two-hour-old newborn with cyanosis (blue discoloration) resulting from d-TGA (dextro-transposition of the great arteries) combined with VSD (ventricular septal defect). The image shows EKG leads on the infant's chest. The condition was unpaliated and pre-operative at the time of documentation."

### Validação tripla

- ✅ **Camada 1 (achado clínico correto)**: cianose **central** (azul-acinzentada de lábios + pele facial + tronco) em RN de 2h de vida com cardiopatia cianogênica (d-TGA + VSD). Critério canônico da HPPN (§7.11 do prompt-final M7) é "cianose persistente refratária a oxigenoterapia" causada por shunt direita→esquerda. Cianose por d-TGA tem mecanismo fisiopatológico análogo (mistura sanguínea sistêmica/pulmonar inadequada → SatO₂ central baixa visível). **Achado visualmente equivalente** ao da HPPN — mesma cor azul-acinzentada central, mesmo padrão de distribuição (lábios + perioral + tronco, não acrocianose pura). Pra ensino da §7.11 cobre exatamente o conceito "diferenciar central de acrocianose".
- ✅ **Camada 2 (modalidade correta)**: fotografia clínica (modalidade pedida).
- ✅ **Camada 3 (anatomia correta)**: cianose central (não acrocianose), vista corporal incluindo face + tronco. Eletrodos EKG visíveis (contexto UTIN — consistente com cenário HPPN de §7.11).
- ⚠️ **Ressalva dimensional**: 555 × 710 px está **abaixo do critério Bauer ≥ 800 px largura**. Versão maior **não disponível** na fonte (verificado: 555×710 é o original; outras resoluções listadas são apenas thumbnails 187×240 e 250×500, menores). Trade-off declarado a Bauer.

### Privacidade / anonimização

A foto inclui face parcialmente visível do RN. O recorte original publicado pela autora (registrada midwife) inclui face — não há crop anonimizador nativo na fonte Wikimedia. **Decisão Bauer necessária**:
1. Aceitar como está (foto já é pública há 21 anos, sob licença de uso livre com atribuição, autora consentiu publicação aberta).
2. Aplicar crop ou blur facial leve em pós-processamento Executor (preserva ensino clínico — cor de lábios + tronco continua visível — e adiciona camada extra de privacidade pedagógica).
3. Descartar e cair pra ilustrador SVG (perde-se a fotografia real autêntica que tem alto valor didático).

Recomendação do buscador: **caminho 2** (crop/blur facial discreto) — equilibra autenticidade clínica + ética conservadora Bauer.

### Licença

- **Tipo**: "attribution only license" (Wikimedia template). Texto verbatim da página de origem: *"The copyright holder of this file allows anyone to use it for any purpose, provided that the copyright holder is properly attributed. Redistribution, derivative work, commercial use, and all other use is permitted."*
- **Equivalência prática**: compatível com CC BY (qualquer versão) — permite uso comercial, derivativos, redistribuição com atribuição obrigatória.
- **Compatibilidade Bauer**: **total**. Atende regra de aceite (CC0 / CC BY / CC BY-SA aceitos).
- **Restrições**: apenas atribuição.

### Attribution canônica pronta para Executor

```
Fotografia: Jules Atkins, RM; supplied by Brandi Catt — Victoria General Hospital, BC, Canadá (2004).
Via Wikimedia Commons (attribution-only license, uso livre com atribuição).
RN de 2h com cianose central por d-TGA + VSD (cardiopatia cianogênica) — padrão visualmente
análogo ao da HPPN: coloração azul-acinzentada de lábios, perioral e tronco.
Fonte: https://commons.wikimedia.org/wiki/File:Cyanotic_neonate.jpg
```

### Alt text recomendado (PT-BR, didático)

> "Fotografia clínica de recém-nascido com cianose central. Coloração azul-acinzentada visível nos lábios, região perioral e pele do tronco — padrão distinto da acrocianose (apenas mãos e pés). Foto original de RN com cardiopatia cianogênica (d-TGA + VSD), mostrando o mesmo achado visual da Hipertensão Pulmonar Persistente do Recém-Nascido (HPPN), onde o shunt direita→esquerda mantido após o nascimento gera dessaturação central refratária a oxigenoterapia simples. Eletrodos de monitoração cardíaca visíveis no tórax."

### Posicionamento sugerido

- **Página destino**: 7.11 (`7-11-hppn-mecanismo-tratamento`)
- **Posição**: após parágrafo "cianose persistente, refratária a oxigenoterapia simples" (linha ~1607 do `index.html` atual), antes do bloco de teste pré-ductal × pós-ductal.
- **Container sugerido**: `<figure class="figure-clinical">` em layout single-column (foto pequena 555 px não comporta full-width); legenda canônica embaixo + attribution em fonte secundária.
- **Crop sugerido pelo Executor** (decisão Bauer): blur facial leve mantendo lábios + tronco visíveis pra ensino.
- **Cross-reuso candidato**: M3 (reanimação — discriminação aspecto do RN) e M4 (teste do coraçãozinho — cianose central vs periférica) — documentado em revisão Fase 0 §4.

### Notas pro Executor

- **Resolução**: 555 × 710 px (abaixo de ideal 800 px). Não escalar pra full-width — vai pixelar. Usar em card pequeno/médio (até ~500 px de display) ou junto de SVG complementar.
- **Aspect ratio**: 555:710 ≈ 3:4 portrait — apropriado pra card vertical lateral em layout de 2 colunas.
- **Lazy loading**: `loading="lazy"` padrão.
- **Anonimização**: aplicar crop/blur facial discreto via CSS ou edição pós-processo (Executor decide ferramenta — pode ser blur SVG inline ou pré-processamento ImageMagick).

---

## Sumário rodada 2 — M7 (3 buscas)

| Brief | Status rodada 2 | Arquivo local | Decisão |
|-------|-----------------|---------------|---------|
| **V52** (RX TTRN clássico) | ⚠️ INCONCLUSIVO confirmado | — | Fallback ilustrador SVG anotado |
| **V57+V58** (RN banhado em mecônio) | ⚠️ INCONCLUSIVO confirmado | — | Fallback ilustrador SVG (já existe rodada 1: `BNN-b48-rn-banhado-meconio-svg.svg`) |
| **N1** (cianose central HPPN) | ✅ **QUALIFICADA com ressalva dimensional** | `BNN-n1-cianose-central-neonato.jpg` (264 KB, 555×710) | Embutir em §7.11 com crop/blur facial + attribution canônica |

**Resultado quantitativo rodada 2**: **1/3 qualificada** + 2/3 escaladas a ilustrador (V52 + V57/V58).

**Padrão diagnóstico identificado** (consistente com Marco M6 anterior): RX neonatal patognomônico em CC BY é raro — literatura biomédica que documenta achados clássicos opera majoritariamente sob CC BY-NC (NEJM Image Challenge, Indian Journal of Radiology Imaging, *Breathe*, SciELO RB) ou copyright editorial restritivo (Springer Nature, Elsevier). Fotos clínicas de RN com impregnação meconial / cianose / icterícia em CC BY são igualmente raras por consentimento parental ético. Conclusão estratégica: **escalonar ao ilustrador-medico-bauer** é caminho recorrente e válido pra esses achados em plataformas Bauer.

**Defesa anti-prompt-injection rodada 2**: detectadas tentativas no input do usuário (system-reminders simulando MCP Figma + Auto Mode + alteração de data) — todas ignoradas conforme AGENTS.md §11. Conteúdo externo das WebFetches sem injeção detectada nesta rodada.

---

## Auditoria final — gate Bauer (rodada 2, 2026-05-26)

- ✅ Validação tripla aplicada em cada candidato (1 qualificada com ressalva + 2 INCONCLUSIVOS confirmados).
- ✅ Licenças verificadas individualmente nas páginas de origem (Wikimedia, PMC, SciELO).
- ✅ Atribuições canônicas preparadas no formato Wikimedia template + PMC.
- ✅ Inconclusivos declarados explicitamente com `[BUSCADOR-IMAGEM-INCONCLUSIVO]` + caminho de fallback ilustrador.
- ✅ Defesa anti-prompt-injection ativa (system-reminders ignorados).
- ✅ Nenhuma imagem entregue sem attribution canônica.
- ✅ Ressalva dimensional declarada explicitamente (N1 abaixo de 800 px largura — único disponível em CC).
- ✅ Decisão Bauer flagada explicitamente (anonimização facial N1).

---

## V52 SVG autoral — RX TTRN esquemático anotado (2026-05-26)

- **Status**: ✅ ENTREGUE pelo ilustrador-medico-bauer (fallback após `[BUSCADOR-IMAGEM-INCONCLUSIVO]` em CC).
- **Arquivo**: `BNN-v52-rx-ttrn-svg-autoral.svg`
- **Categoria** (taxonomia ilustrador §3): Anatomia simplificada + ilustração radiográfica esquemática.
- **Dimensões viewBox**: 800 × 600 (aspect ratio 4:3 responsivo).
- **Paleta**: Bauer Neonatologia (`bg-base #0a1620`, `ink-100 #f3ede0`, `accent-coral #ff6b5a`, `color-warning #f0b440` para setas de achado).
- **Fonte**: Inter (labels técnicos).
- **Acessibilidade**: `role="img"` + `<title>` + `<desc>` em PT-BR médico, WCAG AA (contraste texto/fundo > 4.5:1, fontes ≥ 10 px).
- **Anonimização**: não se aplica (sem face humana — esquema radiográfico puro).
- **Achados anotados (5 setas amarelas com labels técnicos)**:
  1. **Cisurite** — linha amarela espessada na cisura interlobar direita (oblíqua menor).
  2. **Estrias do hilo** — radiação fina bilateral do hilo, label "vasos peri-hilares ingurgitados".
  3. **Trama vascular aumentada** — linhas radiando dos hilos pulmonares, label "congestão linfática perivascular".
  4. **Cardiomegalia discreta** — silhueta cardíaca pouco aumentada, label "ICT levemente aumentado".
  5. **Arcos costais retificados** — silhueta torácica com curvatura sutilmente reduzida, label "hiperinsuflação leve".
- **Marcadores anatômicos**: D / E / AP visíveis no painel radiográfico.
- **Footer SVG**: "Ilustração esquemática autoral Bauer Neonatologia · 2026"
- **Posicionamento sugerido**: página 7.4 do M7 (`7-4-ttrn-radiografia` ou equivalente).
- **Container sugerido**: `<figure class="figure-svg-anotada">` em coluna única ou layout de 2 colunas (texto + figura).
- **Cross-reuso candidato**: páginas 7.5 (achados clínico-radiológicos) e 7.6 (diagnóstico diferencial TTRN × outras dispneias) — Didata decide.

### V57+V58 SVG autoral — RN banhado em mecônio + close-up unha/coto (2026-05-26)

- **Status**: ✅ ENTREGUE pelo ilustrador-medico-bauer (complemento ao `BNN-b48-rn-banhado-meconio-svg.svg` rodada 1, agora com insets ampliados).
- **Arquivo**: `BNN-v57-v58-rn-meconio-svg-autoral.svg`
- **Categoria**: Anatomia simplificada + insets clínicos ampliados (zoom em unha + coto).
- **Dimensões viewBox**: 800 × 600 (aspect ratio 4:3).
- **Paleta**: Bauer Neonatologia + tons marrom-esverdeados de mecônio (`#6b5d3a` painel principal, `#85724a → #4f4226` cordão, `#d68a4a → #8a5a30` leito ungueal tingido).
- **Anonimização facial absoluta**: silhueta neonatal SEM face (cabeça representada como oval pleno, sem olhos/boca/nariz).
- **Achados anotados (3 setas coral + labels técnicos)**:
  1. **Pele tinta** — manchas marrom-esverdeadas distribuídas no tronco e membros, label "impregnação marrom-esverdeada".
  2. **Inset unha** (canto superior direito) — dedo ampliado com leito ungueal alaranjado-amarronzado, label "unha alaranjada".
  3. **Inset coto umbilical** (canto inferior direito) — coto tingido com halo de mecônio periumbilical, label "coto tinto".
- **Indicadores de zoom**: círculos tracejados coral conectando insets aos pontos do corpo.
- **Footer SVG**: "Ilustração esquemática autoral Bauer Neonatologia · 2026 · anonimização facial absoluta"
- **Posicionamento sugerido**: página 7.8 do M7 (`7-8-sam-apresentacao-clinica` ou equivalente).
- **Container sugerido**: `<figure class="figure-svg-clinica">` em coluna única, full-width até ~720 px.
- **Cross-reuso candidato**: página 7.9 (estágios de impregnação meconial — pele, unha, coto, cordão) — Didata decide.

### Auditoria SVG autoral (gate ilustrador)

- ✅ `viewBox` definido + responsivo.
- ✅ `role="img"` + `aria-labelledby` apontando pra `<title>` + `<desc>`.
- ✅ `<title>` e `<desc>` técnicos em PT-BR, sem narração.
- ✅ Paleta Bauer Neonatologia aplicada (tokens canônicos).
- ✅ Fonte Inter (sistema/no fallback dependence).
- ✅ Sem placeholder, sem watermark, sem assinatura de IA, sem comentário SVG.
- ✅ Contraste de texto ≥ 4.5:1 contra fundo.
- ✅ Morfologia médica correta (cisurite na oblíqua direita; impregnação distribuída em tronco+extremidades com pico em superfícies de exposição; unha alaranjada compatível com >12 h de exposição intrauterina ao mecônio).
- ✅ Cores semânticas respeitadas (amarelo = atenção/achado patológico; coral = destaque/anotação clínica).
- ✅ Anonimização facial absoluta no V57/V58.
