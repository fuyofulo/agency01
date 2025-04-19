"use client";

import React, { forwardRef, useEffect, useState } from "react";
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

// Global counter to limit concurrent animations
let activeAnimations = 0;
const MAX_CONCURRENT_ANIMATIONS = 8;

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
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // Calculate real delay with staggering for performance
    const calculatedDelay = delay + (activeAnimations % 3) * 50;

    const { ref, style, isVisible } = useScrollAnimation({
      direction,
      threshold,
      delay: calculatedDelay,
      timing,
      rootMargin,
    });

    // Manage the number of active animations
    useEffect(() => {
      if (isVisible) {
        activeAnimations++;

        // Remove from counter after animation is done
        const animDuration =
          timing === "fast" ? 500 : timing === "slow" ? 1200 : 800;
        const cleanup = setTimeout(() => {
          activeAnimations = Math.max(0, activeAnimations - 1);
        }, calculatedDelay + animDuration + 100);

        return () => clearTimeout(cleanup);
      }
    }, [isVisible, timing, calculatedDelay]);

    // Check if we should animate based on system preferences
    useEffect(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Don't animate if user prefers reduced motion or if too many animations are active
      setShouldAnimate(
        !prefersReducedMotion && activeAnimations < MAX_CONCURRENT_ANIMATIONS
      );
    }, []);

    // Combine the animation ref with any forwarded ref
    const combinedRef = (node: HTMLElement) => {
      ref.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    // Create optimized class with will-change only when about to animate
    const optimizedClass = `${className} ${
      shouldAnimate ? style + " will-change-transform" : ""
    }`;

    return (
      <Component
        ref={combinedRef}
        className={optimizedClass}
        data-animated={isVisible && shouldAnimate ? "true" : "false"}
      >
        {children}
      </Component>
    );
  }
);

AnimateOnScroll.displayName = "AnimateOnScroll";
