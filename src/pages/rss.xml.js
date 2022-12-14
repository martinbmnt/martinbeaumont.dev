import rss from '@astrojs/rss';
import { OPEN_GRAPH, SITE } from '../config';

const projects = [
  {
    title: "Site internet de l'agence Ze Astronaut - Portfolio",
    description: "Intégration des maquettes pour la création du site internet de l'agence Ze Astronaut",
    pubDate: '2022-11-26T14:00:00',
    link: '/projet/agence-ze-astronaut',
  },
  {
    title: 'Portfolio de Thommy - Portfolio',
    description: "Refonte du site internet / portfolio de Thommy, un motion-designer, animateur 3D et artiste free-lance.",
    pubDate: '2022-08-31T14:00:00',
    link: '/projet/portfolio-thommy',
  },
  {
    title: 'Restaurants Boosh-B - Portfolio',
    description: "Intégration des maquettes réalisées par l'agence Ze Astronaut pour les restaurants Boosh-B.",
    pubDate: '2022-08-22T14:00:00',
    link: '/projet/boosh-b',
  },
  {
    title: 'Patrimoine La Mayenne - Portfolio',
    description: "Amélioration de l'accessibilité et de la navigation des sites du patrimoine de la Mayenne.",
    pubDate: '2022-08-21T14:00:00',
    link: '/projet/patrimoine-mayenne',
  },
  {
    title: 'Portfolio de Thurb - Portfolio',
    description: 'Création du site internet / portfolio de Thurb, un graphiste, illustrateur et artiste free-lance.',
    pubDate: '2022-08-20T14:00:00',
    link: '/projet/portfolio-thurb',
  },
  {
    title: 'Maine Image Santé - Portfolio',
    description: "Refonte du site institutionnel du groupe d'imagerie médicale sarthois Maine Image Santé.",
    pubDate: '2022-08-19T14:00:00',
    link: '/projet/maine-image-sante',
  },
];

export const get = () => rss({
  title: OPEN_GRAPH.site_name,
  description: SITE.description,
  site: import.meta.env.SITE,
  items: projects,
  customData: '<language>fr-fr</language>',
});
