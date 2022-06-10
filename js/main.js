/*declaracion**************************************************************/
let nombres;
let apellidos;
let nombreCompleto;

/*asignacion/inicializando*************************************************/
nombres = "JORGE CARLOS";
apellidos = "GAYOSO";
nombreCompleto = nombres+" "+apellidos;

alert(nombreCompleto+" TE DA LA BIENVENIDA A SU PRIMER ALGORITMO EN JS")
let nombreIngresado= prompt("Por favor, Ingresa tu Nombre");
let apellidoIngresado= prompt("Por favor, Ingresa tus Apellidos");

console.log("Bienvenido: "+ nombreIngresado+" "+apellidoIngresado);

alert("Bienvenido: "+ nombreIngresado);

let num1=parseInt(prompt("Ingresa el año actual"));
let num2=parseInt(prompt("Ingrese el año en que naciste"));
let edad=num1-num2;

alert("Estimado "+nombreCompleto+" actualmente tienes: "+edad + " años");

//*************************************************************************/