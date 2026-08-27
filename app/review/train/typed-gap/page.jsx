import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import TypedGapClient from "./TypedGapClient";

export default async function TypedGapPage() {
  const vocabulary = await getVocabulary();

  return (
    <TypedGapClient vocabulary={vocabulary} />
  );
}