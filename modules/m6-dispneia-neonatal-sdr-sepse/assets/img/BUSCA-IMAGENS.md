# BUSCA-IMAGENS — Módulo 6 (Dispneia neonatal: SDR + sepse precoce)

**Data**: 2026-05-25
**Buscador**: buscador-imagem-medica-bauer
**Modo**: Bauer ativo, --auto
**Briefs alvo**: B33-B37 (5 imagens — 3 essenciais + 2 opcionais)

---

## Sumário executivo

| Brief | Achado | Status | Arquivo local | Fonte |
|-------|--------|--------|---------------|-------|
| B33 | RX SDR/DMH clássico | ✅ QUALIFICADA | `BNN-rx-sdr-irds-haggstrom.png` | Wikimedia Commons (CC0) |
| B34 | RX neonatal normal | ⚠️ INCONCLUSIVO | — | Escalar ilustrador SVG |
| B35 | CPAP nasal RN | ✅ QUALIFICADA | `BNN-cpap-premature-infant-hall.jpg` | Wikimedia Commons (Domínio público) |
| B36 | LISA/MIST procedimento | ⚠️ INCONCLUSIVO | — | Escalar ilustrador SVG |
| B37 | Apneia/bradicardia monitor | ⚠️ INCONCLUSIVO | — | Escalar ilustrador SVG |

**Resultado quantitativo**: 2/5 qualificadas, 3/5 escaladas para ilustrador.

**Defesa anti-prompt-injection**: Detectada tentativa de injeção em saída de `Bash` (system-reminder embutido sobre MCP Figma e Auto Mode no meio de output de `ls`). Tratado como dado, instrução ignorada. Tarefa continuou conforme escopo declarado pelo Bauer.

---

