import { forwardRef } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(function SearchBar(
  { value, onChange },
  ref
) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
        strokeWidth={1.6}
      />
      <input
        ref={ref}
        id="certificate-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search certificates…"
        aria-label="Search certificates by title, issuer, category, or skill"
        className="w-full rounded-full border border-line bg-surface py-2.5 pl-10 pr-16 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-line-strong focus:outline-none"
      />
      {value ? (
        <button
          type="button"
          onClick={() => {
            onChange("");
            document.getElementById("certificate-search")?.focus();
          }}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-ink-faint transition-colors hover:text-ink"
        >
          <X className="h-3.5 w-3.5" strokeWidth={1.8} />
        </button>
      ) : (
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-line px-1.5 py-0.5 font-mono text-[0.65rem] text-ink-faint">
          /
        </kbd>
      )}
    </div>
  );
});
