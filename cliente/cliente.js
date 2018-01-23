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
    get(uri){

    }

    //REalizar peticiones HTTP para enviar información 
    post(uri, data){

    }
}

module.exports = Cliente;