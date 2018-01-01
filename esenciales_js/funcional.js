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

console.log(suma(2, 2), suma2(2)(3));
