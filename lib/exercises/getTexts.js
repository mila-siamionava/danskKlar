import { createClient } from "@/lib/supabase/server";

export async function getTexts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("texts")
    .select(`
      id,
      slug,
      title,
      level,
      text_exercises (
        exercise_type
      )
    `)
    .order("title");

  if (error) {
    console.error("Texts error:", error);
    return [];
  }

  return data.map((text) => ({
    ...text,
    category: "Work",

    hasVocabulary: text.text_exercises?.some(
      (exercise) =>
        exercise.exercise_type ===
        "vocabulary_gap",
    ),

    hasConjunctions: text.text_exercises?.some(
      (exercise) =>
        exercise.exercise_type ===
        "connector_gap",
    ),
  }));
}