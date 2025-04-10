"use client";

import { cn } from "@/lib/utils";
import { animate, stagger, timeline, spring } from "motion";
import { useEffect, useRef } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const containerRef = useRef<HTMLDivElement>(null);
  const isTyping = useRef(false);

  useEffect(() => {
    if (!containerRef.current || isTyping.current) return;

    const spans = containerRef.current.querySelectorAll("span.hidden");
    if (spans.length === 0) return;

    isTyping.current = true;

    let currentIndex = 0;
    const revealNextCharacter = () => {
      if (currentIndex < spans.length) {
        const span = spans[currentIndex] as HTMLSpanElement;
        span.classList.remove("hidden");
        span.classList.add("inline-block");
        span.style.opacity = "1";
        currentIndex++;
        setTimeout(revealNextCharacter, 100); // Adjust timing as needed
      }
    };

    revealNextCharacter();
  }, []);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      <div ref={containerRef} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(
                  `hidden opacity-0 transition-opacity duration-100`,
                  word.className
                )}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
      <span
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 animate-blink",
          cursorClassName
        )}
      ></span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cursorRef.current) return;

    // Animate the container to reveal text
    animate(
      containerRef.current,
      { width: ["0%", "fit-content"] },
      {
        duration: 2,
        easing: "linear",
        delay: 1,
      }
    );

    // Animate cursor blink
    animate(
      cursorRef.current,
      { opacity: [0, 1] },
      {
        duration: 0.8,
        repeat: Infinity,
        direction: "alternate",
        easing: spring(),
      }
    );
  }, []);

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <div
        ref={containerRef}
        className="overflow-hidden pb-2"
        style={{
          width: "0%",
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </div>
      <span
        ref={cursorRef}
        style={{ opacity: 0 }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></span>
    </div>
  );
};
