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

// Debug log function to better track events
function logEvent(event: string, data?: any) {
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

    // CRITICAL HANDLER: Process message events to track who's speaking
    // The logs show we need to capture type:"speech-update" messages
    const handleMessage = (message: any) => {
      logEvent("📨 Message received", message);

      // Check for speech updates
      if (message.type === "speech-update") {
        // Assistant started speaking
        if (message.status === "started" && message.role === "assistant") {
          logEvent("🔊 Assistant started speaking");
          setIsAssistantSpeaking(true);
        }

        // Assistant stopped speaking
        else if (message.status === "stopped" && message.role === "assistant") {
          logEvent("🔇 Assistant stopped speaking");
          setIsAssistantSpeaking(false);
        }

        // User started speaking (assistant must be listening)
        else if (message.status === "started" && message.role === "user") {
          logEvent("👤 User started speaking");
          setIsAssistantSpeaking(false);
        }
      }
    };

    // Register standard events
    logEvent("🔄 Registering event handlers");
    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("message", handleMessage);

    return () => {
      // Clean up standard events
      logEvent("♻️ Cleaning up event handlers");
      vapi.off("call-start", handleCallStart);
      vapi.off("call-end", handleCallEnd);
      vapi.off("message", handleMessage);
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
          <h3 className="text-white font-medium">Fuyo's Pizzeria</h3>
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
              <>
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                Cancel
              </>
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
