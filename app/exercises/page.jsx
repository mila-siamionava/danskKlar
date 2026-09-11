import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BackLink from "@/components/navigation/BackLink/BackLink";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";

import ReadingPracticeClient from "./_components/ReadingPracticeClient/ReadingPracticeClient";

import styles from "./Exercises.module.css";

import { navItems } from "@/data/navigation";

import { canAccessResource } from "@/lib/access/canAccessResource";
import { getCurrentAccess } from "@/lib/access/getCurrentAccess";
import { getTexts } from "@/lib/exercises/getTexts";

const readingImages = {
  "fleksibelt-arbejde":
    "https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?auto=format&fit=crop&w=500&q=80",

  "udenlandsk-arbejdskraft":
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",

  "frivilligt-arbejde":
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",

  jobskifte:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",

  "stress-paa-arbejdspladsen":
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",

  "tilfredshed-paa-arbejdspladsen":
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80",
};

export default async function ExercisesPage() {
  const [texts, access] = await Promise.all([
    getTexts(),
    getCurrentAccess(),
  ]);

  const canUseVocabulary =
    canAccessResource(
      access.resources,
      "reading_exercise",
      "vocabulary_gap",
    );

  const canUseConjunctions =
    canAccessResource(
      access.resources,
      "reading_exercise",
      "connector_gap",
    );

  const visibleTexts = texts
    .filter((text) =>
      canAccessResource(
        access.resources,
        "text",
        text.slug,
      ),
    )
    .map((text) => ({
      ...text,

      hasVocabulary:
        text.hasVocabulary &&
        canUseVocabulary,

      hasConjunctions:
        text.hasConjunctions &&
        canUseConjunctions,
    }));

  return (
    <main>
      <AppHeader title="DanskKlar" />

      <div className={styles.page}>
        <div className={styles.introRow}>
          <BackLink
            href="/"
            label="Back to home"
          />

          <p className={styles.instruction}>
            Choose a text to practice vocabulary
            or connectors.
          </p>
        </div>

        <ReadingPracticeClient
          texts={visibleTexts}
          readingImages={readingImages}
        />
      </div>

      <BottomNavigation
        items={navItems}
      />
    </main>
  );
}