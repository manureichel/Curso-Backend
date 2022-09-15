const productosService = require("../services/productosService");

const getAllProducts = (req, res) => {
  const allProducts = productosService.getAllProducts();
  res.status(200).send({ data: allProducts });
};

const getProductById = (req, res) => {
  const product = productosService.getProductById(req.params.id);

  product
    ? res.send({ data: product })
    : res.status(404).send({ error: "Producto no encontrado" });
};

const addProduct = (req, res) => {
  const { body } = req;
  const product = productosService.addProduct(body);
  // res.status(200).send({ ...product });      // Antes enviaba el producto, para el desafío de template engines no.
  res.status(200);
};

const updateProduct = (req, res) => {
  const product = productosService.updateProduct(req.params.id, req.body);

  product
    ? res.status(200).send(`Modifico el producto con id ${req.params.id}`)
    : res.status(404).send({ error: "Producto no encontrado" });
};

const deleteProduct = (req, res) => {
  const product = productosService.deleteProduct(req.params.id);
  product
    ? res.status(200).send(`Elimino el producto con id ${req.params.id}`)
    : res.status(404).send({ error: "Producto no encontrado" });
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
