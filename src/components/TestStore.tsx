import { useBundleStore } from "../store/useBundleStore";

export default function TestStore() {
  const cart = useBundleStore((state) => state.cart);
  const addItem = useBundleStore((state) => state.addItem);
  const decreaseItem = useBundleStore((state) => state.decreaseItem);
  const removeItem = useBundleStore((state) => state.removeItem);

  return (
    <div className="space-y-4">
      <button
        onClick={() => addItem("cam-v4", "black")}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Add Black Camera
      </button>

      <button
        onClick={() => addItem("cam-v4", "white")}
        className="rounded bg-green-500 px-4 py-2 text-white"
      >
        Add White Camera
      </button>

      <button onClick={() => decreaseItem("cam-v4", "black")}>-</button>

      <button onClick={() => removeItem("cam-v4", "black")}>Remove</button>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
}
