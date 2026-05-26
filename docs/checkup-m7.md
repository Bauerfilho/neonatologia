# Checkup M7 — pré-Executor (read-only)

**Data**: 2026-05-25
**Validador**: validador-pipeline-bauer
**Modo**: read-only, sem invocação de outros agents
**Artefatos auditados**:
- `prompts-finais/prompt-final-aula7.md` (1836 linhas, 196.7 KB)
- `roteiros/roteiro-aula7.md` (560 linhas; 204 IDs)
- `laudos/laudo-aula7.md` (287 linhas; 14 VFP)
- `modules/m7-ttrn-sam-hppn/assets/img/` (8 imagens + `BUSCA-IMAGENS.md`)

---

## Resumo executivo

**Pode invocar Executor? SIM-COM-RESSALVAS.**

O prompt-final está coerente e completo no eixo conteúdo + estrutura + cobertura + anti-metalinguagem + drift. Não há sinal técnico de saturação de contexto (sem truncamento, sem repetição anômala, sem páginas vazias, sem inconsistência factual interna). A única ressalva relevante é cosmética-funcional: o `§20.1` declara paths de imagem com nomes que NÃO coincidem com os arquivos efetivamente em disco. Executor precisa do mapeamento canônico pra renderizar `<img src>` apontando corretamente; sem isso, vai gerar 404 em 5-8 referências visuais.

Severidade máxima: 🟠 Alto (mapeamento de paths, corrigível pré-Executor por nota de bridge ou re-nomenclatura, não bloqueia escrita do HTML mas bloqueia renderização visual).

---

## Achados por severidade

### 🔴 Crítico (bloqueia Executor)

Nenhum.

### 🟠 Alto (corrigir antes do Executor)

1. **Mismatch de nomenclatura de arquivos de imagem entre §20.1 do prompt-final e disco real.** O prompt-final §20.1 declara estrutura esperada com paths como `rx-ttrn-cisurite.webp`, `foto-hood-neonatal.webp`, `liquido-amniotico-meconial.webp`, `rn-banhado-meconio.webp`, `rx-sam-grosseiro.webp`, `rx-sam-pneumotorax.webp`, `ventilador-ino-neonatal.webp`. Disco tem `BNN-b45-rx-ttrn-svg.svg`, `BNN-hood-oxihood-illustration.png`, `BNN-meconio-passagem-fralda.jpg`, `BNN-rx-sam-grosseiro-hellerhoff.jpg`, `BNN-rx-pneumotorax-neonato-hellerhoff.jpg`, `BNN-b47-liquido-amniotico-meconial-svg.svg`, `BNN-b48-rn-banhado-meconio-svg.svg`, `BNN-b50-ino-setup-svg.svg`. Executor implementaria `<img src="../assets/img/rx-ttrn-cisurite.webp">` que retorna 404. **Caminho de mitigação sugerido**: ou o Orquestrador injeta nota de mapping no envelope do Executor (preferível, READ-ONLY-friendly), ou o Bauer aprova renomeação dos arquivos. O arquivo `BUSCA-IMAGENS.md` já documenta o mapeamento V→arquivo real e pode servir como source of truth.

2. **V58 (detalhe-unha-coto-meconio) sem arquivo em disco.** O brief §7.8 declara V58 como `**BUSCA OBRIGATÓRIA**`, mas `BUSCA-IMAGENS.md` registra INCONCLUSIVO + escalonamento pendente pro `ilustrador-medico-bauer`. Sem o asset, página 7.8 renderiza com placeholder. Recomendação: Orquestrador invoca `ilustrador-medico-bauer` antes do Executor, OU Executor renderiza com `<figure>` vazio + nota técnica `TODO V58` (anti-padrão Bauer — visual ausente em página = 🔴 quando publicado, 🟠 quando intermediário).

### 🟡 Médio (Executor pode prosseguir, anotar)

3. **Página 7.13 tem 560 linhas** (vs faixa 71-130 das outras). Inspeção interna: justificado pelo escopo (resolução do caso + tabela síntese 5 doenças cross-M6+M7 + V65 + V66 + 3 quiz integrador + gancho M8 + cross-link M6 §6.2). Não há duplicação textual flagrante. Nota: a página tende a virar HTML pesado; Executor deve aplicar `loading="lazy"` em V65/V66 e considerar split em colapsáveis se a renderização ultrapassar viewport razoável.

