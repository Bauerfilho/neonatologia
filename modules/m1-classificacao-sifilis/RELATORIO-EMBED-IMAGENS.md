# Relatório — Embed cirúrgico de 8 imagens médicas no Módulo 1

**Executor**: Executor Bauer v1.2 (modo --auto)
**Data**: 2026-05-25
**Origem**: BUSCA-IMAGENS.md (8 briefs validados pelo buscador-imagem-medica-bauer; B03 e B17 supridos por SVG autoral Bauer)
**Sessão paralela**: M2 (TORCH) e M3 (Reanimação) sendo executados em paralelo por outros agentes — não tocados nesta sessão.

---

## Implementado

- **8 placeholders `.img-placeholder` substituídos** por componente `figure-clinical` semântico com attribution canônica, alt verbatim, `loading="lazy"`, `decoding="async"`, `role="figure"`, `aria-labelledby`.
- **9 elementos `<img>`** no total — B02 ocupa duas figuras (palmar + plantar) numa `figure-grid` 2 colunas.
- **2 SVGs autorais Bauer** (B03 rinite/placas mucosas, B17 pré-termo na palma) integrados como `<img src="...svg">` simples, alt + title/desc do SVG preservados internamente.
- **CSS `.figure-clinical`** adicionado ao final de `assets/css/pages-m1.css` (não toca tokens/base/components — modo Opção C preservado).

## Posicionamento

| ID  | Página | Componente | Layout |
|-----|--------|------------|--------|
| B17 | 1.2    | `figure-clinical figure-clinical--narrow` | isolado |
| B01 | 1.7    | `figure-clinical figure-clinical--narrow` | isolado |
| B02 | 1.7    | `figure-grid` (palmar + plantar)          | 2-col responsivo |
| B03 | 1.7    | `figure-clinical figure-clinical--narrow` | isolado (SVG autoral) |
| B04 | 1.8    | `figure-grid` (estigmas-tardios)          | 4 fig em grid |
| B05 | 1.8    | idem (grid)                                | idem |
| B06 | 1.8    | idem (grid, Hutchinson oclusal hi-res)     | idem |
| B07 | 1.8    | idem (grid, síntese facial)                | idem |

## Attribution

- **B01**: PMC12676640 (Arango-Ferreira & Toro-Posada, AJTMH 2025) — CC BY 4.0
- **B02**: PMC11492971 (Alqahtani et al., Cureus 2024) — CC BY 4.0
- **B03**: SVG autoral Bauer (ilustração esquemática, não foto clínica)
- **B04**: CDC PHIL 16744 (Renelle Woodall, 1969) — Public Domain
- **B05**: CDC PHIL 2387 (Robert Sumpter, 1967) — Public Domain
- **B06**: CDC PHIL 2385 (Susan Lindsley, 1971, 3843×2948 px) — Public Domain
- **B07**: CDC PHIL 16463 (Brian Hill, 1976) — Public Domain
- **B17**: SVG autoral Bauer (ilustração esquemática, não foto clínica)

## Gates passados em 1ª tentativa

1. **Placeholders restantes**: 0 (gate `grep -c "img-placeholder"` = 0)
2. **figure-clinical inseridos**: 9 (1 para cada `<img>`)
3. **data-img-id**: 8 IDs únicos (B01, B02, B03, B04, B05, B06, B07, B17) — B02 aglutina 2 imagens sob mesmo ID em `figure-grid`
4. **Arquivos referenciados existem**: 9/9 em `assets/img/`
5. **Anti-metalinguagem v1.2**: 0 hits
6. **Anti-IA-smell P0**: 0 hits
7. **HTML balanceado**: `<figure>` 15/15, `<figcaption>` 15/15
8. **Acessibilidade**: 9/9 imgs com `alt`, `role="figure"`, `loading="lazy"`, `decoding="async"`
9. **Quizzes intactos**: 11 blocos `<section class="quiz">`, 33 questões
10. **Hash routing intacto**: 31 ocorrências `p1-m1-p` preservadas
11. **localStorage namespace inalterado**: `neonato-p1-m1` intacto no JS (não tocado)
12. **Modo Opção C preservado**: `git diff` vazio em `tokens.css`, `base.css`, `components.css`
13. **11 páginas distintas**: `data-page-num` 1-11 todas presentes

## Gates que exigiram revisão

Nenhum — todos os gates passaram em 1ª tentativa.

## Decisões autônomas

