import Link from "next/link";

import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import Card from "@/components/ui/Card/Card";
import Badge from "@/components/ui/Badge/Badge";
import Button from "@/components/ui/Button/Button";

import { navItems } from "@/data/navigation";
import { exercises } from "@/data/exercises/index";

export default function ExercisesPage() {
  return (
    <main>
      <AppHeader title="Dansk Trainer" />

      <div className="mainPageContainer">
        <div className="dashboardContainer">
          <header className="pageHeader">
            <div className="pageHeader__meta">
              <span>Danish practice</span>
            </div>

            <h1>Exercises</h1>
<p>
  {exercises.length} exercises loaded:
  {" "}
  {exercises.map((exercise) => exercise.title).join(" | ")}
</p>
            <p className="u-text-secondary">
              Choose an exercise and practice at your own pace.
            </p>
          </header>

          <section className="contentGrid">
            {exercises.map((exercise) => (
              <Card
                key={exercise.id}
                variant="default"
                padding="lg"
              >
                <div className="u-flex-column u-gap-md">
                  <div className="u-flex-between">
                    <Badge>
                      {exercise.level}
                    </Badge>

                    <Badge variant="accent">
                      {exercise.category}
                    </Badge>
                  </div>

                  <div className="u-flex-column u-gap-xs">
                    <h2>
                      {exercise.title}
                    </h2>

                    <p className="u-text-secondary">
                      {exercise.instructions}
                    </p>
                  </div>

                  <div className="u-flex-between">
                    <span className="u-text-muted">
                      {exercise.questions.length} questions
                    </span>

                    <Link
                      href={`/exercises/${exercise.slug}`}
                    >
                      <Button
                        variant="primary"
                        size="md"
                      >
                        Start
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </section>
        </div>
      </div>

      <BottomNavigation items={navItems} />
    </main>
  );
}