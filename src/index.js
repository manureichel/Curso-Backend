const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const indexRouter = require("./routes/index");
const productosRouter = require("./routes/productosRoutes");

// Configuración para views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/api/productos", productosRouter);

app
  .listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  })
  .on("error", (err) => console.error(`Error en el servidor ${err}`));
