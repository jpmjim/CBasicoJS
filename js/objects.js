//OBJETOS
//======= JS esta diseñado en un paradigma de objetos.Los obejtos se manejan con propiedades.es la combinacion de palabras clave con valores.
// Solo con el ánimo de aclarar un detalle. JS no fue diseñado dentro del paradigma orientado a objetos (a pesar de que esta basado en Java).
// Originalmente era un lenguaje diseñado solo para que fuera posible interactuar con el HTML de las páginas web de los 90s, (es decir un lenguaje de scripting liviano y sencillo).
// Lo que paso con JS es que a través del tiempo y debido a su entrada en auge de unos años para aca, se han ido incluyendo caracteristicas de diversos paradigmas de programación (si, también programacion orientada a objetos) en su forma de funcionar. Pero para ser sinceros JS lo que tiene es una serie de palabras clave que le permiten emular la programación orientada a objetos.
// O en palabras de la MDN: “Las clases de JavaScript, introducidas en ECMAScript 2015, son principalmente azúcar sintáctica sobre la herencia existente basada en prototipos de JavaScript. La sintaxis de clase no introduce un nuevo modelo de herencia orientado a objetos a JavaScript.” Classes en JS.
// Sin embargo existen herramientas que si permiten trabajar JS dentro del paradigma de orientación a objetos de forma mucho más adecuada, por ejemplo typescriptlang.

//SINTAXIS 
var objeto = {}; //esto es un objeto
//ejemplo
var miAuto = { //este es un objeto con tres propiedades
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2021
}
console.log (miAuto);

//acceder especificamente valores de un objeto
miAuto.marca;

//ejemplo con funcion METODO DE OBJETOS asi como engresar al metodo de un objeto.
var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2021,
  detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.annio}`); //this es una variable que hace referencia al objeto
  }
};
miAuto.detalleDelAuto();

//OBJETO DE FORMA AUTOMATICA (funcion constructura)
//==============================
function auto (marca, modelo, annio){ //funcion constructura
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
//utlizaremos un el operador "new" lo que hace es generar una nueva instancia de la funcion constructura, y una instancia es generar un objeto que deriva de otro objeto.
var autoNuevo = new auto("Tesla", "Model 3", 2021);
var autoNuevo2 = new auto("Tesla", "Model X",2018);
var autoNuevo3 = new auto("Toyota", "Corolla",2020);

console.log(autoNuevo);

//RETO DE LOS AUTOS 
//ejemplo 1 ejecutar en console
function auto (MARCA, MODELO, ANNIO){
  this.marca = MARCA;
  this.modelo = MODELO;
  this.annio = ANNIO;
}
var autos = [];
for(let i = 0 ; i < 30 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}

//ejemplo 2 
var brands = ['Toyota', 'Mazda', 'Renault']
var cars = []

function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

for (var i = 0; i < 30; i++)
    cars.push(new Car(brands[Math.floor(i/10)], `Serie ${i % 10}`, 1999 + i % 10))

console.log(cars)