const express = require("express");
const { Server: HTTPServer } = require("http");
const createError = require("http-errors");
const app = express();
const port = 3000 || process.env.PORT;

const indexRouter = require("./routes/index");
const productosRouter = require("./routes/productosRoutes");
const carritosRouter = require("./routes/carritosRoutes");

const httpServer = new HTTPServer(app);

app.use(express.json());

app.use("/", indexRouter);
app.use("/api/productos", productosRouter);
app.use("/api/carritos", carritosRouter);

app.use(function (next) {
  next(createError(404));
});

httpServer
  .listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  })
  .on("error", (err) => console.error(`Error en el servidor ${err}`));
