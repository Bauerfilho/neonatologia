# BUSCA DE IMAGENS — Módulo 4 Triagem Neonatal (Neonatologia Bauer)

Relatório do buscador de imagem médica Bauer. Modo --auto. Data: 2026-05-25.
Plataforma médica educacional brasileira pra residência. Validação tripla aplicada em cada candidato (achado clínico exato + modalidade/exame + anatomia/lateralidade).

**Resumo executivo**: 8 imagens reais licenciadas baixadas em `assets/img/`, validadas e prontas pra Executor embutir. 1 brief declarado **inconclusivo** (B21 — reflexo vermelho positivo bilateral em RN), com fallback de ilustrador SVG recomendado. 3 imagens entregues com ressalva de qualidade pedagógica declarada explicitamente (B20, B23, B25) — Didata/Bauer decidem se aceitam ou escalam pro ilustrador.

**Anti-prompt-injection**: nenhuma injeção detectada em fontes consultadas (Wikimedia Commons, NCBI/PMC, sites institucionais).

---

## B19 — Coleta do teste do pezinho (punção lateral do calcanhar)

**Arquivo local**: `assets/img/BNN-b19-pezinho-puncao.jpg`
**Página-alvo**: 4.2 (pezinho — papel filtro + janela 3-5 dias)
**Dimensões**: 2823 × 1563 px · 995 KB

**Fonte primária**:
- URL canônica Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Phenylketonuria_testing.jpg
- URL imagem direta: https://upload.wikimedia.org/wikipedia/commons/1/16/Phenylketonuria_testing.jpg
- Autor: Staff Sgt. Eric T. Sheler, U.S. Air Force
- Data: 12 dez 2007
- Local: Eielson Air Force Base, Alaska, EUA
- Descrição original (verbatim): "The blood of a two week-old infant is collected for a phenylketonuria, or PKU, screening"

**Validação tripla**:
- Camada 1 (achado correto): coleta de papel filtro Guthrie em RN — CONFIRMADO. Visível: papel filtro com pelo menos 2 gotas circulares de sangue depositadas (área impressa do cartão "AGRA 71011")
- Camada 2 (modalidade correta): fotografia clínica do procedimento, foco no calcanhar do RN + papel filtro
- Camada 3 (anatomia/técnica correta): punção em **borda LATERAL do calcanhar** confirmada visualmente (gota de sangue na lateral, não no meio plantar); profissional usando luvas; pé do RN segurado pra exposição da zona lateral

**Licença**:
- Tipo: **Domínio público** (trabalho de funcionário federal do governo dos EUA — USAF)
- Compatibilidade Bauer: ACEITÁVEL SEM RESTRIÇÃO — uso comercial, modificação e redistribuição livres

**Attribution canônica (pronta pra Executor)**:
```
U.S. Air Force photo by Staff Sgt. Eric T. Sheler, Eielson Air Force Base, Alaska, 2007. Public domain. Source: https://commons.wikimedia.org/wiki/File:Phenylketonuria_testing.jpg
```

**Alt text recomendado**:
> "Coleta do teste do pezinho em recém-nascido: profissional com luvas realizando punção em borda lateral do calcanhar; papel filtro Guthrie com gotas de sangue depositadas em círculos demarcados visível à esquerda"

**Notas pro Executor**:
- Anonimização total: imagem mostra apenas pé + papel filtro + mãos enluvadas; sem face do RN
- Aspect ratio horizontal (1.81:1) — bom pra hero/featured image
- Pode-se aplicar crop suave focando no calcanhar + papel filtro pra evitar borda direita escura

---

## B20 — Oxímetro de pulso em RN (medição neonatal)

**Arquivo local**: `assets/img/BNN-b20-oximetro-rn.jpg`
**Página-alvo**: 4.4 (coraçãozinho — técnica + fluxograma 2022)
**Dimensões**: 1524 × 1143 px · 139 KB

