import Link from "next/link";

import styles from "./BackLink.module.css";

export default function BackLink({
  href,
  label = "Back",
  title = "",
}) {
  return (
    <div className={styles.wrapper}>
      <Link
        href={href}
        className={styles.backLink}
        aria-label={label}
      >
        ←
      </Link>

      {title && (
        <span className={styles.title}>
          {title}
        </span>
      )}
    </div>
  );
}