4. **Inconsistência leve "parte 2 de 3" vs "parte 2 de 2".** Linha 2 declara "(parte 2 de 3)"; linha 1793 cogita revisão pra "parte 2 de 3" com observação histórica. Auto-coerência interna está OK (Didata explicita o motivo), mas Bauer pode querer normalizar antes do release do hub V2.

5. **`BNN-meconio-passagem-fralda.jpg` é PROXY sub-ótimo** (declarado em `BUSCA-IMAGENS.md`). Decisão final sobre publicar como V56 ou aguardar busca melhor cabe ao Bauer. Executor pode renderizar com `<figcaption>` declarando "proxy didático — mecônio em fralda" + caveat textual sem comprometer didática.

### 🟢 OK

6. **Estrutura macro**: 13 páginas declaradas explicitamente, todas com 4 campos obrigatórios (`Texto principal`, `Quiz final`, `Checagem Bauer`, `Conexão com a próxima página` — 13× cada via `grep`). Mín 2 canônicos por página (cross-links + brief visual + objetivo pedagógico + tipo de raciocínio). Adaptativos presentes onde conteúdo pede (`Imagem real OBRIGATÓRIA`, `Tabela contraste`, `Caso paradigmático`, `Componente reusável`, `Pegadinha de prova`).

7. **Anti-monotonia E1-E8**: Distribuição declarada (E1=3, E2=1, E3=2, E4=2, E5=1, E7=1, E8=3), máximo 3 ≤ ⌈13/3⌉=5. Zero consecutivas. PASSOU.

8. **Quiz universal**: 13/13 páginas têm Q1 (e maioria Q2+Q3). PASSOU.

9. **Cobertura 100% IDs**: 204 IDs distintos do roteiro = 204 IDs distintos no prompt-final. Diff zero. Sample 30/30 PASS.

10. **VFP 14/14**: laudo declarou 14 CONFIRMADO (11 puro + 3 nota didática D01); todos endossados na §3 do prompt-final.

11. **Texto soberano (Checagem Bauer)**: 13/13 páginas com `APROVADA` ou `APROVADA com expansão` declarados explicitamente. Duas expansões registradas (7.4 +2 parágrafos sobre RX descritiva textual; 7.11 +3 parágrafos sobre recap circulação fetal).

12. **Cross-references M1/M3/M4/M5/M6**: 81 menções/cross-links a M6 (denso e proporcional ao dossiê A7); cross-links bidirecionais funcionais declarados em `#/p2-m6-pK` namespace; reversos em outras aulas listados na §20.4 pra aplicação em sessão única do Executor.

13. **Gancho M8 sem vazamento**: 15 menções a M8 distribuídas entre §1 (header, sucessão), §4 (mapa fechamento [200]-[204]), distractor de quiz 7.8 Q3 (icterícia precoce como anti-padrão de impregnação meconial — uso didático válido, 1 linha), página 7.13 §"Gancho M8 — icterícia neonatal" (frase curta sem catequese: "Outro bebezinho, outra doença, outro raciocínio diferencial."), §20.5 placeholder hub. Conteúdo M8 (zonas de Kramer, Coombs, fototerapia, kernicterus) **citado apenas como expectativa**, sem desenvolvimento.

---

## Cobertura prompt-final vs roteiro (sample 30 IDs)

