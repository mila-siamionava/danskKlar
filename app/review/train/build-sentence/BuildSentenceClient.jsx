"use client";

import BackLink from "@/components/navigation/BackLink/BackLink";
import ExerciseHeader from "@/components/exercises/ExerciseHeader/ExerciseHeader";
import ExerciseProgress from "@/components/exercises/ExerciseProgress/ExerciseProgress";

import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { shuffle } from "../_lib/arrayUtils";
import { useTrainingProgress } from "../_hooks/useTrainingProgress";

import styles from "./BuildSentence.module.css";

function SortableWord({
  item,
  checked,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
    disabled: checked,
  });

  const style = {
    transform:
      CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 2 : undefined,
  };

  return (
    <button
      ref={setNodeRef}
      type="button"
      className={`${styles.word} ${
        isDragging
          ? styles.dragging
          : ""
      }`}
      style={style}
      disabled={checked}
      {...attributes}
      {...listeners}
    >
      {item.text}
    </button>
  );
}

export default function BuildSentenceClient({
  vocabulary,
}) {
  const usableItems = useMemo(
    () =>
      vocabulary.filter(
        (item) =>
          item.example &&
          item.example
            .trim()
            .split(/\s+/).length >= 3
      ),
    [vocabulary]
  );

  const {
    currentIndex,
    finished,
    next,
  } = useTrainingProgress(
    usableItems.length
  );

  const [words, setWords] =
    useState([]);

  const [checked, setChecked] =
    useState(false);

  const currentItem =
    usableItems[currentIndex];

  const originalWords =
    useMemo(() => {
      if (!currentItem?.example) {
        return [];
      }

      return currentItem.example
        .trim()
        .split(/\s+/);
    }, [currentItem]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),

    useSensor(KeyboardSensor, {
      coordinateGetter:
        sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (originalWords.length === 0) {
      setWords([]);
      return;
    }

    /*
      Give every word a unique id.

      This is important because the same
      word can appear more than once in
      one sentence.
    */
    const wordItems =
      originalWords.map(
        (text, index) => ({
          id: `${index}-${text}`,
          text,
        })
      );

    setWords(
      shuffle(wordItems)
    );
  }, [originalWords]);

  const isCorrect =
    words
      .map((item) => item.text)
      .join(" ") ===
    originalWords.join(" ");

  function handleDragEnd(event) {
    const {
      active,
      over,
    } = event;

    if (
      checked ||
      !over ||
      active.id === over.id
    ) {
      return;
    }

    setWords((currentWords) => {
      const oldIndex =
        currentWords.findIndex(
          (item) =>
            item.id === active.id
        );

      const newIndex =
        currentWords.findIndex(
          (item) =>
            item.id === over.id
        );

      if (
        oldIndex === -1 ||
        newIndex === -1
      ) {
        return currentWords;
      }

      return arrayMove(
        currentWords,
        oldIndex,
        newIndex
      );
    });
  }

  function checkSentence() {
    setChecked(true);
  }

  function nextSentence() {
    setChecked(false);
    next();
  }

  if (usableItems.length === 0) {
    return (
      <main className={styles.page}>
        <BackLink
          href="/review/train"
          label="Back to training"
        />

        <h1>Build a sentence</h1>

        <p>
          No usable example sentences
          found.
        </p>
      </main>
    );
  }

  if (finished) {
    return (
      <main className={styles.page}>
        <BackLink
          href="/review/train"
          label="Back to training"
        />

        <div
          className={styles.complete}
        >
          <h1>
            Practice complete
          </h1>

          <p>
            You completed{" "}
            {usableItems.length}{" "}
            sentences.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <BackLink
        href="/review/train"
        label="Back to training"
      />

      <ExerciseHeader
        eyebrow="Build sentence"
        title="Put the words in the correct order"
        current={currentIndex + 1}
        total={usableItems.length}
      />

      <ExerciseProgress
        current={currentIndex + 1}
        total={usableItems.length}
      />

      <section
        className={
          styles.questionCard
        }
      >
        <DndContext
          sensors={sensors}
          collisionDetection={
            closestCenter
          }
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={words.map(
              (item) => item.id
            )}
            strategy={
              horizontalListSortingStrategy
            }
          >
            <div
              className={styles.words}
            >
              {words.map((item) => (
                <SortableWord
                  key={item.id}
                  item={item}
                  checked={checked}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {!checked && (
          <button
            type="button"
            className={
              styles.checkButton
            }
            onClick={checkSentence}
          >
            Check
          </button>
        )}

        {checked && (
          <div
            className={
              styles.feedback
            }
          >
            {isCorrect ? (
              <p
                className={
                  styles.correct
                }
              >
                ✓ Correct
              </p>
            ) : (
              <div
                className={
                  styles.wrong
                }
              >
                <p>
                  Correct sentence:
                </p>

                <strong>
                  {
                    currentItem.example
                  }
                </strong>
              </div>
            )}

            <button
              type="button"
              className={
                styles.nextButton
              }
              onClick={
                nextSentence
              }
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </main>
  );
}