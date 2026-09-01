"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ChevronDown,
  RotateCcw,
} from "lucide-react";

import { useSelectedReviewItems } from "../_hooks/useSelectedReviewItems";

import styles from "./Flashcards.module.css";

export default function FlashcardsClient() {
  const {
    items,
    setItems,
    isLoading,
  } = useSelectedReviewItems();

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [flipped, setFlipped] =
    useState(false);

  const [startX, setStartX] =
    useState(null);

  const [finished, setFinished] =
    useState(false);

  if (isLoading) {
    return (
      <main className={styles.page}>
        <p className={styles.loading}>
          Loading flashcards…
        </p>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <Link
          href="/review"
          className={styles.backButton}
        >
          ← Back to words
        </Link>

        <div className={styles.complete}>
          <h1>Flashcards</h1>
          <p>No words selected.</p>
        </div>
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
              : "words"}
            .
          </p>

          <Link
            href="/review"
            className={styles.backButton}
          >
            ← Back to words
          </Link>
        </div>
      </main>
    );
  }

  const currentItem =
    items[currentIndex];
console.log("FLASHCARD ITEM:", currentItem);
  const english =
    currentItem.english ||
    "No English translation";

  const russian =
    currentItem.russian ||
    "Нет русского перевода";

  const partOfSpeech =
    currentItem.part_of_speech ||
    currentItem.partOfSpeech ||
    currentItem.pos ||
    currentItem.word_type ||
    currentItem.type ||
    "";

  function moveToNextCard() {
    setFlipped(false);

    if (
      currentIndex ===
      items.length - 1
    ) {
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

    const currentCard =
      items[currentIndex];

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

    if (
      currentIndex >=
      items.length - 1
    ) {
      setCurrentIndex(0);
    }
  }

  function handlePointerDown(event) {
    if (
      event.target.closest("details")
    ) {
      return;
    }

    setStartX(event.clientX);
  }

  function handlePointerUp(event) {
    if (
      event.target.closest("details")
    ) {
      return;
    }

    if (startX === null) {
      return;
    }

    const difference =
      event.clientX - startX;

    if (difference > 70) {
      rememberWord();
    } else if (
      difference < -70
    ) {
      reviewAgain();
    }

    setStartX(null);
  }

  function flipCard(event) {
    if (
      event.target.closest("details")
    ) {
      return;
    }

    setFlipped(
      (current) => !current
    );
  }

  function handleKeyDown(event) {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();

      setFlipped(
        (current) => !current
      );
    }
  }

  return (
    <main className={styles.page}>
      <Link
        href="/review"
        className={styles.backButton}
      >
        ← Back to words
      </Link>

      <div className={styles.header}>
        <div>
          <span
            className={styles.eyebrow}
          >
            Flashcards
          </span>

          <h1>Review words</h1>
        </div>

        <span
          className={styles.counter}
        >
          {currentIndex + 1} /{" "}
          {items.length}
        </span>
      </div>

      <div
        className={styles.progress}
      >
        <div
          className={
            styles.progressFill
          }
          style={{
            width: `${
              ((currentIndex + 1) /
                items.length) *
              100
            }%`,
          }}
        />
      </div>

      <p
        className={
          styles.instructions
        }
      >
        Tap to flip
        <span>•</span>
        Swipe right if you remember
        <span>•</span>
        Swipe left to review again
      </p>

      <div
        className={styles.cardArea}
      >
        <div
          className={`${styles.card} ${
            flipped
              ? styles.flipped
              : ""
          }`}
          onClick={flipCard}
          onPointerDown={
            handlePointerDown
          }
          onPointerUp={
            handlePointerUp
          }
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Flip flashcard"
        >
          <div
            className={styles.cardInner}
          >
            {/* FRONT */}

            <div
              className={`${styles.cardFace} ${styles.cardFront}`}
            >
              <span
                className={
                  styles.cardLabel
                }
              >
                Danish
              </span>

              <div
                className={
                  styles.frontContent
                }
              >
                <div className={styles.termRow}>
  {partOfSpeech && (
    <span className={styles.partOfSpeech}>
      {partOfSpeech}
    </span>
  )}

  <h2 className={styles.word}>
    {currentItem.term?.toLowerCase()}
  </h2>
</div>
              </div>

              <div
                className={
                  styles.tapHint
                }
              >
                <RotateCcw
                  size={22}
                  strokeWidth={1.8}
                />

                <span>
                  Tap to reveal
                </span>
              </div>
            </div>

            {/* BACK */}

            <div
              className={`${styles.cardFace} ${styles.cardBack}`}
            >
             <div
  className={`${styles.cardFace} ${styles.cardBack}`}
>
  {currentItem.definition_da && (
    <section className={styles.meaning}>
      <span className={styles.sectionLabel}>
        Meaning
      </span>

      <p className={styles.definition}>
        {currentItem.definition_da}
      </p>
    </section>
  )}

  <div className={styles.translationRows}>
    <div className={styles.translationRow}>
      <span className={styles.infoLabel}>
        English
      </span>

      <span className={styles.translationValue}>
        {english}
      </span>
    </div>

    <div className={styles.translationRow}>
      <span className={styles.infoLabel}>
        Russian
      </span>

      <span className={styles.translationValue}>
        {russian}
      </span>
    </div>

    {currentItem.example && (
      <details
        className={styles.infoRow}
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <summary className={styles.infoSummary}>
          <span className={styles.infoLabel}>
            Examples
          </span>

          <ChevronDown
            size={18}
            className={styles.chevron}
          />
        </summary>

        <div className={styles.infoContent}>
          {currentItem.example}
        </div>
      </details>
    )}
  </div>

  <div className={styles.tapHint}>
    <RotateCcw
      size={22}
      strokeWidth={1.8}
    />

    <span>Tap to turn back</span>
  </div>
</div>

              {currentItem.definition_da && (
                <section
                  className={
                    styles.meaning
                  }
                >
                  <span
                    className={
                      styles.sectionLabel
                    }
                  >
                    Meaning
                  </span>

                  <p
                    className={
                      styles.definition
                    }
                  >
                    {
                      currentItem.definition_da
                    }
                  </p>
                </section>
              )}

            <div className={styles.translationRows}>
  <div className={styles.translationRow}>
    <span className={styles.infoLabel}>
      English
    </span>

    <span className={styles.translationValue}>
      {english}
    </span>
  </div>

  <div className={styles.translationRow}>
    <span className={styles.infoLabel}>
      Russian
    </span>

    <span className={styles.translationValue}>
      {russian}
    </span>
  </div>

  {currentItem.example && (
    <details
      className={styles.infoRow}
      onClick={(event) =>
        event.stopPropagation()
      }
    >
      <summary className={styles.infoSummary}>
        <span className={styles.infoLabel}>
          Examples
        </span>

        <ChevronDown
          size={18}
          className={styles.chevron}
        />
      </summary>

      <div
        className={`${styles.infoContent} ${styles.examples}`}
      >
        <p>
          {currentItem.example}
        </p>

        {currentItem.example_en && (
          <p
            className={
              styles.exampleEnglish
            }
          >
            {currentItem.example_en}
          </p>
        )}
      </div>
    </details>
   )}
</div>

<div className={styles.tapHint}>
  <RotateCcw
    size={22}
    strokeWidth={1.8}
  />

  <span>
    Tap to turn back
  </span>
</div>

</div>
{/* end cardBack */}

</div>
{/* end cardInner */}

</div>
{/* end card */}

</div>
{/* end cardArea */}

<div className={styles.actions}>
  <button
    type="button"
    className={styles.againButton}
    onClick={reviewAgain}
  >
    <span>←</span>
    Review again
  </button>

  <button
    type="button"
    className={styles.knowButton}
    onClick={rememberWord}
  >
    I know this
    <span>→</span>
  </button>
</div>

</main>
);
}