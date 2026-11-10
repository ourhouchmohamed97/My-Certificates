import { motion } from "framer-motion";
import type { Certificate } from "../types/certificate";
import { CertificateCard } from "./CertificateCard";

interface CertificateGridProps {
  certificates: Certificate[];
  onOpen: (certificate: Certificate) => void;
  reducedMotion: boolean;
}

export function CertificateGrid({ certificates, onOpen, reducedMotion }: CertificateGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {certificates.map((cert, i) => (
        <motion.div
          key={cert.id}
          layout={!reducedMotion}
          initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: 8 }}
          transition={{ duration: 0.45, delay: reducedMotion ? 0 : Math.min(i, 6) * 0.035, ease: [0.16, 1, 0.3, 1] }}
        >
          <CertificateCard certificate={cert} onOpen={onOpen} reducedMotion={reducedMotion} />
        </motion.div>
      ))}
    </div>
  );
}
