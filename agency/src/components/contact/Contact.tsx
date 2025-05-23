"use client";

import { Phone } from "lucide-react";
import { useCalendly } from "@/components/providers/CalendlyProvider";

export const Contact = () => {
  const { openCalendlyModal } = useCalendly();

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-6 font-light tracking-wide">
          Contact Us
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide">
          Let&apos;s discuss how we can automate your operations
        </p>

        <button
          onClick={openCalendlyModal}
          className="inline-flex items-center justify-center gap-3 bg-rose-900 text-white hover:bg-rose-800 transition-colors duration-300 rounded-lg px-10 py-4 text-xl tracking-widest"
        >
          <Phone className="w-6 h-6" />
          Schedule a call
        </button>
      </div>
    </section>
  );
};
