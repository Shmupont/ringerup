'use client';

import { useState } from "react";

type InteractiveStarRatingProps = {
  name: string;
  label: string;
  defaultValue?: number;
};

export default function InteractiveStarRating({ name, label, defaultValue = 0 }: InteractiveStarRatingProps) {
  const [value, setValue] = useState(defaultValue);
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-700">{label}</span>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setValue(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className={`text-2xl transition-colors ${
              star <= (hovered || value) ? "text-amber-400" : "text-gray-300"
            } hover:scale-110 transition-transform`}
            aria-label={`${star} star`}
          >
            ★
          </button>
        ))}
        <input type="hidden" name={name} value={value} />
      </div>
    </div>
  );
}
