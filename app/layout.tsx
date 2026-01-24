import type { Metadata } from "next";
import { Open_Sans, Cormorant_Garamond, Great_Vibes, Cinzel } from "next/font/google";
import "./globals.css";

// Open Sans - Regular sans-serif font
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// The Seasons - Using Cormorant Garamond as elegant serif
const theSeasons = Cormorant_Garamond({
  variable: "--font-the-seasons",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Handwriting Style - Using Great Vibes for elegant handwritten look
const handwritingFont = Great_Vibes({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Cinzel - Elegant serif font for quotes
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irina Gospodaru - Psihoterapeut Adlerian",
  description: "Psiholog clinician și psihoterapeut cu orientare adleriană. Psihoterapie individuală, de cuplu și familie. Cabinet în București.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${openSans.variable} ${theSeasons.variable} ${handwritingFont.variable} ${cinzel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
