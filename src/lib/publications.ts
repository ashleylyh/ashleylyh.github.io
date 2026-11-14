import { getCollection, type CollectionEntry } from "astro:content";

export type Publication = CollectionEntry<"publications">;

/** Published papers (drafts only in `npm run dev`), newest year first, then newest date. */
export async function getPublications(): Promise<Publication[]> {
  const pubs = await getCollection("publications", (p) => import.meta.env.DEV || !p.data.draft);
  return pubs.sort(
    (a, b) =>
      b.data.year - a.data.year ||
      (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0) ||
      a.data.title.localeCompare(b.data.title)
  );
}

/** [year, papers][] in display order. */
export function groupByYear(pubs: Publication[]): [number, Publication[]][] {
  const groups = new Map<number, Publication[]>();
  for (const p of pubs) {
    if (!groups.has(p.data.year)) groups.set(p.data.year, []);
    groups.get(p.data.year)!.push(p);
  }
  return [...groups.entries()];
}
