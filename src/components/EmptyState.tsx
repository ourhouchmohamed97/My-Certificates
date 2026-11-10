import { FileSearch } from "lucide-react";

interface EmptyStateProps {
  onClear: () => void;
}

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-line py-24 text-center">
      <FileSearch className="h-8 w-8 text-ink-faint" strokeWidth={1.3} />
      <p className="mt-5 font-display text-lg text-ink">No certificates found.</p>
      <p className="mt-1.5 text-sm text-ink-muted">Try another search or category.</p>
      <button
        type="button"
        onClick={onClear}
        className="mt-6 rounded-full border border-line-strong px-5 py-2 text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-canvas"
      >
        Clear filters
      </button>
    </div>
  );
}
