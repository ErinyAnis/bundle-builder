interface ProductBadgeProps {
  badge?: string;
}

export default function ProductBadge({ badge }: ProductBadgeProps) {
  if (!badge) return null;

  return (
    <span
      className="
    absolute
    left-3
    top-3
    rounded-full
    bg-violet-600
    px-2
    py-1
    text-[10px]
    font-semibold
    uppercase
    tracking-wide
    text-white
  "
    >
      {badge}
    </span>
  );
}
