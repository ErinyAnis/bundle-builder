import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  title: string;

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
      "
    >
      <span className="text-lg font-medium">{title}</span>

      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
  );
}
