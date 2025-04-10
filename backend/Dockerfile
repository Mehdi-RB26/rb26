# Image de base
FROM node:18

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie le reste des fichiers
COPY . .

# Le port que le backend expose
EXPOSE 5000

# Commande pour démarrer l'app
CMD ["npm", "start"]
