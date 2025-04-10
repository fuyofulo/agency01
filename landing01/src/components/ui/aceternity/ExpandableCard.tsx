"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

// Theme interface for ExpandableCard
export interface ExpandableCardTheme {
  // Card colors
  cardBackground: string;
  cardHoverColor: string;
  cardHoverScale?: number;

  // Text colors
  titleColor: string;
  titleHoverColor: string;
  descriptionColor: string;
  descriptionHoverColor: string;

  // Button colors
  ctaButtonBackground: string;
  ctaButtonText: string;
  ctaButtonHoverBackground: string;
  ctaButtonHoverText: string;

  // Expanded card colors
  expandedCardBackground: string;
  expandedCardTextColor: string;
  closeButtonBackground: string;
  closeButtonText: string;
  backdropEffect: string;

  // Container styling
  containerBackground: string;
  containerBorder: string;
  containerShadow: string;
  containerPadding: string;
  containerRounded: string;
}

// Default theme - easily change all colors from this single object
const defaultTheme: ExpandableCardTheme = {
  // Card colors
  cardBackground: "bg-transparent",
  cardHoverColor: "hover:bg-gray-700",
  cardHoverScale: 1.01,

  // Text colors
  titleColor: "text-gray-300",
  titleHoverColor: "group-hover:text-white font-bold",
  descriptionColor: "text-neutral-600 dark:text-neutral-400",
  descriptionHoverColor: "group-hover:text-white",

  // Button colors
  ctaButtonBackground: "bg-gray-600",
  ctaButtonText: "text-slate-100",
  ctaButtonHoverBackground: "group-hover:bg-black",
  ctaButtonHoverText: "group-hover:text-gray-400",

  // Expanded card colors
  expandedCardBackground: "bg-[#111]",
  expandedCardTextColor: "text-white",
  closeButtonBackground: "bg-slate-100",
  closeButtonText: "text-black",
  backdropEffect: "backdrop-blur-xl bg-black/10",

  // Container styling
  containerBackground: "bg-slate-800/70",
  containerBorder: "border border-slate-700/50",
  containerShadow: "shadow-xl",
  containerPadding: "p-6",
  containerRounded: "rounded-2xl",
};

