"use client";

import Link from "next/link";
import { Fragment, useState } from "react";

import ExerciseHeader from "@/components/exercises/ExerciseHeader/ExerciseHeader";
import GapSelect from "@/components/exercises/GapSelect/GapSelect";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import AnswerFeedback from "@/components/exercises/AnswerFeedback/AnswerFeedback";
import Button from "@/components/ui/Button/Button";

import { addReviewItem } from "@/lib/reviewStorage";

import styles from "./GapExercise.module.css";

export default function GapExercise({ exercise }) {
  const [answers, setAnswers] = useState({});

  const totalQuestions = exercise.questions.length;
  const answeredCount = Object.keys(answers).length;

  const score = exercise.questions.filter(
    (question) =>
      answers[question.id]?.firstIsCorrect === true
  ).length;

  function getGapContext(questionId) {
    const placeholder = `{{${questionId}}}`;

    const paragraphs = exercise.content
      .split("\n")
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    const paragraph = paragraphs.find((paragraph) =>
      paragraph.includes(placeholder)
    );

    if (!paragraph) {
      return "";
    }

    return paragraph.replace(
      placeholder,
      "{{gap}}"
    );
  }

  function handleAnswer(questionId, optionId) {
    const question = exercise.questions.find(
      (item) => item.id === questionId
    );

    if (!question) {
      return;
    }

    const previousAnswer = answers[questionId];
    const isFirstAttempt = !previousAnswer;

    const isCorrect =
      optionId === question.correctOptionId;

    if (isFirstAttempt && !isCorrect) {
      const translations =
        question.explanation?.translations || [];

      const gapContext =
        getGapContext(question.id);

      const originalCorrectAnswer =
        question.options
          .find(
            (option) =>
              option.id ===
              question.correctOptionId
          )
          ?.text?.toLowerCase() || "";

      if (translations.length > 0) {
        translations.forEach((translation, index) => {
          addReviewItem({
            id: `${exercise.title}-${question.id}-${index}-${translation.word}`,
            exerciseTitle: exercise.title,
            questionId: question.id,
            term:
              translation.word?.toLowerCase() || "",
            english:
              translation.english || "",
            russian:
              translation.russian || "",
            gapSentence: gapContext,
            originalCorrectAnswer,
            options: question.options,
            correctOptionId:
              question.correctOptionId,
            explanation:
              question.explanation,
          });
        });
      } else {
        const correctOption = question.options.find(
          (option) =>
            option.id ===
            question.correctOptionId
        );

        addReviewItem({
          id: `${exercise.title}-${question.id}`,
          exerciseTitle: exercise.title,
          questionId: question.id,
          term:
            correctOption?.text?.toLowerCase() || "",
          english: "",
          russian: "",
          gapSentence: gapContext,
          originalCorrectAnswer,
          options: question.options,
          correctOptionId:
            question.correctOptionId,
          explanation:
            question.explanation,
        });
      }
    }

    setAnswers((previousAnswers) => {
      const previousAnswer =
        previousAnswers[questionId];

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

      const questionId = Number(match[1]);

      const question = exercise.questions.find(
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

      const answer = answers[questionId];

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
            checked={Boolean(selectedOptionId)}
            onChange={handleAnswer}
          />

          <AnswerFeedback
            question={question}
            selectedOptionId={selectedOptionId}
          />
        </span>
      );
    });
  }

  return (
    <div className={styles.exercise}>
     <ExerciseHeader
  title={exercise.title}
  instructions={exercise.instructions}
/>

      <ProgressBar
        value={answeredCount}
        max={totalQuestions}
        label={`${answeredCount} of ${totalQuestions} answered`}
      />

      <section className={styles.content}>
        {renderContent()}
      </section>

      {answeredCount === totalQuestions && (
        <>
          <section
            className={styles.result}
            aria-live="polite"
          >
            <div>
              <p className={styles.resultLabel}>
                Exercise complete
              </p>

              <p className={styles.resultScore}>
                {score} of {totalQuestions} correct on the first attempt
              </p>
            </div>

            <p className={styles.resultPercentage}>
              {Math.round(
                (score / totalQuestions) * 100
              )}
              %
            </p>
          </section>

          <div className={styles.reviewActions}>
            <Link href="/review">
              <Button variant="secondary" size="md">
                Review wrong answers
              </Button>
            </Link>

            <Link href="/review/train">
              <Button variant="primary" size="md">
                Train review words
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}