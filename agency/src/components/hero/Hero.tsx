"use client";
import { Bot, Code, PhoneCall, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimateOnScroll } from "../animation/AnimateOnScroll";

interface Feature {
  text: string;
  onClick?: () => void;
}

interface ServiceCard {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
}

const FeatureItem = ({ text, onClick }: Feature) => (
  <p
    className="flex items-center text-base md:text-2xl tracking-widest cursor-pointer"
    onClick={onClick}
  >
    <span className="text-rose-500 mr-2">&gt;</span>
    {text}
  </p>
);

const ServiceButton = ({ icon: Icon, label, href, onClick }: ServiceCard) => {
  if (onClick) {
    return (
      <div
        className="flex items-center gap-2 bg-rose-900 hover:bg-rose-800 transition text-white px-6 py-3 rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <Icon className="w-5 h-5" />
        {label}
      </div>
    );
  }

  return (
    <Link href={href || "#"} className="block">
      <div className="flex items-center gap-2 bg-rose-900 hover:bg-rose-800 transition text-white px-6 py-3 rounded-lg cursor-pointer">
        <Icon className="w-5 h-5" />
        {label}
      </div>
    </Link>
  );
};

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax transforms
  const titleTransform = `translateY(${scrollY * 0.1}px)`;
  const subtitleTransform = `translateY(${scrollY * 0.05}px)`;
  const featuresTransform = `translateY(${scrollY * -0.08}px)`;
  const buttonsTransform = `translateY(${scrollY * -0.12}px)`;

  const features: Feature[] = [
    { text: "AI assistants and voice agents" },
    { text: "24/7 automated customer support" },
    { text: "Professional websites with AI" },
  ];

  const services: ServiceCard[] = [
    {
      icon: Bot,
      label: "AI Assistant",
      href: "/services/intelligent-assistant",
    },
    {
      icon: PhoneCall,
      label: "AI Voice Agent",
      href: "/services/ai-voice-agent",
    },
    { icon: Code, label: "AI Powered Website", href: "/services/website" },
  ];

  // Add a particle effect background
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; speed: number }[]
  >([]);

  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.2 + 0.1,
    }));

    setParticles(newParticles);

    // Animate particles
    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center tracking-wider min-h-screen text-white px-4 pt-16 relative overflow-hidden"
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-rose-500 opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transition: "top 0.5s linear",
            }}
          />
        ))}
      </div>

      {/* Content with parallax */}
      <div className="relative z-10">
        <AnimateOnScroll direction="down" timing="slow" className="mb-4">
          <h1
            className="text-5xl md:text-8xl tracking-widest text-center"
            style={{
              transform: titleTransform,
              transition: "transform 0.2s ease-out",
            }}
          >
            Aloria Labs
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll
          direction="up"
          delay={200}
          timing="slow"
          className="mb-8"
        >
          <h2
            className="text-4xl md:text-5xl text-rose-500 tracking-widest font-light text-center w-full"
            style={{
              transform: subtitleTransform,
              transition: "transform 0.2s ease-out",
            }}
          >
            Automate Customer Support with AI
          </h2>
        </AnimateOnScroll>

        {/* Feature List */}
        <div
          className="text-left text-gray-300 space-y-2 mb-10"
          style={{
            transform: featuresTransform,
            transition: "transform 0.2s ease-out",
          }}
        >
          {features.map((feature, index) => (
            <AnimateOnScroll
              key={index}
              direction="left"
              delay={300 + index * 100}
              timing="fast"
            >
              <FeatureItem text={feature.text} onClick={feature.onClick} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4"
          style={{
            transform: buttonsTransform,
            transition: "transform 0.2s ease-out",
          }}
        >
          {services.map((service, index) => (
            <AnimateOnScroll
              key={index}
              direction="up"
              delay={600 + index * 100}
              timing="normal"
            >
              <ServiceButton
                icon={service.icon}
                label={service.label}
                href={service.href}
                onClick={service.onClick}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};
