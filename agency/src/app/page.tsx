import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { ProcessFlow } from "@/components/services/ProcessFlow";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ProcessFlow />
      <Testimonials />
      <Contact />
    </>
  );
}
