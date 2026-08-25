"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./Flashcards.module.css";

export default function FlashcardsPage() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [startX, setStartX] = useState(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(
      "danskTrainerSelectedReview"
    );

    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <Link href="/review">
          <button
            type="button"
            className={styles.backButton}
          >
            ← Back to words
          </button>
        </Link>

        <h1>Flashcards</h1>

        <p>No words selected.</p>
      </main>
    );
  }

  if (finished) {
    return (
      <main className={styles.page}>
        <div className={styles.complete}>
          <h1>Review complete</h1>

          <p>
            You reviewed {items.length}{" "}
            {items.length === 1
              ? "word"
              : "words"}.
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

  const currentItem = items[currentIndex];

  const translation =
    currentItem.explanation?.translations?.find(
      (translationItem) =>
        translationItem.word?.toLowerCase() ===
        currentItem.term?.toLowerCase()
    );

  const english =
    currentItem.english ||
    translation?.english ||
    "No English translation";

  const russian =
    currentItem.russian ||
    translation?.russian ||
    "Нет русского перевода";

  function moveToNextCard() {
    setFlipped(false);

    if (currentIndex === items.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex(
      (current) => current + 1
    );
  }

  function rememberWord() {
    moveToNextCard();
  }

  function reviewAgain() {
    setFlipped(false);

    const currentCard = items[currentIndex];

    setItems((currentItems) => {
      const remainingItems =
        currentItems.filter(
          (_, index) =>
            index !== currentIndex
        );

      return [
        ...remainingItems,
        currentCard,
      ];
    });

    if (currentIndex >= items.length - 1) {
      setCurrentIndex(0);
    }
  }

  function handlePointerDown(event) {
    setStartX(event.clientX);
  }

  function handlePointerUp(event) {
    if (startX === null) {
      return;
    }

    const difference =
      event.clientX - startX;

    if (difference > 70) {
      rememberWord();
    } else if (difference < -70) {
      reviewAgain();
    }

    setStartX(null);
  }

  return (
    <main className={styles.page}>
      <Link href="/review">
        <button
          type="button"
          className={styles.backButton}
        >
          ← Back to words
        </button>
      </Link>

      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>
            Flashcards
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
              ((currentIndex + 1) /
                items.length) *
              100
            }%`,
          }}
        />
      </div>

      <p className={styles.instructions}>
        Tap to flip · Swipe right if you remember ·
        Swipe left to review again
      </p>

      <div className={styles.cardArea}>
        <button
          type="button"
          className={`${styles.card} ${
            flipped ? styles.flipped : ""
          }`}
          onClick={() =>
            setFlipped(
              (current) => !current
            )
          }
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          aria-label="Flip flashcard"
        >
          <div className={styles.cardInner}>
            <div
              className={`${styles.cardFace} ${styles.cardFront}`}
            >
              <span className={styles.cardLabel}>
                Danish
              </span>

              <span className={styles.word}>
                {currentItem.term?.toLowerCase()}
              </span>

              <span className={styles.tapHint}>
                Tap to reveal
              </span>
            </div>

            <div
              className={`${styles.cardFace} ${styles.cardBack}`}
            >
              <span className={styles.cardLabel}>
                Translation
              </span>

              <span
                className={
                  styles.translationEnglish
                }
              >
                {english}
              </span>

              <span
                className={
                  styles.translationRussian
                }
              >
                {russian}
              </span>

              <span className={styles.tapHint}>
                Tap to turn back
              </span>
            </div>
          </div>
        </button>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.againButton}
          onClick={reviewAgain}
        >
          ← Review again
        </button>

        <button
          type="button"
          className={styles.knowButton}
          onClick={rememberWord}
        >
          I remember →
        </button>
      </div>
    </main>
  );
}