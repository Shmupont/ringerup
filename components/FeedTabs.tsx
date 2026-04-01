'use client';

import { useState } from "react";
import GolferCard from "./GolferCard";
import ListingCard from "./ListingCard";
import type { Golfer } from "@/lib/data/golfers";
import type { Listing } from "@/lib/data/listings";

type FeedTabsProps = {
  golfers: Golfer[];
  listings: Listing[];
};

export default function FeedTabs({ golfers, listings }: FeedTabsProps) {
  const [activeTab, setActiveTab] = useState<"scrambles" | "golfers">("scrambles");

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-6 max-w-sm">
        <button
          onClick={() => setActiveTab("scrambles")}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "scrambles"
              ? "bg-[#1a3c2b] text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          🏌️ Scrambles Near You
        </button>
        <button
          onClick={() => setActiveTab("golfers")}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "golfers"
              ? "bg-[#1a3c2b] text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          ⛳ Available Golfers
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "scrambles" && (
        <div>
          <p className="text-sm text-gray-500 mb-4">{listings.length} upcoming events near you</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "golfers" && (
        <div>
          <p className="text-sm text-gray-500 mb-4">{golfers.length} golfers available in your area</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {golfers.map((golfer) => (
              <GolferCard key={golfer.id} golfer={golfer} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
