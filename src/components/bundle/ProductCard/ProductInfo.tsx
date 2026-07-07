interface ProductInfoProps {
  title: string;
  description: string;
  learnMoreUrl?: string;
}

export default function ProductInfo({
  title,
  description,
  learnMoreUrl,
}: ProductInfoProps) {
  return (
    <>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-5 text-slate-500">{description}</p>

      {learnMoreUrl && (
        <a className="mt-2 inline-flex text-sm font-medium text-violet-600 hover:underline">
          Learn More
        </a>
      )}
    </>
  );
}
