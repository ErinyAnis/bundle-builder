import type { VariantSelectorProps } from "./types";

export default function VariantSelector({
  variants,
  selectedVariant,
  onSelect,
}: VariantSelectorProps) {
  return (
    <div className="mt-4 flex gap-2">
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
        transition-all

        ${
          selectedVariant === variant.id
            ? "border-violet-600 bg-violet-50"
            : "border-slate-200"
        }
    `}
        >
          <span
            className="h-3 w-3 rounded-full border"
            style={{
              backgroundColor: variant.swatch,
            }}
          />

          <span>{variant.label}</span>
        </button>
      ))}
    </div>
  );
}
