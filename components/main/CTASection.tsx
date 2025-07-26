"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaText } from "@/types/product";

export default function CTASection({ cta }: { cta: CtaText }) {
  if (!cta?.name && !cta?.value) return null;

  return (
    <div className="space-y-0">
      <div className="text-center">
        <p className=" text-[24px] font-[600] leading-[32px] text-primary">৳1000</p>
      </div>

      <Button
        asChild
        size="lg"
        className="w-full text-lg font-semibold bg-[#1CAA54] hover:bg-[#169347] shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.2)] hover:shadow-none transition"
      >
        <Link href={cta.value} target="_blank">
          {cta.name || "Enroll Now"}
        </Link>
      </Button>
    </div>
  );
}
