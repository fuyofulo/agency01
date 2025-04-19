"use client";

import dynamic from "next/dynamic";

// Dynamically import the VoiceCallUI to avoid SSR issues
const VoiceCallUI = dynamic(
  () => import("@/components/voice-call/VoiceCallUI"),
  { ssr: false }
);

export default function VoiceCallUIWrapper() {
  return <VoiceCallUI />;
}
