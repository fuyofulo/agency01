import { Check } from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceCard {
  title: string;
  features: ServiceFeature[];
  buttonUrl?: string;
}

const FeatureItem = ({ title, description }: ServiceFeature) => (
  <div className="mb-6">
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <Check className="h-5 w-5 text-rose-500" />
      </div>
      <div className="ml-3">
        <p className="text-gray-300">{title}</p>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const ServiceSection = ({ title, features, buttonUrl = "#" }: ServiceCard) => (
  <div className="bg-[#ffffff0f] backdrop-blur-sm p-8 rounded-lg border border-neutral-700 h-full flex flex-col">
    <h3 className="text-xl md:text-2xl text-rose-500 mb-6 tracking-wider">
      {title}
    </h3>
    <div className="flex-grow tracking-wide">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
    <div className="mt-4">
      <a
        href={buttonUrl}
        className="inline-block border bg-rose-900 border-rose-900 text-slate-100 hover:bg-rose-700 hover:text-white px-6 py-2 rounded transition-colors duration-300 tracking-widest"
      >
        Learn More
      </a>
    </div>
  </div>
);

export const Services = () => {
  const servicesData: ServiceCard[] = [
    {
      title: "INTELLIGENT ASSISTANT",
      features: [
        {
          title: "24/7 Website Support",
          description:
            "Instant responses on your website and messaging platforms",
        },
        {
          title: "Multi-Channel Integration",
          description: "Seamless support across web, mobile, and social media",
        },
        {
          title: "Learning & Adaptation",
          description: "Continuously improves from customer interactions",
        },
      ],
      buttonUrl: "/services/chatbot",
    },
    {
      title: "AI VOICE AGENT",
      features: [
        {
          title: "Natural Conversations",
          description: "Human-like phone interactions with context awareness",
        },
        {
          title: "Restaurant Bookings",
          description: "Handles reservations and manages scheduling",
        },
        {
          title: "Smart Transfers",
          description: "Seamlessly connects to staff when needed",
        },
      ],
      buttonUrl: "/services/phone-agent",
    },
    {
      title: "AI POWERED WEBSITE",
      features: [
        {
          title: "Custom Design",
          description: "Unique, professional websites tailored to your brand",
        },
        {
          title: "Responsive Development",
          description: "Mobile-friendly sites that work on all devices",
        },
        {
          title: "AI Integration",
          description: "Seamless integration with our AI solutions",
        },
      ],
      buttonUrl: "/services/website",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-white text-4xl text-center md:text-5xl mb-16 tracking-widest">
          Tailored Solutions for Your Business
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceSection
              key={index}
              title={service.title}
              features={service.features}
              buttonUrl={service.buttonUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
