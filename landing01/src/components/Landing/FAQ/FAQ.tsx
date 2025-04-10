"use client";
import { ExpandableCardDemo } from "@/components/ui/aceternity/ExpandableCard";
import { darkGrayTheme } from "./FAQThemes";

export default function FAQ() {
  return (
    <div className="container mx-auto flex flex-col items-center space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
          Find answers to common questions about our services, process, and
          expertise.
        </p>
      </div>
      <div className="w-full max-w-4xl">
        <ExpandableCardDemo theme={darkGrayTheme} />
      </div>
    </div>
  );
}
