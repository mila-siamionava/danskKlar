import styles from "./GapSelect.module.css";

export default function GapSelect({
  question,
  value = "",
  checked = false,
  onChange,
  className = "",
}) {
  const isCorrect =
    checked &&
    value === question.correctOptionId;

  const isWrong =
    checked &&
    value &&
    value !== question.correctOptionId;

  const classes = [
    styles.select,
    isCorrect ? styles.correct : "",
    isWrong ? styles.wrong : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <select
      className={classes}
      value={value}
      onChange={(event) =>
        onChange?.(
          question.id,
          event.target.value
        )
      }
      aria-label={`Question ${question.id}`}
    >
     <option value="">
  ({question.id}) Choose answer
</option>
      {question.options.map((option) => (
        <option
          key={option.id}
          value={option.id}
        >
          {option.text}
        </option>
      ))}
    </select>
  );
}