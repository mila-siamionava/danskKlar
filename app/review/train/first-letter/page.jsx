import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import FirstLetterClient from "./FirstLetterClient";

export default async function FirstLetterPage() {
  const vocabulary = await getVocabulary();

  return (
    <FirstLetterClient
      vocabulary={vocabulary}
    />
  );
}