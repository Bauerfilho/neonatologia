# Checkup M8 — pré-início pipeline (read-only)

**Data**: 2026-05-25
**Modo**: read-only — apenas este arquivo foi criado; nada mais foi editado.
**Escopo**: aula 8 / M8 (Icterícia Neonatal). 3ª das aulas principais da Parte 2 (M6 já implementado, M7 já implementado, M8 só tem transcrição em disco).
**Artefato-fonte**: `transcricoes/aula3-modulo2-ictericia-neonatal.txt` (62816 bytes, 1490 linhas, criado por Summary AI 2026-05-25 às 20:47, link `https://link.summaryai.app/dxu6ef`).

---

## Resumo executivo

- **Transcrição íntegra?** **SIM.** ~62 minutos (00:32 → 1:02:02), 470 timestamps progressivos, UTF-8 limpo, zero mojibake, único speaker (A — Júlia), encerramento natural ("Beijo. Beijo."), conteúdo 100% coerente com o título (icterícia neonatal).
- **Calibração macro v2 suficiente pra M8?** **SIM, mas parcial.** Macro v2 §6.3 lista "Icterícia neonatal (entidade independente, completa)" como gap totalmente aberto pra Parte 2; macro v2 §9.5 e §9.1 ratificam M8 = icterícia. Dossiê A6 (S24) e dossiê A7 (S35, S39) confirmam M8 = icterícia via gancho linha 626 de A7. Hub V2 já tem placeholder M8.
- **Gancho M7 → M8 existe?** **SIM, robusto.** Prompt-final-aula7.md §7.13 (linha 1344-1352) traz gancho explícito "bora começar a falar daquele bebezinho que está ictérico" + nota Didata "Próximo: M8 — Icterícia neonatal" + escopo previsto (Kramer, Coombs, fototerapia, exsanguineotransfusão, kernicterus, ABO/Rh) — todos os tópicos do escopo previsto aparecem de fato na transcrição.
- **Pode iniciar pipeline?** **SIM.** Recomendação: **Roteirizador-bauer entra direto, com Calibrador MICRO leve em paralelo** (não bloqueante). Macro v2 + cross-references M7→M8 + transcrição íntegra são insumos suficientes pro Roteirizador começar a marcar itens. Calibrador MICRO entrega dossiê A8 em paralelo enquanto Roteirizador roda — é o padrão usado em M6/M7.

---

## Integridade da transcrição

### Tamanho e formato

| Métrica | Valor |
|---|---|
| Caminho | `transcricoes/aula3-modulo2-ictericia-neonatal.txt` |
| Tamanho | 62.816 bytes (~62 KB) |
| Linhas | 1490 |
| Encoding | UTF-8 |
| Line terminators | CRLF + LF mistos (não bloqueante) |
| Criada por | Summary AI 2026-05-25 às 20:47 |
| Speakers | 1 único (Speaker A = Júlia) |
| Total de timestamps | 470 |
| Primeiro timestamp | `Speaker A (00:32)` |
| Último timestamp | `Speaker A (1:02:02)` |
| Duração estimada | ~62 minutos (compatível com A6 ~50 min e A7 ~55 min) |

### Coerência com o título

100% coerente. Núcleo da aula é icterícia neonatal: definição (acúmulo bilirrubina pele/mucosas), por que pediatra se preocupa (neurotoxicidade BI), icterícia fisiológica vs não-fisiológica, mecanismos (produção alta + captação/conjugação imatura + ciclo entero-hepático aumentado), critérios pra suspeitar não-fisiológica (precoce <24h, BT>12, persistente >2 sem, BD elevada, manifestações associadas), zonas de Kramer (zona 3 = passou do umbigo = sinal de perigo), incompatibilidades materno-fetais (RH e ABO com diferenças KUMBS direto/indireto + eluato), outras hemólises (esferocitose, G6PD), icterícia do leite materno vs icterícia do aleitamento, colestase neonatal e atresia de vias biliares (urgência diagnóstica — Casai até 2 meses idealmente), fototerapia (gráfico AAP por baixo/médio/alto risco + zonas Kramer + nomograma Bhutani), exsanguineotransfusão (indicações), Caso Eusébio Foucault como caso-fio-condutor (RN 18h vida, mãe O RH negativo, multípara, sem pré-natal).

