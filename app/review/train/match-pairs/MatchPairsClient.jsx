"use client";

import Link from "next/link";
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

  const [selectedTerm, setSelectedTerm] =
    useState(null);

  const [
    selectedTranslation,
    setSelectedTranslation,
  ] = useState(null);

  const [matchedIds, setMatchedIds] =
    useState([]);

  const [wrongPair, setWrongPair] =
    useState(false);

  const roundItems = useMemo(() => {
    const start = round * 5;

    return usableVocabulary.slice(
      start,
      start + 5
    );
  }, [usableVocabulary, round]);

 const [translations, setTranslations] =
  useState([]);

useEffect(() => {
  setTranslations(
    shuffle(roundItems)
  );
}, [roundItems]);

  function chooseTerm(item) {
    if (matchedIds.includes(item.id)) {
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
    if (matchedIds.includes(item.id)) {
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
      termItem.id === translationItem.id
    ) {
      setMatchedIds((current) => [
        ...current,
        termItem.id,
      ]);

      setSelectedTerm(null);
      setSelectedTranslation(null);
      setWrongPair(false);
    } else {
      setWrongPair(true);

      setTimeout(() => {
        setSelectedTerm(null);
        setSelectedTranslation(null);
        setWrongPair(false);
      }, 700);
    }
  }

  const roundComplete =
    roundItems.length > 0 &&
    roundItems.every((item) =>
      matchedIds.includes(item.id)
    );

  function nextRound() {
  setTranslations([]);

  setRound((current) => current + 1);

  setMatchedIds([]);
  setSelectedTerm(null);
  setSelectedTranslation(null);
  setWrongPair(false);
}

  if (roundItems.length === 0) {
    return (
      <main className={styles.page}>
        <div className={styles.complete}>
          <h1>Practice complete</h1>

          <p>
            You matched all available words.
          </p>

          <Link href="/review/train">
            <button
              type="button"
              className={styles.backButton}
            >
              ← Back to training
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <Link href="/review/train">
        <button
          type="button"
          className={styles.backButton}
        >
          ← Back to training
        </button>
      </Link>

      <header className={styles.header}>
        <span className={styles.eyebrow}>
          Match pairs
        </span>

        <h1>
          Match word and translation
        </h1>

        <p>
          Match each Danish expression with
          its English and Russian translation.
        </p>
      </header>

      <div className={styles.game}>
        <div className={styles.column}>
          <h2>Expression</h2>

          {roundItems.map((item) => {
            const matched =
              matchedIds.includes(item.id);

            const selected =
              selectedTerm?.id === item.id;

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
          })}
        </div>

        <div className={styles.column}>
          <h2>Translation</h2>

          {translations.map((item) => {
            const matched =
              matchedIds.includes(item.id);

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
                  chooseTranslation(item)
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
                      🇬🇧 {item.english}
                    </span>
                  )}

                  {item.russian && (
                    <span
                      className={
                        styles.russian
                      }
                    >
                      🇷🇺 {item.russian}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {wrongPair && (
        <p className={styles.wrong}>
          Not a match — try again.
        </p>
      )}

      {roundComplete && (
        <button
          type="button"
          className={styles.nextButton}
          onClick={nextRound}
        >
          Next 5 →
        </button>
      )}
    </main>
  );
}