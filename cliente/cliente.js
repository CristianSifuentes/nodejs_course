//Cliente HTTP 
//github.com
class Cliente {
  
   constructor(host, puerto, protocolo){
     this.host = host;
     this.puerto = puerto;
     this.protocolo = protocolo;
     if(protocolo != "http" && protocolo != "https"){
       console.log("ERROR!!!")
     }
   }


    //procesar HEADERS para mantener sesion
    procesarHeaders(){
      var headers = {
        "Accept": "*/*",
        "User-Agent": "Cliente Node.js"
      };
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
    }
}

module.exports = Cliente;