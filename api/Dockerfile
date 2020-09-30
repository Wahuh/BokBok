FROM node:14-alpine
WORKDIR /node
COPY package*.json ./
RUN mkdir app && chown -R node:node .
USER node
RUN npm install && npm cache clean --force
COPY --chown=node:node . .
RUN npm run build
CMD node ./dist/main