class Consola{
    constructor(nombre, videojuegos, disponibilidad, precio){
        this.nombre=nombre
        this.videojuegos=videojuegos
        this.disponibilidad=disponibilidad
        this.precio=precio
    }
    Disponible(){
        if(this.disponibilidad){
            return (`La Consola ${this.nombre} esta disponible actualmente. Por un precio de $${this.precio}`)
        }else{
            return (`La Consola ${this.nombre} no esta disponible actualmente`)
        }
    }
    Incluye(){
        if(this.disponibilidad){
            return (`La consola ${this.nombre} incluye los juegos ${this.videojuegos[0]}, ${this.videojuegos[1]}, ${this.videojuegos[2]}`)
        }else{
            return (`Me encantaria decirte que juegos se incluyen, pero la consola no esta disponible 😔`)
        }
    }
}
let xboxOne=new Consola("Xbox One", ["Grand Theft Auto", "Naruto Storm", "Fifa 21"], true, "200")
let xboxSeriesX=new Consola("Xbox Series X", ["Farcry", "Warzone", "Fifa 21"], false, "500")
let xboxSeriesS=new Consola("Xbox Series S", ["Final Fantasy", "Farm Simulator", "Fifa 21"], true, "300")