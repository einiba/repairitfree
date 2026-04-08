export default function StepImagePlaceholder({
  stepNumber,
  description,
}: {
  stepNumber: number;
  description: string;
}) {
  return (
    <div
      className="mt-3 bg-surface border border-dashed border-border rounded-lg p-4 flex items-center gap-3 text-sm text-muted"
      role="img"
      aria-label={description}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 shrink-0 text-border">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span>Photo: {description}</span>
    </div>
  );
}
