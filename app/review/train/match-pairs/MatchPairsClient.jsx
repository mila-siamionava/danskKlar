"use client";

import BackLink from "@/components/navigation/BackLink/BackLink";
import ExerciseHeader from "@/components/exercises/ExerciseHeader/ExerciseHeader";
import ExerciseProgress from "@/components/exercises/ExerciseProgress/ExerciseProgress";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { shuffle } from "../_lib/arrayUtils";

import styles from "./MatchPairs.module.css";

export default function MatchPairsClient({
  vocabulary,
}) {
  const usableVocabulary = useMemo(
    () =>
      vocabulary.filter(
        (item) =>
          item.term &&
          (item.english || item.russian)
      ),
    [vocabulary]
  );

  const [round, setRound] = useState(0);

  const [
    selectedTerm,
    setSelectedTerm,
  ] = useState(null);

  const [
    selectedTranslation,
    setSelectedTranslation,
  ] = useState(null);

  const [
    matchedIds,
    setMatchedIds,
  ] = useState([]);

  const [
    wrongPair,
    setWrongPair,
  ] = useState(false);

  const [
    translations,
    setTranslations,
  ] = useState([]);

  const roundItems = useMemo(() => {
    const start = round * 5;

    return usableVocabulary.slice(
      start,
      start + 5
    );
  }, [usableVocabulary, round]);

  const totalRounds = Math.ceil(
    usableVocabulary.length / 5
  );

  useEffect(() => {
    setTranslations(
      shuffle(roundItems)
    );
  }, [roundItems]);

  function chooseTerm(item) {
    if (
      matchedIds.includes(item.id)
    ) {
      return;
    }

    setSelectedTerm(item);
    setWrongPair(false);

    if (selectedTranslation) {
      checkPair(
        item,
        selectedTranslation
      );
    }
  }

  function chooseTranslation(item) {
    if (
      matchedIds.includes(item.id)
    ) {
      return;
    }

    setSelectedTranslation(item);
    setWrongPair(false);

    if (selectedTerm) {
      checkPair(
        selectedTerm,
        item
      );
    }
  }

  function checkPair(
    termItem,
    translationItem
  ) {
    if (
      termItem.id ===
      translationItem.id
    ) {
      setMatchedIds((current) => [
        ...current,
        termItem.id,
      ]);

      setSelectedTerm(null);
      setSelectedTranslation(null);
      setWrongPair(false);

      return;
    }

    setWrongPair(true);

    setTimeout(() => {
      setSelectedTerm(null);
      setSelectedTranslation(null);
      setWrongPair(false);
    }, 700);
  }

  const roundComplete =
    roundItems.length > 0 &&
    roundItems.every((item) =>
      matchedIds.includes(item.id)
    );

  function nextRound() {
    setTranslations([]);

    setRound(
      (current) => current + 1
    );

    setMatchedIds([]);
    setSelectedTerm(null);
    setSelectedTranslation(null);
    setWrongPair(false);
  }

  if (
    usableVocabulary.length === 0
  ) {
    return (
      <main className={styles.page}>
        <BackLink
          href="/review/train"
          label="Back to training"
        />

        <div
          className={
            styles.complete
          }
        >
          <h1>Match pairs</h1>

          <p>
            No usable vocabulary found.
          </p>
        </div>
      </main>
    );
  }

  if (roundItems.length === 0) {
    return (
      <main className={styles.page}>
        <BackLink
          href="/review/train"
          label="Back to training"
        />

        <div
          className={
            styles.complete
          }
        >
          <h1>
            Practice complete
          </h1>

          <p>
            You matched all available
            words.
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
        eyebrow="Match pairs"
        title="Match each word with its meaning"
        current={round + 1}
        total={totalRounds}
      />

      <ExerciseProgress
        current={round + 1}
        total={totalRounds}
      />

      <p
        className={
          styles.instructions
        }
      >
        Match each Danish expression
        with its English and Russian
        translation.
      </p>

      <div
        className={styles.game}
      >
        <div
          className={styles.column}
        >
          <h2>Expression</h2>

          {roundItems.map(
            (item) => {
              const matched =
                matchedIds.includes(
                  item.id
                );

              const selected =
                selectedTerm?.id ===
                item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.card} ${
                    matched
                      ? styles.matched
                      : ""
                  } ${
                    selected
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() =>
                    chooseTerm(item)
                  }
                  disabled={matched}
                >
                  {item.term}
                </button>
              );
            }
          )}
        </div>

        <div
          className={styles.column}
        >
          <h2>Translation</h2>

          {translations.map(
            (item) => {
              const matched =
                matchedIds.includes(
                  item.id
                );

              const selected =
                selectedTranslation?.id ===
                item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.card} ${
                    matched
                      ? styles.matched
                      : ""
                  } ${
                    selected
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() =>
                    chooseTranslation(
                      item
                    )
                  }
                  disabled={matched}
                >
                  <div
                    className={
                      styles.translation
                    }
                  >
                    {item.english && (
                      <span
                        className={
                          styles.english
                        }
                      >
                        🇬🇧{" "}
                        {item.english}
                      </span>
                    )}

                    {item.russian && (
                      <span
                        className={
                          styles.russian
                        }
                      >
                        🇷🇺{" "}
                        {item.russian}
                      </span>
                    )}
                  </div>
                </button>
              );
            }
          )}
        </div>
      </div>

      {wrongPair && (
        <p
          className={styles.wrong}
        >
          Not a match — try again.
        </p>
      )}

      {roundComplete && (
        <button
          type="button"
          className={
            styles.nextButton
          }
          onClick={nextRound}
        >
          Next round →
        </button>
      )}
    </main>
  );
}