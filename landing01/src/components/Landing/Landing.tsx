"use client";

import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import Services from "./ServicesSection/Services";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen relative bg-gradient-to-b from-slate-900 to-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-[70vh] pt-28 pb-10">
        <div className="container mx-auto h-[70vh] flex flex-col items-center justify-center z-10 relative mt-12">
          <div className="text-center w-full max-w-5xl mx-auto px-4">
            <div className="flex flex-col space-y-8 items-center">
              <HeroSection />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 pb-24 z-10 relative pt-28">
        <Services />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 pb-32 z-10 relative pt-16">
        <FAQ />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-4 z-10 relative pt-16">
        <Contact />
      </section>
    </div>
  );
}
