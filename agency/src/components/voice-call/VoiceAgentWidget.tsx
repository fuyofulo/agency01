"use client";

import { Mic } from "lucide-react";
import { startVapiAssistant } from "@/functions/Vapi";
import { useState } from "react";

export default function VoiceAgentWidget() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-5 left-6 z-40">
      <button
        onClick={startVapiAssistant}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center text-white rounded-full w-12 h-12 shadow-lg transition-all duration-300 hover:scale-105"
        style={{ backgroundColor: isHovered ? "#A50036" : "#FF0054" }}
        title="Start Voice Call"
      >
        <Mic className="w-6 h-6" />
      </button>
    </div>
  );
}
