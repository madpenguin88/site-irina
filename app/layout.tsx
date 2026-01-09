import type { Metadata } from "next";
import { Open_Sans, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

// Open Sans - Regular sans-serif font
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// The Seasons - Using Playfair Display as elegant serif alternative
const theSeasons = Playfair_Display({
  variable: "--font-the-seasons",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Beautifully Delicious Script - Using Dancing Script as elegant script alternative
const beautifullyDelicious = Playfair_Display({
  variable: "--font-beautifully-delicious",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ava - Transformă-ți Viziunea",
  description: "Coaching și mentorat pentru antreprenori și creatori de conținut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${openSans.variable} ${theSeasons.variable} ${beautifullyDelicious.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
