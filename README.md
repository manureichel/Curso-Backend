# Curso-Backend
## Entrega: CRUD Mongo DB

El archivo crudMongo.sh tiene las instrucciones utilizadas.

### Levantar un contenedor de docker para MongoDB

Crear y ejecutar el contenedor:

```console
docker run -d -p 27017:27017 --name=manuMongo mongo:latest
```

Ingreso al bash del contenedor:
```console
docker exec -it manuMongo bash
```

y luego, desde el bash del contenedor, accedo a la consola de mongo con:  
  
```console
mongosh
```

### Levantar un contenedor de docker para la base de datos MariaDB
  
```console
docker run --name coder-mariaDB -e MARIADB_DATABASE=coderhouse-db -e MARIADB_USER=manu-user -e MARIADB_PASSWORD=manu-pass -e MYSQL_ROOT_PASSWORD=root-pass -p 3306:3306 -d mariadb:latest
```

### Iniciar el servidor

* Script para correr el servidor:

`npm run start`

* Script para correr el servidor en entorno de desarrollo:

`npm run dev`