| ID | Categoria roteiro | Presente no prompt-final |
|----|-------------------|--------------------------|
| [001] | abertura/continuidade M6 | ✅ §7.1 |
| [008] | caso João | ✅ §7.1 |
| [015] | caso João | ✅ §7.1 |
| [023] | caso João | ✅ §7.1 |
| [027] | TTRN fisiopato | ✅ §7.2 |
| [032] | TTRN fisiopato | ✅ §7.2 |
| [041] | TTRN fatores risco | ✅ §7.3 |
| [048] | TTRN fatores risco | ✅ §7.3 |
| [055] | TTRN clínica/RX | ✅ §7.4 |
| [062] | TTRN RX | ✅ §7.4 |
| [070] | TTRN RX | ✅ §7.4 |
| [077] | TTRN tratamento | ✅ §7.6 |
| [084] | TTRN 4 NÃO | ✅ §7.6 |
| [091] | TTRN profilaxia | ✅ §7.6 |
| [098] | SAM caso João | ✅ §7.7 |
| [105] | SAM fisiopato | ✅ §7.7 |
| [112] | SAM mecanismo | ✅ §7.7 |
| [119] | SAM perfil clínico | ✅ §7.8 |
| [126] | SAM impregnação | ✅ §7.8 |
| [133] | SAM perfil | ✅ §7.8 |
| [140] | SAM RX grosseiro | ✅ §7.9 |
| [147] | SAM RX/escape ar | ✅ §7.9 |
| [154] | SAM surfactante | ✅ §7.10 |
| [161] | SAM complicações | ✅ §7.9 |
| [168] | HPPN fisiopato | ✅ §7.11 |
| [175] | HPPN diagnóstico | ✅ §7.11 |
| [182] | HPPN iNO | ✅ §7.11 |
| [189] | HPPN escalada | ✅ §7.11 |
| [196] | resolução caso João | ✅ §7.13 |
| [203] | bordão fechamento | ✅ §7.13 |

**Sample 30/30 PASS.** Diff exhaustivo `comm -23 ids_roteiro ids_prompt`: vazio. Cobertura 204/204 = 100%.

---

## Briefs vs imagens em disco

### Mapping declarado pelo prompt-final §20.1 vs realidade do disco

| Brief | §20.1 declara | Disco real | Match |
|-------|---------------|-------------|-------|
| V50 (esquema autoral) | `inversao-epitelial.svg` | NÃO existe | ❌ pendente ilustrador (autoral) |
| V52 (RX TTRN) | `rx-ttrn-cisurite.webp` | `BNN-b45-rx-ttrn-svg.svg` (SVG autoral substituto pós-busca inconclusiva) | ⚠️ nome + extensão diferem |
| V53 (mecanismo valvular) | `mecanismo-valvular.svg` | NÃO existe | ❌ pendente ilustrador (autoral) |
| V54 (Hood) | `foto-hood-neonatal.webp` | `BNN-hood-oxihood-illustration.png` (ilustração, não foto) | ⚠️ nome + extensão diferem |
| V55 (3 mecanismos SAM) | `3-mecanismos-sam.svg` | NÃO existe | ❌ pendente ilustrador (autoral) |
| V56 (líquido amniótico meconial) | `liquido-amniotico-meconial.webp` | `BNN-b47-liquido-amniotico-meconial-svg.svg` + `BNN-meconio-passagem-fralda.jpg` (proxy) | ⚠️ nome + extensão diferem |
| V57 (RN banhado mecônio) | `rn-banhado-meconio.webp` | `BNN-b48-rn-banhado-meconio-svg.svg` | ⚠️ nome + extensão diferem |
| V58 (detalhe unha/coto) | `detalhe-unha-coto-meconio.webp` | **NÃO existe em disco; pendente ilustrador** | 🟠 alto: visual ausente em 7.8 se Executor rodar agora |
| V59 (RX SAM) | `rx-sam-grosseiro.webp` | `BNN-rx-sam-grosseiro-hellerhoff.jpg` | ⚠️ nome + extensão diferem |
| V60 (RX pneumotórax) | `rx-sam-pneumotorax.webp` | `BNN-rx-pneumotorax-neonato-hellerhoff.jpg` | ⚠️ nome + extensão diferem |
| V62 (shunt HPPN) | `shunt-hppn.svg` | NÃO existe (autoral, defs compartilhado M4) | ❌ pendente ilustrador (autoral) |
| V63 (iNO setup) | `ventilador-ino-neonatal.webp` | `BNN-b50-ino-setup-svg.svg` | ⚠️ nome + extensão diferem |

### Conclusão briefs vs disco

- **6 arquivos disponíveis em disco com nomenclatura BNN-* não declarada no §20.1** (mismatch nome): V52, V54, V56, V57, V59, V60, V63.
- **1 brief sem arquivo nem fallback** (V58) — pendente ilustrador.
- **4 briefs SVG autoral declarados** (V50, V53, V55, V62) — todos pendentes ilustrador.

