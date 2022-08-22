const { promises: fs } = require("fs");

class Contenedor {
  // Constructor de la clase.
  constructor(fileName) {
    this.fileName = fileName;
    this.lastId = 0;
  }

  // Guarda el objeto que se pasa por parametro.
  async save(Object) {
    let data = await this.getAll();
    const newObject = { id: this.lastId + 1, ...Object };
    data = [...data, newObject];

    await fs.writeFile(this.fileName, JSON.stringify(data, null, 2));
    console.log("Se guardo archivo", this.fileName);
    return newObject;
  }

  // Devuelve el objeto que tenga el id que se pasa por parametro.
  async getById(id) {
    let data = await this.getAll();
    const filteredById = data.find((item) => item.id === id);
    return filteredById ? filteredById : null;
  }

  // Devuelve todos los objetos del archivo.
  async getAll() {
    try {
      let rawData = await fs.readFile(this.fileName, "utf8");
      let data = JSON.parse(rawData);
      let lastId = [0, ...data.map((item) => item.id)];
      this.lastId = Math.max(...lastId);
      console.log(`Se leyo archivo ${this.fileName}, lastId: ${this.lastId}`);
      return data;
    } catch (error) {
      if (error.code === "ENOENT") {
        // Error code ENOENT = no se enceuentra el archivo, entonces lo crea y devuelve un array vacio.
        try {
          await fs.writeFile(this.fileName, JSON.stringify([]));
          console.log(`Se creo archivo ${this.fileName}`);
          return [];
        } catch (error) {
          console.log("Hubo un error al crear el archivo: ", error.code);
        }
      }
    }
  }

  // Elimina el objeto que tenga el id que se pasa por parametro.
  async deleteById(id) {
    let data = await this.getAll();
    data = data.filter((item) => item.id !== id);
    try {
      await fs.writeFile(this.fileName, JSON.stringify(data, null, 2));
      console.log("se eliminó el dato", id);
    } catch (error) {
      return `No se puede eliminar dato ${id}`;
    }
  }

  // Elimina todos los objetos del archivo.
  async deleteAll() {
    try {
      await fs.writeFile(this.fileName, JSON.stringify([]));
    } catch (error) {
      return `No se puede eliminar`;
    }
  }
}

// Test

(async () => {
  const productos = new Contenedor("./products.txt"); // Creo una nueva instancia de la clase Contenedor.
  let output = "";

  // Se crean cuatro nuevos productos en el arreglo.

  output = await productos.save({
    title: "Primer Producto",
    price: 99.9,
    thumbnail: "https://www.imgsource.com/img_primero.jpg",
  });
  console.log(output);

  output = await productos.save({
    title: "Segundo Producto",
    price: 42.17,
    thumbnail: "https://www.imgsource.com/img_segundo.jpg",
  });
  console.log(output);

  output = await productos.save({
    title: "Tercer Producto",
    price: 24.15,
    thumbnail: "https://www.imgsource.com/img_tercero.jpg",
  });
  console.log(output);

  output = await productos.save({
    title: "Cuarto Producto",
    price: 147.7,
    thumbnail: "https://www.imgsource.com/img_cuarto.jpg",
  });
  console.log(output);

  // Se obtiene el producto con id: 3
  output = await productos.getById(3);
  console.log("getById(3) -> ", output);

  // Se obtienen todos los productos
  output = await productos.getAll();
  console.log("Todos los productos:", output);

  // Se elimina el producto con id: 2
  output = await productos.deleteById(2);

  // Se muestran todos los productos luego del borrado (Se espera un array en el que no exista el producto con id: 2)
  output = await productos.getAll();
  console.log("Todos los productos:", output);
})();
