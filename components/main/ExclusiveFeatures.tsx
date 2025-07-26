"use client";

import { Check } from "lucide-react";
import type { Section } from "@/types/product";

export default function ExclusiveFeatures({ section }: { section: Section }) {
  if (!section || !section.values || !section.values.length) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-[20px] font-[600] leading-[30px] text-gray-800">
        {section.name}
      </h2>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-8">
        {section.values.map((feature, index) => (
          <div
            key={feature.id}
            className="space-y-4 flex flex-col md:flex-row justify-between md:gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-6 gap-y-3">
              <p className="text-[16px] font-[400] leading-[30px] text-gray-900">
                {feature.title}
              </p>
              {feature.checklist?.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1" />
                  <p className="text-[16px] font-[400] leading-[24px] text-[#4B5563]">{point}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {feature.file_url && (
                <img
                  src={feature.file_url}
                  alt={feature.title || "Feature image"}
                  className="w-48 h-48 rounded-md object-cover border"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
