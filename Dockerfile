FROM node:14

# Ajout du package.json dans le répertoire tmp
ADD package.json /tmp/package.json

# Ajout du packge-lock.json dans le répertoire tmp
ADD package-lock.json /tmp/package-lock.json

# Suppression du dossier build lors de la création de l'image
RUN rm -rf build

# dan le répertoire tmp on lance la commande npm install
RUN cd /tmp && npm install

# Ajout de tout les éléments qui sont dans le répertoire src
ADD ./ /src

# suppression de tous les éléments qui sont dans le répertoire node_modules
# Copy de celle-ci dans tmp/node_modules
RUN rm -rf src/node_modules && cp -a /tmp/node_modules /src/

# le fichier de travail
WORKDIR /src

# build de l'app
RUN npm build

# Lancement de l'app
CMD ["node", "build/src/app.js"]