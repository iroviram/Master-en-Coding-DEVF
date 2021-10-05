/*
EJERCICIOS PILAS 

1.- Hacer una función que reciba como parámetros una pila, y un número.
La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]
*/

class Stack {
    //Crear nuestro constructor
    constructor(){
        this.stack=[['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4];
    }

    salida(){
        for (let i = 0; i < this.stack[1]; i++) {
            console.log(this.stack[0][i])
        }
    }
}
const stack = new Stack();
stack.salida();