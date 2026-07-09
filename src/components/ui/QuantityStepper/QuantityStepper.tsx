import { Minus, Plus } from "lucide-react";
import { useBundleStore } from "../../../store/useBundleStore";
import { useCartQuantity } from "../../../hooks";

interface QuantityStepperProps {
  productId: string;
  variantId?: string;
}

export default function QuantityStepper({
  productId,
  variantId,
}: QuantityStepperProps) {
  const quantity = useCartQuantity(productId, variantId);

  const increaseQuantity = useBundleStore((state) => state.increaseQuantity);
  const decreaseQuantity = useBundleStore((state) => state.decreaseQuantity);

  return (
    <div
      className="
      flex
      h-8
      items-center
      overflow-hidden
    "
    >
      <button
        type="button"
        disabled={quantity === 0}
        onClick={() => decreaseQuantity(productId, variantId)}
        className="
        flex
        h-6
        w-6
        items-center
        justify-center
        bg-[#F1F5F9]
        text-slate-500
        transition-colors
        hover:bg-slate-200
        disabled:bg-slate-50
        disabled:text-slate-300
        disabled:cursor-not-allowed
      "
      >
        <Minus size={14} strokeWidth={2.5} />
      </button>

      <span
        className="
        flex
        w-10
        items-center
        justify-center
        text-base font-normal
        text-slate-900
      "
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={() => increaseQuantity(productId, variantId)}
        className="
        flex
        h-6
        w-6
        items-center
        justify-center
        bg-[#F1F5F9]
        text-slate-500
        transition-colors
        hover:bg-slate-200
      "
      >
        <Plus size={14} strokeWidth={2.5} />
      </button>
    </div>
  );
}
