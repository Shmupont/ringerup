import Image from "next/image";
import Link from "next/link";
import { listings } from "@/lib/data/listings";
import { golfers } from "@/lib/data/golfers";
import GolferCard from "@/components/GolferCard";
import TagBadge from "@/components/TagBadge";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function vibeVariant(vibe: string): "green" | "gold" | "blue" {
  if (vibe === "Competitive") return "green";
  if (vibe === "Fun but trying") return "gold";
  return "blue";
}

export default async function ListingDetailPage(props: PageProps<'/listings/[id]'>) {
  const { id } = await props.params;
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-4xl mb-4">⛳</p>
        <h1 className="text-2xl font-black text-gray-900 mb-2">Listing not found</h1>
        <p className="text-gray-500 mb-6">This event may have ended or been removed.</p>
        <Link href="/feed" className="text-[#1a3c2b] font-semibold hover:underline">← Back to feed</Link>
      </div>
    );
  }

  const suggestedGolfers = listing.suggestedGolferIds
    .map((gid) => golfers.find((g) => g.id === gid))
    .filter(Boolean) as typeof golfers;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Link href="/feed" className="text-sm text-[#1a3c2b] hover:underline mb-6 inline-block">← Back to Feed</Link>

      {/* Header Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="h-2 bg-gradient-to-r from-[#1a3c2b] to-[#c9a84c]" />
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TagBadge label={listing.eventType} variant="default" />
                <TagBadge label={listing.vibes} variant={vibeVariant(listing.vibes)} />
              </div>
              <h1 className="text-3xl font-black text-gray-900">{listing.eventName}</h1>
              <p className="text-gray-500 mt-1 text-lg">📍 {listing.courseName} · {listing.courseLocation}</p>
            </div>
            <div className="text-center flex-shrink-0 bg-[#1a3c2b]/5 rounded-2xl p-4">
              <div className="text-2xl font-black text-[#1a3c2b]">{listing.openSpots}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Spots Open</div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Date & Time</div>
              <div className="font-bold text-gray-900 text-sm">{formatDate(listing.date)}</div>
              <div className="text-sm text-gray-600">{listing.time}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Format</div>
              <div className="font-bold text-gray-900 text-sm">{listing.format}</div>
              <div className="text-sm text-gray-600">Team of {listing.teamSize}</div>
            </div>
            <div className={`rounded-xl p-3 ${listing.entryFeeCovered ? "bg-emerald-50" : "bg-gray-50"}`}>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Entry Fee</div>
              <div className={`font-bold text-sm ${listing.entryFeeCovered ? "text-emerald-700" : "text-gray-900"}`}>
                {listing.entryFeeCovered ? "✓ Covered" : "Not covered"}
              </div>
              {listing.entryFeeAmount && (
                <div className="text-sm text-gray-600">${listing.entryFeeAmount} value</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* What they're looking for */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-black text-gray-900 mb-4">What We&apos;re Looking For</h2>
          <div className="mb-4">
            <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Skill Tags</div>
            <div className="flex flex-wrap gap-2">
              {listing.lookingForTags.map((tag) => (
                <TagBadge key={tag} label={tag} variant="green" size="md" />
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Max Handicap</div>
            <div className="text-3xl font-black text-[#1a3c2b]">{listing.preferredHandicapMax}</div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-black text-gray-900 mb-4">Additional Details</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{listing.additionalDetails}</p>
        </div>
      </div>

      {/* Captain Info */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="font-black text-gray-900 mb-4">Meet the Captain</h2>
        <div className="flex items-start gap-4">
          <Image
            src={listing.captain.avatar}
            alt={listing.captain.name}
            width={64}
            height={64}
            className="rounded-full object-cover flex-shrink-0"
          />
          <div>
            <div className="font-bold text-gray-900 text-lg">{listing.captain.name}</div>
            <p className="text-sm text-gray-600 mt-1">{listing.captain.bio}</p>
          </div>
        </div>
      </div>

      {/* Suggested Golfers */}
      {suggestedGolfers.length > 0 && (
        <div className="mb-6">
          <h2 className="font-black text-gray-900 mb-4">Suggested Golfers for This Event</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {suggestedGolfers.map((golfer) => (
              <GolferCard key={golfer.id} golfer={golfer} />
            ))}
          </div>
        </div>
      )}

      {/* Apply CTA */}
      <div className="bg-[#1a3c2b] rounded-2xl p-6 text-white text-center">
        <h3 className="font-black text-xl mb-2">Ready to join {listing.eventName}?</h3>
        <p className="text-white/70 text-sm mb-4">Spots are going fast. Apply now and the captain will be in touch.</p>
        <button className="bg-[#c9a84c] hover:bg-[#b8943e] text-[#1a3c2b] font-bold px-8 py-3 rounded-full transition-colors">
          Apply to Join
        </button>
      </div>
    </div>
  );
}
