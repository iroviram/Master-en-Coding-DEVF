// HOISTING (DECLARACION CORRECTA DE VARIABLES)

/* var nombre; //DECLARO MI VARIABLE
var nombre = "JUAN"; // ASIGNANDO UN VALOR A ESA VARIABLE
console.log(nombre) */

// EJEMPLOS DE CLASE
// Hacer una funcion que sume dos numeros y me retorne la suma de esos dos numeros

// CON PARAMETROS

/* function Suma(num1, num2){
    // TODO ESTO ES MI BLOQUE DE CODIGO
    // ALCANCE (SCOPE) LOCAL
    var total = num1 + num2;
    //console.log("LA SUMA ES: " + total)
    return "LA SUMA ES: " + total
}
Suma(2, 2)
console.log(Suma(2,2)) */

// SIN PARAMETROS
// ALCANCE (SCOPE) GLOBAL
/*     var x = parseInt(prompt("INGRESA EL PRIMER NUMERO"))
    var y = parseInt(prompt("INGRESA EL SEGUNDO NUMERO"))

    function Sumar(){
        var total = x + y;
        console.log("LA SUMA ES: " + total)
    }
    Sumar() */

/*
Hacer una funcion que pida a un usuario su
edad y saber si es mayor o menor de edad, siel 
usuario ingresa un valor no valido,
imprimir una advertencia.
*/
// DECLARAR FUNCION
// VARIABLE LOCAL
// EL USUARIO DEBE INGRESAR SU EDAD
// USAR CONDICIONALES


function MayorEdad(){
    var edad = prompt("HOLA, CUANTOS ANOS TIENES?")
    if (edad >=18){
        console.log("ERES MAYOR DE EDAD")
    }else if (edad < 18) {
        console.log("ERES MENOR DE EDAD")
    }else {
        console.log("ESTO NO ES UNA EDAD VALIDA")
    }
}
MayorEdad()

// EXPRESION DE FUNCIONES
// var estudiante = funcion(){
    
// }