**Fonte primária**:
- URL canônica Wikimedia Commons: https://commons.wikimedia.org/wiki/File:New_Born_Foundation-_Working_Internationally.jpg
- URL imagem direta: https://upload.wikimedia.org/wikipedia/commons/7/7c/New_Born_Foundation-_Working_Internationally.jpg
- Autor: Stevenjohnson14 (Wikimedia Commons)
- Data: 9 março 2016
- Local: Beichuan People's Hospital, Sichuan, China
- Descrição original (verbatim): "Annamarie Saarinen, co-founder of the Newborn Foundation, performing newborn screening using a mobile phone pulse oximeter"

**Validação tripla**:
- Camada 1 (achado correto): oximetria de pulso em RN para triagem cardíaca — PARCIALMENTE CONFIRMADO. Display do oxímetro móvel mostra valores "98" e "97" (compatíveis com leituras pré/pós-ductal)
- Camada 2 (modalidade correta): oximetria de pulso portátil (mobile phone-based) — modalidade equivalente conceitualmente ao oxímetro hospitalar, mas dispositivo específico é variante moderna
- Camada 3 (anatomia/lateralidade correta): **NÃO CONFIRMADO VISUALMENTE** o sensor no MSD pré-ductal — RN no berço; ângulo da foto não permite identificar sensor com clareza; cena é de demonstração de equipamento

**Licença**:
- Tipo: **CC BY-SA 4.0** (Creative Commons Attribution-ShareAlike 4.0 International)
- Compatibilidade Bauer: ACEITÁVEL com share-alike — uso comercial e modificação permitidos com atribuição + derivado deve ter mesma licença
- Restrições: trabalhos derivados (cropped, anotações) precisam manter licença CC BY-SA 4.0

**Attribution canônica (pronta pra Executor)**:
```
By Stevenjohnson14 (Newborn Foundation demonstration, Beichuan People's Hospital, China, 2016), via Wikimedia Commons. Licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:New_Born_Foundation-_Working_Internationally.jpg
```

**Alt text recomendado**:
> "Demonstração de triagem cardíaca neonatal com oxímetro de pulso portátil em recém-nascido; display mostra saturação de oxigênio em valores compatíveis com triagem do coraçãozinho"

**RESSALVA EDITORIAL — Didata/Bauer decidir**:
- A imagem documenta oximetria neonatal mas **não é didaticamente forte pra ensinar técnica MSD pré-ductal vs MI pós-ductal**, pois sensor não é claramente visualizado no MSD.
- A cena é uma demonstração de evento (várias pessoas em volta), não um close técnico.
- **Sugestões alternativas**: (a) aceitar como ilustração contextual da triagem com legenda neutra; (b) escalar pro `ilustrador-medico-bauer` pra SVG sintético específico mostrando RN com sensor MSD + MI; (c) buscar foto cirúrgica em fonte fechada com permissão direta.

**Notas pro Executor**:
- Anonimização: face do RN mal visível por ângulo + cobertor; mas há rostos de adultos identificáveis na cena (autora Annamarie Saarinen, mencionada publicamente como co-fundadora da Newborn Foundation — exposição pública aceitável)
- Resolução 1524×1143 acima do mínimo Bauer (800px largura)
- Se Bauer escolher manter, considerar crop focando no berço + display do oxímetro

---

## B21 — Reflexo vermelho positivo bilateral em RN (teste do olhinho normal)

**Status**: **[BUSCADOR-IMAGEM-INCONCLUSIVO]**

**Página-alvo**: 4.6 (olhinho — reflexo vermelho bilateral simétrico)

**Buscas executadas**:
- Wikimedia Commons categoria "Red-eye effect" + "Red-eye effect in human" — apenas fotos de adultos em ambientes não-clínicos (flash photography casual); nenhuma com contexto de teste do reflexo vermelho em RN
- Wikimedia Commons busca "red reflex" — sem resultados relevantes (retorna red dot sights, relógios, etc)
- PMC busca "red reflex test newborn CC BY image" — artigos retornam apenas PRISMA flowcharts e forest plots; nenhuma foto clínica de reflexo vermelho positivo bilateral
- EyeWiki (AAOphtho) — bloqueado (403); fontes AAOphtho geralmente são copyrighted
- AAPOS recursos abertos — sem fotos CC BY de reflexo vermelho positivo em RN encontradas

