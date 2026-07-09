import { useCartTotals } from "../../../hooks";

export default function ReviewSummary() {
  const { subtotal, compareTotal, savings } = useCartTotals();

  const hasDiscount = compareTotal > subtotal;
  const monthlyPrice = subtotal / 12;

  return (
    <footer className="mt-8 border-t border-slate-200 pt-6">
      {/* Fast Shipping */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white">
            <img src="/icons/carbon_delivery.svg" alt="Fast Shipping" />
          </span>
          <span className="font-medium text-slate-900">Fast Shipping</span>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-400 line-through">$5.99</p>
          <p className="font-semibold text-violet-600">FREE</p>
        </div>
      </div>

      {/* Guarantee badge + Price */}
      <div className="mt-6 flex items-center justify-between gap-4">
        {/* Seal badge */}
        <img src="/icons/Satisfaction-Badge.svg" alt="Fast Shipping" />

        {/* Price */}
        <div className="flex-1 text-right">
          <span className="mb-2 inline-block rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
            as low as ${monthlyPrice.toFixed(2)}/mo
          </span>

          <div className="flex items-baseline justify-end gap-2">
            {hasDiscount && (
              <p className="text-lg text-slate-400 line-through">
                ${compareTotal.toFixed(2)}
              </p>
            )}
            <p className="text-2xl font-bold text-violet-600">
              ${subtotal.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Savings */}
      {savings > 0 && (
        <p className="mt-4 text-center text-sm font-semibold text-green-600">
          Congrats! You&apos;re saving ${savings.toFixed(2)} on your security
          bundle!
        </p>
      )}

      {/* Checkout */}
      <button className="mt-6 w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition-colors hover:bg-violet-700">
        Checkout
      </button>

      {/* Save For Later */}
      <button className="mt-4 w-full text-center text-sm font-medium text-slate-600 underline cursor-pointer">
        Save my system for later
      </button>
    </footer>
  );
}
