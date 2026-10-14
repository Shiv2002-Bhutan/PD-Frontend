FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_API_URL=/
ARG VITE_WHATSAPP_NUMBER
ARG VITE_FACEBOOK_LINK
ARG VITE_CONTACT
ARG VITE_GMAIL

ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_WHATSAPP_NUMBER=${VITE_WHATSAPP_NUMBER}
ENV VITE_FACEBOOK_LINK=${VITE_FACEBOOK_LINK}
ENV VITE_CONTACT=${VITE_CONTACT}
ENV VITE_GMAIL=${VITE_GMAIL}

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
