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

    addStart(data){
        const node = new Node(data);

        if(!this.head){
            this.head = node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.length++;
    }

    addEnd(data){
        const node = new Node(data);

        if(this.head === null){
            this.head = node;
        }else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode=currentNode.next;
            }
            currentNode.next=node;
        }
        this.length++;
    }

    delete(data){
        let currentNode = this.head;
        let previousNode = null;

        if(currentNode.data === data){
            this.head=currentNode.next;
        }else{
            while(currentNode.data !== data && currentNode.next !== null){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return "la data " + data + " ha sido eliminada";
    }

    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data)
            currentNode = currentNode.next;
        }
    }
}

const lista = new LinkedList();

lista.addStart(50);
lista.addStart(100);
lista.addEnd(10);
console.log(lista);

console.log(lista.delete(100));
console.log(lista);
lista.print();