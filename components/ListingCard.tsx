import Link from "next/link";
import TagBadge from "./TagBadge";
import type { Listing } from "@/lib/data/listings";

type ListingCardProps = {
  listing: Listing;
};

function vibeVariant(vibe: Listing["vibes"]): "green" | "gold" | "blue" {
  if (vibe === "Competitive") return "green";
  if (vibe === "Fun but trying") return "gold";
  return "blue";
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-1.5 bg-gradient-to-r from-[#1a3c2b] to-[#c9a84c]" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-gray-900 text-base leading-tight">{listing.eventName}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{listing.courseName} · {listing.courseLocation}</p>
          </div>
          <TagBadge label={listing.vibes} variant={vibeVariant(listing.vibes)} size="sm" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm">
          <span className="text-gray-500">📅 {formatDate(listing.date)} at {listing.time}</span>
          <span className="text-gray-500">⛳ {listing.format}</span>
          <span className="text-gray-700 font-medium">
            {listing.openSpots} spot{listing.openSpots !== 1 ? "s" : ""} open
          </span>
          <span className={listing.entryFeeCovered ? "text-emerald-600 font-medium" : "text-gray-500"}>
            {listing.entryFeeCovered ? `✓ Entry covered${listing.entryFeeAmount ? ` ($${listing.entryFeeAmount})` : ""}` : "Entry not covered"}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {listing.lookingForTags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} label={tag} variant="default" />
          ))}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-gray-50 bg-gray-50">
        <Link
          href={`/listings/${listing.id}`}
          className="block w-full text-center text-sm font-semibold text-[#1a3c2b] hover:text-[#c9a84c] transition-colors py-1"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
