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
export function createDoubleGapSentence(
  sentence,
  target1,
  target2
) {
  if (!sentence || !target1 || !target2) {
    return "";
  }

  const regex1 = new RegExp(
    escapeRegExp(target1),
    "i"
  );

  if (!regex1.test(sentence)) {
    return "";
  }

  const firstReplaced = sentence.replace(
    regex1,
    "{{gap1}}"
  );

  const regex2 = new RegExp(
    escapeRegExp(target2),
    "i"
  );

  if (!regex2.test(firstReplaced)) {
    return "";
  }

  return firstReplaced.replace(
    regex2,
    "{{gap2}}"
  );
}