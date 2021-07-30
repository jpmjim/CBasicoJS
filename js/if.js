//Condicional if
//=================
if (true){ //se cumpla tiene que ser verdadero imprimera hola
  console.log("Hola")
} else { //si es falso se ejecuta else imprimira soy falso
  console.log("soy falso")
}

var edad = 5;

if (edad === 18){
  console.log("Puedes votar, será tu 1ra votación");
} else if (edad > 18){//seguir validando, podemos usar else if varias veces
  console.log("Puedes votar de nuevo");
} else {
  console.log("Aun no puedes votar");
}

//Operador ternario tambien es como un if
condition ? true :false; //para validar si verdadero o falso en una solo linea
//ejemplo
var numero = 2;
var resultado = numero ===1 ? "si soy un uno": "no soy uno";
console.log(resultado);


//juego de piedra papel y tijera
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op2) //el usuario GANO con Piedra```
