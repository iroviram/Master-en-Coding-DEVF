/* Paso 1: Genero un numero al azar */

// Math.random() genera un numero decimal aleatorio: ej: 0.3433523
// Al multiplicarlo por un numero entero, pues gana un entero.
// Math.floor() es una funcion que redondea hacia abajo, quitando asi los decimales
// Un equivalente es Math.ceil() que redondea hacia arriba.
/* Math.round lo que hace es lo siguiente: 
Retorna el valor 20
x = Math.round(20.49);
y 
math.ceil()
console.log(Math.ceil(.95));
expected output: 1
*/

var iaSelectionGenerator = Math.floor(Math.random() * 3);

/* Paso 2: Asignar un valor correspondiente a lo elegido por la IA (Inteligencia Artificial*/

var iaSelection;
if (iaSelectionGenerator == 0){
    iaSelection = "piedra";
} else if (iaSelectionGenerator == 1){
    iaSelection = "papel"
} else if (iaSelectionGenerator == 2){
    iaSelection = "tijera"
}

console.log("Seleccion de la IA:",iaSelection);

/* Paso 3: Solicito la opcion del usuario */
var userSelection = prompt("piedra, papel o tijera?").toLowerCase();
console.log("Seleccion del Usuario:",userSelection);

/* Paso 4: Realizo la logica del juego con comparaciones */

/* Caso: Empate */

/* Empate: Version rebuscada
if (userSelection == "piedra" && iaSelection == "piedra"){
    document.write("Empate: Ambos son piedra");
} else if (userSelection == "papel" && iaSelection == "papel") {
    document.write("Empate: Ambos son papel");
} else if (userSelection == "tijera" && iaSelection == "tijera") {
    document.write("Empate: Ambos son tijera");
}
*/

/* Empate: Version simplificada */

if (userSelection == iaSelection){
    document.write ("Empate. Ambos son " + userSelection)
}

/* Caso: Usuario usa piedra */

else if (userSelection == "piedra" && iaSelection == "papel"){
    document.write("Perdiste. Elegiste " + userSelection + " y te usaron: " + iaSelection)
} else if (userSelection == "piedra" && iaSelection == "tijera"){
    document.write("Ganaste. Elegiste " + userSelection + " y te usaron: " + iaSelection)
} 

/* Caso: Usuario usa papel */

else if (userSelection == "papel" && iaSelection == "tijera"){
    document.write("Perdiste. Elegiste " + userSelection + " y te usaron: " + iaSelection)
} else if (userSelection == "papel" && iaSelection == "piedra"){
    document.write("Ganaste. Elegiste " + userSelection + " y te usaron: " + iaSelection)
} 

/* Caso: Usuario usa tijera */

else if (userSelection == "tijera" && iaSelection == "piedra"){
    document.write("Perdiste. Elegiste " + userSelection + " y te usaron: " + iaSelection)
} else if (userSelection == "tijera" && iaSelection == "papel"){
    document.write("Ganaste. Elegiste " + userSelection + " y te usaron: " + iaSelection)
} 

/* Si no es el caso, poner algun mensaje */
else {
    document.write("Error: No reconozco tu seleccion, por favor intenta: piedra, papel o tijera")
}