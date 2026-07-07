import { useCartTotals } from "../../../hooks";

export default function ReviewSummary() {
  const { subtotal, compareTotal, savings, shipping } = useCartTotals();

  const hasDiscount = compareTotal > subtotal;

  return (
    <footer className="mt-8 border-t border-slate-200 pt-6">
      {/* Shipping */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">Shipping</span>

        <span className="font-medium">
          {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
        </span>
      </div>

      {/* Subtotal */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-slate-500">Subtotal</span>

        <div className="text-right">
          {hasDiscount && (
            <p className="text-sm text-slate-400 line-through">
              ${compareTotal.toFixed(2)}
            </p>
          )}

          <p className="font-semibold">${subtotal.toFixed(2)}</p>
        </div>
      </div>

      {/* Savings */}
      {savings > 0 && (
        <div className="mt-4 flex items-center justify-between rounded-xl bg-green-50 p-3">
          <span className="text-sm font-medium text-green-700">
            Your Savings
          </span>

          <span className="font-semibold text-green-700">
            -${savings.toFixed(2)}
          </span>
        </div>
      )}

      <hr className="my-6 border-slate-200" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Total</span>

        <div className="text-right">
          {hasDiscount && (
            <p className="text-sm text-slate-400 line-through">
              ${compareTotal.toFixed(2)}
            </p>
          )}

          <p className="text-2xl font-bold">${subtotal.toFixed(2)}</p>
        </div>
      </div>

      {/* Checkout */}
      <button
        className="
  mt-6
  w-full
  rounded-xl
  bg-violet-600
  py-4
  font-semibold
  text-white
  transition-colors
  hover:bg-violet-700
"
      >
        Checkout
      </button>

      {/* Save For Later */}
      <button
        className="
mt-4
w-full
text-sm
font-medium
text-violet-600
hover:underline
"
      >
        Save my system for later
      </button>
    </footer>
  );
}
