//? 2.- Crear una función que busque el numero más grande en un arreglo
//* 	Ej [1,4,7,2,4,1,9,4,0,2,4,5,12]
//* 	Salida -> 12

// Busqueda Secuencial

const inputArray = [1,4,7,2,4,1,9,4,0,2,4,5,12];

function searchHighestNumber(array){

    let currentHighNumber = 0;
    for(let i=0; i < array.length; i++){
        if(currentHighNumber < array[i]){
            currentHighNumber = array[i];
        }
    }
    console.log(currentHighNumber)
}

searchHighestNumber(inputArray);

// Busqueda Binaria

function binarySearchLetter(array){

    array.sort((a, b) => a - b);
    //* 	Ej [0,1,1,1,2,2,4,4,4,5,7,9,12]
    let max= array.length - 1;
    console.log(array[max])
}

binarySearchLetter(inputArray)