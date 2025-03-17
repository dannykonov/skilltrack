import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageViewTracker from '../components/PageViewTracker';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <PageViewTracker />
        {children}
      </body>
    </html>
  );
}
