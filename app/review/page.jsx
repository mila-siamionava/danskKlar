"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import {
  getReviewItems,
  removeReviewItem,
} from "@/lib/reviewStorage";

export default function ReviewPage() {
  const [items, setItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    setItems(getReviewItems());
  }, []);

  const groupedItems = items.reduce((groups, item) => {
    const title = item.exerciseTitle || "Other";

    if (!groups[title]) {
      groups[title] = [];
    }

    groups[title].push(item);

    return groups;
  }, {});

  function toggleWord(id) {
    setSelectedIds((current) => {
      if (current.includes(id)) {
        return current.filter(
          (selectedId) => selectedId !== id
        );
      }

      return [...current, id];
    });
  }

  function selectAllWords() {
    setSelectedIds(
      items.map((item) => item.id)
    );
  }

  function clearAllWords() {
    setSelectedIds([]);
  }

  function startTraining() {
    const selectedItems = items.filter((item) =>
      selectedIds.includes(item.id)
    );

    localStorage.setItem(
      "danskTrainerSelectedReview",
      JSON.stringify(selectedItems)
    );

    window.location.href = "/review/train";
  }

  function deleteSelectedWords() {
    selectedIds.forEach((id) => {
      removeReviewItem(id);
    });

    const updatedItems = getReviewItems();

    setItems(updatedItems);

    setSelectedIds([]);
  }

  return (
    <main>
      <Link href="/">
        <button type="button">
          ← Back to home
        </button>
      </Link>

      <h1>Review</h1>

      {items.length > 0 && (
        <div>
          {selectedIds.length === items.length ? (
            <button
              type="button"
              onClick={clearAllWords}
            >
              Clear all
            </button>
          ) : (
            <button
              type="button"
              onClick={selectAllWords}
            >
              Select all
            </button>
          )}
        </div>
      )}

      {items.length === 0 ? (
        <p>
          No words or phrases to review yet.
        </p>
      ) : (
        <>
          <div>
            {Object.entries(groupedItems).map(
              ([exerciseTitle, reviewItems]) => (
                <section key={exerciseTitle}>
                  <h2>{exerciseTitle}</h2>

                  <ul>
                    {reviewItems.map((item) => {
                      const isSelected =
                        selectedIds.includes(item.id);

                      return (
                        <li key={item.id}>
                          <label>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() =>
                                toggleWord(item.id)
                              }
                            />

                            <span>
                              {item.term?.toLowerCase()}
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )
            )}
          </div>

          {selectedIds.length > 0 && (
            <div>
              <p>
                {selectedIds.length} selected
              </p>

              <button
                type="button"
                onClick={startTraining}
              >
                Train selected →
              </button>

              <button
                type="button"
                onClick={deleteSelectedWords}
              >
                Delete learned words
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}