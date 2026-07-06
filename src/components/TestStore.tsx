import { useBundleStore } from "../store/useBundleStore";
import QuantityStepper from "./ui/QuantityStepper";

export default function TestStore() {
  const cart = useBundleStore((state) => state.cart);
  const increaseQuantity = useBundleStore((state) => state.increaseQuantity);
  const decreaseQuantity = useBundleStore((state) => state.decreaseQuantity);
  const removeItem = useBundleStore((state) => state.removeItem);

  return (
    <div className="space-y-4">
      <button
        onClick={() => increaseQuantity("cam-v4", "black")}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Add Black Camera
      </button>

      <button
        onClick={() => increaseQuantity("cam-v4", "white")}
        className="rounded bg-green-500 px-4 py-2 text-white"
      >
        Add White Camera
      </button>

      <QuantityStepper productId="cam-v4" variantId="black" />

      <QuantityStepper productId="cam-v4" variantId="white" />

      <button onClick={() => decreaseQuantity("cam-v4", "black")}>-</button>

      <button onClick={() => removeItem("cam-v4", "black")}>Remove</button>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
}
