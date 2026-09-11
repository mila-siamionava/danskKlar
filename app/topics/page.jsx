import { ClipboardList } from "lucide-react";

import BottomNavigation from "@/components/navigation/BottomNavigation/BottomNavigation";
import { navItems } from "@/data/navigation";

export default function TopicsPage() {
  return (
    <>
      <main className="mobilePage">
        <section
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <ClipboardList
            size={40}
            strokeWidth={1.6}
            aria-hidden="true"
          />

          <h1>Topics</h1>

          <p
            style={{
              maxWidth: "32rem",
              color: "var(--color-text-muted)",
            }}
          >
            Topic-based Danish practice is coming soon.
          </p>
        </section>
      </main>

      <BottomNavigation items={navItems} />
    </>
  );
}