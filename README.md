1. Quelle différence fais-tu entre un Dockerfile et un docker-compose.yml ?
Dockerfile : C'est un fichier contenant des instructions pour construire une image Docker. Il définit la manière dont une image doit être créée à partir de zéro, en précisant des actions comme l'installation des dépendances, la configuration des variables d'environnement, et l'exposition des ports. - docker-compose.yml : C'est un fichier de configuration qui permet de définir et gérer des services multi-conteneurs Docker. Il décrit la manière dont les différents conteneurs doivent interagir, les variables d'environnement à configurer, les volumes à partager, et les ports à exposer entre les conteneurs et l'extérieur.

2. Quels sont les avantages de séparer les services dans une architecture Docker ?
Séparer les services dans une architecture Docker présente plusieurs avantages :
Isolation des services,
Scalabilité,
Maintenance simplifiée,
Environnement reproductible.
3. En quoi Docker Compose facilite-t-il le travail en équipe et le déploiement ?
Docker Compose simplifie le travail en équipe et le déploiement en permettant :
Configuration partagée,
Simplicité d’exécution,
Isolation des environnements,
Déploiement rapide.
4. Pourquoi est-il utile de publier une image sur Docker Hub même pour un projet personnel ?
Publier une image sur Docker Hub, même pour un projet personnel, présente plusieurs avantages :
Facilité de partage
Portabilité
Centralisation
Testabilité
