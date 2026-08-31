import ExerciseModeCard from "../ExerciseModeCard/ExerciseModeCard";

import styles from "./ExerciseModeGroup.module.css";

export default function ExerciseModeGroup({
  title,
  modes,
  icon: Icon,
}) {
  return (
    <section className={styles.group}>
      <div className={styles.heading}>
        {Icon && (
          <Icon
            className={styles.headingIcon}
            size={16}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        )}

        <h2 className={styles.title}>
          {title}
        </h2>
      </div>

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