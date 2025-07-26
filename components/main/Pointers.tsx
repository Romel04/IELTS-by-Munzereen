// components/main/Pointers.tsx
import { Section } from "@/types/product";
import { Check } from "lucide-react";

export default function Pointers({ section }: { section?: Section }) {
  if (!section || !section.values.length) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-[24px] font-[600] leading-[32px]">{section.name}</h2>
      <div className="rounded-lg border  p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {section.values.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <Check className="w-5 h-5 min-w-[20px] text-blue-600 mt-1" />
              <p className="text-[16px] leading-[24px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
