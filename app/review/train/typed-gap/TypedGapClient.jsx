"use client";

import Link from "next/link";
import { useState } from "react";
import {
  createGapSentence,
} from "../_lib/sentenceUtils";
import {
  useTrainingProgress,
} from "../_hooks/useTrainingProgress";
import styles from "./TypedGap.module.css";

export default function TypedGapClient({
  vocabulary,
}) {
  

  const [items] = useState(
    vocabulary
      .map((item) => {
        if (!item.example || !item.term) {
          return null;
        }

        const trainingSentence =
          createGapSentence(
            item.example,
            item.term
          );

        if (!trainingSentence) {
          return null;
        }

        return {
          ...item,
          trainingSentence,
        };
      })
      .filter(Boolean)
  );

 

  const [answer, setAnswer] =
    useState("");

  const [checked, setChecked] =
    useState(false);

const {
  currentIndex,
  finished,
  next,
} = useTrainingProgress(items.length);

  const currentItem =
    items[currentIndex];

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <h1>Type the missing word</h1>

        <p>
          No usable example sentences were found.
        </p>

        <Link href="/review/train">
          ← Back to training
        </Link>
      </main>
    );
  }

  if (finished) {
    return (
      <main className={styles.page}>
        <h1>Practice complete</h1>

        <p>
          You completed {items.length} gaps.
        </p>

        <Link href="/review/train">
          ← Back to training
        </Link>
      </main>
    );
  }

  const correctAnswer =
    currentItem.term.trim().toLowerCase();

  const normalizedAnswer =
    answer.trim().toLowerCase();

  const isCorrect =
    normalizedAnswer === correctAnswer;

  const sentenceParts =
    currentItem.trainingSentence.split(
      "{{gap}}"
    );

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
      <Link href="/review/train">
        <button
          type="button"
          className={styles.backButton}
        >
          ← Back to training
        </button>
      </Link>

      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>
            Typed fill gap
          </span>

          <h1>Type the missing expression</h1>
        </div>

        <span className={styles.counter}>
          {currentIndex + 1} / {items.length}
        </span>
      </div>

      <section className={styles.questionCard}>
        <p className={styles.sentence}>
          {sentenceParts[0]}

          <span className={styles.gap}>
          
          </span>

          {sentenceParts[1]}
        </p>

        <form
          className={styles.form}
          onSubmit={checkAnswer}
        >
          <label
            className={styles.inputLabel}
            htmlFor="typed-answer"
          >
            Your answer
          </label>

          <input
            id="typed-answer"
            className={styles.input}
            value={answer}
            onChange={(event) =>
              setAnswer(event.target.value)
            }
            disabled={checked}
            autoComplete="off"
          />

          {!checked && (
            <button
              type="submit"
              className={styles.checkButton}
            >
              Check
            </button>
          )}
        </form>

        {checked && (
          <div className={styles.feedback}>
            {isCorrect ? (
              <p className={styles.correct}>
                ✓ Correct
              </p>
            ) : (
              <div className={styles.wrong}>
                <p>
                  Correct answer:
                </p>

                <strong>
                  {currentItem.term}
                </strong>
              </div>
            )}

            {currentItem.definition_da && (
              <p className={styles.definition}>
                {currentItem.definition_da}
              </p>
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