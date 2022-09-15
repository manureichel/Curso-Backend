# Curso-Backend

## Entrega: Template Engines

El template que me pareció más interesante fue Pug, sobre todo por como se reduce bastante el código desde un HTML convencional. Pero es el que noto sería más complicado acostumbrarse a utilizar. Si tuviera que hacer algo ahora mismo con template engines, usaría Handlebars, por ser el más parcido a la sintaxis de HTML, y viniendo de Front End generaría más rápido plantillas. Pero espero la verdad no tener que hacerlo 😭.

### Cambio de plantillas

Para cambiar de plantillas, en el archivo principal `index.js` se reemplaza el segundo argumento de la siguiente función por `hbs`, `pug` o `ejs` según corresponda.

```javascript
app.set("view engine", "hbs");
```

### Iniciar el servidor

* Se implementa un script para correr el servidor en entorno de desarrollo:

`npm run dev`

