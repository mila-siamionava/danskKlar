import Link from "next/link";
import Image from "next/image";

import Badge from "@/components/ui/Badge/Badge";
import styles from "./ReadingCard.module.css";

export default function ReadingCard({
  title,
  level = "PD3.5",
  topic,
  duration,
  vocabularyHref,
  conjunctionsHref,
  imageSrc,
}) {
  const primaryHref = vocabularyHref || conjunctionsHref;

  return (
    <article className={styles.card}>
      {primaryHref && (
        <Link
          href={primaryHref}
          className={styles.cardLink}
          aria-label={`Open ${title}`}
        />
      )}

      <div className={styles.illustration}>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="96px"
          />
        )}
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
          {vocabularyHref && (
            <Link
              href={vocabularyHref}
              className={`${styles.action} ${styles.primaryAction}`}
            >
              Vocabulary
            </Link>
          )}

          {conjunctionsHref && (
            <Link
              href={conjunctionsHref}
              className={`${styles.action}  ${styles.secondaryAction}`}
            >
              Conjunctions
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}