var arr = [6, -23, 12, 45, -9, 0, 1, 4, 99];

// forEach - iterador
/*for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

/*arr.forEach(function(a,b) {
  console.log(a, b);
});*/

arr.forEach((a, b) => console.log(a, b));

var resultado = arr.filter((valor) => {
    return valor < 0
});

console.log(resultado);
console.log(arr);


var resultado2 = arr.map(function(valor) {
   //manipulación de datos
   return valor * valor; //eleva al cuadrado
}).filter((x) => x > 2000);


console.log(resultado2);
//reduce - reducir a un resultado único basado en el arreglo
var resultado3 = arr.reduce((acumulador, valor) => {
    acumulador.valor = acumulador.valor + valor;
    return acumulador;
}, {
    valor : 0
});
console.log(resultado3);

