"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  text: string;
  href: string;
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  const navLinks: NavLink[] = [
    { text: "Home", href: "#home" },
    { text: "Services", href: "#services" },
    { text: "Process", href: "#process" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-rose-500 text-3xl tracking-widest"
              onClick={(e) => scrollToSection(e, "#home")}
            >
              AGENCY
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-300 hover:text-rose-500 px-3 py-2 text-lg tracking-widest transition-colors duration-300"
                >
                  {link.text}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="bg-rose-900 text-white hover:bg-rose-800 px-4 py-2 rounded-lg text-lg tracking-widest transition-colors duration-300"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 border-t border-neutral-800">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-300 hover:text-rose-500 block px-3 py-2 text-base tracking-widest"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="bg-rose-900 text-white hover:bg-rose-800 block px-3 py-2 rounded-lg text-base tracking-widest mt-4"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
