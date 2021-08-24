// EJEMPLO 1) STACK ARRAY

class Stack {
    //Crear nuestro constructor
    constructor(){
        this.stack=[]; //vamos a llenar o poblar un arreglo vacio
    }

    //vamos a tener nuestros metodos

    push(element){ //Apila cosas nuevas o datos nuevos a mi pila, los va a ubicar al final de esta.
        this.stack.push(element)
        return this.stack;
    }

    pop(){ //Regresa el ultimo valor ingresado a la pila, saca el elemento de la pila
        return this.stack.pop()
    }

    peek(){ //Retorna el ultimo valor ingresado a la pila, no lo saca de esta
        return this.stack[this.stack.length - 1]
    }

    size(){ //Retorna el numero de elementos que contiene la pila
        return this.stack.length;
    }

    print(){ //Muestra el contenido de la pila
        console.log(this.stack)
    }

}

//INGRESAR DATOS
//APILANDO E IMPRIMIENDO DATOS EN NUESTRA PILA
const stack = new Stack();
console.log(stack.size()) //0
console.log(stack.push('ROJO'))
console.log(stack.push('AMARILLO'))
console.log(stack.size())
stack.print()


// DESAPILAR DATOS EN NUESTRA PILA
console.log(stack.pop())
console.log(stack.size())
stack.print()

console.log(stack.push('CAFE'))
console.log(stack.push('GRIS'))

//VAMOS A MOSTRAR UN DATO PERO NO LO VAMOS A SACAR
// DE NUESTRA PILA
console.log(stack.peek())
stack.print()