// EJEMPLO 1) STACK OBJETO

class PilasObjeto{

    constructor(){
        this.stack = {}; //aqui vamos a guardar los elementos
        this.count = 0; //vamos a guardar cuantos elementos
    }

    //Vamos a tener nuestros elementos

    push(element){
        this.stack[this.count] = element
        this.count++;
        return this.stack;
    }

    pop(){
        this.count--; //Funciona como un contador: ++ incrementar, -- decremento
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return this.stack;
    }

    peek(){
        return this.stack[this.count - 1]
    }

    size(){
        return this.count
    }

    print(){
        console.log(this.stack)
    }
}

// INGRESAR NUESTROS DATOS

const stack = new PilasObjeto();
console.log(stack.size()) // 0
console.log(stack.push('JOHN CENA'))
console.log(stack.size())
console.log(stack.push('REY MISTERIO'))
console.log(stack.size())
console.log(stack.push('THE ROCK'))
console.log(stack.push('EDIE GUERRERO'))
console.log(stack.size())
stack.print()

// ARGUMENTS => EXPRESAR UN OBJETO COMO SI FUERA UN ARREGLO;

// UTILIZAR POP Y PEEK EN NUESTRO OBJETO

console.log(stack.peek())
stack.print()
console.log(stack.size())
console.log(stack.pop())
console.log(stack.size())