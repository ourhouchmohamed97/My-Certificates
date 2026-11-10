import { motion } from "framer-motion";
import type { Certificate } from "../types/certificate";
import { CertificateCard } from "./CertificateCard";

interface FeaturedCertificatesProps {
  certificates: Certificate[];
  onOpen: (certificate: Certificate) => void;
  reducedMotion: boolean;
}

export function FeaturedCertificates({ certificates, onOpen, reducedMotion }: FeaturedCertificatesProps) {
  if (certificates.length === 0) return null;

  return (
    <div className="mb-16">
      <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.24em] text-accent">
        Featured
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reducedMotion ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <CertificateCard certificate={cert} onOpen={onOpen} reducedMotion={reducedMotion} size="large" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
