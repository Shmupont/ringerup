import Link from "next/link";

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
      <section className="bg-[#1a3c2b] text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6 text-[#c9a84c] font-medium">
            ⛳ The Golf Scramble Marketplace
          </div>
          <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
            Find your ringer.<br />
            <span className="text-[#c9a84c]">Fill your team.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            RingerUp is the marketplace where scramble teams find skilled golfers — and skilled golfers find their next event. No cold calls. No guesswork. Just great golf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/feed"
              className="bg-[#c9a84c] hover:bg-[#b8943e] text-[#1a3c2b] font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
            >
              Find a Scramble
            </Link>
            <Link
              href="/listings/new"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors border border-white/20"
            >
              Post a Listing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#c9a84c] py-8 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#1a3c2b]">{s.value}</div>
              <div className="text-sm font-medium text-[#1a3c2b]/70 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-3">How It Works</h2>
          <p className="text-center text-gray-500 mb-12">Two sides of the same fairway.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Teams */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="inline-flex items-center gap-2 bg-[#1a3c2b] text-white rounded-full px-4 py-1.5 text-sm font-bold mb-6">
                🏌️ For Teams
              </div>
              <div className="space-y-6">
                {teamSteps.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a3c2b] text-white flex items-center justify-center font-black text-sm">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{s.title}</div>
                      <div className="text-sm text-gray-600 mt-0.5">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/listings/new"
                className="mt-8 inline-block bg-[#1a3c2b] text-white font-bold px-6 py-3 rounded-full hover:bg-[#2d6647] transition-colors"
              >
                Post a Listing →
              </Link>
            </div>
            {/* For Golfers */}
            <div className="bg-[#1a3c2b]/5 rounded-3xl p-8 border border-[#1a3c2b]/10">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#1a3c2b] rounded-full px-4 py-1.5 text-sm font-bold mb-6">
                ⛳ For Golfers
              </div>
              <div className="space-y-6">
                {golferSteps.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#c9a84c] text-[#1a3c2b] flex items-center justify-center font-black text-sm">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{s.title}</div>
                      <div className="text-sm text-gray-600 mt-0.5">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/profile/new"
                className="mt-8 inline-block bg-[#c9a84c] text-[#1a3c2b] font-bold px-6 py-3 rounded-full hover:bg-[#b8943e] transition-colors"
              >
                Create Your Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a3c2b] text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Ready to play?</h2>
          <p className="text-white/70 text-lg mb-8">Whether you need a ringer or you are one, RingerUp has your tee time covered.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/feed"
              className="bg-[#c9a84c] hover:bg-[#b8943e] text-[#1a3c2b] font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Browse Golfers & Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
