/*
EJERCICIOS DE CLASE (QUEUES):

2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
Cola: [
{ user:‘User1’, ticket:true },
{ user:‘User2’, ticket:true },
{ user:‘User3’, ticket:false },
{ user:‘User4’, ticket:true },
{ user:‘User5’, ticket:false },
{ user:‘User6’, ticket:false },
{ user:‘User7’, ticket:true },
{ user:‘User8’, ticket:true },
{ user:‘User9’, ticket:true },
{ user:‘User10’, ticket:false },
{ user:‘User11’, ticket:true },
];
*/

class Colas{
    constructor(){
        //vamos a trabajar un arreglo
        this.ticketQueue = [
            { user:'User1', ticket:true },
            { user:'User2', ticket:true },
            { user:'User3', ticket:false },
            { user:'User4', ticket:true },
            { user:'User5', ticket:false },
            { user:'User6', ticket:false },
            { user:'User7', ticket:true },
            { user:'User8', ticket:true },
            { user:'User9', ticket:true },
            { user:'User10', ticket:false },
            { user:'User11', ticket:true },
        ];
        this.ticketFalse = [];
    }
    //Metodos

    checkTickets(){
        for (let i = this.ticketQueue.length; i > 0; i--) {
            if (this.ticketQueue[0].ticket === true) {
                this.ticketQueue.push(this.ticketQueue[0])
                this.ticketQueue.shift()
            } else {
                this.ticketFalse.push(this.ticketQueue[0])
                this.ticketQueue.shift()
            }
        }
    }

    front(){//trae el peek o primer elemento
        return this.ticketQueue[0]
    }

    print(){
        console.table('Tickets Reales',this.ticketQueue)
        console.table('Tickets Falsos',this.ticketFalse)
    }

}

const queue = new Colas();

console.log(queue.front())

queue.print()
queue.checkTickets()
queue.print()