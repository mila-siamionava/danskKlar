"use client";

import { useState } from "react";

import BackLink from "@/components/navigation/BackLink/BackLink";
import { addReviewItem } from "@/lib/reviewStorage";

import styles from "./TopicVocabularyList.module.css";

export default function TopicVocabularyList({
  words = [],
  topicName,
}) {
  const [selectedIds, setSelectedIds] = useState(
    new Set(),
  );

  function toggleWord(id) {
    setSelectedIds((current) => {
      const updated = new Set(current);

      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }

      return updated;
    });
  }

  function addSelectedToReview() {
    const selectedWords = words.filter(
      (word) => selectedIds.has(word.id),
    );

    selectedWords.forEach((word) => {
      addReviewItem({
        ...word,
        exerciseTitle: topicName,
      });
    });

    setSelectedIds(new Set());
  }

  const selectedCount = selectedIds.size;

  return (
    <>
      <div className={styles.headerRow}>
        <BackLink
          href="/topics"
          label="Back to topics"
          title={topicName}
        />

        <button
          type="button"
          className={styles.addButton}
          onClick={addSelectedToReview}
          disabled={selectedCount === 0}
        >
          {selectedCount > 0
            ? `Add ${selectedCount} / ${words.length} to review`
            : "Add to review"}
        </button>
      </div>

      <div className={styles.wordList}>
        {words.map((word) => {
          const isSelected =
            selectedIds.has(word.id);

          return (
            <label
              key={word.id}
              className={styles.wordRow}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() =>
                  toggleWord(word.id)
                }
              />

              <span className={styles.word}>
                {word.term}
              </span>

              {word.part_of_speech && (
                <span
                  className={
                    styles.partOfSpeech
                  }
                >
                  {word.part_of_speech}
                </span>
              )}
            </label>
          );
        })}
      </div>
    </>
  );
}