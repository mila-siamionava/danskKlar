import styles from "./ExerciseHeader.module.css";

export default function ExerciseHeader({
  eyebrow,
  title,
  current,
  total,
}) {
  return (
    <header className={styles.header}>
      <div>
        {eyebrow && (
          <span className={styles.eyebrow}>
            {eyebrow}
          </span>
        )}

        <h1>{title}</h1>
      </div>

      {current && total && (
        <span
          className={styles.counter}
          aria-label={`Question ${current} of ${total}`}
        >
          {current} / {total}
        </span>
      )}
    </header>
  );
}