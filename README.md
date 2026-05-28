# Yusaku Kato — Personal Research Homepage

This is the repository for the personal research homepage and portfolio website of Yusaku Kato, built using **Astro (v6)**.

## 🚀 Directory & Project Structure

Inside this Astro project, the content and pages are structured as follows:

```text
/
├── src/
│   ├── content/             # Data and content managed via Astro Content Collections
│   │   ├── news/            # News updates (e.g., website launch)
│   │   ├── projects/        # Featured or general research projects (e.g., BiFuzz)
│   │   ├── publications/    # Research papers, conference proceedings, and poster presentations
│   │   └── talks/           # Presentations and invited talks
│   ├── pages/               # Main layout and individual pages
│   │   ├── index.astro      # Homepage (includes Research Interests, Featured items)
│   │   ├── about.astro      # About page (includes Biography, Education, Career, and Skills)
│   │   ├── publications.astro # Full list of publications
│   │   └── projects.astro   # Full list of projects
│   ├── layouts/             # Reusable page templates
│   └── styles/              # Global styles
├── public/                  # Static assets (PDF papers, slides, images)
├── astro.config.mjs         # Astro configuration
└── package.json             # Dependencies and scripts
```

---

## 🧞 How to Update Content

### 1. Publications, Projects, & News
These are managed using Astro's Content Collections. You can add or edit Markdown (`.md`) files in their respective directories under `src/content/`.

* **Publications (`src/content/publications/`)**: Add a `.md` file with metadata in the frontmatter (`title`, `authors`, `venue`, `year`, `type`, `doi`, `pdf`, `bibtex`, etc.).
* **Projects (`src/content/projects/`)**: Add a `.md` file containing `title`, `summary`, `period`, `technologies`, and `links`.
* **News (`src/content/news/`)**: Add a `.md` file containing `title`, `date`, and `summary`.

### 2. About Page (Education, Career, Skills)
Edit the TypeScript arrays at the top of [src/pages/about.astro](file:///Users/yusaku/Documents/VSCode/Yusaku-Kato.github.io/src/pages/about.astro):
* `education`: Academic background details.
* `career`: Work/research experience.
* `skillGroups`: Programming languages, frameworks, and tools.
* `keywords`: Research keywords.

---

## 💻 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `http://localhost:4321` |
| `npm run build` | Builds the static production site to `./dist/` |
| `npm run preview` | Previews the build locally before deploying |
