'use client';

import { useState } from "react";
import Link from "next/link";
import InteractiveStarRating from "@/components/InteractiveStarRating";

const SPECIALTY_OPTIONS = [
  "Long Driver", "Iron Specialist", "Short Game Wizard", "Clutch Putter",
  "Course Manager", "Scramble Veteran", "Fun Teammate", "All-Around Player",
  "Sandscape Specialist", "Fairway Finder", "Links Player", "Competitive Edge",
  "Low Pressure", "Cheerleader", "Weekend Warrior",
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function NewProfilePage() {
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleSpecialty(tag: string) {
    setSpecialties((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function toggleDay(day: string) {
    setAvailability((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <div className="text-5xl mb-4">⛳</div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">Profile Created!</h2>
        <p className="text-gray-500 mb-6">Your golfer profile is live. Teams in your area can now invite you to their scrambles.</p>
        <Link href="/feed" className="bg-[#1a3c2b] text-white font-bold px-6 py-3 rounded-full hover:bg-[#2d6647] transition-colors">
          Browse Events →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Link href="/" className="text-sm text-[#1a3c2b] hover:underline mb-6 inline-block">← Back</Link>
      <h1 className="text-3xl font-black text-gray-900 mb-2">Create Your Golfer Profile</h1>
      <p className="text-gray-500 mb-8">Showcase your game and get invited to scrambles near you.</p>

      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        className="space-y-6"
      >
        {/* Basic Info */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-4 text-lg">Basic Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                <input type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                <input type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
              <input type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Location (City, State) *</label>
              <input type="text" required placeholder="e.g. Scottsdale, AZ" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Home Course</label>
              <input type="text" placeholder="e.g. TPC Scottsdale" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Bio / Tagline</label>
              <textarea rows={3} placeholder="Tell teams about yourself, your game, and what you bring to a scramble..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b] resize-none" />
            </div>
          </div>
        </section>

        {/* Golf Details */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-4 text-lg">Golf Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Handicap Index *</label>
                <input type="number" required min="0" max="54" step="0.1" placeholder="e.g. 4.2" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">GHIN Number</label>
                <input type="text" placeholder="Optional — for verification" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Travel Radius (miles)</label>
              <input type="number" min="5" max="500" placeholder="50" className="w-32 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Rate / Compensation Description</label>
              <input type="text" placeholder="e.g. Entry fee covered + travel within 50 miles" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c2b]" />
            </div>
          </div>
        </section>

        {/* Skill Ratings */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-1 text-lg">Skill Self-Rating</h2>
          <p className="text-sm text-gray-400 mb-5">Rate yourself honestly — teams will book based on this.</p>
          <div className="space-y-4">
            <InteractiveStarRating name="driving" label="Driving Distance & Accuracy" />
            <InteractiveStarRating name="irons" label="Iron Play" />
            <InteractiveStarRating name="shortGame" label="Short Game (chipping/pitching)" />
            <InteractiveStarRating name="putting" label="Putting" />
            <InteractiveStarRating name="courseManagement" label="Course Management" />
          </div>
        </section>

        {/* Specialty Tags */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-1 text-lg">Specialty Tags</h2>
          <p className="text-sm text-gray-400 mb-4">Select up to 5 tags that best describe your game.</p>
          <div className="flex flex-wrap gap-2">
            {SPECIALTY_OPTIONS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleSpecialty(tag)}
                disabled={!specialties.includes(tag) && specialties.length >= 5}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  specialties.includes(tag)
                    ? "bg-[#1a3c2b] text-white border-[#1a3c2b]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#1a3c2b] disabled:opacity-40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          {specialties.length > 0 && (
            <p className="text-xs text-gray-400 mt-2">{specialties.length}/5 selected</p>
          )}
        </section>

        {/* Availability */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-900 mb-1 text-lg">Weekly Availability</h2>
          <p className="text-sm text-gray-400 mb-4">Which days are you generally available to play?</p>
          <div className="flex gap-2 flex-wrap">
            {DAYS.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`w-12 h-12 rounded-full text-sm font-bold border-2 transition-all ${
                  availability.includes(day)
                    ? "bg-[#1a3c2b] text-white border-[#1a3c2b]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#1a3c2b]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-[#c9a84c] hover:bg-[#b8943e] text-[#1a3c2b] font-bold py-4 rounded-2xl text-lg transition-colors shadow-sm"
        >
          Create My Profile →
        </button>
      </form>
    </div>
  );
}
