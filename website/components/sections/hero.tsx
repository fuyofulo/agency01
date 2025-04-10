"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function HeroSection() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const words = [
    {
      text: "AI",
      className: "text-primary",
    },
    {
      text: "Automation",
      className: "text-primary",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business Operations using{" "}
            </h1>
            <div className="mt-1">
              <TypewriterEffect words={words} />
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              Leverage cutting-edge AI technologies to streamline operations,
              boost productivity, and unlock new opportunities for your
              business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="font-medium text-base">
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-medium text-base"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 mt-6">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-background bg-primary/20`}
                >
                  {/* This would be user images in a real implementation */}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold">100+</span> satisfied clients
            </div>
          </div>
        </div>

        {/* SVG Animation instead of Spline */}
        <div className="h-[400px] lg:h-[500px] w-full relative overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Animated circles */}
            <div className="absolute w-64 h-64 rounded-full bg-primary/10 animate-pulse"></div>
            <div className="absolute w-48 h-48 rounded-full bg-primary/20 animate-ping opacity-40"></div>

            {/* Center element */}
            <div className="relative z-10 w-32 h-32 bg-primary/80 dark:bg-blue-500 rounded-lg transform rotate-45 animate-spin-slow shadow-2xl flex items-center justify-center">
              <div className="transform -rotate-45 text-background dark:text-white text-4xl font-bold">
                AI
              </div>
            </div>

            {/* Orbital elements */}
            <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-primary/20 animate-spin-slow"></div>
            <div className="absolute w-[350px] h-[350px] rounded-full border border-primary/10 animate-reverse-spin"></div>

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-primary/40 dark:bg-blue-400/40"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.2}s`,
                  animation: "float 3s ease-in-out infinite alternate",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(-20px) scale(1.5);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        .animate-reverse-spin {
          animation: reverse-spin 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
