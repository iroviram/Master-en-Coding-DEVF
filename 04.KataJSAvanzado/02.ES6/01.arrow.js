/* ARROW FUNCTIONS */

// CODIGO EN JS VANILLA
function suma(a,b){
    return a+b;
}
console.log('Suma', suma(10,30))

// USO DE FUNCIONES ANONIMAS

const sumaDos = function (a,b){
    return a+b;
}
console.log('SumaDos', sumaDos(10,30))

// ES6: ARROW FUNCTIONS
// No necesito escribir la palabra function (sugar syntax)

const sumaTres = (a,b) => {
    return a+b;
}
console.log('SumaTres', sumaTres(10,30))

// Se puede simplificar mas el uso de Arrow Functions

const sumaCuatro = (a,b) => a+b;
console.log('SumaCuatro', sumaCuatro(10,30))

// Un ejemplo de uso comun de Arrow Function forEach()

const miArray = ["Perros","Gatos","Patos","Ratones"];
miArray.forEach((element)=>console.log(element));