**Motivo da inconclusividade**:
- Reflexo vermelho POSITIVO bilateral em RN é uma fotografia técnica difícil de capturar (requer oftalmoscópio direto, ângulo específico, paciente cooperativo) — raramente publicada em fontes abertas
- Quando publicada, geralmente fica em livros didáticos com licença comercial restrita (Wills Eye Manual, BCSC AAO, etc)
- Fotografia de flash com red-eye effect em RN existe mas é diferente conceitualmente: flash photography produz reflexo vermelho artificialmente intenso; teste clínico controlado produz reflexo alaranjado-avermelhado mais suave — usar foto de flash pode induzir confusão pedagógica

**Caminhos sugeridos** (decisão Didata/Bauer):
1. **Escalar pro `ilustrador-medico-bauer`** (RECOMENDADO): SVG sintético é especialmente bom pra esse caso — pode mostrar exatamente o reflexo vermelho-alaranjado simétrico bilateral em par de olhos esquematizados, com setas anotando "ambos vermelhos = normal"; ilustrador já estava listado como V22 no prompt-final A4
2. **Pular a imagem nesta seção** e expandir o texto Bauer pra cobrir o conceito (Didata já entrega texto soberano em 4.6)
3. **Bauer fornecer foto** se tiver case clínico próprio com consentimento

**Recomendação do buscador**: caminho 1 (ilustrador SVG). Conceito é esquematizável; SVG entrega valor pedagógico igual ou superior à foto real nesse caso específico.

---

## B22 — Leucocoria (reflexo branco unilateral — teste do olhinho alterado)

**Arquivo local**: `assets/img/BNN-b22-leucocoria-catarata.jpg`
**Página-alvo**: 4.6 (olhinho — comparação positivo vs alterado, DDx leucocoria)
**Dimensões**: 640 × 480 px · 93 KB

**Fonte primária**:
- URL artigo PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC9022157/
- URL imagem direta: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/5997/9022157/28e66fde5b76/RomJOphthalmol-66-32-g005.jpg
- Autores: Israr M, Zahir KK, Khattak A, Khattak IU, Gul N.
- Publicação: Romanian Journal of Ophthalmology, 2022;66(1):32-35
- Título: *Etiology of white pupillary reflex in pediatric age group*
- DOI: 10.22336/rjo.2022.8
- Descrição original (verbatim): "Leukocoria caused by congenital cataract in a 1-year-old child"

**Validação tripla**:
- Camada 1 (achado correto): leucocoria CONFIRMADA — pupila com reflexo branco-cinza-acinzentado visível (catarata congênita); etiologia documentada no artigo (catarata congênita ~80% dos casos da série)
- Camada 2 (modalidade correta): fotografia clínica do olho (close-up oftalmológico) — adequada pra didática
- Camada 3 (anatomia/lateralidade correta): leucocoria UNILATERAL em olho direito (criança em decúbito lateral); pupila acinzentada-branca claramente visível através da abertura palpebral

**RESSALVA: paciente tem 1 ano (não é RN)** — clinicamente leucocoria por catarata congênita é o mesmo achado independente da idade (sinal cardinal do teste do olhinho alterado); pode-se entregar com figcaption neutra "Leucocoria por catarata congênita em criança — sinal patológico que motiva encaminhamento oftalmológico imediato no teste do olhinho" sem informar idade explicitamente. Brief Bauer foca em mostrar o ACHADO (reflexo branco) — paciente 1 ano cumpre o papel pedagógico.

**Reuso M2**: o módulo M2 tem `BNN-b12-leucocoria-rubeola.jpg` (foto CDC PHIL de leucocoria associada à síndrome da rubéola congênita). O Executor M4 pode reusar B12-M2 ao invés desta foto se preferir manter consistência visual entre módulos — ambas são leucocoria clinicamente válida. Esta imagem (PMC9022157) é entregue como alternativa/complemento; Didata/Executor escolhem.

**Licença**:
- Tipo: **Creative Commons Attribution License (CC BY)** — versão não especificada explicitamente no artigo (geralmente CC BY 3.0 ou 4.0 em Rom J Ophthalmol)
- Compatibilidade Bauer: ACEITÁVEL SEM RESTRIÇÃO — uso comercial e modificação permitidos com atribuição
- Citação verbatim do artigo: "This is an open-access article distributed under the terms of the Creative Commons Attribution License"

