
var Cliente = require("./cliente.js");


var clienteGithud = new Cliente("api.github.com","443","https");

clienteGithud.get("/users/jorgue",
(respuesta) => {
  console.log(respuesta);
});