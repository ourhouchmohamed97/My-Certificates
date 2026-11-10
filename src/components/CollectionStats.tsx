interface CollectionStatsProps {
  total: number;
  categories: number;
  issuers: number;
  latestYear: number;
}

export function CollectionStats({ total, categories, issuers, latestYear }: CollectionStatsProps) {
  const stats = [
    { label: "Certificates", value: total },
    { label: "Categories", value: categories },
    { label: "Issuers", value: issuers },
    { label: "Most recent", value: latestYear },
  ];

  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-surface px-5 py-5 sm:px-6 sm:py-6">
          <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-faint">
            {s.label}
          </dt>
          <dd className="mt-1.5 font-display text-2xl font-light text-ink sm:text-3xl">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