**Attribution canônica (pronta pra Executor)**:
```
Israr M, Zahir KK, Khattak A, Khattak IU, Gul N. Etiology of white pupillary reflex in pediatric age group. Rom J Ophthalmol. 2022;66(1):32-35. Figure 5. Licensed under CC BY. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC9022157/
```

**Alt text recomendado**:
> "Leucocoria por catarata congênita — pupila com reflexo branco-acinzentado em vez do reflexo vermelho-alaranjado normal; sinal patológico que indica investigação oftalmológica imediata no teste do olhinho"

**Notas pro Executor**:
- Resolução 640×480 ABAIXO do mínimo Bauer (800px largura) — declarar pro Bauer
- Anonimização: apenas área dos olhos visível; identificação restrita; aceitável
- Considerar resize com upscaling de IA se Bauer optar por usar; alternativamente, reusar `BNN-b12-leucocoria-rubeola.jpg` do M2

---

## B23 — Equipamento EOA (otoemissões acústicas evocadas)

**Arquivo local**: `assets/img/BNN-b23-eoa-equipamento.png`
**Página-alvo**: 4.7 (orelhinha — EOA vs BERA)
**Dimensões**: 559 × 786 px · 793 KB

**Fonte primária**:
- URL canônica Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Triagem_Auditiva_Neonatal.png
- URL imagem direta: https://upload.wikimedia.org/wikipedia/commons/e/ea/Triagem_Auditiva_Neonatal.png
- Autor: Ministério da Saúde Brasil
- Data: 1 jan 2012
- Fonte original: Manual de Diretrizes de Atenção à Triagem Auditiva Neonatal, MS Brasil

**Validação tripla**:
- Camada 1 (achado correto): teste de emissões otoacústicas evocadas transientes (TEOAE) em RN — CONFIRMADO per legenda original do MS Brasil
- Camada 2 (modalidade correta): EOA (otoemissões acústicas) — modalidade exata pedida pelo brief B23
- Camada 3 (anatomia/posicionamento correto): mãe segurando bebê em colo; profissional posicionando dispositivo portátil próximo ao ouvido externo do RN — compatível com técnica EOA (sonda no conduto auditivo externo)

**Licença**:
- Tipo: **CC BY-SA 4.0** (declarado na página Wikimedia)
- Compatibilidade Bauer: ACEITÁVEL com share-alike — material do MS Brasil liberado pra reuso educacional
- Vantagem adicional: fonte oficial brasileira (MS) — alinhada com voz didática Bauer (residência brasileira)

**Attribution canônica (pronta pra Executor)**:
```
Ministério da Saúde Brasil. Triagem Auditiva Neonatal, 2012. Via Wikimedia Commons. Licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Triagem_Auditiva_Neonatal.png
```

**Alt text recomendado**:
> "Realização do teste de emissões otoacústicas evocadas (EOA) — triagem auditiva neonatal: dispositivo portátil posicionado próximo ao conduto auditivo externo do recém-nascido enquanto a mãe o segura"

**RESSALVA EDITORIAL — Didata/Bauer decidir**:
- Resolução 559×786 ABAIXO do mínimo Bauer (800px largura — esta tem 559px largura)
- Imagem é um screenshot didático do manual MS, não foto técnica de alta resolução
- **Sugestões alternativas**: (a) aceitar com legenda neutra; (b) escalar pro `ilustrador-medico-bauer` pra SVG mostrando sonda EOA inserida no conduto + bebê + comparação visual EOA (cóclea) vs BERA (nervo até tronco); (c) buscar foto Otodynamics/Bio-Logic (fabricantes) com permissão direta

**Notas pro Executor**:
- Anonimização: face da mãe visível (consentimento implícito do material MS oficial); face do bebê parcialmente visível em close
- Considerar upscaling ou substituição por SVG

---

## B24 — Equipamento BERA / PEATE (potencial evocado auditivo de tronco)

