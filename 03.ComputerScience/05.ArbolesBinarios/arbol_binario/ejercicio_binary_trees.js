/*
Arboles binarios
Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
Escribe una función que visualice los nodos que están en el nivel n de un árbol binario. 
Escribe una función que devuelva el número de hojas de un árbol binario.
*/

class Node{
    constructor(data,left,right){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class TreeA{
    constructor(){
        this.root=null;
    }

    add(data){
        if(this.root===null){
            this.root = new Node(data,null,null);
            return;
        }

        let currentNode = this.root;
        while(true){
            if(data < currentNode.data){
                if(currentNode.left != null){
                    currentNode = currentNode.left;
                }else{
                    currentNode.left = new Node(data,null,null);
                    return currentNode.left;
                }
            }else{
                if (currentNode.right !== null) {
                    currentNode = currentNode.right;
                }else{
                    currentNode.right = new Node(data,null,null)    
                    return currentNode.right;
                }
            }
        }
    }

    contains(data){
        let currentNode = this.root;
        while(currentNode !== null){
            if (data === currentNode.data) {
                return true;
            }else{
                if (data < currentNode.data) {
                    currentNode = currentNode.left;
                }else{
                    currentNode = currentNode.right;
                }
            }
        }
        return false;
    }
}

class TreeB{
    constructor(){
        this.root=null;
    }

    cloneTree(data){
        /* if (this.root ==null){
            return null;
        }
        
        let currentNodeA = new TreeA(this.root);
        let currentNodeB = this.root;
        currentNodeB = currentNodeA;
        currentNodeB.left = currentNodeA.left;
        currentNodeB.right = currentNodeA.right;
        return currentNodeB; */
        TreeB = new TreeA();
    }

    print(){
        console.log(nodoB);
    }
}

const nodoA = new TreeA();
const nodoB = new TreeB();
nodoA.add(12);
nodoA.add(53);
nodoA.add(11);
console.log(nodoA)
nodoB.cloneTree();
nodoB.print();