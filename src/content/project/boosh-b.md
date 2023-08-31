---
title: Restaurants Boosh-B
excerpt: |
  Intégration des maquettes réalisées par l'agence Ze Astronaut pour les restaurants Boosh-B.
site: https://booshb.com
technologies:
  - Astro
  - TypeScript
  - Sass
  - Git
  - GitHub Actions
  - Adobe XD
services:
  - Intégrations des maquettes
  - Référencement
  - Intégration et déploiement continus
  - Gestion de l'hébergement
publishDate: 2022-08-22 14:00:00
releaseYear: 2022
cover:
  src: ../../assets/images/project/boosh-b-cover.jpg
  alt: |
    Page d'accueil du site des restaurants Boosh-B, visible sur booshb.com
  seo: ../../assets/images/project/boosh-b-social.png
---

## Le projet

L'agence de communication ZeAstronaut[^1] réalise le lancement des restaurants de burgers et bagels *Boosh-B*, sur les réseaux sociaux et sur le Web.

Dans le cadre de la création de leur site internet, ZeAstronaut a fait appel à mes services pour l'**intégration des maquettes** qu'ils ont auparavant réalisées sur *Adobe XD*.

## Détail de la mission

Le site comporte quelques pages informatives, un formulaire de contact, ainsi que la carte des restaurants, où les pages des produits sont classées par catégorie. Le site n'a pas besoin d'être dynamique, car le contenu ne changera pas régulièrement.

J'ai cherché une solution technique qui permette d'utiliser des modèles de pages pour les contenus récurrents, tels que les pages des produits et des catégories de produits, et qui **génère des pages statiques en HTML lors de la compilation**.

Mon choix s'est porté sur Astro[^2], un générateur de sites statiques orienté pour la performance, facile à prendre en main, mais avec un grand nombre de possibilités.

### Intégration du site Web

Le contenu du site est simple à intégrer, mais les éléments graphiques décoratifs viennent compliquer le responsive (l'adaptation de la mise en page selon la taille de l'écran).

Pour les contenus récurrents, j'ai créé plusieurs **composants réutilisables qui génèrent le contenu selon des paramètres précisés**.

Par exemple, pour le burger Boosh-B[^3], j'utilise un composant pour afficher les ingrédients selon leur catégorie, et un autre pour le menu avec les variantes d'accompagnement et de boisson :

```astro
<ProductLayout title="Le Boosh B" category={ProductCategory.Burger} image="/images/product/burger-boosh-b.png" description="...">
   <Ingredients vegetables="Galette de pommes de terre,Iceberg" meats="Boeuf,Poitrine de porc grillée,Oeuf" cheeses="Cheddar affiné" sauces="Sauce secrète" />
   <Allergens content="Traces de céréales, oeuf, soja, lait, fruits à coques, moutarde, graines de sésame, lupin" />
   <Menu product="Burger Boosh B" productPicture="/images/product/burger-boosh-b-menu.jpg" side={ProductSide.ChickenCroquettes} drink={ProductDrink.CocaCola} />
</ProductLayout>
```

*Exemple du code source de la page produit du burger Boosh-B.*

### Déploiement automatisé

Pour gagner du temps et m'assurer que les mises à jour ne comportent pas de problèmes, j'ai mis en place une **intégration continue et un déploiement continu (CI/CD)**.

L'intégration continue va analyser le code et vérifier qu'il respecte un certain nombre de règles et bonnes pratiques grâce à *ESLint*, puis tester l'accessibilité du site avec *Pa11y*.

En parallèle, le déploiement continu envoie les nouveaux fichiers sur un serveur de préproduction, pour permettre (entre autres) au commanditaire de vérifier les modifications.

Une fois les modifications vérifiées et validées, je peux publier la nouvelle version du site, et une autre GitHub Action va **déployer automatiquement les modifications sur le serveur de production**.

[^1]: Site internet de l'agence ZeAstronaut : <a href="https://zeastronaut.com/" rel="noopener" target="_blank">zeastronaut.com</a>
[^2]: Plus d'informations sur Astro : <a href="https://astro.build/" rel="noopener noreferrer nofollow" target="_blank">astro.build</a>
[^3]: Voir le burger Boosh-B sur le site des restaurants : <a href="https://booshb.com/produit/burger-boosh-b" rel="noopener noreferrer nofollow" target="_blank">booshb.com/produit/burger-boosh-b</a>
