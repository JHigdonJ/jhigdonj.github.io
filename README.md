# Joseph T. Higdon Jr. — GIS Portfolio

This is a multi-page GitHub Pages portfolio.

## Pages

- `index.html` — landing / welcome page
- `projects.html` — GIS project collection with sorting and category filters
- `education.html` — education, research, and coursework
- `about.html` — about page and headshot
- `resume.html` — web resume and PDF links
- `projects/project-template.html` — master template for new project pages

## Resume

Keep your existing `resume.pdf` in the repository root.

## Headshot

Add your photo to:

`assets/images/headshot.jpg`

Then replace the headshot placeholder in `about.html` with:

```html
<img src="assets/images/headshot.jpg" alt="Joseph T. Higdon Jr.">
```

## Adding projects

1. Copy `projects/project-template.html`.
2. Rename the copy.
3. Fill in the project information.
4. Add the project card to `projects.html`.
5. Add a completion date in the card's `data-date` attribute using `YYYY-MM-DD`.
6. Add one or more category names to `data-category`.

The project page and project card are intentionally separate so the Projects page stays clean while each project can contain detailed documentation.

## GitHub Pages

Publish from `main` / root. The intended site is:

`https://jhigdonj.github.io/`


This is still a major work in progress.
