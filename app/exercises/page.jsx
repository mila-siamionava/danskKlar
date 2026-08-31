import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import ReadingCard from "@/components/reading/ReadingCard/ReadingCard";

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

            <p>
              {texts.length} texts available.
            </p>
          </header>

          <section className="contentGrid">
            {texts.map((text) => (
              <ReadingCard
                key={text.id}
                title={text.title}
                level={text.level || "PD3.5"}
                topic={text.category}
                vocabularyHref={`/exercises/${text.slug}/vocabulary`}
                conjunctionsHref={`/exercises/${text.slug}/bindeord`}
              />
            ))}
          </section>
        </div>
      </div>

      <BottomNavigation items={navItems} />
    </main>
  );
}