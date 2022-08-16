class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas = [...this.mascotas, mascota];
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros = [...this.libros, { nombre: nombre, autor: autor }];
  }

  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

const newUser = new Usuario(
  "Juan",
  "Lopez",
  [{ nombre: "11-22-63", autor: "Stephen King" }],
  ["Loro"]
);

// Invocación de Métodos

// Agregos dos libros
newUser.addBook("Juego de Tronos", "George R. R. Martin");
newUser.addBook("Orgullo y prejuicio", "Jane Austen");

// Agrego una nueva mascota
newUser.addMascota("Araña");

// Imprimo en pantalla información del objeto creado.
console.log("Nombre y Apellido: ", newUser.getFullName());
console.log("Tiene ", newUser.countMascotas(), "mascotas:", newUser.mascotas);
console.log("Libros:", newUser.getBookNames());
