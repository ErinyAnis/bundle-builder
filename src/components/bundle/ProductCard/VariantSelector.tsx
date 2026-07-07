import type { VariantSelectorProps } from "./types";

export default function VariantSelector({
  variants,
  selectedVariant,
  onSelect,
}: VariantSelectorProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          onClick={() => onSelect(variant.id)}
          className={`
        flex
        items-center
        gap-2
        rounded-md
        border
        px-2
        py-1
        text-xs
        transition-colors

        ${
          selectedVariant === variant.id
            ? "border-violet-600 bg-violet-50"
            : "border-slate-200"
        }
    `}
        >
          <span
            className="h-3 w-3 shrink-0 rounded-full border border-slate-200 hover:border-slate-400"
            style={{
              backgroundColor: variant.swatch,
            }}
          />

          <span className="font-medium">{variant.label}</span>
        </button>
      ))}
    </div>
  );
}
