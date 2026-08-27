import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import DefinitionWordClient from "./DefinitionWordClient";

export default async function DefinitionWordPage() {
  const vocabulary = await getVocabulary();

  return (
    <DefinitionWordClient
      vocabulary={vocabulary}
    />
  );
}