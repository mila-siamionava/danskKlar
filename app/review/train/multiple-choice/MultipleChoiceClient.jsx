"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { shuffle } from "../_lib/arrayUtils";
import { useTrainingProgress } from "../_hooks/useTrainingProgress";

import styles from "./MultipleChoice.module.css";

export default function MultipleChoiceClient({ vocabulary }) {
  const [items] = useState(vocabulary);
  const { currentIndex, finished, next } = useTrainingProgress(items.length);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentItem = items[currentIndex];

  const correctAnswer = currentItem
    ? {
        definition: currentItem.definition_da,
      }
    : null;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!currentItem || !correctAnswer?.definition) {
      setOptions([]);
      return;
    }

    const wrongAnswers = vocabulary
      .filter((item) => item.id !== currentItem.id)
      .map((item) => ({
        definition: item.definition_da,
      }))
      .filter((answer) => answer.definition);

    const uniqueWrongAnswers = wrongAnswers.filter(
      (answer, index, array) =>
        index ===
        array.findIndex((item) => item.definition === answer.definition),
    );

    const selectedWrongAnswers = shuffle(uniqueWrongAnswers).slice(0, 3);

    setOptions(shuffle([correctAnswer, ...selectedWrongAnswers]));
  }, [currentItem, correctAnswer?.definition, vocabulary]);

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <h1>Multiple choice</h1>

        <p>No vocabulary available.</p>

        <Link href="/review">
          <button type="button" className={styles.backButton}>
            ← Back to words
          </button>
        </Link>
      </main>
    );
  }

  if (finished) {
    return (
      <main className={styles.page}>
        <div className={styles.complete}>
          <h1>Practice complete</h1>

          <p>
            You reviewed {items.length} {items.length === 1 ? "word" : "words"}.
          </p>

          <Link href="/review">
            <button type="button" className={styles.backButton}>
              ← Back to words
            </button>
          </Link>
        </div>
      </main>
    );
  }

  const isAnswered = selectedAnswer !== null;

  function isSameAnswer(answerA, answerB) {
    return answerA?.definition === answerB?.definition;
  }

  function chooseAnswer(answer) {
    if (isAnswered) {
      return;
    }

    setSelectedAnswer(answer);
  }

  function nextQuestion() {
    setSelectedAnswer(null);
    next();
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Multiple choice</span>

          <h1>Review words</h1>
        </div>

        <span className={styles.counter}>
          {currentIndex + 1} / {items.length}
        </span>
      </div>

      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{
            width: `${((currentIndex + 1) / items.length) * 100}%`,
          }}
        />
      </div>

      <Link href="/review">
        <button type="button" className={styles.backButton}>
          ← Back to words
        </button>
      </Link>

      <section className={styles.questionCard}>
        <p className={styles.questionLabel}>Danish</p>

        <p className={styles.prompt}>Choose the correct Danish definition.</p>

        <h2 className={styles.word}>{currentItem.term?.toLowerCase()}</h2>

        <div className={styles.options}>
          {options.map((option) => {
            const isCorrect = isSameAnswer(option, correctAnswer);

            const isSelected = isSameAnswer(option, selectedAnswer);

            let optionClass = styles.option;

            if (isAnswered && isCorrect) {
              optionClass += ` ${styles.correct}`;
            }

            if (isAnswered && isSelected && !isCorrect) {
              optionClass += ` ${styles.wrong}`;
            }

            return (
              <button
                key={option.definition}
                type="button"
                className={optionClass}
                onClick={() => chooseAnswer(option)}
                disabled={isAnswered}
              >
                <span className={styles.optionDefinition}>
                  {option.definition}
                </span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={styles.feedback}>
            {isSameAnswer(selectedAnswer, correctAnswer) ? (
              <p className={styles.feedbackCorrect}>✓ Correct</p>
            ) : (
              <div className={styles.feedbackWrong}>
                <p>Correct answer:</p>

                <strong>{correctAnswer?.definition}</strong>
              </div>
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