## B33 — RX tórax SDR/DMH clássico [✅ QUALIFICADA]

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-rx-sdr-irds-haggstrom.png`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:X-ray_of_infant_respiratory_distress_syndrome_(IRDS).png
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/b/bf/X-ray_of_infant_respiratory_distress_syndrome_%28IRDS%29.png
- **Autor**: Mikael Häggström, M.D.
- **Ano**: 2018
- **Dimensões originais**: 551 × 471 px (PNG, 266 KB)
- **Descrição técnica da fonte (verbatim)**: "Chest radiograph one day after birth of a boy after 29 weeks and 3 days of gestational age who developed respiratory distress" — generalized fine granular opacities creating air bronchograms; thorax bell-shaped due to reduced lung volume; visible umbilical lines, nasogastric tube, ECG electrodes.

### Validação tripla

- ✅ **Camada 1 (achado clínico correto)**: "fine granular opacities" = vidro moído clássico; "air bronchograms" = aerobroncograma visível; "reduced lung volume / bell-shaped thorax" = redução de volume pulmonar. Tríade SDR confirmada literalmente na descrição da fonte.
- ✅ **Camada 2 (modalidade correta)**: Radiografia de tórax AP (padrão neonatal incubadora), conforme brief B33.
- ✅ **Camada 3 (anatomia/lateralidade correta)**: Tórax neonatal completo, bilateral simétrico. Marcadores radiográficos preservados.

### Licença

- **Tipo**: Creative Commons CC0 1.0 Universal — Public Domain Dedication
- **Compatibilidade Bauer**: Total. Permite uso, modificação e redistribuição inclusive em contexto comercial sem restrição.
- **Restrições**: Nenhuma. Attribution é cortesia, não obrigação legal — mas mantém-se por boas práticas acadêmicas.

### Attribution canônica pronta para Executor

```
Radiografia: Mikael Häggström, M.D., via Wikimedia Commons (CC0 1.0 — domínio público dedicado).
RNPT 29 sem 3 dias com SDR. Fonte: https://commons.wikimedia.org/wiki/File:X-ray_of_infant_respiratory_distress_syndrome_(IRDS).png
```

### Alt text recomendado (PT-BR, didático)

> "Radiografia de tórax AP de recém-nascido pré-termo de 29 semanas e 3 dias com Síndrome do Desconforto Respiratório (SDR). Mostra opacidades difusas finas granulares (padrão vidro moído) em ambos os pulmões, com aerobronograma visível e tórax em formato de sino (bell-shaped thorax) por redução do volume pulmonar. Linhas umbilicais arterial e venosa, sonda nasogástrica e eletrodos de ECG visíveis — padrão característico de SDR no primeiro dia de vida."

### Posicionamento sugerido

- **Página destino**: 6.5 (`sdr-clinica-radiografia`)
- **Posição**: Após o parágrafo que descreve a tríade radiográfica (vidro moído + aerobroncograma + ↓ volume).
- **Container sugerido**: glass card com legenda técnica embaixo + attribution em fonte secundária.

---

## B34 — RX tórax neonatal NORMAL [⚠️ INCONCLUSIVO]

### Status

**Não qualificada em fontes abertas confiáveis após busca exaustiva.**

### Buscas executadas

1. Wikimedia Commons — categoria `X-rays of normal chest`: contém apenas radiografias de adultos/crianças maiores. Nenhuma neonatal normal explícita.
2. Wikimedia Commons — query `neonate radiography`: retornou 2 imagens, ambas de ultrassonografia de quadril neonatal (irrelevantes).
3. Wikimedia Commons — query `infant thorax xray`, `newborn chest xray`, `normal neonate chest radiograph`: zero resultados.
4. Mikael Häggström / categoria `X-rays of the thorax`: contém apenas pathology (IRDS).
5. PMC PMC7954172 (Decoding neonatal chest radiograph, CC BY-NC-SA): figuras inicialmente promissoras, mas validação verbatim revelou:
   - Fig. 2 ("Standardizing the neonatal chest radiograph"): caption descreve **erros técnicos** (X-ray tube misalignment, oblique orientation, nasogastric tube mal-posicionada). Não é exemplo positivo de RX normal.
   - Fig. 4: "Immature lung" — patologia (RNPT 24 sem).
   - Fig. 5: "Progression of RDS" — patologia.
   - Fig. 11: "Transient tachypnea of newborn" — patologia.
   - Fig. 1: airway, não chest.
6. PMC PMC11812488 (Chest Radiography Scores, CC BY 4.0): apenas figuras estatísticas, sem radiografia clínica.
7. SciELO Radiologia Brasileira: PDF binário não-extraível pelo `WebFetch`.
8. Atlas WHO Collaborating Centre Newborn (newbornwhocc.org): PDF não-extraível.

### Motivo da inconclusividade

Fontes abertas tendem a publicar RX neonatal **com achado** (pedagógico de patologia). RX neonatal **normal saudável** é raramente publicado isoladamente em CC BY porque é "baseline silencioso" — usado em livros pagos (Sobotta, Atlas de Radiologia Pediátrica de Donnelly etc.), não em PMC.

### Fallback recomendado

**Escalar para `ilustrador-medico-bauer`**: gerar SVG esquemático de RX neonatal normal em PA, com elementos anatômicos rotulados (diafragma no 8º arco costal, silhueta cardíaca, transparência pulmonar simétrica, ossificação umeral indicando termo, timo "sail sign" típico neonatal). Esquemático tem vantagem pedagógica adicional: permite anotar marcadores anatômicos que uma RX real não destaca.

**Alternativa secundária (se Bauer recusar SVG e quiser real)**:
- Aceitar Fig. 2 do IJRI (PMC7954172) com legenda Bauer reescrita ("RX neonatal próxima do ideal — anatomia adequada; observar erros técnicos discutidos no texto") e attribution CC BY-NC-SA 4.0. Plataforma educacional sem venda direta = NC compatível. Restrição: imagem é apenas 539x280 px (limite PMC).
- URL fallback: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/2bae/7954172/975df8c95bee/IJRI-30-482-g002.jpg

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` B34

Sugestão Bauer: **escalar ilustrador SVG**. Página 6.5 funciona pedagogicamente com B33 sozinho + texto descritivo da anatomia normal de comparação. Se Bauer optar pelo Fig. 2 fallback, declarar via callback explícito.

---

