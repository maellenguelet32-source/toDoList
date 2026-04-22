🧠 Description du projet : Todo List avec système d’authentification

Ce projet consiste à développer une application web interactive de gestion de tâches (Todo List), intégrant un système d’authentification utilisateur. L’objectif principal est de permettre à chaque utilisateur de créer, consulter et gérer ses tâches personnelles de manière sécurisée et intuitive.

⚙️ Fonctionnalités principales
🔐 1. Authentification des utilisateurs

L’application propose un module d’accès avec :

Inscription (nom, email, mot de passe)
Connexion
Réinitialisation du mot de passe

👉 Ça simule un vrai système utilisateur comme sur les apps modernes (même si derrière il faut voir comment tu gères ça en JS).

📝 2. Gestion des tâches

Une fois connecté, l’utilisateur peut :

Ajouter une tâche
Voir la liste de ses tâches
(potentiellement) modifier ou supprimer (si tu ajoutes plus tard)

👉 Chaque utilisateur a son espace perso → logique multi-utilisateur (même en front).

👤 3. Interface personnalisée
Message de bienvenue dynamique (welcome)
Interface qui change selon l’état :
connecté → app visible
non connecté → formulaire affiché

👉 Ça montre que tu maîtrises le DOM dynamique.

🎨 4. Design moderne
Utilisation de Google Fonts (Poppins, Quicksand, Pacifico)
Intégration de Font Awesome pour les icônes
Structure propre avec séparation :
HTML (structure)
CSS (main.css) (style)
JS (app.js) (logique)

👉 Là tu respectes une vraie architecture front-end 💻

🧩 Architecture technique
HTML : structure de l’interface
CSS : stylisation (non montré ici mais prévu)
JavaScript :
gestion des événements (onclick)
logique utilisateur (register, login, logout…)
manipulation du DOM (affichage dynamique)
🎯 Objectifs pédagogiques

Ce projet permet de maîtriser :

La manipulation du DOM
La gestion des événements en JavaScript
Les bases de l’authentification côté client
La structuration d’un projet web
L’expérience utilisateur (UX)
🚀 Améliorations possibles (si tu veux passer niveau supérieur)

Là je te challenge un peu 😏 :

Ajouter une base de données (Firebase ou localStorage)
Ajouter :
suppression de tâche
tâches terminées ✅
Sécuriser l’authentification (backend)
Ajouter un mode sombre 🌙
Sauvegarde automatique des tâches
🧾 Conclusion

Ce projet est une application web fonctionnelle qui simule un environnement utilisateur réel, combinant gestion de tâches et authentification. Il constitue une excellente base pour évoluer vers des applications plus complexes avec backend et base de données.