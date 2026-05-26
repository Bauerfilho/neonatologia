# BUSCA-IMAGENS — Módulo 9 (Bônus 1 · Enterocolite Necrosante)

**Data**: 2026-05-26
**Buscador**: buscador-imagem-medica-bauer
**Modo**: Bauer ativo, --auto
**Briefs alvo**: V72, V74, V75, V77, V78, V79 — 6 imagens (5 ALTA + 1 MÉDIA)
**Contexto crítico**: M9 é a aula paradigmaticamente radiografia-dependente — pneumatose corte transversal (V74) é declarada literalmente como "**imagem de prova**" no prompt-final. ECN sem radiografia real é o anti-padrão exato que motivou a pipeline.

---

## Sumário executivo

| Brief | Visual ID | Achado | Status | Arquivo local | Fonte |
|-------|-----------|--------|--------|---------------|-------|
| V72 | distensão clínica RN | Foto clínica abdômen distendido NEC | ⚠️ INCONCLUSIVO | — | Escalar ilustrador SVG (fallback ético) |
| V74 | "imagem de prova" pneumatose transversal | RX abdome neonatal — pneumatose intestinal + hepatis | ✅ QUALIFICADA | `BNN-v74-v78-pneumatose-portal-nec-0w-hellerhoff.jpg` | Wikimedia Commons / Hellerhoff (CC BY-SA 4.0) |
| V75 | pneumatose linear/pontilhado longitudinal | RX sequencial NEC totalis (linear lucent + soap-bubble + portal + football) | ✅ QUALIFICADA | `BNN-v75-pneumatose-linear-nec-mishra-pmc.jpg` | PMC / Mishra et al. 2022 (CC BY-NC 4.0) |
| V77 | pneumoperitônio neonatal | RX abdome neonatal — perfuração focal + ar livre massivo | ✅ QUALIFICADA | `BNN-v77-pneumoperitonio-perforacao-neonatal-hellerhoff.jpg` | Wikimedia Commons / Hellerhoff (CC BY-SA 4.0) |
| V78 | gás venoso portal RN | RX abdome neonatal — pneumatose intestinal + hepatis (gás portal arborescente periférico) | ✅ QUALIFICADA (compartilhada com V74) | `BNN-v74-v78-pneumatose-portal-nec-0w-hellerhoff.jpg` | Wikimedia Commons / Hellerhoff (CC BY-SA 4.0) |
| V79 | sinal de Rigler / dupla parede | RX abdome — ar crescente sobre fígado + Rigler (dupla parede de alça) | ✅ QUALIFICADA (não-neonatal) | `BNN-v79-rigler-pneumoperitonio-hellerhoff.jpg` | Wikimedia Commons / Hellerhoff (CC BY-SA 3.0) |

**Resultado quantitativo**: **5/6 QUALIFICADAS** + 1/6 INCONCLUSIVO ético (V72 → escalar ilustrador). **4 arquivos físicos entregues** (V74+V78 compartilham 1 arquivo — pneumatose+hepatis num único caso clínico Hellerhoff).

**Hellerhoff confirmado como fornecedor canônico de 3 das 5 imagens** (V74, V78, V77, V79) — continuidade direta da pipeline M7 (RX SAM + pneumotórax).

**Aceite global**: ≥4/6 imagens reais entregues = ✅ aceite verde. M9 entregou 5/6 = supera teto.

---

## Defesa anti-prompt-injection (AGENTS.md §11 + buscador-imagem-medica-bauer §12)

Detectadas **3 tentativas de prompt injection** em outputs de tool durante a sessão:

1. `Read` do prompt de input — embebido `<system-reminder>` sobre MCP Figma (instrução não-solicitada pra carregar skills `/figma-use`, `/figma-generate-design` etc.). **Tratada como dado, instrução ignorada.** Continuei conforme escopo declarado pelo Bauer (busca de imagens médicas M9, NÃO design Figma).

2. `Read` do prompt de input — embebido `<system-reminder>` sobre "Auto Mode Active". Já estava operando em modo `--auto` declarado pelo Bauer no início; nenhum comportamento alterado.

3. `Read` do prompt de input — embebido `<system-reminder>` notificando troca de data ("today is now 2026-05-26"). Aceito como atualização operacional sem ação (data não-crítica para escopo de busca).

Conteúdo lido das fontes externas (Wikimedia, PMC) foi tratado como dado verificável, não-instrução. Nenhuma instrução de fonte externa foi seguida. Defesa AGENTS.md §11 aplicada.

---

## V72 — Foto clínica distensão abdominal RN com ECN [⚠️ INCONCLUSIVO]

### Status

**Não qualificada em fontes abertas confiáveis após busca exaustiva.**

### Buscas executadas