### Truncamento

**Nenhum.** Aula encerra com naturalidade na linha 1490:
```
Speaker A (1:01:57) ... senão...
Speaker A (1:01:59) a gente se vê em breve. Beijo.
Speaker A (1:02:02) Beijo. Beijo.
```
Fechamento típico Júlia (assinatura conhecida das aulas 1-7).

### Repetição / loop

**Nenhuma duplicação substancial detectada.** Repetições aparentes são da própria fala didática da professora (ex.: "Muita bilirrubina sendo produzida. Muita bilirrubina sendo produzida." linhas 110-111 — ênfase pedagógica deliberada da Júlia, não bug Summary AI). Speaker único e timestamps estritamente monotônicos crescentes (verificado em amostragem 00:32 → 1:02:02).

### Marcadores temporais

470 timestamps no formato `Speaker A (MM:SS)` até 59:59 e `Speaker A (H:MM:SS)` a partir de 1:00:00 (transição em linha 1417). Progressão monotônica crescente. Sem saltos abruptos.

### Linguagem do professor / artefatos AI

Vocabulário canônico da Júlia preservado: bordões característicos ("vamos lá", "tá?", "beleza?", "estamos juntos até agora?", "presta atenção nisso", "marca aqui no gráfico", "te acalma", "guarda essa informação"), tom direto-coloquial, mnemônicos pessoais ("passou do umbigo sinal de perigo", "brilha brilha estrelinha", "cerejinha do sundae" pro ciclo entero-hepático). Erros conhecidos do Summary AI:

- **"leonatal"** em vez de "neonatal" (várias ocorrências — ex.: linhas 59, 71, 74, 80, 82) — artefato Summary AI conhecido (Júlia fala "neonatal" mas a IA transcreve "leonatal"). Mesmo padrão observado em A1-A7. **Não bloqueante** — Roteirizador deve normalizar pra "neonatal" no roteiro.
- **"16pD"** em vez de "G6PD" (linhas 626-639) — Summary AI transcreve fonema "G seis P D" como "16pD". Mesma classe de erro. Roteirizador normaliza.
- **"KUMBS"** vs "Coombs" — fonético; aceitar ambos ou normalizar pra Coombs (consistência com PRN/SBP). Decisão Roteirizador.
- **"GG / GM"** em vez de "IgG / IgM" (linhas 541-545) — Summary AI confundiu fonema "I-G-G" com "GG". Roteirizador normaliza.
- **"BPG"** em vez de "UDP-G" / "UGT" (linha 139) — Summary AI ruído no nome da enzima glicuronil-transferase. Não crítico — Roteirizador usa nome canônico "glicuronil transferase" ou "UGT1A1".
- **"normograma de Boutane"** em vez de "nomograma de Bhutani" (linhas 1199, 1208) — fonético. Roteirizador normaliza pra "nomograma de Bhutani" (canônico SBP).
- **"colonjografia"** em vez de "colangiografia" (linhas 941, 943) — fonético. Roteirizador normaliza.
- **"portoenterostomia de Casai"** em vez de "Kasai" (linhas 946, 949) — fonético. Roteirizador normaliza pra "Kasai".
- **"estercobilina"** linha 164 — termo correto é "urobilinogênio/estercobilinogênio"; a Júlia provavelmente disse "estercobilinogênio" e a IA cortou. Roteirizador checa com referência médica.

Nenhum desses erros impede a entrada no Roteirizador. Todos são erros de fonema do Summary AI, **não erros médicos da Júlia**. Padrão idêntico ao observado em A1-A7.

