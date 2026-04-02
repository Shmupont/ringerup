import Link from "next/link";

const WordmarkSVG = () => (
  <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
    <text x="0" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="30" fill="white" letterSpacing="-1">RINGER</text>
    <text x="104" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="30" fill="#c9a84c" letterSpacing="-1">UP</text>
    <line x1="154" y1="4" x2="154" y2="28" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round"/>
    <polygon points="154,4 164,9 154,14" fill="#c9a84c"/>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="bg-[#1a3c2b] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <WordmarkSVG />
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/feed" className="text-sm text-white/80 hover:text-white transition-colors px-2 py-1">
            Browse
          </Link>
          <Link
            href="/listings/new"
            className="text-sm bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full"
          >
            Post Listing
          </Link>
          <Link
            href="/profile/new"
            className="text-sm bg-[#c9a84c] hover:bg-[#b8943e] text-[#1a3c2b] font-semibold transition-colors px-3 py-1.5 rounded-full"
          >
            Join as Golfer
          </Link>
        </div>
      </div>
    </nav>
  );
}
