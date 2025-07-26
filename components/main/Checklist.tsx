// components/main/Checklist.tsx
import { ChecklistItem } from "@/types/product";

export default function Checklist({ items }: { items: ChecklistItem[] }) {
  if (!items) return null;

  return (
    <div>
      <h3 className=" text-[20px] font-[600] leading-[28px] mb-3">এই কোর্সে যা থাকছে</h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id} className="flex items-center space-x-4">
            <img src={item.icon} alt="" className="w-6 h-6" />
            <span className="text-[16px] font-[400] leading-[20px] text-[#111827] ">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