### Veredito integridade

**APROVADA**. Transcrição íntegra, sem truncamento, sem corrupção, sem loop. Pronta pro Roteirizador.

---

## Estado calibração macro v2 + cobertura aula 8

### Macro v2 inclui M8 explicitamente?

**SIM, mas só estruturalmente** (não conteudisticamente). Referências:

| Localização macro v2 | Conteúdo |
|---|---|
| §1 (linha 13) | "Parte 2 (3 aulas principais M6-M8 + 4 bônus M9-M12)" |
| §1 (linha 30) | "Gaps Parte 1 → Parte 2: ... icterícia, hipoglicemia, sepse, HIV vertical..." |
| §6.3 (linha 176) | Lista "**Icterícia neonatal** (entidade independente, completa)" como gap totalmente aberto pra Parte 2 |
| §9.1 (linha 306) | "**3 aulas principais** (M6, M7, M8) — escopo provável: distúrbios respiratórios + icterícia + sepse/HIV vertical (a confirmar quando Bauer enviar transcrições)" |
| §9.5 (linha 333) | "**Icterícia entidade independente** — não só como fator IRDA-2" |
| §6.2 (linha 171) | Hiperbilirrubinemia parcialmente fechada em M4 §4.8 — falta "Coombs, fototerapia, zonas de Kramer, exsanguineotransfusão completa" |

Conclusão: macro v2 **prevê M8** mas o escopo conteudístico real veio só nos dossiês M6 (§S24) e M7 (§S35, §S39 — confirmação via gancho linha 626 de A7). Macro v2 ainda **não conhecia que M8 seria 100% icterícia** (deixou aberto pra "icterícia + sepse/HIV"). Os dossiês posteriores M6 e M7 fecharam essa indeterminação: M8 = icterícia neonatal pura.

### Sobreposições previstas com aulas anteriores

Cross-references esperadas em M8 baseadas em macro v2 + dossiês A1-A7:

| Aula | Tema | Sobreposição esperada com M8 |
|---|---|---|
| M1 §1.5 | IgM/IgG | Reusado em incompatibilidade ABO (IgG materna anti-A/anti-B atravessa placenta). Cross-link **obrigatório**. |
| M1 §1.4 / §1.11 | Caso João Eucalipto (PIG + sífilis) | Sífilis congênita aparece **na própria aula 8** linha 296-299 ("está icterica, tem pênfigo, tem hepatomegalia, tem rinite — sífilis congênita; volte uma semana"). Cross-link M8 → M1 §1.6-1.9 **obrigatório**. |
| M2 (TORCH) | Toxoplasmose, CMV, rubéola, varicela | Causas de icterícia colestática neonatal — fazem DDx com atresia vias biliares. Cross-link M8 → M2 §2.2-2.5 quando colestase for desenvolvida. |
| M3 §3.9 / §3.10 | Reanimação <34 sem + banhado em mecônio | Asfixia perinatal pode dar icterícia indireta (hemólise + EHI hepática). Aula 8 menciona "asfixia" como fator de risco encefalopatia bilirrubínica (linha 1121). Cross-link M8 → M3. |
| M3 (geral) | Reanimação | Caso Eusébio (M8) é hipocorado + ictérico, pode necessitar conduta semelhante a M3 — cross-link conceitual. |
| M4 §4.4-4.5 | Coraçãozinho + circulação fetal | Pouca sobreposição direta. |
| M4 §4.8 | IRDA-2 (hiperbilirrubinemia com exsanguíneo) | **Cross-link bidirecional crítico** — M4 §4.8 cita exsanguineotransfusão como fator IRDA-2; M8 desenvolve indicações exsanguineotransfusão. M4 vira "introdução"; M8 vira "fonte canônica". Padrão idêntico ao M4 §4.7-4.8 → M5 aprofundamento. |
| M5 §5.4 / §5.5 | IRDA-1 (TORCHES) | Toxoplasmose / CMV congênitos são causas de colestase + hiperbilirrubinemia mista. Cross-link M8 → M5. |
| M5 §5.6 | APGAR + anóxia grave (IRDA-2) | APGAR como critério já existe em M5; **M8 deve aprofundar** APGAR completo ou referenciar (gap macro v2 §6.2 ainda parcialmente aberto). |
| M6 | Sepse precoce | Sepse pode dar icterícia colestática como sinal sistêmico — cross-link DDx. Macro M6 §6.8 já lista "icterícia" como manifestação sepse. |
| M6 (geral) | "Bebezinho que está ictérico" promessa M6 não cumprida | Gancho retroativo M6 → M8 fecha promessa. |
| M7 §7.13 | Caso João da Elvira Maria + gancho M8 (linhas 1344-1352) | **Cross-link bidirecional principal entrada** — M8 abre com retomada do gancho. M7 →M8 já existe; M8 → M7 é gerado quando Didata trabalhar abertura M8. |
| M7 §7.7 / Q4 (linha 848-850) | Impregnação meconial vs icterícia precoce (V/F distractor D) | M7 menciona "Icterícia precoce nas primeiras 24 h de vida" + "(hiperbilirrubinemia, tema de M8) — não tem relação com impregnação meconial" — cross-link M7 →M8 explícito como sinalização. |

