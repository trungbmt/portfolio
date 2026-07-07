import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pham Duc Trung — Full-stack developer",
  description:
    "Full-stack developer in Ho Chi Minh City. I like building the whole feature — from the database to the UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${hankenGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        {children}
        <Script
          src="https://cdn.li2.ai/99c77832_f1f24eb488e15653a7f706fe276dfe53"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