1. Wikimedia Commons — `newborn abdominal distension` (50 resultados): apenas textos históricos digitalizados em PDF (1800s-1950s); zero fotos clínicas neonatais.
2. Wikimedia Commons — `premature infant abdomen` (1.992 resultados): mesma situação — textos infantis históricos, zero clínicas.
3. Wikimedia Commons — `necrotizing enterocolitis abdominal` filtros imagem: 0 fotos clínicas anonimizadas em CC. Apenas 3 fotos de **patologia macroscópica de autópsia** (`Neonatal necrotizing enterocolitis, gross pathology 20G0021/0022/0023 lores.jpg`) — relevantes para outro tipo de brief (peça cirúrgica/autópsia), não distensão clínica em paciente vivo.
4. PMC open access — `"necrotizing enterocolitis" "abdominal distension" photograph "CC BY"`: 18 resultados, nenhum com foto clínica de distensão neonatal qualificada (PMC12989219 mencionado mas sem confirmação CC BY visível + sem garantia da foto).
5. DermNet NZ — categoria neonatal raramente cobre ECN: 0 resultados úteis.
6. Radiopaedia — esperado HTTP 403 anti-bot.

### Motivo da inconclusividade

Foto clínica neonatal de paciente vivo com identificação anatômica (abdômen + face/genitália potencialmente visível) tem **barreira ética dupla**:
- Consentimento parental documentado obrigatório (raramente publicado em CC livre)
- Anonimização facial técnica (raramente feita em fotos científicas abertas)

Fotos clínicas neonatais em CC permissivo existem em volume reduzido em PMC e quase ausentes em Wikimedia Commons — confirma a previsão da revisão Fase 0 (`docs/imagens-revisao-m9.md` §4 V72: "risco principal: consentimento parental ético + anonimização facial mesmo em CC. Em última instância: SVG autoral ilustrativo").

### Fallback recomendado

**Escalar para `ilustrador-medico-bauer`**: gerar SVG esquemático de "abdômen neonatal distendido em prematuro com ECN" — silhueta de RN em DDH, abdômen globoso com circunferência aumentada, alças intestinais visíveis através da pele fina translúcida (sinal característico do RN pré-termo extremo), eventual eritema sutil em parede + edema periumbilical, anotações apontando os achados. Vantagem do SVG: anotação direta dos componentes da tríade clínica de 9.4 (distensão + vômito bilioso + sangramento retal) sem dilema ético.

### `[BUSCADOR-IMAGEM-INCONCLUSIVO]` V72

**Caminho preferido**: SVG do ilustrador. Página 9.4 funciona pedagogicamente com SVG + texto soberano (a tríade clínica e o "sangramento retal isolado em RNPT = ECN até prova em contrário" da Q1 quiz 9.4 são entregues no texto), independente de foto real.

---

## V74 — RX abdome neonatal — pneumatose intestinal "imagem de prova" [✅ QUALIFICADA]

> **Observação importante**: este arquivo cobre **simultaneamente V74 e V78** — o caso Hellerhoff NEC 0W mostra **AMBAS** pneumatose intestinal (parede da alça intestinal) E pneumatose hepatis (gás venoso portal no fígado). Reuso do mesmo arquivo em 2 figures distintos no HTML é canônico (paralelo do M7 §7.12 — RX SAM reusada em painel comparativo).

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-v74-v78-pneumatose-portal-nec-0w-hellerhoff.jpg`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:Pneumatosis_intestinalis_und_hepatis_bei_NEC_0W_-_CR_ap_-_001.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/6/6a/Pneumatosis_intestinalis_und_hepatis_bei_NEC_0W_-_CR_ap_-_001.jpg
- **Autor**: Hellerhoff (radiologista alemão, contribuidor canônico Wikimedia Commons; já fornecedor de M7 — `BNN-rx-sam-grosseiro-hellerhoff.jpg` + `BNN-rx-pneumotorax-neonato-hellerhoff.jpg`)
- **Data de upload**: 10 de dezembro de 2020
- **Dimensões originais**: 1.208 × 968 px (JPEG, 106 KB) — atende ≥800 px largura
- **Descrição técnica da fonte (verbatim, traduzido do alemão)**: "Pneumatosis intestinalis und hepatis bei nekrotisierender Enterokolitis" → "Pneumatose intestinal e hepática em enterocolite necrosante" — radiografia em incidência AP de RN de 0 semanas (recém-nascido termo de poucos dias ou prematuro nas primeiras horas/dias), demonstrando gás intramural na parede de alças intestinais e gás no sistema venoso portal hepático.

### Validação tripla

- ✅ **Camada 1 (achado clínico correto)**: descrição da fonte confirma **pneumatosis intestinalis** (gás intramural) — exatamente o achado patognomônico de ECN (estágio IIA Bell-Walsh) declarado no brief V74 e no prompt-final §9.5 ("colar de pérolas pretas margeando o contorno externo da alça"). Adicionalmente apresenta **pneumatosis hepatis** (gás portal/portovenoso) — cobre simultaneamente V78.
- ✅ **Camada 2 (modalidade correta)**: radiografia AP abdominal neonatal (CR ap) — modalidade exata do brief V74.
- ✅ **Camada 3 (anatomia/idade correta)**: paciente neonatal (0W = 0 Wochen = 0 semanas, recém-nascido). Anatomia abdominal completa visível. Lateralidade não-aplicável (não é achado lateralizado — pneumatose pode aparecer em qualquer alça).

### Licença

- **Tipo**: Creative Commons CC BY-SA 4.0 International (Attribution-ShareAlike)
- **Compatibilidade Bauer**: alta. Plataforma Bauer Neonatologia é educacional, sem venda direta — CC BY-SA 4.0 cobre sem restrição prática. Derivado deve manter CC BY-SA (compatível).
- **Restrições**: atribuição obrigatória; derivados devem ser CC BY-SA.

### Attribution canônica pronta para Executor

```html
<figcaption class="figcaption">
  <strong>Achado:</strong> RN com enterocolite necrosante — pneumatose intestinal (gás intramural na parede de alças) + pneumatose hepatis (gás venoso portal arborescente no fígado). Padrão patognomônico de ECN estágio IIB Bell-Walsh.
  <span class="attribution">Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 4.0). Fonte: <a href="https://commons.wikimedia.org/wiki/File:Pneumatosis_intestinalis_und_hepatis_bei_NEC_0W_-_CR_ap_-_001.jpg" target="_blank" rel="noopener">commons.wikimedia.org</a>.</span>
