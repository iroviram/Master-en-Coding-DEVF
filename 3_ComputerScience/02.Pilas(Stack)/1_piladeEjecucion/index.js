function multiplicar(numero1,numero2){
    return numero1 * numero2;
}

function doble(numero){
    return multiplicar(numero, 2);
}

let resultado = doble(7)
console.log("El doble de 7 es " + resultado)