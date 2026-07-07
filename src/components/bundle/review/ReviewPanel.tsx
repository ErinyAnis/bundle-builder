import ReviewHeader from "./ReviewHeader";
import { useReviewItems } from "../../../hooks";
import ReviewItem from "./ReviewItem";
import ReviewSummary from "./ReviewSummary";

export default function ReviewPanel() {
  const reviewItems = useReviewItems();
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

      <div className="mt-6 space-y-4">
        {reviewItems.map((item) => (
          <ReviewItem
            key={`${item.product.id}-${item.variantId ?? "default"}`}
            product={item.product}
            quantity={item.quantity}
            variantId={item.variantId}
          />
        ))}
      </div>

      <ReviewSummary />
    </aside>
  );
}
