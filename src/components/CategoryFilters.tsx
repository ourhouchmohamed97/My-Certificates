import { cn } from "../lib/utils";

interface CategoryFiltersProps {
  categories: { name: string; count: number }[];
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilters({ categories, active, onChange }: CategoryFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter certificates by category"
      className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
    >
      {categories.map(({ name, count }) => {
        const isActive = name === active;
        return (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(name)}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-sans text-[0.83rem] transition-all duration-200",
              isActive
                ? "border-ink bg-ink text-canvas"
                : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
            )}
          >
            <span>{name}</span>
            <span
              className={cn(
                "font-mono text-[0.7rem] tabular-nums",
                isActive ? "text-canvas/70" : "text-ink-faint"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
