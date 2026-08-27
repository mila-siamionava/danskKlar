import { getVocabulary } from "@/lib/vocabulary/getVocabulary";

import FillGapClient from "./FillGapClient";

export default async function FillGapPage() {
  const vocabulary = await getVocabulary();

  return (
    <FillGapClient vocabulary={vocabulary} />
  );
}