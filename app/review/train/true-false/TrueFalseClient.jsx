"use client";

import ExerciseQuestionCard from "@/components/exercises/ExerciseQuestionCard/ExerciseQuestionCard";
import ExerciseShell from "@/components/exercises/ExerciseShell/ExerciseShell";
import ExerciseState from "@/components/exercises/ExerciseState/ExerciseState";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useTrainingProgress } from "../_hooks/useTrainingProgress";

import styles from "./TrueFalse.module.css";

export default function TrueFalseClient({
  vocabulary,
}) {
  const usableVocabulary = useMemo(
    () =>
      vocabulary.filter(
        (item) =>
          item.term &&
          item.english,
      ),
    [vocabulary],
  );

  const {
    currentIndex,
    finished,
    next,
  } = useTrainingProgress(
    usableVocabulary.length,
  );

  const [
    selectedAnswer,
    setSelectedAnswer,
  ] = useState(null);

  const [
    statement,
    setStatement,
  ] = useState(null);

  const currentItem =
    usableVocabulary[currentIndex];

  useEffect(() => {
    if (!currentItem) {
      setStatement(null);
      return;
    }

    const shouldBeCorrect =
      Math.random() >= 0.5;

    if (shouldBeCorrect) {
      setStatement({
        english:
          currentItem.english,
        isCorrect: true,
      });

      return;
    }

    const wrongItems =
      usableVocabulary.filter(
        (item) =>
          item.id !==
            currentItem.id &&
          item.english,
      );

    if (wrongItems.length === 0) {
      setStatement({
        english:
          currentItem.english,
        isCorrect: true,
      });

      return;
    }

    const wrongItem =
      wrongItems[
        Math.floor(
          Math.random() *
            wrongItems.length,
        )
      ];

    setStatement({
      english:
        wrongItem.english,
      isCorrect: false,
    });
  }, [
    currentItem,
    usableVocabulary,
  ]);

  if (usableVocabulary.length === 0) {
    return (
      <main className="mobilePage">
        <ExerciseState
          eyebrow="True / False"
          title="No vocabulary available"
          message="Choose some words in Review before starting this exercise."
          actionLabel="Back to training"
          actionHref="/review/train"
        />
      </main>
    );
  }

  if (finished) {
    return (
      <main className="mobilePage">
        <ExerciseState
          eyebrow="True / False"
          title="Practice complete"
          message={`You reviewed ${
            usableVocabulary.length
          } ${
            usableVocabulary.length === 1
              ? "word"
              : "words"
          }.`}
          actionLabel="Back to training"
          actionHref="/review/train"
        />
      </main>
    );
  }

  if (!statement) {
    return null;
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
    setStatement(null);
    next();
  }

  return (
    <ExerciseShell
      eyebrow="True / False"
      title="Is this English meaning correct?"
      current={currentIndex + 1}
      total={usableVocabulary.length}
    >
      <ExerciseQuestionCard>
        <p className={styles.term}>
          {currentItem.term}
        </p>

        <span className={styles.means}>
          means
        </span>

        <div className={styles.translation}>
          <p className={styles.english}>
            {statement.english}
          </p>
        </div>

       <div className={styles.answers}>
  <button
    type="button"
    className={`${styles.answerButton} ${styles.trueButton}`}
    onClick={() =>
      chooseAnswer(true)
    }
    disabled={isAnswered}
  >
    True
  </button>

  <button
    type="button"
    className={`${styles.answerButton} ${styles.falseButton}`}
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

            <div
              className={
                styles.correctMeaning
              }
            >
              <strong>
                Correct meaning:
              </strong>

              <p>
                {currentItem.english}
              </p>
            </div>

            <button
              type="button"
              className={
                styles.nextButton
              }
              onClick={nextQuestion}
            >
              Next →
            </button>
          </div>
        )}
      </ExerciseQuestionCard>
    </ExerciseShell>
  );
}