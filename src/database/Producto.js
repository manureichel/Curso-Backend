const DB = require("./productosData");

const getAllProducts = () => {
  return DB;
};

const getProductById = (id) => {
  const product = DB.find((product) => product.id == id);
  return product;
};

const addProduct = (product) => {
  let maxId = 0;
  DB.forEach((product) => {
    if (product.id > maxId) {
      maxId = product.id;
    }
  });

  product = { id: maxId + 1, ...product };
  DB.push(product);
  return product;
};

const updateProduct = (id, UpdatedProduct) => {
  const index = DB.findIndex((product) => product.id == parseInt(id));
  if (index == -1) {
    return false;
  } else {
    DB[index].title = UpdatedProduct.title;
    DB[index].price = UpdatedProduct.price;
    DB[index].thumbnail = UpdatedProduct.thumbnail;
    return true;
  }
};

const deleteProduct = (id) => {
  const index = DB.findIndex((product) => product.id == parseInt(id));
  if (index == -1) {
    return false;
  } else {
    DB.splice(index, 1);
    return true;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
