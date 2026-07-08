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

      selectedCount,

      title: (
        <>
          <p
            className="
      border-b
      border-[#484848]
      px-3
      pb-2
      text-xs
      font-semibold
      uppercase
      tracking-widest
      text-[#484848]
    "
          >
            Step {step.stepNumber} of {steps.length}
          </p>

          <div className="flex items-center justify-between pt-5 px-3 pb-2">
            <div className="flex items-center gap-4">
              <img
                src={step.icon}
                alt={step.title}
                className="h-7 w-7 shrink-0"
              />

              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>

            <span className="text-sm font-medium text-violet-600 pe-3">
              {selectedCount} selected
            </span>
          </div>
        </>
      ),

      content: (
        <div
          className="
    grid
   grid-cols-[repeat(auto-fit,minmax(320px,1fr))]
    justify-center
    gap-6
  "
        >
          {productsForStep.map((product, index) => (
            <div
              key={product.id}
              className={
                index === productsForStep.length - 1 &&
                productsForStep.length % 2 !== 0
                  ? "md:col-span-2 flex justify-center"
                  : ""
              }
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ),
    };
  });

  return (
    <section className="min-w-0">
      <header>
        <h1 className="text-[40px] font-semibold leading-tight lg:hidden">
          Let's get started!
        </h1>
      </header>

      <Accordion items={accordionItems} />
    </section>
  );
}
