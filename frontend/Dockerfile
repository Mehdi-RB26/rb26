# Image de base
FROM node:18

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste
COPY . .

# Exposer le port 3000 (React)
EXPOSE 3000

# Lancer le frontend
CMD ["npm", "start"]
