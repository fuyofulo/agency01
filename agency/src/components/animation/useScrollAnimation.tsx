"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";

type AnimationDirection = "up" | "down" | "left" | "right" | "fade";
type AnimationTiming = "fast" | "normal" | "slow";

interface ScrollAnimationOptions {
  direction?: AnimationDirection;
  threshold?: number;
  delay?: number;
  timing?: AnimationTiming;
  rootMargin?: string;
}

export const useScrollAnimation = ({
  direction = "up",
  threshold = 0.1,
  delay = 0,
  timing = "normal",
  rootMargin = "0px 0px -100px 0px",
}: ScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoize the observer creation to avoid recreation on every render
  const setupObserver = useCallback(() => {
    // Cleanup previous observer if it exists
    if (observerRef.current && ref.current) {
      observerRef.current.unobserve(ref.current);
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            // Use setTimeout for delay, but with requestAnimationFrame for better performance
            setTimeout(() => {
              // Use requestAnimationFrame to ensure the visibility change happens on the next paint
              window.requestAnimationFrame(() => {
                setIsVisible(true);
              });
            }, delay);
          } else {
            // If no delay, still use RAF for smoother animation
            window.requestAnimationFrame(() => {
              setIsVisible(true);
            });
          }

          // Once the element is visible, we can stop observing it
          if (ref.current) {
            observerRef.current?.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    return observerRef.current;
  }, [threshold, rootMargin, delay]);

  useEffect(() => {
    const observer = setupObserver();
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && observer) {
        observer.unobserve(currentRef);
      }
    };
  }, [setupObserver]);

  // Memoize animation classes based on options to prevent recalculations
  const getAnimationClass = useMemo(() => {
    const timingClass =
      timing === "fast"
        ? "duration-500"
        : timing === "slow"
        ? "duration-1200"
        : "duration-800";

    if (!isVisible) {
      let translateClass = "";
      const opacityClass = "opacity-0";

      switch (direction) {
        case "up":
          translateClass = "translate-y-16";
          break;
        case "down":
          translateClass = "-translate-y-16";
          break;
        case "left":
          translateClass = "translate-x-16";
          break;
        case "right":
          translateClass = "-translate-x-16";
          break;
        case "fade":
        default:
          translateClass = "";
          break;
      }

      return `transform ${translateClass} ${opacityClass} ${timingClass}`;
    }

    return `transform translate-y-0 translate-x-0 opacity-100 ${timingClass}`;
  }, [isVisible, direction, timing]);

  // Memoize the final style string
  const style = useMemo(() => {
    return `transition-all ease-out ${getAnimationClass}`;
  }, [getAnimationClass]);

  return {
    ref,
    style,
    isVisible,
  };
};
