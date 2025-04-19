"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCalendly } from "@/components/providers/CalendlyProvider";

interface NavLink {
  text: string;
  href: string;
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCalendlyModal } = useCalendly();
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (isHomePage && href.startsWith("#")) {
      // If we're on the homepage and it's a hash link, scroll to the section
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar height
          behavior: "smooth",
        });
      }
    } else if (href.startsWith("#")) {
      // If it's a hash link but we're not on the homepage, navigate to homepage with hash
      router.push(`/${href}`);
    } else {
      // For regular links
      router.push(href);
    }
  };

  const navLinks: NavLink[] = [
    { text: "Home", href: isHomePage ? "#home" : "/" },
    { text: "Services", href: isHomePage ? "#services" : "/#services" },
    { text: "Process", href: isHomePage ? "#process" : "/#process" },
    // { text: "Testimonials", href: isHomePage ? "#testimonials" : "/#testimonials" },
    { text: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-rose-500 text-3xl tracking-widest">
              Aloria Labs
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className="text-gray-300 hover:text-rose-500 px-3 py-2 text-lg tracking-widest transition-colors duration-300"
                >
                  {link.text}
                </a>
              ))}
              <button
                onClick={openCalendlyModal}
                className="bg-rose-900 text-white hover:bg-rose-800 px-4 py-2 rounded-lg text-lg tracking-widest transition-colors duration-300"
              >
                Book a Call
              </button>
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
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-gray-300 hover:text-rose-500 block px-3 py-2 text-base tracking-widest"
              >
                {link.text}
              </a>
            ))}
            <button
              onClick={openCalendlyModal}
              className="bg-rose-900 text-white hover:bg-rose-800 block w-full text-left px-3 py-2 rounded-lg text-base tracking-widest mt-4"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