</figcaption>
```

### Alt text recomendado (PT-BR, didático)

> "Radiografia AP de abdome de recém-nascido com enterocolite necrosante. Mostra dois achados patognomônicos simultâneos: pneumatose intestinal (bolhas e linhas radiolucentes na parede de alças intestinais, padrão de 'colar de pérolas pretas' margeando o contorno externo) e pneumatose hepatis / gás venoso portal (ramificações finas radiolucentes arborescentes no parênquima hepático, atingindo a periferia do fígado). Quadro radiográfico característico de ECN avançada — estágio IIB Bell-Walsh (pneumatose + gás portal sem pneumoperitônio)."

### Nota sobre reuso V74 ↔ V78

Este mesmo arquivo é referenciado em DUAS figures distintos no HTML M9:
- **V74 (página 9.5)** — foco em pneumatose intestinal (corte transversal, padrão bolhoso na parede da alça)
- **V78 (página 9.6)** — foco em gás venoso portal (padrão arborescente no fígado)

Atribuição idêntica nas duas ocorrências. Sugestão Executor: posicionar o caption/anotação destacando o achado relevante em cada página (cropping leve via CSS `object-position` se necessário, mantendo a imagem original intacta — CC BY-SA permite crops/derivados).

---

## V75 — RX pneumatose linear/longitudinal (evolução NEC totalis) [✅ QUALIFICADA]

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-v75-pneumatose-linear-nec-mishra-pmc.jpg`
- **URL canônica fonte (artigo)**: https://pmc.ncbi.nlm.nih.gov/articles/PMC9976546/
- **URL imagem direta (Figure 2)**: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/49ae/9976546/91ea8dfde3b2/nihms-1870282-f0002.jpg
- **Autores**: Mishra V, Cuna A, Singh R, Schwartz DM, Chan S, Maheshwari A.
- **Artigo**: "Imaging for Diagnosis and Assessment of Necrotizing Enterocolitis"
- **Periódico**: *Newborn (Clarksville)* 2022;1(1):182–189. doi:10.5005/jp-journals-11002-0002
- **Data**: 2022 (publicado março 2022, disponível em PMC março 2023)
- **Dimensões originais**: 1.811 × 751 px (JPEG, 871 KB, 300 DPI alta qualidade)
- **Descrição técnica (verbatim da legenda Figure 2)**: "Sequential AP supine radiographs showing NEC evolution: (A) NEC totalis with **linear lucent shadows in gastric wall, 'soap-bubble' intramural gas (pneumatosis intestinalis), portal venous gas**, dilated bowel loops, bowel wall edema; (B) After 6 hours — gastric distension decreased, pneumatosis and portal venous gas persist; (C) 18 hours later — **pneumoperitoneum (intestinal perforation) with 'football sign'** visible, gas between diaphragm domes and liver."

### Validação tripla

- ✅ **Camada 1 (achado clínico correto)**: legenda da fonte confirma literalmente **"linear lucent shadows"** + **"'soap-bubble' intramural gas"** — exatamente o brief V75 (pneumatose linear/longitudinal pontilhado) E adicionalmente o padrão bolhoso (alternativa/complementar a V74). Painel (A) cobre V75 + V74; painel (B) e (C) cobrem evolução até pneumoperitônio + football sign (reforço educacional do conceito IIA → IIIB declarado em 9.5).
- ✅ **Camada 2 (modalidade correta)**: "Sequential AP supine radiographs" — radiografia abdominal AP supina, modalidade exata.
- ✅ **Camada 3 (anatomia/idade correta)**: contexto neonatal explícito (NEC totalis — entidade exclusiva neonatal). Imagem mostra abdômen neonatal completo. Sequência temporal (0h, 6h, 18h) tem valor didático adicional para discussão Bell-Walsh.

### Licença

