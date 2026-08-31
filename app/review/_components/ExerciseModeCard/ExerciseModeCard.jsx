import Link from "next/link";

import styles from "./ExerciseModeCard.module.css";

export default function ExerciseModeCard({
  href,
  title,
  description,
  icon,
}) {
  return (
    <Link
      href={href}
      className={styles.card}
    >
      <div
        className={styles.iconBox}
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <span
        className={styles.arrow}
        aria-hidden="true"
      >
        ›
      </span>
    </Link>
  );
}