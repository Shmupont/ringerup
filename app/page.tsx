import Link from "next/link";
import { Flag, Users, Target, ArrowRight, ChevronDown } from "lucide-react";

export default function HomePage() {
  const stats = [
    { value: "1,200+", label: "Skilled Golfers" },
    { value: "340", label: "Listings Posted" },
    { value: "890", label: "Bookings Made" },
  ];

  const teamSteps = [
    { step: "01", title: "Post Your Event", desc: "Tell us about your scramble — course, date, format, and what kind of golfer you need." },
    { step: "02", title: "Browse Matched Golfers", desc: "See golfers near you ranked by handicap, specialties, and reviews from past teammates." },
    { step: "03", title: "Book Your Ringer", desc: "Send an invite directly. Confirm details and show up ready to win." },
  ];

  const golferSteps = [
    { step: "01", title: "Create Your Profile", desc: "Showcase your handicap, skill ratings, specialty tags, and scramble resume." },
    { step: "02", title: "Browse Open Events", desc: "Filter by location, date, format, and vibe. Find events that match your game." },
    { step: "03", title: "Join a Team", desc: "Apply with one click. Get confirmed and play. Build your reputation with reviews." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1800&q=80"
            alt="Golf course"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a3c2b]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2b] via-transparent to-transparent opacity-60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8 text-[#c9a84c] font-medium tracking-wide uppercase">
            <Flag size={14} /> The Golf Scramble Marketplace
          </div>
          <h1 className="text-7xl sm:text-9xl font-black leading-none mb-6 tracking-wide" style={{fontFamily: "var(--font-bebas)"}}>
            FIND YOUR<br />
            <span className="text-[#c9a84c]">RINGER.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            The marketplace where scramble teams find the players they need — and skilled golfers find their next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/feed" className="bg-[#c9a84c] hover:bg-[#b8943e] text-[#1a3c2b] font-bold px-10 py-4 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              Find a Scramble
            </Link>
            <Link href="/listings/new" className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold px-10 py-4 rounded-full text-lg transition-all border border-white/30">
              Post a Listing
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 text-xs">
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#c9a84c] py-10 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8 divide-x divide-[#1a3c2b]/20">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4">
              <div className="text-4xl sm:text-5xl text-[#1a3c2b]" style={{fontFamily: "var(--font-bebas)"}}>{s.value}</div>
              <div className="text-sm font-semibold text-[#1a3c2b]/60 mt-1 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-light text-gray-800 leading-relaxed">
            {"Golf is the last sport where "}
            <span className="font-bold text-[#1a3c2b]">the right teammate changes everything.</span>
            {" We built the marketplace that fixes the broken, word-of-mouth way scramble teams find players."}
          </p>
          <div className="mt-8 w-16 h-1 bg-[#c9a84c] mx-auto rounded-full" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl text-[#1a3c2b] mb-4" style={{fontFamily: "var(--font-bebas)"}}>HOW IT WORKS</h2>
            <p className="text-gray-500 text-lg">Two sides. One tee box.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For Teams */}
            <div className="bg-[#1a3c2b] text-white rounded-3xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center">
                  <Users size={18} className="text-[#1a3c2b]" />
                </div>
                <span className="text-[#c9a84c] font-bold uppercase tracking-widest text-sm">For Teams</span>
              </div>
              <div className="space-y-8">
                {teamSteps.map((s) => (
                  <div key={s.step} className="flex gap-5">
                    <div className="flex-shrink-0 text-5xl font-black text-white/10 leading-none" style={{fontFamily: "var(--font-bebas)"}}>{s.step}</div>
                    <div className="pt-1">
                      <div className="font-bold text-white text-lg">{s.title}</div>
                      <div className="text-white/60 text-sm mt-1 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/listings/new" className="mt-10 inline-flex items-center gap-2 bg-[#c9a84c] text-[#1a3c2b] font-bold px-6 py-3 rounded-full hover:bg-[#b8943e] transition-colors">
                Post a Listing <ArrowRight size={16} />
              </Link>
            </div>

            {/* For Golfers */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#1a3c2b] flex items-center justify-center">
                  <Target size={18} className="text-white" />
                </div>
                <span className="text-[#1a3c2b] font-bold uppercase tracking-widest text-sm">For Golfers</span>
              </div>
              <div className="space-y-8">
                {golferSteps.map((s) => (
                  <div key={s.step} className="flex gap-5">
                    <div className="flex-shrink-0 text-5xl font-black text-gray-100 leading-none" style={{fontFamily: "var(--font-bebas)"}}>{s.step}</div>
                    <div className="pt-1">
                      <div className="font-bold text-gray-900 text-lg">{s.title}</div>
                      <div className="text-gray-500 text-sm mt-1 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/profile/new" className="mt-10 inline-flex items-center gap-2 bg-[#1a3c2b] text-white font-bold px-6 py-3 rounded-full hover:bg-[#2d6647] transition-colors">
                Create Your Profile <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a3c2b] py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)", backgroundSize: "30px 30px"}} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-7xl text-white mb-6" style={{fontFamily: "var(--font-bebas)"}}>READY TO PLAY?</h2>
          <p className="text-white/60 text-xl mb-10 font-light">Whether you need a ringer or you are one — your next round starts here.</p>
          <Link href="/feed" className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#b8943e] text-[#1a3c2b] font-bold px-10 py-5 rounded-full text-xl transition-all shadow-2xl hover:-translate-y-0.5">
            Browse Golfers & Events <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