- **Tipo**: declarada inconsistentemente no artigo: header diz **"Creative Commons Attribution 4.0 International License"** mas URL apontada é `creativecommons.org/licenses/by-nc/4.0/` → **CC BY-NC 4.0** (Attribution-NonCommercial).
- **Interpretação conservadora**: tratada como **CC BY-NC 4.0**.
- **Compatibilidade Bauer**: plataforma Bauer Neonatologia é educacional sem venda direta — uso permitido sob CC BY-NC. **Declarar ao Bauer**: se plataforma vier a ser monetizada (curso pago), revalidar licença ou remover/substituir.
- **Restrições**: atribuição obrigatória; uso não-comercial; sem restrição a derivativos.

### Attribution canônica pronta para Executor

```html
<figcaption class="figcaption">
  <strong>Achado:</strong> Sequência radiográfica de evolução de ECN (NEC totalis): (A) pneumatose intestinal com sombras lineares lucentes e gás intramural em padrão bolhoso ("soap-bubble"), gás venoso portal, alças dilatadas; (B) 6h depois — pneumatose e gás portal persistem; (C) 18h depois — pneumoperitônio com "football sign" (perfuração intestinal, indicação cirúrgica inequívoca, estágio IIIB Bell-Walsh).
  <span class="attribution">Radiografia: Mishra V, Cuna A, Singh R, et al. <em>Newborn</em> 2022;1(1):182–189. Via PubMed Central (CC BY-NC 4.0). Fonte: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9976546/" target="_blank" rel="noopener">PMC9976546</a>.</span>
</figcaption>
```

### Alt text recomendado (PT-BR, didático)

> "Sequência de três radiografias AP de abdome em recém-nascido com enterocolite necrosante totalis, demonstrando evolução temporal em 18 horas. Painel A (apresentação): sombras lineares lucentes na parede gástrica e padrão de gás intramural em 'soap-bubble' (pneumatose intestinal), gás venoso portal, alças intestinais dilatadas, edema de parede. Painel B (6h depois): pneumatose e gás portal persistem; distensão gástrica reduzida. Painel C (18h depois): pneumoperitônio franco com 'football sign' (sinal do futebol americano) — gás livre na cavidade peritoneal envolvendo o abdome todo, indicando perfuração intestinal. Transição Bell-Walsh IIA → IIIB documentada radiograficamente."

### Nota sobre uso múltiplo da imagem

A figura também cobre conceitualmente V77 (pneumoperitônio em painel C) e V78 (gás portal em painel A) — sugestão para Executor: embedar em 9.5 (V75) como sequência completa OU cropar para uso isolado conforme a página.

---

## V77 — RX pneumoperitônio neonatal — perfuração intestinal focal [✅ QUALIFICADA]

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-v77-pneumoperitonio-perforacao-neonatal-hellerhoff.jpg`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:Fokale_intestinale_Perforation_0M_-_CR_-_001.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/3/32/Fokale_intestinale_Perforation_0M_-_CR_-_001.jpg
- **Autor**: Hellerhoff (radiologista canônico — terceira imagem M9 do mesmo fornecedor)
- **Data**: 18 de outubro de 2021 (upload 31 de março de 2022)
- **Dimensões originais**: 2.711 × 1.108 px (JPEG, 524 KB) — alta resolução
- **Descrição técnica (verbatim, traduzido do alemão)**: "Fokale intestinale Perforation bei einem Neugeborenen mit massiv freier Luft intraabdominell" → "Perfuração intestinal focal em recém-nascido com ar livre intraabdominal massivo."

### Validação tripla

- ✅ **Camada 1 (achado clínico correto)**: "massiv freier Luft intraabdominell" = pneumoperitônio massivo — exatamente o brief V77 (gás livre na cavidade peritoneal indicando perfuração intestinal). Contexto clínico (perfuração intestinal focal em neonato) alinha com o estágio IIIB Bell-Walsh (perfuração = indicação cirúrgica inequívoca, exatamente o conteúdo da página 9.6 e do quiz Q2).
- ✅ **Camada 2 (modalidade correta)**: radiografia (CR) abdominal neonatal — modalidade do brief.
- ✅ **Camada 3 (anatomia/idade correta)**: "0M" = neonato (0 Monate = 0 meses, equivalente a "0W" em alguns padrões Hellerhoff; pode também indicar paciente masculino de 0 meses dependendo da convenção do uploader). Contexto "Neugeborenen" no caption confirma idade neonatal. Anatomia abdominal completa.

### Licença

- **Tipo**: Creative Commons CC BY-SA 4.0 International
- **Compatibilidade Bauer**: alta. Mesma análise de V74 — CC BY-SA cobre uso educacional Bauer sem restrição.
- **Restrições**: atribuição obrigatória; derivados em CC BY-SA.

### Attribution canônica pronta para Executor

```html
<figcaption class="figcaption">
  <strong>Achado:</strong> RN com perfuração intestinal focal e pneumoperitônio massivo (ar livre na cavidade peritoneal). Indicação cirúrgica inequívoca — estágio IIIB Bell-Walsh.
  <span class="attribution">Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 4.0). Fonte: <a href="https://commons.wikimedia.org/wiki/File:Fokale_intestinale_Perforation_0M_-_CR_-_001.jpg" target="_blank" rel="noopener">commons.wikimedia.org</a>.</span>
