import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

import type { AccordionItemData } from "./types";

interface Props {
  item: AccordionItemData;

  isOpen: boolean;

  onToggle: () => void;
}

export default function AccordionItem({ item, isOpen, onToggle }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <AccordionHeader onClick={onToggle}>{item.title}</AccordionHeader>

      <AccordionContent isOpen={isOpen}>{item.content}</AccordionContent>
    </div>
  );
}
