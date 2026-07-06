interface Props {
  text?: string;
}

export default function ProductBadge({ text }: Props) {
  if (!text) return null;

  return (
    <span
      className="
      inline-flex
      rounded-full
      bg-emerald-100
      px-3
      py-1
      text-xs
      font-semibold
      text-emerald-700
      "
    >
      {text}
    </span>
  );
}
