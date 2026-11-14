import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import type { CollectionEntry } from "astro:content";

dayjs.extend(utc);

type TimelineEntry = CollectionEntry<"education"> | CollectionEntry<"experience">;

const newestStart = (a: TimelineEntry, b: TimelineEntry) => b.data.startDate.valueOf() - a.data.startDate.valueOf();
const endValue = (e: TimelineEntry) => e.data.endDate?.valueOf() ?? Infinity;

/** Latest end date first; no endDate = "Present" = top. Ties fall back to newest start. */
export const latestEndFirst = (a: TimelineEntry, b: TimelineEntry) => endValue(b) - endValue(a) || newestStart(a, b);

/** "Sep 2024" (UTC: frontmatter dates are UTC midnight) or "Present". */
export const fmtMonth = (d?: Date) => (d ? dayjs.utc(d).format("MMM YYYY") : "Present");

/** "Sep 2024 – Present · Location" */
export const dateLine = (d: TimelineEntry["data"]) =>
  [`${fmtMonth(d.startDate)} – ${fmtMonth(d.endDate)}`, d.location].filter(Boolean).join(" · ");

/** Sorted entries with their rendered Markdown body attached as `Body`. */
export async function withBodies<T extends TimelineEntry>(entries: T[]) {
  return Promise.all(entries.sort(latestEndFirst).map(async (e) => ({ ...e, Body: (await e.render()).Content })));
}
