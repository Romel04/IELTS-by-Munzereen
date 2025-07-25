// components/main/Checklist.tsx
import { ChecklistItem } from "@/types/product";
import { Check } from "lucide-react";

export default function Checklist({ items }: { items: ChecklistItem[] }) {
  if (!items) return null;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">What’s Included</h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id} className="flex items-center space-x-2">
            <img src={item.icon} alt="" className="w-6 h-6" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
