"use client";
import Vapi from "@vapi-ai/web";
import dynamic from "next/dynamic";

// Dynamically import the VoiceCallUI to avoid SSR issues
const VoiceCallUI = dynamic(
  () => import("@/components/voice-call/VoiceCallUI"),
  { ssr: false }
);

// Get API key from environment variables
const API_KEY = process.env.NEXT_PUBLIC_VAPI_API_KEY;

// Create Vapi instance with API key from environment variable
const vapi = new Vapi(API_KEY || "");

export const assistantOptions = {
  name: "Agent Fuuyo",
  firstMessage: "Hello! Agent Fuuyo here—how can I help you today?",
  transcriber: {
    provider: "deepgram" as const,
    model: "nova-2" as const,
    language: "en-US" as const,
  },
  voice: {
    provider: "playht" as const,
    voiceId: "jennifer" as const,
  },
  model: {
    provider: "openai" as const,
    model: "gpt-4" as const,
    messages: [
      {
        role: "system" as const,
        content: `
        You are Agent Fuyo, the friendly voice assistant for our business automation agency. Your job is to:

        1. **Open with Business Discovery:**
          - Start each call by asking about the caller's business. For example:
            "Thanks for calling our agency. Can you tell me about your business and the main challenges you're facing?"

        2. **Explain Core Services & Delivery Methods:**
          - **Automated Appointment Booking:**
            • **AI Voice Agent:** Manages incoming calls, understands natural speech, books appointments by voice, and sends reminders.
            • **Intelligent Assistant (Chatbot):** Handles online scheduling via chat, captures visitor details, and sends reminders.

          - **Lead Capture & Qualification:**
            • **AI Voice Agent:** Contacts existing leads, follows up, qualifies them, and routes prospects to sales.
            • **Intelligent Assistant:** Engages website visitors, captures and qualifies leads in real time using your data.

          - **Lead Generation:**
            • **AI Voice Agent:** Outbound calling campaigns to new prospects with conversational scripts.
            • **Intelligent Assistant:** Proactively engages site visitors and social media traffic to gather new lead info.

          - **CRM Integration & Workflow Automation:**
            • **AI Voice Agent:** Updates CRM with call outcomes, schedules follow-ups, and triggers reminders.
            • **Intelligent Assistant:** Syncs chat interactions to CRM and automates tasks based on lead behavior.

        3. **Maintain a Concise, Engaging Tone:**
          - Keep responses to 1-2 short sentences. Use friendly, conversational language with natural fillers (e.g., "um," "well").

        4. **Drive to Booking Path:**
          - You cannot schedule appointments on the call. Always direct callers to book via our website's Schedule page:
            "To book your appointment, please visit our website and click 'Schedule.'"
          - For deeper questions, suggest scheduling:
            "That's a great question—please visit our Schedule page to book a time so we can dive into details."

        5. **Fallback & Steering:**
          - If callers go off-topic, politely steer back:
            "Let's focus on booking your appointment—please visit our website and click 'Schedule' now."

        Your aim is to discover the caller's needs, inform them about our solutions, and guide them to book through the Schedule page.`
      },
    ],
  },
};


export const startVapiAssistant = () => {
  console.log("Starting Vapi Assistant");

  if (!API_KEY) {
    console.error("Error: Vapi API key not found in environment variables");
    alert(
      "Missing API key. Please add NEXT_PUBLIC_VAPI_API_KEY to your .env file."
    );
    return;
  }

  try {
    // Show the modal immediately with connecting status
    showVapiModal();

    // Then start the call
    vapi.start(assistantOptions);
  } catch (error) {
    console.error("Error starting Vapi Assistant:", error);
    alert("Failed to start the voice assistant. Please check your API key.");
  }
};

// Import the showVapiModal function from VoiceCallUI
import { showVapiModal } from "@/components/voice-call/VoiceCallUI";

// Add the UI component to make it available anywhere
export const VapiUI = VoiceCallUI;

export default vapi;
