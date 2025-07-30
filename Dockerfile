# Étape 1 : on utilise une image officielle Node.js comme base
FROM node:18

# Étape 2 : on crée un répertoire dans le conteneur pour l'application
WORKDIR /app

# Étape 3 : on copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : on installe les dépendances
RUN npm install

# Étape 5 : on copie tout le reste des fichiers dans le conteneur
COPY . .

# Étape 6 : on expose le port que l’app va utiliser
EXPOSE 3000

# Étape 7 : on définit la commande pour démarrer l’application
CMD ["node", "src/app.js"]
