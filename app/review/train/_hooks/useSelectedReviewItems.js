"use client";

import {
  useEffect,
  useState,
} from "react";

import { supabase } from "@/lib/supabase";

const SELECTED_REVIEW_KEY =
  "danskTrainerSelectedReview";

function normalizeTerm(term = "") {
  return term
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/^at\s+/, "");
}

export function useSelectedReviewItems() {
  const [items, setItems] =
    useState([]);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    async function loadSelectedItems() {
      const storedSelection =
        localStorage.getItem(
          SELECTED_REVIEW_KEY
        );

      if (!storedSelection) {
        setItems([]);
        setIsLoading(false);
        return;
      }

      try {
        const selectedItems =
          JSON.parse(storedSelection);

        if (
          !Array.isArray(selectedItems) ||
          selectedItems.length === 0
        ) {
          setItems([]);
          return;
        }

        const { data, error } =
          await supabase
            .from("vocabulary")
            .select(`
              id,
              term,
              english,
              russian,
              definition_da,
              example,
              part_of_speech
            `);

        if (error) {
          console.error(
            "Could not load vocabulary:",
            error
          );

          setItems(selectedItems);
          return;
        }

        const vocabularyByTerm =
          new Map(
            data.map((item) => [
              normalizeTerm(item.term),
              item,
            ])
          );

        const hydratedItems =
          selectedItems.map(
            (selectedItem) => {
              const normalized =
                normalizeTerm(
                  selectedItem.term
                );

              const databaseItem =
                vocabularyByTerm.get(
                  normalized
                );

              if (!databaseItem) {
                console.warn(
                  "No vocabulary match:",
                  {
                    original:
                      selectedItem.term,
                    normalized,
                  }
                );

                /*
                  Keep the locally stored item
                  instead of deleting the card.
                */
                return selectedItem;
              }

              return {
                ...selectedItem,
                ...databaseItem,
              };
            }
          );

        console.log(
          "Selected review items:",
          hydratedItems
        );

        setItems(hydratedItems);
      } catch (error) {
        console.error(
          "Could not load selected review items:",
          error
        );

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