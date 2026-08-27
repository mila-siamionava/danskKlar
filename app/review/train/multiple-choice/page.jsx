import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import MultipleChoiceClient from "./MultipleChoiceClient";

export default async function MultipleChoicePage() {
  const vocabulary = await getVocabulary();

  return (
    <MultipleChoiceClient
      vocabulary={vocabulary}
    />
  );
}