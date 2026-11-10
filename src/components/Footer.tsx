import { Mail } from "lucide-react";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.7 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11v5M8 8v.01M12 16v-3.5a1.5 1.5 0 0 1 3 0V16m0 0v-3.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-editorial flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-sm text-ink-muted">Mohamed Ourhouch Certificate Collection</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ourhouchmohamed97"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ourhouch-616799293/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:ourhouchmohamed97@gmail.com"
            aria-label="Email"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Mail className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </footer>
  );
}
