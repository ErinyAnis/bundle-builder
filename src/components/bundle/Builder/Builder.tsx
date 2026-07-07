import Accordion from "../../ui/Accordion";
import { useBundleData } from "../../../hooks/useBundleData";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../../data";

export default function Builder() {
  const { steps } = useBundleData();

  return (
    <section className="flex flex-col gap-8">
      <header>
        <h1 className="text-[40px] font-semibold leading-tight">
          Let's get started!
        </h1>

        <p className="mt-3 text-base text-slate-500">
          Build your personalized home security system.
        </p>
      </header>

      <div className="space-y-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Accordion
        items={steps.map((step) => ({
          id: step.id,
          title: step.title,
          content: <div className="p-6">{step.title}</div>,
        }))}
      />
    </section>
  );
}
