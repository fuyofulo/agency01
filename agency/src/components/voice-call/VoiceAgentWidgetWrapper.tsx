"use client";

import dynamic from "next/dynamic";

// Dynamically import the voice agent widget to avoid SSR issues
const VoiceAgentWidget = dynamic(
  () => import("@/components/voice-call/VoiceAgentWidget"),
  { ssr: false }
);

export default function VoiceAgentWidgetWrapper() {
  return <VoiceAgentWidget />;
}
