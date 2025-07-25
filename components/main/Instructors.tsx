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
      <h2 className="text-xl font-semibold">{section.name}</h2>

      {section.values.map((ins, index) => (
        <Card
          key={`${ins.name}-${index}`}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4"
        >
          {ins.image && (
            <img
              src={ins.image}
              alt={ins.name}
              className="w-30 h-30 rounded-full object-cover"
            />
          )}

          <CardContent className="p-0 space-y-0">
            <p className="font-semibold text-lg">{ins.name}</p>
            {ins.short_description && (
              <p className="text-muted-foreground">{ins.short_description}</p>
            )}

            {ins.description && (
              <div
                className="prose prose-sm mt-1 mb-0"
                dangerouslySetInnerHTML={{ __html: ins.description }}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
