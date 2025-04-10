"use client";

import Headline from "./Headline";
import Subheadline from "./Subheadline";
import Button2 from "@/components/ui/buttons/Button2";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] pb-8 px-4">
        <Headline />
        <Subheadline />
        <div className="pt-6 sm:pt-8">
          <Button2
            title="Get Started"
            className="px-6 py-2 text-base sm:text-lg"
            onClick={scrollToContact}
          />
        </div>
      </div>
    </>
  );
}
