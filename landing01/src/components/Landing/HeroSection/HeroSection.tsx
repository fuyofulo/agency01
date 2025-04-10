"use client";

import Headline from "./Headline";
import Subheadline from "./Subheadline";
import Button2 from "@/components/ui/buttons/Button2";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen pb-18">
        <Headline />
        <Subheadline />
        <div className="pt-6">
          <Button2 title="Get Started" className="" />
        </div>
      </div>
    </>
  );
}
