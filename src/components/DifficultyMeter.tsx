type Difficulty = "Easy" | "Medium" | "Hard";

const config: Record<Difficulty, { label: string; bars: number; color: string; bgColor: string }> = {
  Easy: { label: "Easy", bars: 1, color: "bg-success", bgColor: "text-success" },
  Medium: { label: "Medium", bars: 2, color: "bg-warning", bgColor: "text-warning" },
  Hard: { label: "Hard", bars: 3, color: "bg-danger", bgColor: "text-danger" },
};

export default function DifficultyMeter({ difficulty }: { difficulty: Difficulty }) {
  const { label, bars, color, bgColor } = config[difficulty];

  return (
    <span className="inline-flex items-center gap-2">
      <span className={`text-sm font-semibold ${bgColor}`}>{label}</span>
      <span className="flex gap-0.5" aria-label={`Difficulty: ${label}, ${bars} out of 3`}>
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`w-5 h-2.5 rounded-sm ${n <= bars ? color : "bg-border"}`}
          />
        ))}
      </span>
    </span>
  );
}
