import Link from "next/link";

import Badge from "@/components/ui/Badge/Badge";

import styles from "./ReadingCard.module.css";

export default function ReadingCard({
  title,
  level = "PD3.5",
  topic,
  duration,
  vocabularyHref,
  conjunctionsHref,
  illustration,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.illustration}>
        {illustration}
      </div>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <div>
            <h2 className={styles.title}>
              {title}
            </h2>

            <div className={styles.meta}>
              <Badge>{level}</Badge>

              {duration && (
                <span>{duration}</span>
              )}
            </div>
          </div>
        </div>

        {topic && (
          <p className={styles.topic}>
            {topic}
          </p>
        )}

        <div className={styles.actions}>
          <Link
            href={vocabularyHref}
            className={styles.action}
          >
            Vocabulary
          </Link>

          <Link
            href={conjunctionsHref}
            className={styles.action}
          >
            Conjunctions
          </Link>
        </div>
      </div>
    </article>
  );
}