**Estimativa cross-links totais M8 (preliminar)**: ~10-13 cross-links bidirecionais (similar ao M5 e M7). Padrão fonte-canônica: M8 vira canônico pra Kramer, Coombs, fototerapia, exsanguineotransfusão, Bhutani, AAP, atresia vias biliares + Kasai, icterícia do leite materno vs aleitamento, encefalopatia bilirrubínica/kernicterus.

### Contradições internas sinalizadas (S01-S46) que afetam M8

Revisão das sinalizações S01-S46 (macro v2 + dossiês A1-A7) — quais podem ser invocadas em M8:

| Sinalização | Estado | Relação com M8 |
|---|---|---|
| **S08** (APGAR gap parcial — definição completa pendente) | Parcial M5 §5.6 | M8 menciona APGAR como critério de risco encefalopatia, mas **NÃO é a fonte canônica do APGAR completo**. Bauer ratifica se M8 aprofunda APGAR ou se fica pra bônus. Default sugerido: M8 NÃO desenvolve APGAR completo (já está parcial em M5 §5.6 + Caso Eusébio M8 não exige). |
| **S17** (errata retroativa M2 §2.7 — STORCH+Z reclassificação 2025) | Decisão Bauer pendente | M8 deve **referenciar M5 §5.5** (não M2 §2.7) ao mencionar TORCHES como causa de icterícia colestática — usa a versão atualizada (IRDA-1 + colestase). |
| **S35** (M8 = icterícia confirmada via gancho A7 linha 626) | Default aplicado | Confirmado. Nada a fazer. |
| **S39** (promessa MED M7 não cumprida — M8 abre com retomada) | Default aplicado | Didata abre M8 §8.1 com retomada do gancho "bebezinho que está ictérico" + Caso Eusébio. |
| **S46** (HDC não desenvolvida em M7) | Default aplicado | Não aplicável a M8 — HDC continua em M3 §3.11. |
| **S24** (M6 slug "-icterica" como rótulo série) | Default aplicado | M8 vira "parte 3 de 3" da série dispneia-icterica (ou só "icterícia neonatal" autônoma). Bauer decide rótulo final. |

**Nenhuma contradição direta** que impeça M8 entrar no pipeline. Apenas decisões cosméticas (rótulo card hub V2) e referenciais (M8 cita M5 §5.5 não M2 §2.7).

### Sugestões pedagógicas específicas pra M8 (extraídas da macro v2)

