# Adding a project

## Assets

Two images are required :

* **Cover illustration** : JPG file, 1280×960 pixels
* **Social card** : PNG file, 1200×600 pixels

Other content images must be 896 pixels wide, and JPG encoding.

## Content

First, create a new Astro file in `src/pages/projet` using `ProjectLayout`.

Duplicate `content` definition from a previous project, and update it with the new project's details.

Write project's story, add images, code blocks, review, footnotes ...

For images, use this following implementation :

```jsx
<Picture alt="..." src={...} widths={[420, 840, 1280]} aspectRatio="width:height" sizes="(min-width: 58.5em) 56em, 100vw" />
```

## Linking to other pages

In file `src/pages/portfolio.astro`, update `projects` definition by adding the new project as first one.

In file `src/pages/rss.xml.js`, update `projects` definition by adding the new project as first one.

Optionally, in file `src/pages/index.astro`, update `projects` definition by adding the new project as first one, and remove last one.
