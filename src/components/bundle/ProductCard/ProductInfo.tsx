import type { Product } from "../../../types";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product: { title, description, learnMoreUrl },
}: ProductInfoProps) {
  return (
    <>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-5 text-slate-500">
        {description}

        {learnMoreUrl && (
          <span>
            <a
              href={learnMoreUrl}
              target="_blank"
              rel="noreferrer"
              className="
        mt-2
        inline-flex
        text-sm
        font-medium
        text-violet-600
        underline
        ms-1
    "
            >
              Learn More
            </a>
          </span>
        )}
      </p>
    </>
  );
}
