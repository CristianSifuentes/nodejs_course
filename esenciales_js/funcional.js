//programación funcional 

//1.- Inmutabilidad (trabajamos con valores en vez de variables)

var a = [1, 2, 3, 4];
//a[0] = 10; // no es funcional

var b = a.map((x) => x * 2);
console.log(a, b);