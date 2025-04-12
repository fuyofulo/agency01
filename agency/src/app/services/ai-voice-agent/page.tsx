"use client";

import { Check, Phone } from "lucide-react";
import { startVapiAssistant, VapiUI } from "@/functions/Vapi";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="bg-[#ffffff0f] backdrop-blur-sm p-6 rounded-lg border border-neutral-700 h-full">
    <h3 className="text-xl text-rose-500 mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
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
        <h3 className="text-xl text-gray-200">{title}</h3>
      </div>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default function AIVoiceAgentPage() {
  // Text content
  const descriptionText = {
    intro:
      "Introducing the Intelligent Voice Assistant from Agency00: your business's new voice of reason. This isn't just a voice bot; it's a conversational maestro that can book appointments, answer queries, and even make outbound calls to potential leads. It's like having a top-notch sales rep and a customer service guru rolled into one, available 24/7—no coffee breaks required.",
    conclusion:
      "It's like having a Swiss Army knife for your customer interactions—versatile, reliable, and always ready to help. Whether it's booking a haircut or chasing down leads, this voice assistant speaks your business's language (and your customers' too!).",
  };

  // Capabilities data
  const capabilities = [
    {
      title: "Appointment Booker",
      description:
        "It can schedule, reschedule, and confirm appointments with a friendly, human-like voice that customers actually enjoy talking to.",
    },
    {
      title: "Query Resolver",
      description:
        "From answering FAQs to providing real-time information by fetching data from your backend, it's got your customers covered.",
    },
    {
      title: "Lead Generator",
      description:
        "It can make outbound calls to multiple leads simultaneously, boosting your reach and efficiency—because why call one lead when you can call ten?",
    },
    {
      title: "Data Collector",
      description:
        "It gathers valuable customer info during interactions, helping you understand your audience better while they chat away.",
    },
  ];

  // Use cases data
  const useCases = [
    {
      title: "Appointment-Based Services",
      description:
        "Perfect for salons, clinics, and consultancies that need to manage bookings efficiently—because double-booking is so last century.",
    },
    {
      title: "Sales Teams",
      description:
        "Automate lead outreach and follow-ups, so your team can focus on closing deals instead of dialing numbers all day.",
    },
    {
      title: "Customer Support",
      description:
        "Provide a personal touch with voice interactions for routine inquiries, making customers feel heard without tying up your staff.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-8 tracking-wider pt-8">
          Intelligent Voice Assistant
        </h1>

        {/* Description Section */}
        <div className="mb-12">
          <div className="bg-[#ffffff0f] backdrop-blur-sm p-8 rounded-lg border border-neutral-700">
            <p className="text-gray-200 text-lg leading-relaxed">
              {descriptionText.intro}
            </p>
            <p className="text-gray-200 text-lg mt-4 leading-relaxed">
              {descriptionText.conclusion}
            </p>
          </div>
        </div>

        {/* Demo Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={startVapiAssistant}
            className="bg-rose-900 hover:bg-rose-800 transition text-white px-8 py-4 rounded-lg flex items-center gap-3 text-lg"
          >
            <Phone className="w-5 h-5" />
            Try the Voice Assistant Demo
          </button>
        </div>

        {/* Capabilities Section */}
        <h2 className="text-3xl text-rose-500 mb-6 tracking-wider">
          Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {capabilities.map((capability, index) => (
            <FeatureCard
              key={index}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>

        {/* Ideal For Section */}
        <h2 className="text-3xl text-rose-500 mb-6 tracking-wider">
          Ideal For
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

        {/* Voice Call UI Component */}
        <VapiUI />
      </div>
    </div>
  );
}
