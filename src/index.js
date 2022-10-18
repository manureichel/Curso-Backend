const express = require("express");
const { Server: HTTPServer } = require("http");
const { Server: SocketServer } = require("socket.io");
const app = express();
const path = require("path");
const port = 3000;

const indexRouter = require("./routes/index");
const productosRouter = require("./routes/productosRoutes");

const httpServer = new HTTPServer(app);
const io = new SocketServer(httpServer);

const { mensajes, productos } = require("./store/indexContenedor");
const Producto = require("./database/Producto");

// Configuración para views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/api/productos", productosRouter);

let messagesContainer = [];

io.on("connection", async (socket) => {
  const products = await productos.getAll();
  socket.emit("products-channel", products);

  socket.on("newProduct-channel", async (data) => {
    console.log("voy a mandar:", data);
    await productos.save(data);
    io.emit("newProduct-channel", data);
  });

  socket.on("newMessage-channel", async (data) => {
    console.log("Recibido: ", data);
    await mensajes.save(data);
    messagesContainer = [...messagesContainer, data];
    io.emit("newMessage-channel", data);
  });
});

httpServer
  .listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  })
  .on("error", (err) => console.error(`Error en el servidor ${err}`));
