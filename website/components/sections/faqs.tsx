import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "What types of businesses can benefit from your AI automation services?",
    answer:
      "Our AI automation solutions are designed to help businesses of all sizes and across various industries. From startups to enterprise-level organizations in fields like healthcare, finance, e-commerce, manufacturing, and more, our tailored approaches address specific operational challenges and growth opportunities.",
  },
  {
    question: "How long does it take to implement an AI automation solution?",
    answer:
      "Implementation timelines vary based on the complexity of your needs and existing infrastructure. Simple integrations can be completed in a few weeks, while more comprehensive systems might take 2-3 months. During our initial consultation, we'll provide a clear project timeline tailored to your specific requirements.",
  },
  {
    question: "Do I need technical expertise to use your AI solutions?",
    answer:
      "Not at all. We design our solutions with user-friendliness in mind. While they're powered by sophisticated AI technology, the interfaces are intuitive and require minimal technical knowledge. Additionally, we provide comprehensive training and ongoing support to ensure your team can effectively utilize the tools.",
  },
  {
    question:
      "How do you ensure data security and privacy with your AI solutions?",
    answer:
      "Data security is our top priority. We implement industry-leading encryption protocols, secure cloud infrastructure, and strict access controls. All our solutions are designed to comply with relevant data protection regulations like GDPR, HIPAA, and other industry-specific requirements. We'll work with your team to ensure all security and compliance needs are met.",
  },
  {
    question:
      "What kind of ROI can I expect from implementing your AI automation solutions?",
    answer:
      "While ROI varies by implementation, our clients typically see returns in multiple areas: reduced operational costs (20-40% on average), increased productivity, improved customer satisfaction, and new revenue opportunities. We establish clear KPIs at the beginning of each project and provide analytics tools to help you track the value delivered.",
  },
  {
    question: "Do you offer ongoing support after implementation?",
    answer:
      "Yes, we provide comprehensive support packages to ensure your AI solutions continue to perform optimally. This includes regular maintenance, performance monitoring, updates to incorporate new AI capabilities, and dedicated technical support. We view our client relationships as long-term partnerships focused on sustained success.",
  },
];

export function FAQsSection() {
  return (
    <section id="faqs" className="py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our AI automation services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
