import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RepairItFree — Free AI-Powered Repair Guides",
    template: "%s | RepairItFree",
  },
  description:
    "Free step-by-step repair guides for electronics and appliances. AI-powered diagnostics, parts lists, and cost estimates. Fix it yourself and save money.",
  keywords: [
    "repair guide",
    "fix appliance",
    "DIY repair",
    "error code",
    "free repair help",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://analytics.repairitfree.com/script.js"
          data-website-id="REPLACE_WITH_UMAMI_WEBSITE_ID"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
