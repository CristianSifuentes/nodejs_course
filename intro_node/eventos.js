const Eventos = require('events');


class Carro extends Eventos {
    constructor(){
        super();
        this.contador = 0;
    }


    Arrancar(){
        console.log("El auto arranca");
        this.emit('arranco',this.contador);
        this.contador +=1;
    }
}

var carro1 = new Carro();

//Para escuechar eventos, suscribirnos con el método on

carro1.on('arranco', function(c){
    console.log(c, "El evento fue escuechado, y la secuencia ejecutando");
});

carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();