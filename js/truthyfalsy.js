//Valores Truthy y Falsy
//Ejemplos en los que Boolean devuelve Falso:
Boolean(); //false
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false NotaNumber
Boolean(undefined); //false valor que no esta definido
Boolean(false); //false
Boolean(""); //false string vacio


//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean(" ")//true con un espacio
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío 
Boolean(function(){}); //Cualquier función es verdadera también
Boolean(true);