// Ejercicios IF-ELSE

/* Ej 1
Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
*/

var bellisimo = prompt("Ejercicio 1. \nEres bellisimo/a? si o no");

if (bellisimo == "si"){
    document.write("Ciertamente")
} else if (bellisimo == "no") {
    document.write("No te creo")
}  else {
    document.write("Intenta respondiendo si o no")
}

/* Ej 2
Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm
*/
document.write("<br>")

var numero2 = parseInt(prompt("Ejercicio 2. \nFavor de ingresar un numero divisible entre 2:"));

if (numero2 % 2 === 0){
    document.write(numero2 + " es divisible entre 2")
} else {
    document.write(numero2 + " no es divisible entre 2")
}

/* Ej 3
Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
*/
document.write("<br>")

var numeroPar = parseInt(prompt("Ejercicio 3. \nFavor de ingresar  un numero par:"));

if (numeroPar % 2 === 0){
    alert(numeroPar + " es un numero par!")
    document.write(numeroPar + " es un numero par!")
} else {
    alert(numeroPar + " no es un numero par!")
    document.write(numeroPar + " no es un numero par!")
}

/* Ej 4
Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
*/
document.write("<br>")

var numeroGanador1000 = parseInt(prompt("Ejercicio 4. \nIngresa tu numero de cliente y descubre si eres el ganador!"))

if (numeroGanador1000 == 1000){
    document.write("Ganaste un premio!")
} else {
    document.write("Lo sentimos, sigue participando")
}

/* Ej 5
Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
*/
document.write("<br>")

var numeroUno = parseInt(prompt("Ejercicio 5. \nIngresa 2 numeros cualquiera, y te dire cual es el menor. Cual es el primer numero?"))
var numeroDos = parseInt(prompt("Cual es el segundo?"))

if (numeroUno < numeroDos){
    document.write(numeroUno + " es el numero menor")
} else {
    document.write(numeroDos + " es el numero menor")
}

/* Ej 6
Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
*/
document.write("<br>")


/* Ej 7
Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
*/
document.write("<br>")

var diaSemana = prompt("Ingresa un dia de la semana").toLocaleLowerCase();

if (diaSemana = "lunes"){
    document.write("Odio los lunes... Donde estara mi lasagna")
}

/* Ej 8
    Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
*/
document.write("<br>")

var calificacion = Marth.round(prompt("Ejercicio 8. /nIngresa una numero de calificacion entre 1 y 10:"));

if (calificacion < 1 && calificacion > 10){
    alert
}

/* Ej #?
Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5. 
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué: 
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
*/
document.write("<br>")

var vehiculo = parseInt(prompt("Cual es tu vehiculo? coche, moto o autobus"));
var litrosConsumidos = parseInt(prompt("Cuantos litros fueron consumidos?"))

if (vehiculo = "coche" && litrosConsumidos ){
}

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")

/* Ej 

*/
document.write("<br>")
