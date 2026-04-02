import Link from "next/link";
import Image from "next/image";
import { MapPin, CheckCircle } from "lucide-react";
import StarRating from "./StarRating";
import TagBadge from "./TagBadge";
import type { Golfer } from "@/lib/data/golfers";

type GolferCardProps = {
  golfer: Golfer;
};

export default function GolferCard({ golfer }: GolferCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow hover:-translate-y-1 transition-transform">
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <Image
              src={golfer.photo}
              alt={golfer.name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
            {golfer.ghinVerified && (
              <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center" title="GHIN Verified">
                <CheckCircle size={12} />
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-bold text-gray-900 text-lg leading-tight truncate" style={{fontFamily: "var(--font-bebas)"}}>{golfer.name}</h3>
              <div className="flex-shrink-0 text-right">
                <div className="text-3xl font-black text-[#1a3c2b] leading-none">{golfer.handicap}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">HCP</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <StarRating rating={golfer.rating} size="sm" />
              <span className="text-xs text-gray-500">{golfer.rating} ({golfer.reviewCount})</span>
            </div>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <MapPin size={11} />{golfer.location} · {golfer.travelRadius}mi radius
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {golfer.specialtyTags.slice(0, 3).map((tag) => (
            <TagBadge key={tag} label={tag} variant="green" />
          ))}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-gray-50 bg-gray-50">
        <Link
          href={`/golfers/${golfer.id}`}
          className="block w-full text-center text-sm font-semibold text-[#1a3c2b] hover:text-[#c9a84c] transition-colors py-1"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
