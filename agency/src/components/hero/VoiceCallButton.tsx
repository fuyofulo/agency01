"use client";

import { startVapiAssistant } from "@/functions/Vapi";
import { LucideIcon } from "lucide-react";

interface ServiceButtonProps {
  icon: LucideIcon;
  label: string;
}

const VoiceCallButton = ({ icon: Icon, label }: ServiceButtonProps) => {
  return (
    <div
      className="flex items-center gap-2 bg-rose-900 hover:bg-rose-800 transition text-white px-6 py-3 rounded-lg cursor-pointer"
      onClick={startVapiAssistant}
    >
      <Icon className="w-5 h-5" />
      {label}
    </div>
  );
};

export default VoiceCallButton;
