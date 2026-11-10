export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const YEAR_ONLY = /^\d{4}$/;

export function formatDate(iso: string) {
  if (YEAR_ONLY.test(iso)) return iso;
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function formatShortDate(iso: string) {
  if (YEAR_ONLY.test(iso)) return iso;
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
