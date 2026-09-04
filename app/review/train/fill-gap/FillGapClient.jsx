"use client";

import BackLink from "@/components/navigation/BackLink/BackLink";
import ExerciseHeader from "@/components/exercises/ExerciseHeader/ExerciseHeader";
import ExerciseProgress from "@/components/exercises/ExerciseProgress/ExerciseProgress";
import { useEffect, useState } from "react";

import {
  createGapSentence,
  createDoubleGapSentence,
} from "../_lib/sentenceUtils";

import { shuffle } from "../_lib/arrayUtils";
import { useTrainingProgress } from "../_hooks/useTrainingProgress";

import styles from "./FillGap.module.css";

export default function FillGapClient({ vocabulary }) {
  const [items] = useState(() =>
    vocabulary
      .map((item) => {
        if (!item.example) {
          return null;
        }

        const hasDoubleTarget =
          item.example_target_1 &&
          item.example_target_2;

        if (hasDoubleTarget) {
          const trainingSentence =
            createDoubleGapSentence(
              item.example,
              item.example_target_1,
              item.example_target_2
            );

          if (!trainingSentence) {
            return null;
          }

          return {
            ...item,
            targetMode: "double",
            target1: item.example_target_1,
            target2: item.example_target_2,
            trainingSentence,
          };
        }

        const target = item.example_target;

        if (!target) {
          return null;
        }

        const trainingSentence =
          createGapSentence(
            item.example,
            target
          );

        if (!trainingSentence) {
          return null;
        }

        return {
          ...item,
          targetMode: "single",
          target,
          trainingSentence,
        };
      })
      .filter(Boolean)
  );

  const {
    currentIndex,
    finished,
    next,
  } = useTrainingProgress(items.length);

  const currentItem = items[currentIndex];

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [selectedAnswer1, setSelectedAnswer1] =
    useState(null);

  const [selectedAnswer2, setSelectedAnswer2] =
    useState(null);

  const [options, setOptions] = useState([]);

  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);

  useEffect(() => {
    if (!currentItem) {
      setOptions([]);
      setOptions1([]);
      setOptions2([]);
      return;
    }

    if (currentItem.targetMode === "single") {
      const correctAnswer =
        currentItem.target.toLowerCase();

      const wrongAnswers = items
        .filter(
          (item) =>
            item.id !== currentItem.id &&
            item.targetMode === "single"
        )
        .map((item) =>
          item.target?.toLowerCase()
        )
        .filter(Boolean)
        .filter(
          (answer) =>
            answer !== correctAnswer
        );

      const uniqueWrongAnswers = [
        ...new Set(wrongAnswers),
      ];

      const selectedWrongAnswers =
        shuffle(uniqueWrongAnswers).slice(0, 3);

      setOptions(
        shuffle([
          correctAnswer,
          ...selectedWrongAnswers,
        ])
      );

      setOptions1([]);
      setOptions2([]);

      return;
    }

    const correctAnswer1 =
      currentItem.target1.toLowerCase();

    const correctAnswer2 =
      currentItem.target2.toLowerCase();

    const firstTargetOptions = items
      .filter(
        (item) =>
          item.targetMode === "double"
      )
      .map((item) =>
        item.target1?.toLowerCase()
      )
      .filter(Boolean);

    const secondTargetOptions = items
      .filter(
        (item) =>
          item.targetMode === "double"
      )
      .map((item) =>
        item.target2?.toLowerCase()
      )
      .filter(Boolean);

    const uniqueFirstTargets = [
      ...new Set(firstTargetOptions),
    ];

    const uniqueSecondTargets = [
      ...new Set(secondTargetOptions),
    ];

    setOptions1(
      shuffle([
        correctAnswer1,
        ...shuffle(
          uniqueFirstTargets.filter(
            (answer) =>
              answer !== correctAnswer1
          )
        ).slice(0, 3),
      ])
    );

    setOptions2(
      shuffle([
        correctAnswer2,
        ...shuffle(
          uniqueSecondTargets.filter(
            (answer) =>
              answer !== correctAnswer2
          )
        ).slice(0, 3),
      ])
    );

    setOptions([]);
  }, [currentItem, items]);

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <h1>Fill in the gap</h1>

        <p>
          No vocabulary items with usable example
          sentences were found.
        </p>

    <BackLink
  href="/review/train"
  label="Back to training"
/>
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
<BackLink
  href="/review/train"
  label="Back to training"
