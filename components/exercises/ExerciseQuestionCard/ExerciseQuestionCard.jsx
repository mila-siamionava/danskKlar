import styles from "./ExerciseQuestionCard.module.css";

export default function ExerciseQuestionCard({
  children,
  className = "",
}) {
  return (
    <section
      className={`${styles.card} ${className}`.trim()}
    >
      {children}
    </section>
  );
}