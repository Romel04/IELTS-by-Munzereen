// components/main/Features.tsx
import { Section } from "@/types/product";

export default function Features({ section }: { section?: Section }) {
  if (!section || !section.values.length) return null;

  return (
    <>
    <h2 className="text-[20px] font-[600] leading-[30px] mb-4">{section.name}</h2>
    <div className="bg-[#101826] p-8 text-white rounded-sm">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-12">
        {section.values.map((item) => (
          <li key={item.id} className="flex space-x-4 items-start">
            {item.icon && (
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
            )}
            <div>
              <h3 className="text-[18px] font-[400] leading-[26px] mb-2">{item.title}</h3>
              {item.subtitle && <p className="text-[14px] font-[400] leading-[22px] text-[#9299A5]">{item.subtitle}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
      
  );
}
