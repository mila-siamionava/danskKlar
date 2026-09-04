"use client";

import BackLink from "@/components/navigation/BackLink/BackLink";
import ExerciseHeader from "@/components/exercises/ExerciseHeader/ExerciseHeader";
import ExerciseProgress from "@/components/exercises/ExerciseProgress/ExerciseProgress";

import {
  useEffect,
  useState,
} from "react";

import { shuffle } from "../_lib/arrayUtils";
import { useTrainingProgress } from "../_hooks/useTrainingProgress";

import styles from "./DefinitionWord.module.css";

export default function DefinitionWordClient({
  vocabulary,
}) {
  const [items] = useState(vocabulary);

  const {
    currentIndex,
    finished,
    next,
  } = useTrainingProgress(items.length);

  const [
    selectedAnswer,
    setSelectedAnswer,
  ] = useState(null);

  const [options, setOptions] =
    useState([]);

  const currentItem =
    items[currentIndex];

  const correctAnswer = currentItem
    ? {
        id: currentItem.id,
        term: currentItem.term,
      }
    : null;

  useEffect(() => {
    if (
      !currentItem ||
      !correctAnswer?.term
    ) {
      setOptions([]);
      return;
    }

    const wrongAnswers =
      vocabulary
        .filter(
          (item) =>
            item.id !==
            currentItem.id
        )
        .map((item) => ({
          id: item.id,
          term: item.term,
        }))
        .filter(
          (answer) =>
            answer.term
        );

    const uniqueWrongAnswers =
      wrongAnswers.filter(
        (
          answer,
          index,
          array
        ) =>
          index ===
          array.findIndex(
            (item) =>
              item.term ===
              answer.term
          )
      );

    const selectedWrongAnswers =
      shuffle(
        uniqueWrongAnswers
      ).slice(0, 3);

    setOptions(
      shuffle([
        correctAnswer,
        ...selectedWrongAnswers,
      ])
    );
  }, [
    currentItem,
    correctAnswer?.term,
    vocabulary,
  ]);

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <BackLink
          href="/review/train"
          label="Back to training"
        />

        <h1>Definition → Word</h1>

        <p>
          No vocabulary available.
        </p>
      </main>
    );
  }

  if (finished) {
    return (
      <main className={styles.page}>
        <BackLink
          href="/review/train"
          label="Back to training"
        />

        <div
          className={styles.complete}
        >
          <h1>
            Practice complete
          </h1>

          <p>
            You reviewed{" "}
            {items.length}{" "}
            {items.length === 1
              ? "word"
              : "words"}
            .
          </p>
        </div>
      </main>
    );
  }

  const isAnswered =
    selectedAnswer !== null;

  function isSameAnswer(
    answerA,
    answerB
  ) {
    return (
      answerA?.id ===
      answerB?.id
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
    <main className={styles.page}>
      <BackLink
        href="/review/train"
        label="Back to training"
      />

      <ExerciseHeader
        eyebrow="Definition → Word"
        title="Choose the word that matches the definition"
        current={currentIndex + 1}
        total={items.length}
      />

      <ExerciseProgress
        current={currentIndex + 1}
        total={items.length}
      />

      <section
        className={
          styles.questionCard
        }
      >
        <p
          className={
            styles.questionLabel
          }
        >
          Danish definition
        </p>

        <p
          className={styles.prompt}
        >
          Choose the correct Danish
          word or expression.
        </p>

        <p
          className={
            styles.definition
          }
        >
          {
            currentItem
              .definition_da
          }
        </p>

        <div
          className={styles.options}
        >
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
                key={option.id}
                type="button"
                className={
                  optionClass
                }
                onClick={() =>
                  chooseAnswer(
                    option
                  )
                }
                disabled={
                  isAnswered
                }
              >
                {option.term}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div
            className={
              styles.feedback
            }
          >
            {isSameAnswer(
              selectedAnswer,
              correctAnswer
            ) ? (
              <p
                className={
                  styles.feedbackCorrect
                }
              >
                ✓ Correct
              </p>
            ) : (
              <div
                className={
                  styles.feedbackWrong
                }
              >
                <p>
                  Correct answer:
                </p>

                <strong>
                  {
                    correctAnswer
                      ?.term
                  }
                </strong>
              </div>
            )}

            {currentItem
              .example && (
              <p
                className={
                  styles.example
                }
              >
                {
                  currentItem
                    .example
                }
              </p>
            )}

            <button
              type="button"
              className={
                styles.nextButton
              }
              onClick={
                nextQuestion
              }
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </main>
  );
}