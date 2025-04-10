"use client";

import { ServiceExpandableCard } from "./ServiceExpandableCard";

// Example of a custom theme - uncomment to use
const purpleTheme = {
  // Card colors
  cardBackground: "bg-gray-900",
  cardBorder: "border border-violet-700",
  cardHoverScale: 1.03,

  // Text colors
  titleColor: "text-violet-300",
  descriptionColor: "text-violet-100",
  contentTextColor: "text-gray-100",

  // Button colors
  ctaButtonBackground: "bg-transparent",
  ctaButtonText: "text-violet-300",
  ctaButtonBorder: "border border-violet-700",
  ctaButtonHoverBg: "hover:bg-violet-900",

  // Expanded card colors
  expandedCardBackground: "bg-gray-900",
  expandedCardBorder: "border border-violet-700",
  closeButtonBackground: "bg-violet-800",
  closeButtonText: "text-white",
  backdropEffect: "backdrop-blur-lg bg-violet-950/10",
};

// Service data
const services = [
  {
    title: "AI Chatbots",
    description:
      "Intelligent conversational agents that provide 24/7 customer support with advanced natural language processing capabilities.",
    ctaText: "learn more",
    content: () => (
      <div>
        <h4 className="text-xl font-bold mb-3">AI Chatbots</h4>
        <p className="mb-4">
          Our AI chatbots are built using state-of-the-art language models that
          can understand and respond to customer queries with human-like
          precision. They deliver personalized experiences while handling
          multiple conversations simultaneously.
        </p>

        <h5 className="text-lg font-semibold mt-4 mb-2">Key Features:</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>24/7 customer support without human intervention</li>
          <li>Seamless integration with your existing platforms</li>
          <li>Personalized responses based on customer history</li>
          <li>Multi-language support for global reach</li>
          <li>Advanced analytics to improve performance over time</li>
        </ul>

        <p className="mt-4">
          Our chatbots can handle common customer queries, freeing your team to
          focus on complex issues that require human expertise.
        </p>
      </div>
    ),
  },
  {
    title: "Automated Voice Calls",
    description:
      "AI-driven analysis of customer behavior and feedback to help you understand and anticipate their needs.",
    ctaText: "learn more",
    content: () => (
      <div>
        <h4 className="text-xl font-bold mb-3">Automated Voice Calls</h4>
        <p className="mb-4">
          Our voice automation system uses natural-sounding AI voices to conduct
          outbound calls and handle incoming customer inquiries with the fluency
          of a human agent.
        </p>

        <h5 className="text-lg font-semibold mt-4 mb-2">Key Benefits:</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>Reduce wait times and increase customer satisfaction</li>
          <li>Scale your call capacity without increasing staff</li>
          <li>Consistent customer experiences across all interactions</li>
          <li>Real-time transcription and analytics</li>
          <li>Seamless handoff to human agents when needed</li>
        </ul>

        <p className="mt-4">
          Perfect for appointment reminders, follow-ups, surveys, and
          first-level support, our voice automation system helps you maintain
          consistent communication with your customers.
        </p>
      </div>
    ),
  },
  {
    title: "CRM and Lead Generation",
    description:
      "Smart response systems that handle common queries instantly, freeing up your team to focus on complex issues.",
    ctaText: "learn more",
    content: () => (
      <div>
        <h4 className="text-xl font-bold mb-3">CRM and Lead Generation</h4>
        <p className="mb-4">
          Our AI-powered CRM system transforms how you identify, nurture, and
          convert leads into loyal customers by automating the entire lead
          management process.
        </p>

        <h5 className="text-lg font-semibold mt-4 mb-2">Core Capabilities:</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>Automated lead scoring and qualification</li>
          <li>Personalized follow-up sequences</li>
          <li>Customer journey mapping and optimization</li>
          <li>Predictive analytics to identify high-value prospects</li>
          <li>Integration with your existing sales processes</li>
        </ul>

        <p className="mt-4">
          By analyzing patterns in customer data, our system identifies the most
          promising leads and engages them with personalized communication at
          the optimal time.
        </p>
      </div>
    ),
  },
  {
    title: "Data Analytics",
    description:
      "Comprehensive data analysis and visualization to help you make informed decisions based on customer interactions and trends.",
    ctaText: "learn more",
    content: () => (
      <div>
        <h4 className="text-xl font-bold mb-3">Data Analytics</h4>
        <p className="mb-4">
          Turn your customer interaction data into actionable insights with our
          advanced analytics platform. Identify trends, predict customer needs,
          and optimize your business operations.
        </p>

        <h5 className="text-lg font-semibold mt-4 mb-2">
          Analytics Capabilities:
        </h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>Customer sentiment analysis</li>
          <li>Behavior pattern recognition</li>
          <li>Predictive modeling for business forecasting</li>
          <li>Custom dashboards and reporting</li>
          <li>Real-time monitoring of key metrics</li>
        </ul>

        <p className="mt-4">
          Our analytics solution helps you understand what your customers want
          before they tell you, allowing you to proactively address their needs
          and improve satisfaction.
        </p>
      </div>
    ),
  },
  {
    title: "Integration Services",
    description:
      "Seamless integration with your existing systems and workflows to maximize efficiency and productivity.",
    ctaText: "learn more",
    content: () => (
      <div>
        <h4 className="text-xl font-bold mb-3">Integration Services</h4>
        <p className="mb-4">
          Connect all your business systems with our integration services to
          create a unified workflow that eliminates silos and enhances
          productivity.
        </p>

        <h5 className="text-lg font-semibold mt-4 mb-2">
          Integration Features:
        </h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>API-based connections to major business platforms</li>
          <li>Custom integration development for legacy systems</li>
          <li>Automated data synchronization</li>
          <li>Workflow automation across platforms</li>
          <li>Secure data transfer protocols</li>
        </ul>

        <p className="mt-4">
          Whether you need to connect your CRM with your marketing automation,
          or your customer support with your analytics platform, our integration
          services ensure smooth data flow throughout your organization.
        </p>
      </div>
    ),
  },
  {
    title: "Custom AI Solutions",
    description:
      "Tailor-made AI solutions designed to address your specific business challenges and objectives.",
    ctaText: "learn more",
    content: () => (
      <div>
        <h4 className="text-xl font-bold mb-3">Custom AI Solutions</h4>
        <p className="mb-4">
          Beyond our standard offerings, we develop bespoke AI solutions
          tailored to your unique business requirements and challenges.
        </p>

        <h5 className="text-lg font-semibold mt-4 mb-2">
          Development Process:
        </h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>In-depth business analysis and requirement gathering</li>
          <li>Custom AI model development and training</li>
          <li>Iterative testing and refinement</li>
          <li>Deployment and integration</li>
          <li>Ongoing support and optimization</li>
        </ul>

        <p className="mt-4">
          Whether you need an intelligent document processing system, a
          predictive maintenance solution, or a unique customer interaction
          tool, our team of AI specialists will build a solution that delivers
          measurable results.
        </p>
      </div>
    ),
  },
];

export default function ServiceCardCollection() {
  return (
    <div className="w-full mx-auto px-4 py-6 sm:py-12">
      {/* Use default theme */}
      <ServiceExpandableCard services={services} />

      {/* Uncomment to use custom theme */}
      {/* <ServiceExpandableCard services={services} theme={purpleTheme} /> */}
    </div>
  );
}
