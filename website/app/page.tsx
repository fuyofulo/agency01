import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQsSection } from "@/components/sections/faqs";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
