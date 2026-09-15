"use client";

import { useEffect, useState } from "react";

import {
  addReviewItem,
  getReviewItems,
  removeReviewItem,
} from "@/lib/reviewStorage";

export default function TopicVocabularyList({
  words,
  topicName,
}) {
  const [selectedIds, setSelectedIds] = useState(
    new Set(),
  );

  useEffect(() => {
    const reviewItems = getReviewItems();

    setSelectedIds(
      new Set(reviewItems.map((item) => item.id)),
    );
  }, []);

  function handleChange(word, checked) {
    if (checked) {
      addReviewItem({
        ...word,
        exerciseTitle: topicName,
      });

      setSelectedIds((current) => {
        const updated = new Set(current);
        updated.add(word.id);
        return updated;
      });
    } else {
      removeReviewItem(word.id);

      setSelectedIds((current) => {
        const updated = new Set(current);
        updated.delete(word.id);
        return updated;
      });
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gap: "0.75rem",
        marginTop: "1.5rem",
      }}
    >
      {words.map((word) => (
        <label
          key={word.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem",
            border:
              "1px solid var(--color-border)",
            borderRadius:
              "var(--border-radius-md)",
            background:
              "var(--color-surface)",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={selectedIds.has(word.id)}
            onChange={(event) =>
              handleChange(
                word,
                event.target.checked,
              )
            }
          />

          <span>
            <span>{word.term}</span>

            {word.part_of_speech && (
              <span
                style={{
                  marginLeft: "0.5rem",
                  color:
                    "var(--color-text-muted)",
                }}
              >
                {word.part_of_speech}
              </span>
            )}
          </span>
        </label>
      ))}
    </div>
  );
}