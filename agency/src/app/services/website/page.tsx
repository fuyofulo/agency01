"use client";

import { Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="bg-[#ffffff0f] backdrop-blur-sm p-6 rounded-lg border border-neutral-700 h-full">
    <h3 className="text-xl text-rose-500 mb-4 tracking-wider">{title}</h3>
    <p className="text-gray-300 tracking-wider">{description}</p>
  </div>
);

interface UseCaseCardProps {
  title: string;
  description: string;
}

const UseCaseCard = ({ title, description }: UseCaseCardProps) => (
  <div className="bg-[#ffffff0f] backdrop-blur-sm p-6 rounded-lg border border-neutral-700 h-full">
    <div className="flex items-start mb-3">
      <div className="flex-shrink-0 mt-1">
        <Check className="h-5 w-5 text-rose-500" />
      </div>
      <div className="ml-3">
        <h3 className="text-xl text-gray-200 tracking-wider">{title}</h3>
      </div>
    </div>
    <p className="text-gray-400 tracking-wider">{description}</p>
  </div>
);

export default function WebsiteServicePage() {
  // Text content
  const descriptionText = {
    intro:
      "Looking for a website that's as brilliant as it is beautiful? At Aloria Labs, we craft AI-powered websites that blend cutting-edge intelligence with jaw-dropping design. These aren't your average sites—they come alive with intelligent chat and voice assistants, ready to tackle any visitor question, guide users effortlessly, and elevate your online presence. Think of them as your brand's digital dream team: stylish, smart, and always on the job.",
    conclusion:
      "These websites don't just sit there looking pretty—they engage, assist, and convert. With stunning visuals and smart features, they're your 24/7 digital ambassador, designed to impress and built to perform. Why go basic when you can go brilliant? Let Agency00 bring your online presence to life with a website that's equal parts brains and beauty. Ready to chat (or talk) about it? We're all ears!",
  };

  // Features data
  const features = [
    {
      title: "Exquisite, User-Focused Design",
      description:
        "We don't just design websites; we sculpt digital experiences. Expect sleek, modern aesthetics, intuitive layouts, and a polished finish that reflects your brand's unique flair. It's like giving your business a front-row seat in the online world.",
    },
    {
      title: "Chat That Thinks",
      description:
        "Our integrated chat assistant isn't just a bot—it's a conversational wizard. Need to answer FAQs, recommend products, or assist with navigation? It's got you covered, delivering instant responses with a personal touch.",
    },
    {
      title: "Voice That Listens",
      description:
        "Prefer hands-free? Our voice assistant steps in like a trusty sidekick, responding to spoken queries, booking appointments, or pulling up info—all with a friendly vibe your users will love.",
    },
    {
      title: "Round-the-Clock Service",
      description:
        "Day or night, your website's AI crew is awake and ready. Customers get instant support whenever they need it, no coffee breaks required.",
    },
  ];

  // Use cases data
  const useCases = [
    {
      title: "E-commerce Stars",
      description:
        "Imagine a shopper asking, \"What's in stock?\" Your website not only answers but suggests a bestseller to seal the deal. It's like a virtual sales assistant that never misses a beat.",
    },
    {
      title: "Service Pros",
      description:
        "From plumbers to consultants, let our voice assistant handle bookings or FAQs like 'What's your cancellation policy?'—so you can focus on delivering top-notch service.",
    },
    {
      title: "Content Hubs",
      description:
        "Running a blog or info site? Our AI guides visitors to the perfect article or sums up key points, making your content as easy to explore as it is to enjoy.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-8 tracking-widest pt-8">
          AI-Powered Websites
        </h1>

        {/* Description Section */}
        <div className="mb-12">
          <div className="bg-[#ffffff0f] backdrop-blur-sm p-8 rounded-lg border border-neutral-700">
            <p className="text-gray-200 text-lg leading-relaxed tracking-wider">
              {descriptionText.intro}
            </p>
            <p className="text-gray-200 text-lg mt-4 leading-relaxed tracking-wider">
              {descriptionText.conclusion}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <h2 className="text-3xl text-rose-500 mb-6 tracking-wider">
          What Makes Our Websites Stand Out?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 tracking-wider">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Use Cases Section */}
        <h2 className="text-3xl text-rose-500 mb-6 tracking-wider">
          Ideal for
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
