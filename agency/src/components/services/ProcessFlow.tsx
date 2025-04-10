import { MessageSquare, Phone, Rocket, Users } from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const Step = ({ icon, title, description, stepNumber }: ProcessStep) => (
  <div className="relative flex flex-col items-center text-center">
    <div className="bg-[#ffffff0f] p-8 rounded-lg border border-neutral-700 w-full h-full flex flex-col items-center justify-start">
      <div className="absolute top-3 left-3 text-rose-500 text-xl font-bold">
        {stepNumber + "."}
      </div>

      <div className="text-rose-500 mb-6">{icon}</div>

      <h3 className="text-white text-xl md:text-xl mb-4 tracking-widest uppercase">
        {title}
      </h3>

      <p className="text-gray-400 text-sm tracking-wide">{description}</p>
    </div>
  </div>
);

export const ProcessFlow = () => {
  const steps: Omit<ProcessStep, "stepNumber">[] = [
    {
      icon: <MessageSquare size={48} />,
      title: "Choose Solution",
      description: "Select the AI services that match your needs",
    },
    {
      icon: <Users size={48} />,
      title: "Contact Us",
      description: "Tell us about your business requirements",
    },
    {
      icon: <Phone size={48} />,
      title: "Discovery Call",
      description: "Discuss implementation details and timeline",
    },
    {
      icon: <Rocket size={48} />,
      title: "Quick Launch",
      description: "Go live with your AI solution in days",
    },
  ];

  return (
    <section id="process" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl text-center mb-16 tracking-widest">
          Onboarding Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
