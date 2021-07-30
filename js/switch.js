//Switch
//Tambien es una forma de validar de generar una condicion es algo diferente lo que es el IF pero hace justamente lo mismo va validar ciertas cosas, la sintaxis si es diferente. Funciona por casos, si el caso es verdad va pasar esa parte, si no se puede generar otros casos.
// Principalmente se usa cuando tenemos multiples casos a evaluar y evitar el uso de multiples "if else"
var numero = 1;

switch (numero){ //esta echo para validar casos
  case 1:
    console.log("Soy uno!");
    break;//rompe la validacion 
  case 10:
    console.log("Soy un 10!");
    break;
  case 100:
    console.log("Sou un 100!");
    break;
  default: //entra en negativo
    console.log("No soy nada");
}

//ejecutar en navegador juego de piedra papel y tijera
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}

if (false === !true) {
  console.log(false == true) 
} else { 
  console.log(true === !false) 
}
//retorna true