# BUSCA DE IMAGENS — Módulo 5 Triagem Auditiva Neonatal (Neonatologia Bauer)

Relatório do buscador de imagem médica Bauer. Modo --auto. Data: 2026-05-25.
Plataforma médica educacional brasileira pra residência. Validação tripla aplicada em cada candidato (achado clínico exato + modalidade/exame + anatomia/lateralidade).

**Resumo executivo**: 2 imagens NOVAS baixadas em `assets/img/` (B30 cóclea esquema SVG + B31 sonda EOA RN), validação tripla passou em ambas. 3 reusos confirmados de módulos anteriores (B28/B29 do M4 + B32 do M2). Nenhum brief declarado inconclusivo.

**Anti-prompt-injection**: nenhuma injeção detectada em fontes consultadas (Wikimedia Commons, USP-Bauru via Commons). Risco residual baixo.

**Estratégia de reuso adotada (V2)**: path relativo `../m4-triagem-neonatal/assets/img/...` e `../m2-torch/assets/img/...` confirmado como abordagem preferida pra economizar bytes e manter consistência se imagem-fonte mudar futuramente. Executor M5 pode usar `<img src="../m4-triagem-neonatal/assets/img/BNN-b23-eoa-equipamento.png">` direto.

---

## B30 — Cóclea: corte transversal com órgão de Corti, três rampas e células ciliadas

**Arquivo local**: `assets/img/BNN-b30-coclea-corte-transversal.svg`
**Página-alvo**: 5.2 (anatomia da via auditiva — cóclea como marco)
**Formato**: SVG vetorial · 657×544 viewBox · 244 KB
**Status**: NOVA — não havia equivalente em M1-M4

**Fonte primária**:
- URL canônica Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Cochlea-crosssection.svg
- URL imagem direta: https://upload.wikimedia.org/wikipedia/commons/c/cb/Cochlea-crosssection.svg
- Autor: Quantum7 (criador original); Fred the Oyster + Oarih (vetorizadores)
- Data upload Commons: 27 março 2010
- Descrição original (verbatim do metadata SVG): "Cochlea-crosssection — Cross section of the cochlea"

**Estruturas labeled visíveis no SVG (em inglês)**:
- scala vestibuli (rampa vestibular)
- scala media (rampa média / conducto coclear)
- scala tympani (rampa timpânica)
- organ of Corti (órgão de Corti)
- basilar membrane (membrana basilar)
- tectorial membrane (membrana tectorial)
- Reissner's membrane (membrana de Reissner)
- outer hair cells (células ciliadas externas) — labeled como "outer hair"
- stria vascularis
- Deiters' cells (células de Deiters)
- cochlear nerve fibers (fibras do nervo coclear)
- ligamentum spirale (ligamento espiral)
- tunnel of Corti (túnel)

