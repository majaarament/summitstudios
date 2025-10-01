// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";

const SITE_URL = "https://summitstudios.ai";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""; // e.g., G-XXXXXXX

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Summit Studios",
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        {/* Global navigation */}
        <Header />

        {children}

        {/* Google Analytics (GA4) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        {/* Organization JSON-LD */}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Summit Studios",
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            sameAs: [],
            description:
              "Summit Studios blends social science and technology to build intelligent agents that turn complex data into clear, measurable action.",
          })}
        </Script>
      </body>
    </html>
  );
}
