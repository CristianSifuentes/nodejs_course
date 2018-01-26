
var Cliente = require("./cliente.js");


var clienteGithud = new Cliente("api.github.com","443","https");


clienteGithud.autenticarBasic("CristianSifuentes", "");

clienteGithud.get("/users/CristianSifuentes",
(respuesta) => {
  console.log(respuesta);
});