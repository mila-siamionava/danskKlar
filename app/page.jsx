import Link from "next/link";

import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";


import { navItems } from "@/data/navigation";
import { getTexts } from "@/lib/exercises/getTexts";

export default async function Home() {
  const texts = await getTexts();

  return (
    <main>
      <AppHeader title="Dansk Trainer" />

      <div className="mainPageContainer">
        <div className="dashboardContainer">

     
          {/* QUICK ACCESS */}
          <section className="contentGrid">
            <Card variant="default" padding="lg">
              <div className="u-flex-column u-gap-md">
                <div>
                  <span className="u-text-muted">
                    Practice library
                  </span>

                  <h2>
                    {texts.length} texts
                  </h2>
                </div>

                <p className="u-text-secondary">
                  Practice reading comprehension
                  with PD3.5-style gap exercises.
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

        

        </div>
      </div>

      <BottomNavigation items={navItems} />
    </main>
  );
}