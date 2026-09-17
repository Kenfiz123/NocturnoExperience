import type { Metadata, Viewport } from "next";
import { Cinzel, Shippori_Mincho, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-japanese",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "NOCTURNO — Interactive Cinematic Manga Experience",
  description: "A cinematic supernatural horror manga editorial experience. Some things only awaken in the night.",
  keywords: ["cinematic manga", "japanese horror", "nocturno", "interactive story", "manga editorial"],
  authors: [{ name: "NOCTURNO Editorial" }],
  openGraph: {
    title: "NOCTURNO — Interactive Cinematic Manga Experience",
    description: "A cinematic supernatural horror manga editorial experience. Some things only awaken in the night.",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${shipporiMincho.variable} ${inter.variable} ${spaceMono.variable} antialiased selection:bg-[#B50016] selection:text-[#F6F3EA]`}
    >
      <body className="min-h-screen bg-[#050505] text-[#EDE9DF] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
