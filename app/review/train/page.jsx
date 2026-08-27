"use client";

import Link from "next/link";

export default function ReviewTrainPage() {
  return (
    <main>
      <h1>Train your words</h1>

      <p>Choose how you want to practice.</p>

      <div>
        <Link href="/review/train/flashcards">
          <button type="button">
            Flashcards
          </button>
        </Link>

        <Link href="/review/train/multiple-choice">
          <button type="button">
            Multiple choice
          </button>
        </Link>
<Link href="/review/train/definition-word">
  <button type="button">
    Definition → Word
  </button>
</Link>
        <Link href="/review/train/fill-gap">
          <button type="button">
            Fill the gap
          </button>
        </Link>
      </div>
    </main>
  );
}