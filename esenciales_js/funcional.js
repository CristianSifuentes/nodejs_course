//programación funcional 

//1.- Inmutabilidad (trabajamos con valores en vez de variables)

var a = [1, 2, 3, 4];
//a[0] = 10; // no es funcional

var b = a.map((x) => x * 2);
console.log(a, b);

//2.- Funciones como parametros, funciones que regresan funciones
//- reutilización de código
var suma = function(a, b) { return a + b };

var suma2 = function(a) {
   return function(b){
       return a + b;
   }
};
var sumar10 = suma2(10);
var sumar11 = suma(11);

var f = function(callback){
    //ejecución de una secuencia
    if(typeof callback == 'function')
    {
        return callback()
    }
}

// 3.- En programación funciona siempre se debe regresar un resultado único


console.log(suma(2, 2), sumar10(7));
