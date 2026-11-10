import { ArrowUpDown } from "lucide-react";

export type SortOption = "newest" | "oldest" | "alphabetical" | "issuer";

const OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "alphabetical", label: "Alphabetical" },
  { value: "issuer", label: "Issuer" },
];

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="relative">
      <label htmlFor="sort" className="sr-only">
        Sort certificates
      </label>
      <ArrowUpDown
        className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-faint"
        strokeWidth={1.6}
      />
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none rounded-full border border-line bg-surface py-2.5 pl-9 pr-8 text-sm text-ink transition-colors focus:border-line-strong focus:outline-none"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
