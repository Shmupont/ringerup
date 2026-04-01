import { golfers } from "@/lib/data/golfers";
import { listings } from "@/lib/data/listings";
import FeedTabs from "@/components/FeedTabs";

export default function FeedPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900">Explore</h1>
        <p className="text-gray-500 mt-1">Find your next scramble or the ringer your team needs.</p>
      </div>
      <FeedTabs golfers={golfers} listings={listings} />
    </div>
  );
}
