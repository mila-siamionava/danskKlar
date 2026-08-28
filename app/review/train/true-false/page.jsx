import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import TrueFalseClient from "./TrueFalseClient";

export default async function TrueFalsePage() {
  const vocabulary = await getVocabulary();

  return (
    <TrueFalseClient
      vocabulary={vocabulary}
    />
  );
}