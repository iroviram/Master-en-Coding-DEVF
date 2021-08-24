//* CODIGO DE BUSQUEDA SECUENCIAL

//* TIENEQUE DEVOLVER LA POSICION EN QUE SE ENCUENTRA EL ELEMENTO A BUSCAR

function busquedaSecuencial(array,elementoBuscar){
    //? array
    //? elemento a buscar
    //? tamano de nuestro arreglo

    const tamanio = array.length;
    for(var i=0; i<tamanio; i++){
        if(array[i] === elementoBuscar){
            return i;
        }
    }
    return -1;
}
            //   0,1,2,3 (posicion)
const miArray = [3,4,7,8,2,10,5,6];
            //        =8

console.log(busquedaSecuencial(miArray,8)) //devuelve el 8 -> posicion 3
console.log(busquedaSecuencial(miArray,11))//NO EXISTE EL DATO DENTRO DEL ARREGLO, devuelve -1

console.log(miArray.indexOf(8))