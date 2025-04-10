"use client";

import Button1 from "../../ui/buttons/Button1";
import Button2 from "../../ui/buttons/Button2";
import { useEffect, useCallback, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for scroll to add shadow and background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Use useEffect to add IDs to section headlines for better targeting
  useEffect(() => {
    // Add IDs to headline elements within each section
    const sections = [
      {
        sectionId: "hero",
        headlineClass: ".text-center h1, .text-center h2, .text-4xl",
      },
      { sectionId: "services", headlineClass: "h2, .text-4xl" },
      { sectionId: "faq", headlineClass: "h2, .text-4xl" },
      { sectionId: "contact", headlineClass: "h2, .text-4xl" },
    ];

    sections.forEach(({ sectionId, headlineClass }) => {
      const section = document.getElementById(sectionId);
      if (section) {
        // Find the headline element within the section
        const headline = section.querySelector(headlineClass);
        if (headline && !headline.id) {
          headline.id = `${sectionId}-headline`;
        }

        // Set scroll margin to the section itself as a fallback
        section.style.scrollMarginTop = "20px";
      }
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    // Try to find the headline first
    const headlineId = `${sectionId}-headline`;
    const headline = document.getElementById(headlineId);
    const section = document.getElementById(sectionId);

    // Calculate offset based on navbar height and adjust for specific sections
    let offset = 30; // Default offset

    // Special case for FAQ section - needs more offset to prevent scrolling too far
    if (sectionId === "faq") {
      offset = 100;
    }

    if (headline) {
      // Scroll to the headline with offset
      const headlinePosition =
        headline.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: headlinePosition,
        behavior: "smooth",
      });
    } else if (section) {
      // Fallback to scrolling to the section with specific offset
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }

    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <div
        className={`w-full py-4 px-4 md:px-12 flex items-center justify-between fixed top-0 left-0 right-0 z-50 ${
          isMobileMenuOpen
            ? "bg-slate-900 shadow-md"
            : isScrolled
            ? "bg-slate-900/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="font-bricolage text-xl font-bold text-white">
          agency01
        </div>

        {/* Mobile menu button */}
        <button
          className="flex md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          <div
            onClick={() => scrollToSection("services")}
            className="cursor-pointer"
          >
            <Button1 title="Services" />
          </div>
          <div
            onClick={() => scrollToSection("faq")}
            className="cursor-pointer"
          >
            <Button1 title="FAQ" />
          </div>
          <div
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            <Button1 title="Contact" />
          </div>
        </div>

        {/* Desktop CTA button */}
        <div
          onClick={() => scrollToSection("contact")}
          className="hidden md:block cursor-pointer"
        >
          <Button2 title="Schedule a call" />
        </div>
      </div>

      {/* Mobile Menu - Always rendered but conditionally visible */}
      <div
        className={`fixed inset-0 top-16 bg-slate-900 border-t border-slate-800 flex flex-col z-40 md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-evenly py-10 h-full">
          <div
            onClick={() => scrollToSection("services")}
            className="cursor-pointer w-full text-center"
          >
            <Button1 title="Services" />
          </div>
          <div
            onClick={() => scrollToSection("faq")}
            className="cursor-pointer w-full text-center"
          >
            <Button1 title="FAQ" />
          </div>
          <div
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer w-full text-center"
          >
            <Button1 title="Contact" />
          </div>
          <div
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer w-full text-center"
          >
            <Button2 title="Schedule a call" />
          </div>
        </div>
      </div>
    </>
  );
}