Source of truth canônico do mapping V→arquivo está em `BUSCA-IMAGENS.md`. Recomendação: Orquestrador injeta esse mapping como nota de bridge no envelope do Executor, ou Bauer autoriza renomear arquivos pra alinhar com §20.1, ou Didata atualiza §20.1 pós-busca (Didata fora de cena agora).

---

## Anti-metalinguagem grep

Termos auditados (lista da tarefa + lista canônica do prompt-final §2.3 v1.2 expandida):

| Termo | Hits | Localização | Veredito |
|-------|------|-------------|----------|
| `canon MED` | 0 | — | ✅ |
| `prova MED` | 0 | — | ✅ |
| `(item [NNN] do roteiro)` literal | 0 | — | ✅ |
| `do roteiro` | 9 | linhas 15, 21, 53, 81, 101, 119, 123, 164, 168, 216 — todas em metadados estruturais (§1 missão, §2 contrato, §4 mapa de extração, §5 índice, §6 intro, label `**Itens do roteiro preservados**`) | ✅ (metadados, não corpo) |
| `Ao fim da página o aluno` | 0 | — | ✅ |
| `módulo anterior` | 0 | — | ✅ |
| `Vamos fechar` | 0 | — | ✅ |
| `professor` | 2 | linha 13 (§1 MISSÃO: "voz autoral: professora MED"); linha 23 (§2 contrato listando o termo proibido) | ✅ (metadado, autorreferência ao próprio contrato) |
| `MedCurso` | 1 | linha 23 (§2 contrato listando o termo proibido) | ✅ (autorreferência) |
| ` MED ` literal | múltiplos hits | §1.13 ("professora MED"), §1.15 ("Aula MED A7"), tabela §1.18.M01-M08 ("Bordão MED canônico"/"Aula MED"), §20.7 (gates), §3 (laudo) | ✅ (todos em metadados — origem de fonte, missão, gates; corpo das páginas limpo) |

**Conclusão**: zero hits no **corpo das páginas 7.1-7.13**. Todos os hits restantes estão em metadados estruturais (§1 missão, §2 contrato auto-referencial, §3 PVE laudo, §4 mapa, §5 índice, §20 instrução pro Executor, tabelas de origem/fonte). Esses metadados não são renderizados como corpo no HTML — são instruções pro Executor + atribuição de origem. Conforme a exceção controlada do Bauer (1 linha de origem em rodapé permitida na primeira página) + uso técnico em headers/origem, **anti-metalinguagem PASSOU**.

Recomendação ai-writing-auditor invocação completa: opcional pré-release, não bloqueante agora. Pode ser executada pelo Orquestrador após Executor renderizar HTML (mais útil aplicar P0-P2 no texto renderizado do que no prompt-final, onde 90% do conteúdo é metadado pro Executor).

---

## Drifts de contexto saturado detectados

### M6 ↔ M7 (esperado: referência de contraste, NÃO vazamento integral)

| Termo | Hits | Verdict |
|-------|------|---------|
| `Firmindo` (caso M6) | 5 | ✅ Todos como referência de contraste (cross-link M6, vinheta lateral comparativa, tabela diferencial). Nenhum desenvolve caso Firmindo. |
| `SDR` | 76 | ✅ Esperado denso — TTRN é diagnóstico diferencial natural da SDR; M7 §7.3 declara contraste explícito + tabela contraste TTRN×SDR; §7.12 painel comparativo 4 RX. Cross-links sempre apontam pra M6 §6.3-6.6 onde a SDR é canon. M7 não desenvolve SDR. |
| `membrana hialina` | 1 | ✅ §7.12 nomenclatura sinônima na tabela síntese; sem desenvolvimento. |
| `GBS` / `estreptococo` | 3 | ✅ Linha 15 (header), 596 (§7.6 ATB pegadinha + cross-link M6 §6.11), 1300 (§7.13 raciocínio differencial caso João). Sem desenvolvimento de protocolo GBS — sempre cross-link pra M6. |
| `sepse` | 21 | ✅ Esperado — diagnóstico diferencial canônico no caso João + tabela síntese §7.13. Sempre referenciado como ddx, nunca desenvolvido em fluxograma próprio. M6 §6.9-6.10 é canon. |

