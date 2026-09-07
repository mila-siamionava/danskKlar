"use client";

import ExerciseQuestionCard from "@/components/exercises/ExerciseQuestionCard/ExerciseQuestionCard";
import ExerciseShell from "@/components/exercises/ExerciseShell/ExerciseShell";
import ExerciseState from "@/components/exercises/ExerciseState/ExerciseState";

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
            .split(/\s+/).length >= 3,
      ),
    [vocabulary],
  );

  const {
    currentIndex,
    finished,
    next,
  } = useTrainingProgress(
    usableItems.length,
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
    }),
  );

  useEffect(() => {
    if (originalWords.length === 0) {
      setWords([]);
      return;
    }

    const wordItems =
      originalWords.map(
        (text, index) => ({
          id: `${index}-${text}`,
          text,
        }),
      );

    setWords(
      shuffle(wordItems),
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
            item.id === active.id,
        );

      const newIndex =
        currentWords.findIndex(
          (item) =>
            item.id === over.id,
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
        newIndex,
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
      <main className="mobilePage">
        <ExerciseState
          eyebrow="Build sentence"
          title="No usable examples"
          message="No usable example sentences were found."
          actionLabel="Back to training"
          actionHref="/review/train"
        />
      </main>
    );
  }

  if (finished) {
    return (
      <main className="mobilePage">
        <ExerciseState
          eyebrow="Build sentence"
          title="Practice complete"
          message={`You completed ${
            usableItems.length
          } ${
            usableItems.length === 1
              ? "sentence"
              : "sentences"
          }.`}
          actionLabel="Back to training"
          actionHref="/review/train"
        />
      </main>
    );
  }

  return (
    <ExerciseShell
      eyebrow="Build sentence"
      title="Put the words in the correct order"
      current={currentIndex + 1}
      total={usableItems.length}
    >
      <ExerciseQuestionCard>
        <DndContext
          sensors={sensors}
          collisionDetection={
            closestCenter
          }
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={words.map(
              (item) => item.id,
            )}
            strategy={
              horizontalListSortingStrategy
            }
          >
            <div
              className={
                styles.words
              }
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
            onClick={
              checkSentence
            }
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
      </ExerciseQuestionCard>
    </ExerciseShell>
  );
}