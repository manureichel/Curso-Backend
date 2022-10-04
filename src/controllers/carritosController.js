const carritosService = require("../services/carritosService");

const addCart = (req, res) => {
  const cart = carritosService.addCart();

  res.status(200).send({ ...cart });
};

const deleteCart = (req, res) => {
  const product = carritosService.deleteCart(req.params.id);
  product
    ? res.status(200).send(`Elimino el carrito con id ${req.params.id}`)
    : res.status(404).send({ error: "Carrito no encontrado" });
};

const getAllProductsInCart = (req, res) => {
  const allCarts = carritosService.getAllProductsInCart(req.params.id);
  allCarts
    ? res.send({ data: allCarts })
    : res.status(404).send({ error: "Carrito no encontrado" });
};

const addProduct = (req, res) => {
  const { body } = req;
  const product = carritosService.addProduct(body, req.params.id);
  res.status(200).send({ ...product });
};

const deleteProduct = (req, res) => {
  const product = carritosService.deleteProduct(
    req.params.id,
    req.params.id_prod
  );
  product
    ? res
        .status(200)
        .send(
          `Elimino el producto con id ${req.params.id_prod} del carrito con id ${req.params.id}`
        )
    : res.status(404).send({ error: "Producto no encontrado" });
};

module.exports = {
  getAllProductsInCart,
  addCart,
  deleteCart,
  addProduct,
  deleteProduct,
};
