const DB = require("./cartData");

const getAllProductsInCart = (id) => {
  console.log("buscando carrito con id: " + id);
  console.log(DB);
  const cart = DB.find((cart) => cart.id == id);

  if (cart) return cart.productos;
  else return false;
};

const addCart = () => {
  let maxId = 0;
  DB.forEach((cart) => {
    if (cart.id > maxId) {
      maxId = cart.id;
    }
  });

  cart = { id: maxId + 1, timeStamp: Date.now(), productos: [] };

  DB.push(cart);
  return cart;
};

const addProduct = (product, id) => {
  console.log(`Agrego producto ${product.nombre} al carrito con id ${id}`);
  const cart = DB.find((cart) => cart.id == id);
  if (cart) {
    cart.productos.push(product);
    return cart;
  } else return false;
};

const deleteCart = (id) => {
  const index = DB.findIndex((cart) => cart.id == parseInt(id));
  if (index == -1) {
    return false;
  } else {
    DB.splice(index, 1);
    return true;
  }
};

const deleteProduct = (id, id_prod) => {
  const cart = DB.find((cart) => cart.id == id);
  if (cart) {
    const index = cart.productos.findIndex((product) => product.id == id_prod);
    if (index == -1) {
      return false;
    } else {
      cart.productos.splice(index, 1);
      return true;
    }
  } else return false;
};

module.exports = {
  addProduct,
  deleteCart,
  getAllProductsInCart,
  addCart,
  deleteProduct,
};
