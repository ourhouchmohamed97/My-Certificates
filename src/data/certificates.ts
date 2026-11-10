import type { Certificate } from "../types/certificate";

/**
 * ============================================================
 *  YOUR CERTIFICATES
 * ============================================================
 * To add a certificate:
 *   1. Drop the PNG (and PDF, if you have one) into
 *      /public/certificates/
 *   2. Add one object below.
 * Stats, category filters, search, and sorting update
 * themselves. Featured ones show first, in the order listed.
 *
 * `date` can be "YYYY-MM-DD" or just "YYYY" if the exact day
 * isn't known. Add `verificationUrl` whenever you have one.
 * ============================================================
 */
export const certificates: Certificate[] = [
  // ───────────── Featured ─────────────
  {
    id: "harvard-cs50x",
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    category: "Software Development",
    date: "2025",
    year: 2025,
    image: "/certificates/harvard-cs50x.png",
    description:
      "Harvard's introduction to computer science and programming, completed with ten problem sets and a final project.",
    skills: ["Computer Science", "C", "Algorithms", "Data Structures"],
    verificationUrl:
      "https://cs50.harvard.edu/certificates/f0b2ea32-d6e5-43ba-90fd-69c0981d96da",
    featured: true,
  },
  {
    id: "hackerrank-software-engineer",
    title: "Software Engineer",
    issuer: "HackerRank",
    category: "Software Development",
    date: "2025-11-27",
    year: 2025,
    image: "/certificates/hackerrank-software-engineer.png",
    pdf: "/certificates/hackerrank-software-engineer.pdf",
    description:
      "Passed the HackerRank role certification test for software engineers.",
    skills: ["Problem Solving", "Data Structures", "Algorithms"],
    credentialId: "51A79FEE4DBD",
    featured: true,
  },
  {
    id: "hackerrank-frontend-developer-react",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    category: "Web Development",
    date: "2025-11-26",
    year: 2025,
    image: "/certificates/hackerrank-frontend-developer-react.png",
    pdf: "/certificates/hackerrank-frontend-developer-react.pdf",
    description:
      "Passed the HackerRank role certification test for frontend developers working with React.",
    skills: ["React", "JavaScript", "Frontend Development"],
    credentialId: "717C3B625209",
    featured: true,
  },
  {
    id: "cisco-ethical-hacker",
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
    date: "2025-11-25",
    year: 2025,
    image: "/certificates/cisco-ethical-hacker.png",
    pdf: "/certificates/cisco-ethical-hacker.pdf",
    description:
      "Cisco Networking Academy course on ethical hacking and penetration testing fundamentals.",
    skills: ["Ethical Hacking", "Penetration Testing", "Network Security"],
    featured: true,
  },

  // ───────────── AI & Machine Learning ─────────────
  {
    id: "introduction-to-ai-agents",
    title: "Introduction to AI Agents",
    issuer: "DataCamp",
    category: "AI & Machine Learning",
    date: "2026-08-26",
    year: 2026,
    image: "/certificates/introduction-to-ai-agents.png",
    pdf: "/certificates/introduction-to-ai-agents.pdf",
    description:
      "1 hr 30 min DataCamp course introducing AI agents and how they plan and act.",
    skills: ["AI Agents", "LLMs"],
    credentialId: "49500978",
  },
  {
    id: "llmops-concepts",
    title: "LLMOps Concepts",
    issuer: "DataCamp",
    category: "AI & Machine Learning",
    date: "2026-08-26",
    year: 2026,
    image: "/certificates/llmops-concepts.png",
    pdf: "/certificates/llmops-concepts.pdf",
    description:
      "1 hr DataCamp course on the concepts behind deploying and operating LLM applications.",
    skills: ["LLMOps", "LLMs", "Deployment"],
    credentialId: "48208702",
  },
  {
    id: "understanding-prompt-engineering",
    title: "Understanding Prompt Engineering",
    issuer: "DataCamp",
    category: "AI & Machine Learning",
    date: "2026-06-07",
    year: 2026,
    image: "/certificates/understanding-prompt-engineering.png",
    pdf: "/certificates/understanding-prompt-engineering.pdf",
    description:
      "1 hr DataCamp course on how prompts shape LLM output and how to write effective ones.",
    skills: ["Prompt Engineering", "LLMs"],
    credentialId: "48140979",
  },
  {
    id: "ai-ethics",
    title: "AI Ethics",
    issuer: "DataCamp",
    category: "AI & Machine Learning",
    date: "2026-06-04",
    year: 2026,
    image: "/certificates/ai-ethics.png",
    pdf: "/certificates/ai-ethics.pdf",
    description:
      "1 hr DataCamp course on the foundations of responsible and ethical AI.",
    skills: ["AI Ethics", "Responsible AI"],
    credentialId: "48140978",
  },

  // ───────────── Software Development ─────────────
  {
    id: "ai-assisted-coding-for-developers",
    title: "AI-Assisted Coding for Developers",
    issuer: "DataCamp",
    category: "Software Development",
    date: "2026-08-26",
    year: 2026,
    image: "/certificates/ai-assisted-coding-for-developers.png",
    pdf: "/certificates/ai-assisted-coding-for-developers.pdf",
    description:
      "1 hr 30 min DataCamp course on using AI assistants to write, review, and debug code.",
    skills: ["AI-Assisted Coding", "Developer Productivity"],
    credentialId: "48247273",
  },
  {
    id: "claude-code-101",
    title: "Claude Code 101",
    issuer: "DataCamp",
    category: "Software Development",
    date: "2026-06-06",
    year: 2026,
    image: "/certificates/claude-code-101.png",
    pdf: "/certificates/claude-code-101.pdf",
    description:
      "3 hr DataCamp course introducing Claude Code, an agentic coding tool for the command line.",
    skills: ["Claude Code", "AI-Assisted Coding", "CLI"],
    credentialId: "48140976",
  },
  {
    id: "intermediate-git",
    title: "Intermediate Git",
    issuer: "DataCamp",
    category: "Software Development",
    date: "2026-08-29",
    year: 2026,
    image: "/certificates/intermediate-git.png",
    pdf: "/certificates/intermediate-git.pdf",
    description:
      "2 hr DataCamp course on intermediate Git workflows beyond the basics.",
    skills: ["Git", "Version Control"],
    credentialId: "49582467",
  },
  {
    id: "introduction-to-git",
    title: "Introduction to Git",
    issuer: "DataCamp",
    category: "Software Development",
    date: "2026-08-29",
    year: 2026,
    image: "/certificates/introduction-to-git.png",
    pdf: "/certificates/introduction-to-git.pdf",
    description:
      "2 hr DataCamp course on version control fundamentals with Git.",
    skills: ["Git", "Version Control"],
    credentialId: "49582454",
  },

  // ───────────── Data ─────────────
  {
    id: "introduction-to-sql",
    title: "Introduction to SQL",
    issuer: "DataCamp",
    category: "Data",
    date: "2026-08-27",
    year: 2026,
    image: "/certificates/introduction-to-sql.png",
    pdf: "/certificates/introduction-to-sql.pdf",
    description:
      "2 hr DataCamp course on querying relational databases with SQL.",
    skills: ["SQL", "Databases"],
    credentialId: "48138971",
  },
];
