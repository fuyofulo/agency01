"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have questions about our AI automation services? Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your project, needs, and timeline"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-6 rounded-lg bg-muted">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  Our friendly team is here to help.
                </p>
                <a
                  href="mailto:contact@aiautomation.com"
                  className="text-primary font-medium mt-2"
                >
                  contact@aiautomation.com
                </a>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-6 rounded-lg bg-muted">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground">
                  Mon-Fri from 8am to 5pm.
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-primary font-medium mt-2"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left p-6 rounded-lg bg-muted">
              <MapPin className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                Come say hello at our office HQ.
              </p>
              <address className="not-italic text-primary font-medium mt-2">
                100 Innovation Drive
                <br />
                Tech City, AI 12345
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