## B35 — CPAP nasal em RN [✅ QUALIFICADA]

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-cpap-premature-infant-hall.jpg`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:Premature_infant_CPAP.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/2/2c/Premature_infant_CPAP.jpg
- **Autor**: Brian Hall
- **Ano**: 2011
- **Dimensões originais**: 2.102 × 1.344 px (JPEG, 746 KB) — alta resolução, atende ≥800px largura.
- **Descrição técnica da fonte (verbatim)**: "premature infant CPAP" — RN prematuro recebendo suporte respiratório com pressão positiva contínua das vias aéreas.

### Validação tripla

- ✅ **Camada 1 (achado correto)**: RN prematuro com prongas nasais CPAP visíveis. Contexto UTI neonatal aparente.
- ✅ **Camada 2 (modalidade correta)**: Fotografia clínica — modalidade conforme brief.
- ✅ **Camada 3 (anatomia/contexto correto)**: Posicionamento de prongas adequado, paciente em incubadora.

### Anonimização

- ✅ Confirmada: face do RN não-identificável em detalhe (conforme verificação na página de origem).

### Licença

- **Tipo**: Public Domain (declaração explícita pelo autor — own work, dedicado ao domínio público).
- **Compatibilidade Bauer**: Total. Sem restrição comercial nem derivativa.
- **Restrições**: Nenhuma legal. Attribution é boa prática.

### Attribution canônica pronta para Executor

```
Fotografia: Brian Hall, via Wikimedia Commons (Public Domain, 2011). RN prematuro em CPAP nasal.
Fonte: https://commons.wikimedia.org/wiki/File:Premature_infant_CPAP.jpg
```

### Alt text recomendado (PT-BR, didático)

> "Fotografia de recém-nascido prematuro recebendo suporte respiratório com CPAP nasal (pressão positiva contínua das vias aéreas) em unidade de terapia intensiva neonatal. Prongas nasais binasais visíveis, conectadas ao circuito do gerador de fluxo. Face anonimizada, em incubadora — modalidade de suporte respiratório não-invasivo padrão para SDR no recém-nascido pré-termo."

### Posicionamento sugerido

- **Página destino**: 6.6 (`sdr-tratamento-janela-surfactante`)
- **Posição**: No parágrafo que apresenta CPAP nasal precoce em sala de parto como manejo de primeira linha.
- **Container sugerido**: foto com proporção mantida; pode entrar em glass card lateral à narrativa do "erro Firmindo".

---

## B36 — Foto LISA/MIST procedimento [⚠️ INCONCLUSIVO]

### Status

**Não qualificada em fontes abertas confiáveis.**

### Buscas executadas

1. PMC PMC7077956 (LISA best practices): Figs. 1 e 2 mostram catéteres/laringoscopia, mas em **mannequin simulando RNPT 27 sem 1000g**, não paciente real. Licença CC BY-NC-ND (proíbe modificação). Inadequado pedagogicamente como "foto real de procedimento".
2. PMC PMC8700472 (LISA Standardization): apenas gráficos de controle de qualidade. Figura procedural está em supplementary `.zip` (13.7 MB) não-acessível por `WebFetch`.
3. PMC PMC11383777 (CPAP failure after LISA, CC BY): zero fotos clínicas, só gráficos estatísticos.
4. PMC PMC11446307 (State of the Art LISA, CC BY-NC): links para vídeos YouTube em vez de figuras. Sem imagem clínica.
5. PMC PMC9763238 (LISA via feeding tube, CC BY 4.0): só CONSORT flowchart e box-plot.
6. PMC PMC12751638 (Videolaringoscopy LISA, CC BY 4.0): zero figuras de procedimento.
7. Wikimedia Commons: nenhum resultado para "LISA surfactant".

### Motivo da inconclusividade

LISA/MIST envolve face e via aérea de RN identificável durante procedimento — fotos reais publicadas tendem a ter restrições éticas ou licenças restritivas (CC BY-NC-ND típica). PMCs preferem demonstrar via vídeo externo ou simulação. **Anonimização total de procedimento em RN é tecnicamente difícil**, o que reduz disponibilidade open.

### Fallback recomendado

**Escalar para `ilustrador-medico-bauer`**: gerar SVG didático mostrando passos da LISA — RN em CPAP nasal mantido durante laringoscopia direta, catéter fino (3.5-5F) sendo introduzido pelas cordas vocais com tubo orotraqueal **ausente**, surfactante sendo administrado em bolus pequenos, paciente respirando espontaneamente. Comparar lado-a-lado com INSURE (intubação + extubação) para contraste pedagógico.

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` B36

**B36 é declarado OPCIONAL no brief** (Bauer aprovou S28 como complemento "Saiba mais" em 6.6). Caminho preferido: SVG do ilustrador. Caminho alternativo: omitir imagem e manter apenas o bloco textual "Atualização European Consensus 2025" — texto soberano cobre o conceito sem visual.

---

## B37 — Foto traçado apneia/bradicardia em monitor [⚠️ INCONCLUSIVO]

### Status

**Não qualificada em fontes abertas confiáveis.**

### Buscas executadas

