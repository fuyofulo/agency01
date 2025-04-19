"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Only mount on client side
  useEffect(() => {
    setIsMounted(true);

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  if (!isMounted) return null;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center bg-black">
          <h2 className="text-xl text-white tracking-widest">
            Schedule a Discovery Call
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors rounded-full p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Calendly embed */}
        <div className="flex-grow w-full">
          <iframe
            src="https://calendly.com/fuyofulo/discovery-call"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a call with Calendly"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
