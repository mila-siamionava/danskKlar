import Link from "next/link";

import {
  BookOpen,
  RotateCcw,
  Dumbbell,
  ClipboardList,
  UserRound,
  LogOut,
} from "lucide-react";

import HomeNavigationCard from "@/components/navigation/HomeNavigationCard/HomeNavigationCard";
import AarhusSketch from "@/components/ui/AarhusSketch/AarhusSketch";
import ThemeToggle from "@/components/theme/ThemeToggle/ThemeToggle";
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
            <details className={styles.accountMenu}>
              <summary
                className={styles.accountButton}
                aria-label="Open account menu"
              >
                <UserRound
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </summary>

              <div className={styles.accountDropdown}>
                <div className={styles.accountInfo}>
                  <span className={styles.accountLabel}>
                    Signed in as
                  </span>

                  <span className={styles.accountEmail}>
                    {user.email}
                  </span>
                </div>

                <div className={styles.accountDivider} />

                <ThemeToggle />

                <div className={styles.accountDivider} />

                <form
                  action="/auth/signout"
                  method="post"
                >
                  <button
                    type="submit"
                    className={styles.menuItem}
                  >
                    <LogOut
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                    Sign out
                  </button>
                </form>
              </div>
            </details>
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
        <p>Get ready for PD3.5</p>
      </header>

      <nav
        className={styles.navigation}
        aria-label="Main navigation"
      >
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

      <div className={styles.illustration}>
        <AarhusSketch
          className={styles.aarhusSketch}
          title="Aarhus sketch"
        />
      </div>
    </main>
  );
}