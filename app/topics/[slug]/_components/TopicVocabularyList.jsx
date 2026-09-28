"use client";

import {
  useEffect,
  useState,
} from "react";

import BackLink from "@/components/navigation/BackLink/BackLink";

import {
  addReviewItem,
  getReviewItems,
  removeReviewItem,
} from "@/lib/reviewStorage";

import styles from "./TopicVocabularyList.module.css";

export default function TopicVocabularyList({
  words = [],
  topicName,
  topicSlug,
}) {
  const [reviewIds, setReviewIds] = useState(
    new Set(),
  );

  const [expandedIds, setExpandedIds] = useState(
    new Set(),
  );

  const [openSections, setOpenSections] = useState(
    new Set(),
  );

  useEffect(() => {
    const reviewItems = getReviewItems();

    setReviewIds(
      new Set(
        reviewItems.map(
          (item) => item.vocabularyId ?? item.id,
        ),
      ),
    );
  }, []);

  function toggleReview(word) {
    const isInReview = reviewIds.has(word.id);

    if (isInReview) {
      removeReviewItem(word.id);

      setReviewIds((current) => {
        const updated = new Set(current);

        updated.delete(word.id);

        return updated;
      });

      return;
    }

    addReviewItem({
      ...word,
      vocabularyId: word.id,
      exerciseTitle: topicName,
    });

    setReviewIds((current) => {
      const updated = new Set(current);

      updated.add(word.id);

      return updated;
    });
  }

  function toggleDetails(id) {
    setExpandedIds((current) => {
      const updated = new Set(current);

      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }

      return updated;
    });
  }

  function toggleSection(wordId, section) {
    const sectionId = `${wordId}-${section}`;

    setOpenSections((current) => {
      const updated = new Set(current);

      if (updated.has(sectionId)) {
        updated.delete(sectionId);
      } else {
        updated.add(sectionId);
      }

      return updated;
    });
  }

  return (
    <>
      <div className={styles.headerRow}>
       <BackLink
  href={`/topics/${topicSlug}`}
  label={`Back to ${topicName}`}
  title="Vocabulary"
/>
      </div>

      <div className={styles.wordList}>
        {words.map((word) => {
          const isInReview =
            reviewIds.has(word.id);

          const isExpanded =
            expandedIds.has(word.id);

          const definitionId =
            `${word.id}-definition`;

          const exampleId =
            `${word.id}-example`;

          const isDefinitionOpen =
            openSections.has(definitionId);

          const isExampleOpen =
            openSections.has(exampleId);

          return (
            <article
              key={word.id}
              className={styles.wordItem}
            >
              <div className={styles.wordRow}>
                <label className={styles.wordSelection}>
  <input
    type="checkbox"
    className={styles.checkbox}
    checked={isInReview}
    onChange={() => toggleReview(word)}
    aria-label={
      isInReview
        ? `Remove ${word.term} from review`
        : `Add ${word.term} to review`
    }
  />

  <span className={styles.wordInfo}>
    <span className={styles.word}>
      {word.term}
    </span>

    {word.part_of_speech && (
      <span className={styles.partOfSpeech}>
        {word.part_of_speech}
      </span>
    )}
  </span>
</label>

                <button
                  type="button"
                  className={styles.detailsButton}
                  onClick={() =>
                    toggleDetails(word.id)
                  }
                  aria-expanded={isExpanded}
                >
                  {isExpanded
                    ? "Hide details"
                    : "Details"}

                  <span
                    className={styles.chevron}
                    aria-hidden="true"
                  >
                    {isExpanded ? "⌃" : "›"}
                  </span>
                </button>
              </div>

              {isExpanded && (
                <div className={styles.details}>
                  <div
                    className={
                      styles.translations
                    }
                  >
                    <span
                      className={
                        styles.sectionLabel
                      }
                    >
                      Translation
                    </span>

                    {word.english && (
                      <p
                        className={
                          styles.translation
                        }
                      >
                        {word.english}
                      </p>
                    )}

                    {word.russian && (
                      <p
                        className={
                          styles.secondaryTranslation
                        }
                      >
                        {word.russian}
                      </p>
                    )}
                  </div>

                  {word.definition_da && (
                    <div
                      className={
                        styles.dropdownSection
                      }
                    >
                      <button
                        type="button"
                        className={
                          styles.dropdownButton
                        }
                        onClick={() =>
                          toggleSection(
                            word.id,
                            "definition",
                          )
                        }
                        aria-expanded={
                          isDefinitionOpen
                        }
                      >
                        <span>Definition</span>

                        <span
                          className={
                            styles.dropdownChevron
                          }
                          aria-hidden="true"
                        >
                          {isDefinitionOpen
                            ? "⌃"
                            : "⌄"}
                        </span>
                      </button>

                      {isDefinitionOpen && (
                        <div
                          className={
                            styles.dropdownContent
                          }
                        >
                          <p>
                            {word.definition_da}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {word.example && (
                    <div
                      className={
                        styles.dropdownSection
                      }
                    >
                      <button
                        type="button"
                        className={
                          styles.dropdownButton
                        }
                        onClick={() =>
                          toggleSection(
                            word.id,
                            "example",
                          )
                        }
                        aria-expanded={
                          isExampleOpen
                        }
                      >
                        <span>Example</span>

                        <span
                          className={
                            styles.dropdownChevron
                          }
                          aria-hidden="true"
                        >
                          {isExampleOpen
                            ? "⌃"
                            : "⌄"}
                        </span>
                      </button>

                      {isExampleOpen && (
                        <div
                          className={
                            styles.dropdownContent
                          }
                        >
                          <p>
                            {word.example}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}