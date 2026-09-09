import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BackLink from "@/components/navigation/BackLink/BackLink";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";

import ReadingPracticeClient from "./_components/ReadingPracticeClient/ReadingPracticeClient";

import styles from "./Exercises.module.css";

import { navItems } from "@/data/navigation";
import { getTexts } from "@/lib/exercises/getTexts";
import { createClient } from "@/lib/supabase/server";

const GUEST_TEXT_SLUG =
  "frivilligt-arbejde";

const readingImages = {
  "fleksibelt-arbejde":
    "https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?auto=format&fit=crop&w=500&q=80",

  "flere-udenlandske-medarbejdere-i-danmark":
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",

  "frivilligt-arbejde":
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",

  "hvorfor-skifter-mange-danskere-job":
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",

  "stress-paa-arbejdspladsen":
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",

  "tilfredshed-paa-arbejdspladsen":
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80",
};

export default async function ExercisesPage() {
  const texts = await getTexts();

  const supabase = await createClient();

  const { data } =
    await supabase.auth.getClaims();

  const user =
    data?.claims ?? null;

  const visibleTexts = user
    ? texts
    : texts.filter(
        (text) =>
          text.slug ===
          GUEST_TEXT_SLUG,
      );

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
            {user
              ? "Choose a text to practice vocabulary or conjunctions."
              : "Try Frivilligt arbejde. Sign in to unlock all texts."}
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