**Verdict M6 drift**: zero vazamento integral. M6 está corretamente como cross-link/referência, não como conteúdo duplicado.

### M7 → M8 (esperado: gancho final, NÃO vazamento integral)

| Termo | Hits | Verdict |
|-------|------|---------|
| `icterícia` / `icteric` | 7 | ✅ Header (§1.15), §4 fechamento ([200]-[204]), distractor quiz 7.8 Q3 (uso didático anti-padrão), §7.13 conexão final (1 linha), §7.13 "Gancho M8 — icterícia neonatal" (frase curta com expectativa: "zonas de Kramer + Coombs + fototerapia + exsanguineotransfusão + kernicterus + ABO/Rh"), §20.5 placeholder hub, conexão final. |
| `bilirrubin*` | 1 | ✅ §7.8 Q3 justificativa de distractor (1 linha indicando que icterícia ≠ impregnação meconial). |

**Verdict M8 drift**: gancho proporcional, sem vazamento. Conteúdo M8 nominado apenas como expectativa em frase curta ("zonas de Kramer + Coombs + fototerapia + exsanguineotransfusão + kernicterus + ABO/Rh") — não desenvolvido. Cumpre regra Bauer de gancho narrativo sem catequese.

### Páginas com tamanho anômalo

| Página | Linhas | Veredito |
|--------|--------|----------|
| 7.1-7.12 | 71-130 | ✅ Faixa normal |
| 7.13 | 560 | 🟡 Anômalo numericamente, mas **justificado por escopo**: resolução do caso paradigmático + tabela síntese 5 doenças cross-M6+M7 + V65 + V66 + 3 quiz integrador cross-tema + gancho M8 + cross-link M6 §6.2. Cobertura legítima de 13 IDs ([192]-[204]). Sem repetição textual; sem inflação artificial. Nota pro Executor: aplicar `loading="lazy"` em V65/V66 + considerar split em colapsáveis se viewport ficar pesado. |

### Repetição de blocos

| Termo persistente | Hits | Verdict |
|-------------------|------|---------|
| `João da Elvira Maria` | 40 | ✅ Matronymico OBRIGATÓRIO (regra anti-confusão com João Eucalipto §2.4) — frequência alta esperada e validada. |
| `mecanismo valvular` | 32 | ✅ Conceito reusado deliberadamente entre 7.5 (TTRN) e 7.7 (SAM) — refinamento didático declarado §1.85 (mecanismo valvular ganha página própria em 7.5 pra ser reusado em 7.7). |
| `FR 80` | 6 | ✅ Vinheta clínica do caso João — repetida em 7.1 (abertura), 7.13 (resolução), tabela contraste. Proporcional ao caso paradigmático. |

Nenhuma repetição flagrante de bloco textual idêntico detectada.

### Inconsistência factual interna

Nenhuma. Spec internamente coerente. Caso João da Elvira Maria descrito de forma idêntica em 7.1 e 7.13. Datas + fontes (PRN 2022, FEBRASGO, Cochrane, Tratado SBP 6ª ed. 2024) consistentes.

### Versão "parte 2 de X"

Linha 2 do prompt-final: `(parte 2 de 3)`. Linha 1793 §20.5: cogita "parte 2 de 3 se Bauer confirmar pipeline M6→M7→M8". Self-aware, mas Bauer pode querer normalizar antes do hub V2.

---

## Cross-references M6/M8

### Cross-references M6 (esperado: denso, retroativo + lateral)

81 menções a M6 distribuídas em:
- Cross-links bidirecionais funcionais (`#/p2-m6-pK`) declarados em 7.1 (roteiro 3 perguntas M6 §6.2), 7.3 (SDR contraste M6 §6.3-6.6), 7.6 (CPAP M6 §6.6), 7.8 (sepse M6 §6.10), 7.11 (cross-link M4), 7.12 (cross-reuso visual RX M6 §6.5), 7.13 (síntese aplicada M6 §6.2)
- Tabela contraste TTRN×SDR em 7.3 + 7.13
- Painel comparativo 4 RX em 7.12 reusa M6 §6.5 RX SDR + RX normal (cross-reuso visual cross-module — primeiro precedente positivo S37 da plataforma)
- Atualizações retroativas listadas em §20.4 pra aplicação em sessão única do Executor (M6 §6.2 + §6.5 ganham reversos)

