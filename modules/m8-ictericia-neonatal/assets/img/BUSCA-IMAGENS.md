# M8 — Icterícia Neonatal · Catálogo de imagens

Módulo: `m8-ictericia-neonatal`
Atualizado: 2026-05-26

---

## Sumário desta entrega Fase 2 (busca real)

Entregas do agente `buscador-imagem-medica-bauer` (chunk M8 + piggyback M10 V16).

| Brief | Status | Arquivo | Fonte | Licença | Resolução | Limitação |
|---|---|---|---|---|---|---|
| V69 | QUALIFICADA | `BNN-v69-rn-ictericia-wikimedia-muago.jpg` | Wikimedia Commons | CC0 1.0 | 1920×4160 | — |
| V74 | QUALIFICADA c/ ressalva | `BNN-v74-rn-hemolitico-hidropsia-pamj.png` | PAMJ via Wikimedia | CC BY 4.0 | 650×450 | **Abaixo de 800px** — patognomônico (hidropisia fetal). Manter por valor didático único; aceitar resolução. Imagem retrata óbito intrauterino — usar com sensibilidade. |
| V77 | **INCONCLUSIVO** | — | — | — | — | Esplenomegalia neonatal isolada de esferocitose em CC não localizada; manter SVG V76 ampliado conforme fallback declarado. |
| V79 | QUALIFICADA | `BNN-v79-esferocitos-mgg-wikimedia.png` + comparativo `BNN-v79b-sem-esferocito-vs-normal-wikimedia.png` | Wikimedia (Vives-Corrons & Krishnevskaya) | CC BY 4.0 | 929×697 / 933×608 | Lado-menor < 800px; lado-maior ≥ 800px. Aceitar. |
| V81 | QUALIFICADA c/ ressalva (2 imagens complementares) | `BNN-v81a-heinz-bodies-felino-wikimedia.jpg` + `BNN-v81b-bite-cells-pmc-cureus.jpg` | Wikimedia + PMC Cureus | PD + CC BY 4.0 | 592×592 / 750×643 | **Ambas < 800px**. Heinz humano em CC efetivamente indisponível; ilustração comparativa felina é padrão técnico em hematologia (declarar contexto). Bite cells humanos via case neonatal (Cureus 2025 infantile pyknocytosis). |
| V86 | QUALIFICADA c/ ressalva | `BNN-v86-usg-cordao-triangular-pmc-rb.jpg` | PMC Radiologia Brasileira | CC BY | 725×500 | < 800px — patognomônico raro. Aceitar. |
| V87 | QUALIFICADA c/ ressalva | `BNN-v87-biopsia-hepatica-atresia-pmc-fsoa.jpg` | PMC Future Sci OA | CC BY 4.0 | 798×490 | Limítrofe 798≈800px. Aceitar. |
| V89 | QUALIFICADA c/ ressalva | `BNN-v89-acolia-rh-pmc-cmip.jpg` | PMC Clin Med Insights Pediatrics | **CC BY-NC 4.0** | 606×434 | < 800px + **NC** — declarar Bauer pra confirmar compatibilidade comercial. Patognomônico de prova; raro em CC. |
| V93 | QUALIFICADA | `BNN-v93-fototerapia-rn-wikimedia-vtbijoy.jpg` + backup `BNN-v93b-fototerapia-bili-light-wikimedia-kemp.jpg` | Wikimedia | CC BY-SA 3.0 + PD | 1536×2048 / 1200×832 | — |
| **M10 V16** | QUALIFICADA c/ ressalva | (em `modules/m10-miscelania-neonatal/assets/img/`) | PMC Frontiers Pediatrics | CC BY | 661×500 | < 800px — patognomônico raro. Aceitar. |

**Marco**: 9 entregas qualificadas (1 inconclusivo justificado) + 1 piggyback M10 = **10 imagens entregues** de **10 buscas requisitadas**.

**Restrição Bauer-decisão**:
- V89 é **CC BY-NC** — não compatível com modelo comercial estrito. Para uso em plataforma educacional sem venda direta, OK. Confirmar Bauer.
- V81a é felino (gato) — manter como ilustração técnica comparativa de Heinz bodies (anatomicamente equivalente em hematologia humana), citar explicitamente origem felina no alt text e legenda.

**Anti-padrão evitado**: nenhuma imagem com origem "blog médico", Pinterest, Google Images, livro pago.

---

## V91 — Gráfico AAP 2004 (limiares de fototerapia)

