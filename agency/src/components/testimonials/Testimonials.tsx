interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const TestimonialCard = ({ quote, name, title, company }: Testimonial) => (
  <div className="bg-[#ffffff0d] backdrop-blur-sm p-8 rounded-lg border border-neutral-700 flex flex-col h-full">
    <p className="text-gray-300 mb-8 flex-grow font-light tracking-wide">
      &ldquo;{quote}&rdquo;
    </p>
    <div>
      <p className="text-rose-500 text-lg">{name}</p>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-gray-400 text-sm">{company}</p>
    </div>
  </div>
);

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The chatbot handles our basic inquiries perfectly, while the phone agent manages all our reservations. It&apos;s like having a full support team 24/7.",
      name: "Sarah Chen",
      title: "Restaurant Owner",
      company: "Fusion Kitchen",
    },
    {
      quote:
        "Our customers love having both chat and phone support. The AI agents sound so natural, most people don&apos;t realize they&apos;re not human.",
      name: "Michael Rodriguez",
      title: "Support Director",
      company: "TechFlow Solutions",
    },
    {
      quote:
        "Implementing both solutions has cut our response times dramatically. Our staff can focus on complex cases while AI handles the rest.",
      name: "Emily Watson",
      title: "Operations Manager",
      company: "Swift Services",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-white text-4xl md:text-5xl tracking-wider">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
