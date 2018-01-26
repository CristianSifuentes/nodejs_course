//Cliente HTTP 
//github.com
class Cliente {
  
   constructor(host, puerto, protocolo){
     this.host = host;
     this.puerto = puerto;
     this.protocolo = protocolo;
     if(protocolo != "http" && protocolo != "https"){
       console.log("ERROR!!!");
     }
   }


    //metodo de autenticación
    autenticarBasic(user, pass){
       this.basicAuth = new Buffer(user + ":" + pass).toString("base64");
        
    
      }

    //procesar HEADERS para mantener sesion
    procesarHeaders(){
      var headers = {
        "Accept": "*/*",
        "User-Agent": "Cliente Node.js"
      };
      if(this.basicAuth != undefined){
        headers.Authorization = "Basi c" + this.basicAuth;
      }
     return headers;
    }
     
    //Realizar peticiones HTTP para obtener información
    get(uri, callback){
        var opciones = {
          hostname: this.host,
          prot: this.puerto,
          method: 'GET',
          path: this.protocolo + "://"+ this.host + uri,
          headers: this.procesarHeaders()
        }
        this.request(opciones, callback);
    }

    //Realizar peticiones HTTP para enviar información 
    post(uri, data){

    }

    //Manejo de peticiones
    request(opciones, callback){
        //Si va ha hacer http o https
        var http = require(this.protocolo);//http p https
        var respuesta = {
          status: null,
          body: "",
          headers: null
        }

        var peticion = http.request(opciones, (canalRespuesta) => {
          canalRespuesta.on('data', (chunk) =>{
            respuesta.body += chunk;
          });

          canalRespuesta.on('end', () =>{
              respuesta.status = canalRespuesta.statusCode;
              respuesta.headers = canalRespuesta.headers;
              callback(respuesta);
         });
          

        });
        peticion.end();
    }
}

module.exports = Cliente;