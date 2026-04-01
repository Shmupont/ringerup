import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#1a3c2b] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
          <span className="text-[#c9a84c]">⛳</span>
          <span>Ringer<span className="text-[#c9a84c]">Up</span></span>
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
