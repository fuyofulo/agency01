import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import VoiceAgentWidgetWrapper from "@/components/voice-call/VoiceAgentWidgetWrapper";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400", // VT323 only has one weight
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Aloria Labs",
  description: "Aloria Labs",
  icons: {
    icon: [],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={vt323.className}>
        {children}
        <VoiceAgentWidgetWrapper />
        <Script
          id="voiceflow-chatbot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '67f8efe443820aff1d9b2d31' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    }
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </body>
    </html>
  );
}
