import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  title: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export default function AccordionHeader({ title, isOpen, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
flex
w-full
items-center
justify-between
px-6
py-5
text-left
transition-colors
hover:bg-slate-50
"
    >
      <div className="flex-1">{title}</div>

      <ChevronDown
        size={20}
        className={`
          transition-transform
          duration-200
          ${isOpen ? "rotate-180" : ""}
        `}
      />
    </button>
  );
}
