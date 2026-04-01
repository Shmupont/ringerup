'use client';

import { useState } from "react";
import Link from "next/link";

const FORMATS = ["Captain's Choice", "Best Ball", "Texas Scramble", "Modified Stringer"];
const VIBES = ["Competitive", "Fun but trying", "Social"];
const EVENT_TYPES = ["Charity", "Corporate", "Club", "Casual"];
const LOOKING_FOR_OPTIONS = [
  "Low Handicap", "Long Driver", "Iron Specialist", "Short Game Wizard",
  "Clutch Putter", "Course Manager", "Scramble Veteran", "Fun Teammate",
  "Team Player", "All-Around Player",
];

export default function NewListingPage() {
  const [lookingFor, setLookingFor] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleTag(tag: string) {
    setLookingFor((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">Listing Posted!</h2>
        <p className="text-gray-500 mb-6">Your scramble event has been submitted. Golfers in your area will be able to find and apply.</p>
        <Link href="/feed" className="bg-[#1a3c2b] text-white font-bold px-6 py-3 rounded-full hover:bg-[#2d6647] transition-colors">
          Browse Golfers →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Link href="/feed" className="text-sm text-[#1a3c2b] hover:underline mb-6 inline-block">← Back to Feed</Link>
      <h1 className="text-3xl font-black text-gray-900 mb-2">Post a Scramble Listing</h1>
      <p className="text-gray-500 mb-8">Tell us about your event and what kind of golfer you need.</p>

      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        className="space-y-6"
      >
        {/* Event Info */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-4 text-lg">Event Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Event Name *</label>
              <input type="text" required placeholder="e.g. Annual Charity Scramble" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b] focus:border-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Event Type</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]">
                  {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Format</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]">
                  {FORMATS.map((f) => <option key={f}>{f}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Course Name *</label>
              <input type="text" required placeholder="e.g. TPC Scottsdale" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b] focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Course Location</label>
              <input type="text" placeholder="City, State" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b] focus:border-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Date *</label>
                <input type="date" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Tee Time</label>
                <input type="time" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Details */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-4 text-lg">Team Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Team Size</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]">
                  <option>2</option><option>3</option><option selected>4</option><option>5</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Open Spots</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]">
                  <option>1</option><option>2</option><option>3</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Team Vibe</label>
              <div className="flex gap-3">
                {VIBES.map((v) => (
                  <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="vibe" value={v} defaultChecked={v === "Fun but trying"} className="accent-[#1a3c2b]" />
                    {v}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Max Handicap Preferred</label>
              <input type="number" min="0" max="36" placeholder="e.g. 8" className="w-32 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
            </div>
          </div>
        </section>

        {/* What You're Looking For */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-4 text-lg">What You&apos;re Looking For</h2>
          <div className="flex flex-wrap gap-2">
            {LOOKING_FOR_OPTIONS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  lookingFor.includes(tag)
                    ? "bg-[#1a3c2b] text-white border-[#1a3c2b]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#1a3c2b]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Entry Fee */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-4 text-lg">Entry Fee</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="accent-[#1a3c2b] w-4 h-4" />
              <span className="text-sm font-medium text-gray-700">Entry fee is covered for the ringer</span>
            </label>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Entry Fee Amount (if known)</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">$</span>
                <input type="number" placeholder="0" min="0" className="w-28 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Details */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-4 text-lg">Additional Details</h2>
          <textarea
            rows={4}
            placeholder="Tell golfers more about the event, the team culture, what's at stake, post-round plans, etc."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b] resize-none"
          />
        </section>

        <button
          type="submit"
          className="w-full bg-[#1a3c2b] hover:bg-[#2d6647] text-white font-bold py-4 rounded-2xl text-lg transition-colors shadow-sm"
        >
          Post Listing →
        </button>
      </form>
    </div>
  );
}
