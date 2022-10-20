# Creo la base de datos ecommerce
use ecommerce

# Creo la colección mensajes y la lleno con 10 documentos
db.createCollection("mensajes")
db.mensajes.insertMany([
    { id: 1,message: "Hola! Cómo va eso?",date: "15/10/2022, 16:05:52",user: "manuelreichel@gmail.com"},
    { id: 2,message: "Hola! Todo tranquilo y vos?",date: "15/10/2022, 16:05:56",user: "otromanuel@gmail.com"},
    { id: 3,message: "Bien bien.. acá haciendo el ejercicio del curso..",date: "15/10/2022, 16:05:59",user: "manuelreichel@gmail.com"},
    { id: 4,message: "Uhhh! Y qué onda?",date: "15/10/2022, 16:06:10",user: "otromanuel@gmail.com"},
    { id: 5,message: "No se.. recién arranque.. estoy inventando estos mensajes",date: "15/10/2022, 16:06:11",user: "manuelreichel@gmail.com"},
    { id: 6,message: "O sea que esta conversación no es real?",date: "15/10/2022, 16:06:30",user: "otromanuel@gmail.com"},
    { id: 7,message: "Cómo que no es real?",date: "15/10/2022, 16:06:40",user: "manuelreichel@gmail.com"},
    { id: 8,message: "Qué es la realidad?",date: "15/10/2022, 16:06:45",user: "otromanuel@gmail.com"},
    { id: 9,message: ":OOO",date: "15/10/2022, 16:06:55",user: "manuelreichel@gmail.com"},
    { id: 10,message: ":OOOOOO",date: "15/10/2022, 16:06:59",user: "otromanuel@gmail.com"},

])

# Creo la colección productos y la lleno con 10 documentos
db.createCollection("productos")
db.productos.insertMany([
  {id: 1, title: "Teclado", price: 120, stock: 12, thumbnail: "fotito.com/teclado"},
  {id: 2, title: "Mouse", price: 580, stock: 10,  thumbnail: "fotito.com/mouse"},
  {id: 3, title: "Monitor", price: 900, stock: 25,  thumbnail: "fotito.com/monitor"},
  {id: 4, title: "CPU", price: 1280, stock: 5, thumbnail: "fotito.com/cpu"},
  {id: 5, title: "GPU", price: 1700, stock: 24,  thumbnail: "fotito.com/gpu"},
  {id: 6, title: "RAM", price: 2300, stock: 10,  thumbnail: "fotito.com/ram"},
  {id: 7, title: "Placa madre", price: 2860, stock: 6,  thumbnail: "fotito.com/placa_madre"},
  {id: 8, title: "Disco duro", price: 3350, stock: 7,  thumbnail: "fotito.com/disco_duro"},
  {id: 9, title: "Fuente de poder", price: 4320, stock: 28, thumbnail: "fotito.com/fuente_de_poder"},
  {id: 10, title: "Gabinete", price: 4990, stock: 21, thumbnail: "fotito.com/gabinete"},
])

# Listo todos los documentos de la colección mensajes
db.mensajes.find()

# Listo todos los documentos de la colección productos
db.productos.find()

# Muestro la cantidad de documentos en la colección mensajes
db.mensajes.countDocuments()

# Muestro la cantidad de documentos en la colección productos
db.productos.countDocuments()

# Agrego un nuevo producto a la colección productos
db.productos.insertOne({id: 11, title: "Cable HDMI", price: 500, stock: 14 , thumbnail: "fotito.com/cable_hdmi"})

# Lista de los productos con precio menor a 1000
db.productos.find({price: {$lt: 1000}})

# Lista de los productos con precio entre los 1000 a 3000
db.productos.find({price: {$gt: 1000, $lt: 3000}})

# Lista de los productos con precio mayor a 3000
db.productos.find({price: {$gt: 3000}})

# Encuentra el nombre del tercer producto más barato
db.productos.find().sort({ "price": 1 }).skip(2).limit(1).toArray()[0].title

# Actualiza el stock de todos los productos a 100
db.productos.updateMany({}, {$set: {stock: 100}})

# Cambia el stock a 0 de los productos con precio mayor a 4000
db.productos.updateMany({price: {$gt: 4000}}, {$set: {stock: 0}})

# Borra los productos con precio menor a 1000
db.productos.deleteMany({price: {$lt: 1000}})

# Crea un usuario que solo pueda leer la base de datos ecommerce.
use admin

db.createUser(
  {
    user: "pepe",
    pwd: "asd456",
    roles: [ { role: "read", db: "ecommerce" } ]
  }
)