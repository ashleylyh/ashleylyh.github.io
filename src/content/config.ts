import { z, defineCollection } from "astro:content";

const uniqueTags = z.array(z.string()).refine(items => new Set(items).size === items.length, {
    message: 'tags must be unique',
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

// src/content/projects/*.md — one file per project; the Markdown body is the detail page.
const projectSchema = z.object({
    title: z.string(),
    description: z.string(),               // one-line summary shown on cards
    heroImage: z.string().optional(),      // e.g. /images/projects/fyp.jpg (files live in public/)
    category: z.string().default("Others"),// projects page groups by this
    order: z.number().default(999),        // lower = shown first
    featured: z.boolean().default(false),  // true = also shown on the home page
    badge: z.string().optional(),
    award: z.string().optional(),          // shown as a 🏆 badge, e.g. "Best FYP"
    tags: uniqueTags.optional(),
    link: z.string().optional(),           // external demo / repo link
    report: z.string().optional(),         // report / paper link
    pubDate: z.coerce.date().optional(),
});

// src/content/education/*.md and src/content/experience/*.md — the Markdown body is the description.
// Leave out endDate for "Present". Entries are sorted newest first by startDate.
const timelineSchema = z.object({
    title: z.string(),                     // degree / school, or job title
    organization: z.string().optional(),   // company (experience)
    pi: z.string().optional(),             // experience: project PI / supervisor (subtitle)
    piUrl: z.string().optional(),          // experience: PI personal webpage (links the PI name)
    section: z.enum(["work", "activity"]).default("work"), // experience: "activity" = Leadership & Activities
    location: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    logo: z.string().optional(),           // e.g. /images/icons/hkust.png
    url: z.string().optional(),
    tags: z.array(z.string()).optional(),
    program: z.string().optional(),        // education: degree / program (subtitle)
    gpa: z.string().optional(),            // education: GPA line (subtitle)
});

// src/content/pages/*.md — one file per page (home.md, about.md); the Markdown body is the intro/profile text.
const pageSchema = z.object({
    title: z.string(),
    // home.md
    greeting: z.string().optional(),
    name: z.string().optional(),
    headline: z.string().optional(),
    cta: z.object({ label: z.string(), url: z.string() }).optional(),
    // about.md
    awards: z.array(z.object({ title: z.string(), date: z.coerce.string(), description: z.string().optional() })).optional(),
    certifications: z.array(z.object({ name: z.string(), url: z.string().optional(), logo: z.string().optional() })).optional(), // logo: small icon before the name
    interests: z.array(z.object({ name: z.string(), icon: z.string().optional(), description: z.string().optional() })).optional(), // icon: an emoji or /images/... path
    languages: z.array(z.object({ name: z.string(), level: z.string().optional(), percent: z.number().min(0).max(100) })).optional(), // progress bars
    skills: z.array(z.object({ category: z.string(), items: z.array(z.object({ name: z.string(), logo: z.string().optional() })) })).optional(), // logo: small icon before the skill name
});

// src/content/publications/*.md — one file per paper; the Markdown body is the abstract (optional).
const publicationSchema = z.object({
    title: z.string(),
    authors: z.array(z.string()),          // in paper order; your name is highlighted (AUTHOR_NAMES in src/config.ts). Add * for equal contribution.
    venue: z.string(),                     // e.g. "CVPR 2027" or "IEEE Transactions on Image Processing"
    year: z.number(),                      // groups the list; newest first
    date: z.coerce.date().optional(),      // orders papers within a year (newest first)
    type: z.enum(["conference", "journal", "workshop", "preprint", "thesis", "other"]).default("conference"),
    status: z.string().optional(),         // e.g. "Under Review", "Accepted", "To Appear"
    award: z.string().optional(),          // e.g. "Oral", "Best Paper Award" (🏆 badge)
    image: z.string().optional(),          // thumbnail, e.g. /images/publications/my-paper.jpg
    selected: z.boolean().default(false),  // true = also shown on the home page
    draft: z.boolean().default(false),     // true = only visible in local preview (npm run dev), never published
    links: z.object({
        pdf: z.string().optional(),
        arxiv: z.string().optional(),
        doi: z.string().optional(),
        code: z.string().optional(),
        project: z.string().optional(),
        video: z.string().optional(),
        slides: z.string().optional(),
        poster: z.string().optional(),
    }).default({}),
    bibtex: z.string().optional(),         // shown in a copyable BibTeX box
});

export type StoreSchema = z.infer<typeof storeSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

export const collections = {
    'publications': defineCollection({ schema: publicationSchema }),
    'store': defineCollection({ schema: storeSchema }),
    'projects': defineCollection({ schema: projectSchema }),
    'education': defineCollection({ schema: timelineSchema }),
    'experience': defineCollection({ schema: timelineSchema }),
    'pages': defineCollection({ schema: pageSchema }),
}