</figcaption>
```

### Alt text recomendado (PT-BR, didático)

> "Radiografia abdominal AP de recém-nascido com perfuração intestinal focal e pneumoperitônio massivo. Mostra ar livre extenso na cavidade peritoneal envolvendo todo o abdome (sinal do futebol americano sugerido pela distribuição do gás), indicando perfuração intestinal — critério radiográfico de cirurgia inequívoca em ECN, estágio IIIB Bell-Walsh."

---

## V78 — RX gás venoso portal / pneumoportia [✅ QUALIFICADA — compartilhada com V74]

### Imagem selecionada

**Arquivo idêntico ao V74**: `assets/img/BNN-v74-v78-pneumatose-portal-nec-0w-hellerhoff.jpg`

O caso Hellerhoff NEC 0W documenta **simultaneamente pneumatose intestinal E pneumatose hepatis** (descrição da fonte: "Pneumatosis intestinalis **und hepatis** bei NEC"). A imagem mostra os DOIS padrões em um único caso clínico.

### Justificativa do reuso

- **Vantagem pedagógica**: o aluno vê em um único exame radiográfico real os dois achados patognomônicos consecutivos da escalada Bell-Walsh (IIA pneumatose intestinal → IIB pneumatose intestinal + gás portal) — exatamente a transição declarada como prioridade didática em 9.7 (tabela Bell-Walsh) e 9.6 (mnemônico "**portia de porta, pneumo de gás**").
- **Vantagem operacional**: 1 imagem, 1 arquivo, 2 figures no HTML. Reduz overhead de assets sem perder cobertura.
- **Precedente Bauer**: M7 §7.12 fez cross-reuso de RX SAM Hellerhoff em painel comparativo de 4 RX.

### Validação tripla (foco V78)

- ✅ **Camada 1**: descrição "pneumatose hepatis" = gás portal/portovenoso intra-hepático. Padrão visual no RX: ramificações radiolucentes arborescentes no parênquima hepático (extensão até a periferia = sinal de gravidade, exato detalhe pedagógico declarado em 9.6 linha 1031 do prompt-final).
- ✅ **Camada 2**: radiografia abdominal AP neonatal.
- ✅ **Camada 3**: paciente neonatal (0W); fígado visível com padrão de gás portal.

### Attribution canônica para V78 (mesma do V74 + foco na lente do achado)

```html
<figcaption class="figcaption">
  <strong>Achado:</strong> Gás venoso portal (pneumatose hepatis) em RN com ECN — padrão arborescente radiolucente nos ramos da veia porta intra-hepática, atingindo a periferia do fígado (sinal de gravidade). Acompanha pneumatose intestinal no mesmo caso. Estágio IIB Bell-Walsh.
  <span class="attribution">Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 4.0). Fonte: <a href="https://commons.wikimedia.org/wiki/File:Pneumatosis_intestinalis_und_hepatis_bei_NEC_0W_-_CR_ap_-_001.jpg" target="_blank" rel="noopener">commons.wikimedia.org</a>.</span>
