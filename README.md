# Local Library

Bienvenue sur **Local Library**, un projet d’application web construit avec Node.js, Express, MongoDB, et Pug.  
Cette application est un exemple pédagogique (inspiré du tutoriel MDN) qui illustre comment mettre en place un CRUD complet (Create, Read, Update, Delete) pour gérer des Auteurs (Authors) et des Livres (Books).

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Pré-requis](#pré-requis)
- [Installation](#installation)
- [Configuration de la base de données](#configuration-de-la-base-de-données)
- [Lancement du projet](#lancement-du-projet)
- [Peupler la base de données](#peupler-la-base-de-données)
- [Structure du projet](#structure-du-projet)
- [Aperçu des principales fonctionnalités](#aperçu-des-principales-fonctionnalités)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## Fonctionnalités

1. **Gestion des auteurs** :  
   - Création, liste, détails, mise à jour et suppression.
   - Formatage des dates de naissance/décès (via `luxon`).

2. **Gestion des livres** :  
   - Création, liste, détails, mise à jour et suppression.
   - Association d’un livre à un auteur.

3. **Page d’accueil** :  
   - Affiche le nombre total de livres et d’auteurs.

4. **Validation de formulaire** :  
   - Vérification des champs via [express-validator](https://express-validator.github.io/docs/).

5. **Pages de confirmation de suppression** :  
   - Assure qu’un auteur ayant des livres ne peut pas être supprimé sans confirmer.

---

## Pré-requis

- **Node.js** (version 14 ou supérieure)
- **npm** (installé avec Node.js)
- **MongoDB** : local, ou un cluster MongoDB Atlas.

---

## Installation

1. **Cloner ce dépôt** :

   ```bash
   git clone https://github.com/votre-utilisateur/samy-che-local_library.git
   cd samy-che-local_library
