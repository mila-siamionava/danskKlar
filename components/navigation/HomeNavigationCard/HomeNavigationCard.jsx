import Link from "next/link";

import styles from "./HomeNavigationCard.module.css";

export default function HomeNavigationCard({
  href,
  icon: Icon,
  title,
  description,
}) {
  return (
    <Link
      href={href}
      className={styles.card}
    >
      <span
        className={styles.icon}
        aria-hidden="true"
      >
        <Icon size={44} strokeWidth={2} />
      </span>

      <span className={styles.content}>
        <strong className={styles.title}>
          {title}
        </strong>

        <span className={styles.description}>
          {description}
        </span>
      </span>

      <span
        className={styles.arrow}
        aria-hidden="true"
      >
        ›
      </span>
    </Link>
  );
}