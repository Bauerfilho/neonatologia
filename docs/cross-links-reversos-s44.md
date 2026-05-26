# Cross-links reversos S44 — M3/M4/M5/M6 → M7/M8/M9/M10/M12

Aplicação cirúrgica da pendência S44+ declarada nas EXECUCAO.md de M7, M8, M9 e M10. Cross-links reversos (forward já existentes em direção contrária) inseridos nos pontos pedagogicamente naturais dos módulos antigos (M3/M4/M5/M6) apontando pros módulos novos (M7/M8/M9/M10/M12).

Conteúdo pedagógico **NÃO alterado**. Apenas inseridos blocos `<aside class="cross-link">` em pontos canônicos pré-existentes (ao lado de op-summary, gap-notice, board-wants ou logo após o parágrafo conceitual relacionado).

---

## Resumo executivo

- **11 cross-links reversos adicionados** em 4 módulos antigos (M3/M4/M5/M6)
- **6 módulos novos cobertos** como destino (M7/M8/M9/M10/M12); M11 confirmado sem necessidade de cross-link reverso (escopo cervical isolado)
- **3 cross-links pulados** com justificativa documentada
- **2 arquivos CSS** atualizados (M3 + M6 ganharam regra `.cross-link` reusada do estilo canônico M4/M5)

### Distribuição por par de módulo

| Par | Inserções |
|---|---|
| M3 → M7 (SAM + HPPN) | 2 |
| M3 → M10 (Apgar canônico) | 1 |
| M3 → M12 (Defeitos cirúrgicos congênitos) | 1 |
| M4 → M8 (Kernicterus + exsanguineotransfusão) | 2 |
| M4 → M10 (Apgar canônico) | 1 |
| M5 → M8 (Kernicterus + exsanguineotransfusão) | 2 |
| M6 → M8 (Icterícia em sepse) | 1 |
| M6 → M9 (ECN no DD sangramento/plaquetopenia) | 1 |
| **Total** | **11** |

---

## Inserções detalhadas

### M3 → M7/M12 (Página 3.11 · 3 situações especiais)

**Arquivo**: `modules/m3-reanimacao/index.html`
**Ponto de inserção**: imediatamente após `<aside class="op-summary">` "Resumo operacional 3 situações", antes do `<section class="quiz" data-quiz-id="p11">`. Linhas ~2242-2266.

Adicionado novo `<h2>Aprofundamento nas 3 situações especiais (cross-links Parte 2)</h2>` seguido de 3 blocos `<aside class="cross-link">`:

1. **M7 §7.7 — SAM completa** (`href="../m7-ttrn-sam-hppn/index.html#/p2-m7-p7"`)
2. **M7 §7.11 — HPPN integrada** (`href="../m7-ttrn-sam-hppn/index.html#/p2-m7-p11"`)
3. **M12 §12.1 — Defeitos cirúrgicos congênitos** (`href="../m12-defeitos-cirurgicos-neonatais/index.html#/p2-m12-p1"`)

Justificativa pedagógica: §3.11 cobre mecônio em sala de parto (link natural pra SAM completa em M7) + HDC (link pra HPPN-pós-HDC em M7.11 e pra mapa cirúrgico de M12). Resumo operacional fecha o tópico, cross-links abrem horizonte da Parte 2.

---

### M3 → M10 (Página 3.12 · Fluxograma completo + João Eucalipto)

**Arquivo**: `modules/m3-reanimacao/index.html`
**Ponto de inserção**: imediatamente após `<aside class="bauer-note">` "Gap declarado · Apgar". Linha ~2566.

Adicionado 1 bloco `<aside class="cross-link">`:

- **M10 §10.2-10.4 — Fonte canônica Apgar** (`href="../m10-miscelania-neonatal/index.html#/p2-m10-p2"`)

Justificativa: a `bauer-note` declara textualmente "Apgar não foi descrito aqui — gap deliberado, fica como referência cruzada futura". A referência cruzada futura agora é concreta — M10 §10.2-10.4 desenvolve Apgar canônico.

---

### M4 → M8 (Página 4.8 · Orelhinha IRDA-1 vs IRDA-2)

**Arquivo**: `modules/m4-triagem-neonatal/index.html`
**Ponto de inserção**: dentro da seção pré-existente `<h2>Cross-links com módulos anteriores</h2>`, após o cross-link M3 §3.9 e antes do `<h2>Box lateral</h2>`. Linhas ~1660-1675.

Adicionados 2 blocos `<aside class="cross-link">`:

