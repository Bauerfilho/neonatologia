# Busca de imagens médicas — Módulo 1 Neonatologia (Classificação RN + Sífilis Congênita)

**Data de execução**: 2026-05-25
**Agente**: buscador-imagem-medica-bauer
**Modo**: --auto
**Briefs recebidos**: 8 (B01, B02, B03, B04, B05, B06, B07, B17)
**Origem dos briefs**: `/Users/bauervieiracesarfilhovieira/Documents/neonatologia/prompts-finais/prompt-final-aula1.md` §7 (briefs B01-B07 + página 1.2 B17)
**Diretório de destino**: `/Users/bauervieiracesarfilhovieira/Documents/neonatologia/modules/m1-classificacao-sifilis/assets/img/`

---

## Sumário executivo

| Brief | Status | Arquivo local | Fonte | Licença |
|---|---|---|---|---|
| B01 — Periostite RX | OK | `BNN-b01-periostite-rx.jpg` + `BNN-b01-periostite-rx-membro-superior.jpg` | PMC 12676640 (AJTMH 2025) | CC-BY 4.0 |
| B02 — Pênfigo palmoplantar | OK | `BNN-b02-penfigo-palmar.jpg` + `BNN-b02-penfigo-plantar-direito.jpg` | PMC 11492971 (Cureus 2024) | CC-BY 4.0 |
| B03 — Rinite serossanguinolenta + placas mucosas | **INCONCLUSIVO** | — | — | — |
| B04 — Fronte olímpica | OK | `BNN-b04-fronte-olimpica.jpg` | CDC PHIL 16744 (via Wikimedia) | CC0 / Public Domain |
| B05 — Tíbia em sabre | OK | `BNN-b05-tibia-em-sabre.jpg` | CDC PHIL 2387 (via Wikimedia) | Public Domain (US Federal) |
| B06 — Dente Hutchinson + molar em amora | OK (composta) | `BNN-b06-dente-hutchinson.jpg` (Hutchinson alta-res) + `BNN-b07-estigmas-faciais.jpg` (Hutchinson + mulberry no mesmo paciente) | CDC PHIL 2385 + CDC PHIL 16463 | Public Domain (US Federal) |
| B07 — Nariz em cela | OK | `BNN-b07-estigmas-faciais.jpg` (composto: saddle nose + frontal bossing + Hutchinson + mulberry molars + cataract) | CDC PHIL 16463 (via Wikimedia) | Public Domain (US Federal) |
| B17 — Pré-termo extremo na palma | **INCONCLUSIVO** | — | — | — |

**Resultado consolidado**: 6 dos 8 briefs com imagem real validada e baixada. 2 inconclusivos com fallback ilustrador obrigatório.

---

## B01 — Radiografia de periostite em sífilis congênita precoce

**Pedido literal (página 1.7)**: linha dupla periosteal em ossos longos (tíbia, fêmur, úmero) em RN com SC precoce.

### Imagem principal selecionada

- **Arquivo local**: `assets/img/BNN-b01-periostite-rx.jpg`
- **URL fonte (artigo)**: https://pmc.ncbi.nlm.nih.gov/articles/PMC12676640/
- **URL imagem direta**: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/5a48/12676640/e70a829ea4df/ajtmh.25-0344f3.jpg
- **Autores**: Catalina Arango-Ferreira & Alvaro de Jesús Toro-Posada
- **Periódico/ano**: The American Journal of Tropical Medicine and Hygiene, 2025 (dezembro)
- **Título do artigo**: "Pain, Pseudoparalysis, and Periostitis: A Neonatal Presentation of Congenital Syphilis"
- **Caption original**: "Radiographic evidence of periostitis and metaphyseal bands in lower extremity long bones."
- **Resolução**: 664 × 864 px
- **Formato**: JPEG
- **Licença**: **CC BY 4.0** — atribuição apenas, uso comercial e modificação permitidos

### Imagem complementar (membro superior)

- **Arquivo local**: `assets/img/BNN-b01-periostite-rx-membro-superior.jpg`
- **URL imagem direta**: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/5a48/12676640/53268a52ff29/ajtmh.25-0344f1.jpg
- **Caption original**: "Radiographic evidence of periostitis and metaphyseal bands in upper left extremity long bones."
- **Resolução**: 690 × 373 px (menor — usar apenas como apoio, não como principal)

