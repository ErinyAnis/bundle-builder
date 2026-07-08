import { useGroupedReviewItems } from "../../../hooks";
import ReviewHeader from "./ReviewHeader";
import ReviewItem from "./ReviewItem";
import ReviewSummary from "./ReviewSummary";

export default function ReviewPanel() {
  const groupedItems = useGroupedReviewItems();
  const groupedEntries = Object.entries(groupedItems);
  return (
    <aside
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
      "
    >
      <ReviewHeader />

      <div className="mt-6 space-y-8">
        {groupedEntries.length === 0 ? (
          <p className="py-10 text-center text-sm text-slate-500">
            No products selected yet.
          </p>
        ) : (
          groupedEntries.map(([category, items]) => (
            <section key={category}>
              <h2
                className="
  mb-4
  text-xs
  font-bold
  uppercase
  tracking-widest
  text-slate-400
"
              >
                {category}
              </h2>

              <div className="space-y-2">
                {items.map((item) => (
                  <ReviewItem
                    key={`${item.product.id}-${item.variantId ?? "default"}`}
                    product={item.product}
                    quantity={item.quantity}
                    variantId={item.variantId}
                  />
                ))}
              </div>
            </section>
          ))
        )}
      </div>

      <ReviewSummary />
    </aside>
  );
}
