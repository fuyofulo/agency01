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
  name: "Vapi's Pizza Front Desk",
  firstMessage: "Vappy's Pizzeria speaking, how can I help you?",
  transcriber: {
    provider: "deepgram" as const,
    model: "nova-2",
    language: "en-US" as const,
  },
  voice: {
    provider: "playht" as const,
    voiceId: "jennifer",
  },
  model: {
    provider: "openai" as const,
    model: "gpt-4" as const,
    messages: [
      {
        role: "system" as const,
        content: `You are a voice assistant for Vappy's Pizzeria, a pizza shop located on the Internet.

  Your job is to take the order of customers calling in. The menu has only 3 types
  of items: pizza, sides, and drinks. There are no other types of items on the menu.

  1) There are 3 kinds of pizza: cheese pizza, pepperoni pizza, and vegetarian pizza
  (often called "veggie" pizza).
  2) There are 3 kinds of sides: french fries, garlic bread, and chicken wings.
  3) There are 2 kinds of drinks: soda, and water. (if a customer asks for a
  brand name like "coca cola", just let them know that we only offer "soda")

  Customers can only order 1 of each item. If a customer tries to order more
  than 1 item within each category, politely inform them that only 1 item per
  category may be ordered.

  Customers must order 1 item from at least 1 category to have a complete order.
  They can order just a pizza, or just a side, or just a drink.

  Be sure to introduce the menu items, don't assume that the caller knows what
  is on the menu (most appropriate at the start of the conversation).

  If the customer goes off-topic or off-track and talks about anything but the
  process of ordering, politely steer the conversation back to collecting their order.

  Once you have all the information you need pertaining to their order, you can
  end the conversation. You can say something like "Awesome, we'll have that ready
  for you in 10-20 minutes." to naturally let the customer know the order has been
  fully communicated.

  It is important that you collect the order in an efficient manner (succinct replies
  & direct questions). You only have 1 task here, and it is to collect the customers
  order, then end the conversation.

  - Be sure to be kind of funny and witty!
  - Keep all your responses short and simple. Use casual language, phrases like "Umm...", "Well...", and "I mean" are preferred.
  - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
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