1. **M8 §8.12-8.13 — Kernicterus + fototerapia** (`href="../m8-ictericia-neonatal/index.html#/p2-m8-p12"`)
2. **M8 §8.14 — Exsanguineotransfusão canônica** (`href="../m8-ictericia-neonatal/index.html#/p2-m8-p14"`)

Justificativa: §4.8 é literalmente a página da pegadinha fototerapia ≠ exsanguíneo (IRDA-2). A fisiopatologia do kernicterus + a exsanguíneo canônica vivem em M8. Cross-links adicionados na seção já existente desenham continuidade explícita.

---

### M4 → M10 (Página 4.12 · Síntese final + cross-references)

**Arquivo**: `modules/m4-triagem-neonatal/index.html`
**Ponto de inserção**: imediatamente após `<aside class="gap-notice">` "Tema pendente · futuro · Apgar score". Linhas ~2331-2336.

Adicionado 1 bloco `<aside class="cross-link">`:

- **M10 §10.2-10.4 — Apgar canônico expandido** (`href="../m10-miscelania-neonatal/index.html#/p2-m10-p2"`)

Justificativa: análogo a M3 §3.12 — a `gap-notice` declara Apgar como tema pendente; M10 agora fornece a fonte canônica cross-platform.

---

### M5 → M8 (Página 5.6 · IRDA-2 hiperbilirrubinemia com exsanguíneo)

**Arquivo**: `modules/m5-triagem-auditiva-neonatal/index.html`
**Ponto de inserção**: imediatamente após o parágrafo `<h2>4. Hiperbilirrubinemia com exsanguinotransfusão</h2>`, antes de `<h2>5. ECMO</h2>`. Linhas ~1044-1057.

Adicionados 2 blocos `<aside class="cross-link">`:

1. **M8 §8.12-8.13 — Fisiopatologia kernicterus + fototerapia** (`href="../m8-ictericia-neonatal/index.html#/p2-m8-p12"`)
2. **M8 §8.14 — Exsanguineotransfusão canônica** (`href="../m8-ictericia-neonatal/index.html#/p2-m8-p14"`)

Justificativa: ponto exato onde §5.6 cita "hiperbilirrubinemia com necessidade de exsanguineotransfusão" como gatilho IRDA-2. M8 desenvolve fisiopatologia kernicterus + curvas Bhutani; conexão direta e crítica.

---

### M6 → M8 (Página 6.8 · Sepse precoce × tardia)

**Arquivo**: `modules/m6-dispneia-neonatal-sdr-sepse/index.html`
**Ponto de inserção**: imediatamente após `<aside class="board-wants">`, antes de `<div class="next-link">`. Linha ~1408.

Adicionado 1 bloco `<aside class="cross-link">`:

- **M8 §8.4 — Icterícia como manifestação de sepse** (`href="../m8-ictericia-neonatal/index.html#/p2-m8-p4"`)

Justificativa: o `op-summary` da §6.8 cita "icterícia" entre manifestações sistêmicas inespecíficas da sepse, e o `board-wants` está logo antes do `next-link`. Cross-link conecta o sinal inespecífico (icterícia em sepse) ao desdobramento M8 (5 critérios de icterícia não-fisiológica).

---

### M6 → M9 (Página 6.10 · Investigação laboratorial — plaquetopenia)

**Arquivo**: `modules/m6-dispneia-neonatal-sdr-sepse/index.html`
**Ponto de inserção**: imediatamente após o parágrafo sobre plaquetopenia + candidíase ("Plaquetopenia isolada não."), antes de `<h2>Camada 2</h2>`. Linhas ~1700-1707.

Adicionado 1 bloco `<aside class="cross-link">`:

- **M9 §9.4 — ECN no DD de sangramento retal + plaquetopenia** (`href="../m9-enterocolite-necrosante/index.html#/p2-m9-p4"`)

Justificativa: linha 1696 declara textualmente "plaquetopenia também aparece em sepse bacteriana grave, CIVD, enterocolite necrosante (NEC)". M9 §9.4 desenvolve tríade clínica ECN + sangramento retal. Conexão direta para diferencial pediátrico.

---

## Pulados / não-aplicáveis (com justificativa)

### M3 → M8 (Icterícia em RN asfíxico) — PULADO
**Justificativa**: M3 não tem página dedicada a EHI/asfixia (conteúdo distribuído em §3.10/§3.11/§3.12 sem âncora natural pra cross-link clínico de icterícia pós-asfixia). A relação asfixia → icterícia aumentada existe mas é indireta demais pra inserir cross-link cirúrgico sem forçar contexto. Recomendação: avaliar se M8 quer cross-link forward → M3 (não o oposto).

