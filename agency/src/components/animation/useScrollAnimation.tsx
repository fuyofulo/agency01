"use client";

import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);

          // Once the element is visible, we can stop observing it
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay]);

  // Generate CSS classes based on direction and timing
  const getAnimationClass = () => {
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
  };

  return {
    ref,
    style: `transition-all ease-out ${getAnimationClass()}`,
    isVisible,
  };
};
