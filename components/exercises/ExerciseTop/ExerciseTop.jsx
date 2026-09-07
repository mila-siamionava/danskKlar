import BackLink from "@/components/navigation/BackLink/BackLink";
import ExerciseProgress from "@/components/exercises/ExerciseProgress/ExerciseProgress";

import styles from "./ExerciseTop.module.css";

export default function ExerciseTop({
  eyebrow,
  title,
  current,
  total,
}) {
  return (
    <div className={styles.top}>
      <div className={styles.topRow}>
        <BackLink
          href="/review/train"
          label="Back to training"
        />

        <span className={styles.exerciseName}>
          {eyebrow}
        </span>

        {current && total ? (
          <span
            className={styles.counter}
            aria-label={`Question ${current} of ${total}`}
          >
            {current} / {total}
          </span>
        ) : (
          <span className={styles.counterSpacer} />
        )}
      </div>

      {title && (
        <h1 className={styles.title}>
          {title}
        </h1>
      )}

      <ExerciseProgress
        current={current}
        total={total}
      />
    </div>
  );
}