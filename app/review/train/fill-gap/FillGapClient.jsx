"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  createGapSentence,
} from "../_lib/sentenceUtils";

import styles from "./FillGap.module.css";

export default function FillGapClient({
  vocabulary,
}) {
  

  const [items] = useState(() =>
  vocabulary
    .map((item) => {
      if (!item.example || !item.term) {
        return null;
      }

      const trainingSentence = createGapSentence(
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

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [finished, setFinished] =
    useState(false);

  const currentItem = items[currentIndex];

  const options = useMemo(() => {
    if (!currentItem) {
      return [];
    }

    const correctAnswer =
      currentItem.term?.toLowerCase();

    const wrongAnswers = items
      .filter(
        (item) =>
          item.id !== currentItem.id
      )
      .map((item) =>
        item.term?.toLowerCase()
      )
      .filter(Boolean)
      .filter(
        (word) =>
          word !== correctAnswer
      );

    const uniqueWrongAnswers = [
      ...new Set(wrongAnswers),
    ];

    const shuffledWrongAnswers = [
      ...uniqueWrongAnswers,
    ].sort(
      () => Math.random() - 0.5
    );

    const selectedWrongAnswers =
      shuffledWrongAnswers.slice(0, 3);

    return [
      correctAnswer,
      ...selectedWrongAnswers,
    ].sort(
      () => Math.random() - 0.5
    );
  }, [currentItem, items]);

  const correctAnswer =
    currentItem?.term?.toLowerCase() || "";

  const isAnswered =
    selectedAnswer !== null;

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
      items.length - 1
    ) {
      setFinished(true);
      return;
    }

    setCurrentIndex(
      (current) => current + 1
    );
  }

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <h1>Fill in the gap</h1>

        <p>
          No vocabulary items with usable example
          sentences were found.
        </p>

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
            You completed {items.length}{" "}
            {items.length === 1
              ? "gap"
              : "gaps"}.
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

  const sentenceParts =
    currentItem.trainingSentence.split(
      "{{gap}}"
    );

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
            Fill in the gap
          </span>

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
            width: `${
              ((currentIndex + 1) /
                items.length) *
              100
            }%`,
          }}
        />
      </div>

      <section className={styles.questionCard}>
        <p className={styles.questionLabel}>
          Choose the word or expression that fits the
          gap.
        </p>

        <p className={styles.sentence}>
          {sentenceParts[0]}

          <span className={styles.gap}>
            {isAnswered ? (
              <strong>
                {correctAnswer}
              </strong>
            ) : (
              ""
            )}
          </span>

          {sentenceParts[1]}
        </p>

        <div className={styles.hint}>
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

        <div className={styles.options}>
          {options.map((option) => {
            const isCorrect =
              option === correctAnswer;

            const isSelected =
              option === selectedAnswer;

            let optionClass =
              styles.option;

            if (
              isAnswered &&
              isCorrect
            ) {
              optionClass +=
                ` ${styles.correct}`;
            }

            if (
              isAnswered &&
              isSelected &&
              !isCorrect
            ) {
              optionClass +=
                ` ${styles.wrong}`;
            }

            return (
              <button
                key={option}
                type="button"
                className={optionClass}
                onClick={() =>
                  chooseAnswer(option)
                }
                disabled={isAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={styles.feedback}>
            {selectedAnswer ===
            correctAnswer ? (
              <p
                className={
                  styles.feedbackCorrect
                }
              >
                ✓ Correct
              </p>
            ) : (
              <p
                className={
                  styles.feedbackWrong
                }
              >
                Correct answer:{" "}
                <strong>
                  {correctAnswer}
                </strong>
              </p>
            )}

            <div
              className={
                styles.explanation
              }
            >
              {currentItem.definition_da && (
                <p>
                  <strong>
                    Definition:
                  </strong>{" "}
                  {
                    currentItem.definition_da
                  }
                </p>
              )}

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