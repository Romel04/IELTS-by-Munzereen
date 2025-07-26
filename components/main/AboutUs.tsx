// components/main/AboutUs.tsx
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/types/product";
import { stripHtml } from "@/lib/utils";

export default function AboutSection({ section }: { section?: Section }) {
  if (!section || !section.values.length) return null;

  return (
    <div className="my-10">
      <h2 className="text-[24px] font-[600] leading-[32px] mb-6">{section.name}</h2>

      <Accordion type="single" collapsible className="w-full">
        {section.values.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className=" text-[16px] font-[700] leading-[24px]">
              {stripHtml(item.title || "Untitled")}
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="prose prose-neutral dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: item.description || "" }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
