"use client";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import ServiceCardCollection from "./ServiceCardCollection";

export default function Services() {
  return (
    <div className="container mx-auto flex flex-col">
      <Title />
      <ServiceCardCollection />
    </div>
  );
}
