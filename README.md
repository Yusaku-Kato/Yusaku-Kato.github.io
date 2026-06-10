# Yusaku Kato — Personal Research Homepage

This is the repository for the personal research homepage and portfolio website of Yusaku Kato, built using **Astro (v6)** and **Tailwind CSS (v4)**.

## 🚀 Directory & Project Structure

Inside this Astro project, the content and pages are structured as follows:

```text
/
├── src/
│   ├── content/             # Data and content managed via Astro Content Collections
│   │   ├── news/            # News updates
│   │   ├── projects/        # Featured or general research projects
│   │   ├── publications/    # Research papers, conference proceedings, and poster presentations
│   │   └── talks/           # Presentations and invited talks
│   ├── content.config.ts    # Content Collections schema definitions
│   ├── pages/               # Individual pages
│   │   ├── index.astro      # Homepage (includes Biography, Research Interests, Featured items)
│   │   ├── about.astro      # About page (includes Education, Career, and Skills)
│   │   ├── publications.astro # Full list of publications
│   │   ├── projects.astro   # Full list of projects
│   │   ├── cv.astro         # Curriculum Vitae page
│   │   └── contact.astro    # Contact page
│   ├── layouts/             # Reusable page templates
│   │   ├── BaseLayout.astro # Main layout with Header, Footer, and SEO meta tags
│   │   └── Layout.astro     # Minimal layout wrapper
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro     # Site header and navigation
│   │   ├── Footer.astro     # Site footer
│   │   ├── NavLink.astro    # Navigation link component
│   │   └── Welcome.astro    # Homepage welcome/hero section
│   ├── assets/              # Processed assets (images, etc.)
│   └── styles/              # Global styles
├── public/                  # Static assets (PDF papers, slides, images)
├── astro.config.mjs         # Astro configuration
└── package.json             # Dependencies and scripts
```

---

## 🧞 How to Update Content

### 1. Publications, Projects, Talks & News
These are managed using Astro's Content Collections. Add or edit Markdown (`.md`) files in their respective directories under `src/content/`.

* **Publications (`src/content/publications/`)**: Add a `.md` file with the following frontmatter fields:
  * Required: `title`, `authors` (array), `venue`, `year`, `type` (`journal` | `conference` | `workshop` | `preprint` | `other`)
  * Optional: `month`, `doi`, `pdf`, `code`, `slides`, `bibtex`, `tags` (array), `featured`

* **Projects (`src/content/projects/`)**: Add a `.md` file containing:
  * Required: `title`, `summary`, `period`
  * Optional: `role`, `technologies` (array), `links` (array of `{label, url}`), `featured`

* **Talks (`src/content/talks/`)**: Add a `.md` file containing:
  * Required: `title`, `event`, `date`
  * Optional: `location`, `slides`, `video`, `abstract`

* **News (`src/content/news/`)**: Add a `.md` file containing:
  * Required: `title`, `date`
  * Optional: `summary`, `link`

### 2. About Page (Education, Career, Skills, Research Interests)
Edit the TypeScript arrays at the top of [src/pages/about.astro](src/pages/about.astro):
* `researchInterests`: Research interest topics shown on the About page.
* `education`: Academic background details.
* `career`: Work/research experience.
* `skillGroups`: Programming languages, frameworks, and tools.
* `keywords`: Research keywords shown as tags.

### 3. Homepage (index.astro)
The homepage pulls featured content from Collections automatically. Edit [src/pages/index.astro](src/pages/index.astro) to update the biography text or layout.

---

## 💻 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `http://localhost:4321` |
| `npm run build` | Builds the static production site to `./dist/` |
| `npm run preview` | Previews the build locally before deploying |

---

## 🛠️ Tech Stack

| Technology | Version | Role |
| :--- | :--- | :--- |
| [Astro](https://astro.build/) | v6 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first styling |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | v3 | Automatic sitemap generation |

## 🚢 Deployment

This site is automatically deployed to **GitHub Pages** via GitHub Actions on every push to the `main` branch.
