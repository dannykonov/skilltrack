import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import PageViewTracker from '../components/PageViewTracker';

// Font for headings - modern, geometric, conveys precision and intelligence
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

// Font for body text - highly readable, clean, supports learning
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Learn With AI - Master Any Skill with a Clear Learning Strategy",
  description: "Learn With AI creates a personalized, step-by-step roadmap that shows you exactly HOW to learn efficiently and effectively.",
  keywords: ["AI learning", "skill development", "personalized learning", "learning paths", "education technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon-ai-learning.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className={`${outfit.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
