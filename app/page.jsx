import Link from "next/link";

import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import Badge from "@/components/ui/Badge/Badge";

import { navItems } from "@/data/navigation";
import { exercises } from "@/data/exercises/index";

export default function Home() {
  const featuredExercise = exercises[0];

  return (
    <main>
      <AppHeader title="Dansk Trainer" />

      <div className="mainPageContainer">
        <div className="dashboardContainer">

          {/* HERO */}
          <header className="pageHeader">
            <div className="pageHeader__meta">
              <span>Danish practice</span>
            </div>

            <h1>Ready to practice?</h1>

            <p className="u-text-secondary">
              Improve your Danish through reading,
              vocabulary and targeted review.
            </p>
          </header>

          {/* CONTINUE */}
          <section>
            <Card variant="soft" padding="lg">
              <div className="u-flex-column u-gap-md">
                <div className="u-flex-between">
                  <Badge variant="accent">
                    Continue learning
                  </Badge>

                  <span className="u-text-muted">
                    {featuredExercise.questions.length} questions
                  </span>
                </div>

                <div className="u-flex-column u-gap-xs">
                  <h2>{featuredExercise.title}</h2>

                  <p className="u-text-secondary">
                    {featuredExercise.instructions}
                  </p>
                </div>

                <Link
                  href={`/exercises/${featuredExercise.slug}`}
                >
                  <Button
                    variant="primary"
                    size="lg"
                  >
                    Continue exercise
                  </Button>
                </Link>
              </div>
            </Card>
          </section>

          {/* QUICK ACCESS */}
          <section className="contentGrid">
            <Card variant="default" padding="lg">
              <div className="u-flex-column u-gap-md">
                <div>
                  <span className="u-text-muted">
                    Practice library
                  </span>

                  <h2>
                    {exercises.length} exercises
                  </h2>
                </div>

                <p className="u-text-secondary">
                  Practice reading comprehension
                  with PD3-style gap exercises.
                </p>

                <Link href="/exercises">
                  <Button
                    variant="secondary"
                    size="md"
                  >
                    View all exercises
                  </Button>
                </Link>
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <div className="u-flex-column u-gap-md">
                <div>
                  <span className="u-text-muted">
                    Review
                  </span>

                  <h2>Words to review</h2>
                </div>

                <p className="u-text-secondary">
                  Wrong answers will be saved here
                  for focused vocabulary practice.
                </p>

               <Link href="/review">
  <Button
    variant="secondary"
    size="md"
  >
    Review words →
  </Button>
                </Link>
              </div>
            </Card>
          </section>

          {/* PROGRESS */}
          <section>
            <Card variant="flat" padding="lg">
              <div className="u-flex-between">
                <div>
                  <span className="u-text-muted">
                    Your progress
                  </span>

                  <h2>Keep going</h2>
                </div>

                <Link href="/progress">
                  <Button
                    variant="ghost"
                    size="sm"
                  >
                    View progress →
                  </Button>
                </Link>
              </div>
            </Card>
          </section>

        </div>
      </div>

      <BottomNavigation items={navItems} />
    </main>
  );
}