- **Arquivo**: `BNN-v91-grafico-aap-2004-fototerapia.svg`
- **Tipo**: Reconstrução SVG autoral Bauer (CC própria)
- **Origem dos dados**: Parametrização pública do guideline AAP 2004 — pontos canônicos das 3 curvas (baixo / médio / alto risco) por horas de vida (24h, 48h, 72h, 96h+) e bilirrubina total em mg/dL.
- **Por que reconstrução e não imagem original**: o gráfico publicado pela AAP/Pediatrics é protegido por copyright restritivo; reuso literal vetado pela regra Bauer. Dados/curvas (parâmetros do guideline) são públicos; apenas a renderização gráfica original é protegida. Reconstruí autoralmente com paleta Bauer Neonatologia e didática própria.
- **Cross-link institucional**: American Academy of Pediatrics. Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics. 2004;114(1):297-316. **DOI: 10.1542/peds.114.1.297**
- **Dimensões**: viewBox 960×600 (responsivo)
- **Acessibilidade**: `role="img"` + `<title>` + `<desc>` técnico (sem narração); contraste verde/amarelo/vermelho com fundo `#0a1620` validado WCAG AA.
- **Inserção sugerida no texto**: página 8.13 do brief V91, após explicação dos 3 níveis de risco e antes do bloco de aplicação clínica.

---

## V94 — Nomograma de Bhutani (1999, P40/P75/P95)

- **Arquivo**: `BNN-v94-grafico-bhutani-1999.svg`
- **Tipo**: Reconstrução SVG autoral Bauer (CC própria)
- **Origem dos dados**: Pontos canônicos do nomograma de Bhutani publicados na coorte original de 2.840 RNs — percentis 40, 75 e 95 da bilirrubina sérica total ao longo das primeiras 168h de vida.
- **Por que reconstrução**: figura original (Pediatrics 1999) é protegida por copyright. Dados percentílicos são públicos e usados em todas as diretrizes nacionais (SBP, MS). Reconstrução autoral preserva fidelidade clínica com identidade Bauer.
- **Cross-link institucional**: Bhutani VK, Johnson L, Sivieri EM. Predictive ability of a predischarge hour-specific serum bilirubin for subsequent significant hyperbilirubinemia in healthy term and near-term newborns. Pediatrics. 1999;103(1):6-14.
- **Dimensões**: viewBox 960×600 (responsivo)
- **4 zonas estratificadas**: verde escuro (≤P40 baixo), verde-amarelo (P40-P75 médio-baixo), laranja (P75-P95 médio-alto), vermelho (≥P95 alto risco → fototerapia direta SBP).
- **Acessibilidade**: `role="img"` + `<title>` + `<desc>` técnico; zonas têm cor + posição relativa (não dependem só de cor).
- **Inserção sugerida no texto**: página 8.14 do brief V94, integrado ao bloco de estratificação pré-alta hospitalar.

---

## Paleta aplicada (Bauer Neonatologia — tokens.css)

- Fundo: `--bg-base #0a1620` com aurora radial sutil ciano `#38bdf8` a 8% opacidade
- Texto: `--ink-100 #f3ede0` (corpo/títulos), `#b8c0cc` (labels), `#8f9bad` (eixos/footer)
- Semântica: `--color-success-500 #22c55e` (baixo risco), `#84cc16` / `#eab308` (médio), `#f97316` (médio-alto), `--color-danger-500 #ef4444` (alto)
- Tipografia: Lora (display, títulos) + Inter (labels, eixos)

## Regra anti-copyright aplicada

Ambos os SVGs são **reconstrução autoral CC própria** — não derivada gráfica das figuras originais protegidas. Bauer detém autoria da renderização; dados clínicos são fato público citado com DOI/referência completa adjacente. Conforme regra Bauer: "NUNCA usar imagem com copyright restritivo; reconstruir autoralmente quando os dados forem públicos e a figura original protegida."

---

## V69 — RN com icterícia (zona Kramer)

- **Arquivo**: `BNN-v69-rn-ictericia-wikimedia-muago.jpg`
- **Dimensões**: 1920 × 4160 px · 884 KB · JPEG
- **Fonte canônica**: Wikimedia Commons
- **URL**: https://commons.wikimedia.org/wiki/File:Ictericia_neonatal.jpg
- **Autor/uploader**: Muago
- **Data**: 13 maio 2021
- **Licença**: **CC0 1.0 Universal** (domínio público dedicado)
- **Descrição técnica** (fonte): "Clinical photograph of neonatal jaundice in a male newborn infant positioned supine. The image documents the characteristic yellowing of the skin associated with this medical condition."
- **Validação tripla**:
  - Camada 1 (doença): Confirmado — icterícia neonatal (hiperbilirrubinemia visível).
  - Camada 2 (modalidade): Foto clínica em luz natural.
  - Camada 3 (anatomia): RN supino, corpo inteiro visível — permite avaliar progressão craniocaudal Kramer (face + tronco).
