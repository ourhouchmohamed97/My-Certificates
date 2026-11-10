import { useEffect, useMemo, useRef, useState } from "react";
import { certificates } from "./data/certificates";
import type { Certificate } from "./types/certificate";
import { useTheme } from "./hooks/useTheme";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CollectionStats } from "./components/CollectionStats";
import { CategoryFilters } from "./components/CategoryFilters";
import { SearchBar } from "./components/SearchBar";
import { SortSelect, type SortOption } from "./components/SortSelect";
import { FeaturedCertificates } from "./components/FeaturedCertificates";
import { CertificateGrid } from "./components/CertificateGrid";
import { EmptyState } from "./components/EmptyState";
import { CertificateModal } from "./components/CertificateModal";
import { Footer } from "./components/Footer";

const ALL = "All";

function App() {
  const { theme, toggleTheme } = useTheme();
  const reducedMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("newest");
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  const searchRef = useRef<HTMLInputElement>(null);

  // Dynamic stats
  const stats = useMemo(() => {
    const categorySet = new Set(certificates.map((c) => c.category));
    const issuerSet = new Set(certificates.map((c) => c.issuer));
    const latestYear = certificates.reduce((max, c) => Math.max(max, c.year), 0);
    return {
      total: certificates.length,
      categories: categorySet.size,
      issuers: issuerSet.size,
      latestYear,
    };
  }, []);

  // Category list with dynamic counts
  const categoryList = useMemo(() => {
    const counts = new Map<string, number>();
    for (const c of certificates) counts.set(c.category, (counts.get(c.category) ?? 0) + 1);
    const byCount = [...counts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
    return [{ name: ALL, count: certificates.length }, ...byCount];
  }, []);

  // Filtering + search + sort
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let result = certificates.filter((c) => {
      const matchesCategory = activeCategory === ALL || c.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [
        c.title,
        c.issuer,
        c.category,
        c.description ?? "",
        String(c.year),
        ...(c.skills ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "newest":
          return b.date.localeCompare(a.date);
        case "oldest":
          return a.date.localeCompare(b.date);
        case "alphabetical":
          return a.title.localeCompare(b.title);
        case "issuer":
          return a.issuer.localeCompare(b.issuer);
        default:
          return 0;
      }
    });

    return result;
  }, [activeCategory, query, sort]);

  const featured = useMemo(() => {
    if (activeCategory !== ALL || query.trim()) return [];
    return certificates.filter((c) => c.featured);
  }, [activeCategory, query]);

  // Global "/" shortcut to focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;
      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Deep linking: open certificate from URL hash on load and on hash change
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      const match = certificates.find((c) => c.id === id);
      if (match) setActiveCertificate(match);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const openCertificate = (certificate: Certificate) => {
    setActiveCertificate(certificate);
    window.history.replaceState(null, "", `#${certificate.id}`);
  };

  const closeCertificate = () => {
    setActiveCertificate(null);
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  };

  const clearFilters = () => {
    setActiveCategory(ALL);
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-canvas">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero
          total={stats.total}
          categories={stats.categories}
          issuers={stats.issuers}
          reducedMotion={reducedMotion}
        />

        <section id="collection" className="container-editorial pb-28">
          <div className="mb-14">
            <CollectionStats
              total={stats.total}
              categories={stats.categories}
              issuers={stats.issuers}
              latestYear={stats.latestYear}
            />
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CategoryFilters
              categories={categoryList}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar ref={searchRef} value={query} onChange={setQuery} />
            <SortSelect value={sort} onChange={setSort} />
          </div>

          <FeaturedCertificates
            certificates={featured}
            onOpen={openCertificate}
            reducedMotion={reducedMotion}
          />

          {activeCategory === ALL && !query.trim() && featured.length > 0 && (
            <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.24em] text-accent">
              All Certificates
            </p>
          )}

          {filtered.length > 0 ? (
            <CertificateGrid
              certificates={filtered}
              onOpen={openCertificate}
              reducedMotion={reducedMotion}
            />
          ) : (
            <EmptyState onClear={clearFilters} />
          )}
        </section>
      </main>

      <Footer />

      <CertificateModal
        certificate={activeCertificate}
        onClose={closeCertificate}
        reducedMotion={reducedMotion}
      />
    </div>
  );
}

export default App;
