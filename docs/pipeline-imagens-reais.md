# Pipeline Imagens Reais — M7 + M8 + M9

**Data**: 2026-05-26
**Sessão**: pós-fechamento Neonato 2 (commits e177d9f→d3029dd)
**Autor**: Orquestrador (Claude principal)
**Autorização**: Bauer — "criado a pipeline, dispara, já tem a minha autorização"

---

## 1. Objetivo

Preencher os **gaps de imagens reais em M7, M8, M9** identificados pós-commit, aplicando rigor de validação tripla Bauer (clínica + técnica + licença CC) e a regra de **parcimônia + fonte citada** (memory `feedback-imagens-reais-medica-regra.md`).

Razão central: **achado clínico canonicamente visual fica vago sem a imagem real** — descrever esferócitos sem mostrar esfregaço, descrever USG cordão triangular sem mostrar USG, descrever pneumatose sem mostrar RX. Essa é a crítica direta de Bauer ("igual descrever todos os achados de um raio x e nao colocar uma imagem... fica vago").

**Escopo**:
- ✅ M7 (TTRN+SAM+HPPN) — completar 9 skeletons declarados
- ✅ M8 (Icterícia Neonatal) — 11 imagens reais OBRIGATÓRIAS declaradas
- ✅ M9 (Bônus 1 ECN) — 6 skeletons V72/V74/V75/V77/V78/V79
- 🟡 M10 (Miscelânia) — apenas 1 skeleton V16 fundo de olho prematuro (entra no piggyback)
- ❌ M11 (Cervicais) — SVG autoral é o design escolhido (fora do escopo)

**Não-escopo**: substituição de SVGs autorais já implementados que são pedagogicamente melhores que foto real (anatomia esquemática, fluxogramas, gradientes conceituais).

---

## 2. Metas

| Aula | Imagens reais hoje | Meta após pipeline | Delta |
|---|---|---|---|
| M7 | 2 (Hellerhoff SAM + pneumotórax) | 5–8 reais | +3 a +6 |
| M8 | 0 | 8–11 reais | +8 a +11 |
| M9 | 0 | 4–6 reais | +4 a +6 |
| M10 | 0 | 1 real | +1 |
| **Total** | **2** | **18–26** | **+16 a +24** |

Faixa porque depende de quantos briefs vão como `INCONCLUSIVO` (escalonado a ilustrador, fora deste pipeline) vs `QUALIFICADA` (busca achou imagem CC válida).

**Marco de aceite global**: ≥ 70% dos briefs declarados retornam QUALIFICADA com attribution canônica completa em `<figcaption>`. Briefs INCONCLUSIVO ficam como skeleton + brief documentado pra próxima sessão.

---

## 3. Viabilidade

### Fontes mapeadas (catálogo `reference-busca-imagens-medicas-metodo`)
- **Wikimedia Commons** — base preferida (CC BY-SA 4.0 mais comum). Cobre: RX neonatal Hellerhoff, fotos clínicas neutras, esquemas didáticos.
- **NIH/PMC open access** (CC BY) — bom pra histopatologia, microscopia, USG.
- **DermNet NZ** — lesões cutâneas neonatais (pênfigo sifilítico, blueberry muffin, leucocoria).
- **ASH ImageBank** — esfregaços de sangue (esferócitos, corpúsculos de Heinz). Requer registro free.
- **NEJM Images in Clinical Medicine open** — janela ocasional.
- **CDC Public Health Image Library** — domínio público, neonatal raro mas existe.
- **Radiopaedia** — bloqueio anti-bot HTTP 403 esperado; fontes alternativas.

### Briefs com alto risco INCONCLUSIVO (a priori, baseado em sessões anteriores)
- USG cordão triangular (atresia vias biliares) — raramente em CC open
- Plugs de bile (microscopia) — literatura paga
- Gráfico AAP 2004 canônico — protegido pela AAP, pode exigir reconstrução SVG
- Hood neonatal (M7) — discutido na BUSCA-IMAGENS.md de M7, ilustração Canva apenas

### Riscos
- Tempo: cada busca = 1 agente buscador-imagem-medica-bauer (~3–10 min). Paralelizável.
- Contexto: cada agente consome seu próprio (não-meu) — sem risco de saturação principal.
- Licença ambígua: gate de aceite recusa.

---

## 4. Regras de aceite

Cada imagem candidata DEVE passar **validação tripla**:

1. **Camada 1 — clínica**: imagem mostra EXATAMENTE o achado descrito no brief. Não-aceitável: proxy didático sub-ótimo (ex.: mecônio em fralda ≠ líquido amniótico tinto — caso real M7 BUSCA-IMAGENS.md).

2. **Camada 2 — técnica**: resolução ≥ 800 px largura, sem watermark interferindo, modalidade correta (RX vs USG vs foto vs microscopia), enquadramento didaticamente útil.

3. **Camada 3 — licença**: CC0 / CC BY / CC BY-SA / domínio público. Rejeitado: CC BY-ND (proíbe adaptação à paleta Bauer), CC BY-NC (ambíguo em educacional), copyright restritivo, "uso justo" não-documentado.

### Attribution obrigatória (formato canônico)
```html
<figcaption class="figcaption">
  <strong>Achado:</strong> [descrição clínica do que se vê na imagem].
  <span class="attribution">[Tipo de imagem]: [Autor], via [Fonte] ([Licença], [Ano se aplicável]). [URL canônica].</span>
</figcaption>
```

