import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Implementing AI automation solutions from this team has reduced our operational costs by 35% while improving customer satisfaction scores by 40%.",
    author: "Sarah Johnson",
    position: "CTO, TechGlobal Inc.",
    image: "/avatars/avatar-1.png",
  },
  {
    quote:
      "Their conversational AI completely transformed our customer service department. We now handle 3x the volume of inquiries with the same team size.",
    author: "Michael Chen",
    position: "Director of Operations, Retail Nexus",
    image: "/avatars/avatar-2.png",
  },
  {
    quote:
      "The data analytics solution they built for us revealed insights that led to a complete rethinking of our product strategy. Game-changing.",
    author: "Elena Rodriguez",
    position: "VP of Product, InnovateCorp",
    image: "/avatars/avatar-3.png",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear what our clients have to say about our AI automation solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border border-border hover:shadow-md transition-shadow"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/60 mb-4" />
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0">
                    {/* In a real project, this would be an actual image */}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