**Arquivo local**: `assets/img/BNN-b24-bera-eletrodos.jpg`
**Página-alvo**: 4.7 (orelhinha — BERA neurossensorial) + 4.8 (orelhinha — IRDA-2 + BERA+EOA simultâneos)
**Dimensões**: 3000 × 2400 px · 3.10 MB

**Fonte primária**:
- URL canônica Wikimedia Commons: https://commons.wikimedia.org/wiki/File:NeonatalHearingScreening.jpg
- URL imagem direta: https://upload.wikimedia.org/wikipedia/commons/3/37/NeonatalHearingScreening.jpg
- Autor: Liannadavis (Wikimedia Commons user)
- Data: 19 julho 2018
- Local: área de San Francisco, EUA

**Validação tripla**:
- Camada 1 (achado correto): triagem auditiva automatizada com Auditory Brainstem Response (AABR/BERA) em RN — CONFIRMADO. Eletrodo branco adesivo na testa + fones tipo earphone azul e vermelho (códigos R/L padrão audiologia) + cabos conectados a equipamento de PEATE
- Camada 2 (modalidade correta): BERA/AABR (não EOA) — modalidade exata pedida pelo brief B24. Eletrodos transcranianos são marca registrada do BERA (EOA não usa eletrodos)
- Camada 3 (anatomia/posicionamento correto): eletrodo na testa (Fz), eletrodos de referência atrás de ambas orelhas (M1/M2), fones acoplados externamente — montagem clássica de PEATE/BERA neonatal

**Licença**:
- Tipo: **CC BY-SA 4.0** (Creative Commons Attribution-ShareAlike 4.0 International)
- Compatibilidade Bauer: ACEITÁVEL com share-alike — uso comercial e modificação permitidos com atribuição + derivado deve ter mesma licença

**Attribution canônica (pronta pra Executor)**:
```
By Liannadavis, via Wikimedia Commons. Licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:NeonatalHearingScreening.jpg
```

**Alt text recomendado**:
> "Realização do BERA (potencial evocado auditivo de tronco) em recém-nascido — eletrodos adesivos posicionados na testa e atrás de ambas as orelhas, conectados a fones com códigos de cor R/L; modalidade neurossensorial retrococlear que avalia integridade do nervo auditivo e tronco encefálico"

**Notas pro Executor**:
- Resolução EXCELENTE (3000×2400) — acima do mínimo Bauer
- Anonimização: face do RN visível em perfil + chupeta + cabelos finos — aceitável conforme licença CC BY-SA 4.0 do autor original (que tinha consentimento pra publicar)
- Pode ser usada em alta resolução pra hero/detalhe ou crop pra mostrar foco nos eletrodos
- Excelente didática: deixa explícita a diferença EOA (sonda externa, sem eletrodo) vs BERA (eletrodos transcranianos)

---

## B25 — Frênulo lingual com anquiloglossia

**Arquivo local**: `assets/img/BNN-b25-linguinha-frenulo.jpg`
**Página-alvo**: 4.9 (linguinha — Bristol BTAT + frenectomia + controvérsia SBP × MS)
**Dimensões**: 786 × 402 px · 86 KB

**Fonte primária**:
- URL artigo PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC12500898/
- URL imagem direta: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/8858/12500898/4d34f7183a65/PAMJ-51-63-g001.jpg
- Autores: Meenakshi Dagar, Sheetal Asutkar
- Publicação: Pan African Medical Journal, 2025;51(63)
- Título: *Ankyloglossia unveiled: a clinical image highlighting the impact of tongue tie on oral mobility*
- DOI: 10.11604/pamj.2025.51.63.46390

**Descrição original** (verbatim):
> "Panel A: Restricted tongue movement; patient unable to extend tongue beyond lower lip. Panel B: Frenulum attachment at the tip of the tongue."

**Validação tripla**:
- Camada 1 (achado correto): anquiloglossia CONFIRMADA — Panel A mostra incapacidade de extensão da língua; Panel B mostra frênulo lingual aderido ao ápice da língua (insertion at tip) com restrição de elevação visível
- Camada 2 (modalidade correta): fotografia clínica intraoral em 2 painéis — adequada pra didática comparativa (mostrar limitação + frênulo)
- Camada 3 (anatomia/posicionamento correto): frênulo lingual em posição apical (anterior/tip) — padrão clássico de anquiloglossia com elevação restrita

