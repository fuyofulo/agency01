import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold mb-4 inline-block">
              AI Automation
            </Link>
            <p className="text-muted-foreground max-w-xs mt-2">
              Transforming businesses through intelligent automation and
              AI-powered solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                100 Innovation Drive
                <br />
                Tech City, AI 12345
              </li>
              <li>
                <a
                  href="mailto:contact@aiautomation.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@aiautomation.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Automation. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.19 21.5c-4.35 0-7.88-3.44-7.88-7.68 0-4.24 3.53-7.68 7.88-7.68h6.13c4.35 0 7.88 3.44 7.88 7.68 0 4.24-3.53 7.68-7.88 7.68H9.19zm0-15.36H9.2c-4.24 0-7.69 3.35-7.69 7.68 0 4.33 3.45 7.68 7.69 7.68h6.13c4.24 0 7.69-3.35 7.69-7.68 0-4.33-3.45-7.68-7.69-7.68H9.19zM16.42 16.31c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75.75-.34.75-.75zm-4.14 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75.75-.34.75-.75zm-4.15 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75.75-.34.75-.75z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 23h-7.2v-8.042h3.857v-.643c0-1.773.016-3.549-.013-5.322-.008-.501.151-.854.537-1.15.96-.741 1.881-1.929 2.523-2.767.641-.84.29-2.338.29-3.355 0-.583.118-1.325.016-1.721h-6.923c-3.377 0-6.116 2.741-6.116 6.122v8.879h4.083v7.999h-12.057v-23h23v23z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
