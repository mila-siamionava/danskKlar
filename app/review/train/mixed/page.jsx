import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import MixedClient from "./MixedClient";

export default async function MixedPage() {
  const vocabulary = await getVocabulary();

  return (
    <MixedClient
      vocabulary={vocabulary}
    />
  );
}