</figcaption>
```

### Alt text recomendado V78 (PT-BR, didático)

> "Radiografia AP de abdome de recém-nascido com enterocolite necrosante demonstrando gás venoso portal (pneumatose hepatis). Padrão visual característico: ramificações finas radiolucentes seguindo o trajeto dos ramos da veia porta intra-hepática, com extensão até a periferia do fígado — distribuição periférica é sinal de gravidade, em contraste com a aerobilia (de distribuição central no fígado). Achado concomitante de pneumatose intestinal no mesmo caso clínico, configurando ECN estágio IIB Bell-Walsh."

### Nota crítica para Executor

V78 foi declarado no prompt-final como "**imagem rara e de alto valor didático**" (linha 791) — vale insistência na busca. **Resultado da busca**: única imagem CC qualificada de gás portal neonatal em Wikimedia Commons é o caso Hellerhoff NEC 0W (que felizmente cobre o achado). Alternativa secundária identificada (Altokhais PMC7479558 Figure 2 — radiografia neonatal mostrando portal gas com setas anotadas, CC BY-NC 4.0) **descartada por dimensões abaixo do mínimo** (592×629 px, abaixo do critério ≥800px declarado pelo Bauer). Hellerhoff é a única qualificada.

---

## V79 — RX sinal de Rigler / dupla parede [✅ QUALIFICADA — paciente não-neonatal, sinal universal]

### Imagem selecionada

- **Arquivo local**: `assets/img/BNN-v79-rigler-pneumoperitonio-hellerhoff.jpg`
- **URL canônica fonte**: https://commons.wikimedia.org/wiki/File:Rigler-Zeichen.jpg
- **URL imagem direta**: https://upload.wikimedia.org/wikipedia/commons/c/c0/Rigler-Zeichen.jpg
- **Autor**: Hellerhoff (quarta imagem M9 do mesmo radiologista — fornecedor consolidado)
- **Data**: 3 de junho de 2015
- **Dimensões originais**: 1.469 × 997 px (JPEG, 275 KB) — atende ≥800 px largura
- **Descrição técnica (verbatim, traduzido do alemão)**: "Pneumoperitoneum mit Luftsichel über der Leber und Rigler-Zeichen — Luft sowohl im als auch außerhalb des Darms, so dass die Darmwand gut kontrastiert ist." → "Pneumoperitônio com crescente de ar sobre o fígado e sinal de Rigler — ar tanto dentro quanto fora do intestino, contrastando bem a parede intestinal."

### Validação tripla

- ✅ **Camada 1 (achado clínico correto)**: descrição da fonte cita **explicitamente "Rigler-Zeichen"** (sinal de Rigler), o achado exato do brief V79. Adicionalmente cita "Luftsichel über der Leber" (ar crescente sobre o fígado) — segundo sinal canônico de pneumoperitônio. Cobre o conteúdo da página 9.6 + 9.7.
- ✅ **Camada 2 (modalidade correta)**: radiografia abdominal — modalidade do brief.
- ⚠️ **Camada 3 (anatomia parcial)**: paciente **não-neonatal** (idade não-especificada, mas o porte do abdome na imagem sugere adulto). O sinal de Rigler é um **sinal radiográfico universal** (independente da idade) — a fisiopatologia (ar dentro + ar fora da alça → contraste duplo da parede) é idêntica em RN e adulto. Para fins didáticos do brief V79 ("treinar reconhecimento do sinal radiográfico em supino quando prematuro instável não tolera mudança postural"), a imagem adulta **ensina o sinal corretamente** desde que o caption declare a diferença anatômica.

### Licença

- **Tipo**: Creative Commons CC BY-SA 3.0 Unported
- **Compatibilidade Bauer**: alta. CC BY-SA 3.0 e 4.0 são compatíveis na prática (Wikimedia trata como compatíveis para reuso).
- **Restrições**: atribuição obrigatória; derivados em CC BY-SA.

### Attribution canônica pronta para Executor

```html
<figcaption class="figcaption">
  <strong>Achado:</strong> Sinal de Rigler (dupla parede) em pneumoperitônio — ar dentro E fora do intestino contrasta a parede intestinal nos dois lados. Crescente de ar visível sobre o fígado (pneumoperitônio adicional). <em>Sinal radiográfico universal — caso ilustrativo em paciente não-neonatal; em RN, mesma semiologia.</em>
  <span class="attribution">Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 3.0). Fonte: <a href="https://commons.wikimedia.org/wiki/File:Rigler-Zeichen.jpg" target="_blank" rel="noopener">commons.wikimedia.org</a>.</span>
