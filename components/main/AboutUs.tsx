// components/main/AboutUs.tsx
import { Section } from "@/types/product";

export default function AboutSection({ section }: { section?: Section }) {
  if (!section || !section.values.length) return null;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{section.name}</h2>
      {section.values.map((item) => (
        <div key={item.id} className="prose prose-neutral dark:prose-invert mb-6"
             dangerouslySetInnerHTML={{ __html: item.description || "" }}>
        </div>
      ))}
    </div>
  );
}
