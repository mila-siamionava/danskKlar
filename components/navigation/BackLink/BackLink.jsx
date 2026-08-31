import Link from "next/link";

import styles from "./BackLink.module.css";

export default function BackLink({
  href,
  label = "Back",
}) {
  return (
    <Link
      href={href}
      className={styles.backLink}
      aria-label={label}
    >
      ←
    </Link>
  );
}