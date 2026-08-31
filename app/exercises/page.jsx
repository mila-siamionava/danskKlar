import AppHeader from "@/components/navigation/AppHeader/AppHeader";
import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";

import ReadingPracticeClient from "./_components/ReadingPracticeClient/ReadingPracticeClient";
import styles from "./Exercises.module.css";
import { navItems } from "@/data/navigation";
import { getTexts } from "@/lib/exercises/getTexts";
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

  return (
    <main>
      <AppHeader title="Dansk Trainer" />

      <div className={styles.page}>
          <header className="pageHeader">
            <div className="pageHeader__meta">
              <span>Danish practice</span>
            </div>

            <h1>Exercises</h1>

            <p>
              {texts.length} texts available.
            </p>
          </header>

          <ReadingPracticeClient texts={texts}  readingImages={readingImages}/>
        </div>
      
      <BottomNavigation items={navItems} />
    </main>
  );
}