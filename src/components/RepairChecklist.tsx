"use client";

import { useState } from "react";

interface ChecklistItem {
  id: string;
  label: string;
}

export default function RepairChecklist({
  hasParts,
  hasSafetyWarnings,
}: {
  hasParts: boolean;
  hasSafetyWarnings: boolean;
}) {
  const items: ChecklistItem[] = [
    { id: "tools", label: "Tools gathered" },
    ...(hasSafetyWarnings
      ? [{ id: "safety", label: "Safety precautions read" }]
      : []),
    ...(hasParts
      ? [{ id: "parts", label: "Parts ordered (if needed)" }]
      : []),
    { id: "workspace", label: "Workspace cleared" },
  ];

  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const allChecked = items.every((item) => checked[item.id]);

  return (
    <div className="bg-surface border border-border rounded-xl p-5 mb-8">
      <h2 className="font-bold text-sm mb-3 flex items-center gap-2">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
        Before You Start
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <label className="flex items-center gap-3 cursor-pointer text-sm group">
              <input
                type="checkbox"
                checked={!!checked[item.id]}
                onChange={() => toggle(item.id)}
                className="w-4 h-4 rounded border-border text-primary accent-primary cursor-pointer"
              />
              <span className={checked[item.id] ? "line-through text-muted" : ""}>
                {item.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
      {allChecked && (
        <p className="mt-3 text-sm text-success font-medium">
          All set — you&apos;re ready to start the repair!
        </p>
      )}
    </div>
  );
}
