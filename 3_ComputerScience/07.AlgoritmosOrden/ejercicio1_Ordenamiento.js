//? Ejercicios ordenamiento

//* 1. Crea una función que ordene de forma descendente  un arreglo de números
//*     a. Ej. Entrada --> [9,3,1,6,5,88,-1,2,7] 
//*     b. Salida → [88,9,7,6,5,3,1,-1]

function bubbleSort(vector){
    for(var i=vector.length; i>=0; i--){
        for(var j=vector.length; j>=0; j--){
            if (vector[j] > vector[j-1]){
            var currentNumber = vector[j];
            vector[j] = vector[j-1];
            vector[j-1] = currentNumber;
            }
        }
    }
    return vector;
}

const myArray = [9,3,1,6,5,88,-1,2,7];
console.log(bubbleSort(myArray))