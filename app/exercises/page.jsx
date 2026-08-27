import Link from "next/link";

import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import Card from "@/components/ui/Card/Card";
import Badge from "@/components/ui/Badge/Badge";
import Button from "@/components/ui/Button/Button";

import { navItems } from "@/data/navigation";
import { getTexts } from "@/lib/exercises/getTexts";


export default async function ExercisesPage() {
  const texts = await getTexts();

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

            <p className="u-text-secondary">
              {texts.length} texts available.
            </p>
          </header>

          <section className="contentGrid">
            {texts.map((text) => (
              <Card
                key={text.id}
                variant="default"
                padding="lg"
              >
                <div className="u-flex-column u-gap-md">
                  <div className="u-flex-between">
                    <Badge>{text.level}</Badge>

                    <Badge variant="accent">
                      Arbejde
                    </Badge>
                  </div>

                  <div className="u-flex-column u-gap-xs">
                    <h2>{text.title}</h2>

                    <p className="u-text-secondary">
                      Choose how you want to practice.
                    </p>
                  </div>

                  <div className="u-flex u-gap-sm">
                    <Link
                      href={`/exercises/${text.slug}?type=vocabulary_gap`}
                    >
                      <Button
                        variant="primary"
                        size="md"
                      >
                        Vocabulary
                      </Button>
                    </Link>

                    <Link
                      href={`/exercises/${text.slug}?type=connector_gap`}
                    >
                      <Button
                        variant="secondary"
                        size="md"
                      >
                        Bindeord
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