"use client";

import { Check, Mail } from "lucide-react";

interface ProcessStepCardProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStepCard = ({
  number,
  title,
  description,
}: ProcessStepCardProps) => (
  <div className="bg-[#ffffff0f] backdrop-blur-sm p-6 rounded-lg border border-neutral-700 h-full">
    <div className="flex items-center mb-4">
      <span className="bg-rose-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-lg">
        {number}
      </span>
      <h3 className="text-xl text-rose-500 tracking-wider">{title}</h3>
    </div>
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

export default function AutomatedOutreachPage() {
  // Text content
  const descriptionText = {
    intro:
      "The AI Precision Outreach system finds your perfect prospects, obtains their contact details, researches their background, and creates personalized emails that get responses. This automated process works 24/7 to connect your business with the right people at the right time.",
    conclusion:
      "Scale outreach efforts without expanding your team. Every prospect receives a message tailored to their specific situation, resulting in higher response rates and more meaningful business conversations.",
  };

  // Process steps data
  const processSteps = [
    {
      number: "1",
      title: "Find Ideal Prospects",
      description:
        "Our AI identifies perfect-fit prospects by analyzing your ideal customer profile and scouring the digital landscape to find matches that align with your target criteria, ensuring you're only reaching out to the most promising potential clients.",
    },
    {
      number: "2",
      title: "Find Their Emails",
      description:
        "The system then intelligently locates and verifies email addresses for your prospects, using advanced algorithms to ensure deliverability and minimize bounce rates, so your messages always reach their intended recipients.",
    },
    {
      number: "3",
      title: "Research Their Background",
      description:
        "With prospects identified, our AI conducts comprehensive research into each individual's professional background, company context, recent achievements, and potential pain points—gathering the critical information needed for genuine personalization.",
    },
    {
      number: "4",
      title: "Craft Personalized Emails",
      description:
        "Finally, leveraging all gathered insights, the system crafts hyper-personalized email copy that addresses each prospect's specific situation and needs, creating messages that feel genuinely human and thoughtfully crafted.",
    },
  ];

  // Use cases data
  const useCases = [
    {
      title: "B2B Sales Teams",
      description:
        "Supercharge your outbound sales efforts with personalized outreach at scale, freeing your team to focus on relationship building and closing deals.",
    },
    {
      title: "Recruitment Agencies",
      description:
        "Identify and connect with ideal candidates using personalized communications that stand out in crowded inboxes.",
    },
    {
      title: "Marketing Agencies",
      description:
        "Find perfect-fit clients and demonstrate your expertise through highly targeted outreach that showcases your understanding of their specific needs.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-8 tracking-widest pt-8">
          Automated Precision Outreach
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

        {/* Process Section */}
        <h2 className="text-3xl text-rose-500 mb-6 tracking-widest">
          How does it work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 tracking-wider">
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* Ideal For Section */}
        <h2 className="text-3xl text-rose-500 mb-6 tracking-widest">
          Ideal For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 tracking-wider">
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
