import ExerciseModeCard from "../ExerciseModeCard/ExerciseModeCard";

import styles from "./ExerciseModeGroup.module.css";

export default function ExerciseModeGroup({
  title,
  modes,
}) {
  return (
    <section className={styles.group}>
      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.list}>
        {modes.map((mode) => (
          <ExerciseModeCard
            key={mode.href}
            {...mode}
          />
        ))}
      </div>
    </section>
  );
}