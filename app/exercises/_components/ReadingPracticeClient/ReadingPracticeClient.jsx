"use client";

import { useState } from "react";

import FilterChip from "@/components/ui/FilterChip/FilterChip";
import ReadingCard from "@/components/reading/ReadingCard/ReadingCard";
import BackLink from "../../../../components/navigation/BackLink/BackLink";
import styles from "./ReadingPracticeClient.module.css";

const filters = ["All", "Work", "Society", "Health"];

export default function ReadingPracticeClient({ texts, readingImages = {} }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTexts =
    activeFilter === "All"
      ? texts
      : texts.filter((text) => text.category === activeFilter);

  return (
      <>
          <div className={styles.back}>
                  <BackLink href="/review" label="Back to review" />
                </div>
          
      <div className={styles.filters}>
        {filters.map((filter) => (
          <FilterChip
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterChip>
        ))}
      </div>

      <section className={styles.readingList}>
        {filteredTexts.map((text) => (
          <ReadingCard
  key={text.id}
  title={text.title}
  level={text.level || "PD3.5"}
  topic={text.category}
  imageSrc={readingImages[text.slug]}
  vocabularyHref={
    text.hasVocabulary
      ? `/exercises/${text.slug}?type=vocabulary_gap`
      : null
  }
  conjunctionsHref={
    text.hasConjunctions
      ? `/exercises/${text.slug}?type=connector_gap`
      : null
  }
/>
        ))}
      </section>
    </>
  );
}
