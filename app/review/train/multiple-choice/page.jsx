"use client";

import Link from "next/link";

import { useEffect, useMemo, useState } from "react";

import { getReviewItems } from "@/lib/reviewStorage";

import styles from "./MultipleChoice.module.css";

export default function MultipleChoicePage() {
  const [items, setItems] = useState([]);
  const [allReviewItems, setAllReviewItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(
      "danskTrainerSelectedReview"
    );

    if (stored) {
      setItems(JSON.parse(stored));
    }

    setAllReviewItems(getReviewItems());
  }, []);

  const currentItem = items[currentIndex];

  function getTranslation(item) {
    return item?.explanation?.translations?.find(
      (translation) =>
        translation.word?.toLowerCase() ===
        item.term?.toLowerCase()
    );
  }

  const currentTranslation = getTranslation(currentItem);

  const correctAnswer = currentTranslation
    ? {
        english: currentTranslation.english,
        russian: currentTranslation.russian,
      }
    : null;

  const options = useMemo(() => {
    if (!currentItem || !correctAnswer) {
      return [];
    }

    const wrongAnswers = allReviewItems
      .filter((item) => item.id !== currentItem.id)
      .map((item) => {
        const translation = getTranslation(item);

        if (!translation) {
          return null;
        }

        return {
          english: translation.english,
          russian: translation.russian,
        };
      })
      .filter(Boolean);

    const uniqueWrongAnswers = wrongAnswers.filter(
      (answer, index, array) =>
        index ===
        array.findIndex(
          (item) =>
            item.english === answer.english &&
            item.russian === answer.russian
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
    correctAnswer?.english,
    correctAnswer?.russian,
    allReviewItems,
  ]);

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <h1>Multiple choice</h1>

        <p>No words selected.</p>

        <Link href="/review">
          <button
            type="button"
            className={styles.backButton}
          >
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
            You reviewed {items.length}{" "}
            {items.length === 1 ? "word" : "words"}.
          </p>

          <Link href="/review">
            <button
              type="button"
              className={styles.backButton}
            >
              ← Back to words
            </button>
          </Link>
        </div>
      </main>
    );
  }

  const isAnswered = selectedAnswer !== null;

  function isSameAnswer(answerA, answerB) {
    return (
      answerA?.english === answerB?.english &&
      answerA?.russian === answerB?.russian
    );
  }

  function chooseAnswer(answer) {
    if (isAnswered) return;

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
            Multiple choice
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
              ((currentIndex + 1) / items.length) * 100
            }%`,
          }}
        />
      </div>
  <Link href="/review">
          <button
            type="button"
            className={styles.backButton}
          >
            ← Back to words
          </button>
        </Link>
      <section className={styles.questionCard}>
        <p className={styles.questionLabel}>
          Danish
        </p>
 <p className={styles.prompt}>
          Choose the correct translation.
        </p>
        <h2 className={styles.word}>
          {currentItem.term?.toLowerCase()}
        </h2>

               <div className={styles.options}>
          {options.map((option) => {
            const isCorrect =
              isSameAnswer(option, correctAnswer);

            const isSelected =
              isSameAnswer(option, selectedAnswer);

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
                key={`${option.english}-${option.russian}`}
                type="button"
                className={optionClass}
                onClick={() =>
                  chooseAnswer(option)
                }
                disabled={isAnswered}
              >
                <span className={styles.optionEnglish}>
                  {option.english}
                </span>

                <span className={styles.optionRussian}>
                  {option.russian}
                </span>
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
                  {correctAnswer?.english}
                </strong>

                <p>
                  {correctAnswer?.russian}
                </p>
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