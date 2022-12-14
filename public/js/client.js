let socket = io();

let productsData = [];
let msgData = [];

let templates = {
  productsList: {
    url: "./resources/views/products.hbs",
    template: "",
  },
  chatBox: {
    url: "./resources/views/chat.hbs",
    template: "",
  },
  messagesList: {
    url: "./resources/views/msgs.hbs",
    template: "",
  },
};

const loadTempletes = async () => {
  for (key in templates) {
    let template = await fetch(templates[key].url);
    templates[key].template = await template.text();
  }
  console.log(templates);
};

loadTempletes();

socket.on("products-channel", (data) => {
  console.log("Data recibida por products-channel: ", data);
  productsData = data;

  let renderProducts = Handlebars.compile(templates.productsList.template);
  document.getElementById("products-list").innerHTML = renderProducts({
    products: productsData,
    listExists: productsData.length > 0,
  });
});

socket.on("newProduct-channel", (data) => {
  console.log("Nuevo Producto Recibido");
  productsData = [...productsData, data];

  let renderProducts = Handlebars.compile(templates.productsList.template);
  document.getElementById("products-list").innerHTML = renderProducts({
    products: productsData,
    listExists: productsData.length > 0,
  });
});

socket.on("newMessage-channel", (data) => {
  console.log("Nuevo msj");

  console.log("msgData", data);
  msgData = [...msgData, data];
  renderMessages(msgData);
});

// formulario de producto
const formProduct = document.getElementById("form-product");
formProduct.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    title: formProduct.elements["title"].value,
    price: formProduct.elements["price"].value,
    thumbnail: formProduct.elements["thumbnail"].value,
  };

  // Si retorna el objeto creado, lo agrego al array
  const res = await fetch("/api/productos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newProduct = await res.json();
  console.log(newProduct);

  socket.emit("newProduct-channel", newProduct);
  formProduct.reset();
});

//formulario del chat
let formChat;
const onSubmitMsg = (event) => {
  event.preventDefault();

  const data = {
    message: formChat.elements["inputMsg"].value,
    date: new Date().toLocaleString(),
    user: formChat.dataset.user,
  };
  console.log("Nuevo msj: ", data);
  socket.emit("newMessage-channel", data);
  formChat.reset();
};

const inputEmail = document.getElementById("inputEmail");
inputEmail.addEventListener("change", (event) => {
  let email = event.target.value;
  if (email.indexOf("@") >= 0) {
    let renderChat = Handlebars.compile(templates.chatBox.template);
    document.getElementById("chat-box").innerHTML = renderChat({
      userEmail: email,
    });
    renderMessages([]);
    formChat = document.getElementById("form-chat");
    formChat.addEventListener("submit", onSubmitMsg);
  }
});

const renderMessages = (messages) => {
  let renderMessagesList = Handlebars.compile(templates.messagesList.template);
  document.getElementById("message-list").innerHTML = renderMessagesList({
    messages: messages,
    msgExists: messages.length > 0,
  });

  console.log({
    data: messages,
    msgExists: messages.length,
  });
};
