const icons: Record<string, React.ReactNode> = {
  screwdriver: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14.7 3.3a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4l-3.5 3.5-6-6 3.5-3.5Z" />
      <path d="M11.2 6.8 3.7 14.3a2 2 0 0 0 0 2.8l3.2 3.2a2 2 0 0 0 2.8 0l7.5-7.5" />
      <line x1="9" y1="15" x2="6" y2="18" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.5 7.5L6.5 20.5a2.1 2.1 0 0 1-3-3L11 10a6 6 0 0 1 7.5-7.5L14.7 6.3Z" />
    </svg>
  ),
  pliers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M8 2l4 4-4 4" />
      <path d="M16 2l-4 4 4 4" />
      <path d="M12 6v4" />
      <path d="M8 14l-4 8" />
      <path d="M16 14l4 8" />
      <path d="M8 14h8" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  multimeter: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="9" r="3" />
      <path d="M10.5 7.5l3 3" />
      <line x1="9" y1="16" x2="9" y2="16.01" />
      <line x1="12" y1="16" x2="12" y2="16.01" />
      <line x1="15" y1="16" x2="15" y2="16.01" />
      <line x1="9" y1="19" x2="9" y2="19.01" />
      <line x1="12" y1="19" x2="12" y2="19.01" />
      <line x1="15" y1="19" x2="15" y2="19.01" />
    </svg>
  ),
  bucket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M6 6h12l-1.5 14H7.5L6 6Z" />
      <path d="M4 6h16" />
      <path d="M9 6V4a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.5 7.5L6.5 20.5a2.1 2.1 0 0 1-3-3L11 10a6 6 0 0 1 7.5-7.5L14.7 6.3Z" />
    </svg>
  ),
};

function matchToolIcon(toolName: string): React.ReactNode {
  const lower = toolName.toLowerCase();
  if (lower.includes("screwdriver") || lower.includes("phillips") || lower.includes("flathead"))
    return icons.screwdriver;
  if (lower.includes("wrench") || lower.includes("socket") || lower.includes("ratchet"))
    return icons.wrench;
  if (lower.includes("plier") || lower.includes("needle-nose") || lower.includes("needle nose"))
    return icons.pliers;
  if (lower.includes("multimeter") || lower.includes("voltmeter") || lower.includes("ohm"))
    return icons.multimeter;
  if (lower.includes("towel") || lower.includes("bucket") || lower.includes("rag") || lower.includes("cloth"))
    return icons.bucket;
  return icons.default;
}

export default function ToolIcon({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-lg text-sm" title={name}>
      <span className="text-primary shrink-0">{matchToolIcon(name)}</span>
      <span>{name}</span>
    </span>
  );
}
