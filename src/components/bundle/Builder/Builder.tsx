import Accordion from "../../ui/Accordion";
import { useBundleData } from "../../../hooks/useBundleData";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../../data";
import { useReviewItems } from "../../../hooks";

export default function Builder() {
  const { steps } = useBundleData();

  const reviewItems = useReviewItems();

  const getSelectedCount = (stepId: string) =>
    reviewItems.filter((item) => item.product.stepId === stepId).length;

  const accordionItems = steps.map((step) => {
    const selectedCount = getSelectedCount(step.id);

    const productsForStep = products.filter(
      (product) => product.stepId === step.id,
    );

    return {
      id: step.id,

      title: (
        <div className="flex items-start gap-4">
          <span
            className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-slate-100
      text-sm
      font-semibold
      text-slate-700
      "
          >
            {step.stepNumber}
          </span>

          <div>
            <h3 className="text-lg font-semibold">{step.title}</h3>

            <p className="mt-1 text-sm text-slate-500">
              {selectedCount} Selected
            </p>
          </div>
        </div>
      ),

      content: (
        <div className="space-y-6 pt-6">
          {productsForStep.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ),
    };
  });

  return (
    <section className="min-w-0 space-y-8">
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
