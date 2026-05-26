# Imagens Reais — Priorização Fase 1 (consolidação Fase 0)

**Data**: 2026-05-26
**Input**: docs/imagens-revisao-m{7,8,9}.md
**Output**: lista priorizada pra Fase 2 (busca paralela)

---

## Resumo executivo

- **M7**: 3 buscas (1 ALTA + 2 MÉDIA)
- **M8**: 9 buscas (8 ALTA + 1 ALTA promovida do MÉDIA) + 2 reconstruções SVG CC (AAP 2004 + Bhutani 1999)
- **M9**: 6 buscas (5 ALTA + 1 MÉDIA)
- **M10**: 1 busca piggyback (V16 fundo de olho prematuro)
- **TOTAL**: 19 buscas + 2 reconstruções SVG = **21 entregas Fase 2**

---

## M7 — 3 buscas

| Brief | Página | Achado | Prio | Risco INCONCLUSIVO |
|---|---|---|---|---|
| V52 | 7.4 | RX TTRN — cisurite + estrias hilares + cardiomegalia discreta | 🔴 ALTA | Médio (Hellerhoff/PMC) |
| V57+V58 | 7.8 | RN banhado em mecônio + detalhe unha/coto tintos | 🟡 MÉDIA | Médio-alto (ético) |
| N1 | 7.11 | Cianose central HPPN (foto cor azul-acinzentada) | 🟡 MÉDIA | Baixo (Wikimedia/DermNet) |

---

## M8 — 9 buscas + 2 reconstruções SVG

| Brief | Página | Achado | Prio | Risco |
|---|---|---|---|---|
| V69 | 8.5 | Kramer progressão fotográfica (RN ictérico zona 3+) | 🔴 ALTA | Médio |
| V74 | 8.6 | Foto recém-nascido com icterícia hemolítica precoce | 🔴 ALTA | Médio |
| V77 | 8.7 | Esplenomegalia (clínica ou USG) — esferocitose | 🟡 MÉDIA | Médio |
| V79 | 8.9 | Esfregaço comparativo esferócitos vs normal (ASH ImageBank) | 🔴 ALTA | Baixo (ASH) |
| V81 | 8.9 | Esfregaço Heinz + bite cells (G6PD) — refinamento 2-em-1 | 🔴 ALTA | Baixo (ASH/PMC) |
| V86 | 8.12 | USG cordão triangular (atresia vias biliares) | 🔴 ALTA | **Alto** (raramente CC) |
| V87 | 8.12 | Biópsia hepática — plugs de bile (microscopia) | 🔴 ALTA | **Alto** (literatura paga) |
| V89 | 8.4/8.12 | Colúria + acolia (foto fralda + urina escura) | 🔴 ALTA NOVO | Médio (PMC) |
| V93 | 8.13 | Bebê em fototerapia UTIN (proteção ocular + nudez sub) | 🔴 ALTA | Baixo (Wikimedia/CDC) |
| V91 (SVG) | 8.13 | Gráfico AAP 2004 — reconstrução fiel CC | RECONSTRUIR | — |
| V94 (SVG) | 8.14 | Curvas Bhutani 1999 P40/P75/P95 — reconstrução fiel CC | RECONSTRUIR | — |

---

## M9 — 6 buscas

| Brief | Página | Achado | Prio | Risco |
|---|---|---|---|---|
| V72 | 9.4 | Distensão clínica abdominal RN com ECN | 🟡 MÉDIA | Médio-alto (ético) |
| V74 | 9.5 | Pneumatose transversal "IMAGEM DE PROVA" | 🔴 ALTA | Médio (Hellerhoff/PMC) |
| V75 | 9.5 | Pneumatose longitudinal pontilhado | 🔴 ALTA | Médio |
| V77 | 9.5 | Pneumoperitônio fígado/diafragma (RN) | 🔴 ALTA | Médio |
| V78 | 9.5 | Gás venoso portal (rara — alta persistência didática) | 🔴 ALTA | **Alto** (raro) |
| V79 | 9.5 | Sinal de Rigler / dupla parede | 🔴 ALTA | Médio |

---

## M10 — 1 busca piggyback

| Brief | Página | Achado | Prio | Risco |
|---|---|---|---|---|
| V16 | 10.11 | Fundo de olho prematuro com ROP (foto retinográfica) | 🟡 MÉDIA | Médio (PMC oftalmologia) |

---

## Aceite global (Marco)

- ≥ 15/19 buscas QUALIFICADAS = aceite verde
- 12-14/19 = aceite parcial
- < 12 = revisar (escalonar a ilustrador na próxima sessão)
- 2/2 SVG reconstruídos = obrigatório (gráficos canônicos protegidos)

---

## Disparo Fase 2

4 agentes paralelos:
1. **buscador-imagem-medica-bauer M7** (3 buscas)
2. **buscador-imagem-medica-bauer M8 + M10** (10 buscas)
3. **buscador-imagem-medica-bauer M9** (6 buscas)
4. **ilustrador-medico-bauer M8 gráficos** (2 reconstruções SVG)

Cada um produz seu BUSCA-IMAGENS-mN.md ou SVG inline + arquivos de imagem em `assets/img/`.
