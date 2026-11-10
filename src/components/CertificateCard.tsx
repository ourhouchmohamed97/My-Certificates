import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Certificate } from "../types/certificate";
import { formatShortDate } from "../lib/utils";
import { cn } from "../lib/utils";

interface CertificateCardProps {
  certificate: Certificate;
  onOpen: (certificate: Certificate) => void;
  reducedMotion: boolean;
  size?: "default" | "large";
}

export function CertificateCard({
  certificate,
  onOpen,
  reducedMotion,
  size = "default",
}: CertificateCardProps) {
  return (
    <motion.button
      type="button"
      layout={!reducedMotion}
      onClick={() => onOpen(certificate)}
      className="group block w-full text-left"
      aria-label={`View details for ${certificate.title}, issued by ${certificate.issuer}`}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-line bg-[#efeae0] dark:bg-[#0b0a08]",
          size === "large" ? "aspect-[4/3]" : "aspect-[4/3]"
        )}
      >
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate preview`}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        />

        <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="ml-auto flex items-center gap-1 rounded-full bg-ink/90 px-3 py-1.5 font-sans text-[0.72rem] text-canvas backdrop-blur-sm">
            View certificate
            <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-1.5">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
          {certificate.category}
        </span>
        <h3
          className={cn(
            "font-display font-normal leading-snug text-ink",
            size === "large" ? "text-xl" : "text-[1.05rem]"
          )}
        >
          {certificate.title}
        </h3>
        <p className="text-sm text-ink-muted">
          {certificate.issuer} · {formatShortDate(certificate.date)}
        </p>
      </div>
    </motion.button>
  );
}