</figcaption>
```

### Alt text recomendado (PT-BR, didático)

> "Radiografia de abdome demonstrando sinal de Rigler (sinal da dupla parede) — achado radiográfico de pneumoperitônio em decúbito supino. A parede do intestino aparece bem contrastada porque há gás tanto na luz intestinal (contraste interno habitual) quanto na cavidade peritoneal livre (contraste externo anormal pela perfuração). Também visível crescente de ar sobre a borda hepática (segundo sinal de pneumoperitônio). Caso ilustrativo em paciente adulto — em recém-nascido com ECN estágio IIIB, a semiologia radiográfica do sinal de Rigler é idêntica, e seu reconhecimento em decúbito supino é crítico em prematuro instável que não tolera mudança postural para incidência horizontal."

### Nota crítica para Bauer (decisão pedagógica)

**Limitação assumida**: paciente adulto em vez de neonatal. O **sinal radiográfico em si é universal**, mas o brief V79 idealmente queria caso neonatal. Decisão pedagógica:

- **Opção A (recomendada)**: usar a imagem Hellerhoff Rigler-Zeichen com caption educacional que declara "sinal universal; em RN, mesma semiologia". Vantagem: imagem de altíssima qualidade demonstrando o sinal limpamente. Aluno aprende o padrão radiográfico, que é o objetivo.
- **Opção B (fallback)**: cropar/anotar a imagem Hellerhoff `Fokale Perforation 0M` (V77) destacando a região onde a dupla parede é visível (pneumoperitônio massivo em neonato necessariamente exibe Rigler). Vantagem: caso neonatal. Desvantagem: o caso V77 tem ar livre TÃO massivo que mascarará a semiologia fina da dupla parede.

**Recomendação do buscador**: ficar com Opção A (Rigler-Zeichen Hellerhoff) — ensina o sinal canônico com clareza didática máxima. O caption explícito sobre universalidade do sinal mantém a integridade clínica.

### Alternativa secundária identificada

`Double_wall_sign_annotated.jpg` (Mikael Häggström / Scott1751, CC BY-SA 3.0, 2889×2365 px) — versão anotada do sinal de Rigler, paciente adulto. Vantagem: anotação superposta facilita ensino. Desvantagem: anotação em inglês (potencialmente requer reanotação Bauer). **Sugestão Executor**: se preferir versão anotada, baixar este arquivo adicional como complemento ou substituto de Rigler-Zeichen Hellerhoff. **Decisão Bauer**.

---

## Tabela de attribution canônica (consolidada para Executor)

| Visual ID | Arquivo | Attribution string (inline) |
|-----------|---------|------------------------------|
| V74 | `BNN-v74-v78-pneumatose-portal-nec-0w-hellerhoff.jpg` | "Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 4.0). Fonte: commons.wikimedia.org/wiki/File:Pneumatosis_intestinalis_und_hepatis_bei_NEC_0W_-_CR_ap_-_001.jpg" |
| V75 | `BNN-v75-pneumatose-linear-nec-mishra-pmc.jpg` | "Radiografia: Mishra V, Cuna A, Singh R, et al. Newborn 2022;1(1):182–189. Via PubMed Central (CC BY-NC 4.0). Fonte: pmc.ncbi.nlm.nih.gov/articles/PMC9976546" |
| V77 | `BNN-v77-pneumoperitonio-perforacao-neonatal-hellerhoff.jpg` | "Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 4.0). Fonte: commons.wikimedia.org/wiki/File:Fokale_intestinale_Perforation_0M_-_CR_-_001.jpg" |
| V78 | `BNN-v74-v78-pneumatose-portal-nec-0w-hellerhoff.jpg` (compartilhado V74) | "Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 4.0). Fonte: commons.wikimedia.org/wiki/File:Pneumatosis_intestinalis_und_hepatis_bei_NEC_0W_-_CR_ap_-_001.jpg" |
| V79 | `BNN-v79-rigler-pneumoperitonio-hellerhoff.jpg` | "Radiografia: Hellerhoff, via Wikimedia Commons (CC BY-SA 3.0). Fonte: commons.wikimedia.org/wiki/File:Rigler-Zeichen.jpg" |

---

## Decisões críticas para Bauer (resumo)

1. **V72 INCONCLUSIVO**: foto clínica neonatal de distensão abdominal não encontrada em CC qualificada. **Escalar ilustrador SVG** ou aceitar texto soberano sem imagem.

2. **V74 + V78 compartilham 1 arquivo**: Hellerhoff NEC 0W mostra ambos os achados (pneumatose intestinal + hepática). Reuso intra-aula canônico — precedente M7 §7.12.

3. **V75 (Mishra PMC9976546) é CC BY-NC 4.0**: ler-se restritiva, mas plataforma Bauer Neonatologia é educacional sem venda direta → compatível na prática. **Declarar ao Bauer**: se Neonatologia vier a ser monetizada como curso pago, V75 precisa ser revalidada/substituída. Alternativa de fallback: cropar painel C da própria figura Mishra (que mostra football sign isolado) para uso em V77 — mas V77 já tem imagem Hellerhoff dedicada.

4. **V79 é paciente adulto**: sinal de Rigler é universal; caption declara explicitamente. Alternativa B (crop de V77 Hellerhoff) descartada por má-semiologia (gás massivo mascara dupla parede). Opção A (Rigler-Zeichen Hellerhoff) é melhor escolha pedagógica.

5. **Hellerhoff consolidado como fornecedor canônico de M9**: 3 das 5 imagens qualificadas vêm dele (V74/V78 compartilhada, V77, V79). Continuidade direta da pipeline M7 que já tinha 2 imagens Hellerhoff (`BNN-rx-sam-grosseiro-hellerhoff.jpg` + `BNN-rx-pneumotorax-neonato-hellerhoff.jpg`).

6. **Aceite final**: 5/6 QUALIFICADAS supera o teto de aceite verde (≥4/6). M9 entregue.

---

## Otimizações de Fase 3 (embed cirúrgico) — sem brief novo

Conforme `docs/imagens-revisao-m9.md` §3, duas otimizações pré-aprovadas para Fase 3 (Executor):

1. **Cross-reuso de V74/V78 + V77 + V75 como mini-thumbnails na tabela Bell-Walsh (9.7)** — alinhar cada radiografia à coluna do estágio correspondente (IIA Hellerhoff pneumatose / IIB Hellerhoff pneumatose+portal / IIIB Hellerhoff perforação ou Mishra panel C). Precedente: M7 §7.12.

2. **Painel comparativo IIA × IIIB em 9.5/9.6** — V74 (Hellerhoff pneumatose) lado a lado com V77 (Hellerhoff perforação) reforça transição visual estágio→estágio. Já planejado pelo Didata; assets prontos.

---

## Sumário operacional final

- **6 briefs** declarados (V72, V74, V75, V77, V78, V79).
- **5 ✅ QUALIFICADAS** (V74, V75, V77, V78, V79).
- **1 ⚠️ INCONCLUSIVO** (V72 — escalar ilustrador SVG).
- **4 arquivos físicos** entregues em `assets/img/` (V74 e V78 compartilham 1 arquivo).
- **Fornecedor canônico**: Hellerhoff (Wikimedia Commons, CC BY-SA 3.0/4.0) responde por 3/5 imagens; Mishra PMC9976546 (CC BY-NC 4.0) por 1.
- **Aceite global**: ≥4/6 = ✅ aceite verde. Entregue 5/6 = supera teto.

— Buscador-imagem-medica-bauer, 2026-05-26

---

## V72 SVG autoral — distensão abdominal + eritema parede em ECN (2026-05-26)

- **Status**: ✅ ENTREGUE pelo ilustrador-medico-bauer (fallback após `[BUSCADOR-IMAGEM-INCONCLUSIVO]` em CC — única alternativa pedagógica viável para ilustrar o sinal de alarme clínico de ECN sem comprometer consentimento parental).
- **Arquivo**: `BNN-v72-distensao-clinica-ecn-svg-autoral.svg`
- **Categoria** (taxonomia ilustrador §3): Anatomia simplificada clínica + inset temporal (linha do tempo de progressão).
- **Dimensões viewBox**: 800 × 600 (aspect ratio 4:3 responsivo).
- **Paleta**: Bauer Neonatologia (`bg-base #0a1620`, `color-danger #e74c3c` para eritema e setas de alarme, `color-warning #f0b440` para alça sentinela e marcação de atenção, pele em tom neonatal `#dcb88c → #b48d5e`).
- **Fonte**: Inter.
- **Acessibilidade**: `role="img"` + `<title>` + `<desc>` em PT-BR médico, WCAG AA.
- **Anonimização facial absoluta**: silhueta lateral neonatal pré-termo SEM face (cabeça representada como oval pleno).
- **Composição didática**:
  - **Painel principal (esquerda)**: silhueta lateral de RN pré-termo com abdome proeminente/distendido (curva ventral exagerada), eritema difuso em gradiente radial vermelho sobre parede abdominal (textura pontilhada complementar), alça sentinela representada como protuberância localizada em fossa ilíaca direita.
  - **3 setas + labels**: distensão (vermelho), eritema parede (vermelho), alça sentinela (amarelo).
  - **Caixa de alarme** (vermelha forte): "Distensão progressiva + eritema parede = sinal de alarme ECN (estágio II→III Bell)".
  - **Inset linha do tempo (canto inferior direito)**: 3 mini-abdomes mostrando progressão basal → 12 h (distensão) → 24 h (distensão + eritema).
