import { getCollection, type CollectionEntry } from "astro:content";
import createSlug from "./createSlug";

export type Project = CollectionEntry<"projects">;

/** All projects, sorted by `order` (then title). */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export const projectUrl = (p: Project) => "/projects/" + createSlug(p.data.title, p.slug);

/** Groups projects by category, keeping categories in the order their first project appears. */
export function groupByCategory(projects: Project[]): [string, Project[]][] {
  const groups = new Map<string, Project[]>();
  for (const p of projects) {
    if (!groups.has(p.data.category)) groups.set(p.data.category, []);
    groups.get(p.data.category)!.push(p);
  }
  return [...groups.entries()];
}
