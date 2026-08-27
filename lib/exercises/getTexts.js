import { supabase } from "@/lib/supabase";

export async function getTexts() {
  const { data, error } = await supabase
    .from("texts")
    .select(
      `
      id,
      slug,
      title,
      level
    `,
    )
    .order("title");

  if (error) {
    console.error("Texts error:", error);
    return [];
  }

  return data.map((text) => ({
    ...text,
    category: "Arbejde",
  }));
}