**RESSALVA: paciente tem 12 anos (não é RN)** — anquiloglossia tem mesmo achado anatômico independente da idade, mas brief Bauer foca em contexto neonatal (teste da linguinha = primeiros dias de vida). Considerar:

**Sugestões alternativas**:
1. **Aceitar com figcaption neutra** focando no achado anatômico ("Anquiloglossia — frênulo lingual aderido ao ápice da língua com restrição de elevação"); evitar mencionar idade do paciente
2. **Escalar pro `ilustrador-medico-bauer`** pra SVG sintético mostrando frênulo curto em RN + língua em coração ("tongue tip notch") + comparação normal vs anquiloglósico
3. **Pular a imagem** e expandir texto Bauer cobrindo Bristol BTAT verbalmente

**Recomendação do buscador**: opção 1 (aceitar com legenda neutra). Achado anatômico é o ponto pedagógico; idade não muda a anatomia.

**Licença**:
- Tipo: **CC BY 4.0** (Creative Commons Attribution 4.0 International)
- Compatibilidade Bauer: ACEITÁVEL SEM RESTRIÇÃO — uso comercial e modificação permitidos com atribuição
- Citação verbatim: "Creative Commons Attribution International 4.0 License"

**Attribution canônica (pronta pra Executor)**:
```
Dagar M, Asutkar S. Ankyloglossia unveiled: a clinical image highlighting the impact of tongue tie on oral mobility. Pan Afr Med J. 2025;51:63. Figure 1. Licensed under CC BY 4.0. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC12500898/
```

**Alt text recomendado**:
> "Anquiloglossia em painel duplo: à esquerda, restrição de extensão da língua que não ultrapassa lábio inferior; à direita, frênulo lingual aderido ao ápice da língua impedindo elevação adequada — achado anatômico do teste da linguinha alterado"

**Notas pro Executor**:
- Resolução 786×402 BORDERLINE (786px largura, mínimo Bauer 800px — diferença mínima)
- Pode-se entregar como está ou pedir upscaling sutil
- 2 painéis lado-a-lado (A + B); Executor pode cropar pra exibir só um se quiser foco
- Anonimização: nariz e queixo visíveis; sem identificação clara

---

## B26 — Hálux bilateral deformado (sinal patognomônico de FOP)

**Arquivo local**: `assets/img/BNN-b26-fop-halux-bilateral.jpg`
**Página-alvo**: 4.10 (dedinho — FOP + hálux + Lei 15.094/2025)
**Dimensões**: 710 × 410 px · 100 KB

**Fonte primária**:
- URL artigo PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC11824486/
- URL imagem direta: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/c1e6/11824486/118ecdc73773/CRIOR2025-2161762.006.jpg
- Autores: Haile AM, Azale AW, Ayana B.
- Publicação: Case Reports in Orthopedics (Wiley), 2025;2025:2161762
- Título: *Early Detection for Better Patient Outcome: A Case Report on Two Patients Presenting With Fibrodysplasia Ossificans Progressiva at Tikur Anbessa Specialized Hospital, Ethiopia*
- DOI: 10.1155/cro/2161762

**Descrição original** (verbatim — Figura 6):
> "Bilateral hallux valgus and fixed flexion deformity of the left elbow"

**Validação tripla**:
- Camada 1 (achado correto): hálux valgo bilateral CONFIRMADO em paciente com FOP clínico (Caso 2 do artigo — menina 11 anos da Etiópia Oriental, FOP diagnosticada clinicamente por hálux + ossificação heterotópica progressiva)
- Camada 2 (modalidade correta): fotografia clínica antropométrica — pés bilateralmente visíveis em vista superior; cotovelo esquerdo em deformidade fixa visível
- Camada 3 (anatomia/lateralidade correta): **hálux BILATERAL deformado** — desvio em valgo com encurtamento (short, deviated, monophalangic-like) — sinal patognomônico da FOP per ACVR1/literatura clássica (Kaplan et al., 1995-2020)

