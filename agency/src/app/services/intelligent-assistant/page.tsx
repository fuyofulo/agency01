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

export default function IntelligentAssistantPage() {
  // Text content
  const descriptionText = {
    intro:
      "Meet your new digital teammate: the Intelligent Chat Assistant from Agency00. This isn't just any chatbot; it's a super-smart, always-on helper that can tackle customer questions, fetch real-time data, and even handle multiple chats at once. Imagine having a customer service rep who never sleeps, never gets tired, and always has the right answer at their fingertips. That's our Chat Assistant.",
    conclusion:
      "Think of it as your business's secret weapon for customer satisfaction. And the best part? It's always learning and improving, so it gets even better over time. Say goodbye to \"please hold\" and hello to instant answers!",
  };

  // Capabilities data
  const capabilities = [
    {
      title: "FAQ Master",
      description:
        'It can answer frequently asked questions faster than you can say "How can I help you?"',
    },
    {
      title: "Real-Time Data Wizard",
      description:
        "Need to check inventory or order status? It pulls data from your backend systems in a snap.",
    },
    {
      title: "Multitasker Extraordinaire",
      description:
        "It can juggle multiple conversations simultaneously, ensuring no customer is left waiting.",
    },
  ];

  // Use cases data
  const useCases = [
    {
      title: "E-commerce Stores",
      description:
        "Help customers track orders, check product availability, and answer return policy questions—because no one likes waiting for an email reply when they're mid-shopping spree.",
    },
    {
      title: "Customer Support Centers",
      description:
        "Handle routine inquiries, freeing up human agents for more complex issues, so your team can focus on the big stuff.",
    },
    {
      title: "Healthcare Providers",
      description:
        "Assist patients with appointment scheduling and provide information on services, making life easier for both staff and patients.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-8 tracking-widest pt-8">
          Intelligent Chat Assistant
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

        {/* Capabilities Section */}
        <h2 className="text-3xl text-rose-500 mb-6 tracking-widest">
          Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, index) => (
            <FeatureCard
              key={index}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>

        {/* Perfect For Section */}
        <h2 className="text-3xl text-rose-500 mb-6 tracking-widest">
          Perfect For
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
