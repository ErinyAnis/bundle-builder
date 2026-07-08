import Accordion from "../../ui/Accordion";
import { useBundleData } from "../../../hooks/useBundleData";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../../data";

export default function Builder() {
  const { steps } = useBundleData();
  const accordionItems = steps.map((step) => {
    const stepProducts = products.filter(
      (product) => product.stepId === step.id,
    );
    return {
      id: step.id,

      title: step.title,

      content: (
        <div className="space-y-6 pt-6">
          {stepProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ),
    };
  });

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

      <Accordion items={accordionItems} />
    </section>
  );
}