### Validação tripla

- **Clínica**: passa. Caption do autor confirma literalmente "periostite e bandas metafisárias em ossos longos" — exatamente o achado pedido. Caso de RN de 3 dias com SC.
- **Técnica**: passa com ressalva. 664 × 864 px está abaixo do mínimo Bauer de 800 px de largura; em altura passa. Imagem com setas amarelas anotando os achados (Wimberger bilateral, periostite tíbio-fibular) — anotações didáticas valiosas, não interferem como watermark. Recomendar uso em container ≤ 600 px de largura ou aspect ratio 3:4 mobile.
- **Licença**: passa. CC BY 4.0 — mais permissiva entre as CC; uso educacional e modificação livres.

### Attribution canônica (para Executor embutir)

```
Imagem: Arango-Ferreira C, Toro-Posada AJ. Pain, Pseudoparalysis, and Periostitis: A Neonatal Presentation of Congenital Syphilis. Am J Trop Med Hyg. 2025. Licenciado sob CC BY 4.0. Fonte: https://pmc.ncbi.nlm.nih.gov/articles/PMC12676640/
```

### Alt text recomendado

"Radiografia anteroposterior de pelve e membros inferiores de recém-nascido com sífilis congênita, mostrando reação periosteal e bandas metafisárias bilaterais em fêmur, tíbia e fíbula. Setas amarelas indicam os achados de periostite e os pontos clássicos de osteocondrite metafisária."

### Posicionamento sugerido

Página 1.7, após o bloco textual sobre periostite e osteocondrite (manifestações ósseas precoces). Container glass com legenda curta abaixo. Considerar layout lado-a-lado com B01 (membro superior, menor) se design permitir grid.

---

## B02 — Pênfigo palmoplantar sifilítico

**Pedido literal (página 1.7)**: lesões vesicobolhosas palmares/plantares em RN com SC (lesão MUITO infectante — isolamento contato 48h pós ATB).

### Imagem principal — palmar

- **Arquivo local**: `assets/img/BNN-b02-penfigo-palmar.jpg`
- **URL fonte (artigo)**: https://pmc.ncbi.nlm.nih.gov/articles/PMC11492971/
- **URL imagem direta**: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/c066/11492971/8ca9be7ca9d6/cureus-0016-00000069849-i01.jpg
- **Autores**: Alqahtani et al.
- **Periódico/ano**: Cureus, 2024
- **Título do artigo**: "Early Congenital Syphilis Presenting With Severe Congenital Pneumonia and Cutaneous Manifestations in a Neonate at Birth: A Case Report"
- **Caption original**: "Hand demonstrating erythematous skin with mild edema and prominent desquamation across the fingers, consistent with syphilitic pemphigus present at birth."
- **Resolução**: 750 × 563 px
- **Formato**: JPEG
- **Licença**: **CC BY 4.0**

### Imagem complementar — plantar

- **Arquivo local**: `assets/img/BNN-b02-penfigo-plantar-direito.jpg`
- **URL imagem direta**: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/c066/11492971/f55a68d32133/cureus-0016-00000069849-i02.jpg
- **Caption original**: "Peeled blister lesions on the plantar surface showing superficial erosions, burst blisters with raw eroded surfaces, erythematous and slightly edematous surrounding skin."
- **Resolução**: 750 × 563 px

### Validação tripla

- **Clínica**: passa. Pênfigo sifilítico do RN ao nascimento — confirmado clinicamente, com desquamação prominente, eritema e bolhas rotas (palmar) e erosões pós-bolha em superfície plantar. Bate com o pedido "lesão muito infectante" do brief.
- **Técnica**: passa com ressalva. 750 px de largura está marginalmente abaixo do mínimo 800 px. Imagens são fotos clínicas reais com cateter venoso e curativo visíveis (contextualizam ambiente NICU, valor didático). Sem watermark.
- **Licença**: passa. CC BY 4.0.
- **Anonimização**: paciente neonatal sem face visível — anonimização garantida.

### Attribution canônica