### M6 §6.7 (Apneia da prematuridade) → M8 — PULADO
**Justificativa**: apneia da prematuridade é entidade isolada da icterícia neonatal. Apneia entra como manifestação sistêmica de sepse (já coberto em §6.8 → M8), mas a §6.7 trata apneia idiopática + cafeína isoladamente. Sem ressonância pedagógica direta com M8 — forçar cross-link aqui violaria o critério "ponto pedagogicamente natural" do briefing.

### M3 / M9 → M11 (Condições cervicais) — CONFIRMADO PULADO
**Justificativa**: M11 cobre escopo cervical isolado (higroma cístico, ducto tireoglosso, fendas branquiais, torcicolo congênito). Nem M3 (reanimação) nem M9 (ECN abdominal) tocam esse universo. Briefing já antecipava: "M3/M9 → M11 — provavelmente nenhum cross-link necessário". Confirmado.

---

## Arquivos modificados

### HTML (4 arquivos)

| Arquivo | Inserções |
|---|---|
| `modules/m3-reanimacao/index.html` | 4 cross-links (§3.11 × 3 + §3.12 × 1) |
| `modules/m4-triagem-neonatal/index.html` | 3 cross-links (§4.8 × 2 + §4.12 × 1) |
| `modules/m5-triagem-auditiva-neonatal/index.html` | 2 cross-links (§5.6 × 2) |
| `modules/m6-dispneia-neonatal-sdr-sepse/index.html` | 2 cross-links (§6.8 × 1 + §6.10 × 1) |

### CSS (2 arquivos — adição da regra `.cross-link` reusada)

| Arquivo | Razão |
|---|---|
| `modules/m3-reanimacao/assets/css/components.css` | M3 não tinha regra `.cross-link` (até agora todos os cross-links do M3 eram inline; reversos S44 introduzem o componente em bloco — regra adicionada no fim do arquivo, padrão idêntico ao canônico de `pages-m5.css` linhas 447-475) |
| `modules/m6-dispneia-neonatal-sdr-sepse/assets/css/components.css` | M6 idem — todos os cross-links pré-existentes eram inline; reversos S44 introduzem `<aside class="cross-link">` em §6.8 e §6.10. Mesma regra canônica anexada |

Tokens utilizados (`--color-info-100`, `--color-info-border`, `--color-info-500`, `--space-3`, `--space-4`, `--r-md`, `--fs-sm`, `--font-mono`, `--ink-100`) **já existem** em ambos os `tokens.css` de M3 e M6 (confirmado por grep antes da inserção).

---

## Padrão visual aplicado

```html
<aside class="cross-link">
  <div>
    <div class="cross-link__module">M{N} §{N}.{K} · {Título curto}</div>
    <a href="../m{N}-slug/index.html#/p{P}-m{N}-p{K}">{Descrição pedagógica do que o aluno encontrará lá}</a>
  </div>
</aside>
```

Resultado renderizado: card horizontal com seta `↔` à esquerda (pseudo-elemento `::before`), label tipográfico em mono uppercase em cima, descrição em link bold abaixo. Visualmente idêntico aos cross-links já existentes em M4 §4.8 e M5 §5.6.

---

## Validação de paths (todos confirmados)

- `../m7-ttrn-sam-hppn/index.html#/p2-m7-p7` — confere com menu drawer M7 linha 68
- `../m7-ttrn-sam-hppn/index.html#/p2-m7-p11` — confere com menu drawer M7 linha 72
- `../m8-ictericia-neonatal/index.html#/p2-m8-p4` — confere com menu drawer M8 linha 65
- `../m8-ictericia-neonatal/index.html#/p2-m8-p12` — confere com menu drawer M8 linha 73
- `../m8-ictericia-neonatal/index.html#/p2-m8-p14` — confere com menu drawer M8 linha 75
- `../m9-enterocolite-necrosante/index.html#/p2-m9-p4` — confere com menu drawer M9 linha 65
- `../m10-miscelania-neonatal/index.html#/p2-m10-p2` — confere com menu drawer M10 linha 63
- `../m12-defeitos-cirurgicos-neonatais/index.html#/p2-m12-p1` — confere com menu drawer M12 linha 62

---

## Próximos passos sugeridos (fora deste escopo)

- Atualizar EXECUCAO.md de M7/M8/M9/M10 pra marcar S44 como CONCLUÍDA com referência a este doc
- Considerar QA Playwright pra verificar navegação hash funcional entre módulos (cliques nos cross-links reversos)
- Avaliar se M2 (TORCH) deveria receber cross-link reverso → M8 §8.12 (colestase/atresia/Kasai — porque CMV congênito é causa relevante de colestase neonatal). Não estava no escopo S44, mas é continuidade natural.