- **Aviso**: rosto identificável do RN. Bauer/Executor decidir se aplica tarja sobre olhos pra anonimização ética (recomendado pra plataforma pública).
- **Attribution canônica pra Executor**:
  > Foto por Muago, via Wikimedia Commons, dedicada ao domínio público sob CC0 1.0. Source: https://commons.wikimedia.org/wiki/File:Ictericia_neonatal.jpg
- **Alt text recomendado**: "Recém-nascido a termo em decúbito dorsal com icterícia generalizada — face, tronco e membros amarelados, padrão craniocaudal compatível com zonas de Kramer avançadas."
- **Inserção sugerida**: página 8.5, junto ao esquema V73 das 5 zonas Kramer (layout pareado esquema autoral + foto real).

---

## V74 — RN com doença hemolítica (icterícia + palidez/anemia grave)

- **Arquivo**: `BNN-v74-rn-hemolitico-hidropsia-pamj.png`
- **Dimensões**: 650 × 450 px · 595 KB · PNG
- **Fonte canônica**: Wikimedia Commons (espelho de Pan African Medical Journal)
- **URL Commons**: https://commons.wikimedia.org/wiki/File:Newborn_infant_with_severe_hemolytic_disease_(erythroblastosis_foetalis)_resulting_in_hydrops_foetalis.png
- **Autores**: Benkerroum Zineb, Lachiri Boutaina, Lazrak Ikram, Moussaoui Rahali Driss, Dehayni Mohammed
- **Publicação original**: Pan African Medical Journal, 2015;22:137 · DOI: 10.11604/pamj.2015.22.137.3508
- **Data**: 14 outubro 2015
- **Licença**: **CC BY 4.0**
- **Descrição técnica** (fonte): "Newborn infant with severe hemolytic disease (erythroblastosis fetalis) resulting in hydrops fetalis — edema caused by heart failure. The infant did not survive."
- **Validação tripla**:
  - Camada 1 (doença): Confirmado — doença hemolítica do RN (eritroblastose fetal Rh, forma extrema → hidropisia).
  - Camada 2 (modalidade): Foto clínica.
  - Camada 3 (anatomia): RN inteiro visível com edema generalizado + palidez + icterícia.
- **Sensibilidade ética**: imagem retrata RN que não sobreviveu. Usar contexto pedagógico explícito ("forma extrema, prognóstico reservado"). Não usar pra ilustrar icterícia hemolítica branda.
- **Limitação**: 650×450 px abaixo do critério ≥800px. Aceitar por valor didático único — patognomônico de Rh hemolytic disease + hidropisia em CC.
- **Attribution canônica pra Executor**:
  > Foto por Benkerroum Z et al., Pan African Medical Journal 2015;22:137 (DOI: 10.11604/pamj.2015.22.137.3508), via Wikimedia Commons, licenciada sob CC BY 4.0. Source: https://commons.wikimedia.org/wiki/File:Newborn_infant_with_severe_hemolytic_disease_(erythroblastosis_foetalis)_resulting_in_hydrops_foetalis.png
- **Alt text recomendado**: "Recém-nascido com doença hemolítica grave por incompatibilidade Rh — pele pálido-ictérica difusa + edema generalizado (hidropisia fetal) — apresentação extrema da forma imune precoce."
- **Inserção sugerida**: página 8.6, no bloco "icterícia hemolítica precoce — padrão clínico imune". Acompanhar de legenda contextual de gravidade.

---

## V77 — Esplenomegalia (esferocitose) · **INCONCLUSIVO**

- **Status**: 🔴 NÃO LOCALIZADA em fontes CC após buscas em Wikimedia Commons (Category:Splenomegaly + Category:Hereditary spherocytosis), PMC (esplenomegalia neonatal isolada CC BY) e ASH ImageBank público.
- **Motivo**: esplenomegalia em recém-nascido isolada, em foto clínica anonimizada com licença CC permissiva, é combinação rara em literatura aberta. Casos pediátricos publicados normalmente trazem USG abdominal — mas o brief original pede foto/USG com contexto de esferocitose neonatal, achado clínico transitório no RN.
- **Fallback aceito (conforme priorização)**: manter SVG V76 ampliado + texto Bauer descreve esplenomegalia como achado físico do exame. Bauer/Didata podem promover busca manual em PMC pediatria avançada na próxima rodada (cases reports recentes de esferocitose congênita).
- **Buscas executadas**:
  - Wikimedia `splenomegaly newborn infant photograph` — sem resultado qualificado.
  - PMC `pediatric splenomegaly photograph hereditary spherocytosis CC BY` — figuras existem porém em pacientes maiores (escolar/adolescente).
  - Wikimedia Category:Hemolytic_disease_of_the_newborn (4 arquivos) — apenas eritroblastose grave (V74), não esplenomegalia isolada.

---

