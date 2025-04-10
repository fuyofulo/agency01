"use client";

import { useState } from "react";
import Button2 from "@/components/ui/buttons/Button2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend or email service
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Replace this with your actual Calendly scheduling URL
  const calendlyUrl = "https://calendly.com/yourcompany/meeting";

  // Function to open Calendly in a new tab
  const redirectToCalendly = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg text-center max-w-2xl text-slate-300">
          Hit us up to help you set up AI automation for your customer support
          system. Start saving time and delivering better support within days.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
        {/* Schedule a Call Section */}
        <div className="rounded-xl sm:rounded-2xl border border-slate-700/50 bg-gray-600 backdrop-blur-sm shadow-xl p-4 sm:p-5">
          <h3 className="text-xl font-bold text-white mb-2 sm:mb-3">
            Schedule a Call
          </h3>
          <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
            Book a time with our team to discuss your project needs, timeline,
            and how we can help you implement the perfect solution.
          </p>
          <div className="bg-gray-800/80 p-3 sm:p-4 rounded-xl border border-slate-700/50 h-auto flex flex-col items-center justify-center">
            <div className="text-center space-y-3">
              <p className="text-slate-300 text-sm">
                Click below to open our scheduling page and find a time that
                works for you.
              </p>
              <div onClick={redirectToCalendly} className="cursor-pointer">
                <Button2
                  title="Schedule a Call"
                  className="px-5 py-2 text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Send Message Form Section */}
        <div className="rounded-xl sm:rounded-2xl border border-slate-700/50 bg-gray-600 backdrop-blur-sm shadow-xl p-4 sm:p-5">
          <h3 className="text-xl font-bold text-white mb-2 sm:mb-3">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-white mb-1 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-slate-300 border border-slate-600 rounded-lg px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-1 text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-300 border-slate-600 rounded-lg px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white mb-1 text-sm"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-300 border border-slate-600 rounded-lg px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-1 text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your project, needs, and timeline"
                  rows={3}
                  className="w-full bg-slate-300 border border-slate-600 rounded-lg px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-slate-400 resize-none text-sm sm:text-base"
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg border border-slate-600 transition-all duration-300 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
