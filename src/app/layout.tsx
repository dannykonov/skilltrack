import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SkillTrack AI - Master Any Skill with AI-Powered Learning Paths",
  description: "Tell us your goals, and SkillTrack AI will create a structured roadmap with the best resources and deadlines.",
  keywords: ["AI learning", "skill development", "personalized learning", "learning paths", "education technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
