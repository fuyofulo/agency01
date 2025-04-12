"use client";

import { X, Mic, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import vapi from "@/functions/Vapi";

// Global callback for showing modal
let showModalCallback: ((show: boolean) => void) | null = null;

export function showVapiModal() {
  if (showModalCallback) {
    showModalCallback(true);
  }
}

// Define types for message events
interface SpeechUpdateEvent {
  type: string;
  status: string;
  role: string;
  turn?: number;
}

// Debug log function to better track events
function logEvent(event: string, data?: unknown) {
  const timestamp = new Date().toISOString().substr(11, 12);
  console.log(`${timestamp} [VoiceCallUI] ${event}`, data || "");
}

export default function VoiceCallUI() {
  // Simple state variables
  const [isVisible, setIsVisible] = useState(false);
  const [isConnecting, setIsConnecting] = useState(true);
  const [isAssistantSpeaking, setIsAssistantSpeaking] = useState(false);

  // Setup event handlers
  useEffect(() => {
    // Register the callback
    showModalCallback = setIsVisible;
    logEvent("📱 Component mounted, setting up Vapi events");

    // Call started - connection established
    const handleCallStart = () => {
      logEvent("📞 Call started");
      setIsConnecting(false);
    };

    // Call ended
    const handleCallEnd = () => {
      logEvent("📵 Call ended");
      setIsVisible(false);
      setIsConnecting(true);
      setIsAssistantSpeaking(false);
    };

    // CRITICAL HANDLER: This is the primary way to track speaking status
    const handleSpeechUpdate = (update: SpeechUpdateEvent) => {
      logEvent("🎤 Speech update", update);

      // When assistant starts speaking
      if (update.status === "started" && update.role === "assistant") {
        logEvent("🔊 Assistant started speaking");
        setIsAssistantSpeaking(true);
      }

      // When assistant stops speaking
      else if (update.status === "stopped" && update.role === "assistant") {
        logEvent("🔇 Assistant stopped speaking");
        setIsAssistantSpeaking(false);
      }

      // When user starts speaking (ensure assistant is shown as not speaking)
      else if (update.status === "started" && update.role === "user") {
        logEvent("👤 User started speaking");
        setIsAssistantSpeaking(false);
      }
    };

    // Register standard events
    logEvent("🔄 Registering event handlers");
    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("message", handleSpeechUpdate);

    return () => {
      // Clean up standard events
      logEvent("♻️ Cleaning up event handlers");
      vapi.off("call-start", handleCallStart);
      vapi.off("call-end", handleCallEnd);
      vapi.off("message", handleSpeechUpdate);
    };
  }, []);

  // Function to end call
  const endCall = () => {
    logEvent("🛑 Ending call");
    vapi.stop();
  };

  // Don't render if not visible
  if (!isVisible) return null;

  // Determine text and icon to display
  let statusText = "Connecting...";
  let icon = (
    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
  );

  if (!isConnecting) {
    if (isAssistantSpeaking) {
      statusText = "Assistant is speaking...";
      icon = <Volume2 className="w-4 h-4 mr-2 text-rose-400 animate-pulse" />;
    } else {
      statusText = "Assistant is listening...";
      icon = <Mic className="w-4 h-4 mr-2 text-blue-400 animate-pulse" />;
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gray-900 rounded-lg shadow-xl border border-rose-800 w-64 overflow-hidden">
        {/* Header */}
        <div className="bg-rose-900 p-3 flex justify-between items-center">
          <h3 className="text-white font-medium">Vappy&apos;s Pizzeria</h3>
          <button onClick={endCall} className="text-gray-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status */}
        <div className="p-4">
          {/* Status indicator */}
          <div className="bg-gray-800 p-3 rounded-lg mb-4 flex items-center justify-center">
            {icon}
            <span className="text-gray-300">{statusText}</span>
          </div>

          {/* End call button */}
          <button
            onClick={endCall}
            className="w-full py-2 px-4 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
          >
            {isConnecting ? (
              <>Cancel</>
            ) : (
              <>
                <X className="w-4 h-4 mr-2" />
                End Call
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
