"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import styles from "./TrueFalse.module.css";

export default function TrueFalseClient({
  vocabulary,
}) {
  const usableVocabulary = useMemo(
    () =>
      vocabulary.filter(
        (item) =>
          item.term &&
          (item.english || item.russian)
      ),
    [vocabulary]
  );

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [finished, setFinished] =
    useState(false);

  const currentItem =
    usableVocabulary[currentIndex];

  const statement = useMemo(() => {
    if (!currentItem) {
      return null;
    }

    const shouldBeCorrect =
      Math.random() >= 0.5;

    if (shouldBeCorrect) {
      return {
        english: currentItem.english,
        russian: currentItem.russian,
        isCorrect: true,
      };
    }

    const wrongItems =
      usableVocabulary.filter(
        (item) =>
          item.id !== currentItem.id &&
          (item.english || item.russian)
      );

    const wrongItem =
      wrongItems[
        Math.floor(
          Math.random() *
            wrongItems.length
        )
      ];

    return {
      english: wrongItem?.english,
      russian: wrongItem?.russian,
      isCorrect: false,
    };
  }, [currentItem, usableVocabulary]);

  if (
    usableVocabulary.length === 0 ||
    !currentItem ||
    !statement
  ) {
    return (
      <main className={styles.page}>
        <h1>True or false</h1>

        <p>
          No vocabulary items available.
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
        <div className={styles.complete}>
          <h1>Practice complete</h1>

          <p>
            You reviewed{" "}
            {usableVocabulary.length} words.
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

  const isAnswered =
    selectedAnswer !== null;

  const isUserCorrect =
    selectedAnswer ===
    statement.isCorrect;

  function chooseAnswer(answer) {
    if (isAnswered) {
      return;
    }

    setSelectedAnswer(answer);
  }

  function nextQuestion() {
    setSelectedAnswer(null);

    if (
      currentIndex ===
      usableVocabulary.length - 1
    ) {
      setFinished(true);
      return;
    }

    setCurrentIndex(
      (current) => current + 1
    );
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
            True or false
          </span>

          <h1>
            Is this meaning correct?
          </h1>
        </div>

        <span className={styles.counter}>
          {currentIndex + 1} /{" "}
          {usableVocabulary.length}
        </span>
      </div>

      <section className={styles.questionCard}>
        <p className={styles.term}>
          {currentItem.term}
        </p>

        <span className={styles.means}>
          means
        </span>

        <div className={styles.translation}>
          {statement.english && (
            <p className={styles.english}>
              🇬🇧 {statement.english}
            </p>
          )}

          {statement.russian && (
            <p className={styles.russian}>
              🇷🇺 {statement.russian}
            </p>
          )}
        </div>

        <div className={styles.answers}>
          <button
            type="button"
            className={styles.answerButton}
            onClick={() =>
              chooseAnswer(true)
            }
            disabled={isAnswered}
          >
            True
          </button>

          <button
            type="button"
            className={styles.answerButton}
            onClick={() =>
              chooseAnswer(false)
            }
            disabled={isAnswered}
          >
            False
          </button>
        </div>

        {isAnswered && (
          <div className={styles.feedback}>
            {isUserCorrect ? (
              <p className={styles.correct}>
                ✓ Correct
              </p>
            ) : (
              <p className={styles.wrong}>
                ✕ Not quite
              </p>
            )}

            <div className={styles.correctMeaning}>
              <strong>
                Correct meaning:
              </strong>

              {currentItem.english && (
                <p>
                  🇬🇧 {currentItem.english}
                </p>
              )}

              {currentItem.russian && (
                <p>
                  🇷🇺 {currentItem.russian}
                </p>
              )}
            </div>

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