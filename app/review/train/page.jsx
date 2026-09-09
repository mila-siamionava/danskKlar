import BackLink from "@/components/navigation/BackLink/BackLink";
import {
  Eye,
  RotateCcw,
  PencilLine,
  Brain,
} from "lucide-react";

import ExerciseModeGroup from "../_components/ExerciseModeGroup/ExerciseModeGroup";

import { canAccessResource } from "@/lib/access/canAccessResource";
import { getCurrentAccess } from "@/lib/access/getCurrentAccess";

import styles from "./ReviewTrain.module.css";

const trainingGroups = [
  {
    title: "Memory",
    icon: Brain,
    modes: [
      {
        key: "flashcards",
        href: "/review/train/flashcards",
        title: "Flashcards",
        description:
          "Review words and their meanings.",
        icon: "▣",
      },
      {
        key: "match-pairs",
        href: "/review/train/match-pairs",
        title: "Match pairs",
        description:
          "Match each expression with its translation.",
        icon: "▱▱",
      },
    ],
  },
  {
    title: "Recognition",
    icon: Eye,
    modes: [
      {
        key: "true-false",
        href: "/review/train/true-false",
        title: "True or false",
        description:
          "Decide whether the meaning is correct.",
        icon: "✓✕",
      },
      {
        key: "multiple-choice",
        href: "/review/train/multiple-choice",
        title: "Multiple choice",
        description:
          "Choose the correct meaning.",
        icon: "☷",
      },
      {
        key: "definition-word",
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
    icon: RotateCcw,
    modes: [
      {
        key: "fill-gap",
        href: "/review/train/fill-gap",
        title: "Fill the gap",
        description:
          "Choose the expression that fits the context.",
        icon: "___",
      },
      {
        key: "first-letter",
        href: "/review/train/first-letter",
        title: "First-letter hint",
        description:
          "Recall the expression using the first-letter hint.",
        icon: "A_D",
      },
      {
        key: "typed-gap",
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
    icon: PencilLine,
    modes: [
      {
        key: "build-sentence",
        href: "/review/train/build-sentence",
        title: "Build a sentence",
        description:
          "Put the words in the correct order.",
        icon: "▤",
      },
    ],
  },
];

export default async function ReviewTrainPage() {
  const access =
    await getCurrentAccess();

  const availableGroups =
    trainingGroups
      .map((group) => ({
        ...group,
        modes: group.modes.filter(
          (mode) =>
            canAccessResource(
              access.resources,
              "training_mode",
              mode.key,
            ),
        ),
      }))
      .filter(
        (group) =>
          group.modes.length > 0,
      );

  return (
    <main>
      <div className="mobilePage">
        <div className={styles.back}>
          <BackLink
            href="/review"
            label="Back to review"
          />
        </div>

        <header className={styles.header}>
          <h1>
            Choose exercise type
          </h1>

          <p>
            Practice from memory to active use.
          </p>
        </header>

        <div className={styles.groups}>
          {availableGroups.map(
            (group) => (
              <ExerciseModeGroup
                key={group.title}
                title={group.title}
                modes={group.modes}
                icon={group.icon}
              />
            ),
          )}
        </div>
      </div>
    </main>
  );
}