// Quiz universal — persistência localStorage namespace neonato-p1-m4
// Suporta: MCQ (botões com data-correct), V-F (botões V/F), Lacuna (input + reveal)
// Acessibilidade: ARIA radiogroup, navegação por setas, feedback aria-live

(function () {
  'use strict';

  const NS = 'neonato-p1-m4.quiz.';

  function loadState(quizId) {
    try {
      const raw = localStorage.getItem(NS + quizId);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function saveState(quizId, state) {
    try { localStorage.setItem(NS + quizId, JSON.stringify(state)); }
    catch (e) { /* quota */ }
  }

  function revealMCQ(question, chosenBtn) {
    question.dataset.revealed = 'true';
    const fb = question.querySelector('.quiz__feedback');
    if (!fb) return;
    fb.hidden = false;
    const verdict = fb.querySelector('.quiz__verdict');
    const correct = chosenBtn.dataset.correct === 'true';
    if (verdict) {
      verdict.textContent = correct ? 'Correto.' : 'Incorreto.';
      verdict.className = 'quiz__verdict ' + (correct ? 'quiz__verdict--correct' : 'quiz__verdict--wrong');
    }
  }

  function bindMCQ(question, quizId, qIndex, state) {
    const alts = Array.from(question.querySelectorAll('.quiz__alt'));
    // Restaurar
    if (state[qIndex] != null) {
      const chosen = alts[state[qIndex]];
      if (chosen) {
        alts.forEach((a) => a.setAttribute('aria-checked', 'false'));
        chosen.setAttribute('aria-checked', 'true');
        revealMCQ(question, chosen);
      }
    }
    alts.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (question.dataset.revealed === 'true') return;
        alts.forEach((a) => a.setAttribute('aria-checked', 'false'));
        btn.setAttribute('aria-checked', 'true');
        revealMCQ(question, btn);
        state[qIndex] = i;
        saveState(quizId, state);
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowRight' && e.key !== 'ArrowUp' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        const idx = alts.indexOf(btn);
        const next = (e.key === 'ArrowDown' || e.key === 'ArrowRight')
          ? (idx + 1) % alts.length
          : (idx - 1 + alts.length) % alts.length;
        alts[next].focus();
      });
    });
  }

  function bindGap(question, quizId, qIndex, state) {
    const input = question.querySelector('.quiz__gap-input');
    const reveal = question.querySelector('.quiz__gap-reveal');
    const fb = question.querySelector('.quiz__feedback');
    if (!input || !reveal || !fb) return;
    if (state[qIndex] != null) {
      input.value = state[qIndex];
      fb.hidden = false;
      question.dataset.revealed = 'true';
    }
    reveal.addEventListener('click', () => {
      fb.hidden = false;
      question.dataset.revealed = 'true';
      state[qIndex] = input.value;
      saveState(quizId, state);
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        reveal.click();
      }
    });
  }

  function initQuiz(quizEl) {
    const quizId = quizEl.dataset.quizId;
    if (!quizId) return;
    const state = loadState(quizId);
    const questions = Array.from(quizEl.querySelectorAll('.quiz__question'));
    questions.forEach((q, i) => {
      const kind = q.dataset.kind || 'mcq';
      if (kind === 'mcq' || kind === 'vf') bindMCQ(q, quizId, i, state);
      else if (kind === 'gap') bindGap(q, quizId, i, state);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quiz').forEach(initQuiz);
  });
})();
