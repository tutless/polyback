FROM node:alpine

WORKDIR /var/www

# VOLUME ["/var/www"]

# RUN chown -R node:node /var/www  && chmod -R 0777 /var/www

COPY ./package.json ./

RUN npm install

COPY ./dist ./dist
COPY ./.env.development ./

# USER node

EXPOSE 3000

CMD ["npm","run","start:prod"]