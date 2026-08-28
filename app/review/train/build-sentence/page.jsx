import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import BuildSentenceClient from "./BuildSentenceClient";

export default async function BuildSentencePage() {
  const vocabulary = await getVocabulary();

  return (
    <BuildSentenceClient
      vocabulary={vocabulary}
    />
  );
}