import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RingerUp — Find Your Ringer. Fill Your Team.",
  description: "The two-sided marketplace connecting skilled golfers with scramble teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-50 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#1a3c2b] text-white/60 text-sm py-8 px-6 text-center">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-black text-white text-base">⛳ Ringer<span className="text-[#c9a84c]">Up</span></span>
            <span>© 2026 RingerUp. Connecting golfers and teams nationwide.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
