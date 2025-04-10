import { Bot, PhoneCall, Code, LucideIcon } from "lucide-react";

interface Feature {
  text: string;
}

interface ServiceCard {
  icon: LucideIcon;
  label: string;
}

const FeatureItem = ({ text }: Feature) => (
  <p className="flex items-center text-2xl tracking-widest">
    <span className="text-rose-500 mr-2">&gt;</span>
    {text}
  </p>
);

const ServiceButton = ({ icon: Icon, label }: ServiceCard) => (
  <div className="flex items-center gap-2 bg-rose-900 hover:bg-rose-800 transition text-white px-6 py-3 rounded-lg cursor-pointer">
    <Icon className="w-5 h-5" />
    {label}
  </div>
);

export const Hero = () => {
  const features: Feature[] = [
    { text: "AI assistants and voice agents" },
    { text: "24/7 automated customer support" },
    { text: "Professional websites using AI" },
  ];

  const services: ServiceCard[] = [
    { icon: Bot, label: "AI Assistant" },
    { icon: PhoneCall, label: "AI Voice Agent" },
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
          <FeatureItem key={index} text={feature.text} />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {services.map((service, index) => (
          <ServiceButton
            key={index}
            icon={service.icon}
            label={service.label}
          />
        ))}
      </div>
    </div>
  );
};
