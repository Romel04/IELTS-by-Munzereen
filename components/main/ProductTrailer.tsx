"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Video } from "lucide-react";

interface MediaItem {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
}

export default function Trailer({ media }: { media: MediaItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previewItems = media.filter(
    (item) => item.name === "preview_gallery" || item.name === "book_preview"
  );

  if (previewItems.length === 0) return null;

  const current = previewItems[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % previewItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? previewItems.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-lg shadow-sm border bg-white">
        <div className="w-full h-auto pointer-events-auto">
          {current.resource_type === "image" ? (
            <Image
              src={current.resource_value}
              alt="Preview"
              width={800}
              height={450}
              className="w-full h-auto object-cover rounded"
            />
          ) : (
            <iframe
              className="w-full aspect-video rounded"
              src={`https://www.youtube.com/embed/${current.resource_value}?rel=0`}
              title="Preview Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Arrows */}
        {previewItems.length > 1 && (
          <>
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
              <Button
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white shadow"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </Button>
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
              <Button
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white shadow"
                onClick={handleNext}
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Thumbnails strip */}
      <div className="mt-4 flex gap-3 overflow-x-auto px-1">
        {previewItems.map((item, idx) => {
          const isActive = idx === currentIndex;
          // Determine thumbnail src for videos fallback to thumbnail_url or default icon
          const thumbSrc =
            item.resource_type === "image"
              ? item.resource_value
              : item.thumbnail_url || "";

          return (
            <button
              key={item.resource_value + idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-md overflow-hidden border-2 ${
                isActive ? "border-blue-600" : "border-transparent"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              style={{ minWidth: 70, minHeight: 40 }}
              aria-label={`Preview ${idx + 1}`}
            >
              {item.resource_type === "image" ? (
                <Image
                  src={thumbSrc}
                  alt={`Thumbnail ${idx + 1}`}
                  width={70}
                  height={40}
                  className="object-cover"
                />
              ) : thumbSrc ? (
                <Image
                  src={thumbSrc}
                  alt={`Video Thumbnail ${idx + 1}`}
                  width={70}
                  height={40}
                  className="object-cover"
                />
              ) : (
                <div className="w-16 h-10 flex items-center justify-center bg-gray-200">
                  <Video className="w-6 h-6 text-gray-500" />
                </div>
              )}
              {item.resource_type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-6 h-6 text-white opacity-75"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