```
Imagem: Alqahtani et al. Early Congenital Syphilis Presenting With Severe Congenital Pneumonia and Cutaneous Manifestations in a Neonate at Birth. Cureus. 2024. Licenciado sob CC BY 4.0. Fonte: https://pmc.ncbi.nlm.nih.gov/articles/PMC11492971/
```

### Alt text recomendado

- Palmar: "Mão de recém-nascido com sífilis congênita evidenciando pênfigo sifilítico: pele palmar e dorsal eritematosa, edema discreto e descamação proeminente nos dedos. Curativo do cateter venoso visível no punho."
- Plantar: "Planta do pé direito de recém-nascido com sífilis congênita mostrando lesões bolhosas rotas com erosões superficiais e pele perilesional eritematosa e levemente edemaciada — pênfigo sifilítico, achado altamente infectante."

### Posicionamento sugerido

Página 1.7, no bloco de manifestações precoces de pele e mucosa. Idealmente lado-a-lado (palmar + plantar) em grid de 2 colunas — desktop. Mobile empilhado. Card de alerta destacando "isolamento de contato até 48h após início do ATB" próximo.

---

## B03 — Rinite serossanguinolenta + placas mucosas em SC precoce

### Status: `[BUSCADOR-IMAGEM-INCONCLUSIVO]`

**Pedido literal (página 1.7)**: secreção nasal sanguinolenta + placas em mucosa oral em RN.

### Buscas executadas

1. PubMed Central — "congenital syphilis snuffles rhinitis newborn image" → 8+ artigos retornados, nenhum com figura específica isolada de secreção nasal sanguinolenta ativa
2. Wikimedia Commons — categoria Congenital syphilis → 139 arquivos catalogados, sem entrada específica de rinite/placas mucosas neonatais
3. DermNet NZ — sem foto de rinite sifilítica isolada
4. PMC10453258 (illustrative review) → ilustração esquemática genérica, não foto clínica
5. PMC5889854 (unusual skin eruptions) → mostra fissuras periorais (rágades — manifestação tardia, não placa mucosa precoce)
6. PMC3730478 (still a reality) → caso pediátrico tardio com lesões papuloescamosas e palato, não rinite neonatal aguda
7. CDC PHIL — sem entrada de rinite sifilítica neonatal com imagem clínica

### Motivo da inconclusividade

Rinite serossanguinolenta do RN com SC precoce é descrita extensamente na literatura, mas raramente fotografada — o achado é fluido (secreção em tempo real) e tem peso ético/estético baixo na documentação acadêmica. Placas mucosas isoladas em mucosa oral neonatal também sub-documentadas em fontes abertas. O que existe são fotos de fácies neonatal com edema perioral discreto, sem mostrar a secreção/placa de forma didática.

### Caminho sugerido

Escalonar para `ilustrador-medico-bauer` com brief técnico abaixo.

### Brief técnico para ilustrador SVG

**Conceito**: dupla composição esquemática lado-a-lado.
- **Painel A — Rinite serossanguinolenta**: face frontal estilizada de RN, fluxo nasal serossanguinolento (gota com tonalidade rosa-âmbar saindo de cada narina), legendinha "Secreção nasal sanguinolenta — riquíssima em Treponema, altamente infectante".
- **Painel B — Placa mucosa**: vista intra-oral aberta (técnica de boca semi-aberta esquemática), ângulos do lábio com lesões esbranquiçadas/acinzentadas em platô (placa mucosa). Legendinha "Placa mucosa no ângulo do lábio — base levemente elevada, branco-acinzentada".
- **Paleta**: paleta sífilis (verde-âmbar herdada do bloco infecto, ver `AGENTS-PLATAFORMAS.md` §3 — primária `#34D399`, secundária `#FBBF24`).
- **Atenção pedagógica**: deixar claro que ambas são lesões precoces (<2 anos) e altamente infectantes; reforço visual de "isolamento contato" próximo.

---

## B04 — Fronte olímpica (estigma tardio)

