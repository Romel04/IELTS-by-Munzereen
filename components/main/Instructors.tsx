// components/main/Instructors.tsx
import { Section } from "@/types/product";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  section?: Section;
}

export default function Instructors({ section }: Props) {
  if (!section || !section.values.length) return null;

  return (
    <div className="space-y-2">
      <h2 className="text-[24px] font-[600] leading-[32px]">{section.name}</h2>

      {section.values.map((ins, index) => (
        <Card
          key={`${ins.name}-${index}`}
          className="flex flex-row items-center gap-4 p-4"
        >
          {ins.image && (
            <img
              src={ins.image}
              alt={ins.name}
              className="w-24 h-2w-24 md:w-28 md:h-28 rounded-full object-cover"
            />
          )}

          <CardContent className="p-0 space-y-0">
            <p className="text-[18px] font-[400] leading-[28px]">{ins.name}</p>
            {/* {ins.short_description && (
              <p className="text-muted-foreground">{ins.short_description}</p>
            )} */}

            {ins.description && (
              <div
                className="prose prose-sm mt-1 mb-0 text-[#111827] text-[14px]"
                dangerouslySetInnerHTML={{ __html: ins.description }}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
