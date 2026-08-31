"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { shuffle } from "../_lib/arrayUtils";

import styles from "./Mixed.module.css";

const SESSION_SIZE = 20;

const EXERCISE_TYPES = [
  "fill-gap",
  "true-false",
  "match-pairs",
  "definition-word",
  "translation-word",
];

function getDefinitionOptions(
  currentItem,
  vocabulary
) {
  const wrongAnswers = vocabulary
    .filter(
      (item) =>
        item.id !== currentItem.id &&
        item.term
    )
    .map((item) => ({
      id: item.id,
      term: item.term,
    }));

  const uniqueWrongAnswers =
    wrongAnswers.filter(
      (answer, index, array) =>
        index ===
        array.findIndex(
          (item) =>
            item.term === answer.term
        )
    );

  const selectedWrongAnswers =
  shuffle(uniqueWrongAnswers).slice(0, 3);

return shuffle([
  {
    id: currentItem.id,
    term: currentItem.term,
  },
  ...selectedWrongAnswers,
]);
}

export default function MixedClient({
  vocabulary,
}) {
  const usableVocabulary = useMemo(
    () =>
      vocabulary.filter(
        (item) =>
          item.term &&
          (
            item.definition_da ||
            item.english ||
            item.russian ||
            item.example
          )
      ),
    [vocabulary]
  );

  const [session, setSession] =
    useState([]);

  useEffect(() => {
    if (usableVocabulary.length === 0) {
      setSession([]);
      return;
    }

    const newSession = Array.from({
      length: Math.min(
        SESSION_SIZE,
        usableVocabulary.length
      ),
    }).map((_, index) => {
      const item =
        usableVocabulary[
        index % usableVocabulary.length
        ];

      const type =
        EXERCISE_TYPES[
        Math.floor(
          Math.random() *
          EXERCISE_TYPES.length
        )
        ];

      return {
        id: `${item.id}-${index}`,
        item,
        type,
      };
    });

    setSession(newSession);
  }, [usableVocabulary]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const currentTask =
    session[currentIndex];

  const [
    definitionOptions,
    setDefinitionOptions,
  ] = useState([]);

  useEffect(() => {
    if (
      !currentTask ||
      currentTask.type !== "definition-word"
    ) {
      setDefinitionOptions([]);
      return;
    }

    setDefinitionOptions(
      getDefinitionOptions(
        currentTask.item,
        usableVocabulary
      )
    );
  }, [
    currentTask,
    usableVocabulary,
  ]);

  if (usableVocabulary.length === 0) {
    return (
      <main className={styles.page}>
        <h1>Mixed training</h1>

        <p>No vocabulary available.</p>

        <Link href="/review/train">
          ← Back to training
        </Link>
      </main>
    );
  }

  if (session.length === 0) {
    return null;
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

      <header className={styles.header}>
        <span className={styles.eyebrow}>
          Mixed training
        </span>

        <h1>
          Practice different skills
        </h1>

        <p>
          {currentIndex + 1} /{" "}
          {session.length}
        </p>
      </header>

      <section className={styles.questionCard}>
        {currentTask.type ===
          "definition-word" ? (
          <>
            <span className={styles.taskType}>
              Definition → Word
            </span>

            <p className={styles.definition}>
              {currentTask.item.definition_da}
            </p>

            <p className={styles.prompt}>
              Choose the correct Danish expression.
            </p>

            <div className={styles.options}>
              {definitionOptions.map(
                (option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={styles.option}
                  >
                    {option.term}
                  </button>
                )
              )}
            </div>
          </>
        ) : (
          <>
            <p>
              Exercise type:{" "}
              <strong>
                {currentTask.type}
              </strong>
            </p>

            <p>
              Word:{" "}
              <strong>
                {currentTask.item.term}
              </strong>
            </p>
          </>
        )}
      </section>
    </main>
  );
}