"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

const SELECTED_REVIEW_KEY = "danskTrainerSelectedReview";

export function useSelectedReviewItems() {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    async function loadSelectedItems() {
      const storedSelection = localStorage.getItem(SELECTED_REVIEW_KEY);

      if (!storedSelection) {
        setItems([]);
        setIsLoading(false);
        return;
      }

      try {
        const selectedItems = JSON.parse(storedSelection);

        if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
          setItems([]);
          return;
        }

        const vocabularyIds = selectedItems
          .map((item) => item.vocabularyId ?? item.id)
          .filter(Boolean);

        if (vocabularyIds.length === 0) {
          setItems(selectedItems);
          return;
        }

        const uniqueVocabularyIds = [...new Set(vocabularyIds)];

        const { data, error } = await supabase
          .from("vocabulary")
          .select(
            `
              id,
              term,
              english,
              russian,
              definition_da,
              example,
                           part_of_speech
            `,
          )
          .in("id", uniqueVocabularyIds);

        if (error) {
          console.error("Could not load selected vocabulary:", error);

          setItems(selectedItems);
          return;
        }

        const vocabularyById = new Map(data.map((item) => [item.id, item]));

        const hydratedItems = selectedItems.map((selectedItem) => {
          const vocabularyId = selectedItem.vocabularyId ?? selectedItem.id;

          const databaseItem = vocabularyById.get(vocabularyId);

          if (!databaseItem) {
            return selectedItem;
          }

          return {
            ...selectedItem,
            ...databaseItem,

            id: databaseItem.id,

            vocabularyId: databaseItem.id,
          };
        });

        setItems(hydratedItems);
      } catch (error) {
        console.error("Could not load selected review items:", error);

        setItems([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadSelectedItems();
  }, []);

  return {
    items,
    setItems,
    isLoading,
  };
}
