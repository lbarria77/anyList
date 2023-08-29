<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Dev

1. Clonar el proyecto

2. Copiar el `.env.template` y renombrar a `.env`

3. Ejecutar

```
yarn install
```

4. Levantar la base de datos (Docker Desktop needed)

```
docker-compose up -d
```

5. Levantar el backen de Nest

```
yarn start:dev
```

6. Apollo Server

```
localhost:3000/graphql
```

7. Ejecutar la **"Mutation"** `executeSeed`, para llenar la base de datos de informacion