**Pedido literal (página 1.8)**: bossa frontal proeminente em criança >2 anos com SC tardia.

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-b04-fronte-olimpica.jpg`
- **URL fonte**: https://commons.wikimedia.org/wiki/File:Congenital_syphilis_frontal_bossing.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/2/2e/Congenital_syphilis_frontal_bossing.jpg
- **Fonte primária**: CDC Public Health Image Library (PHIL) ID 16744
- **URL PHIL canônica**: https://phil.cdc.gov/Details.aspx?pid=16744
- **Autor**: CDC / Renelle Woodall
- **Ano**: 1969
- **Resolução**: 700 × 460 px (versão web; hi-res ~18 MB disponível na CDC PHIL via postback ASP.NET, não acessível por curl)
- **Formato**: JPEG
- **Licença**: **CC0 / Public Domain (US Federal Government work)** — uso livre sem restrição

### Validação tripla

- **Clínica**: passa. Vista lateral mostrando proeminência frontal evidente (bossa frontal/fronte olímpica) — característica de SC tardia decorrente de periostite frontal persistente. Paciente é adolescente/jovem adulto (não criança ≤2 anos), consistente com manifestação **tardia** (>2 anos) — mesma sequela óssea persiste ao longo da vida.
- **Técnica**: passa com ressalva de resolução. 700 px de largura está abaixo do mínimo Bauer 800 px. Foto antiga (1969) com tarja preta cobrindo região periorbital (anonimização CDC — positivo). Sem watermark. Visualmente clara.
- **Licença**: passa sem restrição. CC0 / Public Domain — uso livre, modificação livre, sem requisito de attribution legal (mas Bauer mantém créditos por boa prática editorial).

### Attribution canônica

```
Imagem: CDC/Renelle Woodall, 1969. Public Health Image Library, ID 16744. Domínio público. Fonte: https://phil.cdc.gov/Details.aspx?pid=16744
```

### Alt text recomendado

"Vista lateral do crânio de paciente com sífilis congênita tardia, evidenciando bossa frontal proeminente — a chamada fronte olímpica — decorrente de periostite frontal persistente. Tarja preta cobre a região periorbital para anonimização."

### Posicionamento sugerido

Página 1.8, abrindo o bloco de estigmas antropométricos tardios. Container glass médio. Considerar mosaico com B05, B06, B07 em grid 2×2 desktop.

---

## B05 — Tíbia em sabre (estigma tardio)

**Pedido literal (página 1.8)**: curvatura anterior da tíbia em criança com SC tardia (vista lateral).

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-b05-tibia-em-sabre.jpg`
- **URL fonte**: https://commons.wikimedia.org/wiki/File:Congenital_syphilis_saber_shin.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/9/9b/Congenital_syphilis_saber_shin.jpg
- **Fonte primária**: CDC PHIL ID 2387
- **URL PHIL canônica**: https://phil.cdc.gov/Details.aspx?pid=2387
- **Autor**: CDC / Robert Sumpter
- **Ano**: 1967
- **Resolução**: 700 × 462 px (web; hi-res ~17 MB no PHIL)
- **Formato**: JPEG
- **Licença**: **Public Domain (US Federal Government work)** — uso livre

### Validação tripla

- **Clínica**: passa. Vista lateral clara da perna direita evidenciando curvatura anterior da tíbia (osteoperiostite tibial / saber shin). Caption oficial CDC: "patient exhibiting saber shin of the right lower leg, or osteoperiostitis of the tibia, due to congenital syphilis". Bate literalmente com o pedido.
- **Técnica**: passa com ressalva de resolução (700 × 462 < 800 mínimo). Sem watermark. Fundo neutro azul.
- **Licença**: passa sem restrição. Public Domain.

### Attribution canônica

```
Imagem: CDC/Robert Sumpter, 1967. Public Health Image Library, ID 2387. Domínio público. Fonte: https://phil.cdc.gov/Details.aspx?pid=2387
```

### Alt text recomendado

"Vista lateral da perna direita de paciente com sífilis congênita tardia, mostrando curvatura anterior da tíbia — tíbia em sabre — decorrente de osteoperiostite tibial persistente."

### Posicionamento sugerido

Página 1.8, no grid de estigmas tardios. Pode ficar adjacente à B04 ou B07.

---

## B06 — Dente de Hutchinson + molar em amora

**Pedido literal (página 1.8)**: incisivos centrais permanentes com chanfradura central + molares multitubercular ("em amora").