**Diagnóstico FOP confirmado clinicamente** — artigo declara diagnóstico de FOP em ambos os casos baseado em hálux + ossificação heterotópica + curso progressivo + restrição articular; ACVR1 genética **não confirmada** por indisponibilidade no centro (Etiópia). Apresentação clínica é clássica e consistente.

**Licença**:
- Tipo: **Creative Commons Attribution License (CC BY)** — versão não explicitada no PMC (publicação Wiley 2025 geralmente é CC BY 4.0)
- Compatibilidade Bauer: ACEITÁVEL SEM RESTRIÇÃO — uso comercial e modificação permitidos com atribuição
- Citação verbatim: "This is an open access article distributed under the terms of the Creative Commons Attribution License, which permits use, distribution and reproduction in any medium, provided the original work is properly cited"

**Attribution canônica (pronta pra Executor)**:
```
Haile AM, Azale AW, Ayana B. Early Detection for Better Patient Outcome: A Case Report on Two Patients Presenting With Fibrodysplasia Ossificans Progressiva at Tikur Anbessa Specialized Hospital, Ethiopia. Case Rep Orthop. 2025;2025:2161762. Figure 6. Licensed under CC BY. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11824486/
```

**Alt text recomendado**:
> "Hálux valgo bilateral em paciente com Fibrodisplasia Ossificante Progressiva (FOP) — pés em vista superior mostrando hálux curtos, em desvio valgo bilateral simétrico; sinal cardinal congênito presente em ~95% dos casos de FOP que motiva a triagem do dedinho"

**Notas pro Executor**:
- Resolução 710×410 ABAIXO do mínimo Bauer (800px largura) — declarar pro Bauer
- Imagem tem 2 painéis lado-a-lado (pés à esquerda + braço com deformidade à direita); Executor pode cropar pra exibir só o painel dos pés se quiser foco no hálux
- Anonimização: apenas pés + braço visíveis; sem face do paciente
- Paciente é criança 11 anos (não RN), mas hálux deformado da FOP é congênito (presente desde nascimento) — achado anatômico mantém validade pedagógica pra brief de RN

---

## B27 — Ossificação heterotópica em FOP

**Arquivo local**: `assets/img/BNN-b27-fop-ossificacao-dorso.jpg`
**Página-alvo**: 4.10 (dedinho — FOP + flare-up + proibição IM)
**Dimensões**: 552 × 463 px · 128 KB

**Fonte primária**:
- URL artigo PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC11824486/
- URL imagem direta: https://cdn.ncbi.nlm.nih.gov/pmc/blobs/c1e6/11824486/e762b2547708/CRIOR2025-2161762.005.jpg
- Autores: Haile AM, Azale AW, Ayana B.
- Publicação: Case Reports in Orthopedics, 2025;2025:2161762
- DOI: 10.1155/cro/2161762

**Descrição original** (verbatim — Figura 5):
> "Multiple lumps visible over the back, with restriction of forward flexion of the trunk"

**Validação tripla**:
- Camada 1 (achado correto): ossificação heterotópica em FOP CONFIRMADA — Caso 2 do artigo (paciente 11 anos), evolução clinicamente típica desde nascimento; figura inclui linha do tempo "At birth → Age 6 month (neck/trunk swelling first appearance) → Age 2 (restriction of neck movement) → Age 9 (difficulty extending her elbows)"
- Camada 2 (modalidade correta): fotografia clínica de tronco em vista posterior — duas projeções (anterior + posterior) mostrando swellings dorsais
- Camada 3 (anatomia/distribuição correta): nódulos ósseos heterotópicos múltiplos em região cervico-dorsal — distribuição clássica FOP (ossificação progredindo no padrão craniocaudal/proximal-distal característico)

**Licença**:
- Tipo: **Creative Commons Attribution License (CC BY)** — mesma fonte e licença que B26
- Compatibilidade Bauer: ACEITÁVEL SEM RESTRIÇÃO