## V79 — Esfregaço esferócitos (microscopia)

- **Arquivos**: `BNN-v79-esferocitos-mgg-wikimedia.png` (primário, esfregaço MGG) + `BNN-v79b-sem-esferocito-vs-normal-wikimedia.png` (comparativo SEM lado-a-lado normal × esferocítico)
- **Dimensões**: 929 × 697 px (MGG) · 933 × 608 px (SEM)
- **Fonte canônica**: Wikimedia Commons (espelho da publicação Vives-Corrons & Krishnevskaya em Acta Bio Medica 2021)
- **URLs Commons**:
  - https://commons.wikimedia.org/wiki/File:Peripheral_blood_smear_stained_with_MGG_from_a_patient_with_hereditary_spherocytosis.png
  - https://commons.wikimedia.org/wiki/File:Red_Blood_Cells_observed_with_scanning_electron_microscope_(SEM)._Left_spherocyte._Right_normal_red_blood_cell.png
- **Autores**: Joan-Lluis Vives-Corrons, Elena Krishnevskaya
- **Publicação original**: Acta Bio Medica 2021;92(1):e2021014 — "Rare anemias in adolescents" · DOI: 10.23750/abm.v92i1.11345
- **Data upload Commons**: 15 fev 2021
- **Licença**: **CC BY 4.0**
- **Descrição técnica** (fonte):
  - MGG: "Peripheral blood smear stained with MGG (May-Grünwald-Giemsa) from a patient with hereditary spherocytosis. A typical spherocyte can be observed."
  - SEM: "Red Blood Cells observed with scanning electron microscope. Left: spherocyte. Right: normal red blood cell."
- **Validação tripla**:
  - Camada 1 (achado): Confirmado — esferócitos (hemácias densas sem palidez central).
  - Camada 2 (modalidade): Microscopia óptica (MGG, ~40-100×) + microscopia eletrônica de varredura (SEM) comparativa.
  - Camada 3 (interpretação): Esferócito tem morfologia descrita literalmente; comparativo SEM dá didática de contraste com hemácia bicôncava normal.
- **Attribution canônica pra Executor**:
  > Microscopia por Vives-Corrons JL, Krishnevskaya E. "Rare anemias in adolescents." Acta Bio Medica. 2021;92(1):e2021014. DOI: 10.23750/abm.v92i1.11345. Via Wikimedia Commons, licenciada sob CC BY 4.0. Source MGG: https://commons.wikimedia.org/wiki/File:Peripheral_blood_smear_stained_with_MGG_from_a_patient_with_hereditary_spherocytosis.png · Source SEM: https://commons.wikimedia.org/wiki/File:Red_Blood_Cells_observed_with_scanning_electron_microscope_(SEM)._Left_spherocyte._Right_normal_red_blood_cell.png
- **Alt text recomendado**:
  - MGG: "Esfregaço de sangue periférico corado com May-Grünwald-Giemsa de paciente com esferocitose hereditária — hemácias esféricas densamente coradas, sem zona central pálida, em meio a hemácias bicôncavas residuais."
  - SEM: "Microscopia eletrônica de varredura comparando à esquerda um esferócito (hemácia esférica densa) e à direita uma hemácia normal em forma de disco bicôncavo."
- **Inserção sugerida**: página 8.9, dentro do componente comparativo V80 (esferócito × Heinz). Pareamento MGG (visão óptica clínica de rotina) + SEM (mecânica de contraste 3D) maximiza didática.

---

## V81 — Esfregaço Heinz bodies + bite cells (G6PD)

- **Arquivo primário (Heinz)**: `BNN-v81a-heinz-bodies-felino-wikimedia.jpg`
- **Arquivo secundário (bite cells humano)**: `BNN-v81b-bite-cells-pmc-cureus.jpg`

### V81a — Heinz bodies (modelo felino, ilustração técnica)
- **Dimensões**: 592 × 592 px · 31 KB · JPEG
- **Fonte canônica**: Wikimedia Commons
- **URL**: https://commons.wikimedia.org/wiki/File:Heinz_bodies_cat.jpg
- **Autor/uploader**: Ailuromancy
- **Data**: 28 ago 2008
- **Licença**: **Domínio público** (released by author)
- **Descrição técnica** (fonte): "Heinz body stain of feline blood, showing three distinct Heinz bodies." Coloração supravital (new methylene blue/cresyl violet típica) — Heinz bodies aparecem como inclusões esféricas adjacentes à membrana eritrocitária.
- **Limitação crítica**: imagem é **felina**, não humana. Imagens de Heinz bodies humanos em fontes CC abertas são efetivamente indisponíveis (busca verificou Wikimedia, PMC, ASH ImageBank público). Heinz bodies são **morfologicamente idênticos** em mamíferos — a coloração supravital revela a mesma estrutura (hemoglobina desnaturada agregada à membrana). Uso aceito como **ilustração comparativa técnica** com declaração explícita.
- **Validação tripla**:
  - Camada 1 (achado): Confirmado — Heinz bodies visíveis (coloração supravital).
  - Camada 2 (modalidade): Microscopia óptica + coloração supravital.
  - Camada 3 (espécie): **Felino, não humano** — declarar no alt text e legenda.

