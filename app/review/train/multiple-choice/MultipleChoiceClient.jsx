"use client";
import BackLink from "@/components/navigation/BackLink/BackLink";
import ExerciseHeader from "@/components/exercises/ExerciseHeader/ExerciseHeader";
import ExerciseProgress from "@/components/exercises/ExerciseProgress/ExerciseProgress";

import { useMemo, useEffect, useState } from "react";

import { shuffle } from "../_lib/arrayUtils";
import { useSelectedReviewItems } from "../_hooks/useSelectedReviewItems";
import { useTrainingProgress } from "../_hooks/useTrainingProgress";

import styles from "./MultipleChoice.module.css";

const ANSWER_TYPES = {
  definition: {
    label: "Danish definition",
    field: "definition_da",
    prompt: "Choose the correct Danish definition.",
  },

  english: {
    label: "English",
    field: "english",
    prompt: "Choose the correct English translation.",
  },

  russian: {
    label: "Russian",
    field: "russian",
    prompt: "Choose the correct Russian translation.",
  },
};

export default function MultipleChoiceClient({ vocabulary }) {
  const { items, isLoading } = useSelectedReviewItems();

  const { currentIndex, finished, next } = useTrainingProgress(items.length);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [options, setOptions] = useState([]);

  /*
    Only one practice type can be
    selected at a time.
  */
  const [selectedType, setSelectedType] = useState("definition");

  const currentItem = items[currentIndex];

  const answerConfig = ANSWER_TYPES[selectedType];

  const correctAnswer = useMemo(() => {
    if (!currentItem || !answerConfig) {
      return null;
    }

    const value = currentItem[answerConfig.field];

    if (!value) {
      return null;
    }

    return {
      value,
    };
  }, [currentItem, answerConfig]);

  /*
    Build four answer choices:
    one correct answer and
    three wrong options.
  */
  useEffect(() => {
    if (!currentItem || !answerConfig || !correctAnswer) {
      setOptions([]);
      return;
    }

    const field = answerConfig.field;

    const wrongAnswers = vocabulary
      .filter(
        (item) =>
          item.term !== currentItem.term &&
          item[field] &&
          item[field] !== correctAnswer.value,
      )
      .map((item) => ({
        value: item[field],
      }));

    /*
      Remove duplicate answers.
    */
    const uniqueWrongAnswers = wrongAnswers.filter(
      (answer, index, array) =>
        index === array.findIndex((item) => item.value === answer.value),
    );

    const selectedWrongAnswers = shuffle(uniqueWrongAnswers).slice(0, 3);

    setOptions(shuffle([correctAnswer, ...selectedWrongAnswers]));
  }, [currentItem, answerConfig, correctAnswer, vocabulary]);

  if (isLoading) {
    return (
      <main className={styles.page}>
        <p>Loading multiple choice…</p>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <BackLink href="/review/train" label="Back to training" />

        <div className={styles.complete}>
          <h1>Multiple choice</h1>

          <p>No words selected.</p>
        </div>
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

          <BackLink href="/review/train" label="Back to training" />
        </div>
      </main>
    );
  }

  const isAnswered = selectedAnswer !== null;

  function isSameAnswer(answerA, answerB) {
    return answerA?.value === answerB?.value;
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

  function selectType(type) {
    if (type === selectedType) {
      return;
    }

    setSelectedType(type);
    setSelectedAnswer(null);
  }

  return (
    <main className={styles.page}>
      <BackLink href="/review/train" label="Back to training" />

      {/* HEADER */}

      <ExerciseHeader
        eyebrow="Multiple choice"
        title="Choose the correct meaning"
        current={currentIndex + 1}
        total={items.length}
      />

      {/* PROGRESS */}

      <ExerciseProgress current={currentIndex + 1} total={items.length} />
      {/* PRACTICE TYPE */}

      <div className={styles.practiceCard}>
        <span className={styles.filterLabel}>Practice</span>

        <div className={styles.filterOptions}>
          <label
            className={`${styles.filterOption} ${
              selectedType === "definition"
                ? styles.filterSelected
                : styles.filterFaded
            }`}
          >
            <input
              type="radio"
              name="practiceType"
              value="definition"
              checked={selectedType === "definition"}
              onChange={() => selectType("definition")}
            />

            <span>Danish definition</span>
          </label>

          <label
            className={`${styles.filterOption} ${
              selectedType === "english"
                ? styles.filterSelected
                : styles.filterFaded
            }`}
          >
            <input
              type="radio"
              name="practiceType"
              value="english"
              checked={selectedType === "english"}
              onChange={() => selectType("english")}
            />

            <span>English</span>
          </label>

          <label
            className={`${styles.filterOption} ${
              selectedType === "russian"
                ? styles.filterSelected
                : styles.filterFaded
            }`}
          >
            <input
              type="radio"
              name="practiceType"
              value="russian"
              checked={selectedType === "russian"}
              onChange={() => selectType("russian")}
            />

            <span>Russian</span>
          </label>
        </div>
      </div>

      {/* QUESTION */}

      <section className={styles.questionCard}>
        <div className={styles.questionTop}>
          <span className={styles.questionLabel}>Danish</span>

          {currentItem.part_of_speech && (
            <span className={styles.partOfSpeech}>
              {currentItem.part_of_speech}
            </span>
          )}
        </div>

        <h2 className={styles.word}>{currentItem.term?.toLowerCase()}</h2>

        <p className={styles.prompt}>{answerConfig.prompt}</p>

        {/* ANSWERS */}

        {correctAnswer ? (
          <div className={styles.options}>
            {options.map((option, index) => {
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
                  key={`${option.value}-${index}`}
                  type="button"
                  className={optionClass}
                  onClick={() => chooseAnswer(option)}
                  disabled={isAnswered}
                >
                  <span className={styles.optionDefinition}>
                    {option.value}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <p className={styles.noAnswer}>
            No {answerConfig.label.toLowerCase()} is available for this word.
          </p>
        )}

        {/* FEEDBACK */}

        {isAnswered && (
          <div className={styles.feedback}>
            {isSameAnswer(selectedAnswer, correctAnswer) ? (
              <p className={styles.feedbackCorrect}>✓ Correct</p>
            ) : (
              <div className={styles.feedbackWrong}>
                <p>Correct {answerConfig.label}:</p>

                <strong>{correctAnswer?.value}</strong>
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
