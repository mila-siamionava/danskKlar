import BackLink from "@/components/navigation/BackLink/BackLink";
import ExerciseModeGroup from "../_components/ExerciseModeGroup/ExerciseModeGroup";
import styles from "./ReviewTrain.module.css";

const trainingGroups = [
  {
    title: "Recognition",
    modes: [
      {
        href: "/review/train/multiple-choice",
        title: "Multiple choice",
        description: "Choose the correct answer.",
         icon: "☷",
      },
      {
        href: "/review/train/true-false",
        title: "True or false",
        description:
          "Decide whether the meaning is correct.",
        icon: "✓✕",
      },
      {
        href: "/review/train/definition-word",
        title: "Definition → Word",
        description:
          "Choose the word that matches the definition.",
        icon: "A→",
      },
    ],
  },
  {
    title: "Recall",
    modes: [
      {
        href: "/review/train/fill-gap",
        title: "Fill the gap",
        description:
          "Choose the expression that fits the context.",
         icon: "___",
      },
      {
        href: "/review/train/first-letter",
        title: "First-letter hint",
        description:
          "Complete the expression using the first-letter hint.",
        icon: "A_D",
      },
      {
        href: "/review/train/typed-gap",
        title: "Type the gap",
        description:
          "Type the missing word or expression.",
         icon: "⌨",
      },
    ],
  },
  {
    title: "Production",
    modes: [
      {
        href: "/review/train/build-sentence",
        title: "Build a sentence",
        description:
          "Put the words in the correct order.",
         icon: "▤",
      },
    ],
  },
  {
    title: "Memory",
    modes: [
      {
        href: "/review/train/match-pairs",
        title: "Match pairs",
        description:
          "Match each expression with its translation.",
        icon: "▱▱",
      },
      {
        href: "/review/train/flashcards",
        title: "Flashcards",
        description:
          "Review words one by one.",
         icon: "▣",
      },
    ],
  },
];

export default function ReviewTrainPage() {
  return (
    <main className={styles.page}>
    <BackLink
  href="/review"
  label="Back to review"
/>

      <header className={styles.header}>
        <h1>Choose exercise type</h1>

        <p>
          Select how you want to practise your words.
        </p>
      </header>

      <div className={styles.groups}>
        {trainingGroups.map((group) => (
          <ExerciseModeGroup
            key={group.title}
            title={group.title}
            modes={group.modes}
          />
        ))}
      </div>
    </main>
  );
}