1. **`<img src="...svg">` em vez de `<object>`** para B03 e B17: simplicidade, melhor compatibilidade de cache, `alt` preserva acessibilidade. O `<title>` + `<desc>` internos do SVG permanecem como descrição estendida para screen readers que entram no SVG inline.
2. **Layout em grid para estigmas tardios** (B04-B07): grid 2×2 responsivo em uma única `figure-grid` — síntese visual coesa do bloco 1.8, melhor que 4 figures empilhadas verticalmente.
3. **B02 em `figure-grid` 2-col** (palmar + plantar): mostra que pênfigo é entidade única em duas superfícies; figcaptions distintas mas attribution única (mesmo paper).
4. **B06 (Hutchinson oclusal alta-res 3843×2948)** como "ancora visual" do estigma dentário; B07 (CDC 16463, 700px) entra como **síntese visual cumulativa** com 5 estigmas no mesmo paciente — reforça noção de "constelação clínica" sem repetir Hutchinson isolado.
5. **`.figure-clinical--narrow`** (max-width 600px) aplicado a B01, B03, B17 — imagens com largura nativa <800px ficam contidas para evitar upscale visível. B02/B04-B07 dentro de grids respeitam dimensão natural do container.
6. **Attribution em `<span class="attribution">` com link clicável** para PMC/CDC PHIL — rastreabilidade e auditoria de fonte sem poluir o texto principal.

## Arquivos modificados

| Tipo | Path | Operação |
|---|---|---|
| HTML | `modules/m1-classificacao-sifilis/index.html` | edição in-place de 8 placeholders → 9 figure-clinical |
| CSS  | `modules/m1-classificacao-sifilis/assets/css/pages-m1.css` | +80 linhas (`.figure-clinical`, `.figure-clinical--narrow/--wide`, `.figure-grid`, responsividade) |
| IMG  | `modules/m1-classificacao-sifilis/assets/img/BNN-b01-*` (×2) | novos (PMC CC BY) |
| IMG  | `modules/m1-classificacao-sifilis/assets/img/BNN-b02-*` (×2) | novos (PMC CC BY) |
| SVG  | `modules/m1-classificacao-sifilis/assets/img/BNN-b03-rinite-placas-svg.svg` | novo (autoral Bauer) |
| IMG  | `modules/m1-classificacao-sifilis/assets/img/BNN-b04-fronte-olimpica.jpg` | novo (CDC PHIL PD) |
| IMG  | `modules/m1-classificacao-sifilis/assets/img/BNN-b05-tibia-em-sabre.jpg` | novo (CDC PHIL PD) |
| IMG  | `modules/m1-classificacao-sifilis/assets/img/BNN-b06-dente-hutchinson.jpg` | novo (CDC PHIL PD hi-res) |
| IMG  | `modules/m1-classificacao-sifilis/assets/img/BNN-b07-estigmas-faciais.jpg` | novo (CDC PHIL PD) |
| SVG  | `modules/m1-classificacao-sifilis/assets/img/BNN-b17-pretermo-na-palma-svg.svg` | novo (autoral Bauer) |
| DOC  | `modules/m1-classificacao-sifilis/assets/img/BUSCA-IMAGENS.md` | novo (relatório buscador) |

## Pendências fora de escopo

Nenhuma — todas as 8 imagens previstas no BUSCA-IMAGENS.md integradas com attribution e alt completos.

## Observação cross-sessão

Durante esta missão, o executor M2 rodando em paralelo (sessão Bauer/Claude 10:50:49) realizou commit `f7eb962` que **incluiu meus arquivos M1 no mesmo snapshot** (colisão de `git add` global entre sessões paralelas). O commit f7eb962 carrega:

- Trabalho M2 (escopo declarado na mensagem)
- Trabalho M1 deste executor (10 arquivos M1: index.html, pages-m1.css, 9 imagens + BUSCA-IMAGENS.md, +80/+129 linhas)

Conteúdo M1 está corretamente persistido no git; mensagem do commit não reflete o escopo M1 misturado dentro. Este `RELATORIO-EMBED-IMAGENS.md` documenta o embed M1 para rastreabilidade — Bauer pode optar por:

(a) aceitar o commit f7eb962 como-é (snapshot misto mas conteúdo correto);
(b) reorganizar histórico via `git rebase` em separado (fora do escopo do Executor — operação destrutiva, requer Bauer).

Recomendação: opção (a). O snapshot está íntegro; a confusão é apenas da mensagem.
