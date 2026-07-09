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
    rounded-2xl
    border
    border-slate-200
    bg-[#EDF4FF]
    px-5
    py-3
    lg:sticky
    lg:top-8
    lg:self-start
  "
    >
      <ReviewHeader />

      <div className="mt-6 space-y-6">
        {groupedEntries.length === 0 ? (
          <p className="py-10 text-center text-sm text-slate-500">
            No products selected yet.
          </p>
        ) : (
          groupedEntries.map(([category, items]) => (
            <section key={category}>
              <h2
                className="
  text-xs
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