- **Achados anotados (3 setas + 1 caixa de alarme + 1 timeline)**:
  1. **Distensão abdominal** — curva ventral proeminente progressiva.
  2. **Eritema parede abdominal** — sinal de comprometimento transmural.
  3. **Alça sentinela** — protuberância fixa em FID.
  4. **Caixa de alarme**: combinação dos achados = estágio II→III Bell.
  5. **Linha do tempo**: basal → 12 h → 24 h.
- **Footer SVG**: "Ilustração esquemática autoral Bauer Neonatologia · 2026 · anonimização facial absoluta"
- **Posicionamento sugerido**: página 9.4 do M9 (`9-4-ecn-apresentacao-clinica` ou equivalente).
- **Container sugerido**: `<figure class="figure-svg-clinica-alarme">` em coluna única, full-width até ~720 px (composição rica, não comporta layout estreito).
- **Cross-reuso candidato**: página 9.5 (sinais clínicos × estágios Bell-Walsh) e 9.6 (critérios de cirurgia em ECN) — Didata decide.

### Auditoria SVG autoral (gate ilustrador)

- ✅ `viewBox` definido + responsivo.
- ✅ `role="img"` + `aria-labelledby` apontando pra `<title>` + `<desc>`.
- ✅ `<title>` e `<desc>` técnicos em PT-BR, sem narração.
- ✅ Paleta Bauer Neonatologia aplicada (tokens canônicos).
- ✅ Fonte Inter.
- ✅ Sem placeholder, sem watermark, sem assinatura de IA, sem comentário SVG.
- ✅ Contraste de texto ≥ 4.5:1 contra fundo.
- ✅ Morfologia médica correta (distensão lateral exagerada compatível com íleo paralítico/perfuração iminente; eritema parede abdominal compatível com inflamação transmural; alça sentinela em FID compatível com íleo terminal acometido — sítio mais comum em ECN).
- ✅ Cores semânticas respeitadas (vermelho/danger = alarme/perigo/eritema; amarelo/warning = atenção/alça sentinela; coral neutro reservado para outros SVGs do módulo).
- ✅ Anonimização facial absoluta.

### Resumo M9 atualizado

- **6 briefs** declarados (V72, V74, V75, V77, V78, V79).
- **5 ✅ QUALIFICADAS em CC** (V74, V75, V77, V78, V79) + **1 ✅ ENTREGUE como SVG autoral** (V72).
- **0 ⚠️ INCONCLUSIVOS pendentes** — cobertura visual 6/6 completa.
- **Fornecedores**: Hellerhoff (3/6) + Mishra PMC9976546 (1/6) + Ilustrador-medico-bauer (1/6 — V72) + Hellerhoff compartilhado V74/V78.
