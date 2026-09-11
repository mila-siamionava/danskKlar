import { useState } from "react";

export function useTrainingProgress(total) {
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const [
    finished,
    setFinished,
  ] = useState(false);

  function next() {
    if (
      currentIndex ===
      total - 1
    ) {
      setFinished(true);
      return;
    }

    setCurrentIndex(
      (current) =>
        current + 1,
    );
  }

  function reset() {
    setCurrentIndex(0);
    setFinished(false);
  }

  return {
    currentIndex,
    finished,
    next,
    reset,
  };
}