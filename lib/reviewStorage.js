const REVIEW_KEY = "danskTrainerReview";

export function getReviewItems() {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem(REVIEW_KEY);

  return stored ? JSON.parse(stored) : [];
}

export function addReviewItem(item) {
  if (typeof window === "undefined") return;

  const current = getReviewItems();

  const alreadyExists = current.some(
    (reviewItem) => reviewItem.id === item.id
  );

  if (alreadyExists) return;

  const updated = [
    ...current,
    {
      ...item,
      addedAt: new Date().toISOString(),
      correctCount: 0,
    },
  ];

  localStorage.setItem(REVIEW_KEY, JSON.stringify(updated));
}

export function removeReviewItem(id) {
  if (typeof window === "undefined") return;

  const current = getReviewItems();

  const updated = current.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(REVIEW_KEY, JSON.stringify(updated));
}