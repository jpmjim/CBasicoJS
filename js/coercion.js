// Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
// Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
// Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

// coercion implicita
//el valor de + genera una concatenacion
var a = 4 + "7";
typeof a //es un string

var b = 4 * "7";
typeof b //es un numero

//coercion explicita
var a = 20; //numero
var c = String(a);//String es un metodo lo que hace es una coercion explicita
typeof c //el numero se convirtio en un string

var d = Number(c);//Number lo comvierte de string a numero

//Metodos de Coarcion
//Boolean
// Null
// Undefined
// Number
// BigInt
// String
// Symbol