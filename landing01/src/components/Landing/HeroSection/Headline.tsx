"use client";
import { TypewriterEffect } from "@/components/ui/aceternity/TypewriterEffect";

export default function Headline() {
  return (
    <div className="text-center text-6xl text-slate-200 md:text-7xl font-bricolage font-bold py-4 w-full flex flex-col">
      {/* First line - kept on one line with nowrap */}
      <div className="whitespace-nowrap">
        Transform Your Business Operations
      </div>

      {/* Second line - with proper spacing */}
      <div className="whitespace-nowrap mt-2">
        <span>using&nbsp;</span>
        <span>
          <TypewriterEffect words={[{ text: "AI" }, { text: "Automation" }]} />
        </span>
      </div>
    </div>
  );
}

//
