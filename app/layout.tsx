import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { Noto_Sans_Bengali } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const noto = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IELTS by Munzereen",
  description: "IELTS by Munzereen is a comprehensive platform offering courses, resources, and community support for IELTS preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${noto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
