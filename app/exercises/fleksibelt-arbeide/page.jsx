import Link from "next/link";
import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import GapExercise from "@/components/exercises/GapExercise/GapExercise";
import Button from "@/components/ui/Button/Button";

import { navItems } from "@/data/navigation";
import { fleksibeltArbejde } from "@/data/exercises";

export default function FleksibeltArbejdePage() {
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
          <GapExercise
            exercise={fleksibeltArbejde}
          />
        </div>
      </div>

      <BottomNavigation items={navItems} />
    </main>
  );
}