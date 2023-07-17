#syntax=docker/dockerfile:1.2
#FROM docker.io/node:20 as builder
#WORKDIR /build
#
#COPY \
#    package.json \
#    package-lock.json \
#    ./
#RUN npm clean-install --verbose
#
#COPY ./public/ ./public/
#COPY ./src/ ./src/
#COPY \
#    tsconfig.json \
#    ./
#RUN npm run build
#
#
#FROM docker.io/node:20
#WORKDIR /app
#
#RUN npm install serve@14.2.0
#COPY --from=builder /build/build/ ./
#
#ENV NODE_ENV production
#EXPOSE 3000
#LABEL authors="erik"
#ENTRYPOINT ["npx", "serve", "."]