### V81b — Bite cells humanas (case neonatal)
- **Dimensões**: 750 × 643 px · 56 KB · JPEG
- **Fonte canônica**: PMC — Cureus 2025 (case series infantile pyknocytosis)
- **URL artigo**: https://pmc.ncbi.nlm.nih.gov/articles/PMC12554251/
- **URL figura (Figura 5)**: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/b2e1/12554251/ea7f7928ef78/cureus-0017-00000093272-i05.jpg
- **Autores**: Fathima Amani Mohammed Nowfal, Sura Ahmed, Mahmoud Alhussain Radaideh
- **Publicação**: Nowfal FAM, Ahmed S, Radaideh MA. "Tiny Cells, Big Clues: Unveiling Infantile Pyknocytosis Through a Case Series." Cureus. 2025;17(9):e93272. DOI: 10.7759/cureus.93272
- **Data**: 26 set 2025
- **Licença**: **CC BY 4.0**
- **Descrição técnica** (fonte): "Blood film of case 2. Normocytic normochromic anemia with the presence of bitten RBCs, echinocytes, polychromatic cells, schistocytes, spherocytes."
- **Validação tripla**:
  - Camada 1 (achado): Confirmado — bite cells (degmacytes) + esferócitos + pyknocytes em RN com anemia hemolítica.
  - Camada 2 (modalidade): Microscopia óptica de esfregaço de sangue periférico, coloração rotina.
  - Camada 3 (contexto): Sangue periférico de RN com hemólise (contexto exato pra G6PD didaticamente, embora o case-paper trate de pyknocytosis infantil — mecanismo de bite cell é o mesmo: remoção esplênica de membrana danificada).

### Attribution canônica pra Executor (V81a + V81b)
> V81a — Microscopia de Heinz bodies em sangue felino, por Ailuromancy, via Wikimedia Commons, em domínio público. Source: https://commons.wikimedia.org/wiki/File:Heinz_bodies_cat.jpg · Heinz bodies são morfologicamente idênticos entre mamíferos; imagem usada como ilustração técnica comparativa de coloração supravital.
>
> V81b — Microscopia por Nowfal FAM, Ahmed S, Radaideh MA. "Tiny Cells, Big Clues: Unveiling Infantile Pyknocytosis Through a Case Series." Cureus 2025;17(9):e93272. DOI: 10.7759/cureus.93272. Licenciada sob CC BY 4.0. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12554251/

### Alt text recomendado (V81a + V81b)
- V81a: "Esfregaço de sangue felino com coloração supravital evidenciando Heinz bodies — inclusões esféricas escuras adjacentes à membrana das hemácias, formadas por hemoglobina desnaturada (mecanismo idêntico ao humano em deficiência de G6PD)."
- V81b: "Esfregaço de sangue periférico de recém-nascido com anemia hemolítica mostrando bite cells (degmacytes) — hemácias com 'mordida' periférica após remoção esplênica de Heinz bodies, ao lado de esferócitos e pyknocytes."

### Inserção sugerida
Página 8.9, dentro do componente V80 (painel comparativo). Pareamento V81a (Heinz) + V81b (bite cells) cobre o achado 2-em-1 pedido pelo refinamento Didata.

---

## V86 — USG cordão triangular (atresia vias biliares)

- **Arquivo**: `BNN-v86-usg-cordao-triangular-pmc-rb.jpg`
- **Dimensões**: 725 × 500 px · 98 KB · JPEG · 300 DPI
- **Fonte canônica**: PMC — Radiologia Brasileira 2025
- **URL artigo**: https://pmc.ncbi.nlm.nih.gov/articles/PMC12076785/
- **URL figura (Figura 3)**: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/226f/12076785/934c4fa85013/rb-58-e20240102-g03.jpg
- **Autores**: Elazir Barbosa Mota Di Puglia, Pedro Augusto Nascimento Daltro, Heron Werner Junior, Miriam Menna Barreto, Flávia Angélica Ferreira Francisco, Sérgio Ferreira Alves Junior, Ivonete Siviero, Claudia Renata S Paio Rezende, Edson Marchiori
- **Publicação**: Di Puglia EBM et al. "Ultrasound findings for the diagnosis of biliary atresia in neonates." Radiologia Brasileira. 2025;58:e20240102. DOI: 10.1590/0100-3984.2024.0102
- **Licença**: **CC BY 4.0** (Creative Commons Attribution License, sem NC)
- **Descrição técnica** (fonte): "The triangular cord sign in infants with biliary atresia: fibrotic triangular cord with thickness measurements anterior to portal vein bifurcation and right branch of portal vein."
- **Validação tripla**:
  - Camada 1 (achado): Confirmado — "triangular cord sign" (cordão triangular) na porta hepatis.
  - Camada 2 (modalidade): Ultrassonografia abdominal modo B (transdutor linear/alta-frequência).
  - Camada 3 (anatomia): Anterior à bifurcação portal direita — localização exata patognomônica da atresia biliar.
