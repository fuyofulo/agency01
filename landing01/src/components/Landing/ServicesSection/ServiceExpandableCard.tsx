"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

// Theme interface for centralizing all colors
interface ServiceCardTheme {
  // Card colors
  cardBackground: string;
  cardBorder: string;

  // Text colors
  titleColor: string;
  descriptionColor: string;
  contentTextColor: string;

  // Button colors
  ctaButtonBackground: string;
  ctaButtonText: string;
  ctaButtonBorder: string;
  ctaButtonHoverBg: string;

  // Expanded card colors
  expandedCardBackground: string;
  expandedCardBorder: string;
  closeButtonBackground: string;
  closeButtonText: string;
  backdropEffect: string;
}

// Default theme - easily change all colors from this single object
const defaultTheme: ServiceCardTheme = {
  // Card colors
  cardBackground: "bg-gray-600",
  cardBorder: "border border-gray-900 hover:border-black border-2",

  // Text colors
  titleColor: "text-white",
  descriptionColor: "text-gray-200",
  contentTextColor: "text-neutral-400",

  // Button colors
  ctaButtonBackground: "bg-gray-400",
  ctaButtonText: "text-black font-bold hover:text-white",
  ctaButtonBorder: "border-2 border-stone-900",
  ctaButtonHoverBg: "hover:bg-gray-900 hover:border-black",

  // Expanded card colors
  expandedCardBackground: "bg-[#111]",
  expandedCardBorder: "border border-white border-2",
  closeButtonBackground: "bg-slate-100",
  closeButtonText: "text-black",
  backdropEffect: "backdrop-blur-xl bg-black/10",
};

// Define the card data structure
interface ServiceCardData {
  title: string;
  description: string;
  ctaText: string;
  content: string | (() => React.ReactNode);
}

interface ServiceExpandableCardProps {
  services: ServiceCardData[];
  theme?: ServiceCardTheme;
}

export function ServiceExpandableCard({
  services,
  theme = defaultTheme,
}: ServiceExpandableCardProps) {
  const [active, setActive] = useState<ServiceCardData | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      // Lock scrolling on body when card is open
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restore scrolling when card is closed
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <>
      {active && typeof active === "object" && (
        <div
          className={`fixed inset-0 ${theme.backdropEffect} h-full w-full z-[9000] transition-opacity duration-200 ease-in-out`}
          onClick={() => setActive(null)}
        />
      )}

      {active && typeof active === "object" ? (
        <div className="fixed inset-0 flex items-center justify-center z-[9100] px-4">
          <div
            ref={ref}
            className={`w-full max-w-[500px] max-h-[80vh] md:max-h-[90vh] flex flex-col ${theme.expandedCardBackground} ${theme.expandedCardBorder} rounded-xl sm:rounded-3xl overflow-hidden transition-all duration-200 ease-in-out`}
          >
            <div className="top-0 z-10 w-full p-4 sm:p-5 bg-inherit border-b border-gray-800 flex justify-between items-center relative">
              <h3
                className={`font-bold text-xl sm:text-2xl ${theme.titleColor} pr-8`}
              >
                {active.title}
              </h3>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-md border border-gray-200"
                onClick={() => setActive(null)}
                aria-label="Close panel"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto">
              <p
                className={`${theme.contentTextColor} mb-4 sm:mb-6 text-sm sm:text-base`}
              >
                {active.description}
              </p>

              <div
                className={`${theme.contentTextColor} text-sm sm:text-base pb-4 sm:pb-6 flex flex-col items-start gap-3 sm:gap-4`}
              >
                {typeof active.content === "function"
                  ? active.content()
                  : active.content}
              </div>

              <div className="mt-4 pt-2 border-t border-gray-800 flex justify-center">
                <button
                  onClick={() => setActive(null)}
                  className={`px-6 py-3 text-sm rounded-lg font-bold ${theme.closeButtonBackground} ${theme.closeButtonText} w-full sm:w-auto`}
                >
                  Close panel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {services.map((service, index) => (
          <div
            key={`card-${service.title}-${index}-${id}`}
            onClick={() => setActive(service)}
            className={`rounded-xl ${theme.cardBorder} ${theme.cardBackground} p-4 sm:p-6 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] flex flex-col justify-between min-h-[250px] sm:h-[300px]`}
          >
            <div>
              <h3
                className={`font-bold text-xl sm:text-2xl ${theme.titleColor} mb-2 sm:mb-4`}
              >
                {service.title}
              </h3>
              <p className={`${theme.descriptionColor} text-sm line-clamp-3`}>
                {service.description}
              </p>
            </div>
            <div className="mt-auto pt-4">
              <button
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-lg ${theme.ctaButtonBorder} ${theme.ctaButtonText} ${theme.ctaButtonBackground} ${theme.ctaButtonHoverBg} transition-colors`}
              >
                {service.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
