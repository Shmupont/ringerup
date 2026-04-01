import Image from "next/image";
import Link from "next/link";
import { golfers } from "@/lib/data/golfers";
import StarRating from "@/components/StarRating";
import TagBadge from "@/components/TagBadge";
import SkillBar from "@/components/SkillBar";

export default async function GolferProfilePage(props: PageProps<'/golfers/[id]'>) {
  const { id } = await props.params;
  const golfer = golfers.find((g) => g.id === id);

  if (!golfer) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-4xl mb-4">⛳</p>
        <h1 className="text-2xl font-black text-gray-900 mb-2">Golfer not found</h1>
        <p className="text-gray-500 mb-6">This player may have left the course.</p>
        <Link href="/feed" className="text-[#1a3c2b] font-semibold hover:underline">← Back to feed</Link>
      </div>
    );
  }

  const skillLabels: Record<string, string> = {
    driving: "Driving",
    irons: "Irons",
    shortGame: "Short Game",
    putting: "Putting",
    courseManagement: "Course Mgmt",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Back */}
      <Link href="/feed" className="text-sm text-[#1a3c2b] hover:underline mb-6 inline-block">← Back to Feed</Link>

      {/* Hero Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="h-2 bg-gradient-to-r from-[#1a3c2b] to-[#c9a84c]" />
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative flex-shrink-0">
              <Image
                src={golfer.photo}
                alt={golfer.name}
                width={120}
                height={120}
                className="rounded-2xl object-cover"
              />
              {golfer.ghinVerified && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs rounded-full px-2 py-0.5 font-bold whitespace-nowrap">
                  ✓ GHIN Verified
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black text-gray-900">{golfer.name}</h1>
                  <p className="text-gray-500 mt-0.5">📍 {golfer.location} · {golfer.homeClub}</p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-6xl font-black text-[#1a3c2b] leading-none">{golfer.handicap}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Handicap</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <StarRating rating={golfer.rating} size="md" />
                <span className="text-sm font-semibold text-gray-800">{golfer.rating}</span>
                <span className="text-sm text-gray-500">({golfer.reviewCount} reviews)</span>
              </div>
              <p className="text-gray-600 mt-3 leading-relaxed">{golfer.bio}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {golfer.specialtyTags.map((tag) => (
                  <TagBadge key={tag} label={tag} variant="green" size="md" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-black text-gray-900 mb-4">Skill Ratings</h2>
          <div className="space-y-3">
            {Object.entries(golfer.skills).map(([key, val]) => (
              <SkillBar key={key} label={skillLabels[key] ?? key} value={val} />
            ))}
          </div>
        </div>

        {/* Scramble Resume */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-black text-gray-900 mb-4">Scramble Resume</h2>
          <div className="mb-4">
            <div className="text-4xl font-black text-[#1a3c2b]">{golfer.scrambleResume.eventsPlayed}</div>
            <div className="text-sm text-gray-500">Events Played</div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Notable Finishes</div>
            <ul className="space-y-1.5">
              {golfer.scrambleResume.notableFinishes.map((finish, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#c9a84c] mt-0.5">🏆</span>
                  {finish}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">Rate</div>
            <p className="text-sm text-gray-600">{golfer.rateDescription}</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">Travel Radius</div>
            <p className="text-sm text-gray-600">{golfer.travelRadius} miles from {golfer.location}</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="font-black text-gray-900 mb-4">Reviews ({golfer.reviewCount})</h2>
        <div className="space-y-4">
          {golfer.reviews.map((review) => (
            <div key={review.id} className="pb-4 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-gray-900 text-sm">{review.author}</span>
                <span className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              </div>
              <StarRating rating={review.rating} size="sm" />
              <p className="text-sm text-gray-600 mt-1">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1a3c2b] rounded-2xl p-6 text-white text-center">
        <h3 className="font-black text-xl mb-2">Ready to bring {golfer.name.split(" ")[0]} on your team?</h3>
        <p className="text-white/70 text-sm mb-4">Send an invite and lock in your ringer before someone else does.</p>
        <button className="bg-[#c9a84c] hover:bg-[#b8943e] text-[#1a3c2b] font-bold px-8 py-3 rounded-full transition-colors">
          Send Invite
        </button>
      </div>
    </div>
  );
}