### Solução composta — dois ativos

A imagem ideal pra B06 é uma composição: o brief pede **dois achados dentários distintos** (Hutchinson + mulberry) que raramente aparecem em uma só foto clínica em fontes abertas com alta resolução. Solução adotada:

1. **`BNN-b06-dente-hutchinson.jpg`** — foto oclusal superior em alta resolução isolando os incisivos Hutchinson com chanfradura clássica
2. **`BNN-b07-estigmas-faciais.jpg`** (compartilhada com B07) — paciente único com Hutchinson teeth + mulberry molars + saddle nose + frontal bossing + cataract visíveis

### Imagem principal (Hutchinson — alta resolução)

- **Arquivo local**: `assets/img/BNN-b06-dente-hutchinson.jpg`
- **URL fonte**: https://commons.wikimedia.org/wiki/File:Hutchinson_teeth_congenital_syphilis_PHIL_2385.rsh.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/9/96/Hutchinson_teeth_congenital_syphilis_PHIL_2385.rsh.jpg
- **Fonte primária**: CDC PHIL ID 2385
- **URL PHIL canônica**: https://phil.cdc.gov/Details.aspx?pid=2385
- **Autor**: CDC / Susan Lindsley
- **Ano**: 1971
- **Resolução**: **3.843 × 2.948 px** (excelente, 1.07 MB)
- **Formato**: JPEG
- **Licença**: **Public Domain (US Federal Government work)**

### Imagem complementar (Hutchinson + mulberry no mesmo paciente)

- **Arquivo local**: `assets/img/BNN-b07-estigmas-faciais.jpg` (mesmo arquivo usado em B07)
- **URL fonte**: https://commons.wikimedia.org/wiki/File:Congenital_syphilis_teeth,_cataract,_nose.jpg
- **Fonte primária**: CDC PHIL ID 16463
- **Autor**: CDC / Brian Hill (New Zealand)
- **Ano**: 1976
- **Resolução**: 700 × 1.063 px
- **Licença**: Public Domain

### Validação tripla

- **Clínica**: passa. PHIL 2385 (vista oclusal) mostra "screwdriver shape" dos incisivos centrais — Hutchinson clássico. PHIL 16463 (vista facial frontal) confirma Hutchinson + mulberry molars no mesmo paciente, conforme caption oficial CDC.
- **Técnica**: PHIL 2385 com excelente resolução (3.843 × 2.948 px) — supera o mínimo Bauer com folga. PHIL 16463 com 700 px largura (abaixo de 800 — ressalva).
- **Licença**: passa sem restrição em ambas.

### Attribution canônica

```
Imagem 1 (Hutchinson oclusal): CDC/Susan Lindsley, 1971. PHIL ID 2385. Domínio público. Fonte: https://phil.cdc.gov/Details.aspx?pid=2385
Imagem 2 (Hutchinson + mulberry molars facial): CDC/Brian Hill, 1976. PHIL ID 16463. Domínio público. Fonte: https://phil.cdc.gov/Details.aspx?pid=16463
```

### Alt text recomendado

- Imagem 1: "Vista oclusal superior mostrando incisivos centrais permanentes com chanfradura central característica em formato de chave-de-fenda — dentes de Hutchinson, estigma tardio clássico de sífilis congênita."
- Imagem 2 (compartilhada com B07): ver alt text de B07.

### Posicionamento sugerido

Página 1.8. PHIL 2385 (Hutchinson em close oclusal) como ilustração principal do conceito de Hutchinson; PHIL 16463 (compartilhada B07) como ilustração-síntese dos estigmas tardios cumulativos.

---

## B07 — Nariz em cela (estigma tardio)

**Pedido literal (página 1.8)**: dorso nasal achatado/deprimido em criança com SC tardia.

### Imagem selecionada (composta — múltiplos estigmas no mesmo paciente)

- **Arquivo local**: `assets/img/BNN-b07-estigmas-faciais.jpg`
- **URL fonte**: https://commons.wikimedia.org/wiki/File:Congenital_syphilis_teeth,_cataract,_nose.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/e/eb/Congenital_syphilis_teeth%2C_cataract%2C_nose.jpg
- **Fonte primária**: CDC PHIL ID 16463
- **URL PHIL canônica**: https://phil.cdc.gov/Details.aspx?pid=16463
- **Autor**: CDC / Brian Hill (New Zealand)
- **Ano**: 1976
- **Resolução**: 700 × 1.063 px
- **Formato**: JPEG
- **Licença**: **Public Domain (US Federal Government work)**