- **Anti-redundância forte** com M4 §4.8 (exsanguineotransfusão IRDA-2): M8 vira fonte canônica, M4 §4.8 fica como introdução. Badge no topo M8 estilo M5: "Você já viu menção em M4 §4.8; aqui vamos aprofundar."
- **Caso paradigmático Caso Eusébio Foucault**: ancorar M8 inteira no Caso Eusébio (RN 18h, mãe O RH negativo multípara sem pré-natal, palidez + icterícia + esplenomegalia). Padrão idêntico ao Caso Firmindo (M6), Caso João da Elvira Maria (M7), Caso João Eucalipto (M1+M3+M5), Caso Lucrécia (M2). Caixinha lateral persistente `.caso-paradigma-aside`.
- **Sub-temas da transcrição** (mapeamento preliminar — Roteirizador detalhará):
  1. Apresentação Caso Eusébio
  2. Definição icterícia + neurotoxicidade BI
  3. Mecanismos fisiológicos da icterícia neonatal (produção alta + captação/conjugação imatura + ciclo entero-hepático)
  4. Critérios pra suspeitar não-fisiológica (5 critérios: precoce / BT>12 / persistente >2sem / BD>1 / manifestações associadas)
  5. Avaliação clínica + Kramer (zona 3 = "passou do umbigo, sinal de perigo")
  6. Icterícia precoce → doença hemolítica
  7. Incompatibilidade Rh (forma grave, Coombs indireto materno + direto RN)
  8. Incompatibilidade ABO (forma frequente, mãe O + RN A/B, IgG anti-A/B, Coombs direto pode negativar — eluato + esferócitos)
  9. Outras hemólises (esferocitose hereditária, G6PD)
  10. Icterícia persistente por aumento BI: icterícia do leite materno (autolimitada, diagnóstico exclusão) vs icterícia do aleitamento (criança mal alimentada, perda peso, ciclo entero-hepático aumentado)
  11. Icterícia por aumento BD = colestase neonatal (BD>1) — atresia de vias biliares como urgência (cirurgia Kasai até 2 meses ideal, transplante após 4 meses)
  12. Tratamento — fototerapia (gráfico AAP por baixo/médio/alto risco)
  13. Nomograma de Bhutani (zona alto risco = foto pela SBP)
  14. Exsanguineotransfusão (indicações: bilirrubina não cai com foto / sangue de cordão BT>4 ou Hb<12 / sinais encefalopatia bilirrubínica)
  15. Resolução Caso Eusébio (icterícia precoce → anemia hemolítica isoimune → incompatibilidade ABO ou Rh — depende tipo sanguíneo bebê → fototerapia já indicada antes do diagnóstico definitivo)

  **Estimativa páginas M8** (preliminar): 12-14 páginas, similar a M3/M5/M7. Roteirizador define namespace `#/p2-m8-p{1..N}`.

- **Imagens médicas reais obrigatórias** (regra inviolável Bauer): RN com icterícia (zonas Kramer), gráfico AAP por idade gestacional/risco, nomograma Bhutani, ultrassom sinal cordão triangular (atresia vias biliares), esfregaço sangue periférico com esferócitos, esfregaço com corpúsculos de Heinz (G6PD), histopatologia biópsia hepática com plugs de bile (atresia). SVG só fallback.

- **Pegadinhas de prova** mapeadas (`[PEGADINHA-PROVA]`): mãe O com RN AB → impossível incompatibilidade ABO (linha 521); Coombs direto pode negativar em ABO mas eluato positivo (linhas 575-583); esferócito + Coombs direto positivo = ABO (esferocitose tem Coombs neg) — fluxo decisório (linhas 685-707); icterícia leite materno (autolimitada, NÃO suspende amamentação hoje em dia — linha 783) vs icterícia aleitamento (mal alimentada, pode precisar foto); atresia vias biliares pode ter primeira semana fisiológica + segunda semana colestase (linhas 904-913); Kasai >4 meses = inútil, indicar transplante direto (linha 970-974).

---

## Cross-references M7 → M8 (gancho)

