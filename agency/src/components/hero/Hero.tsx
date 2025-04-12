"use client";
import { startVapiAssistant } from "@/functions/Vapi";
import { Bot, Code, PhoneCall, LucideIcon } from "lucide-react";

interface Feature {
  text: string;
  onClick?: () => void;
}

interface ServiceCard {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

const FeatureItem = ({ text, onClick }: Feature) => (
  <p
    className="flex items-center text-base md:text-2xl tracking-widest cursor-pointer"
    onClick={onClick}
  >
    <span className="text-rose-500 mr-2">&gt;</span>
    {text}
  </p>
);

const ServiceButton = ({ icon: Icon, label, onClick }: ServiceCard) => (
  <div
    className="flex items-center gap-2 bg-rose-900 hover:bg-rose-800 transition text-white px-6 py-3 rounded-lg cursor-pointer"
    onClick={onClick}
  >
    <Icon className="w-5 h-5" />
    {label}
  </div>
);

export const Hero = () => {
  const features: Feature[] = [
    { text: "AI assistants and voice agents" },
    { text: "24/7 automated customer support" },
    { text: "Professional websites with AI" },
  ];

  const services: ServiceCard[] = [
    { icon: Bot, label: "AI Assistant" },
    { icon: PhoneCall, label: "AI Voice Agent", onClick: startVapiAssistant },
    { icon: Code, label: "AI Powered Website" },
  ];

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center tracking-wider min-h-screen text-white px-4 pt-16"
    >
      <h1 className="text-5xl md:text-8xl tracking-widest mb-4">
        Company Name
      </h1>
      <h2 className="text-4xl md:text-5xl text-rose-500 mb-8 tracking-widest font-light text-center w-full">
        Automate Customer Support with AI
      </h2>

      {/* Feature List */}
      <div className="text-left text-gray-300 space-y-2 mb-10">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            text={feature.text}
            onClick={feature.onClick}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {services.map((service, index) => (
          <ServiceButton
            key={index}
            icon={service.icon}
            label={service.label}
            onClick={service.onClick}
          />
        ))}
      </div>
    </div>
  );
};
