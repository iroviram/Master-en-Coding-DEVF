//* PASOS PARA DESARROLLAR EL CODIGO DE ARBOL BINARIO
//* TENDREMOS DOS CLASES:
    //* class Node { constructor(data, left, right) }
    //* class Tree { constructor() } aqui vamos a partir de la raiz

//? CADA CLASE TENDRA SUS METODOS DE SER NECESARIO

class Node{
    constructor(data,left,right){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class Tree{
    constructor(){ //CONSTRUIR NUESTRO ARBOL BINARIO
        this.root=null;
    }
    //VAMOS A TENER COMO METODOS PRINCIPALES:
    // agregar -> add: se va a encargar de agregar un dato
    // continene -> contains: verificar si un nodo existe respecto a un dato

    add(data){
        //primero debemos verificar si root esta vacia: this.root;
        if(this.root===null){
            //crear un nuevo nodo
            this.root = new Node(data,null,null);
            return;
        }
        //si no esta vacio
        //crear un apuntador (currentNode) a mi raiz
        let currentNode = this.root;
        //agregar un ciclo mientras cada nodo se cree
        while(true){
            //si la data de mi nuevo nodo es menor que la data en mi nodo actual
            if(data < currentNode.data){
                //revisamos si el nodo izquierdo esta vacio
                if(currentNode.left != null){
                    //mi nodo actual lo vamos a asignar a la izquierda
                    currentNode = currentNode.left;
                }else{
                    currentNode.left = new Node(data,null,null);
                    return currentNode.left; //break, return hace la misma funcionalidad
                }
            }else{
                //revisamos si el mnodo derecho esta vacio
                if (currentNode.right !== null) {
                    //agregar nuestro nuevo nodo
                    currentNode = currentNode.right;
                }else{
                    currentNode.right = new Node(data,null,null)    
                    return currentNode.right;
                }
            }
        }
    }

    contains(data){
        //asignar al nodo actual el principal
        let currentNode = this.root;
        //mientras el nodo actual exista
        while(currentNode !== null){
            //si la data es iguala nuestro nodo actual (currentNode)
            if (data === currentNode.data) {
                //devolver verdadero
                return true;
            }else{
                //si mi dato no es igual
                if (data < currentNode.data) {
                    //asignando el apuntador a la izquierda
                    //currentNode igual a currentNode.left
                    currentNode = currentNode.left;
                }else{
                    //asignar el apuntador a la derecha
                    //currentNode igual a currentNode.right
                    currentNode = currentNode.right;
                }
            }
        }
        return false;
    }
}

//AGREGANDO DATA
const nodo = new Tree();
nodo.add(12);
nodo.add(53);
nodo.add(11);
nodo.add(10);
nodo.add(23);
nodo.add(13);
nodo.add(55);
console.log(nodo)