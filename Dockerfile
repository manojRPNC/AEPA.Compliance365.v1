FROM node:18-alpine AS build

WORKDIR /app

RUN npm cache clean --force
COPY package*.json ./
RUN npm install 
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
RUN npm run build-prod

FROM nginx:stable
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /app/dist/compliance365-blocks/browser /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 8080
EXPOSE 80   

CMD ["nginx", "-g", "daemon off;"]