### Localização e qualidade do gancho

**Gancho M7 → M8 EXISTE, é EXPLÍCITO e ROBUSTO.** Três ocorrências:

1. **Prompt-final-aula7.md §7.13 corpo (linha 1344-1352)**:
   ```
   ### Gancho M8 — icterícia neonatal
   Então, ó... chega de respirar.
   E bora começar a falar daquele bebezinho que está **ictérico**.
   > **Próximo: M8 — Icterícia neonatal**. Outro bebezinho, outra doença,
   > outro raciocínio diferencial. Fecha promessa aberta em M6 (linha 10
   > do roteiro M6, ratificada em M7 item [202]). Espera-se conteúdo:
   > zonas de Kramer + Coombs + fototerapia + exsanguineotransfusão +
   > kernicterus + ABO/Rh.
   10 minutos de intervalo. Suficiente pra aquele café, pra aquela água.
   (E volta que tem M8 esperando.)
   ```

2. **Prompt-final-aula7.md §7.13 "Conexão com a próxima página" (linha 1382)**:
   ```
   **Próxima**: icterícia neonatal — bebê amarelo. M8.
   ```

3. **Prompt-final-aula7.md Q4 do quiz integrador SAM (linhas 848-850)**:
   Distractor D "Icterícia precoce nas primeiras 24 h de vida" usado pra ensinar diferenciação impregnação meconial vs hiperbilirrubinemia, com nota explícita "(hiperbilirrubinemia, tema de M8)".

### Coerência do gancho com a transcrição de M8

**ALTA.** O escopo previsto pelo Didata em M7 §7.13 ("zonas de Kramer + Coombs + fototerapia + exsanguineotransfusão + kernicterus + ABO/Rh") **bate 100%** com o conteúdo real da transcrição M8:

| Tópico previsto M7 §7.13 | Confirmado na transcrição A8? |
|---|---|
| Zonas de Kramer | SIM — linhas 341-380 |
| Coombs (direto/indireto, ABO/Rh) | SIM — linhas 458-595 |
| Fototerapia | SIM — linhas 1012-1336 (gráfico AAP + indicações) |
| Exsanguineotransfusão | SIM — linhas 1307-1391 |
| Kernicterus (encefalopatia bilirrubínica) | SIM — linhas 71-74, 1004-1010, 1387-1391 |
| ABO / Rh | SIM — linhas 421-595 (extensivo) |

**Bônus que M7 §7.13 NÃO previu mas a transcrição traz**:
- Nomograma de Bhutani (linhas 1199-1300)
- Esferocitose hereditária + G6PD (linhas 612-642)
- Icterícia do leite materno vs icterícia do aleitamento (linhas 760-855)
- Colestase neonatal + atresia vias biliares + Kasai (linhas 859-979)
- Mecanismos fisiológicos icterícia neonatal (linhas 84-185 — denso)
- Caso Eusébio Foucault como caso paradigmático (linhas 7-50, retomado linha 1394+)

**Veredito gancho**: gancho M7→M8 é íntegro, didático, contextualizado e cobre os 6 marcadores principais. M8 traz +6 sub-temas além do anunciado — saudável, abre espaço pro Roteirizador-bauer trabalhar densidade alta (estimado 12-14 páginas).

### Reverso M8 → M7 (a ser implementado pelo Didata)

Quando M8 entrar pelo pipeline, Didata implementa M8 → M7 reverso:
- Em M8 §8.1 (abertura): retomada Caso Eusébio com nota "fechamos M7 com o bebê ictérico esperando — aqui ele é o Eusébio" + cross-link `#/p2-m7-p13`.
- Em M8 §8.X (manifestações associadas como pista de não-fisiológica): cross-link a M1 §1.6-1.9 (sífilis com icterícia + pênfigo + hepatomegalia).
- Em M8 §8.X (colestase + TORCHES): cross-link a M2 §2.2-2.5 + M5 §5.5 (TORCHES reclassificação 2025 — usar M5 §5.5 como canônico, não M2 §2.7 enquanto S17 não ratificada).
- Em M8 §8.X (exsanguineotransfusão / fatores risco IRDA-2): cross-link a M4 §4.8 + M5 §5.6.

