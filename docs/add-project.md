# Adding a project

## Assets

Two images are required :

* **Cover illustration** : JPG file, 1280×960 pixels
* **Social card** : PNG file, 1200×600 pixels

Other content images must be 1280 pixels wide, and JPG encoding.

## Content

First, create a new Astro file in `src/pages/projet` using `ProjectLayout`.

Duplicate `content` definition from a previous project, and update it with the new project's details.

Write project's story, add images, code blocks, review, footnotes ...

## Linking to other pages

In file `src/pages/portfolio.astro`, update `projects` definition by adding the new project as first one.

In file `src/pages/rss.xml.js`, update `projects` definition by adding the new project as first one.

Optionally, in file `src/pages/index.astro`, update `projects` definition by adding the new project as first one, and remove last one.
