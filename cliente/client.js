//Cliente HTTP 
//github.com
class Cliente {
  
   constructor(host, puerto, protocolo){
     this.host = host;
     this.puerto = puerto;
     this.protocolo = protocolo;
   }

    //Realizar peticiones HTTP para obtener información
    get(uri){

    }

    //REalizar peticiones HTTP para enviar información 
    post(uri, data){

    }
}

module.exports = Cliente;