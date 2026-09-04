import BackLink from "@/components/navigation/BackLink/BackLink";
import { Eye, RotateCcw, PencilLine, Brain } from "lucide-react";

import ExerciseModeGroup from "../_components/ExerciseModeGroup/ExerciseModeGroup";
import styles from "./ReviewTrain.module.css";

const trainingGroups = [
  {
    title: "Memory",
    icon: Brain,
    modes: [
      {
        href: "/review/train/flashcards",
        title: "Flashcards",
        description: "Review words and their meanings.",
        icon: "▣",
      },
      {
        href: "/review/train/match-pairs",
        title: "Match pairs",
        description: "Match each expression with its translation.",
        icon: "▱▱",
      },
    ],
  },
  {
    title: "Recognition",
    icon: Eye,
    modes: [
      {
        href: "/review/train/true-false",
        title: "True or false",
        description: "Decide whether the meaning is correct.",
        icon: "✓✕",
      },
      {
        href: "/review/train/multiple-choice",
        title: "Multiple choice",
        description: "Choose the correct meaning.",
        icon: "☷",
      },
      {
        href: "/review/train/definition-word",
        title: "Definition → Word",
        description: "Choose the word that matches the definition.",
        icon: "A→",
      },
    ],
  },
  {
    title: "Recall",
    icon: RotateCcw,
    modes: [
      {
        href: "/review/train/fill-gap",
        title: "Fill the gap",
        description: "Choose the expression that fits the context.",
        icon: "___",
      },
      {
        href: "/review/train/first-letter",
        title: "First-letter hint",
        description: "Recall the expression using the first-letter hint.",
        icon: "A_D",
      },
      {
        href: "/review/train/typed-gap",
        title: "Type the gap",
        description: "Type the missing word or expression.",
        icon: "⌨",
      },
    ],
  },
  {
    title: "Production",
    icon: PencilLine,
    modes: [
      {
        href: "/review/train/build-sentence",
        title: "Build a sentence",
        description: "Put the words in the correct order.",
        icon: "▤",
      },
    ],
  },
];

export default function ReviewTrainPage() {
  return (
    <main>
      <div className="mobilePage">
        <div className={styles.back}>
          <BackLink href="/review" label="Back to review" />
        </div>

        <header className={styles.header}>
          <h1>Choose exercise type</h1>
          <p>Practice from memory to active use.</p>
        </header>

        <div className={styles.groups}>
          {trainingGroups.map((group) => (
            <ExerciseModeGroup
              key={group.title}
              title={group.title}
              modes={group.modes}
              icon={group.icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