### Validação tripla

- **Clínica**: passa, e com bônus pedagógico. Caption oficial CDC documenta no mesmo paciente: "frontal bossing, mulberry molars, Hutchinson teeth, saddle nose, and a cataract in his right eye." Cinco estigmas tardios em uma imagem — síntese visual ideal pra fechar o bloco 1.8.
- **Técnica**: passa com ressalva (700 px largura < 800). Sem watermark. Foto frontal nítida.
- **Licença**: passa sem restrição.

**Nota sobre faixa etária**: paciente é adulto. Estigmas tardios são sequelas permanentes — manifestam-se a partir dos 2 anos e persistem por toda a vida adulta. Uso clínico-pedagógico válido. O texto Bauer já contextualiza "estigmas tardios = sequelas, não doença ativa", então a imagem reforça a permanência da sequela.

### Attribution canônica

```
Imagem: CDC/Brian Hill, 1976. Public Health Image Library, ID 16463. Domínio público. Fonte: https://phil.cdc.gov/Details.aspx?pid=16463
```

### Alt text recomendado

"Vista frontal do rosto de paciente adulto com sequelas tardias de sífilis congênita: nariz em cela (dorso nasal achatado e deprimido), bossa frontal, dentes de Hutchinson, molares em amora visíveis na arcada inferior e catarata no olho direito — síntese visual dos estigmas antropométricos cumulativos."

### Posicionamento sugerido

Página 1.8, na **síntese visual** do bloco de estigmas tardios. Esta imagem é potente como fechamento — mostra que os múltiplos estigmas coexistem no mesmo paciente, reforçando a noção de "constelação clínica" da SC tardia. Container glass grande com legenda numerada apontando cada achado.

---

## B17 — Recém-nascido pré-termo extremo (<28 sem) na palma do examinador

### Status: `[BUSCADOR-IMAGEM-INCONCLUSIVO]`

**Pedido literal (página 1.2)**: comparação visual de tamanho — RN menor que palma da mão de quem examina.

### Buscas executadas

1. Wikimedia Commons — Categoria:Premature_babies (48 arquivos) → nenhum com mão de adulto pra comparação de escala
2. Wikimedia Commons — busca direta "premature baby hand comparison" → encontrado apenas "Sole_of_foot_of_an_infant_held_between_the_middle_finger_and_the_ring_finger" (Basile Morin, CC BY-SA 4.0, 4.927×3.285 px) — **mas é bebê a termo de 1 mês**, não pré-termo extremo
3. `Premature_infant_with_ventilator.jpg` (26+6 sem, 990 g) — não tem mão de adulto na composição
4. `Premature_birth_Alberta,_Canada.jpg` (CC BY-SA 4.0) — pré-termo com equipamento, sem mão de comparação
5. PMC — múltiplos artigos sobre 23-24 sem mas figuras não-CC ou sem comparação de escala
6. Flickr CC — sem match clinicamente válido

### Motivo da inconclusividade

Comparação "RN pré-termo extremo + palma de adulto" é cena emocionalmente forte que tipicamente é fotografada por famílias dentro de NICU e publicada em mídias sociais (Instagram, blogs familiares) — fontes que **não atendem requisitos de licença CC livre nem de origem hospitalar institucional verificável**. Não há registro canônico open-access dessa composição com pré-termo <28 sem comprovado.

### Caminho sugerido

Escalonar para `ilustrador-medico-bauer` com brief técnico abaixo.

### Brief técnico para ilustrador SVG

