type SkillBarProps = {
  label: string;
  value: number;
  max?: number;
};

export default function SkillBar({ label, value, max = 5 }: SkillBarProps) {
  const percent = (value / max) * 100;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 w-36 flex-shrink-0">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-[#1a3c2b] to-[#c9a84c] h-2 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex gap-0.5 flex-shrink-0">
        {Array.from({ length: max }).map((_, i) => (
          <span key={i} className={i < value ? "text-amber-400" : "text-gray-200"}>★</span>
        ))}
      </div>
    </div>
  );
}
