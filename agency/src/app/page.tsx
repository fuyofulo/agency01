import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { ProcessFlow } from "@/components/services/ProcessFlow";
import { Contact } from "@/components/contact/Contact";
import { Navbar } from "@/components/navbar/Navbar";
import { VapiUI } from "@/functions/Vapi";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ProcessFlow />
      <Contact />
      <VapiUI />
      
    </>
  );
}
