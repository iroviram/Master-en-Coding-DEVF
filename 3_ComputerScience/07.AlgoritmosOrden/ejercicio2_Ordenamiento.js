//? Ejercicios ordenamiento

//* 2. Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/
//*     a. Ej. Entrada ---> ['b','h','w','e','a']
//*     b. Salida ----> ['a','b','e','h','w']

function bubbleSort(vector){
    for(var i=0; i<vector.length; i++){
        for(var j=0; j<vector.length; j++){
            let itemA = vector[j].charCodeAt(0);
            let itemB = vector[j+1].charCodeAt(0);
            if (itemA > itemB){
                var currentLetter = vector[j];
                vector[j] = vector[j+1];
                vector[j+1] = currentLetter;
                console.log(itemA,itemB);
            }
        }
    }
    return vector;
}

const myArray = ['b','h','w','e','a'];
console.log(bubbleSort(myArray))

var myVar = ['b','h','w','e','a'];
var myVarAscii = myVar[3].charCodeAt(0);
console.log(myVarAscii)