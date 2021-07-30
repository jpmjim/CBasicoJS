//Métodos del Arrays
//=================================
//Metodo de recorrido como obtener propiedades especificas de los objetos que estan dentro del array.
//ejecutarlos en console
var articulos = [ //array con objetos dentro
  {nombre: "Bici", costo: 3000},
  {nombre: "Tv", costo: 2500},
  {nombre: "Libro", costo: 320},
  {nombre: "Celular", costo: 10000},
  {nombre: "Laptop", costo: 20000},
  {nombre: "Teclado", costo: 500},
  {nombre: "Audifonos", costo: 1700},
];

//filter nos ayuda validar si es falso o verdadero y genera un nuevo array.
//Crea un nuevo array con los elementos del array que se paso como parametro y que cumpla con la condicion definida.
var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500;
});

articulosFiltrados;

//map ayuda mapear ciertos articulos, genera un nuevo array
//crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos.
var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre;
});
nombreArticulos;

//Recorriendo Arrays con .find(), .forEach() y .some()
//=======================================================
//find() : Devuelve el primer elemento del array que cumpla con la condición dada.
//Retorna el primer elemento de un array que cumple con una condicion definida en un nuevo array.
var encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre === "Laptop";
});
encuentraArticulo;

//foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array, solo hace un filtrado no cre aun nuevo array
//ejecuta la funcion indicada una vez por cada elemento del array.
articulos.forEach(function(articulo){
  console.log(articulo.nombre);
});

//some() : Comprueba si al menos un elemento del array cumple con la condición que le damos,genera un nuevo array, solo nos hace una validacion de verdadero o falso (true o false)
 var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
 });
 articulosBaratos;

//  metodo .push()
// El método .push() nos permite agregar uno o más elementos al final de un array.
// A continuación veremos un ejemplo aplicado con un array que contiene números:
// Array de números
let numArray = [1,2,3,4,5]
//Funcion
function newNum(){
  //Agrego elementos
  numArray.push(6,7);
  //Reviso el array que ahora tiene los números agregados
  console.log(numArray);
}
//Ejecuto la funcion
newNum()

//Como podemos ver, al momento de ejecutar la función se agregan los números 6 y 7 al array.
//Ahora revisemos un ejemplo con strings:
//Array inicial
let txtArray = ["Ana", "Juan", "Diego", "Lautaro"];
//Funcion
function addCharacters(){
  //Agrego elementos
  txtArray.push("Chris", "María");
  //Reviso el array nuevos elementos
  console.log(txtArray);
}
addCharacters();
// Como podemos ver, agregamos dos cadenas de strings al ejecutar la función donde tenemos txtArray.push(). Es decir, indico el array al que voy agregar elementos, uso el método .push(), y dentro de .push() indico los elementos que quiero agregar al string. Finalmente, el console.log() lo uso para revisar en la consola si esto sucedió o no.

//metodo .shift()
// Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
//Creamos el array
let array = [1,2,3,4,5];
console.log(array);
// Aplicamos .shift()
let shiftArray = array.shift();
//Revisamos. El output debe de ser [2,3,4,5]
console.log(array);
// Como vemos, luego de aplicar .shift() se eliminó exitosamente el primer elemento del array. ¿Y si quisiéramos eliminar el último elemento? Pasemos al bonus track de esta clase 

// Bonus Track POP
//=============
// Si ya entendiste cómo funciona .shift() aplicar .pop() te será pan comido 🍞. El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Usemos el mismo ejemplo pero usando este método.
//Creamos el array
let array = [1,2,3,4,5];
console.log(array);
// Aplicamos .pop()
let shiftArray = array.pop();
//Revisamos. El output debe de ser [1,2,3,4]
console.log(array)