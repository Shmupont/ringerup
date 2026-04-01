type StarRatingProps = {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
};

export default function StarRating({ rating, max = 5, size = "md" }: StarRatingProps) {
  const sizeClass = { sm: "text-sm", md: "text-base", lg: "text-xl" }[size];
  return (
    <span className={`inline-flex items-center gap-0.5 ${sizeClass}`} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <span key={i} className={filled ? "text-amber-400" : partial ? "text-amber-300" : "text-gray-300"}>
            ★
          </span>
        );
      })}
    </span>
  );
}
