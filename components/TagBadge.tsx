type TagBadgeProps = {
  label: string;
  variant?: "default" | "gold" | "green" | "blue" | "red";
  size?: "sm" | "md";
};

export default function TagBadge({ label, variant = "default", size = "sm" }: TagBadgeProps) {
  const variantClasses = {
    default: "bg-gray-100 text-gray-700",
    gold: "bg-amber-100 text-amber-800",
    green: "bg-emerald-100 text-emerald-800",
    blue: "bg-sky-100 text-sky-800",
    red: "bg-red-100 text-red-700",
  };
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {label}
    </span>
  );
}
