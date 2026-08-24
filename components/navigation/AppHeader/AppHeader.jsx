import styles from "./AppHeader.module.css";

export default function AppHeader({
  title = "Dansk Trainer",
  rightContent = null,
  className = "",
}) {
  const classes = [
    styles.header,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          {title}
        </div>

        {rightContent && (
          <div className={styles.actions}>
            {rightContent}
          </div>
        )}
      </div>
    </header>
  );
}