# ashleylyh.github.io

Source for my personal website: **[ashleylyh.github.io](https://ashleylyh.github.io)**

It covers my background, research and work experience, publications and projects. The blog at [ashleylyh.github.io/blog](https://ashleylyh.github.io/blog/) lives in its own repository and is linked from the sidebar.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/), starting from the [Astrofy](https://github.com/manuelernestog/astrofy) template.

## Run locally

```bash
npm install
npm run dev        # live preview at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the production build
```

Google Analytics only loads in the production build, so local previews aren't counted.

## Editing content

Almost everything on the site is Markdown under `src/content/`. The fields each collection accepts are defined, with comments, in `src/content/config.ts`.

| Folder | Shows up on | Notes |
| --- | --- | --- |
| `pages/home.md` | Home | Greeting, headline, intro text |
| `pages/about.md` | About Me | Awards, certifications, skills, languages, interests |
| `education/` | About Me | One file per school; `endDate` left out means "Present" |
| `experience/` | Experience | One file per role; `section: activity` puts it under Leadership & Activities; `pi` / `piUrl` add a linked supervisor line |
| `projects/` | Projects, Home | `featured: true` shows it on Home; `order` sets the position; `tags` create tag pages |
| `publications/` | Publications, Home | `selected: true` marks a selected paper; `draft: true` hides it. Copy `example-publication.md` to add one |

Images go in `public/images/` (`icons/`, `projects/`, `publications/`) and are referenced as `/images/...`.

Site-wide settings are in `src/config.ts`: page title and description, `AUTHOR_NAMES` (my name is highlighted in publication author lists), and `GA_MEASUREMENT_ID`.

The sidebar links are in `src/components/SideBarMenu.astro`.

## Project structure

```
src/
├── components/      # sidebar, cards, timeline, publication item, head tags
├── content/         # all the Markdown content (see above)
├── layouts/         # BaseLayout wraps every page
├── lib/             # helpers that sort and group projects, publications, timeline
├── pages/           # routes: index, about, experience, publications, projects/
└── config.ts        # site-wide settings
public/              # static files served as-is (images, favicon, robots.txt)
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages, usually in under a minute.

## License

Code is under the MIT license (see `LICENSE`), inherited from the Astrofy template by Manuel Ernesto Garcia. The written content and images are my own.