**Verdict cross-ref M6**: PASS denso. Gancho M6→M7 explícito em 7.1 ("aplicar o roteiro M6 §6.2 ao caso João"); gancho M7→M6 (cross-reuso visual + cross-link) explícito em 7.12 + 7.13.

### Cross-references M8 (esperado: gancho terminal, sem vazamento)

15 menções a M8 distribuídas em:
- Header §1.15 (sucessão)
- §4 mapa de extração [200]-[204] (fechamento + gancho)
- §5 índice (página 7.13 declarada como `GANCHO-M8`)
- §7.8 Q3 distractor (1 linha: icterícia precoce ≠ impregnação meconial)
- §7.12 conexão com a próxima página
- §7.13 "Gancho M8 — icterícia neonatal" (1 frase curta com expectativa de conteúdo nominal)
- §7.13 Quiz Q3 justificativa
- §7.13 conexão final ("Próxima: icterícia neonatal — bebê amarelo. M8.")
- §18 checklist Bloco 29
- §20.5 placeholder hub
- §20.7 gates

**Verdict cross-ref M8**: PASS proporcional. Gancho M7→M8 confirmado via roteiro linha 503 ([202] [GANCHO-AULA] [CROSS-LINK-M6] "E bora começar a falar daquele bebezinho que está ictérico"). Conteúdo M8 não vazado.

---

## Recomendação final

**Pode invocar Executor: SIM-COM-RESSALVAS.**

Ressalvas a resolver com Orquestrador antes de despachar Executor:

1. **🟠 Mapping de paths de imagem (BLOCKER renderização)**: Orquestrador deve incluir no envelope do Executor uma tabela de bridge `V → arquivo real em disco` derivada de `BUSCA-IMAGENS.md`. Sem isso, Executor escreve `<img src="rx-ttrn-cisurite.webp">` que retorna 404 em 5-8 referências visuais. Alternativa: Bauer autoriza renomeação dos 8 arquivos `BNN-*` pros nomes declarados no §20.1 (mais invasivo, exige re-attribution).

2. **🟠 V58 ausente**: Página 7.8 (detalhe unha/coto mecônio) — escalonamento pendente pro `ilustrador-medico-bauer`. Orquestrador decide: (a) invocar ilustrador antes do Executor; (b) Executor renderiza com placeholder + TODO V58 declarado; (c) Bauer aceita publicar 7.8 sem V58 com nota textual (anti-padrão Bauer — visual ausente — mas conteúdo textual em 7.8 já tem checagem Bauer aprovada como soberano).

3. **🟡 Coerência "parte 2 de 3" vs "parte 2 de 2"**: Bauer normaliza antes do hub V2 update.

4. **🟡 V56 proxy sub-ótimo** (`BNN-meconio-passagem-fralda.jpg`): Decisão final cabe ao Bauer. Executor pode renderizar com `<figcaption>` declarando "proxy didático" sem comprometer conteúdo, OU aguardar imagem melhor.

5. **🟢 Anti-metalinguagem corpo das páginas**: limpa. Auditor ai-writing-auditor opcional pré-release; mais útil aplicar P0-P2 no HTML renderizado do que no prompt-final.

Não há defeito de saturação de contexto detectável. Estrutura, cobertura, drift, anti-meta, cross-refs PASS. Os achados 🟠 são de bridge/asset, não de conteúdo do prompt-final em si.

**Sugestão de caminho mínimo viável pra desbloquear Executor**: Orquestrador injeta `MAPPING-IMAGENS.md` derivado de `BUSCA-IMAGENS.md` + Executor é instruído a usar paths reais em disco (`assets/img/BNN-*`) e marcar V58 como `TODO` em comentário HTML. V50/V53/V55/V62 (SVG autorais) são parte do escopo Executor (inline SVG) — não dependem de arquivo prévio em disco.

— validador-pipeline-bauer, 2026-05-25
