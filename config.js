const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  DATA_SOURCE: process.env.DATA_SOURCE,
  MONGO_CONN: process.env.MONGO_CONN,
  MONGO_DB: process.env.MONGO_DB,
  FIREBASE_FILENAME: process.env.FIREBASE_FILENAME,
};
