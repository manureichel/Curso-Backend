const configMariaDb = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "manu-user",
    password: "manu-pass",
    database: "coderhouse-db",
  },
};

const configSQlite3 = {
  client: "sqlite3",
  connection: {
    filename: "./messages.sqlite",
  },
  useNullAsDefault: true,
};

module.exports = {
  configMariaDb,
  configSQlite3,
};
