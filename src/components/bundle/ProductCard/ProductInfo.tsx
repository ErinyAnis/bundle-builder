interface Props {
  title: string;
  description: string;
}

export default function ProductInfo({ title, description }: Props) {
  return (
    <>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>

      <button
        className="
        mt-3
        text-sm
        font-medium
        text-sky-600
        hover:underline
        "
      >
        Learn More
      </button>
    </>
  );
}
