import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll"; 
import Header from "../components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lunaris",
  description: "Minimal, smooth, high-conversion studio site.",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <SmoothScroll>
          <Header />
          {children}
          <footer className="border-t border-white/10 py-12">
            <div className="container mx-auto px-6 text-sm text-white/60">
              © {new Date().getFullYear()} SummitStudio. All rights reserved.
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
