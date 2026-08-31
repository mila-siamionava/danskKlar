"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { shuffle } from "../_lib/arrayUtils";
import styles from "./BuildSentence.module.css";

export default function BuildSentenceClient({
  vocabulary,
}) {
  const usableItems = useMemo(
    () =>
      vocabulary.filter(
        (item) =>
          item.example &&
          item.example.trim().split(/\s+/)
            .length >= 3
      ),
    [vocabulary]
  );

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [words, setWords] =
    useState([]);

  const [draggedIndex, setDraggedIndex] =
    useState(null);

  const [checked, setChecked] =
    useState(false);

  const [finished, setFinished] =
    useState(false);

  const currentItem =
    usableItems[currentIndex];

  const originalWords = useMemo(() => {
    if (!currentItem?.example) {
      return [];
    }

    return currentItem.example
      .trim()
      .split(/\s+/);
  }, [currentItem]);

  useEffect(() => {
    if (originalWords.length === 0) {
      setWords([]);
      return;
    }

  setWords(
  shuffle(originalWords)
);
  }, [originalWords]);

  const isCorrect =
    words.join(" ") ===
    originalWords.join(" ");

  function handleDragStart(index) {
    setDraggedIndex(index);
  }

  function handleDrop(dropIndex) {
    if (
      draggedIndex === null ||
      checked
    ) {
      return;
    }

    const updatedWords = [...words];

    const [draggedWord] =
      updatedWords.splice(
        draggedIndex,
        1
      );

    updatedWords.splice(
      dropIndex,
      0,
      draggedWord
    );

    setWords(updatedWords);
    setDraggedIndex(null);
  }

  function checkSentence() {
    setChecked(true);
  }

  function nextSentence() {
    setChecked(false);
    setDraggedIndex(null);

    if (
      currentIndex ===
      usableItems.length - 1
    ) {
      setFinished(true);
      return;
    }

    setCurrentIndex(
      (current) => current + 1
    );
  }

  if (usableItems.length === 0) {
    return (
      <main className={styles.page}>
        <h1>Build a sentence</h1>

        <p>
          No usable example sentences found.
        </p>

        <Link href="/review/train">
          ← Back to training
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
            You completed{" "}
            {usableItems.length} sentences.
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
          Build a sentence
        </span>

        <h1>
          Put the words in the correct order
        </h1>

        <p className={styles.counter}>
          {currentIndex + 1} /{" "}
          {usableItems.length}
        </p>
      </header>

      <section
        className={styles.questionCard}
      >
        <div className={styles.words}>
          {words.map((word, index) => (
            <div
              key={`${word}-${index}`}
              className={styles.word}
              draggable={!checked}
              onDragStart={() =>
                handleDragStart(index)
              }
              onDragOver={(event) =>
                event.preventDefault()
              }
              onDrop={() =>
                handleDrop(index)
              }
            >
              {word}
            </div>
          ))}
        </div>

        {!checked && (
          <button
            type="button"
            className={styles.checkButton}
            onClick={checkSentence}
          >
            Check
          </button>
        )}

        {checked && (
          <div className={styles.feedback}>
            {isCorrect ? (
              <p className={styles.correct}>
                ✓ Correct
              </p>
            ) : (
              <div className={styles.wrong}>
                <p>
                  Correct sentence:
                </p>

                <strong>
                  {currentItem.example}
                </strong>
              </div>
            )}

            <button
              type="button"
              className={styles.nextButton}
              onClick={nextSentence}
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </main>
  );
}