**Attribution canônica (pronta pra Executor)**:
```
Haile AM, Azale AW, Ayana B. Early Detection for Better Patient Outcome: A Case Report on Two Patients Presenting With Fibrodysplasia Ossificans Progressiva at Tikur Anbessa Specialized Hospital, Ethiopia. Case Rep Orthop. 2025;2025:2161762. Figure 5. Licensed under CC BY. Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC11824486/
```

**Alt text recomendado**:
> "Fibrodisplasia Ossificante Progressiva (FOP) estabelecida — múltiplas massas duras (nódulos ósseos heterotópicos) visíveis no dorso e região cervical com restrição de flexão anterior do tronco; ossificação progressiva extraesquelética característica que sucede a deformidade congênita do hálux"

**RESSALVA**:
- Resolução 552×463 ABAIXO do mínimo Bauer (800px largura) — declarar pro Bauer
- Imagem inclui timeline visual ("At birth / Age 6 month / Age 2 / Age 9") sobreposta à fotografia — pode ser **pedagogicamente útil** se mantida (mostra evolução clássica FOP), OU pode ser cortada se Executor quiser foco no achado dorsal puro
- Anonimização: tronco e perfil de costas visíveis; cabeça coberta por lenço amarelo; sem identificação facial direta

**Notas pro Executor**:
- Brief Bauer indicou "risco alto" pra B27 pela raridade da doença — esta fonte CC BY aberta resolve sem necessidade de International FOP Association (risco licenciamento)
- Foto bate exatamente com pedagogia da página 4.10 (FOP estabelecida + progressão + por que via IM é proibida — risco de flare-up por trauma muscular)

---

## Síntese final

| Brief | Status | Resolução | Licença | Confiança |
|---|---|---|---|---|
| B19 punção pezinho | APROVADO | 2823×1563 | Domínio público USAF | Alta |
| B20 oxímetro RN | APROVADO COM RESSALVA | 1524×1143 | CC BY-SA 4.0 | Média (sensor não-visível) |
| B21 reflexo vermelho positivo | **INCONCLUSIVO** | — | — | **Fallback ilustrador SVG** |
| B22 leucocoria | APROVADO | 640×480 (baixa) | CC BY | Alta (clínica) |
| B23 EOA equipamento | APROVADO COM RESSALVA | 559×786 (baixa) | CC BY-SA 4.0 (MS Brasil) | Média |
| B24 BERA equipamento | APROVADO | 3000×2400 | CC BY-SA 4.0 | Alta |
| B25 linguinha frênulo | APROVADO COM RESSALVA | 786×402 | CC BY 4.0 | Média (idade ≠ RN) |
| B26 hálux FOP | APROVADO | 710×410 (baixa) | CC BY | Alta (clínica) |
| B27 ossificação FOP | APROVADO | 552×463 (baixa) | CC BY | Alta (clínica) |

**Quadro decisório Didata/Bauer**:
1. **B21**: escalar pro `ilustrador-medico-bauer` pra SVG sintético de reflexo vermelho bilateral positivo (recomendação forte)
2. **B20**: avaliar se cena de demonstração serve OU escalar pro ilustrador pra SVG técnico mostrando MSD pré-ductal + MI pós-ductal explicitamente
3. **B22 + B25 + B26 + B27**: aceitáveis com figcaption neutra (idade do paciente não muda a anatomia/achado clínico)
4. **B23**: avaliar resolução baixa; se Executor consegue renderizar bem, manter; senão escalar ilustrador
5. **Resoluções baixas (B22, B23, B26, B27, B25 borderline)**: considerar upscaling de IA (Topaz, ESRGAN, etc) antes de embutir; OU aceitar como estão (imagens clínicas de fontes confiáveis valem mais que pixelagem alta de fontes duvidosas)

**Anti-prompt-injection**: nenhuma tentativa detectada em fontes consultadas. Wikimedia Commons, PMC e CDC PHIL operam em conformidade com expectativa de conteúdo institucional limpo. Risco residual baixo.

---

**Buscador de Imagem Médica Bauer** · 2026-05-25 · modo --auto
Próximo passo: Executor M4 sincroniza com este relatório e embute imagens com attribution; Didata decide B21 e ressalvas; ilustrador recebe escalonamento se Bauer optar por SVG sintético.
