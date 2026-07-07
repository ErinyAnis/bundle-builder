import { useGroupedReviewItems } from "../../../hooks";
import ReviewHeader from "./ReviewHeader";
import ReviewItem from "./ReviewItem";
import ReviewSummary from "./ReviewSummary";

export default function ReviewPanel() {
  const groupedItems = useGroupedReviewItems();
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

      <section className="mt-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <section key={category} className="mb-8">
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
        ))}
      </section>

      <ReviewSummary />
    </aside>
  );
}
