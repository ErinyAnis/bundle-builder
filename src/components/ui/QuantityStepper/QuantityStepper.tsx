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
    <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-2 py-1">
      <button
        className="
  rounded
  p-1
  transition
  disabled:cursor-not-allowed
  disabled:opacity-40
"
        type="button"
        disabled={quantity === 0}
        onClick={() => decreaseQuantity(productId, variantId)}
      >
        <Minus size={16} />
      </button>

      <span className="w-5 text-center">{quantity}</span>

      <button
        className="
  rounded
  p-1
  transition
"
        type="button"
        onClick={() => increaseQuantity(productId, variantId)}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
