import ExerciseTop from "@/components/exercises/ExerciseTop/ExerciseTop";

import styles from "./ExerciseShell.module.css";

export default function ExerciseShell({
  eyebrow,
  title,
  current,
  total,
  instructions,
  controls,
  children,
}) {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <ExerciseTop
          eyebrow={eyebrow}
          title={title}
          current={current}
          total={total}
          instructions={instructions}
        />

        {controls && (
          <div className={styles.controls}>
            {controls}
          </div>
        )}

        <div className={styles.exercise}>
          {children}
        </div>
      </div>
    </main>
  );
}