### Aceite final por aula
- ≥ 70% briefs QUALIFICADOS = aceite parcial OK
- ≥ 90% briefs QUALIFICADOS = aceite verde
- < 70% = revisar briefs problemáticos (provavelmente escalonar a ilustrador na próxima sessão)

---

## 5. Regras de proibição

🚫 **NUNCA** embutir imagem sem attribution canônica completa em `<figcaption>` (autor + fonte + licença + URL).

🚫 **NUNCA** usar imagem com paciente identificável (face exposta, tatuagem identificadora, marcadores institucionais).

🚫 **NUNCA** usar proxy pedagogicamente questionável só pra preencher slot (ex.: mecônio fralda como "líquido amniótico tinto" — confunde 2 fenômenos clínicos distintos).

🚫 **NUNCA** usar imagem com restrição ND (no-derivatives) — Bauer adapta paleta, redimensiona, anota.

🚫 **NUNCA** inventar URL de fonte ou attribution.

🚫 **NUNCA** usar IA-generated imagem médica (Midjourney/DALL-E) como real — viola integridade clínica.

🚫 **NUNCA** copiar imagem com watermark de banco pago (Shutterstock, Getty, Adobe Stock).

🚫 **NUNCA** modificar EXIF/metadata pra esconder fonte.

🚫 **NUNCA** commitar arquivo binário > 2 MB sem otimização (compressão progressiva, redimensionamento responsável).

---

## 6. Fluxo da pipeline

### Fase 0 — Revisão conteudística (3 agentes paralelos, read-only)

Pra cada aula M7/M8/M9, 1 agente general-purpose lê o prompt-final + HTML + roteiro e produz `docs/imagens-revisao-mN.md` com:
- Lista de briefs declarados (Vxx do prompt-final)
- Lista de pontos didáticos no HTML que CITAM ACHADO clínico VISUAL sem imagem associada
- Decisão por brief: ALTA / MÉDIA / BAIXA prioridade pedagógica
- Sugestão de novos candidatos (não estavam em skeleton mas enriqueceriam)
- Aceite ou rejeição de skeletons existentes (alguns podem ser SVG-melhor)

### Fase 1 — Priorização (Orquestrador)

Consolidar as 3 revisões em 1 documento de priorização `docs/imagens-priorizacao.md`. Cortar baixa-prioridade pra próxima sessão. Confirmar lista final.

### Fase 2 — Busca paralela (1 buscador-imagem-medica-bauer por aula)

Disparar 3 agentes `buscador-imagem-medica-bauer` em paralelo (M7, M8, M9 + M10 piggyback). Cada um recebe a lista priorizada da Fase 1 e produz:
- Arquivo de imagem em `modules/mN-*/assets/img/`
- Attribution canônica em `BUSCA-IMAGENS-mN.md` (já existe pra M7; criar pra M8/M9)
- Status por brief: QUALIFICADA / INCONCLUSIVO

### Fase 3 — Embed cirúrgico (Orquestrador)

Pra cada imagem QUALIFICADA, edit cirúrgico no HTML correspondente: substituir `.img-skeleton` por `<figure>` com `<img src>` real + `<figcaption>` com attribution canônica. Preservar dimensões responsivas, lazy loading, alt text didático.

### Fase 4 — Atualizar SW + documentação + commit + push

- Adicionar novos arquivos de imagem ao `sw.js` (bump v2.4.0 → v2.4.1, micro-bump)
- Atualizar `EXECUCAO.md` de cada aula com seção "Imagens reais incorporadas"
- Criar `docs/imagens-relatorio-final.md` consolidando entregas
- Commit + push (autorizado por Bauer)

---

## 7. Critérios de "implementação impecável" (Bauer requisitou)

✅ Cada imagem real em `<figure class="figure-clinical">` com:
- `<img>` com `loading="lazy"`, `decoding="async"`, `alt` descritivo médico
- `<figcaption>` com **Achado** (1 linha clínica) + **Attribution** (autor + fonte + licença + URL)
- Quando aplicável, overlay SVG separado pra anotações pedagógicas (setas/labels) — NÃO modificar o asset original

✅ Acessibilidade WCAG AA: alt text rico, foco visível, contraste >= 4.5:1 em legendas.

✅ Performance: imagem otimizada (JPEG quality 85, PNG comprimida), peso médio < 200 KB por imagem, > 500 KB exige justificativa.

✅ Atribuição em rodapé de página dedicado quando volume justificar (M8 com 11 imagens → seção créditos final).

✅ Cross-reuso quando aplicável (ex.: RX SAM Hellerhoff já reusada de M7 7.9 em M7 7.12 painel comparativo).

---

## 8. Cronograma estimado

- **Fase 0** (revisão): 3 agentes paralelos × ~5 min = ~5 min wall-clock
- **Fase 1** (priorização): ~3 min Orquestrador
- **Fase 2** (busca): 3 agentes paralelos × ~10–15 min = ~15 min wall-clock
- **Fase 3** (embed): ~10–15 min Orquestrador (sequencial por aula)
- **Fase 4** (SW + commit + push): ~5 min

**Total estimado**: ~35–45 min wall-clock.

---

## 9. Decisão Bauer pré-aprovada

> "criado a pipeline, dispara, já tem a minha autorização, e inicie a busca de imagens reais para incorporar nas 3 aulas."

Pipeline criada. Disparando agora Fase 0 (revisão paralela M7+M8+M9+M10).
