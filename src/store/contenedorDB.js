class ContenedorDB {
  // Constructor de la clase.
  constructor(options, tableName) {
    this.tableName = tableName;
    this.knex = require("knex")(options);
  }

  // Guarda el objeto que se pasa por parametro.
  async save(Object) {
    const res = await this.knex(this.tableName).insert(Object);
    const newObject = await this.knex
      .from(this.tableName)
      .select("*")
      .where("id", `${res}`);
    return newObject[0];
  }

  // Devuelve el objeto que tenga el id que se pasa por parametro.
  async getById(id) {
    const objRaw = await this.knex
      .from(this.tableName)
      .select("*")
      .where("id", `${id}`);
    let obj = undefined;
    if (objRaw.length > 0) obj = JSON.parse(JSON.stringify(objRaw[0]));
    return obj;
  }

  // Devuelve todos los objetos del archivo.
  async getAll() {
    const objRaw = await this.knex.from(this.tableName).select("*");
    const obj = JSON.parse(JSON.stringify(objRaw));
    return obj;
  }

  // Elimina el objeto que tenga el id que se pasa por parametro.
  async deleteById(id) {
    const objRaw = await this.knex
      .from(this.tableName)
      .where("id", `${id}`)
      .del();
    if (objRaw) return `Elemento borrado`;
    else return `No se puede modificar los datos`;
  }

  // Elimina todos los objetos del archivo.
  async deleteAll() {
    const objRaw = await this.knex.from(this.tableName).del();
    return `Elementos borrados: ${objRaw}`;
  }
}
module.exports = { ContenedorDB };
