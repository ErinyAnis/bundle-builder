import AccordionItem from "./AccordionItem";
import type { AccordionItemData } from "./types";

interface AccordionProps {
  items: AccordionItemData[];
  openId: string;
  onOpenChange: (id: string) => void;
}

export default function Accordion({
  items,
  openId,
  onOpenChange,
}: AccordionProps) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => onOpenChange(openId === item.id ? "" : item.id)}
        />
      ))}
    </div>
  );
}