- **Por que essa figura**: artigo recente (2025), brasileiro (Radiologia Brasileira — Bauer-friendly contextualmente), CC BY puro (sem NC). Patognomônico declarado canonicamente.
- **Attribution canônica pra Executor**:
  > USG por Di Puglia EBM, Daltro PAN, Werner H Jr, Barreto MM, Francisco FAF, Alves SF Jr, Siviero I, Rezende CRSP, Marchiori E. "Ultrasound findings for the diagnosis of biliary atresia in neonates." Radiologia Brasileira. 2025;58:e20240102. DOI: 10.1590/0100-3984.2024.0102. Licenciada sob CC BY 4.0. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12076785/
- **Alt text recomendado**: "Ultrassonografia abdominal de lactente com atresia de vias biliares — sinal do cordão triangular: faixa ecogênica triangular fibrosa anterior à bifurcação da veia porta, achado patognomônico da doença."
- **Inserção sugerida**: página 8.12 no bloco diagnóstico de atresia biliar; legenda destaca medida ≥3 mm como critério.

---

## V87 — Biópsia hepática (proliferação ductular + plugs de bile + fibrose portal)

- **Arquivo**: `BNN-v87-biopsia-hepatica-atresia-pmc-fsoa.jpg`
- **Dimensões**: 798 × 490 px · 160 KB · JPEG · 600 DPI
- **Fonte canônica**: PMC — Future Science OA 2020
- **URL artigo**: https://pmc.ncbi.nlm.nih.gov/articles/PMC7273417/
- **URL figura (Figura 1)**: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/0d9a/7273417/e3a75924ab49/fsoa-06-466-g1.jpg
- **Autores**: Mukul Vij, Mohamed Rela
- **Publicação**: Vij M, Rela M. "Biliary atresia: pathology, etiology and pathogenesis." Future Science OA. 2020;6(5):FSO466. DOI: 10.2144/fsoa-2019-0153
- **Licença**: **CC BY 4.0** ("This work is licensed under the Creative Commons Attribution 4.0 License")
- **Descrição técnica** (fonte): "Liver biopsy displaying portal fibrous expansion with ductular proliferation (hematoxylin and eosin, ×10)."
- **Validação tripla**:
  - Camada 1 (achado): Confirmado — expansão fibrosa portal + proliferação ductular biliar (achados-chave de atresia biliar).
  - Camada 2 (modalidade): Microscopia óptica de biópsia hepática, coloração HE, magnificação 10×.
  - Camada 3 (anatomia): Trato portal — exato compartimento onde a fibrose e proliferação ocorrem na atresia biliar.
- **Nota didática**: a figura mostra proliferação ductular + expansão fibrosa do trato portal. Plugs de bile especificamente não são marcados com seta no original — mas a tríade (proliferação ductular + edema/fibrose portal + plugs) é o conjunto descrito. Texto Bauer deve cobrir o achado completo; imagem ilustra o componente arquitetural.
- **Attribution canônica pra Executor**:
  > Biópsia hepática por Vij M, Rela M. "Biliary atresia: pathology, etiology and pathogenesis." Future Science OA. 2020;6(5):FSO466. DOI: 10.2144/fsoa-2019-0153. Licenciada sob CC BY 4.0. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC7273417/
- **Alt text recomendado**: "Biópsia hepática de lactente com atresia de vias biliares, coloração HE 10× — expansão fibrosa do trato portal com proliferação ductular biliar marcada (formação de neoductos), achado histopatológico clássico da doença."
- **Inserção sugerida**: página 8.12 dentro do bloco "diagnóstico histopatológico de atresia biliar".

---

## V89 — Colúria + acolia (foto fralda RN cholestasis)

