import { Minus, Plus } from "lucide-react";
import clsx from "clsx";

import type { QuantityStepperProps } from "./types";

export default function QuantityStepper({
  value,
  onIncrement,
  onDecrement,
  disabled = false,
}: QuantityStepperProps) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-slate-200 px-2 py-1">
      <button
        type="button"
        onClick={onDecrement}
        disabled={disabled || value === 0}
        className={clsx(
          "flex h-8 w-8 items-center justify-center rounded-full transition",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "hover:bg-slate-100",
        )}
      >
        <Minus size={16} />
      </button>

      <span className="min-w-5 text-center text-sm font-medium">{value}</span>

      <button
        type="button"
        onClick={onIncrement}
        disabled={disabled}
        className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-slate-100"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
