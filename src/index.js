const express = require("express");
const app = express();
const port = 3000;

const productosRouter = require("./routes/productosRoutes");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/productos", productosRouter);

app
  .listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  })
  .on("error", (err) => console.error(`Error en el servidor ${err}`));
