import styles from "./ExerciseFilter.module.css";

export default function ExerciseFilter({
  options,
  value,
  onChange,
  name = "exercise-filter",
}) {
  return (
    <div
      className={styles.filter}
      role="radiogroup"
    >
      {options.map((option) => {
        const isSelected =
          option.value === value;

        return (
          <label
            key={option.value}
            className={`${styles.option} ${
              isSelected
                ? styles.selected
                : ""
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
  );
}