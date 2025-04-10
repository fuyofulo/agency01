"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";

// Image dimensions and positioning constants
const IMAGE_SETTINGS = {
  containerHeight: 350,
  // Adjust these values to position the image
  translateX: "0%", // negative moves left, positive moves right
  translateY: "3.7%", // negative moves up, positive moves down
  scale: 1.16, // adjust size (1 is original size)
} as const;

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc?: string | StaticImageData;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
}: ServiceCardProps) {
  return (
    <div className="w-[400px] h-[550px] rounded-3xl border border-gray-700">
      {/* Image Section */}
      <div
        className="rounded-t-3xl border-b border-gray-700 overflow-hidden"
        style={{ height: `${IMAGE_SETTINGS.containerHeight}px` }}
      >
        {imageSrc ? (
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
              style={{
                transform: `translate(${IMAGE_SETTINGS.translateX}, ${IMAGE_SETTINGS.translateY}) scale(${IMAGE_SETTINGS.scale})`,
              }}
              priority
              quality={100}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-600">
            image
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col">
        <h3 className="text-2xl font-medium mb-4 text-white">{title}</h3>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
    </div>
  );
}
