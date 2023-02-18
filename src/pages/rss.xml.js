import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { OPEN_GRAPH, SITE } from 'src/config';

export async function get(context) {
  const projects = (await getCollection('project', ({ data }) => data.draft !== true))
	.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())

  return rss({
    title: OPEN_GRAPH.site_name,
    description: SITE.description,
    site: context.site,
    items: projects.map((project) => ({
      title: `${project.data.title} - Portfolio`,
      description: project.data.excerpt,
      link: `/projet/${project.slug}`,
      pubDate: project.data.publishDate,
    })),
    customData: '<language>fr-fr</language>',
  })
}
