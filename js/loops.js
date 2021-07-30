//LOOPS O CICLOS
//es la amenra rapida y sencilla de hacer que una tarea pude repetirse varias veces sin la necesidad que hacerlo de forma manual. mientras se cumpla una condicion la tarea seguira repitiendose.
// Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

//     for - recorre un bloque de código varias veces

//     for/in - recorre las propiedades de un objeto

//     for/of - recorre los valores de un objeto iterable

//     while - recorre un bloque de código mientras se cumple una condición específica

//     do/while - también recorre un bloque de código mientras se cumple una condición específica

//LOOP DE FOR
//=============
//ejemplo1
var estudiantes = ["Maria", "Segio", "Rosa", "Daniel"];
function saludarEstudiante(estudiante){ //esta es la tarea que realizara el loop
  console.log(`Hola, ${estudiante}`);
}
//loop
for (var i=0; i < estudiantes.length; i++){ //el for siempre ocupa una variable i (segun sintaxis)
  saludarEstudiante(estudiantes[i]);
}

//ejemplo 2
var estudiantes = ["Maria", "Segio", "Rosa", "Daniel"];
function saludarEstudiante(estudiante){ //esta es la tarea que realizara el loop
  console.log(`Hola, ${estudiante}`);
}
//loop
for(var estudiante of estudiantes){ //utlizamos el singular del plural
  saludarEstudiante(estudiante);
}

//LOOP DE WHILE
//===============
var estudiantes = ["Maria", "Segio", "Rosa", "Daniel"];
function saludarEstudiante(estudiante){
  console.log(`Hola, ${estudiante}`);
}
//loop
while(estudiantes.length > 0){ //mientras lo que esta dentro del while es verdad seguira ejecutandose
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiante(estudiante);
}