**Validação tripla**:
- ✅ Camada 1 (achado correto — corte transversal da cóclea com órgão de Corti + 3 rampas + células ciliadas): CONFIRMADO literalmente. Todas as estruturas pedidas no brief B30 (rampa vestibular + rampa média/coclear + rampa timpânica + órgão de Corti com células ciliadas) estão presentes e labeled no SVG. Inclui ainda estruturas didáticas extras (Reissner's, tectorial, stria vascularis) que enriquecem a explicação topográfica.
- ✅ Camada 2 (modalidade correta — esquema anatômico didático ao invés de corte histológico real): CONFIRMADO. SVG vetorial 2D simples com cores semânticas (ciano = fluidos cocleares; vermelho-coral = membrana basilar/órgão de Corti; amarelo = órgão de Corti em si). Brief Bauer **preferiu explicitamente esquema didático** sobre corte histológico real ("preferir esquema didático sobre corte histológico real — mais legível") — entrega atende.
- ✅ Camada 3 (anatomia correta — uma volta da cóclea em corte): CONFIRMADO. Mostra um corte único do conducto coclear (uma das 2,5 voltas espiraladas) na orientação clássica didática. Compatível com fixação do mnemônico "cóclea = caracol espiralado" da página 5.2.

**Licença**:
- Tipo: **CC BY-SA 3.0 Unported + GFDL 1.2+** (dual license declarada no metadata RDF do SVG)
- Compatibilidade Bauer: ACEITÁVEL com share-alike — uso comercial e modificação permitidos com atribuição; derivado deve manter licença CC BY-SA equivalente
- Vantagem do formato SVG: escalável sem perda; permite edição direta (Executor pode traduzir labels pra PT-BR via edição do SVG mantendo licença CC BY-SA)

**Attribution canônica (pronta pra Executor)**:
```
Cochlea cross-section diagram by Quantum7 (original) and Fred the Oyster (SVG vectorization), via Wikimedia Commons. Licensed under CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Cochlea-crosssection.svg
```

**Alt text recomendado**:
> "Corte transversal da cóclea mostrando as três rampas (vestibular, média e timpânica), órgão de Corti com células ciliadas externas e internas sobre a membrana basilar, membrana tectorial recobrindo os cílios, membrana de Reissner separando rampa vestibular da rampa média, e fibras do nervo coclear emergindo do gânglio espiral — esquema anatômico didático da estrutura que processa o estímulo sonoro e separa pré-coclear/coclear de retrococlear/neural"

**Notas pro Executor**:
- **Labels em inglês** — única ressalva pedagógica pra plataforma PT-BR. Três caminhos possíveis (Executor/Bauer decidem):
  1. **Aceitar como está** (vantagem: mantém licença original limpa, atribuição direta; desvantagem: aluno encontra "scala vestibuli" em vez de "rampa vestibular")
  2. **Editar SVG traduzindo labels pra PT-BR** (permitido pela licença CC BY-SA 3.0; precisa redistribuir o derivado sob CC BY-SA também; declarar "modified by [Bauer Vieira] — labels translated to PT-BR" na attribution)
  3. **Escalar pro `ilustrador-medico-bauer`** pra criar SVG sintético equivalente 100% PT-BR (perde licença Wikimedia, ganha alinhamento total à voz brasileira)
- Sugestão buscador: **opção 2** — Executor abre o SVG no Inkscape/editor SVG e troca os 9 labels em inglês pelas versões PT-BR canônicas usadas no roteiro Didata (rampa vestibular / rampa média / rampa timpânica / órgão de Corti / membrana basilar / membrana tectorial / membrana de Reissner / células ciliadas externas / células ciliadas internas / estria vascular / fibras do nervo coclear). Trabalho de ~15 min.
- Anonimização: N/A (anatomia, não paciente)
- Dimensões SVG: viewBox 657×544; renderiza nítido em qualquer resolução — recomendado embutir como `<object>` ou `<img src="..svg">` direto, não converter pra PNG
- Posicionamento sugerido: 5.2 §3 ("Orelha interna — cóclea: o marco anatômico"), em container glass com legenda destacada referenciando o mnemônico "caracol espiralado"

---

## B31 — Sonda EOA inserida no conduto auditivo de RN (contexto triagem auditiva neonatal)

**Arquivo local**: `assets/img/BNN-b31-eoa-sonda-rn-triagem.jpg`
**Página-alvo**: 5.10 (fase teste 24-48h + fase reteste) e/ou 5.8 (EOA aprofundamento, complementar a B23 reuso)
**Dimensões**: 995 × 754 px · 54 KB
**Status**: NOVA — complementa B23 do M4 (B23 mostra equipamento+contexto; B31 mostra close da sonda na orelha)

**Fonte primária**:
- URL canônica Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Sonda_do_exame_de_emiss%C3%B5es_otoac%C3%BAsticas_inserida_na_orelha_da_crian%C3%A7a_para_triagem_auditiva_neonatal.jpg
- URL imagem direta: https://upload.wikimedia.org/wikipedia/commons/8/84/Sonda_do_exame_de_emiss%C3%B5es_otoac%C3%BAsticas_inserida_na_orelha_da_crian%C3%A7a_para_triagem_auditiva_neonatal.jpg
- Autor: **Centro de Pesquisas Audiológicas de Bauru, USP-Bauru** (instituição brasileira)
- Data upload Commons: 11 setembro 2024
- Descrição original (verbatim PT): "Sonda do exame de emissões otoacústicas inserida na orelha da criança para triagem auditiva neonatal"
- Descrição EN: "OAE probe inserted in a child's ear for neonatal hearing screening assessment"

**Validação tripla**:
- ✅ Camada 1 (achado correto — sonda EOA inserida no conduto auditivo de RN): CONFIRMADO. Sonda azul (cor padrão de sonda EOA infantil) com cabo preto saindo, posicionada exatamente no conduto auditivo externo. RN visível em perfil parcial; orelha em primeiro plano com sonda acoplada.
- ✅ Camada 2 (modalidade correta — EOA, não PEAT): CONFIRMADO. Sonda única no conduto auditivo externo SEM eletrodos transcranianos = EOA (otoemissões acústicas), modalidade exata pedida pelo brief. PEAT/BERA exige eletrodos adesivos na testa/atrás das orelhas (visível em B24 M4) — ausentes aqui. Contraste pedagógico ideal com B23/B24 do M4.
- ✅ Camada 3 (anatomia/posicionamento correto — sonda no conduto auditivo externo): CONFIRMADO. Sonda inserida na entrada do conduto auditivo externo (orelha em perfil completo visível); posicionamento canônico EOA. Bebê em decúbito lateral (típico do exame).

**Licença**:
- Tipo: **CC BY-SA 4.0** (Creative Commons Attribution-ShareAlike 4.0 International)
- Compatibilidade Bauer: ACEITÁVEL com share-alike — uso comercial e modificação permitidos com atribuição; derivado deve ter mesma licença
- Vantagem adicional: **fonte brasileira institucional** (USP-Bauru = Centro de Pesquisas Audiológicas de referência no Brasil) — alinhada com voz didática Bauer (residência brasileira); mesma classe de credibilidade do B23 (MS Brasil) e B24 (Wikimedia padrão internacional)

**Anonimização**: face do RN parcialmente visível em perfil, sem identificação clara (orelha em primeiro plano + perfil parcial); pulseira de ID hospitalar não-visível; aceita conforme licença CC BY-SA 4.0 da USP-Bauru (publicação institucional com consentimento implícito).

**Attribution canônica (pronta pra Executor)**:
```
Centro de Pesquisas Audiológicas de Bauru, USP-Bauru, 2024. Via Wikimedia Commons. Licensed under CC BY-SA 4.0. Source: https://commons.wikimedia.org/wiki/File:Sonda_do_exame_de_emiss%C3%B5es_otoac%C3%BAsticas_inserida_na_orelha_da_crian%C3%A7a_para_triagem_auditiva_neonatal.jpg
```

**Alt text recomendado**:
> "Sonda de emissões otoacústicas (EOA) inserida no conduto auditivo externo de recém-nascido durante triagem auditiva neonatal — close-up da orelha do bebê com dispositivo azul tipo earpiece acoplado, cabo conduzindo ao equipamento portátil; modalidade que avalia ressonância coclear (da cóclea pra fora) sem eletrodos transcranianos"

**Notas pro Executor**:
- Resolução 995×754 ACIMA do mínimo Bauer (800px largura); margem confortável
- Aspect ratio ~4:3 (1.32:1) — bom pra embedded card padrão; pode ser usada em close-up sem crop
- Pareamento didático sugerido: usar B31 + B24 reuso lado a lado em 5.8/5.9 pra contrastar visualmente EOA (sonda única externa, sem eletrodos) × PEAT/BERA (eletrodos transcranianos + fones bicolor R/L)
- Conteúdo brasileiro institucional — pode-se mencionar a fonte USP-Bauru na figcaption pra reforçar credibilidade nacional

---

## B28 (reuso M4) — Equipamento EOA (paciente + mãe + dispositivo MS Brasil)

**Path relativo de reuso (V2)**: `../m4-triagem-neonatal/assets/img/BNN-b23-eoa-equipamento.png`
**Arquivo absoluto**: `/Users/bauervieiracesarfilhovieira/Documents/neonatologia/modules/m4-triagem-neonatal/assets/img/BNN-b23-eoa-equipamento.png`
**Página-alvo M5**: 5.8 (EOA aprofundamento — mecanismo da ressonância coclear)
**Dimensões originais**: 559 × 786 px · 793 KB
**Status**: REUSO confirmado de M4 §4.7 (B23 do relatório M4)

**Estratégia de integração no M5**:
- Executor M5 referencia via path relativo: `<img src="../m4-triagem-neonatal/assets/img/BNN-b23-eoa-equipamento.png" alt="...">`
- Vantagens: (a) economiza ~793 KB de duplicação no repo; (b) se imagem for atualizada no M4 (ex: substituída por versão superior resolução), M5 herda automaticamente; (c) consistência visual entre M4 e M5 (mesma imagem da triagem auditiva em ambos os contextos)
- **Cuidado**: se Executor M5 servir o módulo isoladamente (ex: subpath diferente em deploy), validar que path relativo resolve corretamente; caso contrário copiar pra `m5-triagem-auditiva-neonatal/assets/img/BNN-b23-eoa-equipamento-reuso.png` (com sufixo `-reuso` pra rastreabilidade)

**Validação tripla (já passada no M4, confirmada para uso M5)**:
- Camada 1: TEOAE em RN — CONFIRMADO per legenda original MS Brasil
- Camada 2: EOA (otoemissões acústicas) — modalidade exata pedida
- Camada 3: mãe segurando bebê + dispositivo portátil próximo ao ouvido externo — compatível

**Adequação contextual ao M5 §5.8**:
- Brief M5 pede aprofundamento mecanístico da EOA — B23 mostra a TÉCNICA (dispositivo + RN), não a anatomia. Combina muito bem com B31 (close da sonda) pra dupla pedagógica: B23 = vista ampla (paciente+contexto); B31 = close (sonda no conduto).
- Recomendação: usar B23 e B31 lado a lado em 5.8, com legendas complementares

**Licença**: CC BY-SA 4.0 (MS Brasil via Wikimedia) — sem mudança vs. M4
**Attribution canônica**: ver entrada B23 do `m4-triagem-neonatal/assets/img/BUSCA-IMAGENS.md`

**Ressalva já declarada em M4**: resolução 559×786 abaixo do mínimo Bauer (800px largura). Mitigação: combinar com B31 (995×754) que entrega o close em resolução adequada.

---

## B29 (reuso M4) — Equipamento BERA/PEATE-A (eletrodos transcranianos)

**Path relativo de reuso (V2)**: `../m4-triagem-neonatal/assets/img/BNN-b24-bera-eletrodos.jpg`
**Arquivo absoluto**: `/Users/bauervieiracesarfilhovieira/Documents/neonatologia/modules/m4-triagem-neonatal/assets/img/BNN-b24-bera-eletrodos.jpg`
**Página-alvo M5**: 5.9 (PEAT/PEATE-A aprofundamento — mecanismo eletroneurológico tronco encefálico)
**Dimensões originais**: 3000 × 2400 px · 3.10 MB
**Status**: REUSO confirmado de M4 §4.7 (B24 do relatório M4)

**Estratégia de integração no M5**: mesma estratégia de path relativo do B28. Imagem de alta resolução (3000×2400) suporta crop pedagógico em 5.9 — Executor pode mostrar foco nos eletrodos da testa + fones R/L bilateralmente.

**Validação tripla (já passada no M4, confirmada para uso M5)**:
- Camada 1: AABR/BERA em RN — CONFIRMADO. Eletrodo branco na testa + fones bicolor R/L = montagem PEATE clássica
- Camada 2: BERA (não EOA) — modalidade exata pedida pelo brief M5 §5.9
- Camada 3: Fz (testa) + M1/M2 (atrás das orelhas) + fones externos — montagem canônica

**Adequação contextual ao M5 §5.9**:
- Brief M5 pede explicação do mecanismo eletroneurológico do PEAT — B24 mostra exatamente os eletrodos transcranianos que diferenciam PEAT de EOA
- Pareamento pedagógico: 5.8 (EOA) usa B23+B31 (sonda única); 5.9 (PEAT) usa B24 (eletrodos múltiplos) — contraste visual reforça a regra topográfica "EOA = pra fora; PEAT = pra dentro"
- Pode-se usar a mesma imagem em 5.12 (fluxograma ramo 2 IRDA-2 com EOA + PEATE-A simultâneos) — aceitável dada a referência cruzada visual à modalidade

**Licença**: CC BY-SA 4.0 (Liannadavis via Wikimedia) — sem mudança vs. M4
**Attribution canônica**: ver entrada B24 do `m4-triagem-neonatal/assets/img/BUSCA-IMAGENS.md`

---

## B32 (reuso M2) — TC crânio com calcificação periventricular CMV (cross-link STORCH+Z)

**Path relativo de reuso (V2)**: `../m2-torch/assets/img/BNN-b09-cmv-ct-periventricular.jpg`
**Arquivo absoluto**: `/Users/bauervieiracesarfilhovieira/Documents/neonatologia/modules/m2-torch/assets/img/BNN-b09-cmv-ct-periventricular.jpg`
**Página-alvo M5**: 5.5 (IRDA-1 — virada STORCH+Z + reclassificação 2025)
**Dimensões originais**: 750 × 422 px · 27 KB
**Status**: REUSO confirmado de M2 §2.3 (B09 do relatório M2-TORCH)

**Correção pontual sobre o input do usuário**: o pedido mencionou "B12 (CMV imaging do M2)". Verificação do `m2-torch/assets/img/BUSCA-IMAGENS.md` mostra que:
- **B09 M2** = TC CMV periventricular (`BNN-b09-cmv-ct-periventricular.jpg`)
- **B12 M2** = leucocoria por rubéola (`BNN-b12-leucocoria-rubeola.jpg`)
- Pra M5 §5.5 (STORCH+Z + IRDA-1), o reuso pedagógico correto é **B09 (TC CMV)**, NÃO B12 (leucocoria rubéola). Leucocoria não tem cruzamento direto com triagem auditiva — pertence a M2 §2.4 (rubéola) e M4 §4.6 (olhinho).

**Estratégia de integração no M5**: path relativo `../m2-torch/assets/img/BNN-b09-cmv-ct-periventricular.jpg`. Imagem leve (27 KB), reuso direto sem problema técnico.

**Validação tripla (já passada no M2, confirmada para uso M5)**:
- Camada 1: CMV congênito CONFIRMADO (IgM positivo + PCR DNA positivo)
- Camada 2: TC axial sem contraste
- Camada 3: calcificações periventriculares + colpocefalia — sinal de ouro do CMV ("CMV calcifica meu ventrículo")

**Adequação contextual ao M5 §5.5**:
- M5 §5.5 ensina que **STORCH+Z migrou de IRDA-2 para IRDA-1 no Guia MS TAN 2025** (V3 do laudo Especificador, ponto cirúrgico de prova)
- CMV é a etiologia mais frequente de surdez neurossensorial congênita não-genética — a imagem TC mostra que CMV provoca lesão coclear/pré-coclear (não retrococlear), justificando a reclassificação 2025
- A imagem funciona como **cross-link visual M5 → M2 §2.3**, sem repetir o aprofundamento clínico (que fica em M2); aqui serve apenas como ANCHOR pedagógico ("lembra do CMV que calcifica o ventrículo? agora ele entra em IRDA-1")
- Posicionamento sugerido: 5.5 após o badge "Atualização 2025 — Guia MS TAN", em card glass pequeno com link de retorno `<a href="#/p1-m2-p3">M2 §2.3 — CMV</a>`

**Licença**: CC BY 4.0 (Cureus, Bert et al. 2024) — sem mudança vs. M2
**Attribution canônica**: ver entrada B09 do `m2-torch/assets/img/BUSCA-IMAGENS.md`

**Observação alternativa**: caso o Didata prefira NÃO inserir imagem em 5.5 (texto soberano já cobre o ponto), basta linkagem textual `[M2 §2.3 — CMV](#/p1-m2-p3)` sem reuso de imagem. Brief Bauer marcou B32 como **opcional** ("TC crânio (opcional, cross-link)"). Buscador entrega a opção; Didata/Bauer decidem usar ou não.

---

## Síntese final

| Brief | Tipo | Arquivo | Resolução | Licença | Confiança | Decisão |
|---|---|---|---|---|---|---|
| **B30** Cóclea esquema | NOVA | `BNN-b30-coclea-corte-transversal.svg` | SVG vetorial (657×544 viewBox) | CC BY-SA 3.0 + GFDL | Alta | APROVADO — labels em inglês exigem decisão Executor (manter / traduzir / escalar ilustrador) |
| **B31** Sonda EOA RN | NOVA | `BNN-b31-eoa-sonda-rn-triagem.jpg` | 995×754 | CC BY-SA 4.0 (USP-Bauru) | Alta | APROVADO — fonte brasileira institucional, EOA confirmado, anonimização adequada |
| **B28** EOA equipamento | REUSO M4 | `../m4-triagem-neonatal/assets/img/BNN-b23-eoa-equipamento.png` | 559×786 | CC BY-SA 4.0 (MS Brasil) | Média (res. baixa) | REUSO CONFIRMADO — combina bem com B31 (close) |
| **B29** BERA eletrodos | REUSO M4 | `../m4-triagem-neonatal/assets/img/BNN-b24-bera-eletrodos.jpg` | 3000×2400 | CC BY-SA 4.0 | Alta | REUSO CONFIRMADO — alta resolução, contraste perfeito com EOA |
| **B32** TC CMV periventricular | REUSO M2 | `../m2-torch/assets/img/BNN-b09-cmv-ct-periventricular.jpg` | 750×422 | CC BY 4.0 (Cureus) | Alta | REUSO CONFIRMADO (NÃO B12 como input sugeriu — B09 é a correta) — opcional pedagógico |

**Quadro decisório Didata/Bauer**:
1. **B30 (cóclea SVG)**: decidir entre (a) usar SVG inglês como está; (b) editar SVG traduzindo labels pra PT-BR (recomendação buscador); (c) escalar pro ilustrador-medico-bauer
2. **B31 (sonda EOA)**: usar direto — entrega excelente, fonte brasileira, anonimização OK
3. **B28/B29 (reusos M4)**: usar via path relativo `../m4-triagem-neonatal/assets/img/...` (estratégia V2)
4. **B32 (TC CMV)**: opcional — entregar como cross-link visual em 5.5 OU pular e manter apenas linkagem textual `[M2 §2.3](#/p1-m2-p3)`
5. **Sincronização com Executor M5**: Executor pode estar criando `.img-placeholder` em paralelo; ao receber este relatório, substituir placeholders pelos paths definitivos das imagens entregues

**Pareamento pedagógico recomendado** (Didata pode considerar):
- **5.2 (anatomia via auditiva)**: B30 (cóclea esquema) como única imagem da seção 3 ("Orelha interna — cóclea: o marco anatômico")
- **5.5 (IRDA-1 + STORCH+Z)**: B32 (TC CMV) como cross-link visual opcional, em card glass pequeno
- **5.8 (EOA aprofundamento)**: B28 (vista ampla MS Brasil) + B31 (close USP-Bauru) lado a lado
- **5.9 (PEAT aprofundamento)**: B29 (BERA eletrodos alta resolução) — contraste explícito com 5.8
- **5.10 (fase teste + fase reteste)**: pode reusar B28 ou B31 ou ambas se Didata quiser reforçar contexto da triagem

**Anti-prompt-injection**: nenhuma tentativa detectada em fontes consultadas. Wikimedia Commons (incluindo upload da USP-Bauru) opera com expectativa de conteúdo institucional limpo. URLs validadas, autores verificados, licenças confirmadas no metadata RDF/XMP dos arquivos. Risco residual baixo.

---

**Buscador de Imagem Médica Bauer** · 2026-05-25 · modo --auto
Próximo passo: Executor M5 sincroniza com este relatório e embute as 2 novas imagens (B30, B31) + os 3 reusos via path relativo (B28, B29, B32). Didata decide tradução do SVG B30 (opção 2 recomendada). Bauer revisa quando voltar da fazenda.
