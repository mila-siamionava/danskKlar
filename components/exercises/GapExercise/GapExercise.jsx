"use client";

import { Fragment, useState } from "react";

import ExerciseHeader from "@/components/exercises/ExerciseHeader/ExerciseHeader";
import GapSelect from "@/components/exercises/GapSelect/GapSelect";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import AnswerFeedback from "@/components/exercises/AnswerFeedback/AnswerFeedback";

import styles from "./GapExercise.module.css";

export default function GapExercise({ exercise }) {
  const [answers, setAnswers] = useState({});

  const totalQuestions = exercise.questions.length;

  const answeredCount = Object.keys(answers).length;

  // Score is based ONLY on the first attempt.
  const score = exercise.questions.filter(
    (question) =>
      answers[question.id]?.firstIsCorrect === true
  ).length;

  function handleAnswer(questionId, optionId) {
    const question = exercise.questions.find(
      (item) => item.id === questionId
    );

    if (!question) {
      return;
    }

    setAnswers((previousAnswers) => {
      const previousAnswer =
        previousAnswers[questionId];

      // First attempt
      if (!previousAnswer) {
        return {
          ...previousAnswers,

          [questionId]: {
            selectedOptionId: optionId,
            firstOptionId: optionId,

            firstIsCorrect:
              optionId ===
              question.correctOptionId,
          },
        };
      }

      // The learner changes the answer later.
      // Keep the first attempt unchanged.
      return {
        ...previousAnswers,

        [questionId]: {
          ...previousAnswer,
          selectedOptionId: optionId,
        },
      };
    });
  }

  function renderContent() {
    const parts = exercise.content.split(
      /(\{\{\d+\}\})/
    );

    return parts.map((part, index) => {
      const match = part.match(
        /\{\{(\d+)\}\}/
      );

      if (!match) {
        return (
          <Fragment key={index}>
            {part}
          </Fragment>
        );
      }

      const questionId = Number(
        match[1]
      );

      const question =
        exercise.questions.find(
          (item) =>
            item.id === questionId
        );

      if (!question) {
        return (
          <Fragment key={index}>
            {part}
          </Fragment>
        );
      }

      const answer =
        answers[questionId];

      const selectedOptionId =
        answer?.selectedOptionId || "";

      return (
        <span
          key={`${questionId}-${index}`}
          className={styles.gapWrapper}
        >
          <GapSelect
            question={question}
            value={selectedOptionId}
            checked={Boolean(
              selectedOptionId
            )}
            onChange={handleAnswer}
          />

          <AnswerFeedback
            question={question}
            selectedOptionId={
              selectedOptionId
            }
          />
        </span>
      );
    });
  }

  return (
    <div className={styles.exercise}>
      <ExerciseHeader
        title={exercise.title}
        level={exercise.level}
        category={exercise.category}
        questionCount={
          totalQuestions
        }
        instructions={
          exercise.instructions
        }
      />

      <ProgressBar
        value={answeredCount}
        max={totalQuestions}
        label={`${answeredCount} of ${totalQuestions} answered`}
      />

      <section className={styles.content}>
        {renderContent()}
      </section>

      {answeredCount ===
        totalQuestions && (
        <section
          className={styles.result}
          aria-live="polite"
        >
          <div>
            <p
              className={
                styles.resultLabel
              }
            >
              Exercise complete
            </p>

            <p
              className={
                styles.resultScore
              }
            >
              {score} of{" "}
              {totalQuestions} correct
              on the first attempt
            </p>
          </div>

          <p
            className={
              styles.resultPercentage
            }
          >
            {Math.round(
              (score /
                totalQuestions) *
                100
            )}
            %
          </p>
        </section>
      )}
    </div>
  );
}