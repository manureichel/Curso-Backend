const { DATA_SOURCE, MONGO_DB, FIREBASE_FILENAME } = require("../../config");

const mongoose = require("mongoose");
const path = require("path");

const { CartDaoFS } = require("./daos/cart/CartDaoFS");
const { ProductsDaoFS } = require("./daos/products/ProductsDaoFS");
const { ProductsDaoMongoDB } = require("./daos/products/ProductsDaoMongoDB");
const { CartDaoMongoDB } = require("./daos/cart/CartDaoMongoDB");
const { ProductsDaoFirebase } = require("./daos/products/ProductsDaoFirebase");
const { CartDaoMongoFirebase } = require("./daos/cart/CartDaoMongoFirebase");

let productsStore;
let cartStore;

// La idea acá es que en el .env se defina el camino de conexión

(async () => {
  console.log("Configuración tomada:", DATA_SOURCE);

  switch (DATA_SOURCE) {
    case "FS":
      productsStore = new ProductsDaoFS();
      cartStore = new CartDaoFS();

      console.log("[FS] -> Load json file");
      break;

    case "MONGO":
      productsStore = new ProductsDaoMongoDB();
      cartStore = new CartDaoMongoDB();

      console.log("Conectando... ", MONGO_DB);
      await mongoose.connect(MONGO_DB);
      console.log("Conectado a MongoDB");

      await productsStore.updateMaxId();
      break;

    case "FIREBASE":
      const admin = require("firebase-admin");
      const serviceAccount = require(path.relative(
        __dirname,
        FIREBASE_FILENAME
      ));

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log("Conectado a Firebase");

      const db = admin.firestore();

      productsStore = new ProductsDaoFirebase(db);
      cartStore = new CartDaoMongoFirebase(db);

      // Get Max Id
      await productsStore.updateMaxId();
      break;

    default:
      throw new Error("Error en DATA_SOURCE");
      break;
  }
})();

module.exports = { productsStore, cartStore };
