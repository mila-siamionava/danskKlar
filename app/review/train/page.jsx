"use client";

import Link from "next/link";

import styles from "./ReviewTrain.module.css";

const trainingModes = [
  {
    href: "/review/train/flashcards",
    title: "Flashcards",
    description:
      "Review Danish words with definitions, examples and translations.",
  },
  {
    href: "/review/train/multiple-choice",
    title: "Multiple choice",
    description:
      "Choose the correct Danish definition for each word.",
  },
  {
    href: "/review/train/definition-word",
    title: "Definition → Word",
    description:
      "Read a Danish definition and choose the correct expression.",
  },
  {
    href: "/review/train/fill-gap",
    title: "Fill the gap",
    description:
      "Choose the word or expression that fits naturally in context.",
  },
];

export default function ReviewTrainPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          Vocabulary training
        </span>

        <h1>Train your words</h1>

        <p>
          Choose how you want to practice.
        </p>
      </header>

      <div className={styles.grid}>
        {trainingModes.map((mode) => (
          <Link
            key={mode.href}
            href={mode.href}
            className={styles.card}
          >
            <h2>{mode.title}</h2>

            <p>{mode.description}</p>

            <span className={styles.open}>
              Start practice →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}