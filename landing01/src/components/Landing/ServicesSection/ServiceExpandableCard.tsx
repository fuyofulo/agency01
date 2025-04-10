"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

// Theme interface for centralizing all colors
interface ServiceCardTheme {
  // Card colors
  cardBackground: string;
  cardBorder: string;
  cardHoverScale: number;

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
  cardHoverScale: 1.05,

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 ${theme.backdropEffect} h-full w-full z-10`}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`close-button-${id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              key={`expanded-card-${id}`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              ref={ref}
              className={`w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col ${theme.expandedCardBackground} ${theme.expandedCardBorder} sm:rounded-3xl overflow-hidden`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      className={`font-extrabold text-2xl ${theme.titleColor} mb-4`}
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p className={`${theme.contentTextColor} mb-6`}>
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.button
                    onClick={() => setActive(null)}
                    className={`px-4 py-2 text-sm rounded-full font-bold ${theme.closeButtonBackground} ${theme.closeButtonText}`}
                  >
                    Close
                  </motion.button>
                </div>
                <div className="pt-4 relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`${theme.contentTextColor} text-sm lg:text-base pb-6 flex flex-col items-start gap-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]`}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {services.map((service, index) => (
          <motion.div
            key={`card-${service.title}-${index}-${id}`}
            whileHover={{ scale: theme.cardHoverScale }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(service)}
            className={`rounded-xl ${theme.cardBorder} ${theme.cardBackground} p-6 cursor-pointer transition-all duration-300 ease-in-out flex flex-col justify-between h-[300px]`}
          >
            <div>
              <motion.h3
                className={`font-bold text-2xl ${theme.titleColor} mb-4`}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className={`${theme.descriptionColor} text-sm line-clamp-3`}
              >
                {service.description}
              </motion.p>
            </div>
            <div className="mt-auto pt-4">
              <motion.button
                className={`px-4 py-2 text-sm rounded-lg ${theme.ctaButtonBorder} ${theme.ctaButtonText} ${theme.ctaButtonBackground} ${theme.ctaButtonHoverBg} transition-colors`}
              >
                {service.ctaText}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
