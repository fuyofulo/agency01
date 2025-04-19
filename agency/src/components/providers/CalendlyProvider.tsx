"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import CalendlyModal from "../modals/CalendlyModal";

// Create the context
interface CalendlyContextType {
  openCalendlyModal: () => void;
  closeCalendlyModal: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(
  undefined
);

// Hook for components to use the Calendly context
export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
};

// Provider component
export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCalendlyModal = () => setIsModalOpen(true);
  const closeCalendlyModal = () => setIsModalOpen(false);

  return (
    <CalendlyContext.Provider value={{ openCalendlyModal, closeCalendlyModal }}>
      {children}
      <CalendlyModal isOpen={isModalOpen} onClose={closeCalendlyModal} />
    </CalendlyContext.Provider>
  );
}
