"use client";
import { lazy, Suspense } from "react";
import { darkGrayTheme } from "./FAQThemes";

// Lazy load ExpandableCardDemo for better performance
const ExpandableCardDemo = lazy(() =>
  import("@/components/ui/aceternity/ExpandableCard").then((mod) => ({
    default: mod.ExpandableCardDemo,
  }))
);

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
        <Suspense
          fallback={
            <div className="p-6 bg-slate-800 rounded-xl text-center text-white">
              Loading FAQ...
            </div>
          }
        >
          <ExpandableCardDemo theme={darkGrayTheme} />
        </Suspense>
      </div>
    </div>
  );
}
