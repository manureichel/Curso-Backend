const Producto = require("../database/Producto");

const getAllProducts = () => {
  const allProducts = Producto.getAllProducts();
  return allProducts;
};
const getProductById = (id) => {
  const product = Producto.getProductById(id);
  return product;
};
const addProduct = (body) => {
  const newProduct = Producto.addProduct(body);
  return newProduct;
};
const updateProduct = (id, product) => {
  const producto = Producto.updateProduct(id, product);
  return producto;
};
const deleteProduct = (id) => {
  const producto = Producto.deleteProduct(id);
  return producto;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
