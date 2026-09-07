import styles from "./ExerciseInstructions.module.css";

export default function ExerciseInstructions({
  children,
}) {
  if (!children) {
    return null;
  }

  return (
    <p className={styles.instructions}>
      {children}
    </p>
  );
}