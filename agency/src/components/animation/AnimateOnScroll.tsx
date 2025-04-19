"use client";

import React, { forwardRef } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  timing?: "fast" | "normal" | "slow";
  className?: string;
  threshold?: number;
  rootMargin?: string;
  as?: React.ElementType;
}

export const AnimateOnScroll = forwardRef<HTMLElement, AnimateOnScrollProps>(
  (
    {
      children,
      direction = "up",
      delay = 0,
      timing = "normal",
      className = "",
      threshold = 0.1,
      rootMargin = "0px 0px -100px 0px",
      as: Component = "div",
    },
    forwardedRef
  ) => {
    const { ref, style, isVisible } = useScrollAnimation({
      direction,
      threshold,
      delay,
      timing,
      rootMargin,
    });

    // Combine the animation ref with any forwarded ref
    const combinedRef = (node: HTMLElement) => {
      ref.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    return (
      <Component
        ref={combinedRef}
        className={`${className} ${style}`}
        data-animated={isVisible ? "true" : "false"}
      >
        {children}
      </Component>
    );
  }
);

AnimateOnScroll.displayName = "AnimateOnScroll";
