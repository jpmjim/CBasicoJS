//Scope
//=======
//Es el alcanze que tiene las variables, depende de donde se declara y inicializa la variable define su acceso.
//Scope Global es el todo, existen toda las variables, validaciones, funciones que tengamos.El scope global no tiene acceso a las variables de un scope local.

//Scope Local un pequeño universo que existe dentro del scope global.cuando inicializamos una funcion dentro de ella se va generar un scope local.Lo que existen dentro de esa funcion va tener acceso de los elementos que existen en ella.El scope local tiene acceso a las varibles del scope global.

//ejemplo
var miNombre = "Jimmy";
function nombre(){
  var miApellido = "Pecho";
  console.log(miNombre + " " + miApellido);
}
nombre (); //mandando llamar nombre la funcion toma variable miNombre del scope global
miApellido; //no se puede tomar la variable miApellido se encuentra en un scope local ya que no existe tal variable en el scope global