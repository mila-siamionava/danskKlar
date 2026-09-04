"use client";

import BackLink from "@/components/navigation/BackLink/BackLink";
import ExerciseHeader from "@/components/exercises/ExerciseHeader/ExerciseHeader";
import ExerciseProgress from "@/components/exercises/ExerciseProgress/ExerciseProgress";

import { useState } from "react";

import { createGapSentence } from "../_lib/sentenceUtils";
import { useTrainingProgress } from "../_hooks/useTrainingProgress";

import styles from "./FirstLetter.module.css";

export default function FirstLetterClient({ vocabulary }) {
  function createLetterHint(target) {
    return target
      .trim()
      .split(/\s+/)
      .map((word) => {
        if (word.length <= 1) {
          return word;
        }

        return `${word[0]}${"_".repeat(word.length - 1)}`;
      });
  }

  const [items] = useState(() =>
    vocabulary
      .map((item) => {
        if (!item.example) {
          return null;
        }

        const target = item.example_target;

        if (!target) {
          return null;
        }

        const trainingSentence = createGapSentence(item.example, target);

        if (!trainingSentence) {
          return null;
        }

        return {
          ...item,
          target,
          trainingSentence,
        };
      })
      .filter(Boolean),
  );

  const { currentIndex, finished, next } = useTrainingProgress(items.length);

  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);

  const currentItem = items[currentIndex];

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <h1>First-letter hint</h1>

        <p>No usable example sentences were found.</p>

        <BackLink href="/review/train" label="Back to training" />
      </main>
    );
  }

  if (finished) {
    return (
      <main className={styles.page}>
        <h1>Practice complete</h1>

        <p>
          You completed {items.length} {items.length === 1 ? "gap" : "gaps"}.
        </p>

        <BackLink href="/review/train" label="Back to training" />
      </main>
    );
  }

  const correctAnswer = currentItem.target.trim().toLowerCase();

  const letterHint = createLetterHint(currentItem.target);

  const normalizedAnswer = answer.trim().toLowerCase();

  const isCorrect = normalizedAnswer === correctAnswer;

  const sentenceParts = currentItem.trainingSentence.split("{{gap}}");

  function checkAnswer(event) {
    event.preventDefault();

    if (!answer.trim()) {
      return;
    }

    setChecked(true);
  }

  function nextQuestion() {
    setAnswer("");
    setChecked(false);
    next();
  }

  return (
    <main className={styles.page}>
      <BackLink href="/review/train" label="Back to training" />

      <ExerciseHeader
        eyebrow="First-letter hint"
        title="Complete the expression using the hint"
        current={currentIndex + 1}
        total={items.length}
      />

      <ExerciseProgress current={currentIndex + 1} total={items.length} />
      <section className={styles.questionCard}>
        <p className={styles.sentence}>
          {sentenceParts[0]}

          <span className={styles.gap}>
            {letterHint.map((word, index) => (
              <span key={`${word}-${index}`} className={styles.hintWord}>
                {word}
              </span>
            ))}
          </span>

          {sentenceParts[1]}
        </p>

        <form className={styles.form} onSubmit={checkAnswer}>
          <label className={styles.inputLabel} htmlFor="first-letter-answer">
            Your answer
          </label>

          <input
            id="first-letter-answer"
            className={styles.input}
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            disabled={checked}
            autoComplete="off"
          />

          {!checked && (
            <button type="submit" className={styles.checkButton}>
              Check
            </button>
          )}
        </form>

        {checked && (
          <div className={styles.feedback}>
            {isCorrect ? (
              <p className={styles.correct}>✓ Correct</p>
            ) : (
              <div className={styles.wrong}>
                <p>Correct answer:</p>

                <strong>{currentItem.target}</strong>
              </div>
            )}

            {currentItem.definition_da && (
              <p className={styles.definition}>{currentItem.definition_da}</p>
            )}

            <button
              type="button"
              className={styles.nextButton}
              onClick={nextQuestion}
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
