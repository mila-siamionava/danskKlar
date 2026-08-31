import HomeNavigationCard from "@/components/navigation/HomeNavigationCard/HomeNavigationCard";
import {
  BookOpen,
  RotateCcw,
  Dumbbell,
  ClipboardList,
  Settings,
} from "lucide-react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <span className={styles.logo} aria-label="DanskKlar">
          DK
        </span>

        <button
          type="button"
          className={styles.settingsButton}
          aria-label="Open settings"
        >
          <Settings size={20} strokeWidth={1.7} aria-hidden="true" />
        </button>
      </div>

      <header className={styles.header}>
        <h1>DanskKlar</h1>

        <p>Get ready for PD3.5</p>
      </header>

      <nav className={styles.navigation} aria-label="Main navigation">
        <HomeNavigationCard
          href="/exercises"
          icon={BookOpen}
          title="Reading"
          description="Texts and reading practice"
        />

        <HomeNavigationCard
          href="/review"
          icon={RotateCcw}
          title="Review"
          description="Review words you know"
        />

        <HomeNavigationCard
          href="/review/train"
          icon={Dumbbell}
          title="Train"
          description="Practice your vocabulary"
        />

        <HomeNavigationCard
          href="/topics"
          icon={ClipboardList}
          title="Topics"
          description="Explore by theme"
        />
      </nav>

      <div className={styles.illustration} aria-hidden="true" />
    </main>
  );
}
