import BackLink from "@/components/navigation/BackLink/BackLink";
import ExerciseHeader from "@/components/exercises/ExerciseHeader/ExerciseHeader";
import ExerciseProgress from "@/components/exercises/ExerciseProgress/ExerciseProgress";

import styles from "./ExerciseTop.module.css";

export default function ExerciseTop({
  eyebrow,
  title,
  current,
  total,
  instructions,
}) {
  return (
    <div className={styles.top}>
      <BackLink
        href="/review/train"
        label="Back to training"
      />

      <ExerciseHeader
        eyebrow={eyebrow}
        title={title}
        current={current}
        total={total}
      />

      <ExerciseProgress
        current={current}
        total={total}
      />

      {instructions && (
        <div className={styles.instructions}>
          {instructions}
        </div>
      )}
    </div>
  );
}