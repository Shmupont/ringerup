import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RingerUp — Find Your Ringer. Fill Your Team.",
  description: "The two-sided marketplace connecting skilled golfers with scramble teams.",
};

const WordmarkSVG = () => (
  <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
    <text x="0" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="30" fill="white" letterSpacing="-1">RINGER</text>
    <text x="104" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="30" fill="#c9a84c" letterSpacing="-1">UP</text>
    <line x1="154" y1="4" x2="154" y2="28" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
    <polygon points="154,4 164,9 154,14" fill="#c9a84c"/>
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-50 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#0f2419] text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-8 border-b border-white/10">
              <div>
                <WordmarkSVG />
                <p className="text-white/40 text-sm mt-3 max-w-xs">The two-sided marketplace for scramble golf. Find ringers. Fill teams. Play great golf.</p>
              </div>
              <div className="flex gap-12">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">Platform</div>
                  <div className="flex flex-col gap-3 text-sm text-white/70">
                    <Link href="/feed" className="hover:text-white transition-colors">Browse</Link>
                    <Link href="/listings/new" className="hover:text-white transition-colors">Post a Listing</Link>
                    <Link href="/profile/new" className="hover:text-white transition-colors">Create Profile</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 text-white/30 text-sm flex flex-col sm:flex-row justify-between gap-2">
              <span>© 2026 RingerUp. All rights reserved.</span>
              <span>Built for the scramble golfer.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
