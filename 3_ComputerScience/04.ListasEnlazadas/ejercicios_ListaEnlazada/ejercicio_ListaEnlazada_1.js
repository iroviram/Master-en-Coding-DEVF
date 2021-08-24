/*
*   EJERCICIOS DE LA CLASES
*   Listas Enlazadas

?   1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addEnd(data){
        const node = new Node(data);
        let currentNode = this.head;
        let previousNode = null;

        if(this.head === null){
            this.head = node;
        }else{
            while(currentNode.data !== data && currentNode.next !== null){
                previousNode = currentNode;
                currentNode.data = currentNode.next;
            }
            return "numero repetido";
        }
    }

    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

const lista = new LinkedList();

lista.addEnd(100);
lista.addEnd(200);
lista.addEnd(300);
lista.print();

console.log(lista.addEnd(500));
lista.print();