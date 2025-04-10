"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

// Theme interface for ExpandableCard
export interface ExpandableCardTheme {
  // Card colors
  cardBackground: string;
  cardHoverColor: string;
  cardHoverScale: number;

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
  cardHoverScale: 1.02,

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
  expandedCardBackground: "bg-gray-600 dark:bg-neutral-900",
  expandedCardTextColor: "text-white dark:text-white",
  closeButtonBackground: "bg-black",
  closeButtonText: "text-white",
  backdropEffect: "bg-black/20",

  // Container styling
  containerBackground: "bg-slate-800/70 backdrop-blur-sm",
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
            className={`fixed inset-0 h-full w-full z-10 ${theme.backdropEffect}`}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`close-button-${id}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
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
              className={`w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col ${theme.expandedCardBackground} sm:rounded-3xl overflow-hidden`}
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div className="">
                    <motion.h3
                      className={`font-extrabold text-2xl ${theme.expandedCardTextColor}`}
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p className={theme.expandedCardTextColor}>
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.button
                    onClick={() => setActive(null)}
                    className={`px-4 py-3 text-sm rounded-full font-bold ${theme.closeButtonBackground} ${theme.closeButtonText}`}
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
                    className={`${theme.expandedCardTextColor} text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]`}
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
      <ul
        className={`max-w-2xl mx-auto w-full flex flex-col ${theme.containerBackground} ${theme.containerBorder} ${theme.containerShadow} ${theme.containerPadding} ${theme.containerRounded}`}
      >
        {cards.map((card, index) => (
          <motion.div
            key={`card-${card.title}-${index}-${id}`}
            whileHover={{ scale: theme.cardHoverScale }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(card)}
            className={`group p-4 flex justify-between items-center ${theme.cardBackground} ${theme.cardHoverColor} rounded-xl cursor-pointer transition-all duration-300 ease-in-out`}
          >
            <div className="flex-1">
              <motion.h3
                className={`font-bold ${theme.titleColor} ${theme.titleHoverColor}`}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className={`${theme.descriptionColor} ${theme.descriptionHoverColor}`}
              >
                {card.description}
              </motion.p>
            </div>
            <motion.button
              className={`px-5 py-2 text-md rounded-lg font-bold ${theme.ctaButtonBackground} ${theme.ctaButtonText} ${theme.ctaButtonHoverBackground} ${theme.ctaButtonHoverText} ml-4 transition-all duration-300 border-2 border-black shadow-sm`}
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
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

const cards = [
  {
    description: "",
    title:
      "I dont wanna live forever in this world, I am waiting for the here after",
    ctaText: "See Answer",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "",
    title: "Mitran Di Chhatri",
    ctaText: "See Answer",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "",
    title: "For Whom The Bell Tolls",
    ctaText: "See Answer",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "",
    title: "Stairway To Heaven",
    ctaText: "See Answer",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "",
    title: "Toh Phir Aao",
    ctaText: "See Answer",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
  {
    description: "",
    title: "Summertime Sadness2",
    ctaText: "See Answer",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "",
    title: "Summertime Sadness3",
    ctaText: "See Answer",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
];
