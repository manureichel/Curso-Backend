const Cart = require("../database/Cart");

const addCart = () => {
  const cart = Cart.addCart();
  return cart;
};

const deleteCart = (id) => {
  const cart = Cart.deleteCart(id);
  return cart;
};

const getAllProductsInCart = (id) => {
  const allProducts = Cart.getAllProductsInCart(id);
  return allProducts;
};

const addProduct = (body, id) => {
  const newProduct = Cart.addProduct(body, id);
  return newProduct;
};

const deleteProduct = (id, id_prod) => {
  const product = Cart.deleteProduct(id, id_prod);
  return product;
};

module.exports = {
  getAllProductsInCart,
  addProduct,
  deleteCart,
  deleteProduct,
  addCart,
};
