import Badge from "@/components/ui/Badge/Badge";
import styles from "./ExerciseHeader.module.css";

export default function ExerciseHeader({
  title,
  level,
  category,
  instructions,
  questionCount,
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
            <div className={styles.content}>
        <h1 className={styles.title}>
          {title}
        </h1>

        {instructions && (
          <p className={styles.instructions}>
            {instructions}
          </p>
        )}
      </div>
    </header>
  );
}