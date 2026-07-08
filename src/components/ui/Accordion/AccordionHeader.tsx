import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default function AccordionHeader({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
      w-full
      py-3
      text-left
      transition-colors
      hover:bg-slate-50
      relative
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">{children}</div>

        <ChevronDown
          size={18}
          className="ml-4 shrink-0 absolute top-[63px] right-[5px] m-0 text-violet-600"
        />
      </div>
    </button>
  );
}
