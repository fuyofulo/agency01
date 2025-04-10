import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, PenTool, LineChart, Code, Bot, Cog } from "lucide-react";

const services = [
  {
    title: "AI Strategy Consulting",
    description:
      "Develop a comprehensive AI roadmap tailored to your business goals and challenges.",
    icon: Brain,
  },
  {
    title: "Custom AI Solutions",
    description:
      "Build bespoke AI applications designed specifically for your unique business processes.",
    icon: PenTool,
  },
  {
    title: "Data Analytics & Insights",
    description:
      "Transform your data into actionable insights with advanced AI analytics capabilities.",
    icon: LineChart,
  },
  {
    title: "AI Integration",
    description:
      "Seamlessly integrate AI technologies with your existing systems and workflows.",
    icon: Code,
  },
  {
    title: "Conversational AI",
    description:
      "Create intelligent chatbots and virtual assistants to enhance customer experiences.",
    icon: Bot,
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive tasks and workflows to increase efficiency and reduce costs.",
    icon: Cog,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI solutions to help your business thrive in the
            digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
