interface Props {
  compareAtPrice?: number;
  price: number;
}

export default function ProductPrice({ compareAtPrice, price }: Props) {
  return (
    <div className="flex items-end gap-2">
      {compareAtPrice && (
        <span className="text-sm text-slate-400 line-through">
          ${compareAtPrice.toFixed(2)}
        </span>
      )}

      <span className="text-2xl font-bold">${price.toFixed(2)}</span>
    </div>
  );
}
