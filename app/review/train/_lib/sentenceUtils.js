export function escapeRegExp(text) {
  return text.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}

export function createGapSentence(sentence, term) {
  if (!sentence || !term) {
    return "";
  }

  const regex = new RegExp(
    escapeRegExp(term),
    "i"
  );

  if (!regex.test(sentence)) {
    return "";
  }

  return sentence.replace(regex, "{{gap}}");
}