"use client";

import Button1 from "../../ui/buttons/Button1";
import Button2 from "../../ui/buttons/Button2";
import { useEffect, useCallback, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll to add shadow and background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        section.style.scrollMarginTop = "100px";
      }
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    // Try to find the headline first
    const headlineId = `${sectionId}-headline`;
    const headline = document.getElementById(headlineId);
    const section = document.getElementById(sectionId);

    // Calculate offset based on navbar height (adjust this value as needed)
    const offset = 100; // Navbar height + some padding

    if (headline) {
      // Scroll to the headline with offset
      const headlinePosition =
        headline.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: headlinePosition,
        behavior: "smooth",
      });
    } else if (section) {
      // Fallback to scrolling to the section
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div
      className={`w-full py-4 px-12 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="font-bricolage text-xl font-bold text-white">
        agency01
      </div>

      <div className="flex space-x-6">
        <div
          onClick={() => scrollToSection("services")}
          className="cursor-pointer"
        >
          <Button1 title="Services" />
        </div>
        {/* <div onClick={() => scrollToSection("testimonials")}>
          <Button1 title="Testimonials" />
        </div> */}
        <div onClick={() => scrollToSection("faq")} className="cursor-pointer">
          <Button1 title="FAQ" />
        </div>
        <div
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer"
        >
          <Button1 title="Contact" />
        </div>
      </div>

      <div
        onClick={() => scrollToSection("contact")}
        className="cursor-pointer"
      >
        <Button2 title="Schedule a call" />
      </div>
    </div>
  );
}
