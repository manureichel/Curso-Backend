# Curso-Backend

## Entrega: Manejo de Archivos
Se escribe una clase contenedor con los siguientes métodos:

``` js
save(Object): Number
```
Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.


``` js
getById(Number): Object
```
Recibe un id y devuelve el objeto con ese id, o null si no está.

``` js
getAll(): Object[] 
```
Devuelve un array con los objetos presentes en el archivo.

``` js
deleteById(Number): void
```
Elimina del archivo el objeto con el id buscado.

``` js
deleteAll(): void
```
Elimina todos los objetos presentes en el archivo.

Además se realiza un test agregando productos y manipulando el archivo con los métodos que incorpora la clase. 