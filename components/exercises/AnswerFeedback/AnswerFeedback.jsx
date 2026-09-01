import styles from "./AnswerFeedback.module.css";

export default function AnswerFeedback({ question, selectedOptionId }) {
  if (!selectedOptionId) {
    return null;
  }

  const isCorrect = selectedOptionId === question.correctOptionId;

  if (isCorrect) {
    return null;
  }

  const correctOption = question.options.find(
    (option) => option.id === question.correctOptionId,
  );

  const explanation = question.explanation;

  return (
    <div
      className={`${styles.feedback} ${styles.wrong} ${styles.popover}`}
      role="alert"
    >
      <div className={styles.header}>
        
        <div className={styles.headerContent}>
          <span className={styles.status}>Not quite</span>

          <span className={styles.answer}>
            Correct answer: <strong>{correctOption?.text}</strong>
          </span>
        </div>
      </div>

      {explanation && (
        <details className={styles.moreDetails}>
          <summary className={styles.moreDetailsSummary}>
            <span>More details</span>

            <span className={styles.arrow} aria-hidden="true">
              ⌄
            </span>
          </summary>

          <div className={styles.explanation}>
            {explanation.english && (
              <details className={styles.collapsible}>
                <summary className={styles.summary}>
                  <span className={styles.languageLabel}>English</span>

                  <span className={styles.arrow} aria-hidden="true">
                    ⌄
                  </span>
                </summary>

                <div className={styles.collapsibleContent}>
                  <p>{explanation.english}</p>
                </div>
              </details>
            )}

            {explanation.russian && (
              <details className={styles.collapsible}>
                <summary className={styles.summary}>
                  <span className={styles.languageLabel}>Русский</span>

                  <span className={styles.arrow} aria-hidden="true">
                    ⌄
                  </span>
                </summary>

                <div className={styles.collapsibleContent}>
                  <p>{explanation.russian}</p>
                </div>
              </details>
            )}

            {explanation.translations?.length > 0 && (
              <details className={styles.collapsible}>
                <summary className={styles.summary}>
                  <span className={styles.languageLabel}>
                    Words & expressions
                  </span>

                  <span className={styles.arrow} aria-hidden="true">
                    ⌄
                  </span>
                </summary>

                <div className={styles.collapsibleContent}>
                  <div className={styles.translationList}>
                    {explanation.translations.map((item) => (
                      <div key={item.word} className={styles.translationRow}>
                        <strong>{item.word}</strong>
                        <span>{item.english}</span>
                        <span>{item.russian}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            )}
          </div>
        </details>
      )}
    </div>
  );
}