---

## Recomendação pipeline

### Calibrador MICRO necessário antes do Roteirizador?

**NÃO bloqueante.** Roteirizador-bauer pode entrar **direto** com macro v2 + dossiês A6/A7 + transcrição A8 + gancho M7→M8 como insumos. Calibrador MICRO **roda em paralelo** (não bloqueia Roteirizador) — padrão usado em M6 e M7. Justificativa:

1. **Transcrição íntegra e coerente** — Roteirizador tem matéria-prima 100% pronta pra marcar itens.
2. **Macro v2 já antecipa M8 estruturalmente** (gap aberto, namespace previsto, hub V2 com placeholder).
3. **Dossiês A6 e A7 já fecharam o escopo** — M8 = icterícia neonatal pura (S24, S35, S39).
4. **Gancho M7→M8 é robusto** — escopo previsto pelo Didata bate 100% com a transcrição real.
5. **Sobreposições e cross-references já mapeadas** acima (10-13 cross-links estimados).
6. **Calibrador MICRO leve em paralelo** — produz `dossie-calibracao-aula8.md` com: lista VFP a confirmar, divergências aula × diretriz oficial pra Especificador, mapeamento detalhado dos blocos macro 1-15 da transcrição, anti-redundância M4 §4.8 / M5 §5.6 / M2 (TORCH-colestase). Entrega antes de Especificador rodar.

### Próxima etapa recomendada

**Roteirizador-bauer entra direto em M8** com:
- Insumo principal: `transcricoes/aula3-modulo2-ictericia-neonatal.txt`
- Insumos contextuais: `calibracao/calibracao-macro-oficial-v2.md`, `calibracao/dossie-calibracao-aula7.md` (sobretudo S35, S39, S46), `prompts-finais/prompt-final-aula7.md` §7.13 (gancho), `prompts-finais/prompt-final-aula6.md` (anti-redundância sepse → icterícia)
- Convenções herdadas: namespace `#/p2-m8-p{1..N}`, chassi Opção C (herdado M7), tokens (`--neonato-primary` + semânticos + `--color-info-500`), caixinha lateral `.caso-paradigma-aside` (Caso Eusébio Foucault), anti-metalinguagem v1.2, regra imagens reais médicas, fonte canônica (M8 vira canônica pra Kramer/Bhutani/fototerapia AAP/Kasai/icterícia leite materno/exsanguineotransfusão), badge anti-redundância no topo (M4 §4.8 → M8).
- Saída esperada: `roteiros/roteiro-aula8.md` com 12-14 páginas mapeadas + ganchos a M1/M2/M3/M4/M5/M6/M7.

**Calibrador MICRO em paralelo** (não bloqueante):
- Saída esperada: `calibracao/dossie-calibracao-aula8.md` com VFP candidatos + sinalizações S47+ + mapeamento blocos macro 1-15 + anti-redundância mapeada + decisão APGAR (aprofunda em M8 ou referencia M5 §5.6).

**Sequência completa M8** (replicando M6 e M7):
1. Roteirizador-bauer → `roteiros/roteiro-aula8.md` (12-14 páginas)
2. (Paralelo) Calibrador MICRO → `calibracao/dossie-calibracao-aula8.md`
3. Especificador-bauer → especificação técnica por página + VFP validados + laudo dual onde necessário
4. Didata-bauer → conteúdo didático por página (texto autoral + briefs V/B + quizzes + checagem Bauer)
5. Executor-bauer → implementação HTML/CSS/JS dos 12-14 endpoints
6. (Paralelo) Ilustrador-bauer → componentes visuais reusáveis (gráfico AAP, nomograma Bhutani, esferócito, sinal cordão triangular USG)
7. G1/G2/G3/G4 — validação Playwright (análoga preventiva-2 46/46) cobrindo cross-links M8 ↔ M1/M2/M3/M4/M5/M6/M7
8. Atualização hub V2 (card M8 ativo, placeholder M9-M12 mantido)
9. Commit + push GitHub

