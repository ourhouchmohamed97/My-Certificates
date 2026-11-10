import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, FileText } from "lucide-react";
import type { Certificate } from "../types/certificate";
import { formatDate } from "../lib/utils";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
  reducedMotion: boolean;
}

export function CertificateModal({ certificate, onClose, reducedMotion }: CertificateModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!certificate) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-line bg-surface-raised shadow-2xl sm:max-h-[85vh] sm:rounded-2xl"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close certificate details"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-raised text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.8} />
            </button>

            <div className="grid grow grid-cols-1 overflow-y-auto sm:grid-cols-5">
              <div className="flex items-center justify-center bg-[#efeae0] p-6 dark:bg-[#0b0a08] sm:col-span-3 sm:p-10">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate, full preview`}
                  className="max-h-[50vh] w-full object-contain sm:max-h-[65vh]"
                />
              </div>

              <div className="flex flex-col gap-5 border-t border-line p-6 sm:col-span-2 sm:border-l sm:border-t-0 sm:p-8">
                <div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
                    {certificate.category}
                  </span>
                  <h2
                    id="certificate-modal-title"
                    className="mt-2 font-display text-2xl font-normal leading-snug text-ink"
                  >
                    {certificate.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted">
                    {certificate.issuer} · {formatDate(certificate.date)}
                  </p>
                </div>

                {certificate.description && (
                  <p className="text-sm leading-relaxed text-ink-muted">{certificate.description}</p>
                )}

                {certificate.skills && certificate.skills.length > 0 && (
                  <div>
                    <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {certificate.credentialId && (
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
                      Credential ID
                    </p>
                    <p className="mt-1 font-mono text-sm text-ink">{certificate.credentialId}</p>
                  </div>
                )}

                <div className="mt-auto flex flex-col gap-2.5 pt-2">
                  <a
                    href={certificate.pdf ?? certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm text-canvas transition-opacity hover:opacity-90"
                  >
                    <FileText className="h-3.5 w-3.5" strokeWidth={1.8} />
                    View Full Certificate
                  </a>
                  {certificate.verificationUrl && (
                    <a
                      href={certificate.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-sm text-ink transition-colors hover:border-ink"
                    >
                      Verify Credential
                      <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