export function ExpandableCardDemo({
  theme = defaultTheme,
}: {
  theme?: ExpandableCardTheme;
}) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  // Pre-compute hover scale classes to use below
  const scaleClass = React.useMemo(() => {
    if (!theme.cardHoverScale) return "";
    const scale = theme.cardHoverScale;
    if (scale === 1.01) return "hover:scale-101";
    if (scale === 1.02) return "hover:scale-102";
    if (scale === 1.03) return "hover:scale-103";
    return "";
  }, [theme.cardHoverScale]);

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
          className={`fixed inset-0 h-full w-full z-[9000] ${theme.backdropEffect} transition-opacity duration-200`}
          onClick={() => setActive(null)}
        />
      )}

      {active && typeof active === "object" ? (
        <div className="fixed inset-0 flex items-center justify-center z-[9100] px-4">
          <div
            ref={ref}
            className={`w-full max-w-[500px] max-h-[80vh] md:max-h-[90vh] flex flex-col ${theme.expandedCardBackground} border-white border-2 rounded-xl sm:rounded-3xl overflow-hidden transition-all duration-200`}
          >
            <div className="top-0 z-10 w-full p-4 sm:p-5 bg-inherit border-b border-gray-800 flex justify-between items-center relative">
              <h3
                className={`font-bold text-xl sm:text-2xl ${theme.expandedCardTextColor} pr-8`}
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
                className={`${theme.expandedCardTextColor} mb-4 sm:mb-6 text-sm sm:text-base`}
              >
                {active.description}
              </p>
              <div
                className={`${theme.expandedCardTextColor} text-sm sm:text-base pb-4 sm:pb-6 flex flex-col items-start gap-3 sm:gap-4 overflow-auto`}
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

      <ul
        className={`max-w-2xl mx-auto w-full flex flex-col ${theme.containerBackground} ${theme.containerBorder} ${theme.containerShadow} ${theme.containerPadding} ${theme.containerRounded}`}
      >
        {cards.map((card, index) => (
          <div
            key={`card-${card.title}-${index}-${id}`}
            onClick={() => setActive(card)}
            className={`group p-4 flex justify-between items-center ${theme.cardBackground} ${theme.cardHoverColor} rounded-xl cursor-pointer transition-all duration-200 ${scaleClass}`}
          >
            <div className="flex-1">
              <h3
                className={`font-bold ${theme.titleColor} ${theme.titleHoverColor}`}
              >
                {card.title}
              </h3>
              <p
                className={`${theme.descriptionColor} ${theme.descriptionHoverColor}`}
              >
                {card.description}
              </p>
            </div>
            <button
              className={`px-5 py-2 text-md rounded-lg font-bold ${theme.ctaButtonBackground} ${theme.ctaButtonText} ${theme.ctaButtonHoverBackground} ${theme.ctaButtonHoverText} ml-4 transition-all duration-200 border-2 border-gray-800 shadow-sm`}
            >
              {card.ctaText}
            </button>
          </div>
        ))}
      </ul>
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

const cards = [
  {
    description:
      "Learn how our AI solutions can transform your customer service",
    title: "How does your AI automation work?",
    ctaText: "See Answer",
    content: () => {
      return (
        <p>
          Our AI automation platform uses cutting-edge language models that are
          trained on your specific business processes and data. We create
          customized AI agents that can handle customer inquiries, process
          requests, and solve problems without human intervention.
          <br />
          <br />
          These AI agents integrate seamlessly with your existing systems and
          can work 24/7, providing consistent support while significantly
          reducing response times and operational costs.
        </p>
      );
    },
  },
  {
    description: "Find out how quickly you can implement our solution",
    title: "How long does implementation take?",
    ctaText: "See Answer",
    content: () => {
      return (
        <p>
          Implementation typically takes 2-4 weeks depending on the complexity
          of your systems and processes. Our streamlined approach includes:
          <br />
          <br />
          1. Initial assessment and requirements gathering (3-5 days)
          <br />
          2. AI agent development and customization (1-2 weeks)
          <br />
          3. Integration with your existing systems (3-5 days)
          <br />
          4. Testing and optimization (3-5 days)
          <br />
          <br />
          We work closely with your team throughout the process to ensure a
          smooth transition and minimal disruption to your operations.
        </p>
      );
    },
  },
  {
    description: "Discover the ROI and benefits of our AI automation",
    title: "What results can I expect?",
    ctaText: "See Answer",
    content: () => {
      return (
        <p>
          Our clients typically experience:
          <br />
          <br />
          • 70% reduction in response times
          <br />
          • 50-60% decrease in operational costs
          <br />
          • 24/7 customer support coverage
          <br />
          • 35% increase in customer satisfaction scores
          <br />
          • 90% reduction in human error rates
          <br />
          <br />
          Most clients see positive ROI within the first 3 months of
          implementation, with some achieving breakeven in as little as 6 weeks.
        </p>
      );
    },
  },
  {
    description: "Understand how we handle data privacy and security",
    title: "How secure is your solution?",
    ctaText: "See Answer",
    content: () => {
      return (
        <p>
          Security and privacy are our top priorities. Our platform is built
          with enterprise-grade security features:
          <br />
          <br />
          • SOC 2 Type II and ISO 27001 certified
          <br />
          • End-to-end encryption for all data
          <br />
          • GDPR and CCPA compliant data handling
          <br />
          • Regular penetration testing and security audits
          <br />
          • Data residency options for regulatory compliance
          <br />
          <br />
          We can also work with your security team to ensure our implementation
          meets your specific security requirements and policies.
        </p>
      );
    },
  },
];
