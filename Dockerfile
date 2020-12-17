# Nginx Base image:
FROM nginx:alpine

# Copy contents into nginx root dir:
COPY . /usr/share/nginx/html