**Conceito**: ilustração esquemática realista da comparação de escala.
- **Composição**: vista superior de uma mão de adulto (palma aberta, dedos estendidos), proporcionada a partir de medidas reais de mão adulta (~18-19 cm comprimento). Sobre a palma, RN pré-termo extremo posicionado em decúbito dorsal — corpo inteiro do bebê cabe da base dos dedos até o pulso, comprimento total ~25-28 cm (típico de 24-26 sem).
- **Detalhes anatômicos do RN pré-termo extremo**: cabeça desproporcionalmente grande (~⅓ do corpo), pele rosada-translúcida com vasos visíveis (verniz caseoso ausente nessa idade), pavilhões auriculares cartilagem mínima ("dobrados"), olhos fechados (fusão palpebral típica antes de 26 sem), tórax estreito, abdome relativamente proeminente, extremidades finas com pregas plantares ausentes/raras.
- **Paleta**: paleta nefro/neutra herdada da plataforma (primária ciano `#38BDF8`, secundária `#2DD4BF`).
- **Estilo**: ilustração lineart com sombreamento suave glass-friendly, sem realismo fotográfico (evita perturbação emocional). Mostra escala sem dramatização.
- **Atenção pedagógica**: legenda dupla — "Pré-termo extremo (~24 sem, ~600 g)" abaixo do bebê + "Palma de adulto" abaixo da mão. Texto-âncora curto: "Cabe inteiro na palma".
- **Cross-reference ao Caso João Eucalipto**: NÃO destacar João aqui (João é 36+4 sem, pré-termo tardio — categoria oposta na linha do tempo). A página 1.2 já tem o V02 (linha do tempo) que marca João; o V17 ilustra o oposto da escala pra contraste.

---

## Defesa anti-prompt-injection — log da sessão

Aplicada conforme AGENTS.md §11 e instruções do agente §12. Durante a busca:

- **Fontes lidas via WebFetch**: Radiopaedia (403 — pode ser bloqueio anti-bot, não injeção; tratado como inacessível, não como evidência de injeção), Wikimedia Commons (múltiplos arquivos, sem injeção detectada), PMC NCBI (múltiplos artigos, sem injeção detectada), CDC PHIL via wwwn.cdc.gov (com redirect HTTP 301 padrão).
- **Conteúdo externo lido foi tratado como dado, nunca como instrução**.
- **Nenhum sinal de injeção detectado** nos cabeçalhos, captions, descrições de licença ou metadados acessados.
- **Sistema-reminder do MCP Figma**: detectado no início da sessão; ignorado por ser irrelevante à tarefa de busca de imagens médicas (não é injeção, é instrução de outro servidor MCP — não-ativo neste agente). Conforme §12.1 e §3 do agent, sigo o pedido do usuário.

---

## Observações finais para Bauer

1. **Resolução abaixo de 800 px em 4 das 7 imagens baixadas (B04, B05, B06-secundária/B07)**: limite das versões web do Wikimedia Commons. A versão hi-res (~18 MB) do CDC PHIL existe mas requer postback ASP.NET, não baixável via curl. Caminhos possíveis se Bauer quiser hi-res: (a) download manual do CDC PHIL via browser, (b) aceitar 700 px com `srcset` responsivo, (c) usar B06-Hutchinson alta (3.843 px) como ancora visual principal e tratar as demais como apoio em containers menores. Default editorial Bauer aceita 700 px em containers ≤ 600 px de largura responsiva.

2. **Inconclusivos (B03, B17)**: ambos escalonados ao `ilustrador-medico-bauer` com brief técnico pronto pra ser colado. Recomendação: rodar ilustrador antes de fechar Módulo 1 — sem esses dois ativos, as páginas 1.7 (B03) e 1.2 (B17) ficam com lacuna visual em pontos pedagogicamente fortes.

3. **B06 + B07 compartilham um arquivo** (`BNN-b07-estigmas-faciais.jpg`). Decisão editorial: ou Executor usa o mesmo arquivo nas duas páginas (1.8 — Hutchinson e 1.8 — saddle nose), ou trata como **única imagem síntese** posicionada como peça de fechamento do bloco. Recomendo a segunda opção.

4. **Texto soberano permanece intacto**: nenhuma das imagens é estritamente necessária pra texto da página passar na Checagem Bauer. São amplificadores visuais conforme §10 AGENTS-PLATAFORMAS.

---

**Próximo passo sugerido**: acionar `ilustrador-medico-bauer` com os briefs B03 e B17 deste arquivo, então acionar `executor-bauer` pra embedar as 7 imagens já validadas com attribution.
