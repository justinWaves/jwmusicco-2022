import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "JW Music Company",
  description:
    "Recording, production, mixing, scoring, and music education — a premium creative studio for artists and storytellers.",
  openGraph: {
    title: "JW Music Company",
    description:
      "Recording, production, mixing, scoring, and music education.",
    siteName: "JW Music Company",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="noise min-h-screen bg-smoke-950 text-[#f5f0eb] antialiased">
        {children}
      </body>
    </html>
  );
}