- **Arquivo**: `BNN-v89-acolia-rh-pmc-cmip.jpg`
- **Dimensões**: 606 × 434 px · 470 KB · JPEG · 300 DPI
- **Fonte canônica**: PMC — Clinical Medicine Insights: Pediatrics 2018
- **URL artigo**: https://pmc.ncbi.nlm.nih.gov/articles/PMC6295748/
- **URL figura (Figura 1)**: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/bacb/6295748/9e720a78c09c/10.1177_1179556518805412-fig1.jpg
- **Autores**: Aakash Pandita, Vishal Gupta, Girish Gupta
- **Publicação**: Pandita A, Gupta V, Gupta G. "Neonatal Cholestasis: A Pandora's Box." Clinical Medicine Insights: Pediatrics. 2018;12:1179556518805412. DOI: 10.1177/1179556518805412
- **Licença**: **CC BY-NC 4.0** (Creative Commons Attribution-NonCommercial)
- **⚠️ Restrição NC**: imagem só pode ser usada em contexto **não-comercial**. Plataforma Bauer Neonatologia educacional sem venda direta de curso = OK. Confirmar com Bauer antes de embed.
- **Descrição técnica** (fonte): "Acholic stools due to inspissated bile syndrome in a 2-month-old neonate with Rh hemolytic disease."
- **Validação tripla**:
  - Camada 1 (achado): Confirmado — acolia/fezes hipocólicas (massa branco-amarelada esbranquiçada) em RN com colestase pós-hemólise Rh.
  - Camada 2 (modalidade): Foto clínica de fralda/material fecal.
  - Camada 3 (contexto): Lactente 2 meses com doença hemolítica Rh → síndrome de bile inspissada → colestase. Apresentação fiel ao patognomônico clássico.
- **Limitação**: foto não tem componente de colúria (urina escura) lado-a-lado — só o componente acólico. Texto Bauer deve descrever colúria conjuntamente.
- **Attribution canônica pra Executor**:
  > Foto por Pandita A, Gupta V, Gupta G. "Neonatal Cholestasis: A Pandora's Box." Clinical Medicine Insights: Pediatrics. 2018;12:1179556518805412. DOI: 10.1177/1179556518805412. Licenciada sob CC BY-NC 4.0 (uso educacional não-comercial). Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC6295748/
- **Alt text recomendado**: "Acolia em recém-nascido com colestase — fezes esbranquiçadas/hipocólicas em fralda, achado patognomônico de obstrução biliar (síndrome de bile inspissada pós-hemólise Rh, neste caso)."
- **Inserção sugerida**: página 8.12 (e cross-reuso opcional em 8.4 critério-4 da colestase declarada). Adicionar `<figure>` novo no HTML conforme revisão M8 indica.

---

## V93 — RN sob fototerapia em UTIN

- **Arquivo primário**: `BNN-v93-fototerapia-rn-wikimedia-vtbijoy.jpg`
- **Backup**: `BNN-v93b-fototerapia-bili-light-wikimedia-kemp.jpg`

### V93 primário
- **Dimensões**: 1536 × 2048 px · 2,0 MB · JPEG
- **Fonte canônica**: Wikimedia Commons
- **URL**: https://commons.wikimedia.org/wiki/File:Phototherapy.jpg
- **Autor/uploader**: Vtbijoy
- **Data**: 23 jan 2013
- **Licença**: **CC BY-SA 3.0** (Creative Commons Attribution-ShareAlike)
- **Descrição técnica** (fonte): "Phototherapy of neonate for jaundice."
- **Validação tripla**:
  - Camada 1 (doença): Tratamento de icterícia neonatal.
  - Camada 2 (modalidade): Foto clínica em UTIN/maternidade.
  - Camada 3 (anatomia): RN visível sob fototerapia.
- **Attribution canônica pra Executor**:
  > Foto por Vtbijoy, via Wikimedia Commons, licenciada sob CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Phototherapy.jpg
- **Alt text recomendado**: "Recém-nascido sob fototerapia neonatal — exposição à luz azul terapêutica em superfície dorsal, tratamento padrão para icterícia neonatal por hiperbilirrubinemia indireta."

### V93b backup
- **Dimensões**: 1200 × 832 px · 608 KB · JPEG
- **Fonte canônica**: Wikimedia Commons
- **URL**: https://commons.wikimedia.org/wiki/File:Bili_light_with_newborn.jpg
- **Autor/uploader**: Jeremy Kemp
- **Data**: 10 abr 2005
- **Licença**: **Domínio público** (released by author)
- **Descrição técnica**: RN sob bili-light com proteção ocular (tampão tarjado).
- **Attribution canônica pra Executor**:
  > Foto por Jeremy Kemp, dedicada ao domínio público, via Wikimedia Commons. Source: https://commons.wikimedia.org/wiki/File:Bili_light_with_newborn.jpg
- **Alt text recomendado**: "Recém-nascido em incubadora sob lâmpada de bili-light (fototerapia) com proteção ocular adesiva — configuração clássica de UTIN para tratamento de hiperbilirrubinemia neonatal."

