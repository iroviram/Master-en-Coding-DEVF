//* CODIGO DE BUBBLE SORT

function bubbleSort(vector){
    for(var i=0; i<vector.length; i++){
        for(var j=0; j<vector.length; j++){ //toma la posicion 0

            //* Comprobar si el valor actual es mayor que el siguiente
            if (vector[j] > vector[j+1]){
            var currentNumber = vector[j];

            //* Ahora la posicion actual va a obtener el valor de la siguiente posicion.
            //* Y la siguiente posicion obtiene el valor de la posicion actual.
            vector[j] = vector[j+1];
            
            //* Y la siguiente posicion obtiene el valor de la posicion actual.
            vector[j+1] = currentNumber;
            }
        }
    }
    return vector;
}

const myArray = [10,4,40,32,67,12,43,31,65,1];
console.log(bubbleSort(myArray))