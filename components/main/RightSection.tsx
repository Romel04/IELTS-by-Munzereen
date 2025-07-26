"use client";

import { useEffect, useState } from "react";
import ProductTrailer from "./ProductTrailer";
import CTASection from "./CTASection";
import Checklist from "./Checklist";

import { ChecklistItem, CtaText, Media } from "@/types/product";
import ProductTitle from "./ProductTitile";
import ProductDescription from "./ProductDescription";

interface RightCardProps {
  title: string;
  description: string;
  media: Media[];
  cta: CtaText;
  items: ChecklistItem[];
}

export default function RightCard({
  title,
  description,
  media,
  cta,
  items,
}: RightCardProps) {
  const [showTrailer, setShowTrailer] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this threshold value as needed
      const threshold = 500;

      if (window.scrollY > threshold) {
        setShowTrailer(false);
      } else {
        setShowTrailer(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-3 space-y-4 border p-4 bg-white">
      {showTrailer && <ProductTrailer media={media} />}
      <div className="space-y-4 md:hidden block">
        <ProductTitle title={title} />
        <ProductDescription html={description} />
      </div>
      <CTASection cta={cta} />
      <Checklist items={items} />
    </div>
  );
}
