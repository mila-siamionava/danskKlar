"use client";

import Link from "next/link";

import styles from "./ReviewTrain.module.css";

const trainingModes = [
  {
  href: "/review/train/mixed",
  title: "Mixed training",
  description:
    "Practice with fill gaps, true or false, matching, definitions and translations.",
},
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
  href: "/review/train/true-false",
  title: "True or false",
  description:
    "Decide whether the English and Russian meaning matches the Danish expression.",
  },
{
  href: "/review/train/build-sentence",
  title: "Build a sentence",
  description:
    "Drag the words into the correct order to build a Danish sentence.",
  },

  {
    href: "/review/train/definition-word",
    title: "Definition → Word",
    description:
      "Read a Danish definition and choose the correct expression.",
  },
  {
    href: "/review/train/typed-gap",
    title: "Type the gap",
    description:
      "Type the missing Danish word or expression without answer options.",
  },
  {
    href: "/review/train/first-letter",
    title: "First-letter hint",
    description:
      "Type the missing expression with the first letters shown as a hint.",
  },
  {
    href: "/review/train/match-pairs",
    title: "Match pairs",
    description:
      "Match each Danish expression with its English and Russian translation.",
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
      <div className={styles.nav}>
        <Link
          href="/"
          className={styles.navLink}
        >
          ← Main
        </Link>

        <Link
          href="/review"
          className={styles.navLink}
        >
          Review words
        </Link>
      </div>

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