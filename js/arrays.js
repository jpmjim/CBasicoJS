//Arrays [] Un array puede contener mas arrays dentro. Indice y elemento principales.
// Un Array es un tipo de estructura de datos (lista de datos), es un tipo objeto. Puede guardar datos distintos dentro, guarda los datos en forma de lista. Un valor que guarda mas valores dentro.
// .lenght devuelve la longitud del array.
// .push() agrega elementos al final de array.
// .pop() elimina un elemento del array.
// .unshift() agrega un elemento al array, pero lo agrega en primer lugar.
// .shift() elimina el elemento que está en el inicio del array.
// .indexOf devuelve la posición de un elemento del array.

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];//array list de frutas
console.log(frutas);
console.log(frutas.length); //conocer la longitud del array frutas
console.log(frutas[2]); //la cuenta inicia en 0 para llegar a cereza el numero 2
//METODOS mutar el array
var masFrutas = frutas.push("Uvas"); //añadir elementos al final del array en esta caso se agrgan Uvas
var ultimo = frutas.pop("Uvas"); //eliminar el ultimo elemento que existe en el array
var nuevalongitud = frutas.unshift("Uvas");//agregar el elemento al inicio del array
var borrarFruta = frutas.shift("Uvas");//eliminar el elemento que se encuentra al inicio
var posicion = frutas.indexOf("Cereza");//saber la posicion del elemto dentro del array