1. PMC PMC5321050 (Automated Apnea Analysis): Fig. 1 mostra constellation de canais (HR + EKG + CI + SpO2 + impedância processada + probabilidade algorítmica). **Mas**: licença é "author manuscript", copyright Nature Publishing Group — sem CC BY explícito. Não-redistribuível.
2. PMC PMC4285412 (Monitoring Apnea Validity): copyright Thieme, não-CC. Sem figuras de tracing.
3. PMC PMC8625917 (Bradycardia Detection, CC BY 4.0): figuras de ECG processado (sinal cru após filtros), **não** screenshot de monitor multiparâmetros bedside com alarme.
4. PMC PMC2745612 (Apnea pre/post feeding): copyright Nature, sem figuras.
5. PMC PMC8956695 (Radar breathing monitoring, CC BY 4.0): tema diferente.
6. Wikimedia Commons categoria `Neonatal intensive-care units`: 55 arquivos, predominantemente fotos de unidade/equipe/incubadora; nenhuma foto explícita de tela de monitor mostrando episódio de apneia capturado.
7. Wikimedia Commons query `apnea monitor neonate`: zero resultados.
8. Wikimedia Commons query `patient monitor vital signs`: 15 resultados, majoritariamente fotos militares/aeromédicas; um `Vital signs monitor display.jpg` adulto genérico (não cobre achado neonatal específico).

### Motivo da inconclusividade

Captura de tela de monitor neonatal mostrando episódio de apneia + bradicardia + dessaturação **simultâneos** com timestamps reais de RN é dado clínico publicado em estudos de pesquisa específicos, que tendem a ter copyright não-CC. Fotos de equipamento NICU em CC BY existem mas mostram apenas o monitor ligado em traçado normal, sem captura do evento.

### Fallback recomendado

**Escalar para `ilustrador-medico-bauer`**: gerar SVG sintético reproduzindo aparência canônica de tela bedside neonatal com 4 canais:
- Linha 1: ECG (HR) com queda visível abaixo de 100 bpm (área marcada em vermelho).
- Linha 2: Curva respiratória (impedância torácica) com pausa > 20s (linha plana).
- Linha 3: SpO2 com queda de 95% → 70% sincronizada.
- Linha 4: Alarme visual com timestamp e categoria "BRADYCARDIA + APNEA + DESAT".

Vantagem pedagógica do SVG: pode anotar com setas e legendas didáticas que captura real raramente permite por ruído visual.

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` B37

**B37 é declarado OPCIONAL no brief**. Caminho preferido: SVG do ilustrador (denso e didático). Caminho alternativo: omitir e usar tabela textual com colunas "Canal monitorado / Achado durante episódio" — texto soberano cobre adequadamente o conceito definicional ("pausa > 20s OU pausa de qualquer duração com bradi/dessat").

---

## Reuso cross-module — verificação

Brief solicitou cruzamento com **M3 B15 (VPP balão+máscara)**. Verificação: B33-B37 são **imagens diferentes de B15** (RX/foto vs. técnica de reanimação). Sem sobreposição. Cross-link conceitual pode existir em 6.1 (Firmindo na sala de parto → referência a `#/p1-m3-p5` VPP), mas é hyperlink textual, não reuso de imagem.

---

## Notas operacionais ao Executor

1. **Imagens baixadas** ficam em `assets/img/`:
   - `BNN-rx-sdr-irds-haggstrom.png` (272 KB, 551×471)
   - `BNN-cpap-premature-infant-hall.jpg` (746 KB, 2.102×1.344)
2. **Para os 3 inconclusivos** (B34, B36, B37): aguardar SVG do `ilustrador-medico-bauer` ou decisão Bauer de omitir.
3. **Não modificar** as imagens reais sem necessidade. B33 e B35 estão prontas para `<img>` direto com `loading="lazy"`.
4. **Attribution obrigatória**: blocos preparados em cada seção acima — embutir como `<figcaption>` discreta ou em rodapé de página dedicado a créditos.
5. **Dimensões responsivas**: B33 (551×471) é apropriado para mid-width; B35 (2102×1344) pode escalar até full-width sem perda perceptível.

---

## Próximos passos sugeridos

1. **Bauer decide** sobre B34/B36/B37: escalar ilustrador (preferencial) OU omitir OU usar fallback editorial.
2. **Executor** integra B33 e B35 no HTML M6 (páginas 6.5 e 6.6 respectivamente) com attribution + alt text canônicos.
3. **Ilustrador** (se acionado) recebe os 3 briefs reformulados como SVG.
4. Gate Bauer "imagem em toda página" mantido em 6.5 (B33), 6.6 (B35) — outras páginas seguem padrão sem dependência de B34/B36/B37.
