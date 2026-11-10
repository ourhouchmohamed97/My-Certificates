export type CertificateCategory =
  | "AI & Machine Learning"
  | "Web Development"
  | "Software Development"
  | "DevOps"
  | "Cloud"
  | "Cybersecurity"
  | "Data"
  | "Other";

export interface Certificate {
  /** Unique, URL-safe identifier. Also used for deep links (/#id). */
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  /** ISO date ("2026-05-12"), or just a year ("2025") if the exact date is unknown */
  date: string;
  year: number;
  /** Path to a preview image, relative to /public, e.g. "/certificates/foo.png" */
  image: string;
  /** Optional path to the full certificate PDF */
  pdf?: string;
  description?: string;
  skills?: string[];
  credentialId?: string;
  verificationUrl?: string;
  /** Featured certificates appear in the highlighted row at the top */
  featured?: boolean;
}
