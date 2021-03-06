//* CREAR NUESTRA CLASE LLAMADA NODO
//* EL NODO ES LA INFORMACION DEL ELEMENTO
//* TIENE UN APUNTADOR (O ENLACE) AL SIGUIENTE NODO

class Node {
    constructor(data){
        this.data=data; //en data guardamos cualquier objeto que queramos
        this.next=null; //por defecto este es null
                        //es quien nos indica si hay un nodo siguiente o no
    }
}

//? VAMOS A CREAR NUESTRA CLASE LISTA ENLAZADA
//? UNA LISTA ENLAZADA DEBE TENER UNA CABEZERA (head)
//? TIENE UN TAMANO DE LISTA (Length)

//? Las operaciones que se pueden hacer con una lista son:
//? -AGREGAR UN ELEMENTO (add)
//?     -al principio
//?     -al final
//? -BORRAR UN ELEMENTO (delete)
//? -BUSCAR UN ELEMENTO (indice) -> getIndex

//* VAMOS A CREAR NUESTRA LISTA ENLAZADA

class LinkedList{
    //estas son las propiedades de mi lista
    constructor(){
        this.head=null; //esto significa que no hay nada en la lista
        this.length=0; // no hay cierta cantidad de elementos dentro de la lista
    }

    //METODOS
    isEmpty(){
        return this.head === null;
    }

    //METODOS DE NUESTRA LISTA
    addStart(data){
        const node = new Node(data) //creamos nuestro nodo con su dato
        if(!this.head){ //VERDADERO TU LISTA ESTA VACIA
        this.head=node;
        }else{
            node.next=this.head; //hacemos un pequeno recorrido, tomando el inicio del nodo y la posicion actual
                                 //que se va a seguir al siguiente nodo
            this.head=node; //nuevo nodo
        }

        //para saber cuantos elementos tengo en mi lista
        //aumento en uno el numero de elementos dentro de mi lista
        this.length++
    }

    addEnd(data){
        const node = new Node(data); //{data: dato, next: null}
        if(this.head === null){
            this.head=node; //asignamos el primed nodo como la cabeza de la lista
        }else{
            //en este else nosotros ya sabemos que existe this.head
            let currentNode = this.head;

            //while: mientras (se cumpla la condicion) {HACE ESTO}
            while(currentNode.next){
                //verificar si next tiene un nodo
                currentNode = currentNode.next; //sustituyo el nodo que vive en next a mi nodo actual
            }
            //cuando next sea nulo, entonces se sale del while y continua con el resto del codigo
            currentNode.next=node;
        }
        this.length++;
    }

    delete(data){
        //verificar que dato va a ser borrado
        let currentNode = this.head;
        let previousNode = null; //almacenar el nodo con que tengo que reconectar
        if(currentNode.data===data){
            this.head=currentNode.next; //reasigno la cabeza de mi nodo
        }else{
            //Estamos haciendo otro recorrido, puesto que estamos borrando nodos
            while (currentNode.data !== data && currentNode.next !== null) {
                previousNode = currentNode; //el currentNode se convierte en el previousNode
                currentNode = currentNode.next; //pasar al siguiente nodo
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return "la data " + data + " ha sido eliminada";
    }

    get(index){
        //              0       o   index mayor
        if (this.head === null || index > this.length) {
            return null;
        }else{
            // 1 -> 2 -> 3
            let counter = 1;
            let currentNode = this.head;
            while (counter !== index) {
                counter++;
                currentNode=currentNode.next;
            }
            return currentNode;
        }
    }

    print(){
            //nodo actual
        let currentNode = this.head; //tomamos la cabecera
        while (currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.next;
        }
    }
}

//AGREGANDO DATA A NUESTROSO NODOS
const listaNumeros = new LinkedList();
console.log(listaNumeros.isEmpty()) //TRUE

listaNumeros.addStart(100);
listaNumeros.addStart(200);
listaNumeros.addStart(300);
listaNumeros.addStart(400);
console.log("NODO: ", listaNumeros)
listaNumeros.print();

/* listaNumeros.addEnd(100);
listaNumeros.addEnd(200);
listaNumeros.addEnd(300);
listaNumeros.addEnd(400);
console.log("NODO: ", listaNumeros)
listaNumeros.print();
 */

//ELIMINANDO DATA A NUESTROS NODOS
console.log("ELIMINADO", listaNumeros.delete(100))
console.log("NODO ACTUAL: ", listaNumeros)
listaNumeros.print();

//BUSCARA UN NODO POR SU INDICE
console.log("TRAER EL INDICE 2",listaNumeros.get(1))
console.log(listaNumeros.delete(300))
listaNumeros.print();