//¿Qué es Hoisting?
//En JavaScript, las declaraciones (por ejemplo, de variables o funciones) se mueven al principio de su scope o ámbito. Este comportamiento se conoce como hoisting y es muy importante tenerlo en cuenta a la hora de programar para prevenir posibles errores.

//Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
//La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.
//Es cuando las variables y funciones se declaran antes que se procese cualquier tipo de código, solo pasa con la version anterioes de javascript ecmasscript 5, palabras clave variable y funcion.
var miNombre; //declarar
miNombre = "jimmy"; //inicializar
var miNombre = "jimmy" // declarando y inicializando la variable

//ejemplo 1
console.log(miNombre); //el console.log es una funcion que nos da el navegador nos ayuda imprimir en la consola los resultados.
var miNombre = "jimmy"; //resultado nosda undefined

//ejemplo 2
hey();
function hey(){
  console.log("hola " + miNombre);
}
var miNombre = "Jimmy"