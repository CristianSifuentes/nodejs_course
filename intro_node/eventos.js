const Eventos = require('events');


class Carro extends Eventos {
    constructor(){
        super();
    }


    Arrancar(){
        console.log("El auto arranca");
    }
}

var carro1 = new Carro();

//Para escuechar eventos, suscribirnos con el método on

carro1.on('arranco', function(){
    console.log("El evento fue escuechado, y la secuencia ejecutando");
});

carro1.Arrancar();