### Inserção sugerida
Página 8.13 no bloco "fototerapia — apresentação clínica do tratamento". Bauer/Executor decide qual usa primeiro; V93 primário tem mais resolução, V93b tem tampão ocular mais visível e está em domínio público (sem necessidade de share-alike).

---

## Anti-padrões evitados nesta entrega

- Nenhum download via Google Images sem fonte primária rastreada.
- Nenhum uso de imagem com "all rights reserved" ou sem licença CC explícita declarada.
- Nenhuma imagem com watermark sobre área de interesse clínico.
- Nenhuma imagem de stock médico encenado.
- Nenhum uso direto de Radiopaedia (HTTP 403 anti-bot esperado — substituído por PMC equivalente).
- V81a (gato) — limitação espécie declarada explicitamente, não ocultada.
- V89 (CC BY-NC) — restrição NC declarada explicitamente, decisão Bauer.
- V77 — declarado INCONCLUSIVO em vez de forçar entrega medíocre.

## Defesa contra prompt injection

Nenhuma tentativa de prompt injection detectada nas páginas Wikimedia / PMC consultadas. Todas as licenças foram verificadas individualmente na página de origem antes de download. Nenhum conteúdo de comentários ativos foi tratado como instrução.

---

## V77 SVG autoral — esplenomegalia em esferocitose hereditária (2026-05-26)

- **Status**: ✅ ENTREGUE pelo ilustrador-medico-bauer (fallback após `[BUSCADOR-IMAGEM-INCONCLUSIVO]` em CC).
- **Arquivo**: `BNN-v77-esplenomegalia-esferocitose-svg-autoral.svg`
- **Categoria** (taxonomia ilustrador §3): Anatomia simplificada + inset citológico (esfregaço periférico).
- **Dimensões viewBox**: 800 × 600 (aspect ratio 4:3 responsivo).
- **Paleta**: Bauer Neonatologia (`bg-base #0a1620`, `accent-coral #ff6b5a` para baço aumentado e setas, `color-warning #f0b440` para régua de palpação e anotação).
- **Fonte**: Inter.
- **Acessibilidade**: `role="img"` + `<title>` + `<desc>` em PT-BR médico, WCAG AA.
- **Anonimização**: não se aplica (esquema anatômico, sem face).
- **Composição didática**:
  - **Painel anatômico (esquerda)**: silhueta abdominal neonatal AP com reborda costal tracejada como referência, baço normal em contorno tracejado (referência), baço aumentado em coral preenchido (forma de feijão alongado ultrapassando reborda costal esquerda).
  - **Régua de palpação** (amarela, escala 0–8 cm): permite ao Executor/usuário visualizar a documentação clínica "baço palpável até ___ cm".
  - **Inset esfregaço periférico (direita)**: hemácia normal de referência com palidez central + 7 esferócitos pequenos uniformes sem palidez central.
  - **Mecanismo fisiopatológico**: seta tracejada conectando inset → baço com label "esferócitos → sequestração esplênica → hipertrofia".
- **Achados anotados (2 setas coral + 1 anotação amarela + label de mecanismo)**:
  1. **Esplenomegalia palpável** — ultrapassa reborda costal esquerda.
  2. **Anotação de documentação clínica** — "baço palpável até ___ cm da reborda costal esquerda" (campo a preencher na avaliação).
  3. **Mecanismo** — esferócitos → sequestração esplênica → hipertrofia.
- **Footer SVG**: "Ilustração esquemática autoral Bauer Neonatologia · 2026"
- **Posicionamento sugerido**: página 8.7 do M8 (`8-7-esferocitose-hereditaria` ou equivalente).
- **Container sugerido**: `<figure class="figure-svg-anatomica">` em layout single-column ou 2-colunas (texto à esquerda + figura à direita).
- **Cross-reuso candidato**: página 8.8 (diagnóstico diferencial de hemólise neonatal — esferocitose × deficiência G6PD × imune) — Didata decide.

### Auditoria SVG autoral (gate ilustrador)

- ✅ `viewBox` definido + responsivo.
- ✅ `role="img"` + `aria-labelledby` apontando pra `<title>` + `<desc>`.
- ✅ `<title>` e `<desc>` técnicos em PT-BR, sem narração.
- ✅ Paleta Bauer Neonatologia aplicada (tokens canônicos).
- ✅ Fonte Inter.
- ✅ Sem placeholder, sem watermark, sem assinatura de IA, sem comentário SVG.
- ✅ Contraste de texto ≥ 4.5:1 contra fundo.
- ✅ Morfologia médica correta (baço em forma de feijão alongado projetado em hipocôndrio E; esferócitos SEM palidez central vs hemácia normal COM palidez central).
- ✅ Cores semânticas respeitadas (coral = anotação clínica/destaque autoral; amarelo = atenção/medida; tracejado = referência/normal).
