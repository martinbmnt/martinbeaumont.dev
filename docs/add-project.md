# Adding a project

## Assets

Two images are required :

* **Cover illustration** : JPG file, 1280×960 pixels
* **Social card** : PNG file, 1200×600 pixels

Other content images must be 896 pixels wide, and JPG encoding.

## Content

First, create a new Markdown file in `src/content/project`.

Duplicate frontmatter from another project, update with the new project informations.

Write project's story, add images, code blocks, footnotes ...

For images, use this following implementation :

```md
![Image alt text](/images/project/{slug}-{title}.jpg)
*Extra image explaination*
```

## Linking to other pages

When project is published, it will automatically appear on Portfolio page, as well in RSS feed.

Optionally, to show on front page, add `featured: true` in frontmatter.
