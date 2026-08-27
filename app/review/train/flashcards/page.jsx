import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import FlashcardsClient from "./FlashcardsClient";

export default async function FlashcardsPage() {
  const vocabulary = await getVocabulary();

  return (
    <FlashcardsClient vocabulary={vocabulary} />
  );
}