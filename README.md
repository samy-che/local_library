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
2. Installer les dépendances :
      npm install
---

## Configuration de la base de données 

const dev_db_url =
  "mongodb+srv://admin:mdp@cluster0.5vtyrrf.mongodb.net/local_library?retryWrites=true&w=majority";

const mongoDB = process.env.MONGODB_URI || dev_db_url;

---

## Lancement du projet

- npm start

- npm run devstart

- npm run serverstart

---
## Peupler la base de données

- node populatedb.js <URL_MONGODB>
- node populatedb.js mongodb+srv://admin:mdp@cluster0.5vtyrrf.mongodb.net/local_library?retryWrites=true&w=majority

---
## Structure du projet

samy-che-local_library/
├── app.js               # Configuration d'Express et Mongoose
├── package.json         # Dépendances et scripts npm
├── populatedb.js        # Script pour insérer des données de test
├── bin/
│   └── www              # Lance le serveur sur le port 3000
├── controllers/
│   ├── authorController.js  # Logique métier CRUD pour les auteurs
│   └── bookController.js    # Logique métier CRUD pour les livres
├── models/
│   ├── author.js        # Schéma Mongoose de l'Auteur
│   └── book.js          # Schéma Mongoose du Livre
├── public/
│   └── stylesheets/
│       └── style.css    # Fichier CSS principal
├── routes/
│   ├── catalog.js       # Routes /catalog pour livres et auteurs
│   ├── index.js         # Redirection de la racine vers /catalog
│   └── users.js         # Exemple de route pour /users
└── views/
    ├── layout.pug       # Template layout Pug (base HTML, Bootstrap)
    ├── index.pug        # Page d'accueil
    ├── author_*.pug     # Vues liées aux auteurs
    ├── book_*.pug       # Vues liées aux livres
    └── error.pug        # Page d'erreur

 ---
 ## Aperçu des principales fonctionnalités

 - Liste des livres : /catalog/books

- Détail d’un livre : /catalog/book/<ID>

- Créer un livre : /catalog/book/create

- Mettre à jour un livre : /catalog/book/<ID>/update

- Supprimer un livre : /catalog/book/<ID>/delete

- Liste des auteurs : /catalog/authors

- Détail d’un auteur : /catalog/author/<ID>

- Créer un auteur : /catalog/author/create

- Mettre à jour un auteur : /catalog/author/<ID>/update

- Supprimer un auteur : /catalog/author/<ID>/delete

---
## Licence 

Ce projet est proposé à des fins pédagogiques. Vous pouvez librement l’utiliser, le modifier et le redistribuer en mentionnant la source.




