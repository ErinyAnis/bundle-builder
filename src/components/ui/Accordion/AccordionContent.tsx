import type { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  isOpen: boolean;

  children: ReactNode;
}

export default function AccordionContent({ isOpen, children }: Props) {
  return (
    <div
      className={clsx(
        "grid transition-all duration-300 px-4",
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      )}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
