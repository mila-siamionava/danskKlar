"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import styles from "./DefinitionWord.module.css";

export default function DefinitionWordClient({
  vocabulary,
}) {
  const [items] = useState(vocabulary);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] =
    useState(null);
  const [finished, setFinished] = useState(false);

  const currentItem = items[currentIndex];

  const correctAnswer = currentItem
    ? {
        id: currentItem.id,
        term: currentItem.term,
      }
    : null;

  const options = useMemo(() => {
    if (!currentItem || !correctAnswer?.term) {
      return [];
    }

    const wrongAnswers = vocabulary
      .filter((item) => item.id !== currentItem.id)
      .map((item) => ({
        id: item.id,
        term: item.term,
      }))
      .filter((answer) => answer.term);

    const uniqueWrongAnswers =
      wrongAnswers.filter(
        (answer, index, array) =>
          index ===
          array.findIndex(
            (item) =>
              item.term === answer.term
          )
      );

    const shuffledWrongAnswers = [
      ...uniqueWrongAnswers,
    ].sort(() => Math.random() - 0.5);

    const selectedWrongAnswers =
      shuffledWrongAnswers.slice(0, 3);

    return [
      correctAnswer,
      ...selectedWrongAnswers,
    ].sort(() => Math.random() - 0.5);
  }, [
    currentItem,
    correctAnswer?.term,
    vocabulary,
  ]);

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <h1>Definition → Word</h1>

        <p>No vocabulary available.</p>

        <Link href="/review/train">
          <button
            type="button"
            className={styles.backButton}
          >
            ← Back to training
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
            You reviewed {items.length}{" "}
            {items.length === 1
              ? "word"
              : "words"}.
          </p>

          <Link href="/review/train">
            <button
              type="button"
              className={styles.backButton}
            >
              ← Back to training
            </button>
          </Link>
        </div>
      </main>
    );
  }

  const isAnswered = selectedAnswer !== null;

  function isSameAnswer(answerA, answerB) {
    return answerA?.id === answerB?.id;
  }

  function chooseAnswer(answer) {
    if (isAnswered) {
      return;
    }

    setSelectedAnswer(answer);
  }

  function nextQuestion() {
    setSelectedAnswer(null);

    if (currentIndex === items.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((current) => current + 1);
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>
            Definition → Word
          </span>

          <h1>Choose the expression</h1>
        </div>

        <span className={styles.counter}>
          {currentIndex + 1} / {items.length}
        </span>
      </div>

      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{
            width: `${
              ((currentIndex + 1) /
                items.length) *
              100
            }%`,
          }}
        />
      </div>

      <Link href="/review/train">
        <button
          type="button"
          className={styles.backButton}
        >
          ← Back to training
        </button>
      </Link>
 
      <section className={styles.questionCard}>
        <p className={styles.questionLabel}>
          Danish definition
        </p>
<p className={styles.prompt}>
          Choose the correct Danish word or expression.
        </p>
        <p className={styles.definition}>
          {currentItem.definition_da}
        </p>

       

        <div className={styles.options}>
          {options.map((option) => {
            const isCorrect =
              isSameAnswer(
                option,
                correctAnswer
              );

            const isSelected =
              isSameAnswer(
                option,
                selectedAnswer
              );

            let optionClass = styles.option;

            if (isAnswered && isCorrect) {
              optionClass += ` ${styles.correct}`;
            }

            if (
              isAnswered &&
              isSelected &&
              !isCorrect
            ) {
              optionClass += ` ${styles.wrong}`;
            }

            return (
              <button
                key={option.id}
                type="button"
                className={optionClass}
                onClick={() =>
                  chooseAnswer(option)
                }
                disabled={isAnswered}
              >
                {option.term}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={styles.feedback}>
            {isSameAnswer(
              selectedAnswer,
              correctAnswer
            ) ? (
              <p className={styles.feedbackCorrect}>
                ✓ Correct
              </p>
            ) : (
              <div className={styles.feedbackWrong}>
                <p>Correct answer:</p>

                <strong>
                  {correctAnswer?.term}
                </strong>
              </div>
            )}

            {currentItem.example && (
              <p className={styles.example}>
                {currentItem.example}
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