### Bloqueios / pendências pré-M8

**Nenhum bloqueador.** Pendências contextuais (não bloqueantes pra M8):
- S17 (errata M2 §2.7 TORCHES) — Bauer decide. Independente de M8, mas M8 vai referenciar M5 §5.5 (não M2 §2.7) enquanto S17 não ratificada — Roteirizador/Didata já sabe.
- S03 (formato laudo dual sífilis) + S23 (nome token info-500) — cosméticos, fora do caminho crítico M8.
- Validação Playwright Parte 1 — pode rodar em paralelo a M8 sem conflito.

### Sinalizações esperadas no MICRO A8 (preview)

Numeração contínua S47+ (último foi S46 em A7):
- **S47** (estrutural): M8 desenvolve APGAR completo ou só referencia M5 §5.6? — default sugerido: **referencia** (caso Eusébio não exige APGAR completo; APGAR completo fica pra bônus M9-M12).
- **S48** (estrutural): atresia de vias biliares como "urgência diagnóstica" merece página própria com fluxograma decisório (Kasai <2 meses / 2-4 meses / >4 meses transplante) ou subseção dentro da página "colestase"? — default sugerido: **página própria** (densidade conceitual + valor prova alto).
- **S49** (cross-link): M8 referencia M2 §2.7 (TORCH-surdez, ainda sem errata 2025) ou M5 §5.5 (TORCHES IRDA-1 atualizado)? — default sugerido: **M5 §5.5** (canônico atualizado).
- **S50** (didática): Caso Eusébio Foucault tem solução parcial na própria aula (linhas 1394-1465) — manter "resolução parcial M8 §8.1" e "resolução completa M8 §8.13" como duas resoluções, ou consolidar uma só ao final? — default sugerido: **abertura M8 §8.1 apresenta + resolução final M8 §8.13 conclui** (padrão Caso João da Elvira Maria em M7).
- **S51** (anti-redundância): M4 §4.8 (exsanguineotransfusão como IRDA-2) — badge no topo M8 da página exsanguineotransfusão: "Você já viu menção em M4 §4.8; aqui é a fonte canônica". Cross-link bidirecional.
- **S52** (atualização normativa): gráfico AAP citado é "antigo" (linhas 1058-1062) — "Não é mais isso que a Academia Americana de Pediatria orienta hoje em dia. Mas ainda é isso que está nos materiais da SBP." Laudo dual ".bauer-revisable" — versão SBP (caí em prova BR) + nota AAP 2022 (versão atual internacional).

Calibrador MICRO confirma/refuta cada sinalização ao rodar.

---

## Próximo passo concreto

Invocar `roteirizador-bauer` em M8 com:
- Transcrição: `/Users/bauervieiracesarfilhovieira/Documents/neonatologia/transcricoes/aula3-modulo2-ictericia-neonatal.txt`
- Macro: `calibracao/calibracao-macro-oficial-v2.md`
- Dossiês contextuais: `calibracao/dossie-calibracao-aula6.md` + `calibracao/dossie-calibracao-aula7.md`
- Gancho M7→M8: `prompts-finais/prompt-final-aula7.md` §7.13 (linhas 1344-1352)
- Anti-metalinguagem v1.2 + regra imagens reais + paleta Bauer + fonte canônica + caixinha caso-paradigma + chassi Opção C — tudo herdado.

Em paralelo: invocar `calibrador-pipeline-bauer` modo MICRO em A8 → `calibracao/dossie-calibracao-aula8.md`.

— Checkup `--read-only` gerado 2026-05-25, antes de ativar pipeline M8.
