import Link from "next/link";

import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import { navItems } from "@/data/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function TopicsPage() {
  const supabase = await createClient();

  const { data: topics, error } = await supabase
    .from("topics")
    .select("id, name, slug, description")
    .order("name", { ascending: true });

  if (error) {
    console.error("Failed to load topics:", error);
  }

  return (
    <>
      <main className="mobilePage">
        <h1>Emner</h1>

        {error ? (
          <p>Kunne ikke hente emner.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {topics?.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.slug}`}
                style={{
                  display: "block",
                  padding: "1rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--border-radius-md)",
                  background: "var(--color-surface)",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <h2>{topic.name}</h2>

                {topic.description && (
                  <p
                    style={{
                      marginTop: "0.5rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {topic.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>

      <BottomNavigation items={navItems} />
    </>
  );
}