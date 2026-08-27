import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./ExercisePage.module.css";
import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import GapExercise from "@/components/exercises/GapExercise/GapExercise";
import Button from "@/components/ui/Button/Button";
import Badge from "@/components/ui/Badge/Badge";

import { navItems } from "@/data/navigation";
import { getExercise } from "@/lib/exercises/getExercise";

export default async function ExercisePage({
  params,
  searchParams,
}) {
  const { slug } = await params;
  const query = await searchParams;

  const exerciseType =
    query?.type === "connector_gap"
      ? "connector_gap"
      : "vocabulary_gap";

  const exercise = await getExercise(
    slug,
    exerciseType
  );

  if (!exercise) {
    notFound();
  }

  return (
    <main>
      <AppHeader title="Dansk Trainer" />

      <div className="mainPageContainer">
        <div className="readingContainer">

         <div className={styles.topRow}>
  <Link href="/exercises">
    <Button variant="ghost" size="sm">
      ← Back to exercises
    </Button>
  </Link>

  <div className={styles.badges}>
    <Badge variant="neutral" size="sm">
      {exercise.level}
    </Badge>

    <Badge variant="accent" size="sm">
      {exercise.category}
    </Badge>

    <Badge variant="neutral" size="sm">
      {exercise.questions.length} questions
    </Badge>
  </div>
</div>

          <div className={styles.exerciseSection}>
            <div className={styles.exerciseTabs}>
              <Link
                href={`/exercises/${slug}?type=vocabulary_gap`}
              >
                <Button
                  variant={
                    exerciseType === "vocabulary_gap"
                      ? "primary"
                      : "secondary"
                  }
                  size="md"
                >
                  Vocabulary
                </Button>
              </Link>

              <Link
                href={`/exercises/${slug}?type=connector_gap`}
              >
                <Button
                  variant={
                    exerciseType === "connector_gap"
                      ? "primary"
                      : "secondary"
                  }
                  size="md"
                >
                  Bindeord
                </Button>
              </Link>
            </div>

            <GapExercise exercise={exercise} />
          </div>

        </div>
      </div>

      <BottomNavigation items={navItems} />
    </main>
  );
}