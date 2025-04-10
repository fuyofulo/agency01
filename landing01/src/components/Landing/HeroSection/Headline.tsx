"use client";
import { TypewriterEffect } from "@/components/ui/aceternity/TypewriterEffect";

export default function Headline() {
  return (
    <div className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-200 font-bricolage font-bold py-4 w-full flex flex-col">
      {/* First line - responsive with breakpoints */}
      <div className="px-4 mb-2 sm:mb-0">
        <span className="leading-tight">
          Transform Your Business Operations
        </span>
      </div>

      {/* Second line - with proper spacing */}
      <div className="mt-1 sm:mt-2 flex flex-wrap justify-center items-center">
        <span>using&nbsp;</span>
        <span className="inline-flex">
          <TypewriterEffect
            words={[{ text: "AI" }, { text: "Automation" }]}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-400"
          />
        </span>
      </div>
    </div>
  );
}

//
