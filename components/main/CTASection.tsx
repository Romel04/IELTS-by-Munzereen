"use client";

import { Button } from "@/components/ui/button";
import { CtaText } from "@/types/product";

export default function CTASection({ cta }: { cta: CtaText }) {
  if (!cta?.name && !cta?.value) return null;

  return (
    <div className="space-y-4">
      <div className="bg-muted p-4 rounded-lg text-center">
        <p className="text-2xl font-bold text-primary">৳1000</p>
        <p className="text-sm text-muted-foreground">One-time purchase</p>
      </div>

      <Button
        asChild
        className="w-full text-lg font-semibold"
        size="lg"
      >
        <a href={cta.value} target="_blank" rel="noopener noreferrer">
          {cta.name || "Enroll Now"}
        </a>
      </Button>
    </div>
  );
}
