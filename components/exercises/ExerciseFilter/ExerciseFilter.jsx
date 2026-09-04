import styles from "./ExerciseFilter.module.css";

export default function ExerciseFilter({
  label = "Practice",
  options,
  value,
  onChange,
  name = "exercise-filter",
}) {
  return (
    <div className={styles.card}>
      <span className={styles.label}>
        {label}
      </span>

      <div className={styles.options}>
        {options.map((option) => {
          const isSelected =
            option.value === value;

          return (
            <label
              key={option.value}
              className={`${styles.option} ${
                isSelected
                  ? styles.selected
                  : styles.faded
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={() =>
                  onChange(option.value)
                }
              />

              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}