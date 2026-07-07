import { useState } from "react";
import AccordionItem from "./AccordionItem";
import type { AccordionItemData } from "./types";

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpen?: string;
}

export default function Accordion({ items, defaultOpen }: AccordionProps) {
  const [openId, setOpenId] = useState(defaultOpen ?? items[0]?.id);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() =>
            setOpenId((prev) => (prev === item.id ? "" : item.id))
          }
        />
      ))}
    </div>
  );
}
