import { supabase } from "@/lib/supabase";
import { shuffle } from "@/app/review/train/_lib/arrayUtils";
export async function getExercise(slug, exerciseType = "vocabulary_gap") {
  console.log("URL EXISTS:", Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL));

  console.log(
    "KEY EXISTS:",
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY),
  );

  console.log("GET EXERCISE:", slug, exerciseType);

  // 1. Get master text
  const { data: text, error: textError } = await supabase
    .from("texts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (textError) {
    console.error("Text error:", textError);
    return null;
  }

  // 2. Get exercise
  const { data: exercise, error: exerciseError } = await supabase
    .from("text_exercises")
    .select("*")
    .eq("text_id", text.id)
    .eq("exercise_type", exerciseType)
    .single();

  if (exerciseError) {
    console.error("Exercise error:", exerciseError);
    return null;
  }

  // 3. Get gaps
  const { data: gaps, error: gapsError } = await supabase
    .from("text_exercise_gaps")
    .select("*")
    .eq("text_exercise_id", exercise.id)
    .order("gap_number");

  if (gapsError) {
    console.error("Gap error:", gapsError);
    return null;
  }

  // 4. Get options
  const gapIds = gaps.map((gap) => gap.id);

  const { data: options, error: optionsError } = await supabase
    .from("text_gap_options")
    .select("*")
    .in("gap_id", gapIds)
    .order("option_order");

  if (optionsError) {
    console.error("Options error:", optionsError);
    return null;
  }

  // 5. Transform DB data into the shape
  //    your existing GapExercise expects
  const questions = gaps.map((gap) => {
    const gapOptions = options.filter((option) => option.gap_id === gap.id);

    const transformedOptions = shuffle(
      gapOptions.map((option) => ({
        id: option.id,
        text: option.option_text,
      })),
    );

    const correctOption = gapOptions.find((option) => option.is_correct);

    return {
      id: gap.gap_number,

      options: transformedOptions,

      correctOptionId: correctOption?.id ?? null,

      explanation: {
        danish: gap.explanation_da || "",
        english: gap.explanation_en || "",
        russian: gap.explanation_ru || "",
        translations: [],
      },
    };
  });

  return {
    id: exercise.id,
    slug: text.slug,
    title: exercise.title,
    level: exercise.level,

    category: exerciseType === "connector_gap" ? "Bindeord" : "Vocabulary",

    type: "gap-multiple-choice",

    instructions: exercise.instruction,

    content: exercise.exercise_text,

    questions,
  };
}
