import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/80 backdrop-blur-md">
      <div className="container-editorial flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-[1.05rem] tracking-tight text-ink"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line-strong text-[0.65rem] font-sans font-semibold tracking-widest text-accent">
            MO
          </span>
          <span className="hidden sm:inline">Certificate Collection</span>
        </a>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="group flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
        >
          {theme === "dark" ? (
            <Sun className="h-[17px] w-[17px]" strokeWidth={1.6} />
          ) : (
            <Moon className="h-[17px] w-[17px]" strokeWidth={1.6} />
          )}
        </button>
      </div>
    </header>
  );
}
