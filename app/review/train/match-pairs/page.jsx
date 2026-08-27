import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import MatchPairsClient from "./MatchPairsClient";

export default async function MatchPairsPage() {
  const vocabulary = await getVocabulary();

  return (
    <MatchPairsClient
      vocabulary={vocabulary}
    />
  );
}