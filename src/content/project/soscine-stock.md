---
title: CRM sur-mesure de SosCine
excerpt: |
  Création d'une Web application pour la gestion des stocks, des clients et des réservations de la société SosCine.
technologies:
  - Symfony
  - PHP
  - Git
  - TailwindCSS
  - JavaScript
services:
  - Création d'application Web
  - Gestion de l'hébergement
  - Gestion de projet
  - Formation
publishDate: 2023-03-01 14:00:00
releaseYear: 2020 - 2023
cover:
  src: /images/project/soscine-stock-cover.jpg
  alt: |
    Tableau de bord de l'application de gestion des stocks de SosCine
  seo: /images/project/soscine-stock-social.png
featured: true
---

## Présentation de SosCine

SosCine est une société spécialisée dans la location de matériel audiovisuel &mdash; caméras, optiques, lumières, etc. Elle propose des solutions de location de matériel pour les professionnels et les particuliers.

En 2020, le gérant de SosCine m'a contacté pour m'expliquer les problèmes qu'il rencontrait avec son système de gestion des stocks. Après une analyse du système existant, j'ai proposé de créer une nouvelle application Web pour gérer les stocks, les clients et les réservations.

*Cet article détaille quelques-unes des fonctionnalités de cette application Web &mdash; dont l'amélioration continue depuis 2020. Un [Bilan d'utilisation](#bilan-dutilisation) est disponible en fin de page.*

### Pitch de la première version de l'application

L'objectif principal de l'application est de gérer les stocks de matériel, les clients et les réservations. Elle fonctionne depuis un navigateur Web, et est utilisée par les employés de SosCine uniquement.

Un site Web est également disponible pour les clients de SosCine. Il permet de consulter le catalogue de matériel et d'émettre des demandes de réservations. Les demandes sont envoyées vers l'application de stock, et sont ensuite traitées par les employés de SosCine.

## Liste des domaines

L'application est composée de 4 grands domaines d'activité :

### Gestion des stocks

La gestion des stocks permet d'enregistrer des références de produits, puis d'ajouter la quantité disponible en stock, ainsi que le prix de location.

Il est également possible de consulter la disponibilité des équipements sur une période donnée grâce à un système de stock flottant, qui calcul la quantité disponible des produits en fonction des réservations en cours, et des produits en S.A.V.

### Gestion des réservations

La gestion des réservations permet de gérer les demandes de réservation des clients. Les demandes sont envoyées par le site Web [soscine.fr](https://soscine.fr), et sont [traitées automatiquement](#traitement-automatisé-des-réservations) le plus souvent, ou bien par les techniciens en cas d'indisponibilité de produits.

![Page des réservations de l'application de gestion des stocks de SosCine. Les réservations sont listées, avec pour chacune le nom du client, les dates de début et de fin, le statut de la réservation, et des boutons pour imprimer ou afficher la réservation.](/images/project/soscine-stock-booking.jpg)

Le fonctionnement des réservations est régi par [un système d'états machine](#workflows-de-validation), qui empêche les erreurs et permet de suivre l'avancement des réservations. Un historique des opérations effectuées est également disponible.

### Gestion du service après-vente

Au retour d'une réservation, tous les produits sont testés afin de vérifier leur bon fonctionnement. En cas de problème, les produits sont mis en S.A.V., et un ticket est créé pour suivre la résolution du problème.

Le ticket est ensuite traité par les techniciens, qui peuvent soit réparer le produit, soit le remplacer par un produit neuf. Une fois le produit réparé, il est remis en stock, la réservation est clôturée, et les réparations peuvent être facturées.

### Gestion de la facturation

Lors de la saisie du bon de départ, une facture est générée. Elle est mise à jour lors de la modification de la réservation puis lors du retour du matériel, en prenant en compte les éventuels retards de retour.

Les encaissements sont saisis et rattachés aux factures, puis envoyés au logiciel de comptabilité de la société une fois la réservation terminée et les éventuels tickets de S.A.V. clôturés.

## Fonctionnalités phares

### Gestion de la disponibilité des produits

La disponibilité des produits est calculée en temps réel, en fonction des réservations en cours, des produits en S.A.V., et de la quantité disponible en stock. Ce système de stock flottant permet de gérer les réservations de manière plus efficace, et de limiter les erreurs.

Dans l'éventualité d'ouvrir une seconde boutique, le calcul est réalisé pour chaque boutique, et chaque boutique peut avoir des stocks différents.

### Traitement automatisé des réservations

Lors de la création d'une réservation depuis le site Web [soscine.fr](https://soscine.fr), la disponibilité des produits est vérifiée en temps réel. Si les produits sont disponibles, le client peut choisir de confirmer directement sa réservation, et ainsi bloquer les produits pour les dates de la location.

Si les produits ne sont pas disponibles, le client est informé par mail, et les opérateurs prennent le relai pour proposer des alternatives au client. Sans confirmation du client, la réservation est automatiquement relancée après 24 heures.

Lorsqu'une réservation n'est pas confirmée et que le créneau de départ est passé, la réservation est automatiquement annulée; de même que pour une réservation confirmée si le client ne vient pas chercher le matériel.

### Enregistrement des opérations effectuées

Afin de tracer les modifications réalisées sur certains contenus, chaque opération est enregistrée dans l'application. Il est ainsi possible de consulter l'historique des opérations effectuées sur une réservation, une facture, un ticket de S.A.V.&nbsp;...

### Bons de départ et de retour saisis avec le client

Le bon de départ est saisi avec le client, chaque produit est vérifié puis photographié. Après l'avoir lu, le client confirme les informations saisies en signant le bon de départ.

![Bon de retour d'une réservation. La page comporte les informations sur la réservation et sur le client. En dessous, un formulaire avec la liste des produits loués, le statut de chaque exemplaire de produit, puis un espace pour que le client évalue son expérience avec SosCine, et signe pour confirmer le bon de retour.](/images/project/soscine-stock-booking-end.jpg)

Le bon de retour affiche les commentaires et les photographies saisis lors du départ, et permet à l'opérateur d'indiquer si le produit est retourné ou manquant, ou bien si un accessoire n'est pas présent. Si plusieurs exemplaires d'un produit sont loués, chaque exemplaire est saisi séparément.

Le client peut ensuite évaluer son expérience avec SosCine au moyen d'émoticônes et avec un champ de texte, puis confirmer les informations saisies sur le bon de retour en signant.

### Workflows de validation

Grâce au composant Workflow de Symfony &mdash; un système de gestion d'états machine, il est possible de définir des étapes, des transitions et des conditions, afin de valider une réservation, une facture, un ticket de S.A.V.&nbsp;...

![Représentation graphique du workflow de traitement des factures, avec quatre états et quatre actions possibles.](/images/project/soscine-stock-workflow-invoice.jpg)
*Workflow du traitement des factures*

Pour la facturation, le workflow est le suivant :

- La facture est créée lors de la saisie du bon de départ d'une réservation. Elle a le statut "À établir".
- Lorsque la réservation est terminée, que tous les produits sont retournés, et les éventuels tickets de S.A.V. clôturés, la facture est validée. Elle passe alors au statut "À encaisser".
- Lorsque les paiements sont enregistrés, la facture peut être envoyée au logiciel de comptabilité. Elle passe alors au statut "Clôturée".
- Si le client ne règle pas sa facture, elle peut tout de même être envoyée au logiciel de compta, afin de demander un recouvrement. Elle passe alors au statut "Clôturée".

Le workflow de facturation est le plus simple, par exemple celui des réservations est bien plus complexe, avec 14 étapes et 16 transitions possibles.

### Gestion des retards au retour

L'application gère deux types de retards :

- Les réservations en retard, dont la date de saisie du bon de retour est ultérieure à la date de retour prévue, la différence est facturée au client.
- Les produits manquants au retour d'une réservation, qui peuvent être ramenés par le client à une date ultérieure. Au bout de quelques jours sans retour, le remplacement du produit à neuf est facturé au client.

Ces deux types de retards peuvent être cumulés, par exemple si une réservation devait se terminer le lundi soir, mais est finalement retournée le mardi matin, une demi-journée sera facturée. Et si un des produits n'est pas rapporté lors de la saisie de bon de retour, le client dispose de quelques jours pour le ramener, ou bien le remplacement du produit lui sera imputé.

### Facturation internalisée

La facturation est réalisée par l'application de stock. Elle est mise à jour tant que la réservation est en cours, et est clôturée lors du retour du matériel &mdash; ou de la résolution des tickets de S.A.V. Les paiements sont également enregistrés dans l'application.

Une fois la facturation clôturée, elle est envoyée au logiciel de comptabilité de la société, avec les paiements effectués. Il est possible de générer un PDF de la facture, et de l'envoyer au client.

## Bilan d'utilisation

Depuis la mise en production de l'application &mdash; en août 2020, plus de 28.000 demandes de réservation ont été saisies à ce jour &mdash; avril 2023, en augmentation de plus de 25% par an.

L'automatisation du traitement des devis et des réservations, le calcul de la disponibilité des produits, et l'intégration de la facturation dans l'application ont permis de gagner du temps, et de réduire les erreurs.

Lors de la publication de la première version &mdash; il y a maintenant 3 ans, les seules fonctionnalités présentes étaient l'inventaire des produits, la liste et la saisie des réservations, ainsi que l'annuaire client. Depuis, de nombreuses fonctionnalités ont été ajoutées, comme la facturation, la gestion des retards, la gestion des tickets de S.A.V.&nbsp;... Et d'autres sont en cours de développement.

### Évolutions prévues

Une refonte du site internet [soscine.fr](https://soscine.fr) est en cours de développement, afin de proposer une meilleure expérience utilisateur, et de faciliter la saisie des réservations.

Cette refonte permettra également de proposer de nouveaux services, comme la gestion des réservations via un espace client. Les clients pourront ainsi modifier leurs réservations à venir, consulter les détails des réservations en cours, puis récupérer les factures associées.
