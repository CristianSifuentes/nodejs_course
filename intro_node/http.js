var https = require('https');

var opciones = {
    port:443, 
    hostname: "google.com",
    method: "get",
    path: "https://www.google.com.mx/"
}
var req = https.request(opciones, (respuesta) => {
  // la 'respuesta' es un CANAL de Lectura
  respuesta.on('data', (chunk) => {
     console.log(chunk.toString());
  });
  respuesta.on('end', () => {
    console.log(respuesta.headers);
  });
});

req.end();
console.log("Petición lanzada");