FROM node:14-alpine as build
WORKDIR /node
COPY package*.json ./
RUN mkdir app && chown -R node:node .
USER node
RUN npm install && npm cache clean --force
COPY --chown=node:node . .
RUN npm run build
RUN npm prune --production

FROM node:14-alpine
COPY --from=build /node/dist ./dist
COPY --from=build /node/node_modules ./node_modules
CMD node ./dist/main