import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  total: number;
  categories: number;
  issuers: number;
  reducedMotion: boolean;
}

export function Hero({ total, categories, issuers, reducedMotion }: HeroProps) {
  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="container-editorial">
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.28em] text-accent"
        >
          My Certificate Collection
        </motion.p>

        <motion.h1
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-[2.6rem] font-light leading-[1.08] tracking-tight text-ink sm:text-[3.6rem]"
        >
          Proof of what I've learned.
        </motion.h1>

        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted"
        >
          A curated collection of certifications, courses, and achievements across AI,
          software development, web, cybersecurity, and more.
        </motion.p>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-ink-faint"
        >
          <span className="text-ink">{total} Certificates</span>
          <span aria-hidden="true">·</span>
          <span className="text-ink">{categories} Categories</span>
          <span aria-hidden="true">·</span>
          <span className="text-ink">{issuers} Issuers</span>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToCollection}
        initial={reducedMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        aria-label="Scroll to the collection"
        className="group mx-auto mt-20 flex w-fit flex-col items-center gap-2 text-ink-faint transition-colors hover:text-accent sm:mt-24"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]">View collection</span>
        <ArrowDown
          className={reducedMotion ? "h-4 w-4" : "h-4 w-4 animate-bounce"}
          strokeWidth={1.5}
        />
      </motion.button>
    </section>
  );
}
