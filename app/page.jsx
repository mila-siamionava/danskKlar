import Link from "next/link";

import {
  BookOpen,
  RotateCcw,
  Dumbbell,
  ClipboardList,
} from "lucide-react";

import HomeNavigationCard from "@/components/navigation/HomeNavigationCard/HomeNavigationCard";
import AarhusSketch from "@/components/ui/AarhusSketch/AarhusSketch";
import AccountMenu from "@/components/auth/AccountMenu/AccountMenu";
import { createClient } from "@/lib/supabase/server";

import styles from "./Home.module.css";

export default async function Home() {
  const supabase = await createClient();

  const { data } =
    await supabase.auth.getClaims();

  const user = data?.claims ?? null;

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <span
          className={styles.logo}
          aria-label="DanskKlar"
        >
          DK
        </span>

        <div className={styles.authActions}>
          {user ? (
            <AccountMenu email={user.email} />
          ) : (
            <Link
              href="/login"
              className={styles.authButton}
            >
              Sign in
            </Link>
          )}
        </div>
      </div>

      <header className={styles.header}>
        <h1>DanskKlar</h1>

        <p className={styles.tagline}>
          Get ready for PD3.5
        </p>

        <p className={styles.description}>
          Read Danish texts, save unknown words,
          practise them with exercises.
        </p>
      </header>

      <nav
        className={styles.navigation}
        aria-label="Main navigation"
      >
        <HomeNavigationCard
          href="/exercises"
          icon={BookOpen}
          title="Mockup Reading Tests"
          description="Practise PD3-style reading"
        />

        <HomeNavigationCard
          href="/review"
          icon={RotateCcw}
          title="Review Vocabulary"
          description="Review your saved words"
        />

        <HomeNavigationCard
          href="/review/train"
          icon={Dumbbell}
          title="Train"
          description="Practise your vocabulary"
        />

        <HomeNavigationCard
          href="/topics"
          icon={ClipboardList}
          title="Topics"
          description="Explore by theme"
        />
      </nav>

      <div className={styles.illustration}>
        <AarhusSketch
          className={styles.aarhusSketch}
          title="Aarhus sketch"
        />
      </div>
    </main>
  );
}