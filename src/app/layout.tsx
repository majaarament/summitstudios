// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// ✅ add these
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://summitstudios.ai"),
  title: {
    default: "Summit Studios — amplifying human capabilities",
    template: "%s — Summit Studios",
  },
  description:
    "Summit Studios blends social science and technology to build intelligent agents that turn complex data into clear, measurable action.",
  keywords: [
    "AI agents",
    "compliance automation",
    "CSRD",
    "RAG",
    "workflow automation",
    "sustainability analytics",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://summitstudios.ai",
    title: "Summit Studios — amplifying human capabilities",
    description:
      "From one agent to an ecosystem: practical AI that moves metrics.",
    siteName: "Summit Studios",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Summit Studios" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Studios — amplifying human capabilities",
    description:
      "From one agent to an ecosystem: practical AI that moves metrics.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* remove this line if you don't want analytics */}
        <Analytics />
      </body>
    </html>
  );
}
