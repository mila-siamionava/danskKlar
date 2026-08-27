import Link from "next/link";
import { notFound } from "next/navigation";

import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import GapExercise from "@/components/exercises/GapExercise/GapExercise";
import Button from "@/components/ui/Button/Button";

import { navItems } from "@/data/navigation";
import { getExercise } from "@/lib/exercises/getExercise";

export default async function FleksibeltArbejdePage({
  searchParams,
}) {
  const params = await searchParams;

  const exerciseType =
    params?.type === "connector_gap"
      ? "connector_gap"
      : "vocabulary_gap";

  const exercise = await getExercise(
    "fleksibelt-arbejde",
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
          <Link href="/exercises">
            <Button variant="ghost" size="sm">
              ← Back to exercises
            </Button>
          </Link>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "01rem",
            }}
          >
            <div
              className="u-flex u-gap-sm"
              style={{ gap: "2rem" }}
            >
              <Link href="/exercises/fleksibelt-arbejde?type=vocabulary_gap">
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

              <Link href="/exercises/fleksibelt-arbejde?type=connector_gap">
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