/>
        </div>
      </main>
    );
  }

  const isDouble =
    currentItem.targetMode === "double";

  const correctAnswer =
    !isDouble
      ? currentItem.target.toLowerCase()
      : "";

  const correctAnswer1 =
    isDouble
      ? currentItem.target1.toLowerCase()
      : "";

  const correctAnswer2 =
    isDouble
      ? currentItem.target2.toLowerCase()
      : "";

  const isSingleAnswered =
    selectedAnswer !== null;

  const isDoubleAnswered =
    selectedAnswer1 !== null &&
    selectedAnswer2 !== null;

  const isAnswered = isDouble
    ? isDoubleAnswered
    : isSingleAnswered;

  const isDoubleCorrect =
    selectedAnswer1 === correctAnswer1 &&
    selectedAnswer2 === correctAnswer2;

  const singleSentenceParts =
    !isDouble
      ? currentItem.trainingSentence.split(
          "{{gap}}"
        )
      : [];

  const doubleSentenceParts =
    isDouble
      ? currentItem.trainingSentence.split(
          /{{gap1}}|{{gap2}}/
        )
      : [];

  function chooseAnswer(answer) {
    if (isSingleAnswered) {
      return;
    }

    setSelectedAnswer(answer);
  }

  function chooseAnswer1(answer) {
    if (selectedAnswer1 !== null) {
      return;
    }

    setSelectedAnswer1(answer);
  }

  function chooseAnswer2(answer) {
    if (selectedAnswer2 !== null) {
      return;
    }

    setSelectedAnswer2(answer);
  }

  function nextQuestion() {
    setSelectedAnswer(null);
    setSelectedAnswer1(null);
    setSelectedAnswer2(null);

    next();
  }

  return (
    <main className={styles.page}>
     <BackLink
  href="/review/train"
  label="Back to training"
/>
      <ExerciseHeader
  eyebrow="Fill the gap"
  title="Choose the expression that fits the sentence"
  current={currentIndex + 1}
  total={items.length}
/>

<ExerciseProgress
  current={currentIndex + 1}
  total={items.length}
/>

      <section className={styles.questionCard}>
        <p className={styles.questionLabel}>
          {isDouble
            ? "Choose the two expressions that complete the sentence."
            : "Choose the word or expression that fits the gap."}
        </p>

        {!isDouble && (
          <p className={styles.sentence}>
            {singleSentenceParts[0]}

            <span className={styles.gap}>
              {isAnswered ? (
                <strong>
                  {correctAnswer}
                </strong>
              ) : (
                ""
              )}
            </span>

            {singleSentenceParts[1]}
          </p>
        )}

        {isDouble && (
          <p className={styles.sentence}>
            {doubleSentenceParts[0]}

            <span className={styles.gap}>
              {isAnswered ? (
                <strong>
                  {correctAnswer1}
                </strong>
              ) : (
                ""
              )}
            </span>

            {doubleSentenceParts[1]}

            <span className={styles.gap}>
              {isAnswered ? (
                <strong>
                  {correctAnswer2}
                </strong>
              ) : (
                ""
              )}
            </span>

            {doubleSentenceParts[2]}
          </p>
        )}

        <div className={styles.hint}>
          {currentItem.english && (
            <p>🇬🇧 {currentItem.english}</p>
          )}

          {currentItem.russian && (
            <p>🇷🇺 {currentItem.russian}</p>
          )}
        </div>

        {!isDouble && (
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
        )}

        {isDouble && (
          <>
            <div className={styles.options}>
              {options1.map((option) => {
                const isCorrect =
                  option ===
                  correctAnswer1;

                const isSelected =
                  option ===
                  selectedAnswer1;

                let optionClass =
                  styles.option;

                if (
                  selectedAnswer1 !==
                    null &&
                  isCorrect
                ) {
                  optionClass += ` ${styles.correct}`;
                }

                if (
                  selectedAnswer1 !==
                    null &&
                  isSelected &&
                  !isCorrect
                ) {
                  optionClass += ` ${styles.wrong}`;
                }

                return (
                  <button
                    key={`first-${option}`}
                    type="button"
                    className={optionClass}
                    onClick={() =>
                      chooseAnswer1(option)
                    }
                    disabled={
                      selectedAnswer1 !==
                      null
                    }
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className={styles.options}>
              {options2.map((option) => {
                const isCorrect =
                  option ===
                  correctAnswer2;

                const isSelected =
                  option ===
                  selectedAnswer2;

                let optionClass =
                  styles.option;

                if (
                  selectedAnswer2 !==
                    null &&
                  isCorrect
                ) {
                  optionClass += ` ${styles.correct}`;
                }

                if (
                  selectedAnswer2 !==
                    null &&
                  isSelected &&
                  !isCorrect
                ) {
                  optionClass += ` ${styles.wrong}`;
                }

                return (
                  <button
                    key={`second-${option}`}
                    type="button"
                    className={optionClass}
                    onClick={() =>
                      chooseAnswer2(option)
                    }
                    disabled={
                      selectedAnswer2 !==
                      null
                    }
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {isAnswered && (
          <div className={styles.feedback}>
            {!isDouble &&
              (selectedAnswer ===
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
              ))}

            {isDouble &&
              (isDoubleCorrect ? (
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
                    {correctAnswer1} ...{" "}
                    {correctAnswer2}
                  </strong>
                </p>
              ))}

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