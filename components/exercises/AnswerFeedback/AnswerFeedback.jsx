import styles from "./AnswerFeedback.module.css";

export default function AnswerFeedback({
  question,
  selectedOptionId,
}) {
  if (!selectedOptionId) {
    return null;
  }

  const isCorrect =
    selectedOptionId === question.correctOptionId;

  if (isCorrect) {
    return null;
  }

  const correctOption = question.options.find(
    (option) =>
      option.id === question.correctOptionId
  );

  return (
    <div
      className={`${styles.feedback} ${styles.wrong}`}
      role="alert"
    >
      <div className={styles.header}>
        <span className={styles.status}>
          Not quite
        </span>

        <span className={styles.answer}>
          Correct answer:{" "}
          <strong>{correctOption?.text}</strong>
        </span>
      </div>

      {question.explanation && (
        <div className={styles.explanation}>
          <details className={styles.collapsible}>
            <summary className={styles.summary}>
              <span className={styles.languageLabel}>
                English
              </span>
              <span className={styles.arrow}>⌄</span>
            </summary>

            <div className={styles.collapsibleContent}>
              <p>{question.explanation.english}</p>
            </div>
          </details>

          <details className={styles.collapsible}>
            <summary className={styles.summary}>
              <span className={styles.languageLabel}>
                Русский
              </span>
              <span className={styles.arrow}>⌄</span>
            </summary>

            <div className={styles.collapsibleContent}>
              <p>{question.explanation.russian}</p>
            </div>
          </details>

          {question.explanation.translations && (
            <details className={styles.collapsible}>
              <summary className={styles.summary}>
                <span className={styles.languageLabel}>
                  Words & expressions
                </span>
                <span className={styles.arrow}>⌄</span>
              </summary>

              <div className={styles.collapsibleContent}>
                <div className={styles.translationList}>
                  {question.explanation.translations.map(
                    (item) => (
                      <div
                        key={item.word}
                        className={styles.translationRow}
                      >
                        <strong>{item.word}</strong>
                        <span>{item.english}</span>
                        <span>{item.russian}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </details>
          )}
        </div>
      )}
    </div>
  );
}