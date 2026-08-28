"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  getReviewItems,
  removeReviewItem,
} from "@/lib/reviewStorage";

import styles from "./Review.module.css";

export default function ReviewPage() {
  const [items, setItems] = useState([]);
  const [selectedIds, setSelectedIds] =
    useState([]);

  useEffect(() => {
    setItems(getReviewItems());
  }, []);

  const groupedItems = items.reduce(
    (groups, item) => {
      const title =
        item.exerciseTitle || "Other";

      if (!groups[title]) {
        groups[title] = [];
      }

      groups[title].push(item);

      return groups;
    },
    {}
  );

  function toggleWord(id) {
    setSelectedIds((current) => {
      if (current.includes(id)) {
        return current.filter(
          (selectedId) =>
            selectedId !== id
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
    const selectedItems = items.filter(
      (item) =>
        selectedIds.includes(item.id)
    );

    localStorage.setItem(
      "danskTrainerSelectedReview",
      JSON.stringify(selectedItems)
    );

    window.location.href =
      "/review/train";
  }

  function deleteSelectedWords() {
    selectedIds.forEach((id) => {
      removeReviewItem(id);
    });

    const updatedItems =
      getReviewItems();

    setItems(updatedItems);
    setSelectedIds([]);
  }

  function deleteAllWords() {
    items.forEach((item) => {
      removeReviewItem(item.id);
    });

    setItems([]);
    setSelectedIds([]);
  }

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
  <Link href="/">
    <button
      type="button"
      className={styles.backButton}
    >
      ← Back to home
    </button>
  </Link>
</div>

<header className={styles.header}>
  <span className={styles.eyebrow}>
    Vocabulary review
  </span>

  <h1>Review words</h1>

  <p>
    Select the words and expressions you want to practice.
  </p>
</header>

{items.length > 0 && (
  <div className={styles.actionBar}>
    <div className={styles.manageActions}>
      {selectedIds.length === items.length ? (
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={clearAllWords}
        >
          Clear selection
        </button>
      ) : (
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={selectAllWords}
        >
          Select all
        </button>
      )}

      {selectedIds.length > 0 && (
        <button
          type="button"
          className={styles.deleteButton}
          onClick={deleteSelectedWords}
        >
          Delete selected
        </button>
      )}

      <button
        type="button"
        className={styles.deleteLink}
        onClick={deleteAllWords}
      >
        Delete all
      </button>
    </div>

    {selectedIds.length > 0 && (
      <div className={styles.trainActions}>
        <span className={styles.selectionCount}>
          {selectedIds.length} selected
        </span>

        <button
          type="button"
          className={styles.trainButton}
          onClick={startTraining}
        >
          Train selected →
        </button>
      </div>
    )}
  </div>
)}

      <header className={styles.header}>
        <span className={styles.eyebrow}>
          Vocabulary review
        </span>

        <h1>Review words</h1>

        <p>
          Select the words and expressions
          you want to practice.
        </p>
      </header>

      {items.length === 0 ? (
        <p className={styles.emptyState}>
          No words or phrases to review yet.
        </p>
      ) : (
        <>
          <div className={styles.groups}>
            {Object.entries(
              groupedItems
            ).map(
              ([
                exerciseTitle,
                reviewItems,
              ]) => (
                <section
                  key={exerciseTitle}
                  className={styles.group}
                >
                  <h2>
                    {exerciseTitle}
                  </h2>

                  <ul
                    className={
                      styles.wordList
                    }
                  >
                    {reviewItems.map(
                      (item) => {
                        const isSelected =
                          selectedIds.includes(
                            item.id
                          );

                        return (
                          <li
                            key={item.id}
                            className={
                              styles.wordItem
                            }
                          >
                            <label
                              className={`${
                                styles.wordLabel
                              } ${
                                isSelected
                                  ? styles.selectedWord
                                  : ""
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={
                                  isSelected
                                }
                                onChange={() =>
                                  toggleWord(
                                    item.id
                                  )
                                }
                              />

                              <span
                                className={
                                  styles.wordText
                                }
                              >
                                {item.term?.toLowerCase()}
                              </span>
                            </label>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </section>
              )
            )}
          </div>

          {selectedIds.length > 0 && (
            <div
              className={
                styles.selectionBar
              }
            >
              <p
                className={
                  styles.selectionCount
                }
              >
                {selectedIds.length} selected
              </p>

              
            </div>
          )}
        </>
      )}
    </main>
  );
}