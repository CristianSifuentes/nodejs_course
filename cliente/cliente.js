//Cliente HTTP 
//github.com
class Cliente {
  
   constructor(host, puerto, protocolo){
     this.host = host;
     this.puerto = puerto;
     this.protocolo = protocolo;
   }


    //procesar HEADERS para mantener sesion
    procesarHeaders(req){
     return req;
    }
     
    //Realizar peticiones HTTP para obtener información
    get(uri, callback){
        var opciones = {
          hostname: this.host,
          prot: this.puerto,
          method: 'GET',
          path: this.protocolo + "://"+ this.host + uri
        }
    }

    //Realizar peticiones HTTP para enviar información 
    post(uri, data){

    }

    //Manejo de peticiones
    request(opciones, callback){

    }
}

module.exports = Cliente;