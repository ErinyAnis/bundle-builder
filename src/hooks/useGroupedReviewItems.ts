import { useMemo } from "react";
import { useReviewItems } from "./useReviewItems";

export function useGroupedReviewItems() {
  const reviewItems = useReviewItems();

  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof reviewItems> = {};

    reviewItems.forEach((item) => {
      const category = item.product.category;

      if (!groups[category]) {
        groups[category] = [];
      }

      groups[category].push(item);
    });

    return groups;
  }, [reviewItems]);

  return groupedItems;
}