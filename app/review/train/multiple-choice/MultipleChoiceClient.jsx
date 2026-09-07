"use client";

import ExerciseQuestionCard from "@/components/exercises/ExerciseQuestionCard/ExerciseQuestionCard";
import ExerciseShell from "@/components/exercises/ExerciseShell/ExerciseShell";
import ExerciseState from "@/components/exercises/ExerciseState/ExerciseState";

import { useEffect, useMemo, useState } from "react";

import { useSelectedReviewItems } from "../_hooks/useSelectedReviewItems";
import { useTrainingProgress } from "../_hooks/useTrainingProgress";
import { shuffle } from "../_lib/arrayUtils";

import styles from "./MultipleChoice.module.css";

export default function MultipleChoiceClient({
  vocabulary,
}) {
  const {
    items,
    isLoading,
  } = useSelectedReviewItems();

  const {
    currentIndex,
    finished,
    next,
  } = useTrainingProgress(items.length);

  const [
    selectedAnswer,
    setSelectedAnswer,
  ] = useState(null);

  const [
    options,
    setOptions,
  ] = useState([]);

  const currentItem =
    items[currentIndex];

  const correctAnswer = useMemo(() => {
    if (
      !currentItem ||
      !currentItem.english
    ) {
      return null;
    }

    return {
      value: currentItem.english,
    };
  }, [currentItem]);

  useEffect(() => {
    if (
      !currentItem ||
      !correctAnswer
    ) {
      setOptions([]);
      return;
    }

    const wrongAnswers =
      vocabulary
        .filter(
          (item) =>
            item.term !==
              currentItem.term &&
            item.english &&
            item.english !==
              correctAnswer.value,
        )
        .map((item) => ({
          value: item.english,
        }));

    const uniqueWrongAnswers =
      wrongAnswers.filter(
        (
          answer,
          index,
          array,
        ) =>
          index ===
          array.findIndex(
            (item) =>
              item.value ===
              answer.value,
          ),
      );

    const selectedWrongAnswers =
      shuffle(
        uniqueWrongAnswers,
      ).slice(0, 3);

    setOptions(
      shuffle([
        correctAnswer,
        ...selectedWrongAnswers,
      ]),
    );
  }, [
    currentItem,
    correctAnswer,
    vocabulary,
  ]);

  if (isLoading) {
    return (
      <main className="mobilePage">
        <ExerciseState
          title="Loading…"
          message="Preparing your exercise."
        />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="mobilePage">
        <ExerciseState
          eyebrow="Multiple choice"
          title="No words selected"
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
          eyebrow="Multiple choice"
          title="Practice complete"
          message={`You reviewed ${
            items.length
          } ${
            items.length === 1
              ? "word"
              : "words"
          }.`}
          actionLabel="Back to training"
          actionHref="/review/train"
        />
      </main>
    );
  }

  const isAnswered =
    selectedAnswer !== null;

  function isSameAnswer(
    answerA,
    answerB,
  ) {
    return (
      answerA?.value ===
      answerB?.value
    );
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
    <ExerciseShell
      eyebrow="Multiple choice"
      title="Choose the correct English translation"
      current={currentIndex + 1}
      total={items.length}
    >
      <ExerciseQuestionCard>
        <h2 className={styles.word}>
          {currentItem.term?.toLowerCase()}
        </h2>

        {correctAnswer ? (
          <div className={styles.options}>
            {options.map(
              (
                option,
                index,
              ) => {
                const isCorrect =
                  isSameAnswer(
                    option,
                    correctAnswer,
                  );

                const isSelected =
                  isSameAnswer(
                    option,
                    selectedAnswer,
                  );

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
                    key={`${option.value}-${index}`}
                    type="button"
                    className={optionClass}
                    onClick={() =>
                      chooseAnswer(option)
                    }
                    disabled={isAnswered}
                  >
                    <span
                      className={
                        styles.optionDefinition
                      }
                    >
                      {option.value}
                    </span>
                  </button>
                );
              },
            )}
          </div>
        ) : (
          <p className={styles.noAnswer}>
            No English translation
            is available for this word.
          </p>
        )}

        {isAnswered && (
          <div className={styles.feedback}>
            {isSameAnswer(
              selectedAnswer,
              correctAnswer,
            ) ? (
              <p className={styles.feedbackCorrect}>
                ✓ Correct
              </p>
            ) : (
              <div className={styles.feedbackWrong}>
                <p>
                  Correct answer:
                </p>

                <strong>
                  {correctAnswer?.value}
                </strong>
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
      </ExerciseQuestionCard>
    </ExerciseShell>
  );
}