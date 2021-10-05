/*
EJERCICIOS DE CLASE (QUEUES):

1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]
*/

class Colas{
    constructor(){
        //vamos a trabajar un arreglo
        this.queueOriginal = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
        this.queue1Par = [];
        this.queue2Odd = [];
    }
    //Metodos

    divideQueues(){
        for (let i = this.queueOriginal.length; i > 0; i--) {
            if (this.queueOriginal.length%2 == 0) {
                this.queue1Par.push(this.queueOriginal[0])
                this.queueOriginal.shift()
            } else {
                this.queue2Odd.push(this.queueOriginal[0])
                this.queueOriginal.shift()
            }
        }
    }

    print(){
        console.log("Cola Original: " + this.queueOriginal)
        console.log("Cola1 pares: " + this.queue1Par)
        console.log("Cola2 nones: " + this.queue2Odd)
    }

}

const queue = new Colas();
queue.print()
queue.divideQueues()
queue.print()